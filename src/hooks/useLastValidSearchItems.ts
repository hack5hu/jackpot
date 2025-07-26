import { useEffect, useRef } from "react";
import { useSearchGames } from "@/hooks/queries/useSearchGames";
import { useGameFilters } from "@/store/useGameFilters";

export const useLastValidSearchItems = () => {
  const { searchQuery } = useGameFilters();
  const { data, isSuccess } = useSearchGames();

  const lastValidSearchItems = useRef<any[]>([]);

  useEffect(() => {
    if (searchQuery && isSuccess && data?.data.items?.length > 0) {
      lastValidSearchItems.current = data.data.items;
    }
  }, [searchQuery, isSuccess, data]);

  return {
    searchedItems: data?.data.items || [],
    lastValidSearchItems,
  };
};
