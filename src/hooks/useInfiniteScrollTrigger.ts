import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useInfiniteScrollTriggerProps } from "@/hooks/type/type";

/**
 * useInfiniteScrollTrigger
 * A custom hook to trigger pagination (infinite scroll) when a target element becomes visible in the viewport.
 *
 * @param onLoadMore - Function to call when next page should load
 * @param hasNextPage - Boolean flag to indicate if more data exists
 * @param disabled - Optional flag to disable the scroll trigger
 *
 * @returns ref - React ref to be attached to the scroll trigger element
 */
export const useInfiniteScrollTrigger = ({
  onLoadMore,
  hasNextPage,
  disabled,
}: useInfiniteScrollTriggerProps) => {
  // Setup Intersection Observer with 50% visibility threshold
  const { ref, inView } = useInView({ threshold: 0.5 });
  /**
   * Effect: Triggers `onLoadMore` when the ref element is in view,
   * has more pages to load, and the hook is not disabled.
   */
  useEffect(() => {
    if (inView && hasNextPage && !disabled) {
      onLoadMore();
    }
  }, [inView, hasNextPage, onLoadMore, disabled]);

  return { ref };
};

