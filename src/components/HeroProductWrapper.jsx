import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Button from './ui/Button';
import { ArrowRight, Sparkles } from 'lucide-react';
import PhoneMockup from './PhoneMockup';
import './Hero.css';
import './ProductShowcase.css';
import './HeroProductWrapper.css';

const HeroProductWrapper = () => {
    const [phoneState, setPhoneState] = useState('hero');
    const productRef = useRef(null);
    const isProductInView = useInView(productRef, { amount: 0.3, margin: "-100px" });

    // Sync phone state with product section visibility
    useEffect(() => {
        if (isProductInView) {
            setPhoneState('app');
        } else {
            setPhoneState('hero');
        }
    }, [isProductInView]);

    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth <= 960);
        check();
        window.addEventListener('resize', check);
        return () => window.removeEventListener('resize', check);
    }, []);

    // ----------------------
    // MOBILE RENDER
    // ----------------------
    if (isMobile) {
        return (
            <section className="unified-wrapper bg-surface" style={{ paddingTop: '100px', paddingBottom: '4rem', overflow: 'hidden' }}>
                <div className="container">
                    {/* 1. Hero Text */}
                    <div className="text-center mb-12">
                        <h1 className="hero-title">
                            Artificial Intelligence for <br />
                            <div className="video-text-mask-container">
                                <video autoPlay loop muted playsInline className="text-video-bg">
                                    <source src="assets/club-video3.mp4" type="video/mp4" />
                                </video>
                                <div className="video-purple-overlay"></div>
                                <span className="video-text-layer">Human Connection.</span>
                            </div>
                        </h1>
                        <p className="hero-subtitle mx-auto">
                            Costruiamo l'infrastruttura neurale che alimenta la prossima generazione di esperienze sociali.
                        </p>
                        <div className="hero-actions justify-center">
                            <Button variant="primary" icon={ArrowRight} onClick={() => document.getElementById('tech').scrollIntoView({ behavior: 'smooth' })}>
                                Esplora
                            </Button>
                        </div>
                    </div>

                    {/* 2. Phone (Visible) */}
                    <div className="flex justify-center mb-16">
                        <PhoneMockup state={phoneState} />
                    </div>

                    {/* 3. Product Text */}
                    <div className="text-center">
                        <div className="badge-wrapper justify-center mb-6">
                            <span className="badge-new"><Sparkles size={14} /> L'INTERFACCIA UTENTE</span>
                        </div>
                        <h2 className="section-title">LUCY App.</h2>
                        <p className="section-desc mx-auto">
                            Il nostro primo touchpoint di mercato. Un ecosistema mobile che dimostra la potenza dei nostri algoritmi.
                        </p>
                        <ul className="text-left max-w-md mx-auto space-y-4 mt-8">
                            <li className="flex items-start gap-4">
                                <img src="assets/icon-ai-matching.png" className="w-12 h-12 object-contain" alt="" />
                                <div>
                                    <h4 className="font-bold text-white">Neural Matching Core</h4>
                                    <p className="text-sm text-white/60">Analisi multi-vettoriale delle preferenze.</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <img src="assets/icon-privacy.png" className="w-12 h-12 object-contain" alt="" />
                                <div>
                                    <h4 className="font-bold text-white">Verified Trust Protocol</h4>
                                    <p className="text-sm text-white/60">Sistema decentralizzato basato su feedback verificati e identità reale.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        );
    }

    // ----------------------
    // DESKTOP RENDER - STANDARD STICKY
    // ----------------------
    return (
        <section className="unified-wrapper bg-surface" style={{ position: 'relative' }}>
            <div className="container">
                <div className="grid grid-cols-2 gap-12 relative">

                    {/* LEFT COLUMN: SCROLLING CONTENT */}
                    <div className="content-side py-20">
                        {/* HERO SECTION */}
                        <div id="hero-block" className="min-h-[90vh] flex flex-col justify-center">
                            <h1 className="hero-title text-left">
                                Artificial Intelligence for <br />
                                <div className="video-text-mask-container" style={{ fontSize: '1.0em' }}>
                                    <video autoPlay loop muted playsInline className="text-video-bg">
                                        <source src="assets/club-video3.mp4" type="video/mp4" />
                                    </video>
                                    <div className="video-purple-overlay"></div>
                                    <span className="video-text-layer">Human Connection.</span>
                                </div>
                            </h1>
                            <p className="hero-subtitle text-left ml-0 max-w-xl">
                                Costruiamo l'infrastruttura neurale che alimenta la prossima generazione di esperienze sociali.
                                Tecnologia predittiva, scalabile, umana.
                            </p>
                            <div className="hero-actions justify-start">
                                <Button variant="primary" icon={ArrowRight} onClick={() => document.getElementById('product-block').scrollIntoView({ behavior: 'smooth' })}>
                                    Esplora la Tecnologia
                                </Button>
                                <Button variant="secondary">Investor Relations</Button>
                            </div>
                        </div>

                        {/* PRODUCT SECTION */}
                        <div id="product-block" ref={productRef} className="min-h-[100vh] flex flex-col justify-center pt-20">
                            <div className="badge-wrapper justify-start mb-6">
                                <span className="badge-new"><Sparkles size={14} /> L'INTERFACCIA UTENTE</span>
                            </div>
                            <h2 className="section-title text-left text-5xl mb-6">LUCY App.</h2>
                            <p className="section-desc text-left ml-0 max-w-xl">
                                Il nostro primo touchpoint di mercato. Un ecosistema mobile che dimostra la potenza dei nostri algoritmi di <strong>matching comportamentale</strong> in tempo reale.
                            </p>

                            <ul className="space-y-8 mt-12 w-full">
                                <li className="flex items-center gap-6 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-accent-primary/50 transition-colors">
                                    <img src="assets/icon-ai-matching.png" className="w-16 h-16 object-contain" alt="" />
                                    <div>
                                        <h4 className="text-xl font-bold text-white mb-1">Neural Matching Core</h4>
                                        <p className="text-sm text-white/60">Analisi multi-vettoriale delle preferenze per connessioni ad alta precisione.</p>
                                    </div>
                                </li>
                                <li className="flex items-center gap-6 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-accent-primary/50 transition-colors">
                                    <img src="assets/icon-privacy.png" className="w-16 h-16 object-contain" alt="" />
                                    <div>
                                        <h4 className="text-xl font-bold text-white mb-1">Verified Trust Protocol</h4>
                                        <p className="text-sm text-white/60">Sistema di sicurezza decentralizzato basato su feedback verificati e identità reale.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* RIGHT COLUMN: STICKY PHONE */}
                    <div className="sticky-side relative">
                        <div className="sticky top-0 h-screen flex items-center justify-center">
                            <PhoneMockup state={phoneState} />
                        </div>
                    </div>

                </div>
            </div>
            {/* Styles imported from ./HeroProductWrapper.css */}
        </section>
    );
};

export default HeroProductWrapper;
