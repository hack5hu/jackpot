import Image from "next/image";
import styles from "./IconWithText.module.scss";
import type { StaticImageData } from "next/image";

type Props = {
  iconSrc: string | StaticImageData;
  alt?: string;
  text: string;
  iconPosition?: "left" | "right";
};

export default function IconWithText({
  iconSrc,
  alt = "",
  text,
  iconPosition = "left",
}: Props) {
  return (
    <div
      className={`${styles.container} ${
        iconPosition === "right" ? styles.reverse : ""
      }`}
    >
      <Image
        src={iconSrc}
        alt={alt}
        width={18}
        height={25}
        className={styles.icon}
      />
      <h2 className={styles.text}>{text}</h2>
    </div>
  );
}

