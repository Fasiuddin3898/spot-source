// src/components/ServiceCard.js
import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Button,
  Box,
} from '@mui/material';
import { CheckCircle } from '@mui/icons-material';

const ServiceCard = ({ 
  icon: Icon,
  title,
  subtitle,
  features,
  buttonText,
  buttonGradient,
  onButtonClick,
  iconColor = '#4facfe'
}) => {
  return (
    <Card
      sx={{
        background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255,255,255,0.2)',
        borderRadius: '25px',
        p: 4,
        height: '100%',
        textAlign: 'center',
        color: 'white',
        transition: 'all 0.3s ease',
        '&:hover': {
          transform: 'translateY(-10px)',
          boxShadow: '0 25px 50px rgba(0,0,0,0.3)',
        }
      }}
    >
      <Icon sx={{ fontSize: 80, mb: 3, color: iconColor }} />
      <Typography variant="h4" component="h3" gutterBottom fontWeight="bold">
        {title}
      </Typography>
      <Typography variant="h6" sx={{ mb: 3, opacity: 0.9 }}>
        {subtitle}
      </Typography>
      
      <Box sx={{ textAlign: 'left', mb: 4 }}>
        {features.map((item, index) => (
          <Box key={index} sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <CheckCircle sx={{ color: '#43e97b', mr: 2 }} />
            <Typography>{item}</Typography>
          </Box>
        ))}
      </Box>

      <Button
        variant="contained"
        size="large"
        onClick={onButtonClick}
        sx={{
          background: buttonGradient,
          color: 'white',
          px: 4,
          py: 1.5,
          fontSize: '1.1rem',
          fontWeight: 'bold',
          borderRadius: '25px',
          '&:hover': {
            transform: 'translateY(-3px)',
            boxShadow: `0 15px 30px ${getShadowColor(buttonGradient)}`,
          }
        }}
      >
        {buttonText}
      </Button>
    </Card>
  );
};

// Helper function to extract shadow color from gradient
const getShadowColor = (gradient) => {
  if (gradient.includes('#4facfe')) return 'rgba(79, 172, 254, 0.4)';
  if (gradient.includes('#f5576c')) return 'rgba(245, 87, 108, 0.4)';
  return 'rgba(255, 65, 78, 0.4)';
};

export default ServiceCard;