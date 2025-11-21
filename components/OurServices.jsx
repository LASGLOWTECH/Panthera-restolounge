"use client";

import { FaUtensils, FaWineGlass, FaMusic } from "react-icons/fa";
import Image from "next/image";
import { motion } from "framer-motion";
import food1 from "@/public/assets/food1.jpg";

const services = [
  {
    icon: FaUtensils,
    title: "SIGNATURE GOURMET CUISINE",
    description:
      "Our chefs blend traditional techniques with modern innovation to create dishes inspired by global culinary excellence. We offer a menu designed to delight every sense, making every meal an unforgettable experience.",
    iconColor: "text-[#ff5e00]",
  },
  {
    icon: FaWineGlass,
    title: "HANDCRAFTED COCKTAILS & WINE",
    description:
      "Experience the blend of elegance and warmth in our ambiance. We feature a curated selection of handcrafted cocktails and premium wines, perfectly complementing our sophisticated day-to-night hospitality experience.",
    iconColor: "text-[#ff5e00]",
  },
  {
    icon: FaMusic,
    title: "CURATED ENTERTAINMENT & VIBE",
    description:
      "Designed for those who appreciate exclusivity and class, our lounge offers a vibrant energy with refined yet alive music. It is Abuja’s emerging icon for luxury dining and refined social culture.",
    iconColor: "text-[#ff5e00]",
  },
];

const PantheraServices = () => {
  return (
    <section className="bg-black text-white py-12 sm:py-16">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-stretch">
          
          {/* Right Column: Services */}
          <motion.div
            className="order-1 lg:order-2 flex flex-col justify-center mb-8 lg:mb-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gold2 mb-8 tracking-wider">
              OUR SERVICES
            </h2>

            <div className="space-y-6">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  className="flex bg-dark p-4 rounded-2xl items-start space-x-4 sm:space-x-6"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: 0.2 + index * 0.2, duration: 0.6, ease: "easeOut" }}
                >
                  {/* Icon */}
                  <div className="flex-shrink-0 p-3 rounded-lg bg-gradient-to-br from-amber-500 to-gold2 shadow-lg">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Text */}
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-1 tracking-wide">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Left Column: Image */}
          <motion.div
            className="order-2 lg:order-1 flex items-stretch"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="w-full h-full rounded-xl shadow-2xl overflow-hidden">
              <Image
                src={food1}
                alt="Panthera Restaurant Dish"
                className="w-full h-full object-cover"
                placeholder="blur"
                loading="lazy"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default PantheraServices;
