import React from "react";
import styles from "./Loader.module.scss";
import Image from "next/image";
import { IMAGES } from "@/assets/image/image"; 


const Loader = ({ isLoading }: LoaderProps) => {
  return (
    <div
      className={`${styles.loaderWrapper} ${isLoading ? styles.loading : ""}`}
    >
      <div className={styles.imageWrapper}>
        <Image src={IMAGES.LOGO_ICON} alt="Logo" width={20} height={20} />
      </div>
    </div>
  );
};

export default Loader;
