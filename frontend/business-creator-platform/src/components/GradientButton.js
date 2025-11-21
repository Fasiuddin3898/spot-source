// src/components/GradientButton.js
import React from 'react';
import { Button } from '@mui/material';

const GradientButton = ({ 
  children, 
  gradient, 
  shadowColor,
  onClick,
  size = 'large',
  ...props 
}) => {
  return (
    <Button
      variant="contained"
      size={size}
      onClick={onClick}
      sx={{
        background: gradient,
        color: 'white',
        px: 4,
        py: 1.5,
        fontSize: '1.1rem',
        fontWeight: 'bold',
        borderRadius: '25px',
        '&:hover': {
          transform: 'translateY(-3px)',
          boxShadow: `0 15px 30px ${shadowColor}`,
        },
        transition: 'all 0.3s ease',
        ...props.sx
      }}
      {...props}
    >
      {children}
    </Button>
  );
};

export default GradientButton;