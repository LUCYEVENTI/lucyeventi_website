import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import Button from './ui/Button';

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
        { name: 'Vision', href: '#traction' },
        { name: 'Company', href: '#company' },
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
        <header
            className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${isScrolled ? 'py-4 bg-black/60 backdrop-blur-lg border-b border-white/10' : 'py-6 bg-transparent'
                }`}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center gap-2 cursor-pointer" onClick={(e) => scrollToSection(e, '#hero-start')}>
                    <div className="w-10 h-10 bg-gradient-to-br from-accent-primary to-accent-secondary rounded-xl flex items-center justify-center shadow-lg shadow-accent-primary/20">
                        <span className="text-white font-bold text-xl">L</span>
                    </div>
                    <span className="text-white font-bold text-xl tracking-tight">LUCY<span className="text-accent-primary">.</span></span>
                </div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={(e) => scrollToSection(e, link.href)}
                            className="text-white/70 hover:text-white text-sm font-medium transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                </nav>

                {/* Desktop Actions */}
                <div className="hidden md:flex items-center gap-4">
                    <Button
                        variant="primary"
                        size="sm"
                        icon={ArrowRight}
                        onClick={(e) => scrollToSection(e, '#contact')}
                    >
                        Investitori
                    </Button>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-white p-2"
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
                        className="absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-b border-white/10 py-8 px-6 md:hidden"
                    >
                        <nav className="flex flex-col gap-6">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) => scrollToSection(e, link.href)}
                                    className="text-white/80 hover:text-white text-lg font-medium"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <div className="pt-4 border-t border-white/10">
                                <Button
                                    variant="primary"
                                    className="w-full justify-center"
                                    icon={ArrowRight}
                                    onClick={(e) => scrollToSection(e, '#contact')}
                                >
                                    Investor Relations
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
