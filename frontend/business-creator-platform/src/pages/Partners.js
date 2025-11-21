import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
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

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);
  
  // Add state for form data
  const [businessFormData, setBusinessFormData] = React.useState({
    fullName: '',
    business: '',
    phone: '',
    email: '',
    address: ''
  });

  const [creatorFormData, setCreatorFormData] = React.useState({
    fullName: '',
    place: '',
    contact: '',
    instagram: '',
    youtube: '',
    readyForCollabs: false
  });

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // Add handler for business form changes
  const handleBusinessChange = (event) => {
    const { name, value } = event.target;
    setBusinessFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Add handler for business form submission
  const handleBusinessSubmit = (event) => {
    event.preventDefault();
    console.log('Business Form Submitted:', businessFormData);
    // Add your form submission logic here
  };

  // Add handler for creator form changes
  const handleCreatorChange = (event) => {
    const { name, value, type, checked } = event.target;
    setCreatorFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  // Add handler for creator form submission
  const handleCreatorSubmit = (event) => {
    event.preventDefault();
    console.log('Creator Form Submitted:', creatorFormData);
    // Add your form submission logic here
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="For Businesses" {...a11yProps(0)} />
          <Tab label="For Creators" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        {/* Pass the required props to BusinessForm */}
        <BusinessForm 
          formData={businessFormData}
          onChange={handleBusinessChange}
          onSubmit={handleBusinessSubmit}
        />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        {/* Pass the required props to CreatorForm */}
        <CreatorForm 
          formData={creatorFormData}
          onChange={handleCreatorChange}
          onSubmit={handleCreatorSubmit}
        />
      </CustomTabPanel>
    </Box>
  );
}