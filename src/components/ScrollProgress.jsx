import React, { useState, useEffect } from 'react';
import './ScrollProgress.css';

const sections = [
    { id: 'hero-start', label: 'Inizio' },
    { id: 'product-start', label: 'App' },
    { id: 'tech', label: 'Ecosistema' },
    { id: 'traction', label: 'Dati' },
    { id: 'company', label: 'Visione' },
    { id: 'contact', label: 'Contattaci' }
];

const ScrollProgress = () => {
    const [activeSection, setActiveSection] = useState('hero');

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                threshold: 0.5 // Trigger when 50% visible
            }
        );

        sections.forEach(({ id }) => {
            const element = document.getElementById(id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className="scroll-progress-container">
            <div className="scroll-line"></div>
            {sections.map(({ id, label }) => (
                <div
                    key={id}
                    className={`scroll-item ${activeSection === id ? 'active' : ''}`}
                    onClick={() => scrollToSection(id)}
                >
                    <span className="scroll-label">{label}</span>
                    <div className="scroll-dot" />
                </div>
            ))}
        </nav>
    );
};

export default ScrollProgress;
