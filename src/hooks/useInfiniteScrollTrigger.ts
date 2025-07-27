import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useInfiniteScrollTriggerProps } from "@/hooks/type/type";

export const useInfiniteScrollTrigger = ({
  onLoadMore,
  hasNextPage,
  disabled,
}: useInfiniteScrollTriggerProps) => {
  const { ref, inView } = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (inView && hasNextPage && !disabled) {
      onLoadMore();
    }
  }, [inView, hasNextPage, onLoadMore, disabled]);

  return { ref };
};
