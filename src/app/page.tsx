"use client";

import styles from "./page.module.scss";
import HomeTemplate from "@/components/templates/HomeTemplate/HomeTemplate";
import ImageSlider from "@/components/organisms/ImageSlider/ImageSlider";
export default function Home() {
  return (
    <div className={styles.page}>
      <div style={{ margin: 30 }} />
      <ImageSlider />
      <HomeTemplate />
    </div>
  );
}

