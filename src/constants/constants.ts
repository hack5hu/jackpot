import { IMAGES } from "@/assets/image/image";
import type { StaticImageData } from "next/image";

export const CATEGORY_META: Record<
  string,
  { title: string; image: string | StaticImageData }
> = {
  ORIGINAL: {
    title: "Jackpot Originals",
    image: IMAGES.LOGO_ICON,
  },
  VIDEOSLOTS: {
    title: "Slots",
    image: IMAGES.SLOT,
  },
  TABLEGAMES: {
    title: "Table Games",
    image: IMAGES.TABLE_GAMES,
  },
  GAMESHOWS: {
    title: "Game Shows",
    image: IMAGES.GAME_SHOW,
  },
  LIVEDEALER: {
    title: "Live Dealer",
    image: IMAGES.LIVE_DEALER,
  },
};

export const GAME_PROVIDERS = [
  {
    name: "Pragmatic Play",
    image:
      "https://cdn.jackpot.bet/images/providers/pragmatic.png?format=auto&width=384&quality=75",
    id: "PragmaticPlay",
  },
  {
    name: "Jackpot Original",
    image:
      "https://cdn.jackpot.bet/images/providers/jackpot.png?format=auto&width=384&quality=75",
    id: "JackpotOriginal",
  },
  {
    name: "BGaming",
    image:
      "https://cdn.jackpot.bet/images/providers/bgaming.png?format=auto&width=384&quality=75",
    id: "BGaming",
  },
  {
    name: "OneTouch",
    image:
      "https://cdn.jackpot.bet/images/providers/onetouch.png?format=auto&width=384&quality=75",
    id: "OneTouch",
  },
  {
    name: "Hacksaw",
    image:
      "https://cdn.jackpot.bet/images/providers/hacksaw.png?format=auto&width=384&quality=75",
    id: "Hacksaw",
  },
  {
    name: "Play'n Go",
    image:
      "https://cdn.jackpot.bet/images/providers/playngo.png?format=auto&width=384&quality=75",
    id: "Play'nGo",
  },
  {
    name: "Relax Gaming",
    image:
      "https://cdn.jackpot.bet/images/providers/relax.png?format=auto&width=384&quality=75",
    id: "RelaxGaming",
  },
  {
    name: "No Limit City",
    image:
      "https://cdn.jackpot.bet/images/providers/no-limit-city.png?format=auto&width=384&quality=75",
    id: "NolimitCity",
  },
];

