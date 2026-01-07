import React from 'react';
import './Footer.scss';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-top">
                    <div className="footer-brand fade-in-section">
                        <div className="logo">
                            <span className="logo-icon">🍀</span>
                            <span className="logo-text">SecurePlus</span>
                        </div>
                        <p className="vision-text">
                            Empowering families to build a secure and prosperous future through expert financial planning.
                        </p>
                    </div>

                    <div className="footer-links">
                        <div className="link-column fade-in-section">
                            <h4>Company</h4>
                            <ul>
                                <li><a href="#about">About Us</a></li>
                                <li><a href="#plans">Insurance Plans</a></li>
                                <li><a href="#testimonials">Testimonials</a></li>
                                <li><a href="#contact">Contact Us</a></li>
                            </ul>
                        </div>
                        <div className="link-column fade-in-section">
                            <h4>Insurance Plans</h4>
                            <ul>
                                <li><a href="#life">Life Insurance</a></li>
                                <li><a href="#health">Health Insurance</a></li>
                                <li><a href="#vehicle">Vehicle Insurance</a></li>
                                <li><a href="#business">Business Insurance</a></li>
                                <li><a href="#property">Property Insurance</a></li>
                                <li><a href="#travel">Travel Insurance</a></li>
                            </ul>
                        </div>
                        <div className="link-column fade-in-section">
                            <h4>Investment Plans</h4>
                            <ul>
                                <li><a href="#sip">SIP Investment Plan</a></li>
                                <li><a href="#retirement">Retirement Plan</a></li>
                                <li><a href="#wealth">Wealth Growth Plan</a></li>
                                <li><a href="#tax">Tax Saving Investment</a></li>
                                <li><a href="#fixed">Fixed Income Plan</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom fade-in-section">
                    <p>&copy; 2026 SecurePlus. All rights reserved.</p>
                    <div className="social-links">
                        <a href="#twitter" aria-label="Twitter">𝕏</a>
                        <a href="#linkedin" aria-label="LinkedIn">in</a>
                        <a href="#instagram" aria-label="Instagram">📸</a>
                        <a href="#facebook" aria-label="Facebook">f</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
