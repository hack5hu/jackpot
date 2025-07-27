import SearchInput from "@/components/molecules/SearchInput/SearchInput";
import CategoryTabBar from "@/components/molecules/CategoryTabBar/CategoryTabBar";
import CategorySection from "@/components/organisms/CategorySection/CategorySection";
import GameCard from "@/components/molecules/GameCard/GameCard";
import styles from "@/components/templates/HomeTemplate/HomeTemplate.module.scss";
import ProviderSection from "@/components/molecules/ProviderSection/ProviderSection";
import { GAME_PROVIDERS } from "@/constants/constants";
import Loader from "@/components/atoms/Loader/Loader";
import { Game } from "@/types/GameType";
import { useHomePage } from "@/hooks/PageHooks/useHomePage";
import { engLang } from "@/baseLocalization/baseLocalization";

const HomePageTemplate = () => {
  const {
    localQuery,
    setLocalQuery,
    categorizedGames,
    selectedCategory,
    setSelectedCategory,
    mergedItems,
    isSearching,
    searchedItems,
    lastValidSearchItems,
    hasNextPage,
    isFetchingNextPage,
    ref,
    scrollRefs,
    CATEGORY_META,
    scrollProviderRefs,
    handleClick,
    isLoading,
  }= useHomePage()
  const {}= useHomePage()
  const displayGames = isSearching
    ? searchedItems.length > 0
      ? searchedItems
      : lastValidSearchItems.current
    : mergedItems;
  const categoryEntries = Object.entries(categorizedGames);
  const firstTwoCategories = categoryEntries.slice(0, 2);
  const remainingCategories = categoryEntries.slice(2);
  return (
    <div className={styles.wrapper}>
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

      <CategoryTabBar
        activeCategory={selectedCategory ?? null}
        onCategoryChange={setSelectedCategory}
      />

      {isSearching || selectedCategory ? (
        <div className={styles.grid}>
          {displayGames?.map((game: Game) => (
            <GameCard key={game?.slug} game={game} />
          ))}

          {!isSearching && hasNextPage && <div ref={ref} />}
        </div>
      ) : (
        <>
          {firstTwoCategories?.map(([category, games]) => (
            <CategorySection
              key={category}
              category={category}
              meta={CATEGORY_META[category]}
              games={games as Game[]}
              scrollRefs={scrollRefs.current[category]}
              setSelectedCategory={setSelectedCategory}
            />
          ))}
          {!isSearching && categoryEntries.length > 0 && (
            <ProviderSection
              providers={GAME_PROVIDERS}
              scrollRefs={scrollProviderRefs}
              handleClick={handleClick}
            />
          )}

          {remainingCategories?.map(([category, games]) => (
            <CategorySection
              key={category}
              category={category}
              meta={CATEGORY_META[category]}
              games={games as Game[]}
              scrollRefs={scrollRefs.current[category]}
              setSelectedCategory={setSelectedCategory}
            />
          ))}
        </>
      )}
      {(isLoading || isFetchingNextPage) && (
        <div className={styles.loaderWrapper}>
          <Loader isLoading={true} />
        </div>
      )}
    </div>
  );
};

export default HomePageTemplate;




































