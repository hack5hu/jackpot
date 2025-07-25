import { useEffect, useRef, useState, useCallback, useMemo } from "react";
import { useCasinoGames, useSearchGames } from "@/hooks/useCasinoGames";
import { useGameFilters } from "@/store/useGameFilters";
import { useInView } from "react-intersection-observer";
import { debounce } from "@/utils/debounce";
import { categorizeGamesByCategory } from "@/helper/categorizeGamesByCategory";
import { CATEGORY_META } from "@/constants/constants";
// import { useRouter } from "next/router";

export const useHomePage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const { searchQuery, setSearchQuery, setVendor } = useGameFilters();
  const [localQuery, setLocalQuery] = useState(searchQuery || "");
  const { ref, inView } = useInView({ threshold: 0.5 });
  const scrollRefs = useRef<Record<string, React.RefObject<HTMLDivElement>>>(
    {}
  );
  const scrollProviderRefs = useRef<HTMLDivElement>(null);

  const debouncedSetSearchQuery = useCallback(
    debounce((query) => {
      if (query.length >= 3) {
        setSearchQuery(query);
        setSelectedCategory(null);
      } else {
        setSearchQuery("");
      }
    }, 500),
    [setSearchQuery]
  );

  useEffect(() => {
    debouncedSetSearchQuery(localQuery);
  }, [localQuery, debouncedSetSearchQuery]);

  const {
    data: gameData,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useCasinoGames({ category: selectedCategory });

  const {
    data: searchData,
    isFetching: isSearchFetching,
    isSuccess: isSearchSuccess,
  } = useSearchGames();

  const lastValidSearchItems = useRef<any[]>([]);
  useEffect(() => {
    if (searchQuery && isSearchSuccess && searchData?.data.items?.length > 0) {
      lastValidSearchItems.current = searchData.data.items;
    }
  }, [searchQuery, searchData, isSearchSuccess]);

  const allItems = gameData?.pages.flatMap((p) => p.data.items) || [];
  const categorizedGames = useMemo(
    () => categorizeGamesByCategory(allItems),
    [allItems]
  );

  const cachedCategoryItems = useMemo(() => {
    if (!selectedCategory || searchQuery) return [];
    return categorizedGames[selectedCategory] || [];
  }, [selectedCategory, categorizedGames, searchQuery]);

  const apiFetchedItems = useMemo(() => {
    return gameData?.pages.flatMap((p) => p.data.items) || [];
  }, [gameData]);

  const mergedItems = useMemo(() => {
    const all = [...cachedCategoryItems, ...apiFetchedItems];
    return all.filter(
      (item, index, self) =>
        index === self.findIndex((i) => i.slug === item.slug)
    );
  }, [cachedCategoryItems, apiFetchedItems]);

  const searchedItems = searchData?.data.items || [];
  const isSearching = !!searchQuery;

  useEffect(() => {
    if (inView && hasNextPage && !searchQuery) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage, searchQuery]);

  // const router = useRouter();

  const handleClick = (id:string) => {
    setVendor(id);
  };
  return {
    localQuery,
    setLocalQuery,
    categorizedGames,
    selectedCategory,
    setSelectedCategory,
    mergedItems,
    isSearching,
    searchedItems,
    lastValidSearchItems,
    hasNextPage,
    isFetchingNextPage,
    ref,
    scrollRefs,
    CATEGORY_META,
    scrollProviderRefs,
    handleClick,
  };
};






