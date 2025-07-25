import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import api from "@/services/api";
import { useGameFilters } from "@/store/useGameFilters";

const LIMIT = 50;

export const useCasinoGames = ({category}) => {
  const {  vendor } = useGameFilters();
console.log("Fetching Casino Games with Category:", category, "Vendor:", vendor);
  return useInfiniteQuery({
    queryKey: ["casino-games", { category, vendor }],
    
    queryFn: async ({ pageParam = 0 }) => {
      const res = await api.get("/casino/games", {
        params: {
          ...(category && { category }),
          ...(vendor && { vendor }),
          limit: LIMIT,
          offset: pageParam,
        },
      });
      console.log("Fetched Casino Games:", res.data);
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
  const { searchQuery } = useGameFilters();

  return useQuery({
    queryKey: ["search-games", searchQuery],
    queryFn: () => fetchSearchGames(searchQuery),
    enabled: !!searchQuery,
    staleTime: 5 * 60 * 1000, // Optional: avoid refetching repeatedly
  });
};