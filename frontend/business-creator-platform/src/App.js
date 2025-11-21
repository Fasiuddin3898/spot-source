// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import theme from './theme/theme';
import CssBaseline from '@mui/material/CssBaseline';
import Header from './components/Header';
import Home from './pages/Home';
import Services from './pages/Services';
import Partners from './pages/Partners';
import Journey from './pages/Journey';
import Contactus from './pages/Contactus';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/journey" element={<Journey />} />
          <Route path="/contactus" element={<Contactus />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
