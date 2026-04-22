import { useEffect, useRef } from "react";

/**
 * Adds the `is-visible` class to the element when it enters the viewport.
 * Pair with the `.reveal` utility class for a fade-up scroll animation.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>(
  options: IntersectionObserverInit = { threshold: 0.15 }
) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, options);

    observer.observe(el);
    return () => observer.disconnect();
  }, [options]);

  return ref;
}

/**
 * Reveal helper for a list of elements (e.g. cards in a grid).
 * Each child element with the `data-reveal` attribute gets `is-visible` when it enters view.
 */
export function useRevealGroup<T extends HTMLElement = HTMLDivElement>(
  options: IntersectionObserverInit = { threshold: 0.1 }
) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const items = Array.from(root.querySelectorAll<HTMLElement>("[data-reveal]"));

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, options);

    items.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [options]);

  return ref;
}