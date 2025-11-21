// /lib/whatsapp.js
import axios from "axios";

const API = "https://graph.facebook.com/v18.0";

export async function sendWhatsAppMessage(toNumber, message) {
  const phoneId = process.env.WHATSAPP_PHONE_ID;
  const token = process.env.WHATSAPP_TOKEN;
  if (!phoneId || !token) throw new Error("WhatsApp credentials missing");

  const payload = {
    messaging_product: "whatsapp",
    to: toNumber,
    type: "text",
    text: { body: message },
  };

  const res = await axios.post(`${API}/${phoneId}/messages`, payload, {
    headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
  });
  return res.data;
}
