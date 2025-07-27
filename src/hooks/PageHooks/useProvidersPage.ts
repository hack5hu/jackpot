import { useRef } from "react";
import { useCasinoGames } from "@/hooks/queries/useCasinoGames";
import { useSearchGames } from "@/hooks/queries/useSearchGames";
import { gameStates } from "@/store/gameStates";
import { useDebouncedSearchQuery } from "@/hooks/useDebouncedSearchQuery";
import { useInfiniteScrollTrigger } from "@/hooks/useInfiniteScrollTrigger";
import { useFilteredGames } from "@/hooks/useFilteredGames";
import { Vendor } from "@/store/types";

/**
 * useProvidersPage
 * Handles all logic for the Provider screen:
 * - Fetching games by vendor
 * - Searching within vendor's games
 * - Infinite scroll
 * - Sorting
 */
export const useProvidersPage = () => {
  const { vendor, setVendor, sort, setSort, searchQuery } = gameStates();

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

  /**
   * Trigger fetchNextPage when sentinel is in view
   * Disabled during active search
   */
  const { ref } = useInfiniteScrollTrigger({
    onLoadMore: fetchNextPage,
    hasNextPage,
    disabled: !!searchQuery,
  });

  const { filteredGames } = useFilteredGames({ allItems, searchedItems });

  /**
   * Scroll reference for vendor sections (if needed)
   */
  const scrollRefs = useRef<Record<string, React.RefObject<HTMLDivElement>>>(
    {}
  );

  const handleClick = (id: Vendor) => {
    setVendor?.(id);
  };

  return {
    // Search State
    localQuery, // Local debounced input
    setLocalQuery,
    isSearching: !!searchQuery,
    searchedItems,

    // Pagination & Scroll
    hasNextPage,
    isFetchingNextPage,
    ref, // IntersectionObserver ref
    scrollRefs,

    // Data & State
    allItems,
    filteredGames, // Final filtered games list
    isLoading,

    // Filters
    vendor,
    sort,
    setSort,

    // Vendor handler
    handleClick,
  };
};

