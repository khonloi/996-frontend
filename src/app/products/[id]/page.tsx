import React from "react";
import { fetchProduct, fetchProducts } from "@/lib/api";
import { notFound } from "next/navigation";
import ProductGallery from "@/components/product/ProductGallery";
import ProductHeader from "@/components/product/ProductHeader";
import ProductDetailsAccordion from "@/components/product/ProductDetailsAccordion";
import ProductSidebar from "@/components/product/ProductSidebar";
import ProductGrid from "@/components/home/ProductGrid";

type Props = {
  params: Promise<{ id: string }> | { id: string };
};

export default async function ProductDetailPage(props: Props) {
  // Handle both Promise and object params for Next.js 14/15+ compatibility
  const params = await props.params;
  const id = params.id;

  const [product, allProducts] = await Promise.all([
    fetchProduct(id),
    fetchProducts(),
  ]);

  if (!product) {
    notFound();
  }

  // Use mock values or fallbacks if API doesn't provide them yet
  const rating = product.rating || 4.5;
  const reviewsCount = product.reviewsCount || 5873;
  const originalPrice =
    product.originalPrice || product.price + product.price * 0.3; // mock original price
  const seller = product.seller || "996";

  // Segment products for grids
  // Section 1: Related Products (same category, excluding current product)
  const relatedProducts = allProducts.filter(
    (p) => p.id !== product.id && p.category?.id === product.category?.id,
  );

  // Section 2: Recommended Products (excluding current and related products)
  const relatedIds = new Set(relatedProducts.map((p) => p.id));
  const recommendedProducts = allProducts.filter(
    (p) => p.id !== product.id && !relatedIds.has(p.id),
  );

  // Fallback lists if not enough items
  const displayRelated =
    relatedProducts.length > 0
      ? relatedProducts
      : allProducts.filter((p) => p.id !== product.id).slice(0, 8);

  const displayRecommended =
    recommendedProducts.length > 0
      ? recommendedProducts.slice(0, 8)
      : allProducts.filter((p) => p.id !== product.id).slice(8, 16);

  return (
    <div className="bg-white min-h-screen">
      <div className="mx-auto p-4 md:p-6 lg:p-8">
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

        {/* Divider */}
        <div className="my-8 border-t border-gray-100" />

        {/* Product Grid Sections */}
        <div className="space-y-8">
          <ProductGrid title="Related Products" products={displayRelated} />
          <ProductGrid
            title="Customers Also Bought"
            products={displayRecommended}
          />
        </div>
      </div>
    </div>
  );
}
