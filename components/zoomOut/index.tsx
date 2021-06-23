import { motion, useAnimation, Transition, Variants } from 'framer-motion';
import React, { useEffect, useMemo } from 'react';
import IsEqual from 'react-fast-compare';
import { useInView } from 'react-intersection-observer';

type ZoomOutProps = {
  children: React.ReactNode;
  triggerOnce?: boolean;
  duration?: number;
  delay?: number;
  easing?: number[];
};

function ZoomOut(props: ZoomOutProps): JSX.Element {
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
      hidden: { opacity: 0, scale: 1.3 },
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

ZoomOut.defaultProps = {
  triggerOnce: true,
  duration: 0.5,
  delay: 0.2,
  easing: [1, 0.05, 0.48, 0.92],
};

export default React.memo(ZoomOut, IsEqual);
