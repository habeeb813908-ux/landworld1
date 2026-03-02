import React from 'react';
import { Helmet } from 'react-helmet-async';
import { MapPin, Navigation, Map } from 'lucide-react';
import './ServiceAreas.css';

const ServiceAreas: React.FC = () => {
    const locations = [
        { name: "Kasaragod Town", keyword: "Land Survey in Kasaragod", desc: "Expert digital survey and boundary marking across Kasaragod town and suburban areas." },
        { name: "Kuttikol", keyword: "RTK Survey in Kuttikol", desc: "Specialized high-precision RTK surveying services located in the heart of Kuttikol." },
        { name: "Hosdurg", keyword: "Boundary Survey Service", desc: "Professional boundary identification and property measurement in Hosdurg area." },
        { name: "Manjeshwar", keyword: "Digital Land Survey Kerala", desc: "State-of-the-art digital mapping and land calculation services in Manjeshwar." },
        { name: "Uppala", keyword: "Professional Land Measurement", desc: "Accurate land measurement and site layout marking for Uppala and near regions." },
        { name: "Kanrawally", keyword: "Digital Land Survey Near Me", desc: "Local surveying experts providing quick and reliable results in Kanrawally." }
    ];

    return (
        <div className="service-areas-page">
            <Helmet>
                <title>Service Areas | Land Survey in Kasaragod & Kerala</title>
                <meta name="description" content="We provide professional land survey services in Kasaragod, Kuttikol, Hosdurg, Manjeshwar, and across Kerala. Expert RTK Digital Survey near you." />
                <meta name="keywords" content="Land Survey in Kasaragod, RTK Survey in Kuttikol, Boundary Survey Kerala, Digital Land Survey Near Me" />
            </Helmet>

            <section className="page-header">
                <div className="container">
                    <h1>Service Areas</h1>
                    <p>Local Experts Providing Professional Surveying Across Kerala</p>
                </div>
            </section>

            <section className="section areas-intro">
                <div className="container grid grid-2">
                    <div className="areas-text animate">
                        <h2>Serving the Heart of <span className="highlight">Kasaragod</span> and Districts</h2>
                        <p>At Land World Digital Survey, we are proud to be the premier choice for land surveying in Northern Kerala. Our base in Kuttikol allows us to quickly respond to projects throughout Kasaragod and surrounding areas.</p>
                        <p>Whether you are a homeowner in Kasaragod town needing a boundary survey or a developer in Hosdurg looking for large-scale RTK mapping, our team is equipped to handle your requirements with precision and local expertise.</p>
                    </div>
                    <div className="areas-map-icon animate">
                        <div className="map-visual">
                            <MapPin size={100} className="floating-icon" />
                            <div className="ripple"></div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section locations-grid-section bg-accent">
                <div className="container">
                    <div className="section-title">
                        <h2>Key Locations We Cover</h2>
                        <p>Our professional services are available in several key areas across the region.</p>
                    </div>
                    <div className="grid grid-3">
                        {locations.map((loc, i) => (
                            <div key={i} className="location-card animate">
                                <div className="location-top">
                                    <Navigation size={20} className="icon" />
                                    <h3>{loc.name}</h3>
                                </div>
                                <p className="location-keyword">{loc.keyword}</p>
                                <p className="location-desc">{loc.desc}</p>
                                <div className="location-footer">
                                    <Map size={16} /> <span>Service Available Now</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section statewide-cta text-center">
                <div className="container">
                    <h2>Need a Survey Elsewhere in Kerala?</h2>
                    <p>While our primary focus is Kasaragod, we undertake significant projects across Kerala for industrial and large-scale development mapping.</p>
                    <a href="/contact" className="btn btn-primary">Check Availability</a>
                </div>
            </section>
        </div>
    );
};

export default ServiceAreas;
