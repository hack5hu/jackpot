import styles from '@/components/atoms/Button/Button.module.scss'
import clsx from "clsx";

export default function Button({
  children,
  onClick,
  variant = "primary",
  size = "md",
}: Props) {
  const buttonClass = clsx(styles.button, styles[variant], styles[size]);
  return (
    <button className={buttonClass} onClick={onClick}>
      {children}
    </button>
  );
}

