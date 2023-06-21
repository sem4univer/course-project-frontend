import { SVGProps } from "react";

export interface InputProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  name: string;
  id: string;
  svg?: React.FunctionComponent<SVGProps<SVGSVGElement>>;
  required?: boolean;
}
