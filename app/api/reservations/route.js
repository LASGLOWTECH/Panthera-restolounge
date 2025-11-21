// /app/api/reservations/route.js
import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Reservation from "@/models/Reservation";
import { sendWhatsAppMessage } from "@/lib/whatsapp";
import { sendNotificationEmail } from "@/lib/mail";

export async function POST(req) {
  try {
    await connectDB();
    const body = await req.json();
    const reservation = await Reservation.create(body);

    // Prepare message
    const message = `NEW RESERVATION
Name: ${body.name}
Phone: ${body.phone}
Guests: ${body.guests}
Date: ${body.date}
Time: ${body.time}
Request: ${body.request || "None"}`;

    // Send WhatsApp (async, but we await to catch errors)
    try {
      await sendWhatsAppMessage(process.env.CLIENT_WHATSAPP_NUMBER, message);
    } catch (wErr) {
      console.error("WhatsApp error:", wErr?.response?.data || wErr.message);
      // Continue even if WhatsApp fails
    }

    // Send Email
    try {
      await sendNotificationEmail({
        to: process.env.NOTIFY_EMAIL,
        subject: "New Reservation Received",
        html: `<h2>New Reservation</h2>
<p><strong>Name:</strong> ${body.name}</p>
<p><strong>Phone:</strong> ${body.phone}</p>
<p><strong>Guests:</strong> ${body.guests}</p>
<p><strong>Date:</strong> ${body.date}</p>
<p><strong>Time:</strong> ${body.time}</p>
<p><strong>Request:</strong> ${body.request || "None"}</p>`
      });
    } catch (mErr) {
      console.error("Email error:", mErr);
    }

    return NextResponse.json({ success: true, reservation });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed" }, { status: 500 });
  }
}
