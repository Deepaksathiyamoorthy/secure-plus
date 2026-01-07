import React from 'react';
import './About.scss';
import familySelfie from '../assets/2151902705-1-3.jpeg';

const About: React.FC = () => {
    return (
        <section className="about-section" id="about">
            <div className="container">
                <div className="about-header fade-in-section">
                    <div className="text-left">
                        <span className="badge">About Us</span>
                        <h2 className="headline">Protecting What<br /> Matters Most</h2>
                    </div>
                    <div className="text-right">
                        <p className="description">
                            We deliver Insurance plans designed around your family, your future, and your dreams.
                        </p>
                    </div>
                </div>

                <div className="stats-grid">
                    <div className="stat-card fade-in-section">
                        <h3>10+</h3>
                        <p className="stat-title">Years Experience</p>
                        <p className="stat-desc">Your trusted partner for Protection and Financial growth Your trusted.</p>
                    </div>
                    <div className="stat-card fade-in-section">
                        <h3>200+</h3>
                        <p className="stat-title">Client Secured</p>
                        <p className="stat-desc">Your trusted partner for Protection and Financial growth Your trusted.</p>
                    </div>
                    <div className="stat-card fade-in-section">
                        <h3>20+</h3>
                        <p className="stat-title">Client Secured</p>
                        <p className="stat-desc">Your trusted partner for Protection and Financial growth Your trusted.</p>
                    </div>
                </div>

                <div className="main-image-wrapper fade-in-section">
                    <img src={familySelfie} alt="Happy family selfie" className="main-image" />
                </div>
            </div>
        </section>
    );
};

export default About;
