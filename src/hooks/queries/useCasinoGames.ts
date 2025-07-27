import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchCasinoGames } from "@/services/casino";
import { UseCasinoGamesParams } from "@/types/casino";

/**
 * useCasinoGames
 * A custom hook to fetch casino games with infinite scroll support.
 *
 * @param filters - An object containing optional query filters:
 *   - category: string
 *   - order: string (asc/desc)
 *   - vendor: string
 *
 * Uses React Query's `useInfiniteQuery` to handle paginated API fetching
 * with automatic caching and load-more support.
 */
export const useCasinoGames = (filters: UseCasinoGamesParams) => {
  return useInfiniteQuery({
    // Cache key includes filters to ensure fresh data when filters change
    queryKey: ["casino-games", filters],
    // API function with page offset and filters passed
    queryFn: ({ pageParam = 0 }) => fetchCasinoGames(pageParam, filters),
    initialPageParam: 0,
    /**
     * Determine the next offset based on total fetched items and total count.
     * If fetched all items, stop paginating (return undefined).
     */
    getNextPageParam: (lastPage, allPages) => {
      const totalFetched = allPages.flatMap((p) => p.data.items).length;
      return totalFetched < lastPage.data.total ? totalFetched : undefined;
    },
  });
};

