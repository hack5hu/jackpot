import React from "react";
import styles from "@/components/atoms/ArrowButton/ArrowButton.module.scss";
import ArrowLeftIcon from "@/assets/icons/ArrowLeftIcon";
import ArrowRightIcon from "@/assets/icons/ArrowRightIcon";
import { ArrowButtonProps } from "@/components/atoms/ArrowButton/type";


const ArrowButton: React.FC<ArrowButtonProps> = ({
  direction,
  onClick,
  className,
}) => {
  const Icon = direction === "left" ? ArrowLeftIcon : ArrowRightIcon;

  return (
    <button
      className={`${styles.arrowButton} ${className || ""}`}
      onClick={onClick}
    >
      <Icon />
    </button>
  );
};

export default ArrowButton;


