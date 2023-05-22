export interface TextareaProps {
  className?: string;
  placeholder: string;
  id: string;
  name: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}
