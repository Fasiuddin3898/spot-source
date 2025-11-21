import React from 'react';
import {
  TextField,
  Button,
  Box,
  Grid,
  FormControlLabel,
  Checkbox
} from '@mui/material';
import {
  Phone,
  Email,
  LocationOn,
  Link,
  Send
} from '@mui/icons-material';
import BusinessPng from '../../assets/png/creators.png';

console.log("IMAGE PATH:", BusinessPng);

const CreatorForm = ({ formData, onChange, onSubmit }) => {
  return (
    <Box sx={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center' }}>
      <Grid container sx={{ height: '100%', minHeight: '80vh' }}>
        {/* Left Side - Form (50%) */}
        <Grid 
          item 
          size={6} 
          xs={12} 
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
              label="City/Place"
              name="place"
              value={formData.place}
              onChange={onChange}
              required
              size="medium"
              InputProps={{
                startAdornment: <LocationOn sx={{ color: '#ffde22', mr: 1.5, fontSize: '20px' }} />,
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
              label="Contact Number/Email"
              name="contact"
              value={formData.contact}
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
              label="Instagram Profile"
              name="instagram"
              value={formData.instagram}
              onChange={onChange}
              size="medium"
              InputProps={{
                startAdornment: <Link sx={{ color: '#ffde22', mr: 1.5, fontSize: '20px' }} />,
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
              label="YouTube Channel"
              name="youtube"
              value={formData.youtube}
              onChange={onChange}
              size="medium"
              InputProps={{
                startAdornment: <Link sx={{ color: '#ffde22', mr: 1.5, fontSize: '20px' }} />,
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
            
            <FormControlLabel
              control={
                <Checkbox
                  name="readyForCollabs"
                  checked={formData.readyForCollabs}
                  onChange={onChange}
                  sx={{
                    color: '#ffde22',
                    '&.Mui-checked': {
                      color: '#ffde22',
                    },
                  }}
                />
              }
              label="Are you ready to do better collabs if we sent any products?"
              sx={{ 
                color: 'rgba(255,255,255,0.9)',
                mb: 4,
                display: 'block',
                '& .MuiTypography-root': {
                  fontSize: '0.9rem',
                }
              }}
            />

            <Button
              type="submit"
              variant="contained"
              fullWidth
              size="large"
              endIcon={<Send sx={{ fontSize: '20px' }} />}
              sx={{
                background: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
                '&:hover': {
                  background: 'linear-gradient(135deg, #fee140 0%, #fa709a 100%)',
                  transform: 'translateY(-2px)',
                },
                transition: 'all 0.3s ease',
                fontWeight: 'bold',
                fontSize: '1rem',
                py: 1.5,
                color: 'black',
              }}
            >
              Join as Creator
            </Button>
          </Box>
        </Grid>

        {/* Right Side - Image (50%) */}
        <Grid 
          item 
          size={6} 
          xs={12} 
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
            component="img"
            src={BusinessPng}
            alt="Creator Collaboration"
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
      </Grid>
    </Box>
  );
};

export default CreatorForm;