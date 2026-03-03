import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import './Contact.css';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        service: 'RTK Digital Survey',
        message: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate form submission
        alert('Thank you for your inquiry! Our team will contact you shortly.');
        setFormData({ name: '', phone: '', email: '', service: 'RTK Digital Survey', message: '' });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="contact-page">
            <Helmet>
                <title>Contact Us | Land World Digital Survey Kasaragod</title>
                <meta name="description" content="Get in touch with Land World Digital Survey. Phone: +91 884 896 9743. Located at Souparnika Complex, Kuttikol, Kasaragod. Book your land survey today." />
            </Helmet>

            <section className="page-header">
                <div className="container">
                    <h1>Contact Us</h1>
                    <p>Get a Professional Quote for Your Survey Project</p>
                </div>
            </section>

            <section className="section contact-main">
                <div className="container grid grid-2">
                    <div className="contact-info animate">
                        <h2>Get in <span className="highlight">Touch</span></h2>
                        <p>Our team of professional surveyors is ready to assist you with any land measurement needs. Contact us directly or use the form to request a quote.</p>

                        <div className="info-cards">
                            <a href="tel:+918848969743" className="info-card animate">
                                <div className="icon-circle"><Phone /></div>
                                <div className="info-content">
                                    <h4>Call Us</h4>
                                    <p>+91 884 896 9743, 9072241523</p>
                                </div>
                            </a>
                            <a href="mailto:landworlddigitalsurvey@gmail.com" className="info-card animate">
                                <div className="icon-circle"><Mail /></div>
                                <div className="info-content">
                                    <h4>Email Us</h4>
                                    <p>landworlddigitalsurvey@gmail.com</p>
                                </div>
                            </a>
                            <a href="https://maps.app.goo.gl/gmPrGLVJfjUk1CYt8" target="_blank" rel="noopener noreferrer" className="info-card animate">
                                <div className="icon-circle"><MapPin /></div>
                                <div className="info-content">
                                    <h4>Visit Us</h4>
                                    <p>Souparnika Complex, Kuttikol, Kasaragod, Kerala, India 671541</p>
                                </div>
                            </a>
                        </div>

                        <div className="whatsapp-box animate">
                            <h3>Quick Chat?</h3>
                            <p>Message us directly on WhatsApp for instant responses.</p>
                            <a href="https://wa.me/918848969743" target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
                                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" style={{ marginRight: '8px' }}>
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.438 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                </svg>
                                Chat on WhatsApp
                            </a>
                        </div>
                    </div>

                    <div className="contact-form-container animate">
                        <form onSubmit={handleSubmit} className="contact-form">
                            <h3>Send a Message</h3>
                            <div className="form-group">
                                <label htmlFor="name">Full Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    placeholder="Your Name"
                                />
                            </div>
                            <div className="grid grid-2 form-row">
                                <div className="form-group">
                                    <label htmlFor="phone">Phone Number</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                        placeholder="Mobile Number"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email (Optional)</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Your Email"
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="service">Service Required</label>
                                <select id="service" name="service" value={formData.service} onChange={handleChange}>
                                    <option>RTK Digital Survey</option>
                                    <option>Boundary Survey</option>
                                    <option>Land Measurement</option>
                                    <option>Site Layout Marking</option>
                                    <option>Property Demarcation</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Project Details</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    placeholder="Describe your survey requirements..."
                                ></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary w-full">
                                <Send size={18} /> Submit Inquiry
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            <section className="map-full">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3895.597809400877!2d75.2103236!3d12.476483199999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba489b90920a5fb%3A0x7e08943ca7f2e238!2sDTDC%20Courier%20Kuttikol%2C%20Kasaragod!5e0!3m2!1sen!2sin!4v1772506201450!5m2!1sen!2sin"
                    width="100%"
                    height="500"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    title="Land World Digital Survey Headquarters"
                ></iframe>
            </section>

            {/* Schema Markup for Local Business */}
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "LocalBusiness",
                    "name": "Land World Digital Survey",
                    "image": "https://landworlddigitalsurvey.com/logo.png",
                    "address": {
                        "@type": "PostalAddress",
                        "streetAddress": "Souparnika Complex, Kuttikol",
                        "addressLocality": "Kasaragod",
                        "addressRegion": "Kerala",
                        "postalCode": "671541",
                        "addressCountry": "IN"
                    },
                    "geo": {
                        "@type": "GeoCoordinates",
                        "latitude": 12.476483,
                        "longitude": 75.210323
                    },
                    "url": "https://landworlddigitalsurvey.com",
                    "telephone": "+91 884 896 9743",
                    "openingHoursSpecification": [
                        {
                            "@type": "OpeningHoursSpecification",
                            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                            "opens": "09:00",
                            "closes": "18:00"
                        }
                    ]
                })}
            </script>
        </div>
    );
};

export default Contact;
