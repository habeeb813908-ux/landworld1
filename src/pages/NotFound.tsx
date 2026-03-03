import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Home, Search } from 'lucide-react';
import './NotFound.css';

const NotFound: React.FC = () => {
    return (
        <div className="not-found-page">
            <Helmet>
                <title>404 - Page Not Found | Land World Digital Survey</title>
                <meta name="robots" content="noindex" />
            </Helmet>
            <div className="container">
                <div className="not-found-content">
                    <Search size={64} className="icon-404" />
                    <h1>404</h1>
                    <h2>Oops! Page Not Found</h2>
                    <p>The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
                    <Link to="/" className="btn btn-primary">
                        <Home size={18} /> Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default NotFound;
