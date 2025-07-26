import { useRef } from "react";
import { useCasinoGames } from "@/hooks/queries/useCasinoGames";
import { useSearchGames } from "@/hooks/queries/useSearchGames";
import { useGameFilters } from "@/store/useGameFilters";
import { useDebouncedSearchQuery } from "@/hooks/useDebouncedSearchQuery";
import { useInfiniteScrollTrigger } from "@/hooks/useInfiniteScrollTrigger";
import { useFilteredGames } from "@/hooks/useFilteredGames";
import { Vendor } from "@/store/types";

export const useProvidersPage = () => {
  const { vendor, setVendor, sort, setSort, searchQuery } = useGameFilters();

  const { localQuery, setLocalQuery } = useDebouncedSearchQuery();

  const {
    data: gameData,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
  } = useCasinoGames({
    vendor: vendor?.id,
    order: sort?.id,
  });

  const { data: searchData } = useSearchGames();

  const allItems = gameData?.pages.flatMap((p) => p.data.items) || [];
  const searchedItems = searchData?.data.items || [];

  const { ref } = useInfiniteScrollTrigger({
    onLoadMore: fetchNextPage,
    hasNextPage,
    disabled: !!searchQuery,
  });

  const { filteredGames } = useFilteredGames({ allItems, searchedItems });

  const scrollRefs = useRef<Record<string, React.RefObject<HTMLDivElement>>>(
    {}
  );

  const handleClick = (id: Vendor) => {
    setVendor?.(id);
  };

  return {
    localQuery,
    setLocalQuery,
    isSearching: !!searchQuery,
    searchedItems,
    hasNextPage,
    isFetchingNextPage,
    ref,
    scrollRefs,
    handleClick,
    allItems,
    vendor,
    sort,
    setSort,
    isLoading,
    filteredGames,
  };
};



