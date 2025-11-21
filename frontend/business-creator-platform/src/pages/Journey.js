// src/pages/Journey.js
import React, { useState, useRef, useEffect, useCallback } from 'react';
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  useTheme,
  useMediaQuery,
  Tabs,
  Tab,
  Grid,
  Paper,
  IconButton,
  Grow,
  Slide,
  Button,
} from '@mui/material';
import {
  Person,
  Business,
  ConnectWithoutContact,
  Campaign,
  Analytics,
  MonetizationOn,
  CheckCircle,
  ArrowForward,
  PlayArrow,
  Star,
  TrendingUp,
  PlayCircle,
  Pause,
} from '@mui/icons-material';
import { keyframes } from '@emotion/react';
import Header from '../components/Header';
import { responsiveConfig } from '../config/responsiveConfig';
import Layout from '../components/Layout';
import cloths from '../assets/instagram/cloths.mp4';
import food from '../assets/instagram/food.mp4';
import gym from '../assets/instagram/gym.mp4';
import household from '../assets/instagram/household.mp4';
import mart from '../assets/instagram/mart.mp4';
import realestate from '../assets/instagram/realestate.mp4';
import girlCreator from '../assets/images/laptop_social_media.jpg';

// Custom animations
const floatAnimation = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
`;

const pulseGlow = keyframes`
  0%, 100% { box-shadow: 0 0 20px rgba(255, 65, 78, 0.3); }
  50% { box-shadow: 0 0 40px rgba(255, 65, 78, 0.6); }
`;

const fadeInUp = keyframes`
  0% { opacity: 0; transform: translateY(30px); }
  100% { opacity: 1; transform: translateY(0); }
`;

const Journey = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [activeTab, setActiveTab] = useState(0);
  const growMonetizeRef = useRef(null);
  const [showPortfolio, setShowPortfolio] = useState(false);

  // Add this state for animations
  const [showContent, setShowContent] = useState(false);

  // Add this useEffect to trigger animations
  useEffect(() => {
    setShowContent(true);
  }, []);

  const journeyPaths = [
    {
      step: 1,
      title: 'Our Humble Beginnings',
      description: 'Started as a small team with a vision to transform digital marketing. We believed in the power of authentic content and strategic partnerships.',
      icon: Person,
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      features: ['Small dedicated team', 'Focus on quality over quantity', 'Building foundational relationships'],
      duration: 400,
      iconBg: '#667eea'
    },
    {
      step: 2,
      title: 'Defining Our Mission',
      description: 'We realized the gap in the market for authentic creator-business collaborations and committed to building bridges between brands and talented creators.',
      icon: Business,
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      features: ['Market research & analysis', 'Identifying key pain points', 'Creating unique value proposition'],
      duration: 600,
      iconBg: '#f093fb'
    },
    {
      step: 3,
      title: 'Building Our Network',
      description: 'We connected with amazing creators and forward-thinking businesses, creating a community built on trust, creativity, and mutual growth.',
      icon: ConnectWithoutContact,
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      features: ['Curated creator network', 'Strategic business partnerships', 'Community-driven approach'],
      duration: 800,
      iconBg: '#4facfe'
    },
    {
      step: 4,
      title: 'Executing Successful Campaigns',
      description: 'Delivered outstanding results for our partners through innovative campaigns, data-driven strategies, and creative storytelling.',
      icon: Campaign,
      gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
      features: ['100+ successful campaigns', 'Proven ROI for businesses', 'Creative excellence'],
      duration: 1000,
      iconBg: '#43e97b'
    },
    {
      step: 5,
      title: 'Tracking & Scaling Impact',
      description: 'Implemented robust analytics to measure success and continuously optimized our approach to deliver maximum value for all stakeholders.',
      icon: Analytics,
      gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
      features: ['Comprehensive analytics', 'Continuous optimization', 'Scalable processes'],
      duration: 1200,
      iconBg: '#fa709a'
    },
    {
      step: 6,
      title: 'Grow & Monetize Together',
      description: 'Today, we help hundreds of successful businesses grow their revenue through strategic creator partnerships and data-driven marketing solutions.',
      icon: MonetizationOn,
      gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
      features: ['Revenue growth for partners', 'Long-term partnerships', 'Premium marketing solutions'],
      duration: 1400,
      iconBg: '#a8edea',
      textColor: '#000'
    }
  ];

  // Self-hosted portfolio content
  const portfolioTabs = [
    { label: 'All', value: 'all' },
    { label: 'Outfit Shoots', value: 'outfit' },
    { label: 'Events', value: 'events' },
    { label: 'Photoshoots', value: 'photoshoots' },
    { label: 'Food & Restaurants', value: 'food' },
    { label: 'Local Businesses', value: 'local' },
  ];

  const portfolioContent = {
    all: [
      { 
        id: 1, 
        type: 'outfit', 
        title: 'Summer Collection', 
        videoUrl: cloths,
        duration: '0:45'
      },
      { 
        id: 2, 
        type: 'events', 
        title: 'Product Launch', 
        videoUrl: mart,
        duration: '1:15'
      },
      { 
        id: 3, 
        type: 'photoshoots', 
        title: 'Model Portfolio', 
        videoUrl: realestate,
        duration: '0:30'
      },
      { 
        id: 4, 
        type: 'food', 
        title: 'Restaurant Review', 
        videoUrl: food,
        duration: '1:00'
      },
      { 
        id: 5, 
        type: 'local', 
        title: 'Local Cafe', 
        videoUrl: gym,
        duration: '0:50'
      },
      { 
        id: 6, 
        type: 'outfit', 
        title: 'Winter Fashion', 
        videoUrl: household,
        duration: '0:40'
      },
    ],
    outfit: [
      { 
        id: 1, 
        type: 'outfit', 
        title: 'Summer Collection', 
        videoUrl: cloths,
        duration: '0:45'
      },
      { 
        id: 6, 
        type: 'outfit', 
        title: 'Winter Fashion', 
        videoUrl: household,
        duration: '0:40'
      },
    ],
    events: [
      { 
        id: 2, 
        type: 'events', 
        title: 'Product Launch', 
        videoUrl: mart,
        duration: '1:15'
      },
    ],
    photoshoots: [
      { 
        id: 3, 
        type: 'photoshoots', 
        title: 'Model Portfolio', 
        videoUrl: realestate,
        duration: '0:30'
      },
    ],
    food: [
      { 
        id: 4, 
        type: 'food', 
        title: 'Restaurant Review', 
        videoUrl: food,
        duration: '1:00'
      },
    ],
    local: [
      { 
        id: 5, 
        type: 'local', 
        title: 'Local Cafe', 
        videoUrl: gym,
        duration: '0:50'
      },
    ],
  };

  // Get responsive configuration based on screen size
  const getResponsiveConfig = (section, key) => {
    const deviceType = isMobile ? 'mobile' : 'desktop';
    return responsiveConfig[section][deviceType][key];
  };

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const handleContactRedirect = () => {
    window.location.href = '/contactus#business-form';
  };

  const handleJoinTeamRedirect = () => {
    window.location.href = '/contactus#creator-form';
  };

  // Intersection Observer to detect when Grow & Monetize section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowPortfolio(true);
        }
      },
      { threshold: 0.5 }
    );

    if (growMonetizeRef.current) {
      observer.observe(growMonetizeRef.current);
    }

    return () => {
      if (growMonetizeRef.current) {
        observer.unobserve(growMonetizeRef.current);
      }
    };
  }, []);

  const PathConnector = ({ isLast }) => (
    <Box
      sx={{
        position: 'absolute',
        top: 80,
        left: '50%',
        transform: 'translateX(-50%)',
        width: '2px',
        height: isLast ? '0px' : '100px',
        background: 'linear-gradient(180deg, #ff414e, #ff8928, #ffde22)',
        animation: `${pulseGlow} 2s ease-in-out infinite`,
        '&::before': {
          content: '""',
          position: 'absolute',
          top: '100%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '0',
          height: '0',
          borderLeft: '8px solid transparent',
          borderRight: '8px solid transparent',
          borderTop: '12px solid #ffde22',
        }
      }}
    />
  );

  const AnimatedCard = ({ path, index, total }) => {
    const IconComponent = path.icon;
    
    return (
      <Box
        sx={{
          position: 'relative',
          display: 'flex',
          flexDirection: isMobile ? 'column' : index % 2 === 0 ? 'row' : 'row-reverse',
          alignItems: 'center',
          mb: 8,
          '&:hover': {
            '& .journey-card': {
              transform: 'translateY(-10px) scale(1.02)',
              boxShadow: '0 25px 50px rgba(0,0,0,0.25)',
            },
            '& .journey-icon': {
              animation: `${floatAnimation} 1s ease-in-out infinite`,
              transform: 'scale(1.1)',
            }
          }
        }}
      >
        {/* Path Number and Connector */}
        <Box
          sx={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            mx: isMobile ? 0 : 4,
            mb: isMobile ? 2 : 0,
          }}
        >
          <Box
            sx={{
              width: 80,
              height: 80,
              borderRadius: '50%',
              background: path.gradient,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              zIndex: 2,
              animation: `${pulseGlow} 3s ease-in-out infinite`,
              border: '4px solid white',
              boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
            }}
            className="journey-icon"
          >
            <IconComponent 
              sx={{ 
                fontSize: 40, 
                color: 'white',
                filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.3))'
              }} 
            />
          </Box>
          
          <Box
            sx={{
              position: 'absolute',
              top: -10,
              right: -10,
              width: 30,
              height: 30,
              borderRadius: '50%',
              background: '#ff414e',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontWeight: 'bold',
              fontSize: '0.8rem',
              border: '2px solid white',
              animation: `${floatAnimation} 2s ease-in-out infinite`,
            }}
          >
            {path.step}
          </Box>

          {/* Connector Line */}
          {!isMobile && index < total - 1 && (
            <Box
              sx={{
                position: 'absolute',
                top: 80,
                width: '2px',
                height: '200px',
                background: 'linear-gradient(180deg, #ff414e, #ff8928, #ffde22)',
                animation: `${pulseGlow} 2s ease-in-out infinite`,
                zIndex: 1,
              }}
            />
          )}
        </Box>

        {/* Content Card */}
        <Card
          className="journey-card"
          sx={{
            flex: 1,
            maxWidth: isMobile ? '100%' : '500px',
            background: path.gradient,
            color: path.textColor || 'white',
            borderRadius: '25px',
            p: 0,
            overflow: 'hidden',
            boxShadow: '0 15px 35px rgba(0,0,0,0.2)',
            transition: 'all 0.4s ease',
            position: 'relative',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '4px',
              background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent)',
              animation: `${pulseGlow} 3s ease-in-out infinite`,
            }
          }}
        >
          <CardContent sx={{ p: 4 }}>
            <Typography 
              variant="h4" 
              component="h3" 
              gutterBottom 
              fontWeight="bold"
              sx={{
                textShadow: '2px 2px 4px rgba(0,0,0,0.2)',
                display: 'flex',
                alignItems: 'center',
                gap: 2,
              }}
            >
              {path.title}
              <Star sx={{ fontSize: 30, color: 'gold' }} />
            </Typography>
            
            <Typography 
              variant="h6" 
              sx={{ 
                mb: 3, 
                opacity: 0.9,
                lineHeight: 1.6 
              }}
            >
              {path.description}
            </Typography>

            <Box sx={{ mb: 3 }}>
              {path.features.map((feature, featureIndex) => (
                <Box
                  key={featureIndex}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    mb: 1,
                    animation: `fadeInUp 0.6s ease-out ${featureIndex * 0.2}s both`,
                    '@keyframes fadeInUp': {
                      '0%': { opacity: 0, transform: 'translateY(20px)' },
                      '100%': { opacity: 1, transform: 'translateY(0)' },
                    }
                  }}
                >
                  <CheckCircle 
                    sx={{ 
                      mr: 2, 
                      color: 'limegreen',
                      fontSize: 20 
                    }} 
                  />
                  <Typography variant="body1" fontWeight="medium">
                    {feature}
                  </Typography>
                </Box>
              ))}
            </Box>

            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                pt: 2,
                borderTop: '1px solid rgba(255,255,255,0.2)',
              }}
            >
              {path.step === 6 && (
                <Button
                  variant="contained"
                  sx={{
                    background: 'linear-gradient(135deg, #ff414e, #ff8928)',
                    color: 'white',
                    fontWeight: 'bold',
                    px: 3,
                    py: 1,
                    borderRadius: '25px',
                    '&:hover': {
                      background: 'linear-gradient(135deg, #ff8928, #ff414e)',
                      transform: 'translateY(-2px)',
                    }
                  }}
                  onClick={handleContactRedirect}
                >
                  Grow Your Business
                </Button>
              )}
            </Box>
          </CardContent>
        </Card>
      </Box>
    );
  };

  const VideoCard = React.memo(({ video }) => {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlayPause = (e) => {
      e.stopPropagation();
      
      if (isPlaying) {
        videoRef.current?.pause();
        setIsPlaying(false);
      } else {
        // Pause all other videos on the page
        document.querySelectorAll('video').forEach(vid => {
          if (vid !== videoRef.current) {
            vid.pause();
          }
        });
        videoRef.current?.play().catch(console.error);
        setIsPlaying(true);
      }
    };

    const handleVideoEnd = () => {
      setIsPlaying(false);
    };

    return (
      <Paper
        sx={{
          background: 'rgba(255,255,255,0.05)',
          borderRadius: '15px',
          overflow: 'hidden',
          border: '1px solid rgba(255,255,255,0.1)',
          cursor: 'pointer',
        }}
        onClick={handlePlayPause}
      >
        <Box
          sx={{
            position: 'relative',
            width: '100%',
            height: '250px',
            overflow: 'hidden',
            backgroundColor: '#000'
          }}
        >
          <video
            ref={videoRef}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block'
            }}
            onClick={handlePlayPause}
            onEnded={handleVideoEnd}
            muted
            loop={false}
            preload="metadata"
          >
            <source src={video.videoUrl} type="video/mp4" />
          </video>

          <Box
            sx={{
              position: 'absolute',
              top: 10,
              left: 10,
              background: 'linear-gradient(135deg, #ff414e, #ff8928)',
              color: 'white',
              padding: '4px 12px',
              borderRadius: '20px',
              fontSize: '0.7rem',
              fontWeight: 'bold',
              textTransform: 'uppercase',
            }}
          >
            {video.type}
          </Box>
        </Box>

        <Box sx={{ p: 2 }}>
          <Typography 
            variant="h6" 
            sx={{ 
              color: 'white', 
              fontWeight: 'bold',
              mb: 1,
            }}
          >
            {video.title}
          </Typography>
        </Box>
      </Paper>
    );
  });

  const CustomTabPanel = React.memo(() => {
    const currentTab = portfolioTabs[activeTab].value;
    const videos = portfolioContent[currentTab];

    return (
      <Box sx={{ width: '100%', mt: 6 }}>
        <Paper 
          sx={{ 
            background: 'rgba(255,255,255,0.05)',
            borderRadius: '15px',
            p: 2,
            mb: 4,
            border: '1px solid rgba(255,255,255,0.1)',
          }}
        >
          <Tabs
            value={activeTab}
            onChange={handleTabChange}
            variant="scrollable"
            scrollButtons="auto"
            sx={{
              '& .MuiTab-root': {
                color: 'white',
                fontWeight: 'bold',
                fontSize: '0.9rem',
                minWidth: 'auto',
                px: 3,
                py: 1,
                borderRadius: '25px',
                margin: '0 4px',
                '&.Mui-selected': {
                  background: 'linear-gradient(135deg, #ff414e, #ff8928)',
                  color: 'white',
                }
              },
              '& .MuiTabs-indicator': {
                display: 'none',
              }
            }}
          >
            {portfolioTabs.map((tab) => (
              <Tab key={tab.value} label={tab.label} />
            ))}
          </Tabs>
        </Paper>

        <Grid container spacing={3}>
          {videos.map((video) => (
            <Grid item xs={12} sm={6} md={4} key={video.id}>
              <VideoCard video={video} />
            </Grid>
          ))}
        </Grid>
      </Box>
    );
  });

   return (
    <Layout>
    <Box sx={{ minHeight: '100vh' }}>
      {/* Single Section with Background Image covering everything until portfolio */}
      <Box
        sx={{
          position: 'relative',
          minHeight: '100vh',
          background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${girlCreator})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
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
        <Container maxWidth="lg" sx={{ flex: 1, display: 'flex', alignItems: 'center', py: 8 }}>
          <Box sx={{ textAlign: 'center', width: '100%' }}>
            <Grow in={true} timeout={1000}>
              <Typography
                variant="h1"
                component="h1"
                fontWeight="bold"
                sx={{
                  mb: 8,
                  background: 'linear-gradient(45deg, #ffffff, #ffde22)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent',
                  fontSize: { xs: '2.5rem', md: '4rem' },
                }}
              >
                Our Journey of Success
              </Typography>
            </Grow>
            <Slide in timeout={1500} direction="up">
            <Typography 
              variant="h5" 
              sx={{ 
                color: 'white',
                opacity: 0.9,
                maxWidth: '600px',
                margin: '0 auto',
                mb: 8,
              }}
            >
              From humble beginnings to helping hundreds of businesses grow through authentic creator partnerships
            </Typography>
            </Slide>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 10,
                flexWrap: 'wrap',
                mb: 12
              }}
            >
              <Slide in={true} timeout={1500} direction="up" appear={true}>
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    background: 'linear-gradient(135deg, #ff414e, #ff8928)',
                    color: 'white',
                    fontWeight: 'bold',
                    px: 4,
                    py: 1.5,
                    borderRadius: '25px',
                    fontSize: '1.1rem',
                    '&:hover': {
                      background: 'linear-gradient(135deg, #ff8928, #ff414e)',
                      transform: 'translateY(-2px)',
                    }
                  }}
                  onClick={handleContactRedirect}
                >
                  Partner With Us
                </Button>
              </Slide>
              <Slide in={true} timeout={1800} direction="up" appear={true}>
                <Button
                  variant="outlined"
                  size="large"
                  sx={{
                    borderColor: 'white',
                    color: 'white',
                    fontWeight: 'bold',
                    px: 4,
                    py: 1.5,
                    borderRadius: '25px',
                    fontSize: '1.1rem',
                    '&:hover': {
                      borderColor: '#ff8928',
                      color: '#ff8928',
                      transform: 'translateY(-2px)',
                    }
                  }}
                  onClick={handleJoinTeamRedirect}
                >
                  Join Our Team
                </Button>
              </Slide>
            </Box>
          </Box>
        </Container>

        {/* Tagline before Journey Path */}
        <Container maxWidth="lg" sx={{ mb: 6 }}>
          <Box sx={{ textAlign: 'center' }}>
            <Grow in={true} timeout={1000}>
            <Typography
              variant="h3"
              component="h2"
              sx={{
                color: '#ffde22',
                fontWeight: 'bold',
                mb: 2,
                fontSize: { xs: '1.8rem', md: '2.5rem' },
              }}
            >
              Our Evolution Story
            </Typography>
            </Grow>
          </Box>
        </Container>

        {/* Journey Path Section - Same background image */}
        <Box sx={{ py: 8, position: 'relative', zIndex: 1 }}>
          <Container maxWidth="lg">
            <Box sx={{ position: 'relative' }}>
              {/* Main Timeline Line */}
              {!isMobile && (
                <Box
                  sx={{
                    position: 'absolute',
                    left: '50%',
                    top: 0,
                    bottom: 0,
                    width: '4px',
                    background: 'linear-gradient(180deg, #ff414e, #ff8928, #ffde22, #43e97b, #4facfe, #a8edea)',
                    transform: 'translateX(-50%)',
                    borderRadius: '2px',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: '20px',
                      height: '20px',
                      background: '#ff414e',
                      borderRadius: '50%',
                      animation: `${pulseGlow} 2s ease-in-out infinite`,
                    },
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: 0,
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: '20px',
                      height: '20px',
                      background: '#a8edea',
                      borderRadius: '50%',
                      animation: `${pulseGlow} 2s ease-in-out infinite`,
                      animationDelay: '1s',
                    }
                  }}
                />
              )}

              {/* Journey Steps */}
              {journeyPaths.map((path, index) => (
                <Box 
                  key={path.step} 
                  ref={index === 5 ? growMonetizeRef : null}
                >
                  <AnimatedCard
                    path={path}
                    index={index}
                    total={journeyPaths.length}
                  />
                </Box>
              ))}
            </Box>
          </Container>
        </Box>
      </Box>

      {/* Portfolio Section - Separate background (only this section has different background) */}
      {showPortfolio && (
        <Box
          sx={{
            background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
            py: 8,
            mt: 0, // Remove any margin that might cause gap
          }}
        >
          <Container maxWidth="lg">
            <Box>
              <Typography 
                variant="h2" 
                component="h2" 
                textAlign="center" 
                gutterBottom
                sx={{
                  background: 'linear-gradient(45deg, #ffffff, #ff8928)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent',
                  fontWeight: 'bold',
                  mb: 2,
                }}
              >
                Our Creative Portfolio
              </Typography>
              <Typography 
                variant="h5" 
                textAlign="center" 
                sx={{ 
                  color: 'white',
                  mb: 4,
                  opacity: 0.9
                }}
              >
                Explore our work across different business verticals
              </Typography>
              <CustomTabPanel />
            </Box>

            {/* CTA Section */}
            <Box
              sx={{
                textAlign: 'center',
                mt: 8,
                p: 6,
                background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
                borderRadius: '25px',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.2)',
              }}
            >
              <Typography 
                variant="h3" 
                component="h2" 
                gutterBottom 
                fontWeight="bold"
                sx={{
                  background: 'linear-gradient(45deg, #ffffff, #ffde22)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent',
                  mb: 3,
                }}
              >
                Ready to Grow Together?
              </Typography>
              <Typography 
                variant="h6" 
                sx={{ 
                  mb: 4,
                  color: 'white',
                  opacity: 0.9,
                }}
              >
                Join hundreds of successful businesses who have transformed their marketing through our creator partnerships
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  gap: 3,
                  justifyContent: 'center',
                  flexWrap: 'wrap',
                }}
              >
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    background: 'linear-gradient(135deg, #ff414e, #ff8928)',
                    color: 'white',
                    fontWeight: 'bold',
                    px: 4,
                    py: 1.5,
                    borderRadius: '25px',
                    fontSize: '1.1rem',
                    '&:hover': {
                      background: 'linear-gradient(135deg, #ff8928, #ff414e)',
                      transform: 'translateY(-2px)',
                    }
                  }}
                  onClick={handleContactRedirect}
                >
                  Start Your Journey
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  sx={{
                    borderColor: 'white',
                    color: 'white',
                    fontWeight: 'bold',
                    px: 4,
                    py: 1.5,
                    borderRadius: '25px',
                    fontSize: '1.1rem',
                    '&:hover': {
                      borderColor: '#ff8928',
                      color: '#ff8928',
                      transform: 'translateY(-2px)',
                    }
                  }}
                  onClick={handleJoinTeamRedirect}
                >
                  Join as Creator
                </Button>
              </Box>
            </Box>
          </Container>
        </Box>
      )
      }
    </Box>
    </Layout>
  );
};

export default Journey;