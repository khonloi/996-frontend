import React from 'react';
import { Product } from '@/lib/api';
import ProductCard from '@/components/product/ProductCard';

interface ProductGridProps {
  title?: string;
  products: Product[];
}

export default function ProductGrid({ title = 'Trending Now', products }: ProductGridProps) {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-6 text-gray-800">{title}</h2>
      {products.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No trending products available right now.</p>
      )}
    </section>
  );
}
