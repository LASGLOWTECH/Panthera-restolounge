"use client";
import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setSuccess("Message sent successfully!");
        setError("");
        setForm({ name: "", email: "", phone: "", message: "" });
      } else {
        const data = await res.json();
        setError(data.error || "Failed to send message");
        setSuccess("");
      }
    } catch (err) {
      setError("Server error");
      setSuccess("");
    }
  };

  return (
    <div className="min-h-screen bg-black/90 text-white pt-32 p-6">
      <h1 className="text-3xl font-bold mb-6 pt-6 text-center">Contact Us</h1>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto grid gap-4">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          className="p-3 rounded bg-gray-800"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={form.email}
          onChange={handleChange}
          className="p-3 rounded bg-gray-800"
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={form.phone}
          onChange={handleChange}
          className="p-3 rounded bg-gray-800"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          className="p-3 rounded bg-gray-800"
          required
        />
        <button className="bg-blue-600 hover:bg-blue-700 p-3 rounded font-bold">Send Message</button>
        {success && <p className="text-green-400">{success}</p>}
        {error && <p className="text-red-500">{error}</p>}
      </form>
    </div>
  );
}
