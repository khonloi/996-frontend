"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Tag,
  ShoppingBag,
  Sparkles,
  Percent,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

interface HeroSlide {
  id: string;
  badgeText?: string;
  badgeColor?: string;
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
  bgGradient: string;
  imageNode?: React.ReactNode;
  align?: "left" | "center" | "right";
}

// Feel free to add, remove or customize these slides to your liking!
const SLIDES: HeroSlide[] = [
  {
    id: "rollback",
    badgeText: "LIMITED TIME",
    badgeColor: "bg-red-500 text-white",
    title: "Rollbacks & More Savings",
    subtitle:
      "Get the items you love at the prices you expect. Shop our latest deals and save big today.",
    buttonText: "Shop Deals",
    buttonLink: "/deals",
    bgGradient: "from-brand-primary to-emerald-700",
    align: "center",
    imageNode: (
      <div className="text-white/30 flex flex-col items-center select-none">
        <Percent className="w-16 h-16 md:w-20 md:h-20 mb-3 animate-pulse text-brand-accent" />
        <span className="font-semibold text-xs md:text-sm tracking-wider text-center">
          UP TO 50% OFF
        </span>
      </div>
    ),
  },
  {
    id: "organic",
    badgeText: "100% ORGANIC",
    badgeColor: "bg-brand-accent text-brand-dark",
    title: "Fresh & Healthy Harvest",
    subtitle:
      "Farm-fresh vegetables, organic fruits, and premium greens delivered straight to your doorstep.",
    buttonText: "Shop Fresh",
    buttonLink: "/category/grocery",
    bgGradient: "from-emerald-600 to-teal-800",
    align: "center",
  },
  {
    id: "delivery",
    badgeText: "FREE SHIPPING",
    badgeColor: "bg-yellow-400 text-black",
    title: "Free Delivery On First Order",
    subtitle:
      "Join our membership today and get free contactless shipping on your first 3 grocery orders.",
    buttonText: "Join 996+",
    buttonLink: "/membership",
    bgGradient: "from-green-600 via-teal-600 to-cyan-700",
    align: "center",
    imageNode: (
      <div className="text-white/30 flex flex-col items-center select-none">
        <ShoppingBag className="w-16 h-16 md:w-20 md:h-20 mb-3 animate-pulse text-brand-accent" />
        <span className="font-semibold text-xs md:text-sm tracking-wider text-center">
          FREE EXPRESS SHIPPING
        </span>
      </div>
    ),
  },
];

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? "100%" : "-100%",
    opacity: 0,
  }),
};

export default function HeroBanner() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right
  const [isHovered, setIsHovered] = useState(false);
  const autoplayTimer = useRef<NodeJS.Timeout | null>(null);

  const handleNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % SLIDES.length);
  }, []);

  const handlePrev = useCallback(() => {
    setDirection(-1);
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + SLIDES.length) % SLIDES.length,
    );
  }, []);

  const handleDotClick = (index: number) => {
    if (index === currentIndex) return;
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  // Autoplay Logic
  useEffect(() => {
    if (isHovered) {
      if (autoplayTimer.current) clearInterval(autoplayTimer.current);
      return;
    }

    autoplayTimer.current = setInterval(() => {
      handleNext();
    }, 5000);

    return () => {
      if (autoplayTimer.current) clearInterval(autoplayTimer.current);
    };
  }, [isHovered, handleNext]);

  const activeSlide = SLIDES[currentIndex];

  return (
    <section
      className="relative w-full h-[320px] md:h-[360px] rounded-2xl overflow-hidden shadow-lg group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Slides with Framer Motion */}
      <div className="relative w-full h-full overflow-hidden">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 32 },
              opacity: { duration: 0.25 },
            }}
            className={`absolute inset-0 flex flex-col p-8 md:p-10 bg-gradient-to-r ${activeSlide.bgGradient} ${
              activeSlide.align === "center"
                ? "items-center justify-center text-center"
                : activeSlide.align === "right"
                  ? "md:flex-row-reverse items-center justify-between"
                  : "md:flex-row items-center justify-between"
            }`}
          >
            {/* Text Content Column */}
            <div
              className={`z-10 text-white max-w-lg flex flex-col select-none ${
                activeSlide.align === "center"
                  ? "items-center text-center w-full"
                  : activeSlide.align === "right"
                    ? "items-end text-right"
                    : "items-start text-left"
              }`}
            >
              {activeSlide.badgeText && (
                <span
                  className={`text-[10px] md:text-xs font-bold px-2.5 py-0.5 rounded-full mb-3 shadow-sm tracking-wider uppercase ${activeSlide.badgeColor || "bg-white/20"}`}
                >
                  {activeSlide.badgeText}
                </span>
              )}
              <h1 className="text-2xl md:text-4xl font-bold mb-3 leading-tight tracking-tight">
                {activeSlide.title}
              </h1>
              <p
                className={`text-xs md:text-sm text-white/80 mb-5 ${
                  activeSlide.align === "center"
                    ? "max-w-md mx-auto"
                    : "max-w-sm"
                }`}
              >
                {activeSlide.subtitle}
              </p>
              <Link
                href={activeSlide.buttonLink}
                className="bg-brand-accent hover:bg-yellow-300 text-brand-dark font-bold py-2 px-6 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200 text-xs md:text-sm"
              >
                {activeSlide.buttonText}
              </Link>
            </div>

            {/* Media Placeholder Column (Only shown for left/right alignments when imageNode is provided) */}
            {activeSlide.align !== "center" && activeSlide.imageNode && (
              <div className="relative hidden md:flex w-full md:w-5/12 aspect-square max-h-[180px] bg-white/10 rounded-2xl items-center justify-center border border-white/5 backdrop-blur-xs select-none">
                {activeSlide.imageNode}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Controls: Navigation & Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-4">
        {/* Previous Button */}
        <button
          onClick={handlePrev}
          aria-label="Previous Slide"
          className="w-7 h-7 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        {/* Indicators */}
        <div className="flex gap-1.5 items-center">
          {SLIDES.map((slide, idx) => (
            <button
              key={slide.id}
              onClick={() => handleDotClick(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                idx === currentIndex
                  ? "w-5 bg-white"
                  : "w-1.5 bg-white/40 hover:bg-white/60"
              }`}
            />
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={handleNext}
          aria-label="Next Slide"
          className="w-7 h-7 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}
