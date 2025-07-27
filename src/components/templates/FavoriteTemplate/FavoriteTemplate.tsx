import styles from "./FavoriteTemplate.module.scss";
import SearchInput from "@/components/molecules/SearchInput/SearchInput";
import CustomDropdown from "@/components/atoms/CustomDropdown/CustomDropdown";
import GameCard from "@/components/molecules/GameCard/GameCard";
import Loader from "@/components/atoms/Loader/Loader";
import { Game } from "@/types/GameType";
import { engLang } from "@/baseLocalization/baseLocalization";
import { useFavoritePage } from "@/hooks/PageHooks/useFavoritePage";
import Button from "@/components/atoms/Button/Button";
import Link from "next/link";

export default function FavoriteTemplate() {
  const {
    // Search State
    localQuery,
    setLocalQuery,

    // Sorting State
    sort,
    setSort,

    // Filtered & Visible Games
    visibleGames,
    isFetchingMore,
    hasMore,

    // Infinite Scroll Trigger
    observerRef,
  } = useFavoritePage();

  return (
    <div>
      <div className={styles.searchAndFilterWrapper}>
        <SearchInput
          value={localQuery}
          onChange={(e) => setLocalQuery(e.target.value)}
          placeholder={engLang.searchGame}
          type="text"
          hint={
            localQuery.length > 0 && localQuery.length < 3
              ? engLang.hintWarning
              : undefined
          }
        />
        <CustomDropdown selectedItem={sort} setSelectedItem={setSort!} />
      </div>
      {visibleGames.length < 1 && (
        <div className={styles.emptyList}>
          <span>{engLang.emptyList}</span>
          <Button variant="secondary">
            <Link href="/" className={styles.exploreBtn}>
              {engLang.discoverGames}
            </Link>
          </Button>
        </div>
      )}
      <div className={styles.grid}>
        {visibleGames?.map((game: Game) => (
          <GameCard key={game.slug} game={game} />
        ))}
        {hasMore && <div ref={observerRef} />}
      </div>

      {isFetchingMore && (
        <div className={styles.loaderWrapper}>
          <Loader isLoading={true} />
        </div>
      )}
    </div>
  );
}

