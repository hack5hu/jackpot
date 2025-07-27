import React from "react";
import { IMAGES } from "@/assets/image/image";
import IconWithText from "@/components/atoms/IconWithText/IconWithText";
import ProviderSection from "@/components/molecules/ProviderSection/ProviderSection";
import SearchInput from "@/components/molecules/SearchInput/SearchInput";
import { GAME_PROVIDERS } from "@/constants/constants";
import styles from "@/components/templates/ProvidersTemplate/ProvidersTemplate.module.scss";
import CustomDropdown from "@/components/atoms/CustomDropdown/CustomDropdown";
import GameCard from "@/components/molecules/GameCard/GameCard";
import Loader from "@/components/atoms/Loader/Loader";
import { useProvidersPage } from "@/hooks/PageHooks/useProvidersPage";
import { Game } from "@/types/GameType";
import { engLang } from "@/baseLocalization/baseLocalization";

export default function ProviderTemplate() {
  const {
    // Search State
    localQuery,
    setLocalQuery,
    isSearching,

    // Pagination & Scroll
    hasNextPage,
    isFetchingNextPage,
    ref,
    scrollRefs,

    // Data & State
    filteredGames,
    isLoading,

    // Filters
    vendor,
    sort,
    setSort,

    // Vendor handler
    handleClick,
  } = useProvidersPage();

  return (
    <div>
      <ProviderSection
        providers={GAME_PROVIDERS}
        scrollRefs={scrollRefs}
        handleClick={handleClick}
        selectedProvider={vendor}
      />
      <div className={styles.searchWrapper}>
        <div style={{ marginTop: 10 }}>
          <IconWithText iconSrc={IMAGES.PROVIDERS} text={vendor?.name ?? ""} />
        </div>
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
      </div>
      <div className={styles.grid}>
        {filteredGames.map((game: Game) => (
          <GameCard key={game.slug} game={game} />
        ))}
        {!isSearching && hasNextPage && <div ref={ref} />}
      </div>
      {(isLoading || isFetchingNextPage) && (
        <div className={styles.loaderWrapper}>
          <Loader isLoading={true} />
        </div>
      )}
    </div>
  );
}

