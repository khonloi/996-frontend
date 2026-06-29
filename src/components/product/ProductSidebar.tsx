"use client";

import React from "react";
import { Info, RotateCcw, Heart, Gift, Package } from "lucide-react";

interface ProductSidebarProps {
  currentPrice: number;
  seller?: string;
  stock: number;
}

export default function ProductSidebar({
  currentPrice,
  seller = "Brand Store",
  stock = 0,
}: ProductSidebarProps) {
  const priceNum = Number(currentPrice) || 0;
  const stockNum = Number(stock) || 0;

  return (
    <div className="bg-white border-none md:border md:border-gray-200 md:rounded-lg p-0 md:p-6 flex flex-col gap-6">
      {/* Pricing */}
      <div>
        <div className="flex items-baseline gap-2">
          <span className="text-3xl font-extrabold text-brand-primary tracking-tight">
            ${priceNum.toFixed(2)}
          </span>
        </div>
      </div>

      {/* Add to Cart Button */}
      <button className="w-full bg-brand-primary hover:bg-brand-dark text-white font-bold py-3 px-4 rounded-full transition-colors cursor-pointer">
        Add to cart
      </button>

      {/* Divider */}
      <hr className="border-gray-200" />

      {/* Stock & Shipping */}
      <div className="flex flex-col gap-3">
        {stockNum > 0 ? (
          <span
            className={`${stockNum < 5 ? "text-amber-600" : "text-brand-primary"} font-bold text-sm`}
          >
            {stockNum < 5
              ? `Low stock: only ${stockNum} left`
              : `${stockNum} available`}
          </span>
        ) : (
          <span className="text-red-700 font-bold text-sm">Out of stock</span>
        )}

        <div className="flex gap-3 items-start">
          <Package className="w-5 h-5 text-gray-400 shrink-0 mt-0.5" />
          <div className="text-sm text-gray-700">
            Sold and shipped by <span className="font-semibold">{seller}</span>
          </div>
        </div>

        <a
          href="#"
          className="text-sm text-gray-600 hover:text-brand-primary underline ml-8"
        >
          Report an issue with seller or item
        </a>

        <div className="flex gap-3 items-start">
          <RotateCcw className="w-5 h-5 text-brand-primary shrink-0 mt-0.5" />
          <div className="text-sm text-gray-700">
            <span className="font-semibold">Free 90-day returns</span>{" "}
            <a
              href="#"
              className="underline text-brand-primary hover:text-brand-dark"
            >
              Details
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-gray-200" />

      {/* Secondary Actions */}
      <div className="flex items-center justify-between text-sm text-gray-700 font-medium px-2">
        <button className="flex items-center gap-2 hover:underline hover:text-brand-primary cursor-pointer">
          <Heart className="w-5 h-5" />
          Add to list
        </button>
        <button className="flex items-center gap-2 hover:underline hover:text-brand-primary cursor-pointer">
          <Gift className="w-5 h-5" />
          Add to registry
        </button>
      </div>
    </div>
  );
}
