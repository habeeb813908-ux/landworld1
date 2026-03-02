import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import './styles/index.css';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ServiceAreas from './pages/ServiceAreas';
import Contact from './pages/Contact';

// Components
import Layout from './components/Layout';
import WhatsAppButton from './components/WhatsAppButton';
import ScrollToTop from './components/ScrollToTop';

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/service-areas" element={<ServiceAreas />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Layout>
        <WhatsAppButton />
      </Router>
    </HelmetProvider>
  );
};

export default App;
