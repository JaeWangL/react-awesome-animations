import { motion, useAnimation } from 'framer-motion';
import React, { useEffect } from 'react';
import IsEqual from 'react-fast-compare';
import { useInView } from 'react-intersection-observer';
import { getTransition, variants } from './interfaces';

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
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={getTransition(duration, delay)}
      variants={variants}>
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
