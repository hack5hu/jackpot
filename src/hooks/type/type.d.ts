import { useInfiniteScrollTrigger } from '@/hooks/useInfiniteScrollTrigger';
export interface useFilteredGameProps{
  allItems: Game[];
  searchedItems: Game[];
}
type UseCasinoGamesProps = {
  category?: string;
  order?: string;
  vendor?: string;

};

export interface useInfiniteScrollTriggerProps {
  onLoadMore: () => void;
  hasNextPage: boolean;
  disabled: boolean;

}