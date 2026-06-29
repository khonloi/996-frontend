import React from "react";
import { fetchCategories, fetchProducts } from "@/lib/api";
import HeroBanner from "@/components/home/HeroBanner";
import CategoryGrid from "@/components/home/CategoryGrid";
import ProductGrid from "@/components/home/ProductGrid";
import { BentoGrid, BentoCard } from "@/components/ui/bento-grid/BentoGrid";

export default async function Home() {
  const [categories, products] = await Promise.all([
    fetchCategories(),
    fetchProducts(),
  ]);

  // Segment products dynamically to show distinct selections in each grid
  const trendingProducts = products.slice(0, 8);
  const bestSellers = products.slice(6, 14);
  const newArrivals = products.slice(12, 20);

  return (
    <div className="p-6 md:p-8 max-w-7xl mx-auto space-y-12 bg-gray-50">
      {/* Hero Banner Section */}
      <HeroBanner />

      {/* Featured Categories */}
      <CategoryGrid categories={categories} />

      {/* Trending Products */}
      <ProductGrid title="Trending Now" products={trendingProducts} />

      {/* Middle Bento Grid */}
      <section>
        <BentoGrid className="!px-0 !max-w-none">
          {/* Wide Tile */}
          <BentoCard
            shape="wide"
            className="bg-brand-dark text-white p-8 flex justify-between relative overflow-hidden shadow-xs"
          >
            <div className="z-10 relative flex flex-col justify-between h-full">
              <div>
                <p className="text-brand-accent font-semibold mb-1">
                  Chef's Kitchen
                </p>
                <h2 className="text-2xl font-bold leading-tight mb-4">
                  Weekly Recipe Kits
                  <br />
                  with fresh ingredients
                </h2>
              </div>
              <a
                href="#"
                className="underline text-sm font-medium hover:text-brand-accent transition-colors"
              >
                Browse recipe kits
              </a>
            </div>
          </BentoCard>

          {/* Small Tile - Local Farms */}
          <BentoCard
            shape="small"
            className="bg-amber-100 border border-amber-200/60 p-6 flex flex-col shadow-xs"
          >
            <h3 className="text-brand-dark text-xl font-bold mb-1">
              Local Farms
            </h3>
            <p className="text-amber-900/80 text-sm mb-4">
              100% Organic certified fresh crops.
            </p>
            <a
              href="#"
              className="underline text-sm text-brand-primary font-medium mb-auto hover:text-brand-dark transition-colors"
            >
              Meet our farmers
            </a>
          </BentoCard>

          {/* Small Tile - Butcher's Choice */}
          <BentoCard
            shape="small"
            className="bg-rose-100 border border-rose-200/60 p-6 flex flex-col shadow-xs"
          >
            <h3 className="text-brand-dark text-xl font-bold mb-1">
              Butcher's Choice
            </h3>
            <p className="text-rose-900/80 text-sm mb-4">
              Premium 100% pasture-raised meats.
            </p>
            <a
              href="#"
              className="underline text-sm text-rose-700 font-medium mb-auto hover:text-brand-dark transition-colors"
            >
              Shop meats
            </a>
          </BentoCard>

          {/* Small Tile - Cold Pressed Juices */}
          <BentoCard
            shape="small"
            className="bg-blue-100 border border-blue-200/60 p-6 flex flex-col shadow-xs"
          >
            <h3 className="text-brand-dark text-xl font-bold mb-1">
              Cold Pressed
            </h3>
            <p className="text-blue-900/80 text-sm mb-4">
              Raw organic juices and drinks.
            </p>
            <a
              href="#"
              className="underline text-sm text-blue-700 font-medium mb-auto hover:text-brand-dark transition-colors"
            >
              Shop beverages
            </a>
          </BentoCard>
        </BentoGrid>
      </section>

      {/* Best Sellers */}
      <ProductGrid title="Best Sellers" products={bestSellers} />

      {/* New Arrivals */}
      <ProductGrid title="New Arrivals" products={newArrivals} />

      {/* Featured Bento Grid */}
      <section>
        <BentoGrid className="!px-0 !max-w-none">
          {/* Large Tile - Left */}
          <BentoCard
            shape="large"
            className="bg-green-100/80 border border-green-200/60 flex flex-col justify-between p-8 shadow-xs"
          >
            <div>
              <p className="text-brand-primary font-semibold mb-2">
                Organic Farm Fresh
              </p>
              <h2 className="text-brand-dark text-4xl font-bold leading-tight mb-6">
                Up to 30% Off
                <br />
                All Vegetables
              </h2>
              <button className="bg-brand-primary text-white hover:bg-brand-dark transition-colors px-6 py-2 rounded-full font-medium cursor-pointer">
                Shop Fresh Produce
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
                <p className="text-brand-accent font-semibold mb-1">
                  Free Delivery
                </p>
                <h2 className="text-2xl font-bold leading-tight mb-4">
                  Free Delivery on
                  <br />
                  Orders Over $35
                </h2>
              </div>
              <a
                href="#"
                className="underline text-sm font-medium hover:text-brand-accent transition-colors"
              >
                Schedule delivery
              </a>
            </div>
          </BentoCard>

          {/* Tall Tile - Right */}
          <BentoCard
            shape="tall"
            className="bg-gray-100 border border-gray-200 p-8 flex flex-col shadow-xs"
          >
            <h3 className="text-brand-primary font-bold text-lg mb-1">
              Groceries Visa
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
          <BentoCard
            shape="small"
            className="bg-green-200/50 border border-green-200 p-6 flex flex-col shadow-xs"
          >
            <h3 className="text-brand-dark text-xl font-bold mb-1">
              Daily Harvest
            </h3>
            <p className="text-brand-secondary text-sm mb-4">
              Fresh deals from local farms.
            </p>
            <a
              href="#"
              className="underline text-sm text-brand-primary font-medium mb-auto hover:text-brand-dark transition-colors"
            >
              Browse deals
            </a>
          </BentoCard>

          {/* Small Tile - Bottom Middle Right */}
          <BentoCard
            shape="small"
            className="bg-amber-100/60 p-6 flex flex-col border border-amber-200 shadow-xs"
          >
            <h3 className="text-brand-dark text-xl font-bold mb-1">
              Weekly Specials
              <br />
              starting at
              <br />
              $0.99
            </h3>
            <a
              href="#"
              className="underline text-sm text-brand-secondary font-medium mb-auto mt-2 hover:text-brand-dark transition-colors"
            >
              Shop specials
            </a>
          </BentoCard>
        </BentoGrid>
      </section>
    </div>
  );
}
