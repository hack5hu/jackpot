import { useEffect, useCallback, useState } from "react";
import { debounce } from "@/utils/debounce";
import { useGameFilters } from "@/store/useGameFilters";

export const useDebouncedSearchQuery = () => {
  const { searchQuery, setSearchQuery, setCategory } = useGameFilters();
  const [localQuery, setLocalQuery] = useState(searchQuery || "");

  const debouncedSetSearchQuery = useCallback(
    debounce((query: string) => {
      if (query.length >= 3) {
        setSearchQuery(query);
        setCategory?.("");
      } else {
        setSearchQuery("");
      }
    }, 500),
    [setSearchQuery, setCategory]
  );

  useEffect(() => {
    debouncedSetSearchQuery(localQuery);
  }, [localQuery, debouncedSetSearchQuery]);

  return { localQuery, setLocalQuery };
};
