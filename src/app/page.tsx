import React from "react";
import { fetchCategories, fetchProducts } from "@/lib/api";
import HeroBanner from "@/components/home/HeroBanner";
import CategoryGrid from "@/components/home/CategoryGrid";
import ProductGrid from "@/components/home/ProductGrid";
import { BentoGrid, BentoCard } from "@/components/ui/bento-grid/bento-grid";

export default async function Home() {
  const [categories, products] = await Promise.all([
    fetchCategories(),
    fetchProducts(),
  ]);

  return (
    <div className="p-6 md:p-8 max-w-7xl mx-auto space-y-12 bg-gray-50">
      {/* Hero Banner Section */}
      <HeroBanner />

      {/* Featured Categories */}
      <CategoryGrid categories={categories} />

      {/* Trending Products */}
      <ProductGrid title="Trending Now" products={products} />

      {/* Featured Bento Grid */}
      <section>
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900">
            Featured Offers & Services
          </h2>
          <p className="text-gray-600">
            Explore our latest deals designed for you.
          </p>
        </div>

        <BentoGrid className="!px-0 !max-w-none">
          {/* Large Tile - Left */}
          <BentoCard
            shape="large"
            className="bg-green-100/80 border border-green-200/60 flex flex-col justify-between p-8 shadow-xs"
          >
            <div>
              <p className="text-brand-primary font-semibold mb-2">
                End of Season Sale
              </p>
              <h2 className="text-brand-dark text-4xl font-bold leading-tight mb-6">
                Up to 50% Off
                <br />
                All Electronics
              </h2>
              <button className="bg-brand-primary text-white hover:bg-brand-dark transition-colors px-6 py-2 rounded-full font-medium cursor-pointer">
                Shop the Sale
              </button>
            </div>
          </BentoCard>

          {/* Wide Tile - Top Middle */}
          <BentoCard
            shape="wide"
            className="bg-brand-dark text-white p-8 flex justify-between relative overflow-hidden shadow-xs"
          >
            <div className="z-10 relative flex flex-col justify-between h-full">
              <div>
                <p className="text-brand-accent font-semibold mb-1">Limited Time Offer</p>
                <h2 className="text-2xl font-bold leading-tight mb-4">
                  Free Shipping on
                  <br />
                  Orders Over $50
                </h2>
              </div>
              <a
                href="#"
                className="underline text-sm font-medium hover:text-brand-accent transition-colors"
              >
                View details
              </a>
            </div>
          </BentoCard>

          {/* Tall Tile - Right */}
          <BentoCard shape="tall" className="bg-gray-100 border border-gray-200 p-8 flex flex-col shadow-xs">
            <h3 className="text-brand-primary font-bold text-lg mb-1">
              Store Credit Card
            </h3>
            <h2 className="text-brand-dark text-3xl font-bold leading-tight mb-4">
              Earn 5% back on
              <br />
              every purchase
            </h2>
            <a
              href="#"
              className="underline text-sm text-brand-secondary font-medium mb-8 hover:text-brand-primary transition-colors"
            >
              Apply now
            </a>
          </BentoCard>

          {/* Small Tile - Bottom Middle Left */}
          <BentoCard shape="small" className="bg-green-200/50 border border-green-200 p-6 flex flex-col shadow-xs">
            <h3 className="text-brand-dark text-xl font-bold mb-1">
              Flash Deals
            </h3>
            <p className="text-brand-secondary text-sm mb-4">
              New deals added daily.
            </p>
            <a
              href="#"
              className="underline text-sm text-brand-primary font-medium mb-auto hover:text-brand-dark transition-colors"
            >
              Browse deals
            </a>
          </BentoCard>

          {/* Small Tile - Bottom Middle Right */}
          <BentoCard shape="small" className="bg-amber-100/60 p-6 flex flex-col border border-amber-200 shadow-xs">
            <h3 className="text-brand-dark text-xl font-bold mb-1">
              Clearance
              <br />
              starting at
              <br />
              $9.99
            </h3>
            <a
              href="#"
              className="underline text-sm text-brand-secondary font-medium mb-auto mt-2 hover:text-brand-dark transition-colors"
            >
              Shop clearance
            </a>
          </BentoCard>
        </BentoGrid>
      </section>
    </div>
  );
}
