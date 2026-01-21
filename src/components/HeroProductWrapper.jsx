import React, { useState, useRef } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import Button from './ui/Button';
import { ArrowRight, Sparkles } from 'lucide-react';
import PhoneMockup from './PhoneMockup';
import './Hero.css';
import './ProductShowcase.css';

const HeroProductWrapper = () => {
    const [phoneState, setPhoneState] = useState('hero');
    const containerRef = useRef(null);
    const productRef = useRef(null);

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

            <div className="container unified-grid">
                {/* Left Column: Scrollable Content */}
                <div className="content-column">

                    {/* HERO SECTION CONTENT */}
                    <div id="hero-start" className="hero-block" style={{ minHeight: '90vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', scrollSnapAlign: 'start' }}>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <h1 className="hero-title" style={{ textAlign: 'left' }}>
                                Artificial Intelligence for <br />
                                <span className="text-gradient">Real Experiences.</span>
                            </h1>

                            <p className="hero-subtitle" style={{ textAlign: 'left', marginLeft: 0 }}>
                                LucyEventi ridefinisce l'intrattenimento unendo ecosistemi digitali intelligenti
                                e design premium per creare connessioni reali.
                            </p>

                            <div className="hero-actions" style={{ justifyContent: 'flex-start' }}>
                                <Button variant="primary" icon={ArrowRight} onClick={() => document.getElementById('product-start').scrollIntoView({ behavior: 'smooth' })}>
                                    Scopri il Prodotto
                                </Button>
                                <Button variant="secondary" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
                                    Contattaci
                                </Button>
                            </div>
                        </motion.div>
                    </div>

                    {/* PRODUCT SHOWCASE CONTENT */}
                    <div id="product-start" ref={productRef} className="product-block" style={{ minHeight: '100vh', paddingTop: '10vh', scrollSnapAlign: 'start' }}>
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="section-title" style={{ textAlign: 'left' }}>Non solo un'app. <br /><span className="text-gradient">Un ecosistema.</span></h2>
                            <p className="section-desc" style={{ textAlign: 'left', marginLeft: 0 }}>
                                Eventi Hub non è la solita lista di serate. È un <strong>Concierge AI Personale</strong>
                                &nbsp;che apprende dai tuoi gusti, connette le persone e offre strumenti potenti ai gestori.
                            </p>

                            <ul className="feature-list">
                                <motion.li className="feature-item" whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -20 }} transition={{ delay: 0.1 }}>
                                    <div className="feature-icon-wrapper">
                                        <img src="/assets/icon-smart-match.png" alt="Smart Match" className="feature-icon-img" />
                                    </div>
                                    <div>
                                        <h3>Smart Matching</h3>
                                        <p>Algoritmi proprietari che ti mostrano solo eventi affini al tuo vibe.</p>
                                    </div>
                                </motion.li>
                                <motion.li className="feature-item" whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -20 }} transition={{ delay: 0.2 }}>
                                    <div className="feature-icon-wrapper">
                                        <img src="/assets/icon-security.png" alt="Security" className="feature-icon-img" />
                                    </div>
                                    <div>
                                        <h3>Community Sicura</h3>
                                        <p>Interazioni real-time verificate e sistema di feedback garantito.</p>
                                    </div>
                                </motion.li>
                                <motion.li className="feature-item" whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -20 }} transition={{ delay: 0.3 }}>
                                    <div className="feature-icon-wrapper">
                                        <img src="/assets/icon-business.png" alt="Business" className="feature-icon-img" />
                                    </div>
                                    <div>
                                        <h3>Business Tools</h3>
                                        <p>Dashboard analitiche avanzate e CRM integrato per gli organizzatori.</p>
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

            {/* CSS for Unified Layout */}
            <style jsx>{`
                .unified-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr; /* 50% 50% split */
                    gap: 4rem;
                    position: relative;
                }
                
                .sticky-column {
                    position: relative;
                }

                .sticky-wrapper {
                    position: sticky;
                    top: 50%;
                    transform: translateY(-50%);
                    height: auto;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                @media (max-width: 960px) {
                    .unified-grid {
                        grid-template-columns: 1fr;
                    }
                    .sticky-wrapper {
                        position: relative;
                        top: 0;
                        transform: none;
                        margin: 4rem 0;
                    }
                    .hero-block {
                        min-height: auto !important;
                        padding-top: 100px;
                        padding-bottom: 4rem;
                        text-align: center;
                        align-items: center !important;
                    }
                    .product-block {
                        min-height: auto !important;
                        padding-top: 4rem;
                    }
                    .hero-content, .hero-title, .hero-subtitle, .section-title, .section-desc {
                        text-align: center !important;
                        margin-left: auto !important;
                        margin-right: auto !important;
                    }
                    .badge-wrapper, .hero-actions {
                        justify-content: center !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default HeroProductWrapper;
