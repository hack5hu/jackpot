import { useMemo } from "react";
import { categorizeGamesByCategory } from "@/helper/categorizeGamesByCategory";
import { useGameFilters } from "@/store/useGameFilters";

export const useCategorizedGames = (allItems: any[]) => {
  const { category, searchQuery } = useGameFilters();

  const categorizedGames = useMemo(
    () => categorizeGamesByCategory(allItems),
    [allItems]
  );

  const cachedCategoryItems = useMemo(() => {
    if (!category || searchQuery) return [];
    return categorizedGames[category] || [];
  }, [category, categorizedGames, searchQuery]);

  const mergedItems = useMemo(() => {
    const all = [...cachedCategoryItems, ...allItems];
    return all.filter(
      (item, index, self) =>
        index === self.findIndex((i) => i?.slug === item?.slug)
    );
  }, [cachedCategoryItems, allItems]);

  return {
    categorizedGames,
    cachedCategoryItems,
    mergedItems,
  };
};
