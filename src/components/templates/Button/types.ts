import { ReactNode } from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  color: "black" | "white";
  children: ReactNode;
  type?: "button" | "submit";
  onClick?: () => void;
}
