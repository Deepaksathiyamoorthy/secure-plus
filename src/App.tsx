import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Comparison from './components/Comparison';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.scss';

function App() {
    React.useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                } else {
                    entry.target.classList.remove('is-visible');
                }
            });
        }, observerOptions);

        const elements = document.querySelectorAll('.fade-in-section');
        elements.forEach(el => observer.observe(el));

        return () => observer.disconnect();
    });

    return (
        <div className="app">
            <Navbar />
            <Hero />
            <About />
            <Services />
            <Comparison />
            <Testimonials />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
