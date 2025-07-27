import { useEffect, useRef } from "react";
import { useSearchGames } from "@/hooks/queries/useSearchGames";
import { gameStates } from "@/store/gameStates";
import { Game } from "@/types/GameType";

export const useLastValidSearchItems = () => {
  const { searchQuery } = gameStates();
  const { data, isSuccess } = useSearchGames();

  const lastValidSearchItems = useRef<Game[]>([]);

  useEffect(() => {
    if (searchQuery && isSuccess && data?.data.items?.length) {
      lastValidSearchItems.current = data.data.items;
    }
  }, [searchQuery, isSuccess, data]);

  return {
    searchedItems: data?.data.items ?? [],
    lastValidSearchItems,
  };
};

