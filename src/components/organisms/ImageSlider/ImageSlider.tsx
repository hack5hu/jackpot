import React, { useEffect, useRef } from "react";
import CustomImage from "@/components/atoms/CustomImage/CustomImage";
import styles from "./ImageSlider.module.scss";

const images = Array.from({ length: 7 }, (_, i) =>
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  require(`@/assets/cards/image${i + 1}.png`)
);

const ImageSlider = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
        const container = sliderRef.current;
        const scrollAmount = container.clientWidth / 3;
        const maxScrollLeft = container.scrollWidth - container.clientWidth;

        if (Math.ceil(container.scrollLeft) >= maxScrollLeft) {
          container.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          container.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.sliderWrapper} ref={sliderRef}>
      {images.map((img, index) => (
        <div key={index} className={styles.imageContainer}>
          <CustomImage src={img.default} alt={`Slide ${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default ImageSlider;

