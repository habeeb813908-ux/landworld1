import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Target, ShieldCheck, Ruler, LayoutGrid, MapPin, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Services.css';

const services = [
    {
        id: 'rtk-digital-survey',
        icon: <Target size={32} />,
        title: 'RTK Digital Survey',
        description: 'High-precision Real-Time Kinematic survey utilizing industrial-grade GPS equipment for millimeter-level accuracy. Perfect for accurate mapping and precision projects.',
        benefits: ['Millimeter-level accuracy', 'Real-time data collection', 'Digital map output', 'Fast turnaround time'],
        whoNeeds: 'Property owners, Civil Engineers, Land Developers, Government projects.',
        cta: 'Get RTK Quote'
    },
    {
        id: 'boundary-survey',
        icon: <ShieldCheck size={32} />,
        title: 'Boundary Survey',
        description: 'Specialized survey to identify and mark the exact legal boundaries of a property. Essential for resolving disputes and legal clarity.',
        benefits: ['Legal boundary marking', 'Dispute resolution', 'Fencing & walls planning', 'Clear documentation'],
        whoNeeds: 'Landowners, Real Estate buyers, Legal firms, Neighborhood associations.',
        cta: 'Inquire Boundary Survey'
    },
    {
        id: 'land-measurement',
        icon: <Ruler size={32} />,
        title: 'Land Measurement',
        description: 'Comprehensive land area measurement and calculations for various purposes, from small plots to large estates.',
        benefits: ['Accurate area calculation', 'detailed layout plans', 'Property valuation support', 'Professional certification'],
        whoNeeds: 'Farmers, Homeowners, Commercial developers, Estate managers.',
        cta: 'Book Measurement'
    },
    {
        id: 'site-layout-marking',
        icon: <LayoutGrid size={32} />,
        title: 'Site Layout Marking',
        description: 'Expert marking and layout setting for buildings, foundations, roads, and utilities based on architectural plans.',
        benefits: ['Accurate construction start', 'Plan-to-field precision', 'Foundation marking', 'Drainage layout'],
        whoNeeds: 'Builders, Contractors, Architects, Infrastructure companies.',
        cta: 'Site Marking Service'
    },
    {
        id: 'property-demarcation',
        icon: <MapPin size={32} />,
        title: 'Property Demarcation',
        description: 'Physical marking and demarcation of land plots using permanent markers for clear visibility and identification.',
        benefits: ['Clear land marking', 'Physical boundary clarity', 'Plot subdivision marking', 'Fence alignment'],
        whoNeeds: 'Plot developers, Private landowners, Colony developers.',
        cta: 'Mark Your Property'
    }
];

const Services: React.FC = () => {
    return (
        <div className="services-page">
            <Helmet>
                <title>Our Services | RTK Digital Survey & Land Measurement Kerala</title>
                <meta name="description" content="Explore our professional services: RTK Digital Survey, Boundary Survey, Land Measurement, Site Layout Marking, and Property Demarcation in Kasaragod." />
                <meta name="keywords" content="RTK Digital Survey Kerala, Boundary Survey Service, Professional Land Measurement, Site Layout Marking" />
            </Helmet>

            <section className="page-header">
                <div className="container">
                    <h1>Our Services</h1>
                    <p>Professional Surveying Solutions with Advanced Digital Accuracy</p>
                </div>
            </section>

            <section className="section services-list">
                <div className="container">
                    {services.map((service, index) => (
                        <div key={service.id} className="service-detail-card animate" style={{ animationDelay: `${index * 0.1}s` }}>
                            <div className="service-info-row">
                                <div className="service-main-info">
                                    <div className="service-icon-large">{service.icon}</div>
                                    <h2>{service.title}</h2>
                                    <p className="service-desc">{service.description}</p>

                                    <div className="service-meta">
                                        <div className="who-needs">
                                            <h4>Who Needs This?</h4>
                                            <p>{service.whoNeeds}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="service-benefits">
                                    <h4>Key Benefits</h4>
                                    <ul className="benefit-list">
                                        {service.benefits.map((benefit, i) => (
                                            <li key={i}><CheckCircle size={16} /> <span>{benefit}</span></li>
                                        ))}
                                    </ul>
                                    <Link to="/contact" className="btn btn-primary w-full">
                                        {service.cta} <ArrowRight size={18} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="section faq-section bg-accent">
                <div className="container">
                    <div className="section-title">
                        <h2>Frequently Asked Questions</h2>
                        <p>Everything you need to know about our digital survey services.</p>
                    </div>
                    <div className="faq-grid grid grid-2">
                        {[
                            { q: "What is RTK Digital Survey?", a: "RTK (Real-Time Kinematic) is a satellite navigation technique used to enhance the precision of position data. It provides centimeter-level accuracy for land surveying." },
                            { q: "How long does a typical survey take?", a: "A standard small plot survey takes about 4-6 hours, while larger estate surveys may take 1-3 days depending on terrain and area size." },
                            { q: "Do you provide digital results?", a: "Yes, we providing high-quality digital maps, area calculation reports, and professional CAD files if required." },
                            { q: "Is your survey recognized legally?", a: "We follow industry-standard practices and our surveys are used for property demarcation, civil engineering, and legal boundary disputes." }
                        ].map((faq, i) => (
                            <div key={i} className="faq-item">
                                <h4>{faq.q}</h4>
                                <p>{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;
