// app/api/reservations/route.js
import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Reservation from "@/models/Reservation";
import { sendNotificationEmail } from "@/lib/mail";


import { sendWhatsAppCloud, makeWaMeLink } from "@/lib/whatsapp";
import { requireToken } from "@/lib/auth";

export async function POST(req) {
  await connectDB();
  try {
    const body = await req.json();
    const created = await Reservation.create(body);

    // prepare message
    const msg = `New Reservation
Name: ${body.name}
Phone: ${body.phone}
Guests: ${body.guests}
Date: ${body.date}
Time: ${body.time}
Request: ${body.request || "None"}`;

    // Email (best-effort)
    try {
      await sendNotificationEmail({
        to: process.env.NOTIFY_EMAIL,
        subject: "New Reservation - Panthera",
        html: `<pre>${msg}</pre>`,
      });
    } catch (e) {
      console.error("Email send failed:", e.message || e);
    }

    // WhatsApp (prefer cloud API if credentials present, otherwise return wa.me link)
    let waResult = null;
    try {
      if (process.env.WHATSAPP_PHONE_ID && process.env.WHATSAPP_TOKEN && process.env.CLIENT_WHATSAPP_NUMBER) {
        // use helper
        await sendWhatsAppCloud({
          phoneId: process.env.WHATSAPP_PHONE_ID,
          token: process.env.WHATSAPP_TOKEN,
          toNumber: process.env.CLIENT_WHATSAPP_NUMBER,
          message: msg,
        });
        waResult = { sent: true };
      } else {
        waResult = { link: makeWaMeLink(process.env.CLIENT_WHATSAPP_NUMBER || "", msg) };
      }
    } catch (e) {
      console.error("WhatsApp error:", e.message || e);
      waResult = { error: e.message || "failed" };
    }

    return NextResponse.json({ success: true, reservation: created, whatsapp: waResult });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed" }, { status: 500 });
  }
}

// Admin GET listing: protected by token in Authorization header
export async function GET(req) {
  await connectDB();
  try {
    requireToken(req); // will throw if invalid
    const list = await Reservation.find().sort({ createdAt: -1 });
    return NextResponse.json(list);
  } catch (e) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
}
