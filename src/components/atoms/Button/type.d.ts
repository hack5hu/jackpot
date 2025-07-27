type Variant = "primary" | "secondary" | "ghost" | "icon";
type Size = "sm" | "md" | "lg";
type Props = {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: Variant;
  size?: Size;
};
