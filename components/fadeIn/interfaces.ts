import { Transition, Variants } from 'framer-motion';

export const getTransition = (duration = 0.5, delay = 0.2): Transition => {
  return {
    duration,
    delay,
  };
};

export const variants: Variants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};
