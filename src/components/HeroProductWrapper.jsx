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
                                <div className="video-text-mask-container" style={{ fontSize: '1.5em', lineHeight: '1.0', marginTop: '10px', display: 'block' }}>
                                    <video autoPlay loop muted playsInline className="text-video-bg">
                                        <source src="assets/club-video3.mp4" type="video/mp4" />
                                    </video>
                                    <div className="video-purple-overlay"></div>
                                    <span className="video-text-layer">Human Connection.</span>
                                </div>
                            </h1>

                            <p className="hero-subtitle" style={{ textAlign: 'left', marginLeft: 0 }}>
                                Costruiamo l'infrastruttura neurale che alimenta la prossima generazione di esperienze sociali.
                                Tecnologia predittiva, scalabile, umana.
                            </p>

                            <div className="hero-actions" style={{ justifyContent: 'flex-start' }}>
                                <Button variant="primary" icon={ArrowRight} onClick={() => document.getElementById('product-start').scrollIntoView({ behavior: 'smooth' })}>
                                    Esplora la Tecnologia
                                </Button>
                                <Button variant="secondary" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
                                    Investor Relations
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
                            <h2 className="section-title" style={{ textAlign: 'left' }}>L'Interfaccia Utente: <br /><span className="text-gradient">LUCY App.</span></h2>
                            <p className="section-desc" style={{ textAlign: 'left', marginLeft: 0 }}>
                                Il nostro primo touchpoint di mercato. Un ecosistema mobile che dimostra la potenza dei nostri
                                algoritmi di <strong>matching comportamentale</strong> in tempo reale.
                            </p>

                            <ul className="feature-list">
                                <motion.li className="feature-item" whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -20 }} transition={{ delay: 0.1 }}>
                                    <div className="feature-icon-wrapper">
                                        <img src="assets/icon-smart-match.png" alt="Smart Match" className="feature-icon-img" />
                                    </div>
                                    <div>
                                        <h3>Neural Matching Core</h3>
                                        <p>Analisi multi-vettoriale delle preferenze per connessioni ad alta precisione.</p>
                                    </div>
                                </motion.li>
                                <motion.li className="feature-item" whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -20 }} transition={{ delay: 0.2 }}>
                                    <div className="feature-icon-wrapper">
                                        <img src="assets/icon-security.png" alt="Security" className="feature-icon-img" />
                                    </div>
                                    <div>
                                        <h3>Verified Trust Protocol</h3>
                                        <p>Sistema di sicurezza decentralizzato basato su feedback verificati e identità reale.</p>
                                    </div>
                                </motion.li>
                                <motion.li className="feature-item" whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -20 }} transition={{ delay: 0.3 }}>
                                    <div className="feature-icon-wrapper">
                                        <img src="assets/icon-business.png" alt="Business" className="feature-icon-img" />
                                    </div>
                                    <div>
                                        <h3>Enterprise Analytics</h3>
                                        <p>Business Intelligence granulare e strumenti CRM per gli stakeholder del settore.</p>
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

                /* Video Text Mask Effect */
                .video-text-mask-container {
                    position: relative;
                    display: inline-block;
                    line-height: 0.85; 
                    font-weight: 900;
                    /* Reduced font size by 40% (was 2.5em) */
                    font-size: 1.5em; 
                    
                    /* Clips the video to the exact size of the text block */
                    overflow: hidden;

                    /* Pure Black BG + Screen Blend = Transparent Background */
                    background-color: #000000;
                    mix-blend-mode: screen; 
                    /* Minimal padding */
                    padding: 5px 0;
                }

                .text-video-bg {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    z-index: 0;
                }

                .video-purple-overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: rgba(139, 92, 246, 0.8); /* Stronger Purple to composite well */
                    mix-blend-mode: overlay;
                    z-index: 1;
                }

                .video-text-layer {
                    position: relative;
                    /* Text is WHITE (Video), Background is BLACK (Transparent via Screen) */
                    color: #fff;
                    background-color: #000000;
                    mix-blend-mode: multiply; 
                    z-index: 10;
                    display: block;
                    padding: 0.1em;
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
