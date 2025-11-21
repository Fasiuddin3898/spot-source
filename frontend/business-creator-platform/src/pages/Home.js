// src/pages/Home.js
import React, { useEffect, useState } from 'react';
import {
  Container,
  Typography,
  Button,
  Card,
  Box,
  Fade,
  Slide,
  Zoom,
  useTheme,
  useMediaQuery,
  Grid,
  useScrollTrigger
} from '@mui/material';
import { Link } from 'react-router-dom';
import { ConnectWithoutContact, Business, Person, Star, TrendingUp, CheckCircle } from '@mui/icons-material';
import { keyframes } from '@emotion/react';
import Header from '../components/Header';
import heroBackground from '../assets/images/home_background.jpg';
import GradientButton from '../components/GradientButton';
import Layout from '../components/Layout';


// Animations
const floatAnimation = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
`;

const glowAnimation = keyframes`
  0%, 100% { box-shadow: 0 0 20px rgba(32, 22, 23, 0.3); }
  50% { box-shadow: 0 0 40px rgba(32, 22, 23, 0.6); }
`;

// Custom hook for scroll trigger
function useScrollAnimation(threshold = 300) {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: threshold,
  });
  
  return trigger;
}

const Home = () => {
  const [animatedHeading, setAnimatedHeading] = useState('');
  const fullText = 'Connect Businesses with Amazing Creators';
  const [showFeatures, setShowFeatures] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    let i = 0;
    const typingEffect = setInterval(() => {
      if (i < fullText.length) {
        setAnimatedHeading(fullText.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingEffect);
        setShowFeatures(true);
      }
    }, 100);

    return () => clearInterval(typingEffect);
  }, []);

  // Feature boxes with new theme colors
  const featureBoxes = [
    {
      icon: Business,
      title: 'For Businesses',
      description: 'Find the perfect creators to showcase your brand and reach new audiences with authentic content',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      features: ['Brand Visibility', 'Authentic Content', 'Targeted Audience'],
      iconColor: '#667eea'
    },
    {
      icon: ConnectWithoutContact,
      title: 'Easy Collaboration',
      description: 'Seamless communication and project management tools to make collaboration effortless',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      features: ['Project Management', 'Real-time Chat', 'File Sharing'],
      iconColor: '#f093fb'
    },
    {
      icon: Person,
      title: 'For Creators',
      description: 'Discover exciting brands and monetize your creative skills with fair compensation',
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      features: ['Fair Compensation', 'Creative Freedom', 'Portfolio Growth'],
      iconColor: '#4facfe'
    }
  ];

  // Inside your component
  const scrollTriggered = useScrollAnimation(200);

  // Stats data
  const stats = [
    { number: '150+', label: 'Active Creators' },
    { number: '300+', label: 'Happy Businesses' },
    { number: '95%', label: 'Success Rate' },
    { number: '24/7', label: 'Support' }
  ];

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Hero Section */}
      <Box
        sx={{
          background: `
            linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.5) 100%),
            url(${heroBackground})
          `,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: isMobile ? 'scroll' : 'fixed',
          color: 'white',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* Header */}
        <Header 
          transparent={true}
          logo="SpotSource"
          logoVariant={isMobile ? "h5" : "h4"}
        />

        {/* Hero Content */}
        <Box sx={{ 
          flex: 1, 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          textAlign: 'center',
          py: isMobile ? 4 : 8
        }}>
          <Container maxWidth="lg" sx={{ px: isMobile ? 2 : 3 }}>
            <Fade in timeout={2000}>
              <Box>
                <Typography 
                  variant={isMobile ? "h3" : "h2"} 
                  component="h1" 
                  gutterBottom 
                  fontWeight="bold"
                  sx={{
                    minHeight: isMobile ? '80px' : '120px',
                    textShadow: '2px 2px 8px rgba(0,0,0,0.3)',
                    fontSize: isMobile ? '2.5rem' : '3.5rem',
                    lineHeight: 1.1,
                    background: 'linear-gradient(45deg, #ffffff, #ffde22)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    color: 'transparent',
                    mb: isMobile ? 2 : 3,
                  }}
                >
                  {animatedHeading}
                  <Box 
                    component="span" 
                    sx={{ 
                      animation: 'blink 1s infinite',
                      '@keyframes blink': {
                        '0%, 100%': { opacity: 1 },
                        '50%': { opacity: 0 },
                      }
                    }}
                  >
                    |
                  </Box>
                </Typography>
              </Box>
            </Fade>
            
            <Slide in timeout={1500} direction="up">
              <Typography 
                variant={isMobile ? "h6" : "h5"} 
                gutterBottom 
                sx={{ 
                  mb: isMobile ? 3 : 4,
                  opacity: 0.9,
                  textShadow: '1px 1px 4px rgba(0,0,0,0.3)',
                  color: 'white',
                  lineHeight: 1.4,
                  maxWidth: '600px',
                  margin: '0 auto',
                }}
              >
                Boost your business with authentic content from talented creators. 
                Where creativity meets opportunity.
              </Typography>
            </Slide>

            <Zoom in timeout={2000}>
              <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap', p: 4 }}>
                <GradientButton
                  component={Link}
                  to="/contactus"
                  gradient="linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
                  shadowColor="rgba(79, 172, 254, 0.4)"
                >
                  Get Started
                </GradientButton>
                <GradientButton
                  component={Link}
                  to="/journey"
                  gradient="linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
                  shadowColor="rgba(245, 87, 108, 0.4)"
                  variant="outlined"
                  sx={{
                    border: '2px solid #ffde22',
                    color: '#ffde22',
                    background: 'transparent',
                    '&:hover': {
                      background: '#ffde22',
                      color: 'black',
                    }
                  }}
                >
                  View Journey
                </GradientButton>
              </Box>
            </Zoom>

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
          </Container>
        </Box>
      </Box>

      {/* Features Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Slide in={scrollTriggered} timeout={2000} direction="up">
        <Typography 
          variant="h2"
          component="h2" 
          textAlign="center" 
          fontWeight="bold"
          sx={{
            mb: 2,
            background: 'linear-gradient(45deg, #ffffff, #ffde22)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
          }}
        >
          Why Choose CreatorConnect?
        </Typography>
        </Slide>
        <Slide in={scrollTriggered} timeout={2000} direction="up">
        <Typography 
          variant="h5" 
          textAlign="center" 
          sx={{ mb: 6, color: 'white', opacity: 0.9 }}
        >
          The perfect platform connecting businesses with talented content creators
        </Typography>
        </Slide>
        <Grid container spacing={4}
        sx={{
            display: 'flex',
            flexWrap: 'nowrap', // This prevents wrapping to new rows
            justifyContent: 'center',
            alignItems: 'stretch',
            overflowX: 'auto', // Allows horizontal scrolling if needed on small screens
            '& > .MuiGrid-item': {
              flex: '0 0 auto', // Prevents items from growing/shrinking
            },
            // For mobile view, we want it to wrap normally
            [theme.breakpoints.down('md')]: {
              flexWrap: 'wrap',
              overflowX: 'visible',
            }
          }}>
          {featureBoxes.map((box, index) => {
            const IconComponent = box.icon;
            return (
              <Grid item xs={12} md={4} key={index}>
                <Card
                  sx={{
                    background: box.gradient,
                    color: 'white',
                    borderRadius: '25px',
                    p: 4,
                    height: '100%',
                    textAlign: 'center',
                    transition: 'all 0.3s ease',
                    animation: `${floatAnimation} 4s ease-in-out infinite`,
                    animationDelay: `${index * 0.3}s`,
                    position: 'relative',
                    overflow: 'hidden',
                    '&:hover': {
                      transform: 'translateY(-10px) scale(1.02)',
                      boxShadow: '0 25px 50px rgba(0,0,0,0.3)',
                      '& .feature-icon': {
                        animation: `${floatAnimation} 1s ease-in-out infinite`,
                        transform: 'scale(1.1)',
                      }
                    }
                  }}
                >
                  <Box
                    className="feature-icon"
                    sx={{
                      width: 80,
                      height: 80,
                      borderRadius: '50%',
                      background: 'rgba(255,255,255,0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 20px',
                      border: '2px solid rgba(255,255,255,0.3)',
                    }}
                  >
                    <IconComponent sx={{ fontSize: 40, color: 'white' }} />
                  </Box>
                  
                  <Typography variant="h5" component="h3" gutterBottom fontWeight="bold">
                    {box.title}
                  </Typography>
                  
                  <Typography variant="body1" sx={{ mb: 3, opacity: 0.9, lineHeight: 1.6 }}>
                    {box.description}
                  </Typography>

                  <Box sx={{ textAlign: 'left' }}>
                    {box.features.map((feature, idx) => (
                      <Box key={idx} sx={{ display: 'flex', alignItems: 'center', mb: 1.5 }}>
                        <CheckCircle sx={{ color: 'limegreen', mr: 2, fontSize: 20 }} />
                        <Typography variant="body2" fontWeight="medium">
                          {feature}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>

      {/* CTA Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Box
          sx={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255,255,255,0.2)',
            borderRadius: '25px',
            p: 6,
            textAlign: 'center',
            color: 'white',
            animation: `${glowAnimation} 3s ease-in-out infinite`,
          }}
        >
          {/* Background Image with Overlay */}
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundImage: 'url("https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              opacity: 0.15,
              zIndex: 0,
            }}
          />
          <Typography 
            variant="h3" 
            component="h2" 
            gutterBottom 
            fontWeight="bold"
            sx={{
              mb: 3,
              background: 'linear-gradient(45deg, #ffffff, #ffde22)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
            }}
          >
            Ready to Transform Your Digital Presence?
          </Typography>
          
          <Typography 
            variant="h6" 
            sx={{ 
              mb: 4,
              opacity: 0.9,
              maxWidth: '600px',
              margin: '0 auto',
            }}
          >
            Join thousands of businesses and creators who are already achieving amazing results
          </Typography>

          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2, mb: 4 }}>
            <TrendingUp sx={{ fontSize: 40, color: '#ffde22' }} />
            <Typography variant="h6" fontWeight="medium" color="#ffde22">
              95% Client Satisfaction Rate
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', gap: 3, justifyContent: 'center', flexWrap: 'wrap' }}>
            <GradientButton
              component={Link}
              to="/services"
              gradient="linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)"
              shadowColor="rgba(67, 233, 123, 0.4)"
              size="large"
            >
              Explore Services
            </GradientButton>
            
            <GradientButton
              component={Link}
              to="/contactus"
              gradient="linear-gradient(135deg, #fa709a 0%, #fee140 100%)"
              shadowColor="rgba(250, 112, 154, 0.4)"
              size="large"
              startIcon={<Star />}
            >
              Start Your Journey
            </GradientButton>
          </Box>
        </Box>
      </Container>
      <Layout>
    </Layout>
    </Box>
  );
};

export default Home;