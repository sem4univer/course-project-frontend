interface Product {
  id: number;
  title: string;
  price: string;
  image: string;
  discount?: string;
  soldout?: boolean;
  description: string;
  sku: number;
  categories: string[];
  full_description: string;
  weight: number;
  dimensions: { height: number; width: number; depth: number };
  reviews: Review[];
}

interface Review {
  title: string;
  date: string;
  rating: number;
  description: string;
}

export interface ProductProps {
  product: Product;
}
