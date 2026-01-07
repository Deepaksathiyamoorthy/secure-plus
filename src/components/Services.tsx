import React, { useState, useEffect } from 'react';
import './Services.scss';

const Services: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'insurance' | 'investment'>('insurance');

    useEffect(() => {
        const handleHashChange = () => {
            const hash = window.location.hash;
            if (hash === '#insurance') {
                setActiveTab('insurance');
                const element = document.getElementById('services');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
            } else if (hash === '#investment') {
                setActiveTab('investment');
                const element = document.getElementById('services');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
            }
        };

        // Handle initial load
        handleHashChange();

        // Handle subsequent changes
        window.addEventListener('hashchange', handleHashChange);
        return () => window.removeEventListener('hashchange', handleHashChange);
    }, []);

    const insuranceServices = [
        {
            icon: '👤', // Placeholder for user icon
            title: 'Life Insurance',
            description: 'Reliable financial protection for your family’s future security.'
        },
        {
            icon: '💓', // Placeholder for health/heart icon
            title: 'Health Insurance',
            description: 'Comprehensive medical coverage for your health and wellbeing.'
        },
        {
            icon: '🚗', // Placeholder for vehicle icon
            title: 'Vehicle Insurance',
            description: 'Trusted coverage to protect your car or bike from unexpected damages.'
        },
        {
            icon: '🏠', // Placeholder for home icon
            title: 'Home Insurance',
            description: 'Solid protection to keep your home and belongings secure.'
        },
        {
            icon: '✈️', // Placeholder for travel icon
            title: 'Travel Insurance',
            description: 'Safe and worry-free journeys with complete travel coverage.'
        },
        {
            icon: '💰', // Placeholder for term icon
            title: 'Term Insurance',
            description: 'Affordable pure protection for your loved ones’ financial safety.'
        }
    ];

    const investmentServices = [
        {
            icon: '📊', // SIP
            title: 'SIP Investment Plan',
            description: 'Grow your wealth gradually with small monthly investments.'
        },
        {
            icon: '👴', // Retirement
            title: 'Retirement Investment Plan',
            description: 'Build a steady financial foundation for your post-retirement life.'
        },
        {
            icon: '🚀', // Wealth Growth
            title: 'Wealth Growth Plan',
            description: 'Accelerate your financial goals with high-return investment options.'
        },
        {
            icon: '👛', // Tax Saving
            title: 'Tax Saving Investment',
            description: 'Reduce your tax burden while building long-term savings efficiently.'
        },
        {
            icon: '📄', // Fixed Income
            title: 'Fixed Income Plan',
            description: 'Earn stable, predictable returns with low-risk investment choices.'
        },
        {
            icon: '🎓', // Child Education
            title: 'Child Education Plan',
            description: 'Invest early to secure your child’s academic future with confidence.'
        }
    ];

    const displayServices = activeTab === 'insurance' ? insuranceServices : investmentServices;

    return (
        <section className="services-section" id="services">
            <div className="container">
                <div className="services-header fade-in-section">
                    <span className="badge">Our Services</span>
                    <h2 className="headline">Insurance & Investment Services</h2>
                    <p className="subhead">
                        Comprehensive insurance and smart investment<br />
                        solutions to secure your future.
                    </p>
                </div>

                <div className="toggle-container fade-in-section">
                    <div className="toggle-switch">
                        <button
                            className={`toggle-btn ${activeTab === 'insurance' ? 'active' : ''}`}
                            onClick={() => setActiveTab('insurance')}
                        >
                            Insurance Plans
                        </button>
                        <button
                            className={`toggle-btn ${activeTab === 'investment' ? 'active' : ''}`}
                            onClick={() => setActiveTab('investment')}
                        >
                            Investment Plans
                        </button>
                    </div>
                </div>

                <div className="services-grid">
                    {displayServices.map((service, index) => (
                        <div className="service-card fade-in-section" key={index}>
                            <div className="icon-wrapper">
                                <span className="icon">{service.icon}</span>
                            </div>
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
