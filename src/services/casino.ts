import api from "./api";
import { LIMIT_API } from "@/constants/constants";
import { UseCasinoGamesParams, CasinoGamesResponse } from "@/types/casino";

export const fetchCasinoGames = async (
  pageParam = 0,
  filters: UseCasinoGamesParams
): Promise<CasinoGamesResponse> => {
  const { category, order, vendor } = filters;
  const params: Record<string, string | number> = {
    ...(category && { category }),
    ...(vendor && { vendor }),
    ...(order && { order }),
    limit: LIMIT_API,
    offset: pageParam,
  };

  if (process.env.NODE_ENV === "development") {
    const queryString = new URLSearchParams(
      params as Record<string, string>
    ).toString();
    console.log("🔍 Requesting Casino Games:", `/casino/games?${queryString}`);
  }

  const response = await api.get("/casino/games", { params });
  return response.data;
};

export const fetchSearchGames = async (
  query: string
): Promise<CasinoGamesResponse> => {
  if (!query) return { data: { items: [], total: 0 } };
  const response = await api.get("/casino/games/search", {
    params: { query },
  });

  if (process.env.NODE_ENV === "development") {
    console.log("🔍 Search Query:", query, response.data);
  }

  return response.data;
};

