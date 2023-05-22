import { ReactNode } from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  color: string;
  children: ReactNode;
  type?: "button" | "submit";
}
