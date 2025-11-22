// app/api/gallery/route.js
import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Gallery from "@/models/Gallery";

export async function GET() {
  await connectDB();
  const items = await Gallery.find().sort({ createdAt: -1 });
  return NextResponse.json(items);
}

export async function POST(req) {
  await connectDB();
  try {
    const body = await req.json(); // expects { image: "/uploads/..." }
    if (!body?.image) return NextResponse.json({ error: "No image provided" }, { status: 400 });
    const created = await Gallery.create({ image: body.image });
    return NextResponse.json(created);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed" }, { status: 500 });
  }
}
