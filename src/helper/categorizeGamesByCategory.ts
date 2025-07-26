import { CATEGORY_META } from "@/constants/constants";
import { Game } from "@/types/GameType";

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

