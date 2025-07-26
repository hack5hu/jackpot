export type Vendor = { name: string; image: string; id: string };

export interface FilterState {
  searchQuery: string;
  category?: string | null;
  setCategory?: (category: string) => void;
  vendor?: Vendor | null;
  setVendor?: (vendor: Vendor | null) => void;
  setSearchQuery: (query: string) => void;
  setFilters: (filters: Partial<FilterState>) => void;
  sort?: { id: string; name: string } | null;
  setSort?: (sort: string) => void;
}

