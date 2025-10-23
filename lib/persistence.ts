import { promises as fs } from "fs";
import path from "path";
import { randomUUID } from "crypto";
import { MongoClient } from "mongodb";

function resolvePath(target: string) {
  return path.isAbsolute(target) ? target : path.join(process.cwd(), target);
}

const storageDir = (() => {
  const customPath = process.env.DATA_STORAGE_PATH;
  if (customPath && customPath.trim() !== "") {
    return resolvePath(customPath.trim());
  }
  if (process.env.VERCEL) {
    return path.join("/tmp", "sweetcrumb-storage");
  }
  return path.join(process.cwd(), "data", "storage");
})();

let cachedClient: MongoClient | null = null;

async function ensureStorageDir() {
  try {
    await fs.mkdir(storageDir, { recursive: true });
  } catch (error) {
    const code = (error as NodeJS.ErrnoException).code;
    if (code !== "EEXIST") {
      console.error("Failed to ensure storage directory", error);
    }
  }
}

async function getMongoClient() {
  if (!process.env.MONGO_URI) return null;

  if (cachedClient) {
    return cachedClient;
  }

  cachedClient = new MongoClient(process.env.MONGO_URI);
  await cachedClient.connect();
  return cachedClient;
}

export async function saveDocument<T extends Record<string, unknown>>(
  collection: string,
  payload: T
) {
  const client = await getMongoClient();
  const document = { ...payload, createdAt: new Date() };

  if (client) {
    const db = client.db(process.env.MONGO_DB ?? "sweetcrumb");
    const result = await db.collection(collection).insertOne(document);
    return { id: result.insertedId.toString() };
  }

  await ensureStorageDir();
  const filePath = path.join(storageDir, `${collection}.json`);
  let existing: unknown[] = [];
  try {
    const content = await fs.readFile(filePath, "utf8");
    existing = JSON.parse(content);
  } catch (error) {
    const code = (error as NodeJS.ErrnoException).code;
    if (code !== "ENOENT") {
      console.warn(`Unable to read local storage file for ${collection}`, error);
    }
    existing = [];
  }

  const id = randomUUID();
  existing.push({ ...document, id });
  try {
    await fs.writeFile(filePath, JSON.stringify(existing, null, 2));
  } catch (error) {
    console.error(`Failed to persist document for ${collection}`, error);
  }
  return { id };
}

export async function listDocuments(collection: string) {
  const client = await getMongoClient();
  if (client) {
    const db = client.db(process.env.MONGO_DB ?? "sweetcrumb");
    const docs = await db
      .collection(collection)
      .find({}, { sort: { createdAt: -1 } })
      .toArray();
    return docs.map((doc) => ({ ...doc, id: doc._id?.toString() }));
  }

  const filePath = path.join(storageDir, `${collection}.json`);
  try {
    const content = await fs.readFile(filePath, "utf8");
    return JSON.parse(content);
  } catch (error) {
    const code = (error as NodeJS.ErrnoException).code;
    if (code !== "ENOENT") {
      console.warn(`Unable to read local storage file for ${collection}`, error);
    }
    return [];
  }
}
