export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  shopId: number;
  title: string;
  price: string;
  image: string;
  discount?: string;
  soldout?: boolean;
}
