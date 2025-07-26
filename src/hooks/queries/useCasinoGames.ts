import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchCasinoGames } from "@/services/casino";
import { UseCasinoGamesParams } from "@/types/casino";

export const useCasinoGames = (filters: UseCasinoGamesParams) => {
  return useInfiniteQuery({
    queryKey: ["casino-games", filters],
    queryFn: ({ pageParam = 0 }) => fetchCasinoGames(pageParam, filters),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) => {
      const totalFetched = allPages.flatMap((p) => p.data.items).length;
      return totalFetched < lastPage.data.total ? totalFetched : undefined;
    },
  });
};

