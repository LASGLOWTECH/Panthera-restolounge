// /models/Menu.js
import mongoose from "mongoose";

const MenuSchema = new mongoose.Schema({
  title: { type: String, required: true },
  category: String,
  description: String,
  price: Number,
  images: [String],
  featured: { type: Boolean, default: false },
  available: { type: Boolean, default: true }
}, { timestamps: true });

export default mongoose.models.Menu || mongoose.model("Menu", MenuSchema);
