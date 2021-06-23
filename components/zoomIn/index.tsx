import { motion, useAnimation, Transition, Variants } from 'framer-motion';
import React, { useEffect, useMemo } from 'react';
import IsEqual from 'react-fast-compare';
import { useInView } from 'react-intersection-observer';

type ZoomInProps = {
  children: React.ReactNode;
  triggerOnce?: boolean;
  duration?: number;
  delay?: number;
  easing?: number[];
};

function ZoomIn(props: ZoomInProps): JSX.Element {
  const { children, delay, duration, easing, triggerOnce } = props;
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
      hidden: { opacity: 0, scale: 0.7 },
      visible: { opacity: 1, scale: 1 },
    }),
    [],
  );

  return (
    <motion.div ref={ref} animate={controls} initial="hidden" transition={transition} variants={variants}>
      {children}
    </motion.div>
  );
}

ZoomIn.defaultProps = {
  triggerOnce: true,
  duration: 0.5,
  delay: 0.2,
  easing: [0.92, 0.48, 0.05, 1],
};

export default React.memo(ZoomIn, IsEqual);
