import React from "react";
import styles from "./CategoryTabBar.module.scss";
import { CATEGORY_META } from "@/constants/constants";

interface Props {
  activeCategory: string | null;
  onCategoryChange: (key: string) => void;
}

const CategoryTabBar: React.FC<Props> = ({
  activeCategory = -1,
  onCategoryChange,
}) => {
  return (
    <div className={styles.tabBar}>
      {Object.entries(CATEGORY_META).map(([key, meta]) => (
        <button
          key={key}
          className={`${styles.tab} ${
            activeCategory === key ? styles.active : ""
          }`}
          onClick={() => onCategoryChange(key)}
        >
          <span>{meta.title}</span>
        </button>
      ))}
    </div>
  );
};

export default CategoryTabBar;

