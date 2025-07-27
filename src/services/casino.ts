import api from "@/services/api";
import { LIMIT_API } from "@/constants/constants";
import { UseCasinoGamesParams, CasinoGamesResponse } from "@/types/casino";

/**
 * fetchCasinoGames
 * Fetches a paginated list of casino games from the API with optional filters.
 *
 * @param pageParam - Pagination offset (used for infinite scroll)
 * @param filters - Optional query filters (category, order, vendor)
 * @returns A Promise resolving to casino games data (items + total)
 */
export const fetchCasinoGames = async (
  pageParam = 0,
  filters: UseCasinoGamesParams
): Promise<CasinoGamesResponse> => {
  const { category, order, vendor } = filters;

  // Build query parameters based on filters and pagination
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

/**
 * fetchSearchGames
 * Fetches casino games based on a search query string.
 *
 * @param query - User input string for searching games
 * @returns A Promise resolving to matching casino games or an empty result
 */
export const fetchSearchGames = async (
  query: string
): Promise<CasinoGamesResponse> => {
  if (!query) return { data: { items: [], total: 0 } };
  const response = await api.get("/casino/games/search", {
    params: { query },
  });
  // Log query and response in development mode for debugging
  if (process.env.NODE_ENV === "development") {
    console.log("🔍 Search Query:", query, response.data);
  }

  return response.data;
};

