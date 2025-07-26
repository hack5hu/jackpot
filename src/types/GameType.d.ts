export interface Game {
  enabled: boolean;
  name: string;
  slug: string;
  vendor: string;
  description: string;
  thumbnail: string;
  thumbnailBlur: string;
  borderColor: string;
  categories: string[];
  theoreticalPayOut: number;
  restrictedTerritories: string[];
  hasFunMode: boolean;
  featured: boolean;
  maxWinUSD: number;
  maxBetUSD: number;
  favorite: boolean;
}

export interface CasinoGamesResponse {
  success: boolean;
  data: {
    count: number;
    total: number;
    items: Game[];
  };
}
