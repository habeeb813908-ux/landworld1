import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
import './Footer.css';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="container grid grid-3">
                <div className="footer-about">
                    <Link to="/" className="footer-logo-container">
                        <img src="/logo.png" alt="Land World Digital Survey Logo" className="footer-logo-img" />
                        <div className="logo-text">
                            LAND<span className="accent-text">WORLD</span>
                            <p className="tagline">Digital Survey</p>
                        </div>
                    </Link>
                    <p className="footer-desc">Professional RTK Digital Land Survey Services in Kerala. Accurate boundary measurement and property demarcation since 2010.</p>
                    <div className="social-links">
                        <a href="#"><Facebook size={20} /></a>
                        <a href="#"><Instagram size={20} /></a>
                        <a href="#"><Twitter size={20} /></a>
                    </div>
                </div>
                <div className="footer-links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/services">Our Services</Link></li>
                        <li><Link to="/service-areas">Service Areas</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>
                <div className="footer-contact">
                    <h3>Contact Info</h3>
                    <ul>
                        <li><MapPin size={20} className="icon" /> <span>Souparnika Complex, Kuttikol, Kasaragod, Kerala, India</span></li>
                        <li><Phone size={20} className="icon" /> <span>8848969743, 9072241523</span></li>
                        <li><Mail size={20} className="icon" /> <span>landworlddigitalsurvey@gmail.com</span></li>
                    </ul>
                </div>
            </div>
            <div className="container footer-bottom">
                <p>&copy; {new Date().getFullYear()} Land World Digital Survey. All Rights Reserved.</p>
                <p>Expert Land Surveying in Kasaragod & Kerala</p>
            </div>
        </footer>
    );
};

export default Footer;
