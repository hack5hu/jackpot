import { useQuery } from "@tanstack/react-query";
import { fetchSearchGames } from "@/services/casino";
import { gameStates } from "@/store/gameStates";

/**
 * useSearchGames
 * A custom hook to fetch casino games based on the user's search input.
 *
 * - Uses Zustand (`gameStates`) to access the current `searchQuery`
 * - Only executes the API call when the query is non-empty
 * - Caches search results for 5 minutes to reduce redundant requests
 */
export const useSearchGames = () => {
  const { searchQuery } = gameStates();

  return useQuery({
    queryKey: ["search-games", searchQuery],
    queryFn: () => fetchSearchGames(searchQuery),
    enabled: !!searchQuery, // Only fetch when query is non-empty
    staleTime: 5 * 60 * 1000, // Cache results for 5 minutes (optional performance optimization)
  });
};

