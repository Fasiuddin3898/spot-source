// src/pages/ContactUs.js
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import girlCreator from '../assets/images/girl_creator.jpg';
import Layout from '../components/Layout';
import { keyframes } from '@emotion/react';
import PropTypes from 'prop-types';
import { useSearchParams, useLocation } from 'react-router-dom';
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Alert,
  Grid,
  FormControlLabel,
  Checkbox,
  Tabs,
  Tab,
  Paper,
  Fade,
  Slide,
  useTheme,
  Grow,
  useMediaQuery,
  useScrollTrigger
} from '@mui/material';
import { useInView } from 'react-intersection-observer';
import {
  BusinessCenter,
  Person,
  Email,
  Phone,
  LocationOn,
  Link,
  Send,
  Star,
  TrendingUp,
  Groups,
  Rocket
} from '@mui/icons-material';
import BusinessForm from '../components/forms/BusinessForm';
import CreatorForm from '../components/forms/CreatorForm';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}


// Custom hook for scroll trigger
function useScrollAnimation(threshold = 300) {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: threshold,
  });
  
  return trigger;
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function ContactUs() {
  const [searchParams] = useSearchParams();
  const location = useLocation();
  
  const [tabValue, setTabValue] = useState(0);

  // Handle both query parameters and URL hash
  useEffect(() => {
    const formType = searchParams.get('form');
    const hash = window.location.hash;
    
    console.log('🔍 DEBUG - Current URL:', window.location.href);
    console.log('🔍 DEBUG - URL Hash:', hash);
    console.log('🔍 DEBUG - Form parameter:', formType);

    // Priority: URL Hash > Query Parameter > Default
    if (hash === '#creator-form' || formType === 'creator') {
      setTabValue(1);
      console.log('✅ Set tab to Creator form');
    } else if (hash === '#business-form' || formType === 'business') {
      setTabValue(0);
      console.log('✅ Set tab to Business form');
    } else {
      setTabValue(0);
      console.log('⚡ Defaulting to Business form');
    }

    // Scroll to form section if hash exists
    if (hash && (hash === '#business-form' || hash === '#creator-form')) {
      setTimeout(() => {
        const formSection = document.getElementById('contact-forms-section');
        if (formSection) {
          formSection.scrollIntoView({ 
            behavior: 'smooth',
            block: 'center'
          });
        }
      }, 500);
    }
  }, [searchParams, location]);

  const scrollTriggered = useScrollAnimation(200);
  const [businessFormData, setBusinessFormData] = useState({
    fullName: '',
    business: '',
    phone: '',
    email: '',
    address: '',
  });

  const [creatorFormData, setCreatorFormData] = useState({
    fullName: '',
    place: '',
    contact: '',
    instagram: '',
    youtube: '',
    readyForCollabs: false,
  });

  const { ref: formRef, inView: formInView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const [status, setStatus] = useState({ type: '', message: '' });
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
  // Stats data
  const stats = [
    { number: '150+', label: 'Active Creators' },
    { number: '300+', label: 'Happy Businesses' },
    { number: '95%', label: 'Success Rate' },
    { number: '24/7', label: 'Support' }
  ];

  // Animations
  const floatAnimation = keyframes`
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
  `;
  
  const glowAnimation = keyframes`
    0%, 100% { box-shadow: 0 0 20px rgba(32, 22, 23, 0.3); }
    50% { box-shadow: 0 0 40px rgba(32, 22, 23, 0.6); }
  `;

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
    setStatus({ type: '', message: '' });
  };

  // Remove the duplicate state: const [value, setValue] = React.useState(0);

  const handleBusinessChange = (e) => {
    setBusinessFormData({ ...businessFormData, [e.target.name]: e.target.value });
  };

  const handleCreatorChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setCreatorFormData({ ...creatorFormData, [e.target.name]: value });
  };

  const handleBusinessSubmit = async (e) => {
    e.preventDefault();
    console.log('Business Form Data:', businessFormData);
    setStatus({ type: 'success', message: 'Business inquiry sent successfully!' });
    setBusinessFormData({ fullName: '', business: '', phone: '', email: '', address: '' });
  };

  const handleCreatorSubmit = async (e) => {
    e.preventDefault();
    console.log('Creator Form Data:', creatorFormData);
    setStatus({ type: 'success', message: 'Creator application submitted successfully!' });
    setCreatorFormData({ fullName: '', place: '', contact: '', instagram: '', youtube: '', readyForCollabs: false });
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        position: 'relative',
      }}
    >
      {/* Fixed Background Image */}
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: `
                      url(${girlCreator})
                    `,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          zIndex: -1,
          '&::after': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.7) 0%, rgba(0,0,0,0.5) 100%)',
          }
        }}
      />

      {/* Header */}
      <Header 
        transparent={true}
        logo="SpotSource"
        logoVariant={isMobile ? "h5" : "h4"}
      />

      {/* Hero Section */}
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box 
          textAlign="center" 
          sx={{ 
            py: 12,
            mb: 6,
          }}
        >
          <Grow in={true} timeout={2000}>
            <Typography
              variant="h1"
              component="h1"
              fontWeight="bold"
              sx={{
                mb: 3,
                background: 'linear-gradient(45deg, #ffffff, #ffde22)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                fontSize: { xs: '2.5rem', md: '4rem' },
                transform: 'scale(1)',
              }}
            >
              Get In Touch
            </Typography>
          </Grow>
          <Slide in timeout={1500} direction="up">
            <Typography
            variant="h5"
            sx={{
              color: 'rgba(255,255,255,0.9)',
              maxWidth: '800px',
              margin: '0 auto 4rem auto',
              lineHeight: 1.6,
            }}
          >
            Whether you're a business looking to grow or a creator ready to collaborate, 
            we're here to help you succeed. Let's build something amazing together.
          </Typography>
          </Slide>

          {/* Stats Section */}
          <Fade in timeout={2500}>
            <Grid container spacing={3} sx={{ mt: 6, justifyContent: 'center', alignItems: 'center',}}>
              {stats.map((stat, index) => (
                <Grid item xs={6} md={3} key={index}>
                  <Box
                    sx={{
                      textAlign: 'center',
                      alignItems: 'center', 
                      animation: `${floatAnimation} 3s ease-in-out infinite`,
                      animationDelay: `${index * 0.2}s`,
                    }}
                  >
                    <Typography 
                      variant="h4" 
                      component="div" 
                      fontWeight="bold"
                      sx={{ 
                        color: '#ffde22',
                        textShadow: '1px 1px 4px rgba(0,0,0,0.3)',
                      }}
                    >
                      {stat.number}
                    </Typography>
                    <Typography 
                      variant="body1" 
                      sx={{ 
                        opacity: 0.9,
                        color: 'white'
                      }}
                    >
                      {stat.label}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Fade>
        </Box>

        {/* Main Content Grid */}
        <Grid container spacing={4} sx={{ position: 'relative', zIndex: 1 }}>
          {/* Left Side - Info Cards */}
          <Grid item xs={12} md={6}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              {/* Why Connect With Us Card */}
              <Slide in={scrollTriggered} timeout={2000} direction="up">
                <Box
                  sx={{
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255,255,255,0.2)',
                    borderRadius: '25px',
                    p: 4,
                    position: 'relative',
                    zIndex: 1,
                    transition: 'all 0.5s ease-in-out',
                    transform: 'scale(1)',
                    cursor: 'pointer',
                    // '&:hover': {
                    //   top: 0,
                    //   left: 0,
                    //   width: '90vw',
                    //   height: '60vh',
                    //   zIndex: 9999,
                    //   transform: 'scale(1)',
                    //   borderRadius: '0px',
                    //   p: 6,
                    //   display: 'flex',
                    //   flexDirection: 'column',
                    //   justifyContent: 'center',
                    //   alignItems: 'center',
                    //   background: 'linear-gradient(135deg, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.85) 100%)',
                    //   backdropFilter: 'blur(20px)',
                    //   border: '2px solid rgba(255,222,34,0.3)',
                    //   boxShadow: '0 0 50px rgba(255,222,34,0.2)',
                    // }
                  }}
                >
                  <Typography 
                    variant="h4" 
                    textAlign="center" 
                    gutterBottom 
                    sx={{ 
                      color: '#ffde22', 
                      fontWeight: 'bold', 
                      mb: 3,
                      transition: 'all 0.5s ease-in-out',
                      '&:hover': {
                        fontSize: '3rem',
                        mb: 6
                      }
                    }}
                  >
                    Why Connect With Us?
                  </Typography>
                  
                  <Box 
                    sx={{ 
                      display: 'flex', 
                      alignItems: 'flex-start', 
                      mb: 3,
                      transition: 'all 0.5s ease-in-out',
                      '&:hover': {
                        transform: 'scale(1.05)',
                        mb: 4
                      }
                    }}
                  >
                    <BusinessCenter sx={{ 
                      color: '#ffde22', 
                      mr: 2, 
                      mt: 0.5,
                      transition: 'all 0.5s ease-in-out',
                      '&:hover': {
                        fontSize: '2.5rem'
                      }
                    }} />
                    <Box>
                      <Typography variant="h6" sx={{ 
                        color: 'white', 
                        mb: 1,
                        transition: 'all 0.5s ease-in-out',
                        '&:hover': {
                          fontSize: '1.5rem'
                        }
                      }}>
                        For Businesses
                      </Typography>
                      <Typography variant="body1" sx={{ 
                        color: 'rgba(255,255,255,0.8)',
                        transition: 'all 0.5s ease-in-out',
                        '&:hover': {
                          fontSize: '1.2rem',
                          color: 'rgba(255,255,255,0.9)'
                        }
                      }}>
                        Transform your digital presence with our expert marketing strategies and 
                        connect with top-tier creators who align with your brand values.
                      </Typography>
                    </Box>
                  </Box>
                  
                  <Box 
                    sx={{ 
                      display: 'flex', 
                      alignItems: 'flex-start', 
                      mb: 3,
                      transition: 'all 0.5s ease-in-out',
                      '&:hover': {
                        transform: 'scale(1.05)',
                        mb: 4
                      }
                    }}
                  >
                    <Person sx={{ 
                      color: '#ffde22', 
                      mr: 2, 
                      mt: 0.5,
                      transition: 'all 0.5s ease-in-out',
                      '&:hover': {
                        fontSize: '2.5rem'
                      }
                    }} />
                    <Box>
                      <Typography variant="h6" sx={{ 
                        color: 'white', 
                        mb: 1,
                        transition: 'all 0.5s ease-in-out',
                        '&:hover': {
                          fontSize: '1.5rem'
                        }
                      }}>
                        For Creators
                      </Typography>
                      <Typography variant="body1" sx={{ 
                        color: 'rgba(255,255,255,0.8)',
                        transition: 'all 0.5s ease-in-out',
                        '&:hover': {
                          fontSize: '1.2rem',
                          color: 'rgba(255,255,255,0.9)'
                        }
                      }}>
                        Grow your audience and brand with exclusive collaboration opportunities, 
                        monetize your content, and access premium brand partnerships.
                      </Typography>
                    </Box>
                  </Box>
                  
                  <Box 
                    sx={{ 
                      display: 'flex', 
                      alignItems: 'flex-start',
                      transition: 'all 0.5s ease-in-out',
                      '&:hover': {
                        transform: 'scale(1.05)'
                      }
                    }}
                  >
                    <Email sx={{ 
                      color: '#ffde22', 
                      mr: 2, 
                      mt: 0.5,
                      transition: 'all 0.5s ease-in-out',
                      '&:hover': {
                        fontSize: '2.5rem'
                      }
                    }} />
                    <Box>
                      <Typography variant="h6" sx={{ 
                        color: 'white', 
                        mb: 1,
                        transition: 'all 0.5s ease-in-out',
                        '&:hover': {
                          fontSize: '1.5rem'
                        }
                      }}>
                        24/7 Support
                      </Typography>
                      <Typography variant="body1" sx={{ 
                        color: 'rgba(255,255,255,0.8)',
                        transition: 'all 0.5s ease-in-out',
                        '&:hover': {
                          fontSize: '1.2rem',
                          color: 'rgba(255,255,255,0.9)'
                        }
                      }}>
                        Our dedicated team is always available to help you with any queries, 
                        technical support, or collaboration guidance you might need.
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Slide>

              {/* Additional Info Card */}
              <Box
                sx={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  borderRadius: '25px',
                  p: 4,
                }}
              >
                <Typography in={scrollTriggered} timeout={2000} direction="up" variant="h4" textAlign="center" gutterBottom sx={{ color: '#ffde22', fontWeight: 'bold', mb: 3 }}>
                  Our Success Stories
                </Typography>
                
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                  <Star sx={{ color: '#ffde22', mr: 2 }} />
                  <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.9)' }}>
                    "Increased brand visibility by 300% in just 3 months through strategic creator partnerships."
                  </Typography>
                </Box>
                
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                  <Rocket sx={{ color: '#ffde22', mr: 2 }} />
                  <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.9)' }}>
                    "Helped creators earn over $1M in brand collaborations and sponsorships."
                  </Typography>
                </Box>
                
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <TrendingUp sx={{ color: '#ffde22', mr: 2 }} />
                  <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.9)' }}>
                    "95% client satisfaction rate with personalized campaign strategies."
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>

          {/* Update the forms section: */}
          <Grid item xs={12} md={6} ref={formRef} id="contact-forms-section">
            <Slide in={formInView} direction="up" timeout={1000}>
              <Paper
                sx={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  borderRadius: '25px',
                  overflow: 'hidden',
                  minHeight: '80vh',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                {/* Tabs */}
                <Tabs
                  value={tabValue}
                  onChange={handleTabChange}
                  variant="fullWidth"
                  sx={{
                    '& .MuiTab-root': {
                      color: 'rgba(255,255,255,0.7)',
                      fontSize: '1rem',
                      fontWeight: 'bold',
                      py: 2,
                    },
                    '& .Mui-selected': {
                      color: '#ffde22',
                    },
                    '& .MuiTabs-indicator': {
                      backgroundColor: '#ffde22',
                    },
                  }}
                >
                  <Tab 
                    icon={<BusinessCenter />} 
                    label="For Businesses" 
                    iconPosition="start"
                  />
                  <Tab 
                    icon={<Person />} 
                    label="For Creators" 
                    iconPosition="start"
                  />
                </Tabs>

                {/* Tab Panels - Use tabValue here */}
                <CustomTabPanel value={tabValue} index={0}>
                  <Box sx={{ height: '100%' }}>
                    <BusinessForm 
                      formData={businessFormData}
                      onChange={handleBusinessChange}
                      onSubmit={handleBusinessSubmit}
                    />
                  </Box>
                </CustomTabPanel>
                <CustomTabPanel value={tabValue} index={1}>
                  <Box sx={{ height: '100%' }}>
                    <CreatorForm 
                      formData={creatorFormData}
                      onChange={handleCreatorChange}
                      onSubmit={handleCreatorSubmit}
                    />
                  </Box>
                </CustomTabPanel>
              </Paper>
            </Slide>

            {status.message && (
              <Alert
                severity={status.type}
                sx={{
                  mt: 3,
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  color: 'white',
                }}
              >
                {status.message}
              </Alert>
            )}
          </Grid>
        </Grid>
      </Container>
      <Layout />
    </Box>
  );
}

export default ContactUs;