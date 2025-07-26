import { IMAGES } from "@/assets/image/image";
import IconWithText from "@/components/atoms/IconWithText/IconWithText";
import ProviderSection from "@/components/molecules/ProviderSection/ProviderSection";
import SearchInput from "@/components/molecules/SearchInput/SearchInput";
import { GAME_PROVIDERS } from "@/constants/constants";
import React, { useEffect, useMemo, useRef } from "react";
import styles from "./ProviderPage.module.scss";
import CustomDropdown from "@/components/atoms/CustomDropdown/CustomDropdown";
import GameCard from "@/components/molecules/GameCard/GameCard";
import Loader from "@/components/atoms/Loader/Loader";
import { useProvidersPage } from "./useProviderPage";

export default function ProviderPage() {
  const {
    localQuery,
    setLocalQuery,
    isSearching,
    searchedItems,
    hasNextPage,
    isFetchingNextPage,
    ref,
    handleClick,
    allItems,
    vendor,
    sort,
    setSort,
    isLoading,
    scrollRefs,
    filteredGames,
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
          <IconWithText iconSrc={IMAGES.PROVIDERS} text={vendor?.name} />
        </div>
        <div className={styles.searchAndFilterWrapper}>
          <SearchInput
            value={localQuery}
            onChange={(e) => setLocalQuery(e.target.value)}
            placeholder="Search a game..."
            type="text"
            hint={
              localQuery.length > 0 && localQuery.length < 3
                ? "Enter 3 or more characters"
                : undefined
            }
          />
          <CustomDropdown selectedItem={sort} setSelectedItem={setSort} />
        </div>
      </div>
      <div className={styles.grid}>
        {filteredGames.map((game) => (
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













