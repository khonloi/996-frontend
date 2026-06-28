import React from "react";
import { Star, StarHalf } from "lucide-react";

interface ProductHeaderProps {
  title: string;
  seller?: string;
  rating?: number;
  reviewsCount?: number;
}

export default function ProductHeader({
  title,
  seller = "Brand Store",
  rating = 4.5,
  reviewsCount = 120,
}: ProductHeaderProps) {
  // Simple logic to render stars based on rating
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  
  return (
    <div className="flex flex-col gap-3">
      {/* Badges */}
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-brand-primary bg-green-50 border border-green-200 text-xs font-semibold px-2 py-1 rounded">
          100+ bought since yesterday
        </span>
        <span className="bg-brand-dark text-white text-xs font-semibold px-2 py-1 rounded">
          Overall pick
        </span>
      </div>

      {/* Store Link */}
      <a href="#" className="text-sm text-gray-600 hover:text-brand-primary underline underline-offset-2">
        Visit the {seller} Store
      </a>

      {/* Title */}
      <h1 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
        {title}
      </h1>

      {/* Ratings */}
      <div className="flex items-center gap-2 mt-1">
        <div className="flex items-center text-[#ffc220]">
          {[...Array(fullStars)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-current" />
          ))}
          {hasHalfStar && <StarHalf className="w-4 h-4 fill-current" />}
          {/* Fill remaining stars with gray if rating < 5, omitted for simplicity assuming >= 4.5 usually */}
        </div>
        <span className="text-sm font-medium text-gray-700">({rating.toFixed(1)})</span>
        <span className="text-sm text-gray-400">|</span>
        <a href="#reviews" className="text-sm text-gray-600 hover:underline hover:text-brand-primary">
          {reviewsCount.toLocaleString()} ratings
        </a>
      </div>
    </div>
  );
}
