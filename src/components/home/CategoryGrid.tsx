import React from 'react';
import { Category } from '@/lib/api';

interface CategoryGridProps {
  categories: Category[];
}

export default function CategoryGrid({ categories }: CategoryGridProps) {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Shop by Department</h2>
      {categories.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {categories.map((dept) => (
            <div key={dept.id} className="bg-white rounded-xl border border-gray-200 p-6 flex flex-col items-center justify-center cursor-pointer hover:border-brand-primary transition-all group">
              <div className="w-16 h-16 bg-gray-50 rounded-full mb-3 group-hover:bg-brand-primary/10 transition-colors"></div>
              <span className="font-medium text-sm text-center text-gray-700 group-hover:text-brand-primary">{dept.name}</span>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No departments found.</p>
      )}
    </section>
  );
}
