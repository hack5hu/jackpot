import { useMemo } from "react";
import { useFilteredGameProps } from "@/hooks/type/type";

/**
 * useFilteredGames
 * A custom hook that selects which game list to use: searched or all.
 *
 * @param allItems - Full list of available games (default view)
 * @param searchedItems - Filtered list based on search results
 *
 * @returns filteredGames - The list to display based on user input
 */
export const useFilteredGames = ({
  allItems,
  searchedItems,
}: useFilteredGameProps) => {
  const filteredGames = useMemo(() => {
    return searchedItems?.length > 0 ? searchedItems : allItems;
  }, [searchedItems, allItems]);

  return { filteredGames };
};

