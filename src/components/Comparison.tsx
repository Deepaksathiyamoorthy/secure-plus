import React from 'react';
import './Comparison.scss';

const Comparison: React.FC = () => {
    const othersPoints = [
        'Rigid, limited options',
        'Hidden or complex charges',
        'Slow and lengthy processes',
        'Little to no personalized advice'
    ];

    const securePlusPoints = [
        'Flexible plans for security and growth.',
        'Clear and transparent pricing',
        'Faster claims and support',
        'Expert investment guidance',
        'Better value for money'
    ];

    return (
        <section className="comparison-section">
            <div className="container">
                <div className="comparison-header fade-in-section">
                    <span className="badge">Comparison</span>
                    <h2 className="headline">Why SecurePlus Stands Out</h2>
                    <p className="subhead">
                        A smarter choice compared to traditional insurance<br />
                        and investment providers.
                    </p>
                </div>

                <div className="comparison-grid">
                    {/* Others Card */}
                    <div className="card others fade-in-section">
                        <h3>Others</h3>
                        <ul>
                            {othersPoints.map((point, index) => (
                                <li key={index}>
                                    <div className="icon-box">
                                        <span className="icon">✕</span>
                                    </div>
                                    <span>{point}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* VS Badge */}
                    <div className="vs-badge fade-in-section">
                        <span>V/S</span>
                    </div>

                    {/* Secure Plus Card */}
                    <div className="card secure-plus fade-in-section">
                        <div className="card-header">
                            <div className="checkbox-icon"></div>
                            <h3>Secure Plus</h3>
                        </div>
                        <ul>
                            {securePlusPoints.map((point, index) => (
                                <li key={index}>
                                    <div className="icon-box">
                                        <span className="icon">✓</span>
                                    </div>
                                    <span>{point}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Comparison;
