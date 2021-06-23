import { motion, useAnimation, Transition, Variants } from 'framer-motion';
import React, { useEffect, useMemo } from 'react';
import IsEqual from 'react-fast-compare';
import { useInView } from 'react-intersection-observer';

type FadeInProps = {
  children: React.ReactNode;
  triggerOnce?: boolean;
  duration?: number;
  delay?: number;
};

function FadeIn(props: FadeInProps): JSX.Element {
  const { children, delay, duration, triggerOnce } = props;
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
      duration,
      delay,
    }),
    [delay, duration],
  );

  const variants: Variants = useMemo(
    () => ({
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    }),
    [],
  );

  return (
    <motion.div ref={ref} animate={controls} initial="hidden" transition={transition} variants={variants}>
      {children}
    </motion.div>
  );
}

FadeIn.defaultProps = {
  triggerOnce: false,
  duration: 0.5,
  delay: 0.2,
};

export default React.memo(FadeIn, IsEqual);
