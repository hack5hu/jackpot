
import styles from "./Button.module.scss";
import clsx from "clsx";

type Variant = "primary" | "secondary" | "ghost" | "icon";
type Size = "sm" | "md" | "lg";
type Props = {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: Variant;
  size?: Size;
};




export default function Button({
  children,
  onClick,
  variant = "primary",
  size = "md",
}: Props) {
   const buttonClass = clsx(
     styles.button,
     styles[variant],
     styles[size],
    
   );
  return (
    <button className={buttonClass} onClick={onClick}>
      {children}
    </button>
  );
}








