// lib/mail.js
"use client"; // optional if you use browser code; not needed for server

import nodemailer from "nodemailer";

export async function sendNotificationEmail({ to, subject, html }) {
  const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST || "smtp.gmail.com",
    port: process.env.MAIL_PORT ? parseInt(process.env.MAIL_PORT) : 465,
    secure: process.env.MAIL_SECURE ? process.env.MAIL_SECURE === "true" : true,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  if (!process.env.MAIL_USER || !process.env.MAIL_PASS) {
    console.warn("Mail creds not set; skipping email");
    return null;
  }

  const info = await transporter.sendMail({
    from: `"Panthera Website" <${process.env.MAIL_USER}>`,
    to,
    subject,
    html,
  });
  return info;
}
