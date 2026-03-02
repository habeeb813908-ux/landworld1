import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ShieldCheck, Target, Award, Clock, ArrowRight, PhoneCall } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home: React.FC = () => {
    return (
        <div className="home-page">
            <Helmet>
                <title>Land World Digital Survey | Accurate RTK Land Survey in Kasaragod</title>
                <meta name="description" content="Professional RTK Digital Land Survey services in Kasaragod, Kerala. Accurate boundary & land measurement solutions since 2010. Book your survey now! Call 8848969743." />
                <meta name="keywords" content="Land Survey in Kasaragod, RTK Digital Survey Kerala, Boundary Survey Service, Professional Land Measurement" />
            </Helmet>

            {/* Hero Section */}
            <section className="hero">
                <div className="container">
                    <div className="hero-content animate">
                        <span className="badge">Established 2010</span>
                        <h1>Accurate <span className="highlight">RTK Digital</span> Land Survey Services in Kasaragod</h1>
                        <p className="malayalam-tagline">RTK (കമ്പ്യൂട്ടർ സർവ്വേ) ഡിജിറ്റൽ വസ്തു അളവ്</p>
                        <p>Professional Boundary & Land Measurement Solutions with High-Precision Equipment and 14+ Years of Expertise.</p>
                        <p className="malayalam-desc">ഡിജിറ്റൽ സർവ്വേയ്ക്ക് സഹായകരമാകുന്ന രീതിയിൽ തർക്കരഹിതമായി വസ്തു ഭാഗം തിരിച്ചു സർവ്വേ സ്കെച്ചുകൾ തയ്യാറാക്കൽ.</p>
                        <div className="hero-btns">
                            <Link to="/contact" className="btn btn-primary">Book Survey Now <ArrowRight size={18} /></Link>
                            <Link to="/services" className="btn btn-outline">Explore Services</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Overview */}
            <section className="section services-overview">
                <div className="container">
                    <div className="section-title">
                        <span>What We Offer</span>
                        <h2>Our Core Services</h2>
                        <p>We provide a comprehensive range of surveying solutions using the latest digital technology.</p>
                    </div>
                    <div className="grid grid-3">
                        {[
                            { icon: <Target />, title: 'RTK Digital Survey', desc: 'Real-Time Kinematic survey for millimeter-level accuracy in land measurement.' },
                            { icon: <ShieldCheck />, title: 'Boundary Survey', desc: 'Precise identification and marking of property boundaries following legal standards.' },
                            { icon: <Award />, title: 'Site Layout Marking', desc: 'Expert layout marking for construction projects, roads, and land developments.' }
                        ].map((service, i) => (
                            <div key={i} className="service-card card-hover animate" style={{ animationDelay: `${i * 0.1}s` }}>
                                <div className="service-icon">{service.icon}</div>
                                <h3>{service.title}</h3>
                                <p>{service.desc}</p>
                                <Link to="/services" className="read-more">Learn More <ArrowRight size={14} /></Link>
                            </div>
                        ))}
                    </div>
                    <div className="view-all">
                        <Link to="/services" className="btn btn-outline">View All Services</Link>
                    </div>
                </div>
            </section>

            {/* Highlight Section */}
            <section className="section bg-accent since-highlight">
                <div className="container grid grid-2">
                    <div className="highlight-img animate">
                        <img src="/survey-hero-fallback.jpg" alt="Land Surveying Equipment" />
                        <div className="experience-badge">
                            <h3>14+</h3>
                            <p>Years Experience</p>
                        </div>
                    </div>
                    <div className="highlight-content animate">
                        <span className="badge">Since 2010</span>
                        <h2>Trusted Surveying Partner in Kerala</h2>
                        <p>At Land World Digital Survey, we combine over a decade of experience with state-of-the-art RTK (Real-Time Kinematic) technology to deliver results that are both accurate and reliable.</p>
                        <ul className="check-list">
                            <li><ShieldCheck size={18} /> High-Precision RTK GPS Equipment</li>
                            <li><ShieldCheck size={18} /> Experienced Professional Surveyors</li>
                            <li><ShieldCheck size={18} /> Detailed Digital Maps & Reports</li>
                            <li><ShieldCheck size={18} /> Quick Response & Fast Turnaround</li>
                        </ul>
                        <Link to="/about" className="btn btn-primary">Read Our Story</Link>
                    </div>
                </div>
            </section>

            {/* Trust Stats */}
            <section className="section stats">
                <div className="container grid grid-3">
                    <div className="stat-item">
                        <Clock size={48} />
                        <h3>14+</h3>
                        <p>Years of Excellence</p>
                    </div>
                    <div className="stat-item">
                        <Target size={48} />
                        <h3>5000+</h3>
                        <p>Surveys Completed</p>
                    </div>
                    <div className="stat-item">
                        <Award size={48} />
                        <h3>100%</h3>
                        <p>Client Satisfaction</p>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section cta-banner">
                <div className="container">
                    <div className="cta-box animate">
                        <h2>Ready to Start Your Survey Project?</h2>
                        <p>Contact our experts today for a free consultation and quote.</p>
                        <div className="cta-actions">
                            <a href="tel:8848969743" className="btn btn-primary"><PhoneCall size={18} /> Call +91 8848969743</a>
                            <Link to="/contact" className="btn btn-outline-white">Send Inquiry</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="section testimonials bg-white">
                <div className="container">
                    <div className="section-title">
                        <h2>Client Trust & Reviews</h2>
                        <p>What our clients say about our professional survey services.</p>
                    </div>
                    <div className="grid grid-3">
                        {[
                            { name: "Suresh Kumar", role: "Property Owner, Kuttikol", text: "Very professional and accurate service. They identified my property boundaries within hours using digital equipment." },
                            { name: "Mohammed Hanif", role: "Civil Engineer", text: "Land World Digital Survey is my go-to choice for site layouts. Their RTK data is always precise and easy to work with." },
                            { name: "Anjali Menon", role: "Developer", text: "Reliable and fast. They finished our 10-acre estate survey in record time with very detailed reports." }
                        ].map((rev, i) => (
                            <div key={i} className="testimonial-card animate" style={{ animationDelay: `${i * 0.1}s` }}>
                                <div className="stars">★★★★★</div>
                                <p className="rev-text">"{rev.text}"</p>
                                <div className="rev-author">
                                    <strong>{rev.name}</strong>
                                    <span>{rev.role}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Home Contact Form */}
            <section className="section bg-accent home-contact">
                <div className="container grid grid-2">
                    <div className="contact-text animate">
                        <h2>Quick Inquiry</h2>
                        <p>Need a quick quote or have a question? Leave your details and we'll get back to you within 24 hours.</p>
                        <div className="contact-meta">
                            <p><PhoneCall size={18} /> <strong>8848969743</strong></p>
                            <p><ShieldCheck size={18} /> Certified Professional Surveyors</p>
                        </div>
                    </div>
                    <div className="contact-form-box animate">
                        <form className="simple-form">
                            <input type="text" placeholder="Your Name" required />
                            <input type="tel" placeholder="Phone Number" required />
                            <select required>
                                <option value="">Select Service</option>
                                <option>RTK Digital Survey</option>
                                <option>Boundary Survey</option>
                                <option>Land Measurement</option>
                            </select>
                            <textarea placeholder="Briefly describe your requirements" rows={3}></textarea>
                            <button type="submit" className="btn btn-primary w-full">Request Quote</button>
                        </form>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="map-section">
                <div className="section-title">
                    <h2>Find Us in Kasaragod</h2>
                    <p>Souparnika Complex, Kuttikol, Kasaragod, Kerala</p>
                </div>
                <div className="map-container">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15582.5!2d75.1!3d12.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba470!2sSouparnika%20Complex%2C%20Kuttikol!5e0!3m2!1sen!2sin!4v1700000000000"
                        width="100%"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen={true}
                        loading="lazy"
                        title="Land World Digital Survey Location"
                    ></iframe>
                </div>
            </section>
        </div>
    );
};

export default Home;
