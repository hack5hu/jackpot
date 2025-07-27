import { useRef } from "react";
import { gameStates } from "@/store/gameStates";
import { useCasinoGames } from "@/hooks/queries/useCasinoGames";
import { useDebouncedSearchQuery } from "@/hooks/useDebouncedSearchQuery";
import { useInfiniteScrollTrigger } from "@/hooks/useInfiniteScrollTrigger";
import { useLastValidSearchItems } from "@/hooks/useLastValidSearchItems";
import { useCategorizedGames } from "@/hooks/useCategorizedGames";
import { CATEGORY_META } from "@/constants/constants";
import { Vendor } from "@/store/types";

/**
 * useHomePage
 * Central logic hook for the Home page:
 * - Fetching game data via filters
 * - Managing search, sorting, and category selections
 * - Handling infinite scroll
 * - Grouping and searching game data
 */
export const useHomePage = () => {
  const { category, setCategory, vendor, setVendor, sort, setSort } =
    gameStates();

  const { localQuery, setLocalQuery } = useDebouncedSearchQuery();

  const {
    data: gameData,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
  } = useCasinoGames({ category: category ?? "", order: sort?.id ?? "" });

  const allItems = gameData?.pages.flatMap((p) => p.data.items) || [];
  const { categorizedGames, mergedItems } = useCategorizedGames(allItems);
  const { searchedItems, lastValidSearchItems } = useLastValidSearchItems();

  const { ref } = useInfiniteScrollTrigger({
    onLoadMore: fetchNextPage,
    hasNextPage,
    disabled: !!localQuery, // Disable loading more if user is searching
  });

  const scrollRefs = useRef<Record<string, React.RefObject<HTMLDivElement>>>(
    {}
  );
  const scrollProviderRefs = useRef<HTMLDivElement>(null);

  const handleClick = (id: Vendor) => {
    setVendor?.(id);
  };
  const isSearching = !!localQuery;

  const displayGames = isSearching
    ? searchedItems.length > 0
      ? searchedItems
      : lastValidSearchItems.current
    : mergedItems;
  const categoryEntries = Object.entries(categorizedGames);
  const firstTwoCategories = categoryEntries.slice(0, 2);
  const remainingCategories = categoryEntries.slice(2);

  return {
    // Search
    localQuery,
    setLocalQuery,
    isSearching,
    searchedItems,
    lastValidSearchItems,

    // Data
    categoryEntries,
    firstTwoCategories,
    remainingCategories,

    // Filters & state
    selectedCategory: category,
    setSelectedCategory: setCategory,
    vendor,
    setVendor,
    sort,
    setSort,
    displayGames,

    // Scroll & Pagination
    ref,
    scrollRefs,
    scrollProviderRefs,
    hasNextPage,
    isFetchingNextPage,

    // Meta
    CATEGORY_META,
    handleClick,
    isLoading,
  };
};

