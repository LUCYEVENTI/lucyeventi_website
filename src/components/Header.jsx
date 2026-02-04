import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import Button from './ui/Button';

import './Header.css';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Tecnologia', href: '#tech' },
        { name: 'App', href: '#product-start' },
        { name: 'Visione', href: '#company' },
    ];

    const scrollToSection = (e, href) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            const offset = 80; // Header height
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
        setIsMobileMenuOpen(false);
    };

    return (
        <header className={`main-header ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container header-container">
                {/* Logo */}
                <div className="header-logo" onClick={(e) => scrollToSection(e, '#hero-start')}>
                    <div className="logo-box">
                        <img src="assets/favicon.png" alt="LUCY Logo" style={{ width: '24px', height: '24px' }} />
                    </div>
                    <span className="logo-text">lucyeventi<span>.</span></span>
                </div>

                {/* Desktop Nav */}
                <nav className="desktop-nav">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={(e) => scrollToSection(e, link.href)}
                            className="nav-link"
                        >
                            {link.name}
                        </a>
                    ))}
                </nav>

                {/* Desktop Actions */}
                <div className="header-actions">
                    <Button
                        variant="primary"
                        size="sm"
                        disabled={true}
                        icon={ArrowRight}
                    >
                        Download App
                    </Button>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="mobile-toggle"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="mobile-menu"
                    >
                        <nav className="mobile-nav">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) => scrollToSection(e, link.href)}
                                    className="nav-link"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <div className="mobile-actions">
                                <Button
                                    variant="primary"
                                    className="w-full justify-center"
                                    disabled={true}
                                    icon={ArrowRight}
                                >
                                    Download App
                                </Button>
                            </div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;
