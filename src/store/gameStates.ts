import { create } from "zustand";
import { persist } from "zustand/middleware";
import { FilterState } from "@/store/types";
import { createGameFilterSlice } from "@/store/actions";

export const gameStates = create<FilterState>()(
  persist(createGameFilterSlice, {
    name: "game-filters-storage",
    partialize: (state) => ({
      category: state.category,
      vendor: state.vendor,
      favoriteGame: state.favoriteGame
    }),
  })
);

