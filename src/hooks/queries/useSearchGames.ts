import { useQuery } from "@tanstack/react-query";
import { fetchSearchGames } from "@/services/casino";
import { useGameFilters } from "@/store/useGameFilters";

export const useSearchGames = () => {
  const { searchQuery } = useGameFilters();

  return useQuery({
    queryKey: ["search-games", searchQuery],
    queryFn: () => fetchSearchGames(searchQuery),
    enabled: !!searchQuery,
    staleTime: 5 * 60 * 1000,
  });
};
