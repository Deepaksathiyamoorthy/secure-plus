import React from 'react';
import './Hero.scss';
import family1 from '../assets/2151902705-1.jpeg';
import family2 from '../assets/2151902705-1-2.png';
import shieldIcon from '../assets/group-21.png';

const Hero: React.FC = () => {
    return (
        <section className="hero">
            <div className="hero-content">
                <div className="status-badge fade-in-section">
                    <div className="icon-wrapper">
                        <img src={shieldIcon} alt="Security Shield" className="shield-icon" />
                    </div>
                </div>

                <h1 className="headline fade-in-section">
                    Secure Your Life,<br /> Build Your Wealth
                </h1>

                <p className="subtext fade-in-section">
                    Comprehensive insurance and financial planning tailored to your future.
                    Expert advice to help you grow and protect your assets.
                </p>

                <div className="cta-buttons fade-in-section">
                    <button className="btn-primary">Book a free call</button>
                    <button className="btn-secondary">View services</button>
                </div>
            </div>

            <div className="hero-images fade-in-section">
                <div className="image-card">
                    <img src={family1} alt="Happy family" />
                </div>
                <div className="image-card">
                    <img src={family2} alt="Secure future" />
                </div>
            </div>

            <div className="hero-blur hero-blur-1"></div>
            <div className="hero-blur hero-blur-2"></div>
        </section>
    );
};

export default Hero;
