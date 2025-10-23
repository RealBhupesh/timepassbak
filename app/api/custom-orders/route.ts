import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import { z } from "zod";
import { saveDocument } from "@/lib/persistence";

const schema = z.object({
  name: z.string().min(2, "Please share your name."),
  email: z.string().email("Please provide a valid email."),
  phone: z.string().optional(),
  occasion: z.string().min(2, "Let us know what you're celebrating."),
  eventDate: z.string().min(1, "Select a date."),
  servings: z.string().min(1),
  flavorPreferences: z.string().min(2, "Tell us about your dream flavors."),
  notes: z.string().optional()
});

type StoredDesignReference = {
  fileName: string;
  size: number;
  mimeType: string;
  url?: string;
  base64?: string;
};

function resolveUploadDir() {
  const customDir = process.env.UPLOADS_DIR;
  if (customDir && customDir.trim() !== "") {
    return path.isAbsolute(customDir) ? customDir : path.join(process.cwd(), customDir);
  }
  if (process.env.VERCEL) {
    return path.join("/tmp", "sweetcrumb-uploads");
  }
  return path.join(process.cwd(), "public", "uploads");
}

async function storeUpload(file: File | null): Promise<StoredDesignReference | null> {
  if (!file || file.size === 0) return null;

  const buffer = Buffer.from(await file.arrayBuffer());
  const safeName = file.name.replace(/[^a-zA-Z0-9.\-]/g, "_");
  const fileName = `${Date.now()}-${safeName}`;
  const mimeType = file.type || "application/octet-stream";
  const customUploadDir = process.env.UPLOADS_DIR?.trim();
  const shouldInline = Boolean(process.env.VERCEL) && !customUploadDir;

  if (shouldInline) {
    return {
      fileName,
      size: file.size,
      mimeType,
      base64: buffer.toString("base64")
    };
  }

  const uploadDir = resolveUploadDir();
  try {
    await fs.mkdir(uploadDir, { recursive: true });
    const filePath = path.join(uploadDir, fileName);
    await fs.writeFile(filePath, buffer);

    let publicUrl: string | undefined;
    const publicRoot = path.join(process.cwd(), "public");
    if (filePath.startsWith(publicRoot)) {
      const relativePath = filePath.slice(publicRoot.length).replace(/\\/g, "/");
      publicUrl = relativePath.startsWith("/") ? relativePath : `/${relativePath}`;
    }

    return {
      fileName,
      size: file.size,
      mimeType,
      url: publicUrl ?? filePath
    };
  } catch (error) {
    console.error("Failed to store upload", error);
    return {
      fileName,
      size: file.size,
      mimeType,
      base64: buffer.toString("base64")
    };
  }
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const data = schema.parse({
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone") ?? undefined,
      occasion: formData.get("occasion"),
      eventDate: formData.get("eventDate"),
      servings: formData.get("servings"),
      flavorPreferences:
        (formData.getAll("flavorPreferences") as string[]).join(", ") ||
        (formData.get("flavorPreferences") as string | null) ||
        "",
      notes: formData.get("notes") ?? undefined
    });

    const designReference = await storeUpload(formData.get("designReference") as File | null);

    await saveDocument("customOrders", {
      ...data,
      designReference,
      preferredContact: formData.get("preferredContact") ?? "email",
      tastingRequested: formData.get("tastingRequested") === "on"
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ ok: false, errors: error.flatten() }, { status: 422 });
    }

    console.error("Custom order submission failed", error);
    return NextResponse.json({ ok: false, message: "Unable to submit custom order." }, { status: 500 });
  }
}
