export interface ProductAdditionalProps {
  title: string;
  shortDesc: string;
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
