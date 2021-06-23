import { motion, useAnimation, Transition, Variants } from 'framer-motion';
import React, { useEffect, useMemo } from 'react';
import IsEqual from 'react-fast-compare';
import { useInView } from 'react-intersection-observer';

type FadeInDownProps = {
  children: React.ReactNode;
  triggerOnce?: boolean;
  duration?: number;
  delay?: number;
  yOffset?: number;
  easing?: number[];
};

function FadeInDown(props: FadeInDownProps): JSX.Element {
  const { children, delay, duration, easing, triggerOnce, yOffset } = props;
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  const transition: Transition = useMemo(
    () => ({
      duration,
      delay,
      ease: easing,
    }),
    [delay, duration, easing],
  );

  const variants: Variants = useMemo(
    () => ({
      hidden: { y: yOffset, opacity: 0 },
      visible: {
        y: 0,
        x: 0,
        opacity: 1,
      },
    }),
    [],
  );

  return (
    <motion.div ref={ref} animate={controls} initial="hidden" transition={transition} variants={variants}>
      {children}
    </motion.div>
  );
}

FadeInDown.defaultProps = {
  triggerOnce: true,
  duration: 0.5,
  delay: 0.2,
  yOffset: -50,
  easing: [0.42, 0, 0.58, 1],
};

export default React.memo(FadeInDown, IsEqual);
