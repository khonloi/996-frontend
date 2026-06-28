import React from "react";
import { Tag } from "lucide-react";
import { Product } from "@/lib/api";
import Link from "next/link";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link 
      href={`/products/${product.id}`}
      className="bg-white rounded-xl border border-gray-200 p-4 hover:border-brand-primary transition-colors relative flex flex-col h-full block"
    >
      {/* Featured Tag */}
      <div className="absolute top-2 left-2 bg-brand-primary text-white text-xs font-bold px-2 py-1 rounded-md z-10 shadow-sm">
        {product.category?.name || "Featured"}
      </div>

      <div className="aspect-square bg-white rounded-lg flex items-center justify-center overflow-hidden p-4">
        {product.images && product.images.length > 0 ? (
          <img
            src={product.images[0]}
            alt={product.name}
            className="object-contain w-full h-full"
          />
        ) : (
          <Tag className="text-gray-300 w-12 h-12" />
        )}
      </div>

      <div className="flex flex-col flex-1">
        <h3 className="font-medium text-sm text-gray-800 mb-2 line-clamp-2 hover:underline">
          {product.name}
        </h3>
        <div className="flex items-end gap-2 mb-4 mt-auto">
          <span className="text-xl font-bold text-brand-primary">
            ${Number(product.price).toFixed(2)}
          </span>
        </div>
        <button 
          onClick={(e) => {
            e.preventDefault(); // Prevent navigating when clicking Add to Cart
            // Add to cart logic here
          }}
          className="w-full border border-gray-300 rounded-full py-2 text-sm font-semibold hover:border-brand-primary hover:text-brand-primary transition-colors mt-auto cursor-pointer"
        >
          Add to Cart
        </button>
      </div>
    </Link>
  );
}
