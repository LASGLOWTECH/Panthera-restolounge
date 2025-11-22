"use client";
import { useState } from "react";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/auth/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });
    if (res.ok) {
      // redirect to /admin
      window.location.href = "/admin";
    } else {
      const data = await res.json();
      setError(data.error || "Login failed");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-800 p-8 rounded shadow-md w-full max-w-sm">
      <h2 className="text-2xl font-bold mb-4">Admin Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full p-3 mb-3 rounded bg-gray-700"
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full p-3 mb-3 rounded bg-gray-700"
        required
      />
      <button className="w-full p-3 bg-green-600 hover:bg-green-700 rounded font-bold">
        Login
      </button>
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </form>
  );
}
