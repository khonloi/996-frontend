"use client";

import React, { useRef, useState, useEffect, useCallback } from 'react';
import { Product } from '@/lib/api';
import ProductCard from '@/components/product/ProductCard';

interface ProductGridProps {
  title?: string;
  products: Product[];
}

export default function ProductGrid({ title = 'Trending Now', products }: ProductGridProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [pagesCount, setPagesCount] = useState(1);

  const updateScrollState = useCallback(() => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      const maxScrollLeft = scrollWidth - clientWidth;
      const totalPages = Math.ceil(scrollWidth / clientWidth) || 1;
      
      let pageIndex = 0;
      if (maxScrollLeft > 0) {
        pageIndex = Math.min(
          Math.round((scrollLeft / maxScrollLeft) * (totalPages - 1)),
          totalPages - 1
        );
      }
      
      setPagesCount(totalPages);
      setCurrentIndex(pageIndex);
    }
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    updateScrollState();
    
    // Create resize observer to handle layout changes dynamically
    const observer = new ResizeObserver(updateScrollState);
    observer.observe(el);

    el.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);

    return () => {
      observer.disconnect();
      el.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, [updateScrollState]);

  const handleDotClick = (index: number) => {
    if (scrollRef.current) {
      const { scrollWidth, clientWidth } = scrollRef.current;
      const maxScrollLeft = scrollWidth - clientWidth;
      const totalPages = Math.ceil(scrollWidth / clientWidth) || 1;
      if (totalPages > 1) {
        const scrollTo = (index / (totalPages - 1)) * maxScrollLeft;
        scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
      }
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' 
        ? scrollLeft - clientWidth * 0.75 
        : scrollLeft + clientWidth * 0.75;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  const getNavBtnClasses = (count: number) => {
    if (count <= 2) return "hidden";
    if (count <= 3) return "flex md:hidden";
    if (count <= 5) return "flex lg:hidden";
    return "flex";
  };

  return (
    <section>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
        {products.length > 0 && (
          <div className={`${getNavBtnClasses(products.length)} gap-2`}>
            <button 
              onClick={() => scroll('left')}
              className="w-10 h-10 rounded-full border border-gray-200 bg-white flex items-center justify-center text-gray-600 hover:bg-gray-50 hover:text-brand-primary hover:border-brand-primary active:scale-95 transition-all shadow-xs cursor-pointer"
              aria-label="Previous Product"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>
            <button 
              onClick={() => scroll('right')}
              className="w-10 h-10 rounded-full border border-gray-200 bg-white flex items-center justify-center text-gray-600 hover:bg-gray-50 hover:text-brand-primary hover:border-brand-primary active:scale-95 transition-all shadow-xs cursor-pointer"
              aria-label="Next Product"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>
        )}
      </div>

      {products.length > 0 ? (
        <>
          <div 
            ref={scrollRef}
            className="flex gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar pb-2"
          >
            {products.map((item) => (
              <div 
                key={item.id} 
                className="w-[calc(50%-8px)] md:w-[calc(33.333%-16px)] lg:w-[calc(20%-19.2px)] flex-shrink-0 snap-start"
              >
                <ProductCard product={item} />
              </div>
            ))}
          </div>

          {/* Indicators */}
          {pagesCount > 1 && (
            <div className="flex justify-center gap-1.5 items-center mt-6">
              {Array.from({ length: pagesCount }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => handleDotClick(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                    idx === currentIndex
                      ? "w-5 bg-brand-primary"
                      : "w-1.5 bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
          )}
        </>
      ) : (
        <p className="text-gray-500">No trending products available right now.</p>
      )}
    </section>
  );
}
