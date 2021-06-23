import DayJS from 'dayjs';
import React, { useEffect, useMemo } from 'react';
import IsEqual from 'react-fast-compare';
import { motion, useAnimation, AnimatePresence, Transition, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const wordStyles: React.CSSProperties = {
  display: 'inline-block',
};

const spanStyles: React.CSSProperties = {
  position: 'relative',
  display: 'inline-block',
  width: 'auto',
};

type FlowTextProps = {
  text: string;
  triggerOnce?: boolean;
};

function FlowText(props: FlowTextProps): JSX.Element {
  const { text, triggerOnce } = props;
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

  const letterContainerVariants: Variants = useMemo(
    () => ({
      hidden: { transition: { staggerChildren: 0.015 } },
      visible: { transition: { staggerChildren: 0.03 } },
    }),
    [],
  );

  const letterTransition: Transition = useMemo(
    () => ({
      type: 'spring',
      damping: 12,
      stiffness: 200,
    }),
    [],
  );

  const letterVariants: Variants = useMemo(
    () => ({
      hidden: {
        opacity: 0,
        y: 20,
      },
      visible: {
        opacity: 1,
        y: 0,
      },
    }),
    [],
  );

  return (
    <AnimatePresence>
      <motion.p ref={ref} animate={controls} initial="hidden" variants={letterContainerVariants}>
        {text.split(' ').map((word: string) => (
          <div key={DayJS().valueOf()} style={wordStyles}>
            {Array.from(word).map((letter) => (
              <motion.span
                key={DayJS().valueOf()}
                style={spanStyles}
                transition={letterTransition}
                variants={letterVariants}>
                {letter === ' ' ? '\u00A0' : letter}
              </motion.span>
            ))}
            {'\u00A0'}
          </div>
        ))}
      </motion.p>
    </AnimatePresence>
  );
}

FlowText.defaultProps = {
  triggerOnce: true,
};

export default React.memo(FlowText, IsEqual);
