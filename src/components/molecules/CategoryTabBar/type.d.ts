export interface CategoryTabBarProps {
  activeCategory: string | null;
  onCategoryChange: (key: string) => void;

}