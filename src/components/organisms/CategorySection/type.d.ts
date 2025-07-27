
type CategoryMeta = {
  title: string;
  image: string | StaticImageData;
};

type CategorySectionProps = {
  category: string;
  meta: CategoryMeta;
  games: Game[];
  scrollRefs: RefObject<HTMLDivElement | null>;
  setSelectedCategory: (cat: string) => void;

};