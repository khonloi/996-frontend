import React from "react";
import { fetchProduct } from "@/lib/api";
import { notFound } from "next/navigation";
import ProductGallery from "@/components/product/ProductGallery";
import ProductHeader from "@/components/product/ProductHeader";
import ProductDetailsAccordion from "@/components/product/ProductDetailsAccordion";
import ProductSidebar from "@/components/product/ProductSidebar";

type Props = {
  params: Promise<{ id: string }> | { id: string };
};

export default async function ProductDetailPage(props: Props) {
  // Handle both Promise and object params for Next.js 14/15+ compatibility
  const params = await props.params;
  const id = params.id;

  const product = await fetchProduct(id);

  if (!product) {
    notFound();
  }

  // Use mock values or fallbacks if API doesn't provide them yet
  const rating = product.rating || 4.5;
  const reviewsCount = product.reviewsCount || 5873;
  const originalPrice =
    product.originalPrice || product.price + product.price * 0.3; // mock original price
  const seller = product.seller || "996";

  return (
    <div className="bg-white min-h-screen">
      <div className="w-full p-4 md:p-6 lg:p-8">
        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Left Column: Image Gallery (Span 6) */}
          <div className="lg:col-span-6">
            <ProductGallery images={product.images || []} />
          </div>

          {/* Middle Column: Product Info & Accordion */}
          <div className="lg:col-span-3 flex flex-col pt-2">
            <ProductHeader
              title={product.name}
              rating={rating}
              reviewsCount={reviewsCount}
              seller="Pyrex" // Mocked based on screenshot
            />

            <ProductDetailsAccordion
              title={product.name}
              features={product.features}
              specs={product.specs}
            />
          </div>

          {/* Right Column: Sidebar Actions (Span 3) */}
          <div className="lg:col-span-3">
            {/* Sticky Sidebar */}
            <div className="sticky top-6">
              <ProductSidebar
                currentPrice={product.price}
                seller={seller}
                stock={product.count}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
