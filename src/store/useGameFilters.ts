import { create } from "zustand";

interface FilterState {
  searchQuery: string;
  category?: string;
  vendor?: string;
  setVendor: (vendor: string) => void;
  setSearchQuery: (query: string) => void;
  setFilters: (filters: Partial<FilterState>) => void;
}

export const useGameFilters = create<FilterState>((set) => ({
  searchQuery: "",
  category: undefined,
  vendor: undefined,
  setVendor: (vendor) => set({ vendor }),
  setSearchQuery: (searchQuery) => set({ searchQuery }),
  setFilters: (filters) => set((state) => ({ ...state, ...filters })),
}));
