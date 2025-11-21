// src/components/Header.js
import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const Header = ({ 
  transparent = false, 
  logo, 
  logoVariant = "h4",
  height = "80px",
  padding = "0 2rem"
}) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const navigationItems = [
    { label: 'Home', path: '/' },
    { label: 'Journey', path: '/journey' },
    { label: 'Services', path: '/services' },
    { label: 'Contact Us', path: '/contactus' },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box
      sx={{
        width: 250,
        background: 'linear-gradient(135deg, #ffde22 0%, #ff8928 50%, #ff414e 100%)',
        height: '100%',
      }}
      onClick={handleDrawerToggle}
    >
      <List>
        {navigationItems.map((item) => (
          <ListItem
            key={item.label}
            component={Link}
            to={item.path}
            sx={{
              color: 'white',
              textDecoration: 'none',
              '&:hover': {
                backgroundColor: 'rgba(255,255,255,0.1)',
              },
            }}
          >
            <ListItemText primary={item.label} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="static" // Changed from 'fixed' to 'static'
        sx={{
          backgroundColor: transparent ? 'transparent' : 'background.paper',
          backdropFilter: 'none', // Remove blur effect
          boxShadow: 'none',
          height: height,
          transition: 'all 0.3s ease',
        }}
      >
        <Toolbar sx={{ 
          minHeight: height, 
          padding: padding,
          justifyContent: 'space-between' 
        }}>
          <Typography 
            variant={logoVariant} 
            component="div" 
            sx={{ 
              fontWeight: 'bold',
              color: transparent ? 'white' : 'text.primary',
            }}
          >
            {logo}
          </Typography>
          
          {/* Desktop Navigation */}
          {!isMobile && (
            <Box sx={{ display: 'flex', gap: 3 }}>
              {navigationItems.map((item) => (
                <Button
                  key={item.label}
                  component={Link}
                  to={item.path}
                  sx={{
                    color: transparent ? 'white' : 'text.primary',
                    fontWeight: 'bold',
                    textTransform: 'none',
                    fontSize: '1rem',
                    '&:hover': {
                      backgroundColor: 'rgba(255,255,255,0.1)',
                      transform: 'translateY(-2px)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>
          )}

          {/* Mobile Navigation Icon */}
          {isMobile && (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{
                color: transparent ? 'white' : 'text.primary',
              }}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { 
            boxSizing: 'border-box', 
            width: 250,
            border: 'none',
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Header;