import { useMemo } from "react";
import { categorizeGamesByCategory } from "@/helper/categorizeGamesByCategory";
import { gameStates } from "@/store/gameStates";
import { Game } from "@/types/GameType";

/**
 * Hook to handle game categorization and filtering logic
 *
 * @param allItems - The complete list of games fetched from the API
 * @returns An object containing:
 *  - categorizedGames: all games grouped by category
 *  - cachedCategoryItems: items of the currently selected category (if searchQuery is not active)
 *  - mergedItems: unique combination of filtered and original list
 */
export const useCategorizedGames = (allItems: Game[]) => {
  const { category, searchQuery } = gameStates();

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

