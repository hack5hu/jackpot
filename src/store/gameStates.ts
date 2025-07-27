import { create } from "zustand";
import { persist } from "zustand/middleware";
import { FilterState } from "@/store/types";
import { createGameFilterSlice } from "@/store/actions";

/**
 * gameStates
 * Zustand global state store for managing filters and favorite games.
 *
 * - Uses `persist` middleware to store selected state parts in localStorage
 * - Persists: category, vendor, and favoriteGame
 * - Other transient states (searchQuery, sort) are reset on reload
 */
export const gameStates = create<FilterState>()(
  persist(createGameFilterSlice, {
    name: "game-filters-storage",
    /**
     * partialize:
     * Controls which parts of the state are persisted to storage.
     * Only persist category, vendor, and favoriteGame (not searchQuery or sort).
     */
    partialize: (state) => ({
      category: state.category,
      vendor: state.vendor,
      favoriteGame: state.favoriteGame,
    }),
  })
);

