import { promises as fs } from "fs";
import path from "path";
import { randomUUID } from "crypto";
import { MongoClient } from "mongodb";

const storageDir = path.join(process.cwd(), "data", "storage");

let cachedClient: MongoClient | null = null;

async function ensureStorageDir() {
  await fs.mkdir(storageDir, { recursive: true });
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
    existing = [];
  }

  const id = randomUUID();
  existing.push({ ...document, id });
  await fs.writeFile(filePath, JSON.stringify(existing, null, 2));
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
    return [];
  }
}
