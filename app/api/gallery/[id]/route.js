export const runtime = "nodejs";
export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import formidable from "formidable";
import fs from "fs";
import path from "path";

export async function POST(req) {
  const uploadDir = path.join(process.cwd(), "public/uploads");

  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
  }

  const form = formidable({
    multiples: false,
    uploadDir: uploadDir,
    keepExtensions: true,
  });

  return new Promise((resolve, reject) => {
    form.parse(req, (err, fields, files) => {
      if (err) reject(err);

      const file = files.image;
      const filePath = "/uploads/" + path.basename(file.filepath);

      resolve(
        NextResponse.json({
          success: true,
          url: filePath,
        })
      );
    });
  });
}
