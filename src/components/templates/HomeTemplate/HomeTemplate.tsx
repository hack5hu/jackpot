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
import CustomDropdown from "@/components/atoms/CustomDropdown/CustomDropdown";

const HomePageTemplate = () => {
  const {
    // Search
    localQuery,
    setLocalQuery,
    isSearching,

    // Data
    categoryEntries,
    firstTwoCategories,
    remainingCategories,

    // Filters & state
    selectedCategory,
    setSelectedCategory,
    sort,
    setSort,
    displayGames,

    // Scroll & Pagination
    ref,
    scrollRefs,
    scrollProviderRefs,
    hasNextPage,
    isFetchingNextPage,

    // Meta
    CATEGORY_META,
    handleClick,
    isLoading,
  } = useHomePage();

  return (
    <div className={styles.wrapper}>
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
        {selectedCategory && (
          <CustomDropdown selectedItem={sort} setSelectedItem={setSort!} />
        )}
      </div>

      <CategoryTabBar
        activeCategory={selectedCategory ?? null}
        onCategoryChange={setSelectedCategory}
        isFavorite
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

