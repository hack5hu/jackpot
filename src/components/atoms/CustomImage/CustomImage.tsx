import React from "react";
import styles from "@/components/atoms/CustomImage/CustomImage.module.scss";
import Image from "next/image";



const CustomImage: React.FC<ImageProps> = ({ src, alt }) => {
  return <Image className={styles.image} src={src} alt={alt} />;
};

export default CustomImage;




