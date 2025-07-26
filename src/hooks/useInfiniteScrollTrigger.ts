import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export const useInfiniteScrollTrigger = ({
  onLoadMore,
  hasNextPage,
  disabled,
}: {
  onLoadMore: () => void;
  hasNextPage: boolean;
  disabled: boolean;
}) => {
  const { ref, inView } = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (inView && hasNextPage && !disabled) {
      onLoadMore();
    }
  }, [inView, hasNextPage, onLoadMore, disabled]);

  return { ref };
};
