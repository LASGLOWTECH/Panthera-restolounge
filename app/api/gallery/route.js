// app/api/gallery/route.js
import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Gallery from "@/models/Gallery";
import fs from "fs";
import path from "path";
import formidable from "formidable";

// Disable Next.js default body parser for this route
export const config = {
  api: {
    bodyParser: false,
  },
};

export async function POST(req) {
  await connectDB();

  const form = formidable({ multiples: false, uploadDir: path.join(process.cwd(), 'public/uploads'), keepExtensions: true });

  return new Promise((resolve, reject) => {
    form.parse(req, async (err, fields, files) => {
      if (err) {
        console.error(err);
        return resolve(NextResponse.json({ error: "File upload failed" }, { status: 500 }));
      }

      if (!files.image) {
        return resolve(NextResponse.json({ error: "No image uploaded" }, { status: 400 }));
      }

      try {
        // Get the relative URL to save in MongoDB
        const file = files.image;
        const imagePath = `/uploads/${path.basename(file.filepath)}`;

        const created = await Gallery.create({ image: imagePath });
        return resolve(NextResponse.json(created));
      } catch (err) {
        console.error(err);
        return resolve(NextResponse.json({ error: "Failed to save image" }, { status: 500 }));
      }
    });
  });
}
