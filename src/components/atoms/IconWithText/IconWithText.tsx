import Image from "next/image";
import styles from "./IconWithText.module.scss";
import { Props } from "./type";

export default function IconWithText({
  iconSrc,
  alt = "",
  text,
  iconPosition = "left",
  setCategory
}: Props) {
  return (
    <div
      className={`${styles.container} ${
        iconPosition === "right" ? styles.reverse : ""
      }`}
      onClick={setCategory}
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


