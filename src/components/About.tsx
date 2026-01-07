import React, { useEffect, useState, useRef } from 'react';
import './About.scss';
import familySelfie from '../assets/2151902705-1-3.jpeg';

const AnimatedCounter = ({ end, duration = 2000 }: { end: number, duration?: number }) => {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLSpanElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isVisible) return;

        let startTime: number | null = null;
        const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const progress = currentTime - startTime;
            const percentage = Math.min(progress / duration, 1);
            
            // Easing function for smooth animation
            const easeOutQuad = (t: number) => t * (2 - t);
            
            setCount(Math.floor(easeOutQuad(percentage) * end));

            if (progress < duration) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    }, [isVisible, end, duration]);

    return <span ref={ref}>{count}+</span>;
};

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
                        <h3><AnimatedCounter end={10} /></h3>
                        <p className="stat-title">Years Experience</p>
                        <p className="stat-desc">Your trusted partner for Protection and Financial growth Your trusted.</p>
                    </div>
                    <div className="stat-card fade-in-section">
                        <h3><AnimatedCounter end={200} /></h3>
                        <p className="stat-title">Client Secured</p>
                        <p className="stat-desc">Your trusted partner for Protection and Financial growth Your trusted.</p>
                    </div>
                    <div className="stat-card fade-in-section">
                        <h3><AnimatedCounter end={20} /></h3>
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
