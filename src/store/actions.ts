import { StateCreator } from "zustand";
import { FilterState } from "@/store/types";

export const createGameFilterSlice: StateCreator<FilterState> = (set) => ({
  searchQuery: "",
  category: null,
  vendor: undefined,
  setVendor: (vendor) => set({ vendor }),
  setSearchQuery: (searchQuery) => set({ searchQuery }),
  setFilters: (filters) => set((state) => ({ ...state, ...filters })),
  setSort: (sort) => set({ sort }),
  setCategory: (category) => set({ category }),
});


