'use client';

import { motion, Variants } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

interface HeroSectionProps {}

const transitionVariants: Variants = {
  hidden: { opacity: 0, filter: 'blur(4px)', y: 20 },
  visible: {
    opacity: 1,
    filter: 'blur(0px)',
    y: 0,
    transition: {
      type: 'spring', // ✅ "spring" or "tween"
      bounce: 0.25,
      duration: 0.5,
    },
  },
};

export const HeroSection: React.FC<HeroSectionProps> = () => {
  return (
    <section className="relative bg-gray-100 min-h-screen flex flex-col justify-center items-center">
      <div className="mx-auto max-w-7xl px-6 text-center">
        {/* Hero Heading */}
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={transitionVariants}
          className="text-5xl font-bold mb-6"
        >
          Welcome to Start Page
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
          }}
          className="text-xl mb-8"
        >
          Your awesome landing page powered by Next.js & Framer Motion
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.5 } },
          }}
          className="flex justify-center gap-4"
        >
          <Link href="#explore">
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
              Start Exploring
            </button>
          </Link>
          <Link href="#contact">
            <button className="px-6 py-3 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400 transition">
              Contact Us
            </button>
          </Link>
        </motion.div>

        {/* Optional Image */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { delay: 0.4, duration: 0.5 } },
          }}
          className="mt-12"
        >
          <Image
            src="/hero-image.png"
            alt="Hero"
            width={600}
            height={400}
            className="mx-auto rounded-lg shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
};
