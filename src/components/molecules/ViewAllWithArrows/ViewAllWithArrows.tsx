import React, { useEffect, useState } from "react";
import ArrowLeftIcon from "@/assets/icons/ArrowLeftIcon";
import ArrowRightIcon from "@/assets/icons/ArrowRightIcon";
import styles from "./ViewAllWithArrows.module.scss";

type Props = {
  scrollRef: React.RefObject<HTMLDivElement>;
  setCategory?: () => void;
  isTextViewAll?: boolean;
};

const ViewAllControl: React.FC<Props> = ({ scrollRef, setCategory,isTextViewAll=true }) => {
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const updateScrollState = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(
      el.scrollLeft + el.clientWidth < el.scrollWidth - 1 // add -1 for floating point "off by 0.5" issue
    );
  };

  const scroll = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const scrollAmount = el.clientWidth;
    el.scrollBy({
      left: direction === "right" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    updateScrollState();
    el.addEventListener("scroll", updateScrollState);
    window.addEventListener("resize", updateScrollState);

    return () => {
      el.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
    // Only re-run when the dom element changes, not every render
    // eslint-disable-next-line
  }, [scrollRef?.current]);

  return (
    <div className={styles.viewAllControl}>
      {isTextViewAll &&  <button className={styles.viewAllText} onClick={setCategory}>
        View All
      </button>}
      <div className={styles.arrows}>
        <button
          className={`${styles.arrowButton} ${
            !canScrollLeft ? styles.disabled : ""
          }`}
          onClick={() => scroll("left")}
          disabled={!canScrollLeft}
          aria-disabled={!canScrollLeft}
          tabIndex={canScrollLeft ? 0 : -1}
        >
          <ArrowLeftIcon />
        </button>
        <button
          className={`${styles.arrowButton} ${
            !canScrollRight ? styles.disabled : ""
          }`}
          onClick={() => scroll("right")}
          disabled={!canScrollRight}
          aria-disabled={!canScrollRight}
          tabIndex={canScrollRight ? 0 : -1}
        >
          <ArrowRightIcon />
        </button>
      </div>
    </div>
  );
};

export default ViewAllControl;







