import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import api from "@/services/api";
import { gameStates } from "@/store/gameStates";
import { UseCasinoGamesProps } from "@/hooks/type/type";

const LIMIT = 100;

export const useCasinoGames = ({
  category,
  order,
  vendor,
}: UseCasinoGamesProps) => {
  return useInfiniteQuery({
    queryKey: ["casino-games", { category, order, vendor }],
    queryFn: async ({ pageParam = 0 }) => {
      const params: Record<string, string | number> = {
        ...(category && { category }),
        ...(vendor && { vendor }),
        ...(order && { order }),
        limit: LIMIT,
        offset: pageParam,
      };

      const res = await api.get("/casino/games", { params });
      return res.data;
    },
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) => {
      const totalFetched = allPages.flatMap((p) => p.data.items).length;
      return totalFetched < lastPage.data.total ? totalFetched : undefined;
    },
  });
};
const fetchSearchGames = async (query: string) => {
  if (!query) return { data: { items: [] } };
  const response = await api.get("/casino/games/search", {
    params: { query },
  });
  return response.data;
};

export const useSearchGames = () => {
  const { searchQuery } = gameStates();

  return useQuery({
    queryKey: ["search-games", searchQuery],
    queryFn: () => fetchSearchGames(searchQuery),
    enabled: !!searchQuery,
    staleTime: 5 * 60 * 1000, // Optional: avoid refetching repeatedly
  });
};

