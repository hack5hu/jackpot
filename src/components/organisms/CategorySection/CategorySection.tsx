import styles from "./CategorySection.module.scss";
import IconWithText from "@/components/atoms/IconWithText/IconWithText";
import ViewAllControl from "@/components/molecules/ViewAllWithArrows/ViewAllWithArrows";
import GameCard from "@/components/molecules/GameCard/GameCard";
import Image from "next/image";
import CrossArrowIcon from "@/assets/icons/CrossArrowIcon";
import { IMAGES } from "@/assets/image/image";
import React, { useEffect, useState } from "react";
import { engLang } from "@/baseLocalization/baseLocalization";

/**
 * CategorySection displays a horizontal scrollable list of games under a specific category.
 * Includes a header with icon, category name, and "View All" controls.
 */
const CategorySection = ({
  category,
  meta,
  games,
  scrollRefs,
  setSelectedCategory,
}: CategorySectionProps) => {
  const limitedGames = games.slice(0, 12);
  const shouldShowViewAll = games.length > 12;
  if (!scrollRefs) {
    scrollRefs = React.createRef<HTMLDivElement>();
  }
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(false);

  // Setup scroll event listener to determine arrow visibility
  useEffect(() => {
    const container = scrollRefs?.current;
    if (!container) return;

    let timeout: NodeJS.Timeout;

    const handleScroll = () => {
      clearTimeout(timeout);

      setShowLeft(false);
      setShowRight(false);

      // Delay evaluation for smooth effect
      timeout = setTimeout(() => {
        setShowLeft(container.scrollLeft > 0);
        setShowRight(
          container.scrollLeft + container.clientWidth < container.scrollWidth
        );
      }, 150);
    };

    handleScroll();
    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, [scrollRefs]);
  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <IconWithText
          iconSrc={meta.image}
          alt={meta.title}
          text={meta.title}
          setCategory={() => setSelectedCategory(category)}
        />
        <ViewAllControl
          scrollRef={scrollRefs}
          setCategory={() => setSelectedCategory(category)}
        />
      </div>
      <div
        className={`${styles.scrollShadowWrapper} ${
          showLeft ? styles.showLeft : ""
        } ${showRight ? styles.showRight : ""}`}
      >
        <div ref={scrollRefs} className={styles.horizontalScroll}>
          {limitedGames.map((game) => (
            <GameCard key={game.slug} game={game} />
          ))}
          {shouldShowViewAll && (
            <button
              onClick={() => setSelectedCategory(category)}
              className={styles.viewAllCard}
            >
              <Image
                src={IMAGES.BG_PIC}
                alt={engLang.viewAll}
                fill
                style={{ objectFit: "cover", borderRadius: "6px" }}
              />
              <div className={styles.viewAllTextWrapper}>
                <CrossArrowIcon />
                <p className={styles.viewAllText}>{engLang.viewAll}</p>
              </div>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CategorySection;

