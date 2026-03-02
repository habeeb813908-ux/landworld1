import React from 'react';
import { MessageCircle } from 'lucide-react';
import './WhatsAppButton.css';

const WhatsAppButton: React.FC = () => {
    const whatsappNumber = '8848969743';
    const whatsappUrl = `https://wa.me/${whatsappNumber}`;

    return (
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="whatsapp-button" aria-label="Chat on WhatsApp">
            <MessageCircle size={32} strokeWidth={2.5} />
            <span className="tooltip">Need help? Chat with us!</span>
        </a>
    );
};

export default WhatsAppButton;
