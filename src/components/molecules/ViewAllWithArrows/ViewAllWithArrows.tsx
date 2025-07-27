import React, { useEffect, useState } from "react";
import ArrowLeftIcon from "@/assets/icons/ArrowLeftIcon";
import ArrowRightIcon from "@/assets/icons/ArrowRightIcon";
import styles from "./ViewAllWithArrows.module.scss";
import { engLang } from "@/baseLocalization/baseLocalization";

const ViewAllControl: React.FC<ViewAllControlProps> = ({
  scrollRef,
  setCategory,
  isTextViewAll = true,
}) => {
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  // Update scroll state: enables/disables arrows based on scroll position
  const updateScrollState = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
  };

  // Scroll handler: scrolls by container width in either direction
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

    // Add scroll and resize listeners
    updateScrollState();
    el.addEventListener("scroll", updateScrollState);
    window.addEventListener("resize", updateScrollState);

    return () => {
      el.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
    // eslint-disable-next-line
  }, [scrollRef?.current]);

  return (
    <div className={styles.viewAllControl}>
      {isTextViewAll && (
        <button className={styles.viewAllText} onClick={setCategory}>
          {engLang.viewAll}
        </button>
      )}
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

