import { useEffect, useCallback, useState } from "react";
import { debounce } from "@/utils/debounce";
import { gameStates } from "@/store/gameStates";

/**
 * useDebouncedSearchQuery
 * A custom hook that handles debounced search input logic.
 *
 * - Waits for the user to stop typing for 500ms before updating global search state
 * - Only sets the search query if the input is at least 3 characters
 * - Clears the category when a valid search query is entered
 */ export const useDebouncedSearchQuery = () => {
  const { searchQuery, setSearchQuery, setCategory } = gameStates();
  const [localQuery, setLocalQuery] = useState(searchQuery || "");

  /**
   * Debounced version of setSearchQuery
   * - Triggers after 500ms delay
   * - Ignores values shorter than 3 characters
   */
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

