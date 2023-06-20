export interface SelectProps {
  name: string;
  options: string[];
  onChange: (optionValue: string) => void;
}
