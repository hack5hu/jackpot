import React from "react";
import styles from "./CategoryTabBar.module.scss";
import { CATEGORY_META } from "@/constants/constants";
import { CategoryTabBarProps } from "./type";

const CategoryTabBar: React.FC<CategoryTabBarProps> = ({
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

