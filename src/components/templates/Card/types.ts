import { ComponentProps } from "react";

export interface CardProps extends ComponentProps<"div"> {
  title: string;
  price: string;
  image: string;
}
