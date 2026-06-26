const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

export interface Category {
  id: number;
  name: string;
  description?: string;
  imageUrl?: string;
}

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
  images?: string[];
  category?: Category;
}

export async function fetchCategories(): Promise<Category[]> {
  const res = await fetch(`${API_BASE_URL}/categories`, {
    next: { revalidate: 60 }, // Revalidate every 60 seconds
  });
  
  if (!res.ok) {
    console.error('Failed to fetch categories');
    return [];
  }
  
  return res.json();
}

export async function fetchProducts(): Promise<Product[]> {
  const res = await fetch(`${API_BASE_URL}/products`, {
    next: { revalidate: 60 },
  });
  
  if (!res.ok) {
    console.error('Failed to fetch products');
    return [];
  }
  
  return res.json();
}
