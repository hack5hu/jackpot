import { Game } from "@/types/GameType";

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

