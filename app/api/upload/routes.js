// /app/api/upload/route.js
import multer from "multer";
import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";

const uploadPath = path.join(process.cwd(), "public/uploads");
if (!fs.existsSync(uploadPath)) fs.mkdirSync(uploadPath, { recursive: true });

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadPath);
  },
  filename: function (req, file, cb) {
    const unique = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const ext = path.extname(file.originalname);
    cb(null, unique + ext);
  },
});

const upload = multer({ storage });

export const POST = async (req) => {
  return new Promise((resolve, reject) => {
    upload.single("image")(req, {}, (err) => {
      if (err) {
        console.error(err);
        return reject(NextResponse.json({ error: "Upload failed" }, { status: 500 }));
      }
      const file = req.file;
      const url = `/uploads/${file.filename}`;
      resolve(NextResponse.json({ url }));
    });
  });
};
