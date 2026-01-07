import React from 'react';
import './Testimonials.scss';
import avatar1 from '../assets/ellipse-14.png';
import avatar2 from '../assets/ellipse-14-2.png';
import avatar3 from '../assets/ellipse-14-3.png';

const Testimonials: React.FC = () => {
    const testimonials = [
        {
            id: 1,
            name: 'Sarah Johnson',
            role: 'Business Owner',
            image: avatar1,
            quote: 'SecurePlus healed my financial anxiety. Their strategic planning is unmatched.',
            rating: 5
        },
        {
            id: 2,
            name: 'Michael Chen',
            role: 'Software Engineer',
            image: avatar2,
            quote: 'The family protection plans gave me peace of mind I didn’t know I needed.',
            rating: 5
        },
        {
            id: 3,
            name: 'Emily Davis',
            role: 'Marketing Director',
            image: avatar3,
            quote: 'Professional, trustworthy, and incredibly knowledgeable. Highly recommended!',
            rating: 5
        }
    ];

    return (
        <section className="testimonials-section" id="testimonials">
            <div className="container">
                <div className="header fade-in-section">
                    <span className="badge">Success Stories</span>
                    <h2 className="headline">Trusted by Thousands<br />of Happy Clients</h2>
                </div>

                <div className="testimonials-scroller">
                    <div className="testimonial-track">
                        {[...testimonials, ...testimonials, ...testimonials].map((testimonial, index) => (
                            <div className="testimonial-card fade-in-section" key={`${testimonial.id}-${index}`}>
                                <div className="rating">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <span key={i} className="star">★</span>
                                    ))}
                                </div>
                                <p className="quote">"{testimonial.quote}"</p>
                                <div className="author">
                                    <img src={testimonial.image} alt={testimonial.name} className="avatar" />
                                    <div className="info">
                                        <h4>{testimonial.name}</h4>
                                        <p>{testimonial.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
