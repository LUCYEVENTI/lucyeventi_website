import React from 'react';
import { motion } from 'framer-motion';
import Button from './ui/Button';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
    return (
        <section className="hero-section">
            <div className="hero-bg">
                <div className="gradient-sphere sphere-1"></div>
                <div className="gradient-sphere sphere-2"></div>
            </div>

            <div className="container hero-content">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="badge-wrapper">
                        <span className="badge">
                            <Sparkles size={14} />
                            AI-Powered Nightlife
                        </span>
                    </div>

                    <h1 className="hero-title">
                        Artificial Intelligence for <br />
                        <span className="text-gradient">Real Experiences.</span>
                    </h1>

                    <p className="hero-subtitle">
                        LucyEventi ridefinisce l'intrattenimento unendo ecosistemi digitali intelligenti
                        e design premium per creare connessioni reali.
                    </p>

                    <div className="hero-actions">
                        <Button variant="primary" icon={ArrowRight} onClick={() => document.getElementById('product').scrollIntoView({ behavior: 'smooth' })}>
                            Scopri il Prodotto
                        </Button>
                        <Button variant="secondary" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
                            Area Investitori
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
