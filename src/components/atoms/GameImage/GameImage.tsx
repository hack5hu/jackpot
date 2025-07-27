import React from "react";
import Image from "next/image";
import styles from "@/components/atoms/GameImage/GameImage.module.scss";

const GameImage: React.FC<GameImageProps> = ({
  src,
  alt,
  borderColor,
  blurDataURL = "",
}) => {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      className={styles.image}
      placeholder={blurDataURL ? "blur" : "empty"}
      blurDataURL={blurDataURL}
      style={{
        border: `3px solid ${borderColor}`,
      }}
    />
  );
};

export default GameImage;



