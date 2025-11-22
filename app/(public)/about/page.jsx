"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import heroImg from "@/public/assets/hero.jpg";
import chefImg from "@/public/assets/hero2.jpg";
import ambianceImg from "@/public/assets/hero.jpg";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const AboutUs = () => {
  return (
    <div className="bg-dark text-white font-inter">

      {/* Hero Section */}
      <section className="relative h-[90vh] w-full">
        <Image
          src={heroImg}
          alt="Panthera Lounge"
          className="object-cover w-full h-full brightness-20"
          fill
          priority
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
          <motion.h1
            className="text-5xl md:text-6xl  font-serif font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            About Panthera Lounge
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl max-w-2xl text-gray-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            Where exquisite Panthera Restolounge,  cuisine meets crafted cocktails in a luxurious atmosphere.
          </motion.p>
        </div>
      </section>

      {/* Our Story */}
      <motion.section
        className="py-20 px-6 md:px-16 bg-dark-bg text-footer-text text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <motion.div className="max-w-5xl mx-auto space-y-12">
          <h2 className="text-4xl font-semibold text-footer-accent mb-6 tracking-wide">
            Our Story
          </h2>
          <p className="text-footer-text text-lg font-light">
            Panthera Lounge was born from a passion for culinary excellence and unforgettable experiences.
            Our chefs combine traditional techniques with modern innovation to create dishes that delight every sense.
          </p>
          <p className="text-footer-text text-base leading-relaxed">
            Nestled in the heart of Maitama, Panthera RestoLounge is Abuja’s emerging icon of luxury dining, curated entertainment, and refined social culture. Designed for those who appreciate excellence, Panthera blends the artistry of gourmet cuisine with the vibrant energy of a modern lounge — creating a seamless day-to-night hospitality experience.
          </p>
          <p className="text-footer-text text-base leading-relaxed">
            From handcrafted cocktails and premium wine selections to signature dishes inspired by global culinary excellence, every detail at Panthera is intentionally crafted. Our ambiance is elegant yet warm, our music refined yet alive, and our service deeply personalised for guests who value exclusivity, comfort, and class.
          </p>
          <div className="mt-8 flex justify-center">
            <div className="relative w-full md:w-3/4 rounded-xl shadow-[0_15px_40px_rgba(0,0,0,0.6)] bg-white/5">
              <Image
                src={ambianceImg}
                alt="Panthera Restolounge Ambiance"
                className="rounded-lg object-cover w-full aspect-video md:aspect-[4/3]"
                placeholder="blur"
                loading="lazy"
              />
              <div className="absolute bottom-6 left-6 bg-footer-accent text-dark-bg text-xs font-semibold uppercase tracking-wider p-2 rounded-lg shadow-xl">
           Panthera RestoLounge 
              </div>
            </div>
          </div>
          <p className="text-footer-text text-base leading-relaxed font-semibold text-footer-accent mt-6">
            Panthera RestoLounge  Inspired by excellence, driven by experience.
          </p>
        </motion.div>
      </motion.section>

      {/* Vision & Mission */}
      <motion.section
        className="py-20 px-6 md:px-16 max-w-7xl mx-auto bg-dark-bg rounded-lg text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <h2 className="text-4xl font-bold text-footer-accent mb-12">Vision & Mission</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
            <p className="text-gray-300">
              To be the premier destination for luxury dining, combining exceptional cuisine, impeccable service, and a sophisticated atmosphere that leaves a lasting impression on every guest.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
            <p className="text-gray-300">
              To deliver an unparalleled dining experience by blending culinary artistry, innovation, and sustainable practices, while fostering a welcoming environment where guests feel celebrated and valued.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Meet Our Team */}
      <motion.section
        className="py-20 px-6 md:px-16 max-w-7xl mx-auto bg-dark-bg rounded-lg text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <h2 className="text-4xl font-bold text-footer-accent mb-12">Meet Our Team</h2>
        <div className="grid md:grid-cols-3 gap-12 text-center">
          {["Chef Antonio", "Chef Maria", "John Doe"].map((name, idx) => (
            <motion.div
              key={idx}
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
            >
              <Image
                src={chefImg}
                alt={name}
                className="rounded-full w-48 h-48 object-cover mb-4 shadow-lg"
                placeholder="blur"
              />
              <h3 className="text-xl font-semibold mb-1">{name}</h3>
              <p className="text-gray-300 text-sm">
                {idx === 0
                  ? "Executive Chef & Culinary Director"
                  : idx === 1
                  ? "Sous Chef & Pastry Specialist"
                  : "Bar Manager & Mixologist"}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Our Values */}
      <motion.section
        className="py-20 px-6 md:px-16 max-w-7xl mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <h2 className="text-4xl font-bold text-footer-accent mb-12">Our Values</h2>
        <div className="grid md:grid-cols-3 gap-12 text-center">
          <div>
            <h3 className="text-2xl font-semibold mb-2">Excellence</h3>
            <p className="text-gray-300">We strive for perfection in every dish, cocktail, and experience we offer.</p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-2">Innovation</h3>
            <p className="text-gray-300">Blending classic techniques with modern flair to keep our menu dynamic and exciting.</p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-2">Sustainability</h3>
            <p className="text-gray-300">We source responsibly, reduce waste, and care for the environment as part of our ethos.</p>
          </div>
        </div>
      </motion.section>

      {/* CTA / Reservations */}
      <motion.section
        className="py-20 px-6 md:px-16 bg-footer-accent rounded-lg text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl font-bold mb-6 text-dark">Experience Luxury Dining</h2>
        <p className="text-dark mb-8 max-w-xl mx-auto">
          Reserve your table today and immerse yourself in the elegance of Panthera Lounge.
        </p>
        <a
          href="/reservations"
          className="px-8 py-4 bg-dark text-footer-accent font-semibold rounded-full hover:bg-gray-800 transition duration-300"
        >
          Book Now
        </a>
      </motion.section>

    </div>
  );
};

export default AboutUs;
