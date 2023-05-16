import { SVGProps } from "react";

export interface InputProps {
  className?: string;
  placeholder: string;
  svg: React.FunctionComponent<SVGProps<SVGSVGElement>>;
}
