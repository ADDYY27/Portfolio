import { useRef } from "react";
import useInView from "../hooks/useInView";

/**
 * Wraps children in a div that fades + slides up when scrolled into view.
 * @param {number} delay  ms delay before the animation starts
 */
export default function FadeIn({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  const visible = useInView(ref);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity:    visible ? 1 : 0,
        transform:  visible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.75s ease ${delay}ms, transform 0.75s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
