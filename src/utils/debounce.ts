/**
 * debounce
 * Creates a debounced version of a function that delays its execution
 * until after a specified wait time has elapsed since the last call.
 *
 * Commonly used to limit how often a function (like search or resize)
 * executes when triggered rapidly.
 *
 * @template T - A function with any parameters and no return value
 * @param func - The original function to debounce
 * @param delay - Time in milliseconds to wait before executing
 * @returns A debounced version of the input function
 */
export function debounce<T extends (...args: Parameters<T>) => void>(
  func: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timer: ReturnType<typeof setTimeout> | undefined;

  return function (...args: Parameters<T>) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      func(...args);
    }, delay);
  };
}

