"use client";

import React, { useState } from "react";
import { Share, Heart, ZoomIn, Box, ChevronLeft, ChevronRight } from "lucide-react";

interface ProductGalleryProps {
  images: string[];
}

export default function ProductGallery({ images }: ProductGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // If no images are provided, use placeholders
  const displayImages = images.length > 0 ? images : [
    "https://placehold.co/800x800/0047b3/ffffff?text=Product+Image+1",
    "https://placehold.co/800x800/e6e6e6/666666?text=Product+Image+2",
    "https://placehold.co/800x800/e6e6e6/666666?text=Product+Image+3",
    "https://placehold.co/800x800/e6e6e6/666666?text=Product+Image+4",
    "https://placehold.co/800x800/e6e6e6/666666?text=Product+Image+5",
    "https://placehold.co/800x800/e6e6e6/666666?text=Product+Image+6",
  ];

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % displayImages.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + displayImages.length) % displayImages.length);
  };

  return (
    <div className="flex flex-col-reverse md:flex-row gap-4 w-full h-auto">
      {/* Thumbnails */}
      <div className="flex md:flex-col gap-3 overflow-x-auto md:overflow-y-auto no-scrollbar md:w-20 shrink-0">
        {displayImages.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`relative rounded-md overflow-hidden border-2 flex-shrink-0 w-16 h-16 md:w-20 md:h-20 transition-all ${
              idx === currentIndex ? "border-brand-primary" : "border-transparent hover:border-gray-300"
            }`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
            
            {/* "View all" overlay for the last thumbnail if there are many */}
            {idx === 5 && displayImages.length > 6 && (
              <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-white text-xs font-semibold">
                <span>+{displayImages.length - 6}</span>
                <span>View all</span>
              </div>
            )}
          </button>
        ))}
      </div>

      {/* Main Image Container */}
      <div className="relative flex-1 bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center aspect-square">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={displayImages[currentIndex]}
          alt="Product Main"
          className="w-full h-full object-cover md:object-contain"
        />

        {/* Action Buttons (Right Top) */}
        <div className="absolute top-4 right-4 flex flex-col gap-3">
          <button className="bg-white p-2 rounded-full shadow-md text-gray-700 hover:text-brand-primary transition-colors cursor-pointer">
            <Share className="w-5 h-5" />
          </button>
          <button className="bg-white p-2 rounded-full shadow-md text-gray-700 hover:text-red-500 transition-colors cursor-pointer">
            <Heart className="w-5 h-5" />
          </button>
          <button className="bg-white p-2 rounded-full shadow-md text-gray-700 hover:text-brand-primary transition-colors cursor-pointer">
            <ZoomIn className="w-5 h-5" />
          </button>
          <button className="bg-white p-2 rounded-full shadow-md text-gray-700 hover:text-brand-primary transition-colors cursor-pointer">
            <Box className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Arrows */}
        <button 
          onClick={prevImage}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 p-2 rounded-full shadow-md text-gray-700 hover:text-brand-primary transition-colors cursor-pointer"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button 
          onClick={nextImage}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 p-2 rounded-full shadow-md text-gray-700 hover:text-brand-primary transition-colors cursor-pointer"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}
