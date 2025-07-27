import { useQuery } from "@tanstack/react-query";
import { fetchSearchGames } from "@/services/casino";
import { gameStates } from "@/store/gameStates";

export const useSearchGames = () => {
  const { searchQuery } = gameStates();

  return useQuery({
    queryKey: ["search-games", searchQuery],
    queryFn: () => fetchSearchGames(searchQuery),
    enabled: !!searchQuery,
    staleTime: 5 * 60 * 1000,
  });
};

