import { Game } from "@/types/GameType";
import { useMemo } from "react";

export const useFilteredGames = ({
  allItems,
  searchedItems,
}: {
  allItems: Game[];
  searchedItems: Game[];
}) => {
  const filteredGames = useMemo(() => {
    return searchedItems?.length > 0 ? searchedItems : allItems;
  }, [searchedItems, allItems]);

  return { filteredGames };
};

