import { useRef } from "react";
import { useGameFilters } from "@/store/useGameFilters";
import { useCasinoGames } from "@/hooks/queries/useCasinoGames";
import { useDebouncedSearchQuery } from "@/hooks/useDebouncedSearchQuery";
import { useInfiniteScrollTrigger } from "@/hooks/useInfiniteScrollTrigger";
import { useLastValidSearchItems } from "@/hooks/useLastValidSearchItems";
import { useCategorizedGames } from "@/hooks/useCategorizedGames";
import { CATEGORY_META } from "@/constants/constants";
import { Vendor } from "@/store/types";

export const useHomePage = () => {
  const { category, setCategory, vendor, setVendor, sort, setSort } =
    useGameFilters();

  const { localQuery, setLocalQuery } = useDebouncedSearchQuery();

  const {
    data: gameData,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
  } = useCasinoGames({ category: category ?? "" });

  const allItems = gameData?.pages.flatMap((p) => p.data.items) || [];
  const { categorizedGames, mergedItems } = useCategorizedGames(allItems);
  const { searchedItems, lastValidSearchItems } = useLastValidSearchItems();

  const { ref } = useInfiniteScrollTrigger({
    onLoadMore: fetchNextPage,
    hasNextPage,
    disabled: !!localQuery,
  });

  const scrollRefs = useRef<Record<string, React.RefObject<HTMLDivElement>>>(
    {}
  );
  const scrollProviderRefs = useRef<HTMLDivElement>(null);

  const handleClick = (id: Vendor) => {
    setVendor?.(id);
  };

  return {
    localQuery,
    setLocalQuery,
    categorizedGames,
    selectedCategory: category,
    setSelectedCategory: setCategory,
    mergedItems,
    isSearching: !!localQuery,
    searchedItems,
    lastValidSearchItems,
    hasNextPage,
    isFetchingNextPage,
    ref,
    scrollRefs,
    CATEGORY_META,
    scrollProviderRefs,
    handleClick,
    allItems,
    vendor,
    sort,
    setSort,
    setVendor,
    isLoading,
  };
};

