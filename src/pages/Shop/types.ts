export interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  discount?: string;
  soldout?: boolean;
  description: string;
  sku: number;
  categories: string[];
  full_description: string;
  weight: number;
  dimensions: { height: number; width: number; depth: number };
  colors: string[];
  material: string;
  reviews: Review[];
}

interface Review {
  title: string;
  date: string;
  rating: number;
  description: string;
}

export interface FilterParams {
  search: string;
  min: number;
  max: number;
  sale: boolean;
  stock: boolean;
  material: string;
  sort: string;
}
