export type SearchInputProps = {
  value: string;
  placeholder?: string;
  hint?: string; // NEW
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
} & React.InputHTMLAttributes<HTMLInputElement>;