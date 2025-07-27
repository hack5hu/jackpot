import { useMemo, useState, useEffect, useRef } from "react";
import { gameStates } from "@/store/gameStates";
import { useDebouncedSearchQuery } from "@/hooks/useDebouncedSearchQuery";
import { Option } from "@/store/types";

/**
 * useFavoritePage
 * Hook to manage logic for the Favorite screen including:
 * - Search
 * - Sort (ascending/descending)
 * - Infinite scroll loading (20 at a time)
 */
export const useFavoritePage = () => {
  const { searchQuery, favoriteGame = [] } = gameStates();
  const { localQuery, setLocalQuery } = useDebouncedSearchQuery();
  const [sort, setSort] = useState<Option>();
  const [visibleCount, setVisibleCount] = useState(20);
  const [isFetchingMore, setIsFetchingMore] = useState(false);

  const observerRef = useRef<HTMLDivElement | null>(null);

  /**
   * Filter & sort favorites based on searchQuery and selected sort option
   */
  const filteredFavorites = useMemo(() => {
    let games = [...favoriteGame];
    const trimValue = searchQuery?.trim();
    if (trimValue) {
      games = games.filter((game) =>
        game.name.toLowerCase().includes(trimValue.toLowerCase())
      );
    }

    if (sort?.id === "asc") {
      games.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sort?.id === "desc") {
      games.sort((a, b) => b.name.localeCompare(a.name));
    }

    return games;
  }, [favoriteGame, searchQuery, sort]);

  const visibleGames = filteredFavorites.slice(0, visibleCount);

  /**
   * Load more games by increasing visible count (simulates pagination)
   */
  const fetchMore = () => {
    if (visibleCount < filteredFavorites.length) {
      setIsFetchingMore(true);
      setTimeout(() => {
        setVisibleCount((prev) => prev + 20);
        setIsFetchingMore(false);
      }, 500);
    }
  };

  const hasMore = visibleCount < filteredFavorites.length;
  /**
   * IntersectionObserver to auto-trigger fetchMore when bottom is reached
   */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && hasMore && !isFetchingMore) {
          fetchMore();
        }
      },
      { threshold: 1 }
    );

    const currentRef = observerRef.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [hasMore, isFetchingMore, fetchMore]);

  return {
    // Search State
    localQuery,
    setLocalQuery,
    searchQuery,

    // Sorting State
    sort,
    setSort,

    // Filtered & Visible Games
    visibleGames,
    isFetchingMore,
    fetchMore,
    hasMore,

    // Infinite Scroll Trigger
    observerRef,
  };
};

