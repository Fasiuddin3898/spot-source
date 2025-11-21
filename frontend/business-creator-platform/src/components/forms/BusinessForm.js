import React from 'react';
import {
  TextField,
  Button,
  Box,
  Grid,
} from '@mui/material';
import {
  Phone,
  Email,
  LocationOn,
  Send
} from '@mui/icons-material';
import BusinessPng from '../../assets/png/business.png';

console.log("IMAGE PATH:", BusinessPng);  // ✅ Add this line here

const BusinessForm = ({ formData, onChange, onSubmit }) => {
  return (
    
    <Box sx={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center' }}>
      <Grid container sx={{ height: '100%', minHeight: '80vh' }}>
        {/* Left Side - Image (50%) */}
        <Grid 
          item 
          size={6} 
          md={6}
          sx={{ 
            p: 3,
            height: '100%',
          }}
        >
          <Box
            component="img"
            src={BusinessPng}
            alt="Business Collaboration"
            sx={{
              width: '100%',
              height: '100%',
              maxHeight: '500px',
              objectFit: 'cover',
              borderRadius: '20px',
              display: 'block',
            }}
          />
        </Grid>

        {/* Right Side - Form (50%) */}
        <Grid 
          item 
          size={6} 
          md={6}
          sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            p: 3,
            height: '100%',
          }}
        >
          <Box 
            component="form" 
            onSubmit={onSubmit}
            sx={{
              width: '100%',
              maxWidth: '500px',
              px: 3,
              py: 4,
            }}
          >
            <TextField
              fullWidth
              label="Full Name"
              name="fullName"
              value={formData.fullName}
              onChange={onChange}
              required
              size="medium"
              sx={{
                mb: 3,
                '& .MuiOutlinedInput-root': {
                  color: 'white',
                  fontSize: '1rem',
                  '& fieldset': { 
                    borderColor: 'rgba(255,255,255,0.3)',
                    borderWidth: '2px'
                  },
                  '&:hover fieldset': { borderColor: '#ffde22' },
                  '&.Mui-focused fieldset': { borderColor: '#ffde22' },
                },
                '& .MuiInputLabel-root': { 
                  color: 'rgba(255,255,255,0.7)',
                  fontSize: '1rem'
                },
              }}
            />
            
            <TextField
              fullWidth
              label="Business Name"
              name="business"
              value={formData.business}
              onChange={onChange}
              required
              size="medium"
              sx={{
                mb: 3,
                '& .MuiOutlinedInput-root': {
                  color: 'white',
                  fontSize: '1rem',
                  '& fieldset': { 
                    borderColor: 'rgba(255,255,255,0.3)',
                    borderWidth: '2px'
                  },
                  '&:hover fieldset': { borderColor: '#ffde22' },
                  '&.Mui-focused fieldset': { borderColor: '#ffde22' },
                },
                '& .MuiInputLabel-root': { 
                  color: 'rgba(255,255,255,0.7)',
                  fontSize: '1rem'
                },
              }}
            />
            
            <TextField
              fullWidth
              label="Phone"
              name="phone"
              value={formData.phone}
              onChange={onChange}
              required
              size="medium"
              InputProps={{
                startAdornment: <Phone sx={{ color: '#ffde22', mr: 1.5, fontSize: '20px' }} />,
              }}
              sx={{
                mb: 3,
                '& .MuiOutlinedInput-root': {
                  color: 'white',
                  fontSize: '1rem',
                  '& fieldset': { 
                    borderColor: 'rgba(255,255,255,0.3)',
                    borderWidth: '2px'
                  },
                  '&:hover fieldset': { borderColor: '#ffde22' },
                  '&.Mui-focused fieldset': { borderColor: '#ffde22' },
                },
                '& .MuiInputLabel-root': { 
                  color: 'rgba(255,255,255,0.7)',
                  fontSize: '1rem'
                },
              }}
            />
            
            <TextField
              fullWidth
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={onChange}
              required
              size="medium"
              InputProps={{
                startAdornment: <Email sx={{ color: '#ffde22', mr: 1.5, fontSize: '20px' }} />,
              }}
              sx={{
                mb: 3,
                '& .MuiOutlinedInput-root': {
                  color: 'white',
                  fontSize: '1rem',
                  '& fieldset': { 
                    borderColor: 'rgba(255,255,255,0.3)',
                    borderWidth: '2px'
                  },
                  '&:hover fieldset': { borderColor: '#ffde22' },
                  '&.Mui-focused fieldset': { borderColor: '#ffde22' },
                },
                '& .MuiInputLabel-root': { 
                  color: 'rgba(255,255,255,0.7)',
                  fontSize: '1rem'
                },
              }}
            />
            
            <TextField
              fullWidth
              label="Business Address"
              name="address"
              multiline
              rows={3}
              value={formData.address}
              onChange={onChange}
              size="medium"
              InputProps={{
                startAdornment: <LocationOn sx={{ color: '#ffde22', mr: 1.5, mt: 2, fontSize: '20px' }} />,
              }}
              sx={{
                mb: 4,
                '& .MuiOutlinedInput-root': {
                  color: 'white',
                  fontSize: '1rem',
                  '& fieldset': { 
                    borderColor: 'rgba(255,255,255,0.3)',
                    borderWidth: '2px'
                  },
                  '&:hover fieldset': { borderColor: '#ffde22' },
                  '&.Mui-focused fieldset': { borderColor: '#ffde22' },
                },
                '& .MuiInputLabel-root': { 
                  color: 'rgba(255,255,255,0.7)',
                  fontSize: '1rem'
                },
              }}
            />

            <Button
              type="submit"
              variant="contained"
              fullWidth
              size="large"
              endIcon={<Send sx={{ fontSize: '20px' }} />}
              sx={{
                background: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
                '&:hover': {
                  background: 'linear-gradient(135deg, #38f9d7 0%, #43e97b 100%)',
                  transform: 'translateY(-2px)',
                },
                transition: 'all 0.3s ease',
                fontWeight: 'bold',
                fontSize: '1rem',
                py: 1.5,
                color: 'black',
              }}
            >
              Send Business Inquiry
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default BusinessForm;