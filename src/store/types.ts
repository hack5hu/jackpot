export type Vendor = { name: string; image: string; id: string };
export type Option = { id: "asc" | "desc"; name: string };
export interface FilterState {
  searchQuery: string;
  category?: string | null;
  setCategory: (category: string) => void;
  vendor?: Vendor | null;
  setVendor?: (vendor: Vendor | null) => void;
  setSearchQuery: (query: string) => void;
  setFilters: (filters: Partial<FilterState>) => void;
  sort?: Option;
  setSort?: (sort: Option | null) => void ;
}




