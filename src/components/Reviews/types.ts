export interface ReviewsProps {
  className: string;
  reviews: Review[];
  title: string;
}

interface Review {
  title: string;
  date: string;
  rating: number;
  description: string;
}
