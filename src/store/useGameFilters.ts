import { create } from "zustand";
import { persist } from "zustand/middleware";
import { FilterState } from "./types";
import { createGameFilterSlice } from "./actions";

export const useGameFilters = create<FilterState>()(
  persist(createGameFilterSlice, {
    name: "game-filters-storage",
    partialize: (state) => ({
      searchQuery: state.searchQuery,
      category: state.category,
      vendor: state.vendor,
    }),
  })
);
