import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Target, Users, Settings, MapPin } from 'lucide-react';
import './About.css';

const About: React.FC = () => {
    return (
        <div className="about-page">
            <Helmet>
                <title>About Us | Land World Digital Survey Kasaragod</title>
                <meta name="description" content="Learn about Land World Digital Survey. Serving Kasaragod since 2010 with professional RTK digital land survey technology and expertise." />
            </Helmet>

            <section className="page-header">
                <div className="container">
                    <h1>About Us</h1>
                    <p>Excellence in Precision Land Surveying Since 2010</p>
                </div>
            </section>

            <section className="section about-intro">
                <div className="container grid grid-2">
                    <div className="about-text animate">
                        <h2>Serving Kasaragod with <span className="highlight">Precision</span> for Over 14 Years</h2>
                        <p>Founded in 2010, Land World Digital Survey has established itself as a leader in digital land measurement in Kasaragod and surrounding districts. Our journey began with a simple mission: to provide accurate, reliable, and legal-standard surveying services to landowners, developers, and government bodies.</p>
                        <p>Over the years, we have embraced the latest advancements in technology, transitioning from traditional methods to high-precision RTK (Real-Time Kinematic) digital surveys. This allows us to deliver millimeter-level accuracy that is essential for modern boundary demarcation and property development.</p>
                    </div>
                    <div className="about-image animate">
                        <img src="/about-survey-fallback.jpg" alt="RTK Survey Equipment in Field" />
                    </div>
                </div>
            </section>

            <section className="section bg-accent mission-vision">
                <div className="container grid grid-3">
                    <div className="mission-card animate">
                        <div className="icon-box"><Target /></div>
                        <h3>Our Mission</h3>
                        <p>To provide the highest level of accuracy in land surveying through advanced digital technology and professional expertise, ensuring clarity and peace of mind for every client.</p>
                    </div>
                    <div className="vision-card animate">
                        <div className="icon-box"><Settings /></div>
                        <h3>Our vision</h3>
                        <p>To be the most trusted name in land surveying across Kerala, setting the benchmark for precision, transparency, and technological innovation in the industry.</p>
                    </div>
                    <div className="values-card animate">
                        <div className="icon-box"><Users /></div>
                        <h3>Our Values</h3>
                        <p>Accuracy, Integrity, and Professionalism. We believe in providing honest results that protect the rights of property owners and facilitate smooth development.</p>
                    </div>
                </div>
            </section>

            <section className="section service-commitment">
                <div className="container grid grid-2">
                    <div className="commitment-image animate">
                        <img src="/professional-surveyor-fallback.jpg" alt="Professional Land Surveyor" />
                    </div>
                    <div className="commitment-text animate">
                        <h2>Why Choose Our Expertise?</h2>
                        <ul className="feature-list">
                            <li>
                                <strong>Advanced Equipment:</strong> We use industrial-grade RTK Digital Survey equipment for unmatched precision.
                            </li>
                            <li>
                                <strong>Local Knowledge:</strong> deep understanding of Kasaragod's terrain and local land laws.
                            </li>
                            <li>
                                <strong>Transparent Reports:</strong> Every survey is documented with clear digital maps and accurate measurements.
                            </li>
                            <li>
                                <strong>Client-Centric:</strong> We work closely with our clients to solve complex boundary disputes and property marking.
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="section service-area-highlight bg-dark text-white">
                <div className="container text-center">
                    <MapPin size={48} className="icon-primary" />
                    <h2>Primary Service Area</h2>
                    <p>Kasaragod, Kuttikol, and surrounding areas in Kerala. We are the local experts you can rely on.</p>
                </div>
            </section>
        </div>
    );
};

export default About;
