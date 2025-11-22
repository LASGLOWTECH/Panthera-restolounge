"use client";
import { useState } from "react";

export default function ReservationsPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    guests: "",
    date: "",
    time: "",
    request: "",
  });

  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/reservations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setSuccess("Reservation submitted successfully!");
        setError("");
        setForm({ name: "", phone: "", guests: "", date: "", time: "", request: "" });
      } else {
        const data = await res.json();
        setError(data.error || "Submission failed");
        setSuccess("");
      }
    } catch (err) {
      setError("Server error");
      setSuccess("");
    }
  };

  return (
    <div className="min-h-screen bg-black text-white py-32 px-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Book a Reservation</h1>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto grid gap-4">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          className="p-3 rounded bg-dark focus:outline-none focus:ring-2"
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={form.phone}
          onChange={handleChange}
          className="p-3 rounded bg-gray-800 focus:outline-none focus:ring-2"
          required
        />
        <input
          type="number"
          name="guests"
          placeholder="Number of Guests"
          value={form.guests}
          onChange={handleChange}
          className="p-3 rounded bg-gray-800 focus:outline-none focus:ring-2"
          required
        />
        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
          className="p-3 rounded bg-gray-800"
          required
        />
        <input
          type="time"
          name="time"
          value={form.time}
          onChange={handleChange}
          className="p-3 rounded bg-gray-800"
          required
        />
        <textarea
          name="request"
          placeholder="Special Requests"
          value={form.request}
          onChange={handleChange}
          className="p-3 rounded bg-gray-800"
        />
        <button className="bg-gold2 hover:bg-gold p-3 rounded font-bold">
          Submit Reservation
        </button>
        {success && <p className="text-green-400">{success}</p>}
        {error && <p className="text-red-500">{error}</p>}
      </form>
    </div>
  );
}
