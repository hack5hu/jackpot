import { IMAGES } from "@/assets/image/image";
import { engLang } from "@/baseLocalization/baseLocalization";
import type { StaticImageData } from "next/image";

/**
 * CATEGORY_META defines metadata for each supported game category.
 * Includes title (localized) and associated icon/image.
 */
export const CATEGORY_META: Record<
  string,
  { title: string; image: string | StaticImageData }
> = {
  ORIGINAL: {
    title: engLang.jackOriginal,
    image: IMAGES.LOGO_ICON,
  },
  VIDEOSLOTS: {
    title: engLang.slots,
    image: IMAGES.SLOT,
  },
  TABLEGAMES: {
    title: engLang.tableGames,
    image: IMAGES.TABLE_GAMES,
  },
  GAMESHOWS: {
    title: engLang.gameShow,
    image: IMAGES.GAME_SHOW,
  },
  LIVEDEALER: {
    title: engLang.liveDealer,
    image: IMAGES.LIVE_DEALER,
  },
};

/**
 * GAME_PROVIDERS lists all supported vendors/providers along with:
 * - Localized name
 * - Provider logo (URL-based)
 * - Unique identifier (id used in API queries and filtering)
 */
export const GAME_PROVIDERS = [
  {
    name: engLang.pragmaticPlay,
    image:
      "https://cdn.jackpot.bet/images/providers/pragmatic.png?format=auto&width=384&quality=75",
    id: "PragmaticPlay",
  },
  {
    name: engLang.jackOriginal,
    image:
      "https://cdn.jackpot.bet/images/providers/jackpot.png?format=auto&width=384&quality=75",
    id: "JackpotOriginal",
  },
  {
    name: engLang.bGaming,
    image:
      "https://cdn.jackpot.bet/images/providers/bgaming.png?format=auto&width=384&quality=75",
    id: "BGaming",
  },
  {
    name: engLang.hacksaw,
    image:
      "https://cdn.jackpot.bet/images/providers/hacksaw.png?format=auto&width=384&quality=75",
    id: "Hacksaw",
  },
  {
    name: engLang.playGo,
    image:
      "https://cdn.jackpot.bet/images/providers/playngo.png?format=auto&width=384&quality=75",
    id: "Play'nGo",
  },
  {
    name: engLang.relaxGaming,
    image:
      "https://cdn.jackpot.bet/images/providers/relax.png?format=auto&width=384&quality=75",
    id: "RelaxGaming",
  },
  {
    name: engLang.noLimitCity,
    image:
      "https://cdn.jackpot.bet/images/providers/no-limit-city.png?format=auto&width=384&quality=75",
    id: "NolimitCity",
  },
];

/**
 * OPTIONS defines the sort options for games.
 * Each item contains:
 * - `id`: Sort key used in API (asc or desc)
 * - `name`: Localized label for UI
 */
export const OPTIONS = [
  { id: "asc", name: engLang.asc },
  { id: "desc", name: engLang.desc },
];

export const LIMIT_API = 50;

