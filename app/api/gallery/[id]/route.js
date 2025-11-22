// app/api/gallery/[id]/route.js
import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Gallery from "@/models/Gallery";
import fs from "fs";
import path from "path";

export async function DELETE(req, { params }) {
  await connectDB();
  try {
    const item = await Gallery.findById(params.id);
    if (!item) return NextResponse.json({ error: "Not found" }, { status: 404 });

    // attempt to delete file on disk if it's under /uploads
    try {
      if (item.image && item.image.startsWith("/uploads/")) {
        const filePath = path.join(process.cwd(), "public", item.image);
        if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
      }
    } catch (e) {
      console.warn("Failed to delete file:", e.message);
    }

    await Gallery.findByIdAndDelete(params.id);
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed" }, { status: 500 });
  }
}
