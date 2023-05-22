export interface RatingProps {
  reviews?: Review[];
  rating?: number;
}

interface Review {
  title: string;
  date: string;
  rating: number;
  description: string;
}
