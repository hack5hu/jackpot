import { useEffect, useRef } from "react";
import { useSearchGames } from "@/hooks/queries/useSearchGames";
import { gameStates } from "@/store/gameStates";
import { Game } from "@/types/GameType";

/**
 * useLastValidSearchItems
 * A custom hook to keep track of the last valid (non-empty) search results.
 *
 * Useful for maintaining previously searched data when navigating between views
 * or when avoiding UI flicker due to brief empty states.
 *
 * @returns searchedItems - Current search result (can be empty)
 * @returns lastValidSearchItems - Ref holding the last non-empty search result
 */
export const useLastValidSearchItems = () => {
  const { searchQuery } = gameStates();
  const { data, isSuccess } = useSearchGames();

  const lastValidSearchItems = useRef<Game[]>([]);

  useEffect(() => {
    // Update last valid results only if searchQuery exists, query was successful, and results are not empty
    if (searchQuery && isSuccess && data?.data.items?.length) {
      lastValidSearchItems.current = data.data.items;
    }
  }, [searchQuery, isSuccess, data]);

  return {
    searchedItems: data?.data.items ?? [],
    lastValidSearchItems,
  };
};

