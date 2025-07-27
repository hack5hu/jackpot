import { CATEGORY_META } from "@/constants/constants";
import { Game } from "@/types/GameType";

/**
 * Categorizes a list of games into a dictionary keyed by category.
 * Only includes categories that are defined in CATEGORY_META.
 *
 * @param games - Array of Game objects
 * @returns An object mapping category keys to arrays of games
 */
export function categorizeGamesByCategory(games: Game[]) {
  const categoryMap: Record<string, Game[]> = {};

  games.forEach((game) => {
    game?.categories?.forEach((category: string) => {
      if (CATEGORY_META[category]) {
        if (!categoryMap[category]) {
          categoryMap[category] = [];
        }
        categoryMap[category].push(game);
      }
    });
  });

  return categoryMap;
}

