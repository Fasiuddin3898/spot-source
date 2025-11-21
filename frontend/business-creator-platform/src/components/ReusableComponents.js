// src/components/ReusableComponents.js
import { Typography, Button } from '@mui/material';

// Reusable Gradient Text Component
export const GradientText = ({ 
  children, 
  variant = 'h3', 
  component = 'h2', 
  gradient = 'linear-gradient(45deg, #667eea, #764ba2)',
  align = 'center',
  ...props 
}) => (
  <Typography
    variant={variant}
    component={component}
    textAlign={align}
    fontWeight="bold"
    gutterBottom
    sx={{
      background: gradient,
      backgroundClip: 'text',
      WebkitBackgroundClip: 'text',
      color: 'transparent',
      ...props.sx
    }}
    {...props}
  >
    {children}
  </Typography>
);

// Reusable Button Component
export const GradientButton = ({ 
  children, 
  to, 
  component, 
  variant = 'contained',
  ...props 
}) => (
  <Button
    variant={variant}
    size="large"
    component={component}
    to={to}
    sx={{
      bgcolor: 'primary.main',
      color: 'primary.contrastText',
      px: { xs: 4, md: 6 },
      py: 1.5,
      fontSize: '1.1rem',
      fontWeight: 'bold',
      borderRadius: '50px',
      boxShadow: '0 8px 25px rgba(0,0,0,0.2)',
      '&:hover': {
        bgcolor: 'primary.dark',
        transform: 'translateY(-3px)',
        boxShadow: '0 12px 35px rgba(0,0,0,0.3)',
      },
      transition: 'all 0.3s ease',
      ...props.sx
    }}
    {...props}
  >
    {children}
  </Button>
);