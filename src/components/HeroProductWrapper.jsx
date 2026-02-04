import React, { useState, useRef } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import Button from './ui/Button';
import { ArrowRight } from 'lucide-react';
import PhoneMockup from './PhoneMockup';
import './Hero.css';
import './ProductShowcase.css';
import './HeroProductWrapper.css';

const HeroProductWrapper = () => {
    const [phoneState, setPhoneState] = useState('hero');
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Detect when to flip the phone
    // We want to flip when the "Product" section starts coming into view in the left column
    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        if (latest > 0.35) { // Threshold for flipping
            setPhoneState('app');
        } else {
            setPhoneState('hero');
        }
    });

    return (
        <section ref={containerRef} className="unified-wrapper" style={{ position: 'relative' }}>
            {/* Background elements moved here to span both */}
            <div className="hero-bg fixed-bg">
                <div className="gradient-sphere sphere-1"></div>
                <div className="gradient-sphere sphere-2"></div>
            </div>

            <div className="container min-h-[180vh]"> {/* Tall container to allow for scrolling while sticky */}
                <div className="unified-grid h-full">
                    {/* Left Column: Scrollable Content */}
                    <div className="content-column">

                        {/* HERO SECTION CONTENT */}
                        <div id="hero-start" className="hero-block">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                                viewport={{ once: true }}
                            >
                                <header className="hero-header">
                                    <h1 className="hero-title">
                                        <span className="hero-title-line">Artificial Intelligence for</span>
                                        <span className="hero-title-line">
                                            <span className="video-text-mask-container">
                                                <video autoPlay loop muted playsInline className="text-video-bg" aria-hidden="true">
                                                    <source src="assets/club-video3.mp4" type="video/mp4" />
                                                </video>
                                                <span className="video-purple-overlay" aria-hidden="true"></span>
                                                <span className="video-text-layer">Human Connection.</span>
                                            </span>
                                        </span>
                                    </h1>

                                    <p className="hero-subtitle">
                                        Costruiamo l'infrastruttura neurale che alimenta la prossima generazione di esperienze sociali.
                                        Tecnologia predittiva, scalabile, umana.
                                    </p>

                                    <div className="hero-actions">
                                        <Button variant="primary" icon={ArrowRight} onClick={() => document.getElementById('product-start').scrollIntoView({ behavior: 'smooth' })}>
                                            Esplora la Tecnologia
                                        </Button>
                                        <Button variant="secondary" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
                                            Investor Relations
                                        </Button>
                                    </div>
                                </header>
                            </motion.div>
                        </div>

                        {/* MOBILE ONLY PHONE: Inserted here to appear between Hero and Product on mobile */}
                        <div className="mobile-phone-container">
                            <PhoneMockup state={phoneState} />
                        </div>

                        {/* PRODUCT SHOWCASE CONTENT */}
                        <div id="product-start" className="product-block pb-32">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6 }}
                            >
                                <h2 className="section-title text-5xl">L'Interfaccia Utente: <br /><span className="text-gradient">LUCY App.</span></h2>
                                <p className="section-desc text-xl">
                                    Il nostro primo touchpoint di mercato. Un ecosistema mobile che dimostra la potenza dei nostri
                                    algoritmi di <strong>matching comportamentale</strong> in tempo reale.
                                </p>

                                <ul className="feature-list mt-12 space-y-6">
                                    <motion.li className="feature-item flex items-center gap-6 p-6 rounded-2xl bg-white/5 border border-white/10" whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -20 }} transition={{ delay: 0.1 }}>
                                        <div className="feature-icon-wrapper w-16 h-16 flex-shrink-0">
                                            <img src="assets/icon-smart-match.png" alt="Smart Match" className="w-full h-full object-contain" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-white">Neural Matching Core</h3>
                                            <p className="text-white/60">Analisi multi-vettoriale delle preferenze per connessioni ad alta precisione.</p>
                                        </div>
                                    </motion.li>
                                    <motion.li className="feature-item flex items-center gap-6 p-6 rounded-2xl bg-white/5 border border-white/10" whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -20 }} transition={{ delay: 0.2 }}>
                                        <div className="feature-icon-wrapper w-16 h-16 flex-shrink-0">
                                            <img src="assets/icon-security.png" alt="Security" className="w-full h-full object-contain" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-white">Verified Trust Protocol</h3>
                                            <p className="text-white/60">Sistema di sicurezza decentralizzato basato su feedback verificati e identità reale.</p>
                                        </div>
                                    </motion.li>
                                    <motion.li className="feature-item flex items-center gap-6 p-6 rounded-2xl bg-white/5 border border-white/10" whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -20 }} transition={{ delay: 0.3 }}>
                                        <div className="feature-icon-wrapper w-16 h-16 flex-shrink-0">
                                            <img src="assets/icon-business.png" alt="Business" className="w-full h-full object-contain" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-white">Enterprise Analytics</h3>
                                            <p className="text-white/60">Business Intelligence granulare e strumenti CRM per gli stakeholder del settore.</p>
                                        </div>
                                    </motion.li>
                                </ul>
                            </motion.div>
                        </div>

                    </div>

                    {/* Right Column: Sticky Phone */}
                    <div className="sticky-column">
                        <div className="sticky-wrapper">
                            <PhoneMockup state={phoneState} />
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default HeroProductWrapper;
