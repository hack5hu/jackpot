import { useMemo, useState, useEffect, useRef } from "react";
import { gameStates } from "@/store/gameStates";
import { useDebouncedSearchQuery } from "@/hooks/useDebouncedSearchQuery";
import { Option } from "@/store/types";

export const useFavoritePage = () => {
  const { searchQuery, favoriteGame = [] } = gameStates();
  const { localQuery, setLocalQuery } = useDebouncedSearchQuery();
  const [sort, setSort] = useState<Option>();
  const [visibleCount, setVisibleCount] = useState(20);
  const [isFetchingMore, setIsFetchingMore] = useState(false);

  const observerRef = useRef<HTMLDivElement | null>(null);

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
    localQuery,
    setLocalQuery,
    sort,
    setSort,
    searchQuery,
    visibleGames,
    isFetchingMore,
    fetchMore,
    hasMore,
    observerRef,
  };
};

