import { motion, useAnimation, Transition, Variants } from 'framer-motion';
import React, { useEffect, useMemo } from 'react';
import IsEqual from 'react-fast-compare';
import { useInView } from 'react-intersection-observer';

type FlipInProps = {
  children: React.ReactNode;
  duration?: number;
  delay?: number;
  damping?: number;
  triggerOnce?: boolean;
  stiffness?: number;
  mass?: number;
};

function FlipIn(props: FlipInProps): JSX.Element {
  const { children, delay, duration, damping, mass, stiffness, triggerOnce } = props;
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce,
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
      type: 'spring',
      stiffness,
      damping,
      mass: 1,
      duration,
      delay,
    }),
    [delay, duration, damping, mass, stiffness],
  );

  const variants: Variants = useMemo(
    () => ({
      hidden: { opacity: 0, scaleY: 0 },
      visible: { opacity: 1, scaleY: 1 },
    }),
    [],
  );

  return (
    <motion.div ref={ref} animate={controls} initial="hidden" transition={transition} variants={variants}>
      {children}
    </motion.div>
  );
}

FlipIn.defaultProps = {
  triggerOnce: true,
  duration: 0.5,
  delay: 0.2,
  damping: 50,
  mass: 1,
  stiffness: 500,
};

export default React.memo(FlipIn, IsEqual);
