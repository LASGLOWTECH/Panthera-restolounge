"use client";
import { useState } from "react";

import { FaMapMarkerAlt, FaPhoneAlt, FaPaperPlane, FaEnvelope, FaLinkedin, FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa';
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
    <div className="min-h-screen bg-black/90 text-white pt-32 py-6 md:px-20 p-6">
      <h1 className="text-3xl font-bold mb-3 pt-6 md:text-center">Get In Touch</h1>


     
      <p className="text-textcolor2 max-w-xl md:text-center md:place-self-center text-normal mb-10">We’d love to hear from you! on any of our services, need support, or want to discuss a new project, our team is here to help.</p>

      {/* icons */}
      <div className=" md:place-items-center grid grid-cols-1 md:grid-cols-3 py-6  items-center justify-center mx-auto space-y-4 text-sm">

        <div className="flex  gap-3">

          < div className='flex items-center  rounded-md bg-dark  shadow-amber-300 shadow-md justify-center p-3 gap-3'>
            <FaEnvelope className="text-gold2 text-lg md:text-2xl mt-1" />
          </div>

          <div>
            <p className="font-semibold text-base text-gold">Email</p>
            <p className="text-textcolor2 text-small">lasglowtech@gmail.com</p>
          </div>
        </div>
        <div className="flex items-center gap-3">

          < div className='flex items-center  rounded-md  bg-dark  shadow-amber-300 shadow-md  justify-center p-3 gap-3'>
            <FaPhoneAlt className="text-gold   md:text-2xl text-lg mt-1" />
          </div>

          <div>
            <p className="text-textcolor2 text-small">Phone Number</p>
            <p className="text-textcolor2 text-small">+234 903 182 1590</p>
          </div>
        </div>


        <div className="flex items-start gap-3">

          < div className='flex items-center  bg-dark  shadow-amber-300 shadow-md  rounded-md justify-center p-3 gap-3'>
            <FaMapMarkerAlt className="text-gold  text-lg md:text-2xl   mt-1" />
          </div>
          <div>
            <p className="font-semibold  text-base text-textcolor2">Address</p>
            <p className="text-textcolor2 text-small">Gwarinpa, FCT Abuja</p>
          </div>
        </div>
      </div>



      <form onSubmit={handleSubmit} className="w-full md:px-16 mx-auto grid gap-4">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          className="p-3 rounded bg-gray-800 focus:outline-none focus:ring-2 "
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
