import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import Button from './ui/Button';
import { ArrowRight, Sparkles } from 'lucide-react';
import PhoneMockup from './PhoneMockup';
import './Hero.css';
import './ProductShowcase.css';

const HeroProductWrapper = () => {
    // We attach the scroll listener to a "ghost" container that is very tall
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Smooth physics for the scroll value
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    // --- ANIMATION MAPPING ---

    // 1. Phone State: Flip triggers at 35% scroll
    const [phoneState, setPhoneState] = useState('hero');
    useEffect(() => {
        const unsubscribe = smoothProgress.on("change", (latest) => {
            if (latest > 0.35 && phoneState !== 'app') setPhoneState('app');
            if (latest <= 0.35 && phoneState !== 'hero') setPhoneState('hero');
        });
        return () => unsubscribe();
    }, [smoothProgress, phoneState]);

    // 2. Left Column: 3D Deck Swap

    // HERO CARD (Exits: 20% -> 50%)
    const heroOpacity = useTransform(smoothProgress, [0, 0.2, 0.4], [1, 1, 0]);
    const heroScale = useTransform(smoothProgress, [0, 0.4], [1, 0.8]);
    const heroY = useTransform(smoothProgress, [0, 0.4], ["0%", "-50px"]);
    const heroFilter = useTransform(smoothProgress, [0, 0.4], ["blur(0px)", "blur(10px)"]);

    // PRODUCT CARD (Enters: 30% -> 60%)
    // Starts "under" (y=100px), rotated X, and invisible
    const prodOpacity = useTransform(smoothProgress, [0.3, 0.5], [0, 1]);
    const prodY = useTransform(smoothProgress, [0.3, 0.6], ["100px", "0px"]);
    const prodRotateX = useTransform(smoothProgress, [0.3, 0.6], ["-20deg", "0deg"]);
    const prodScale = useTransform(smoothProgress, [0.3, 0.6], [0.9, 1]);

    // Mobile Logic
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth <= 960);
        check();
        window.addEventListener('resize', check);
        return () => window.removeEventListener('resize', check);
    }, []);

    // ----------------------
    // MOBILE RENDER (Standard Setup)
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
    // DESKTOP RENDER (Sticky Scrollytelling)
    // ----------------------
    return (
        <section ref={containerRef} className="scrolly-container bg-surface" style={{ height: '250vh', position: 'relative' }}>

            {/* STICKY VIEWPORT: This stays locked 100% of the time */}
            <div className="sticky-viewport">
                <div className="container h-full">
                    <div className="grid grid-cols-2 h-full gap-12 items-center">

                        {/* LEFT COLUMN: The Deck of Cards */}
                        <div className="left-deck relative h-[500px] flex items-center perspective-container">

                            {/* CARD 1: HERO (Exits) */}
                            <motion.div
                                className="deck-card absolute top-0 left-0 w-full"
                                style={{
                                    opacity: heroOpacity,
                                    scale: heroScale,
                                    y: heroY,
                                    filter: heroFilter,
                                    transformOrigin: "bottom center",
                                    zIndex: 10
                                }}
                            >
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
                                    <Button variant="primary" icon={ArrowRight} onClick={() => { /* scroll to next */ }}>
                                        Esplora la Tecnologia
                                    </Button>
                                    <Button variant="secondary">Investor Relations</Button>
                                </div>
                            </motion.div>

                            {/* CARD 2: PRODUCT (Enters from "under") */}
                            <motion.div
                                className="deck-card absolute top-0 left-0 w-full"
                                style={{
                                    opacity: prodOpacity,
                                    y: prodY,
                                    rotateX: prodRotateX,
                                    scale: prodScale,
                                    transformOrigin: "bottom center",
                                    zIndex: 20 // Comes ON TOP 
                                }}
                            >
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
                            </motion.div>

                        </div>

                        {/* RIGHT COLUMN: Phone (Locked & Flipping) */}
                        <div className="right-phone h-full flex items-center justify-center">
                            <PhoneMockup state={phoneState} />
                        </div>

                    </div>
                </div>
            </div>

            {/* Styles are now imported from ./HeroProductWrapper.css */}
        </section>
    );
};


export default HeroProductWrapper;
