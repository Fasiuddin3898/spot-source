// src/components/ScrollAnimatedBoxes.js
import React from 'react';
import { Box, Fade } from '@mui/material';
import { useInView } from 'react-intersection-observer';

const ScrollAnimatedBoxes = ({ 
  children, 
  direction = 'up', 
  timeout = 3000,
  threshold = 0.1 
}) => {
  const [ref, inView] = useInView({
    threshold: threshold,
    triggerOnce: true, // Animation triggers only once
  });

  return (
    <Box ref={ref}>
      <Fade 
        in={inView} 
        timeout={timeout}
        style={{ 
          transform: inView ? 'none' : `translateY(${direction === 'up' ? '50px' : '-50px'})`,
          opacity: inView ? 1 : 0,
          transition: `all ${timeout}ms ease-out`
        }}
      >
        <Box>{children}</Box>
      </Fade>
    </Box>
  );
};

export default ScrollAnimatedBoxes;