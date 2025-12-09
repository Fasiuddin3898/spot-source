// src/pages/Services.js
import React, { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  Button,
  Grid,
  Chip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  useTheme,
  useMediaQuery,
  Stepper,
  Step,
  StepLabel,
  Paper,
  List,
  Slide,
  ListItem,
  Grow,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import {
  Campaign,
  Search,
  People,
  PhotoCamera,
  Event,
  TrendingUp,
  CheckCircle,
  Star,
  ArrowForward,
  PlayArrow,
  LocationOn,
  Schedule,
  Business, 
  Work,
  Security,
  Analytics,
  SupportAgent,
  RocketLaunch,
  Groups,
  EmojiEvents,
} from '@mui/icons-material';
import { keyframes } from '@emotion/react';
import girlCreator from '../assets/images/services.jpg';
import Header from '../components/Header';
import { responsiveConfig } from '../config/responsiveConfig';
import Layout from '../components/Layout';

// Animations
const floatAnimation = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
`;

const glowAnimation = keyframes`
  0%, 100% { box-shadow: 0 0 20px rgba(255, 65, 78, 0.3); }
  50% { box-shadow: 0 0 40px rgba(255, 65, 78, 0.6); }
`;

const Services = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [openCreatorDialog, setOpenCreatorDialog] = useState(false);
  const [openClientDialog, setOpenClientDialog] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  const handleContactRedirect = () => {
    window.location.href = '/contactus#business-form';
  };

  const handleJoinTeamRedirect = () => {
    window.location.href = '/contactus#creator-form';
  };

  // Hero Section Data
  const heroData = {
    title: "Elevate Your Digital Presence",
    subtitle: "Professional content creation meets strategic marketing. Where creativity drives results.",
    tagline: "Your Story, Professionally Told - Without The Professional Price Tag"
  };

  // Get responsive configuration based on screen size
  const getResponsiveConfig = (section, key) => {
    const deviceType = isMobile ? 'mobile' : 'desktop';
    return responsiveConfig[section][deviceType][key];
  };

  // Services We Offer
  const services = [
    {
      icon: Campaign,
      title: "Digital Marketing",
      description: "Comprehensive digital strategies to boost your online presence and drive conversions",
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      features: ['Social Media Management', 'Content Strategy', 'Performance Analytics']
    },
    {
      icon: Search,
      title: "SEO Optimization",
      description: "Improve your search engine rankings and increase organic traffic",
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      features: ['Keyword Research', 'On-Page SEO', 'Technical SEO']
    },
    {
      icon: People,
      title: "Influencer Marketing",
      description: "Connect with authentic creators to amplify your brand message",
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      features: ['Creator Matching', 'Campaign Management', 'ROI Tracking']
    },
    {
      icon: PhotoCamera,
      title: "Photo Shoots",
      description: "Professional photography for personal branding and commercial use",
      gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
      features: ['Personal Branding', 'Product Photography', 'Lifestyle Shoots']
    },
    {
      icon: Event,
      title: "Events & Ads",
      description: "Complete event coverage and creative advertising solutions",
      gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
      features: ['Event Coverage', 'Ad Production', 'Content Distribution']
    },
    {
      icon: TrendingUp,
      title: "Social Media Management",
      description: "End-to-end social media management for consistent brand growth",
      gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
      features: ['Content Planning', 'Community Management', 'Growth Strategy']
    }
  ];

  // Subscription Packages
  const packages = [
    {
      name: "Basic",
      price: "18,000",
      duration: "1 Month",
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      features: [
        "Social Media Handling",
        "Weekly: 2 Reels + Photos",
        "Ad Campaigns (Budget-based)",
        "Basic Analytics",
        "Content Strategy"
      ],
      popular: false
    },
    {
      name: "Medium",
      price: "30,000",
      duration: "2 Months",
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      features: [
        "Everything in Basic",
        "Extended Social Media Management",
        "Weekly: 3 Reels + Photos",
        "Enhanced Ad Campaigns",
        "Advanced Analytics",
        "Competitor Analysis"
      ],
      popular: true
    },
    {
      name: "Pro",
      price: "50,000",
      duration: "3 Months",
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      features: [
        "Everything in Medium",
        "Complete Digital Management",
        "Weekly: 4 Reels + Photos",
        "Instagram Campaigns",
        "Influencer Collaborations",
        "Dedicated Account Manager",
        "Monthly Strategy Sessions"
      ],
      popular: false
    }
  ];

  // Creator Application Steps
  const creatorSteps = [
    "Basic Details",
    "Portfolio Upload",
    "Skills & Preferences",
    "Review & Submit"
  ];

  const handleCreatorOpen = () => setOpenCreatorDialog(true);
  const handleCreatorClose = () => {
    setOpenCreatorDialog(false);
    setActiveStep(0);
  };

  const handleClientOpen = () => setOpenClientDialog(true);
  const handleClientClose = () => setOpenClientDialog(false);

  const handleNext = () => {
    setActiveStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setActiveStep((prev) => prev - 1);
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        position: 'relative',
        background: `
          linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
          url(${girlCreator})
        `,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Dynamic Header */}
      <Header 
        transparent={true}
        logo="SpotSource"
        logoVariant={getResponsiveConfig('header', 'logoVariant')}
        showBlurEffect={getResponsiveConfig('header', 'blurEffect')}
        height={getResponsiveConfig('header', 'height')}
        padding={getResponsiveConfig('header', 'padding')}
      />

      {/* Hero Section */}
      <Box
        sx={{
          color: 'white',
          py: 12,
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Container maxWidth="lg">
          <Grow in={true} timeout={2000}>
          <Typography 
            variant="h1" 
            component="h1"
            fontWeight="bold"
            sx={{
              fontSize: { xs: '2.5rem', md: '4rem' },
              textShadow: '3px 3px 6px rgba(0,0,0,0.3)',
              mb: 3,
              background: 'linear-gradient(45deg, #ffffff, #ffde22)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
            }}
          >
            {heroData.title}
          </Typography>
          </Grow>
          <Slide in timeout={1500} direction="up">
          <Typography 
            variant="h4" 
            sx={{ 
              mb: 4,
              opacity: 0.9,
              fontWeight: 300,
            }}
          >
            {heroData.subtitle}
          </Typography>
          </Slide>

          <Box
            sx={{
              background: 'rgba(255,255,255,0.1)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.2)',
              borderRadius: '25px',
              p: 4,
              maxWidth: '800px',
              margin: '0 auto',
              animation: `${glowAnimation} 3s ease-in-out infinite`,
            }}
          >
            <Grow in={true} timeout={2000}>
            <Typography 
              variant="h5" 
              component="div"
              sx={{
                fontStyle: 'italic',
                fontWeight: 'bold',
                color: '#ffde22',
                textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
              }}
            >
              "{heroData.tagline}"
            </Typography>
            </Grow>

          </Box>
        </Container>
      </Box>

      {/* Two Sides Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grow in={true} timeout={2000}>
        <Typography 
          variant="h2" 
          component="h2" 
          textAlign="center" 
          fontWeight="bold"
          sx={{
            mb: 6,
            background: 'linear-gradient(45deg, #ffffff, #ffde22)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
          }}
        >
          Choose Your Path to Success
        </Typography>
        </Grow>

        <Grid container spacing={4}>
          {/* User Side */}
          <Grid item xs={12} size={6} md={6}>
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
              <People sx={{ fontSize: 80, mb: 3, color: '#4facfe' }} />
              <Typography variant="h4" component="h3" gutterBottom fontWeight="bold">
                Join the Hustle: Become a Creator
              </Typography>
              <Typography variant="h6" sx={{ mb: 3, opacity: 0.9 }}>
                Showcase your talent and get paid for creating amazing content
              </Typography>
              
              <Box sx={{ textAlign: 'left', mb: 4 }}>
                {['Quick Application Process', 'Showcase Your Portfolio', 'Get Matched with Brands', 'Fair Compensation'].map((item, index) => (
                  <Box key={index} sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <CheckCircle sx={{ color: '#43e97b', mr: 2 }} />
                    <Typography>{item}</Typography>
                  </Box>
                ))}
              </Box>

              <Button
                variant="contained"
                size="large"
                onClick={handleJoinTeamRedirect}
                sx={{
                  background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
                  color: 'white',
                  px: 4,
                  py: 1.5,
                  fontSize: '1.1rem',
                  fontWeight: 'bold',
                  borderRadius: '25px',
                  '&:hover': {
                    transform: 'translateY(-3px)',
                    boxShadow: '0 15px 30px rgba(79, 172, 254, 0.4)',
                  }
                }}
              >
                Earn On-The-Spot: Sign Up
              </Button>
            </Card>
          </Grid>

          {/* Client Side */}
          <Grid item xs={12} size={6} md={6}>
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
              <Business sx={{ fontSize: 80, mb: 3, color: '#f5576c' }} />
              <Typography variant="h4" component="h3" gutterBottom fontWeight="bold">
                Explore Creative Packages
              </Typography>
              <Typography variant="h6" sx={{ mb: 3, opacity: 0.9 }}>
                Professional digital marketing solutions for your business growth
              </Typography>

              <Box sx={{ textAlign: 'left', mb: 4 }}>
                {['Customized Packages', 'Expert Content Creation', 'Performance Tracking', 'Dedicated Support'].map((item, index) => (
                  <Box key={index} sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <CheckCircle sx={{ color: '#43e97b', mr: 2 }} />
                    <Typography>{item}</Typography>
                  </Box>
                ))}
              </Box>

              <Button
                variant="contained"
                size="large"
                onClick={handleClientOpen} // Changed to open dialog instead of redirect
                sx={{
                  background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                  color: 'white',
                  px: 4,
                  py: 1.5,
                  fontSize: '1.1rem',
                  fontWeight: 'bold',
                  borderRadius: '25px',
                  '&:hover': {
                    transform: 'translateY(-3px)',
                    boxShadow: '0 15px 30px rgba(245, 87, 108, 0.4)',
                  }
                }}
              >
                View Marketing Packages
              </Button>
            </Card>
          </Grid>
        </Grid>
      </Container>

      {/* Services We Offer */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography 
          variant="h2" 
          component="h2" 
          textAlign="center" 
          fontWeight="bold"
          sx={{
            mb: 6,
            background: 'linear-gradient(45deg, #ffffff, #ffde22)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
          }}
        >
          Our Digital Marketing Services
        </Typography>

        <Grid container spacing={3} justifyContent="center">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Grid item xs={12} size={6} sm={6} md={4} key={index} sx={{ display: 'flex' }}>
                <Card
                  sx={{
                    background: service.gradient,
                    color: 'white',
                    borderRadius: '20px',
                    p: 3,
                    width: '100%',
                    transition: 'all 0.3s ease',
                    animation: `${floatAnimation} 3s ease-in-out infinite`,
                    animationDelay: `${index * 0.2}s`,
                    '&:hover': {
                      transform: 'translateY(-10px) rotate(2deg)',
                      boxShadow: '0 25px 50px rgba(0,0,0,0.3)',
                    }
                  }}
                >
                  <IconComponent sx={{ fontSize: 50, mb: 2 }} />
                  <Typography variant="h5" component="h3" gutterBottom fontWeight="bold">
                    {service.title}
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 2, opacity: 0.9 }}>
                    {service.description}
                  </Typography>
                  <Box>
                    {service.features.map((feature, idx) => (
                      <Chip
                        key={idx}
                        label={feature}
                        size="small"
                        sx={{
                          background: 'rgba(255,255,255,0.2)',
                          color: 'white',
                          m: 0.5,
                          border: '1px solid rgba(255,255,255,0.3)',
                        }}
                      />
                    ))}
                  </Box>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>

      {/* Packages Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
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
          Choose Your Marketing Package
        </Typography>
        <Typography 
          variant="h5" 
          textAlign="center" 
          sx={{ mb: 6, color: 'white', opacity: 0.9 }}
        >
          Professional digital marketing solutions tailored for your business growth
        </Typography>

        <Grid container spacing={4} justifyContent="center" alignItems="stretch">
          {packages.map((pkg, index) => (
            <Grid size={4} item xs={12} md={4} key={index} sx={{ display: 'flex' }}>
              <Card
                sx={{
                  background: pkg.gradient,
                  color: 'white',
                  borderRadius: '25px',
                  p: 0,
                  width: '100%',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  animation: `${floatAnimation} 4s ease-in-out infinite`,
                  animationDelay: `${index * 0.3}s`,
                  '&:hover': {
                    transform: 'translateY(-15px) scale(1.02)',
                    boxShadow: '0 30px 60px rgba(0,0,0,0.4)',
                  }
                }}
              >
                {pkg.popular && (
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 20,
                      right: 20,
                      background: 'gold',
                      color: 'black',
                      px: 2,
                      py: 1,
                      borderRadius: '20px',
                      fontWeight: 'bold',
                      fontSize: '0.8rem',
                      animation: `${glowAnimation} 2s ease-in-out infinite`,
                    }}
                  >
                    <Star sx={{ fontSize: 16, mr: 0.5 }} />
                    MOST POPULAR
                  </Box>
                )}
                
                <CardContent sx={{ p: 4 }}>
                  <Typography variant="h4" component="h3" gutterBottom fontWeight="bold">
                    {pkg.name}
                  </Typography>
                  
                  <Box sx={{ display: 'flex', alignItems: 'baseline', mb: 2 }}>
                    <Typography variant="h2" component="div" fontWeight="bold">
                      ₹{pkg.price}
                    </Typography>
                    <Typography variant="h6" sx={{ ml: 1, opacity: 0.8 }}>
                      /{pkg.duration}
                    </Typography>
                  </Box>

                  <Box sx={{ mb: 3 }}>
                    {pkg.features.map((feature, idx) => (
                      <Box key={idx} sx={{ display: 'flex', alignItems: 'center', mb: 1.5 }}>
                        <CheckCircle sx={{ color: 'limegreen', mr: 2, fontSize: 20 }} />
                        <Typography variant="body1">{feature}</Typography>
                      </Box>
                    ))}
                  </Box>

                  <Button
                    variant="contained"
                    fullWidth
                    size="large"
                    onClick={handleContactRedirect}
                    sx={{
                      background: 'rgba(255,255,255,0.2)',
                      color: 'white',
                      py: 1.5,
                      borderRadius: '15px',
                      border: '2px solid rgba(255,255,255,0.3)',
                      fontWeight: 'bold',
                      '&:hover': {
                        background: 'rgba(255,255,255,0.3)',
                        transform: 'translateY(-2px)',
                      }
                    }}
                  >
                    Choose {pkg.name}
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Why Choose Us Section - New Content */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
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
          Why Choose SpotSource?
        </Typography>
        <Typography 
          variant="h5" 
          textAlign="center" 
          sx={{ mb: 6, color: 'white', opacity: 0.9 }}
        >
          We combine creativity with data-driven strategies to deliver exceptional results
        </Typography>

        <Grid container spacing={4}>
          {/* Card 1: Our Approach */}
          <Grid item xs={12} size={4} md={6} lg={3}>
            <Card
              sx={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.2)',
                borderRadius: '25px',
                p: 4,
                height: '100%',
                color: 'white',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 15px 30px rgba(255, 222, 34, 0.2)',
                }
              }}
              
            >
              <Typography variant="h4" component="h3" gutterBottom fontWeight="bold" textAlign="center">
                Our Approach
              </Typography>
              <List>
                {[
                  { icon: <RocketLaunch />, text: 'Fast & Agile Execution' },
                  { icon: <Analytics />, text: 'Data-Driven Decision Making' },
                  { icon: <Groups />, text: 'Dedicated Team of Experts' },
                  { icon: <Security />, text: 'Transparent Reporting' },
                ].map((item, index) => (
                  <ListItem key={index} sx={{ px: 0 }}>
                    <ListItemIcon sx={{ color: '#ffde22', minWidth: 40 }}>
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText primary={item.text} />
                  </ListItem>
                ))}
              </List>
            </Card>
          </Grid>

          {/* Card 2: Core Values */}
          <Grid item xs={12} size={4} md={6} lg={3}>
            <Card
              sx={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.2)',
                borderRadius: '25px',
                p: 4,
                height: '100%',
                color: 'white',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 15px 30px rgba(255, 222, 34, 0.2)',
                }
              }}
            >
              <Typography variant="h4" component="h3" gutterBottom fontWeight="bold" textAlign="center">
                Core Values
              </Typography>
              <List>
                {[
                  { icon: <EmojiEvents />, text: 'Excellence in Delivery' },
                  { icon: <SupportAgent />, text: 'Client-Centric Approach' },
                  { icon: <TrendingUp />, text: 'Continuous Innovation' },
                  { icon: <People />, text: 'Collaborative Partnership' },
                ].map((item, index) => (
                  <ListItem key={index} sx={{ px: 0 }}>
                    <ListItemIcon sx={{ color: '#ffde22', minWidth: 40 }}>
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText primary={item.text} />
                  </ListItem>
                ))}
              </List>
            </Card>
          </Grid>

          {/* Card 3: What We Deliver */}
          <Grid item xs={12} size={4} md={6} lg={3}>
            <Card
              sx={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.2)',
                borderRadius: '25px',
                p: 4,
                height: '100%',
                color: 'white',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 15px 30px rgba(255, 222, 34, 0.2)',
                }
              }}
            >
              <Typography variant="h4" component="h3" gutterBottom fontWeight="bold" textAlign="center">
                What We Deliver
              </Typography>
              <List>
                {[
                  { icon: <Campaign />, text: 'Increased Brand Visibility' },
                  { icon: <Search />, text: 'Higher Conversion Rates' },
                  { icon: <PhotoCamera />, text: 'Quality Content Creation' },
                  { icon: <Event />, text: 'Measurable ROI' },
                ].map((item, index) => (
                  <ListItem key={index} sx={{ px: 0 }}>
                    <ListItemIcon sx={{ color: '#ffde22', minWidth: 40 }}>
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText primary={item.text} />
                  </ListItem>
                ))}
              </List>
            </Card>
          </Grid>
        </Grid>

        <Grid item xs={12} md={6} p={6}>
          <Card
            sx={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.2)',
              borderRadius: '25px',
              p: 4,
              height: '100%',
              color: 'white',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <Typography variant="h4" component="h3" gutterBottom fontWeight="bold" textAlign="center">
              Success Metrics
            </Typography>
            <Grid 
              container 
              spacing={3} 
              sx={{ 
                mt: 2,
                alignItems: 'center',
                justifyContent: 'center',
                flex: 1,
              }}
            >
              {[
                { number: '200+', label: 'Happy Clients' },
                { number: '500+', label: 'Projects Completed' },
                { number: '85%', label: 'Client Retention' },
                { number: '24h', label: 'Response Time' },
                { number: '50+', label: 'Cities Covered' },
                { number: '98%', label: 'Satisfaction Rate' }
              ].map((metric, index) => (
                <Grid item xs={6} sm={4} key={index}>
                  <Box 
                    textAlign="center"
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                      height: '100%',
                    }}
                  >
                    <Typography 
                      variant="h3" 
                      component="div" 
                      fontWeight="bold" 
                      color="#ffde22"
                      sx={{
                        lineHeight: 1.2,
                        mb: 1,
                      }}
                    >
                      {metric.number}
                    </Typography>
                    <Typography 
                      variant="body1" 
                      sx={{ 
                        opacity: 0.9,
                        lineHeight: 1.3,
                      }}
                    >
                      {metric.label}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Card>
        </Grid>
      </Container>

      {/* Process Section - New Content */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography 
          variant="h2" 
          component="h2" 
          textAlign="center" 
          fontWeight="bold"
          sx={{
            mb: 6,
            background: 'linear-gradient(45deg, #ffffff, #ffde22)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
          }}
        >
          How It Works
        </Typography>

        <Grid container spacing={4}>
          {[
            { step: '01', title: 'Consultation', desc: 'We understand your business goals and requirements' },
            { step: '02', title: 'Strategy', desc: 'Customized marketing plan tailored to your needs' },
            { step: '03', title: 'Execution', desc: 'Our team implements the strategy with precision' },
            { step: '04', title: 'Optimization', desc: 'Continuous monitoring and improvement for best results' }
          ].map((process, index) => (
            <Grid item xs={12} size={6} sm={6} md={3} key={index}>
              <Card
                sx={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  borderRadius: '25px',
                  p: 3,
                  textAlign: 'center',
                  color: 'white',
                  height: '100%',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 15px 30px rgba(255, 222, 34, 0.2)',
                  }
                }}
              >
                <Box
                  sx={{
                    width: 60,
                    height: 60,
                    background: 'linear-gradient(135deg, #ffde22, #ff6b6b)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 20px',
                    fontWeight: 'bold',
                    fontSize: '1.2rem',
                  }}
                >
                  {process.step}
                </Box>
                <Typography variant="h5" component="h3" gutterBottom fontWeight="bold">
                  {process.title}
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.9 }}>
                  {process.desc}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Additional CTA Section */}
      <Box sx={{ position: 'relative', zIndex: 1 }}>
        <Container maxWidth="lg" sx={{ py: 8 }}>
          <Paper
            sx={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.2)',
              borderRadius: '25px',
              p: 6,
              textAlign: 'center',
              color: 'white',
              position: 'relative',
              zIndex: 2,
            }}
          >
            <Typography variant="h3" component="h2" gutterBottom fontWeight="bold">
              Need Only Influencer Marketing?
            </Typography>
            <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
              Connect directly with talented creators in your city
            </Typography>
            
            <Box sx={{ display: 'flex', gap: 3, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Button
                variant="contained"
                size="large"
                startIcon={<LocationOn />}
                sx={{
                  background: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
                  color: 'white',
                  px: 4,
                  py: 1.5,
                  borderRadius: '25px',
                  fontWeight: 'bold',
                  '&:hover': {
                    transform: 'translateY(-3px)',
                    boxShadow: '0 15px 30px rgba(67, 233, 123, 0.4)',
                  }
                }}
              >
                Check Available Talent by City
              </Button>
              
              <Button
                variant="outlined"
                size="large"
                startIcon={<Schedule />}
                sx={{
                  border: '2px solid #ffde22',
                  color: '#ffde22',
                  px: 4,
                  py: 1.5,
                  borderRadius: '2525px',
                  fontWeight: 'bold',
                  '&:hover': {
                    background: '#ffde22',
                    color: 'black',
                    transform: 'translateY(-3px)',
                  }
                }}
              >
                Book a 15-Min Strategy Call
              </Button>
            </Box>
          </Paper>
        </Container>
      </Box>

      {/* Creator Application Dialog */}
      <Dialog 
        open={openCreatorDialog} 
        onClose={handleCreatorClose}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle>
          <Typography variant="h4" component="div" fontWeight="bold">
            Join Our Creator Network
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Complete your profile to start getting brand collaborations
          </Typography>
        </DialogTitle>
        
        <DialogContent>
          <Stepper activeStep={activeStep} sx={{ mb: 4 }}>
            {creatorSteps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>

          {activeStep === 0 && (
            <Box>
              <Typography variant="h6" gutterBottom>Basic Information</Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label="Full Name" variant="outlined" />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label="Email" variant="outlined" />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label="Phone" variant="outlined" />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label="City" variant="outlined" />
                </Grid>
                <Grid item xs={12}>
                  <TextField fullWidth label="Bio" variant="outlined" multiline rows={3} />
                </Grid>
              </Grid>
            </Box>
          )}

          {activeStep === 1 && (
            <Box>
              <Typography variant="h6" gutterBottom>Portfolio & Work Samples</Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                Upload your best work samples, portfolio links, or social media profiles
              </Typography>
              {/* File upload components would go here */}
            </Box>
          )}

          {activeStep === 2 && (
            <Box>
              <Typography variant="h6" gutterBottom>Skills & Preferences</Typography>
              {/* Skills selection would go here */}
            </Box>
          )}

          {activeStep === 3 && (
            <Box>
              <Typography variant="h6" gutterBottom>Review & Submit</Typography>
              <Typography variant="body2" color="text.secondary">
                Our team will review your application and get back to you within 24 hours.
              </Typography>
            </Box>
          )}
        </DialogContent>

        <DialogActions sx={{ p: 3 }}>
          <Button onClick={handleBack} disabled={activeStep === 0}>
            Back
          </Button>
          <Button 
            variant="contained" 
            onClick={activeStep === creatorSteps.length - 1 ? handleCreatorClose : handleNext}
          >
            {activeStep === creatorSteps.length - 1 ? 'Submit Application' : 'Next'}
          </Button>
        </DialogActions>
      </Dialog>
      
      {/* Client Package Dialog - Compact Version */}
      <Dialog 
        open={openClientDialog} 
        onClose={handleClientClose}
        maxWidth="lg"
        fullWidth
        PaperProps={{
          sx: {
            background: 'linear-gradient(135deg, rgba(13, 13, 13, 0.95) 0%, rgba(25, 25, 35, 0.95) 100%)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 222, 34, 0.3)',
            borderRadius: '25px',
            boxShadow: '0 25px 50px rgba(0, 0, 0, 0.5)',
            overflow: 'hidden',
            maxHeight: '90vh',
          }
        }}
      >
        {/* Background Glow Effect */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '3px',
            background: 'linear-gradient(90deg, #ff6b6b, #ffde22, #4facfe, #43e97b)',
            backgroundSize: '400% 400%',
            animation: `${glowAnimation} 3s ease-in-out infinite`,
          }}
        />
        
        <DialogTitle sx={{ pb: 1, textAlign: 'center', position: 'relative' }}>
          <Typography 
            variant="h4" 
            component="div" 
            fontWeight="bold"
            sx={{
              background: 'linear-gradient(45deg, #ffde22, #ff6b6b, #4facfe)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              backgroundSize: '300% 300%',
              animation: `${floatAnimation} 6s ease-in-out infinite`,
              mb: 0.5,
            }}
          >
            Choose Your Marketing Package
          </Typography>
          <Typography 
            variant="subtitle1" 
            sx={{ 
              color: 'rgba(255, 255, 255, 0.8)',
              fontWeight: 300,
            }}
          >
            Select the perfect plan to boost your digital presence
          </Typography>
        </DialogTitle>
        
        <DialogContent sx={{ py: 2 }}>
          <Grid container spacing={2} justifyContent="center">
            {packages.map((pkg, index) => (
              <Grid item xs={12} md={4} key={index} sx={{ display: 'flex' }}>
                <Card
                  sx={{
                    background: pkg.gradient,
                    color: 'white',
                    borderRadius: '18px',
                    p: 0,
                    width: '100%',
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'all 0.3s ease',
                    animation: `${floatAnimation} 4s ease-in-out infinite`,
                    animationDelay: `${index * 0.2}s`,
                    '&:hover': {
                      transform: 'translateY(-5px) scale(1.02)',
                      boxShadow: '0 20px 40px rgba(0,0,0,0.6)',
                    },
                    border: pkg.popular ? '2px solid gold' : '1px solid rgba(255,255,255,0.2)',
                  }}
                >
                  {/* Popular Badge */}
                  {pkg.popular && (
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 12,
                        right: 12,
                        background: 'linear-gradient(135deg, gold, #ffd700)',
                        color: 'black',
                        px: 2,
                        py: 0.5,
                        borderRadius: '15px',
                        fontWeight: 'bold',
                        fontSize: '0.7rem',
                        animation: `${glowAnimation} 2s ease-in-out infinite`,
                        boxShadow: '0 3px 10px rgba(255, 215, 0, 0.4)',
                        zIndex: 2,
                        display: 'flex',
                        alignItems: 'center',
                        gap: 0.3,
                      }}
                    >
                      <Star sx={{ fontSize: 14 }} />
                      POPULAR
                    </Box>
                  )}

                  {/* Card Content */}
                  <CardContent sx={{ p: 3, position: 'relative', zIndex: 1 }}>
                    {/* Package Name */}
                    <Typography 
                      variant="h5" 
                      component="h3" 
                      gutterBottom 
                      fontWeight="bold"
                      sx={{
                        textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                        mb: 2,
                        fontSize: '1.5rem',
                      }}
                    >
                      {pkg.name}
                    </Typography>
                    
                    {/* Price Section */}
                    <Box 
                      sx={{ 
                        display: 'flex', 
                        alignItems: 'baseline', 
                        justifyContent: 'center', 
                        mb: 2,
                        background: 'rgba(255,255,255,0.1)',
                        borderRadius: '12px',
                        py: 1.5,
                        mx: -1,
                      }}
                    >
                      <Typography 
                        variant="h3" 
                        component="div" 
                        fontWeight="bold"
                        sx={{
                          textShadow: '2px 2px 8px rgba(0,0,0,0.4)',
                          fontSize: '2rem',
                        }}
                      >
                        ₹{pkg.price}
                      </Typography>
                      <Typography 
                        variant="body1" 
                        sx={{ 
                          ml: 1, 
                          opacity: 0.9,
                          fontWeight: 300,
                        }}
                      >
                        /{pkg.duration}
                      </Typography>
                    </Box>

                    {/* Features List */}
                    <Box sx={{ mb: 3 }}>
                      {pkg.features.map((feature, idx) => (
                        <Box 
                          key={idx} 
                          sx={{ 
                            display: 'flex', 
                            alignItems: 'center', 
                            mb: 1,
                            background: 'rgba(255,255,255,0.05)',
                            borderRadius: '8px',
                            p: 1,
                            transition: 'all 0.2s ease',
                            '&:hover': {
                              background: 'rgba(255,255,255,0.08)',
                              transform: 'translateX(3px)',
                            }
                          }}
                        >
                          <CheckCircle 
                            sx={{ 
                              color: 'limegreen', 
                              mr: 1.5, 
                              fontSize: 20,
                              minWidth: '20px',
                              filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))',
                            }} 
                          />
                          <Typography 
                            variant="body2" 
                            sx={{
                              fontWeight: 500,
                              textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
                              fontSize: '0.85rem',
                              lineHeight: 1.3,
                            }}
                          >
                            {feature}
                          </Typography>
                        </Box>
                      ))}
                    </Box>

                    {/* Select Button */}
                    <Button
                      variant="contained"
                      fullWidth
                      size="medium"
                      onClick={handleContactRedirect}
                      sx={{
                        background: pkg.popular 
                          ? 'linear-gradient(135deg, #ffde22, #ffb347)'
                          : 'rgba(255,255,255,0.2)',
                        color: pkg.popular ? 'black' : 'white',
                        py: 1.2,
                        borderRadius: '12px',
                        border: pkg.popular ? 'none' : '1px solid rgba(255,255,255,0.3)',
                        fontWeight: 'bold',
                        fontSize: '0.9rem',
                        textTransform: 'none',
                        boxShadow: pkg.popular 
                          ? '0 6px 20px rgba(255, 222, 34, 0.4)'
                          : '0 3px 10px rgba(0,0,0,0.2)',
                        transition: 'all 0.2s ease',
                        '&:hover': {
                          background: pkg.popular 
                            ? 'linear-gradient(135deg, #ffb347, #ffde22)'
                            : 'rgba(255,255,255,0.25)',
                          transform: 'translateY(-2px)',
                          boxShadow: pkg.popular 
                            ? '0 8px 25px rgba(255, 222, 34, 0.6)'
                            : '0 6px 20px rgba(0,0,0,0.3)',
                        }
                      }}
                    >
                      {pkg.popular ? 'Get Started Now' : `Choose ${pkg.name}`}
                      <ArrowForward sx={{ ml: 0.5, fontSize: 18 }} />
                    </Button>
                  </CardContent>

                  {/* Subtle Pattern Overlay */}
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: `
                        radial-gradient(circle at 20% 80%, rgba(255,255,255,0.1) 0%, transparent 50%),
                        radial-gradient(circle at 80% 20%, rgba(255,255,255,0.05) 0%, transparent 50%)
                      `,
                      pointerEvents: 'none',
                    }}
                  />
                </Card>
              </Grid>
            ))}
          </Grid>
        </DialogContent>
        
        <DialogActions sx={{ p: 3, pt: 1 }}>
          <Button 
            onClick={handleClientClose}
            sx={{
              color: 'rgba(255, 255, 255, 0.8)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              borderRadius: '8px',
              px: 3,
              py: 0.8,
              fontSize: '0.9rem',
              '&:hover': {
                background: 'rgba(255, 255, 255, 0.1)',
                color: 'white',
              }
            }}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
      
      <Layout />
    </Box>
  );
};

export default Services;