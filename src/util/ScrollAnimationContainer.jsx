import { AnimatedHeading } from "../styles/AnimatedHeading";
import { UseScrollAnimation } from "./useScrollAnimation";

export const ScrollAnimationContainer = ({ children }) => {
  const { ref, isInViewport } = UseScrollAnimation();
  return (
    <AnimatedHeading ref={ref} className={isInViewport ? "frame-in" : ""}>
      {children}
    </AnimatedHeading>
  );
};
