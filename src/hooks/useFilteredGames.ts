import { useMemo } from "react";
import { useFilteredGameProps } from "@/hooks/type/type";

export const useFilteredGames = ({
  allItems,
  searchedItems,
}: useFilteredGameProps) => {
  const filteredGames = useMemo(() => {
    return searchedItems?.length > 0 ? searchedItems : allItems;
  }, [searchedItems, allItems]);

  return { filteredGames };
};


