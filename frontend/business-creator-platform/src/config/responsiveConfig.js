// src/config/responsiveConfig.js
export const responsiveConfig = {
  // Hero Section Configurations
  hero: {
    mobile: {
      background: {
        size: 'cover',
        position: 'center',
        overlay: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8))'
      },
      typography: {
        heading: {
          fontSize: '2.5rem',
          minHeight: '100px',
          lineHeight: 1.2
        },
        subheading: {
          fontSize: '1.2rem',
          marginBottom: '2rem'
        }
      },
      spacing: {
        paddingY: 2,
        containerPadding: 2
      }
    },
    desktop: {
      background: {
        size: 'cover',
        position: 'center',
        overlay: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7))'
      },
      typography: {
        heading: {
          fontSize: '3.5rem',
          minHeight: '120px',
          lineHeight: 1.1
        },
        subheading: {
          fontSize: '1.5rem',
          marginBottom: '2rem'
        }
      },
      spacing: {
        paddingY: 4,
        containerPadding: 3
      }
    }
  },

  // Header/Navbar Configurations
  header: {
    mobile: {
      height: '60px',
      padding: '0 1rem',
      logoVariant: 'h5',
      showMenuText: false,
      blurEffect: true
    },
    desktop: {
      height: '80px',
      padding: '0 2rem',
      logoVariant: 'h4',
      showMenuText: true,
      blurEffect: true
    }
  },

  // Feature Boxes Configuration
  features: {
    mobile: {
      layout: {
        direction: 'column',
        gap: 2,
        paddingY: 6
      },
      cards: {
        padding: 3,
        iconSize: 60
      }
    },
    desktop: {
      layout: {
        direction: 'row',
        gap: 4,
        paddingY: 10
      },
      cards: {
        padding: 4,
        iconSize: 80
      }
    }
  }
};

export default responsiveConfig;