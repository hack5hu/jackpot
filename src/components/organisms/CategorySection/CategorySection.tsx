import styles from "./CategorySection.module.scss";
import IconWithText from "@/components/atoms/IconWithText/IconWithText";
import ViewAllControl from "@/components/molecules/ViewAllWithArrows/ViewAllWithArrows";
import GameCard from "@/components/molecules/GameCard/GameCard";
import Image from "next/image";
import CrossArrowIcon from "@/assets/icons/CrossArrowIcon";
import { IMAGES } from "@/assets/image/image";
import React, { RefObject } from "react";
import { Game } from "@/type/GameType";

type CategoryMeta = {
  title: string;
  image: string;
};

type CategorySectionProps = {
  category: string;
  meta: CategoryMeta;
  games: Game[];
  scrollRefs:RefObject<HTMLDivElement | null>;
  setSelectedCategory: (cat: string) => void;
};
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
  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <IconWithText iconSrc={meta.image} alt={meta.title} text={meta.title} />
        <ViewAllControl
          scrollRef={scrollRefs}
          setCategory={() => setSelectedCategory(category)}
        />
      </div>

      <div className={styles.horizontalScroll} ref={scrollRefs}>
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
              alt="View All"
              fill
              style={{ objectFit: "cover", borderRadius: "6px" }}
            />
            <div className={styles.viewAllTextWrapper}>
              <CrossArrowIcon />
              <p className={styles.viewAllText}>View All</p>
            </div>
          </button>
        )}
      </div>
    </div>
  );
};

export default CategorySection;



