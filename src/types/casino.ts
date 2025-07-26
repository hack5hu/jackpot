export type Game = {
  id: string;
  name: string;
  slug: string;
  category: string;
  vendor: string;
  // Add other fields as needed
};

export type CasinoGamesResponse = {
  data: {
    items: Game[];
    total: number;
  };
};

export type UseCasinoGamesParams = {
  category?: string;
  order?: string;
  vendor?: string;
};
