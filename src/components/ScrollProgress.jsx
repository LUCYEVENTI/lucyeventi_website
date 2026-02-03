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
    const [activeSection, setActiveSection] = useState('hero-start');

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries.filter((entry) => entry.isIntersecting);
                if (visible.length === 0) return;

                const mostVisible = visible.reduce((maxEntry, entry) => {
                    if (!maxEntry) return entry;
                    return entry.intersectionRatio > maxEntry.intersectionRatio ? entry : maxEntry;
                }, null);

                if (mostVisible?.target?.id) {
                    setActiveSection(mostVisible.target.id);
                }
            },
            {
                threshold: [0.25, 0.5, 0.75]
            }
        );

        const observedElements = sections
            .map(({ id }) => document.getElementById(id))
            .filter(Boolean);

        observedElements.forEach((element) => observer.observe(element));

        return () => {
            observedElements.forEach((element) => observer.unobserve(element));
            observer.disconnect();
        };
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
