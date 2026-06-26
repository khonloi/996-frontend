import React from 'react';
import { fetchCategories, fetchProducts } from '@/lib/api';
import HeroBanner from '@/components/home/HeroBanner';
import CategoryGrid from '@/components/home/CategoryGrid';
import ProductGrid from '@/components/home/ProductGrid';

export default async function Home() {
  const [categories, products] = await Promise.all([
    fetchCategories(),
    fetchProducts()
  ]);

  return (
    <div className="p-6 md:p-8 max-w-7xl mx-auto space-y-12">
      {/* Hero Banner Section */}
      <HeroBanner />

      {/* Featured Categories */}
      <CategoryGrid categories={categories} />

      {/* Trending Products */}
      <ProductGrid title="Trending Now" products={products} />
    </div>
  );
}
