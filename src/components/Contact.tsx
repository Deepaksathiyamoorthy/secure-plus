import React from 'react';
import './Contact.scss';

const Contact: React.FC = () => {
    return (
        <section className="contact-section" id="contact">
            <div className="container">
                <div className="contact-card">
                    <div className="contact-info fade-in-section">
                        <span className="badge">Contact Us</span>
                        <h2 className="headline">We'd Love to Hear From You</h2>
                        <p className="subtext">
                            We're here to help you with Insurance and investment solutions.
                        </p>

                        <div className="contact-details">
                            <div className="detail-item">
                                <span className="icon">✉️</span>
                                <span>secureplusbusiness@gmail.com</span>
                            </div>
                            <div className="detail-item">
                                <span className="icon">📞</span>
                                <span>+91 87878 87878</span>
                            </div>
                        </div>
                    </div>

                    <div className="contact-form fade-in-section">
                        <div className="form-group">
                            <label>Enter your full name</label>
                            <input type="text" placeholder="Ramesh" />
                        </div>
                        <div className="form-group">
                            <label>Enter a valid email</label>
                            <input type="email" placeholder="rameshkanaga@gmail.com" />
                        </div>
                        <div className="form-group">
                            <label>Share any specific requirements</label>
                            <textarea placeholder="Message here.."></textarea>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
