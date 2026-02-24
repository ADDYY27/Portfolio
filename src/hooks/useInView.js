import { useState, useEffect } from "react";

/**
 * Returns true once the referenced element scrolls into view.
 * @param {React.RefObject} ref
 * @param {number} threshold  0–1, fraction of element visible before triggering
 */
export default function useInView(ref, threshold = 0.12) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref, threshold]);

  return visible;
}
