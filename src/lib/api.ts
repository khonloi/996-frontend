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
  count: number;
  images?: string[];
  category?: Category;
  // UI fields mocked for frontend
  rating?: number;
  reviewsCount?: number;
  originalPrice?: number;
  seller?: string;
  features?: string[];
  specs?: Record<string, string>;
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

export async function fetchProduct(id: string | number): Promise<Product | null> {
  const res = await fetch(`${API_BASE_URL}/products/${id}`, {
    next: { revalidate: 60 },
  });
  
  if (!res.ok) {
    console.error(`Failed to fetch product with id ${id}`);
    return null;
  }
  
  return res.json();
}
