export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  shopId: number;
  title: string;
  price: number;
  image: string;
  discount?: string;
  soldout?: boolean;
}
