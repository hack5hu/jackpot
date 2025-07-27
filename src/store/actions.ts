import { StateCreator } from "zustand";
import { FilterState } from "@/store/types";
import { Game } from "@/types/GameType";

/**
 * createGameFilterSlice
 * Zustand slice for managing filter-related state in the casino game app.
 *
 * Includes:
 * - Search and filter values (searchQuery, category, vendor, sort)
 * - Favorite game tracking
 * - Update methods for each state field
 */
export const createGameFilterSlice: StateCreator<FilterState> = (set, get) => ({
  searchQuery: "",
  category: null,
  vendor: undefined,
  sort: null,
  favoriteGame: [],

  setVendor: (vendor) => set({ vendor }),
  setSearchQuery: (searchQuery) => set({ searchQuery }),
  setCategory: (category) => set({ category }),
  setSort: (sort) => set({ sort }),
  /**
   * Toggle a game in the favorite list.
   * If already present, it removes the game; otherwise, it adds it.
   */
  setFavoriteGame: (game: Game) => {
    const currentFavorites = get().favoriteGame;
    const exists = currentFavorites.find((g) => g.slug === game.slug);

    const updatedFavorites = exists
      ? currentFavorites.filter((g) => g.slug !== game.slug)
      : [...currentFavorites, game];

    set({ favoriteGame: updatedFavorites });
  },
});

