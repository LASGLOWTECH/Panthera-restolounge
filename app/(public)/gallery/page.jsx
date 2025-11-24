"use client";

import React from "react";
import Image from "next/image";

// Import your gallery images
import img1 from "@/public/assets/food1.jpg";
import img2 from "@/public/assets/hero.jpg";
import img3 from "@/public/assets/hero.jpg";
import img4 from "@/public/assets/hero.jpg";
import img5 from "@/public/assets/hero3.jpg";
import img6 from "@/public/assets/hero.jpg";
// Add more images as needed

const galleryImages = [img1, img2, img3, img4, img5, img6];

export default function GalleryPage() {
  return (
    <section className="py-16 md:py-36 px-6 md:px-16 bg-dark text-white">
      <h2 className="text-4xl md:text-5xl font-serif font-bold uppercase text-gold mb-12 tracking-wider text-center">
        Our Gallery
      </h2>

      <div
        className="grid gap-1 auto-rows-[200px] md:auto-rows-[250px] lg:auto-rows-[300px] 
                   grid-cols-2 sm:grid-cols-3 md:grid-cols-4"
      >
        {galleryImages.map((img, index) => (
          <div
            key={index}
            className="relative w-full h-full rounded-xl overflow-hidden shadow-lg  shadow-black hover:scale-105 transition-transform duration-300 cursor-pointer"
          >
            <Image
              src={img}
              alt={`Gallery Image ${index + 1}`}
              className="object-cover w-full h-full"
              placeholder="blur"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
