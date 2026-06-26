import React from "react";
import { Tag } from "lucide-react";

export default function HeroBanner() {
  return (
    <section className="bg-brand-primary rounded-lg overflow-hidden relative flex flex-col md:flex-row items-center justify-between p-8 md:p-12">
      <div className="z-10 text-white max-w-lg mb-8 md:mb-0">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
          Rollbacks &<br />
          More Savings
        </h1>
        <p className="text-lg md:text-xl text-blue-100 mb-6">
          Get the items you love at the prices you expect. Shop our latest
          deals.
        </p>
        <button className="bg-brand-accent text-black font-bold py-3 px-8 rounded-full hover:bg-yellow-400 transition-colors">
          Shop Deals
        </button>
      </div>
      <div className="relative w-full md:w-1/2 aspect-video md:aspect-square max-h-[300px] bg-white/10 rounded-xl flex items-center justify-center">
        {/* Placeholder for an actual hero image */}
        <div className="text-white/50 flex flex-col items-center">
          <Tag className="w-24 h-24 mb-4" />
          <span className="font-medium text-xl">Featured Items</span>
        </div>
      </div>
    </section>
  );
}
