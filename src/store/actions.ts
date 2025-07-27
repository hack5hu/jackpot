import { StateCreator } from "zustand";
import { FilterState } from "@/store/types";
import { Game } from "@/types/GameType";

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
  setFilters: (filters) => set((state) => ({ ...state, ...filters })),

  setFavoriteGame: (game: Game) => {
    const currentFavorites = get().favoriteGame;
    const exists = currentFavorites.find((g) => g.slug === game.slug);

    const updatedFavorites = exists
      ? currentFavorites.filter((g) => g.slug !== game.slug)
      : [...currentFavorites, game];

    set({ favoriteGame: updatedFavorites });
  },
});

