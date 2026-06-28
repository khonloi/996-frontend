"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface ProductDetailsAccordionProps {
  features?: string[];
  specs?: Record<string, string>;
  title?: string; // used for a fallback text if needed
}

export default function ProductDetailsAccordion({
  features = [
    "Includes 7 glass containers and 7 lids",
    "Non-porous glass won't absorb stains or odors",
    "BPA-free plastic lids",
    "Oven-, microwave-, refrigerator- and freezer-safe",
    "Dishwasher-safe",
    "2-year limited warranty on glass vessels; 1-year limited warranty on plastic lids",
  ],
  specs = {
    "Brand": "Pyrex",
    "Material": "Glass",
    "Color": "Clear/Blue",
    "Number of Pieces": "14",
  },
  title = "Pyrex Simply Store 14-piece Set"
}: ProductDetailsAccordionProps) {
  
  // Custom Accordion Item Component
  const AccordionItem = ({ 
    title, 
    defaultOpen = false, 
    children 
  }: { 
    title: string; 
    defaultOpen?: boolean; 
    children: React.ReactNode 
  }) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    return (
      <div className="border border-gray-200 rounded-lg mb-3 overflow-hidden bg-white">
        <button
          className="w-full flex items-center justify-between p-4 bg-white hover:bg-green-50/20 transition-colors cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
        >
          <span className="font-bold text-gray-900">{title}</span>
          {isOpen ? (
            <ChevronUp className="w-5 h-5 text-brand-primary" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-400" />
          )}
        </button>
        {isOpen && (
          <div className="p-4 pt-0 border-t border-gray-100 bg-white">
            {children}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="mt-6 flex flex-col">
      <AccordionItem title="Key item features" defaultOpen={true}>
        <div className="mt-2">
          <p className="font-semibold text-gray-900 mb-2">{title}:</p>
          <ul className="list-disc pl-5 space-y-1 text-gray-700 text-sm">
            {features.map((feature, idx) => (
              <li key={idx}>{feature}</li>
            ))}
          </ul>
          <div className="mt-4">
            <a href="#" className="text-sm text-brand-primary underline hover:text-brand-dark">
              View all item details
            </a>
          </div>
        </div>
      </AccordionItem>

      <AccordionItem title="Specs">
        <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-4 text-sm text-gray-700">
          {Object.entries(specs).map(([key, value]) => (
            <div key={key} className="flex flex-col">
              <span className="font-semibold text-gray-900">{key}</span>
              <span>{value}</span>
            </div>
          ))}
        </div>
      </AccordionItem>

      <AccordionItem title="Reviews summary">
        <div className="mt-2 text-sm text-gray-700">
          <p>Customer reviews are generally positive, highlighting the durability and versatility of the glass containers.</p>
          {/* Add more mock review data as needed */}
        </div>
      </AccordionItem>
    </div>
  );
}
