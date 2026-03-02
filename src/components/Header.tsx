import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';
import './Header.css';

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`header ${scrolled ? 'scrolled' : ''}`}>
            <div className="top-bar">
                <div className="container">
                    <div className="top-info">
                        <a href="tel:8848969743"><Phone size={14} /> 8848969743</a>
                        <a href="mailto:landworlddigitalsurvey@gmail.com"><Mail size={14} /> landworlddigitalsurvey@gmail.com</a>
                    </div>
                    <div className="top-social">
                        Since 2010
                    </div>
                </div>
            </div>
            <nav className="container">
                <Link to="/" className="logo-container">
                    <img src="/logo.png" alt="Land World Digital Survey Logo" className="logo-img" />
                    <div className="logo-text">
                        LAND<span className="accent-text">WORLD</span>
                        <p className="tagline">Digital Survey</p>
                    </div>
                </Link>
                <div className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </div>
                <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
                    <li><NavLink to="/" onClick={() => setIsOpen(false)}>Home</NavLink></li>
                    <li><NavLink to="/about" onClick={() => setIsOpen(false)}>About Us</NavLink></li>
                    <li><NavLink to="/services" onClick={() => setIsOpen(false)}>Services</NavLink></li>
                    <li><NavLink to="/service-areas" onClick={() => setIsOpen(false)}>Service Areas</NavLink></li>
                    <li><NavLink to="/contact" className="nav-btn" onClick={() => setIsOpen(false)}>Contact</NavLink></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
