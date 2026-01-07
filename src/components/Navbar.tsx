import React, { useState, useEffect } from 'react';
import './Navbar.scss';

const Navbar: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="navbar-container">
                <div className="logo fade-in-section">
                    <span className="logo-icon">🍀</span>
                    <span className="logo-text">SecurePlus</span>
                </div>

                <ul className="nav-links fade-in-section">
                    <li><a href="#home">Home</a></li>
                    <li className="dropdown">
                        <a href="#services">Services <span className="arrow">▼</span></a>
                        <ul className="dropdown-menu">
                            <li><a href="#insurance">Insurance Plans</a></li>
                            <li><a href="#investment">Investment Plans</a></li>
                        </ul>
                    </li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>

                <div className="nav-cta fade-in-section">
                    <button className="btn-nav">Get Started</button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
