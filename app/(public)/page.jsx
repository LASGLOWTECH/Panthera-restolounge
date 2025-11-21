"use client";

import Link from "next/link";
import Button from "@/components/Button";
import PantheraServices from "@/components/OurServices"

import { motion } from "framer-motion";
import FoodShowcase from "@/components/FoodMenu"
import {  FAQSection  } from "@/utils/Faq";
export default function HomePage() {
  // Animation variants
  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.3 } },
  };

  const textVariantLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const textVariantRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 bg-[url('/assets/hero.jpg')] bg-center bg-cover brightness-15"></div>

        {/* Hero Content */}
        <div className="relative z-10 flex h-full items-center py-6 justify-center">
          <motion.div
            className="text-center max-w-3xl px-4 sm:px-6 md:px-8 lg:px-12"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              className="text-5xl sm:text-5xl md:text-6xl lg:text-[80px] xl:text-[100px] font-bold md:font-extrabold leading-tight sm:leading-tight md:leading-tight lg:leading-[70px] drop-shadow-lg mt-8 text-gold"
              variants={fadeIn}
            >
              Panthera Restolounge
            </motion.h1>

            <motion.p
              className="text-lg sm:text-xl md:text-xl max-w-2xl lg:text-2xl text-gold my-8"
              variants={fadeIn}
            >
              Experience elegance, flavors, and unforgettable nights.
            </motion.p>

            <motion.div variants={fadeIn}>
              <Button href="/reservations">Book a Table</Button>
            </motion.div>
          </motion.div>
        </div>
      </section>



      {/* Two-Column Section */}
      <section className="text-white py-16 md:py-24 bg-[url('/assets/hero4.jpg')] bg-center bg-cover">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="flex flex-col md:flex-row gap-10 md:gap-16 lg:gap-24"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Left Column */}
            <motion.div className="md:w-1/2 flex flex-col justify-center" variants={textVariantLeft}>
              <motion.h2
                className="text-3xl sm:text-4xl font-light tracking-widest uppercase mb-8"
                variants={fadeIn}
              >
                Panthera Restolounge: <span className="font-medium">TOP RESTAURANT IN Abuja</span>
              </motion.h2>

              <motion.p className="mb-6 text-lg font-light leading-relaxed" variants={fadeIn}>
                With surprising combinations and intense flavours, <strong>   Panthera Restolounge </strong> 
                cultivates a style that combines the Japanese subtlety for traditional and elegant dishes 
                with savoury elements from Peru. Whether it's tartar from Wagyu steak from the southernmost tip of Japan, 
                or pickled scallops, which are given a whole new taste thanks to Peruvian elements. 
                Food is grilled over an open fire on the Japanese <strong>Robata grill</strong> in a walk-in show kitchen.
              </motion.p>

              <motion.p className="text-lg font-light leading-relaxed" variants={fadeIn}>
                Be enchanted by the cosmopolitan atmosphere of our <strong>top restaurant in Hamburg</strong> 
                and enjoy the finest cuisine at <strong>Panthera Restolounge</strong> right by the <strong>Inner Alster Lake</strong>. 
                A DJ provides a contemporary soundtrack from Thursday to Saturday.
              </motion.p>
            </motion.div>

            {/* Right Column */}
            <motion.div className="md:w-1/2 relative min-h-[300px] md:min-h-[500px] lg:min-h-[600px]" variants={textVariantRight}>
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/assets/hero.jpg')" }}
              >
                <div className="absolute inset-0 bg-black opacity-10"></div>
              </div>

              <motion.div className="absolute bottom-0 right-0 transform translate-y-1/2" variants={fadeIn}>
                <button className="bg-gold2 hover:bg-gold text-dark tracking-widest uppercase font-medium py-3 px-6 text-sm transition duration-300 shadow-xl">
                  BOOK A TABLE
                </button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <PantheraServices/>
<FoodShowcase/>
<  FAQSection/>

    </>
  );
}
