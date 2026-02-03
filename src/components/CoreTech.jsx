import React from 'react';
import { motion, useInView } from 'framer-motion';
import Card from './ui/Card';
import './CoreTech.css';

import ParticleImage from './ui/ParticleImage';

const CoreTech = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1]
            }
        }
    };

    return (
        <section className="section-padding bg-surface">
            <div className="container">
                <div className="text-center mb-16">
                    <h2 className="section-title">Scalable <span className="text-gradient-primary">Intelligence</span></h2>
                    <p className="section-desc max-w-2xl mx-auto">
                        Architettura proprietaria modulare, progettata per l'adattabilità cross-verticale e la massima resilienza.
                    </p>
                </div>

                <motion.div
                    className="tech-grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <Card variants={itemVariants} className="tech-card">
                        <ParticleImage src="assets/icon-ai-matching.png" alt="AI Matching" delay={0.2} size={350} />
                        <h3>Behavioral Alignment Engine</h3>
                        <p>Motore neurale proprietario che trasforma i dati grezzi in intenti utente azionabili.</p>
                    </Card>

                    <Card variants={itemVariants} className="tech-card">
                        <ParticleImage src="assets/icon-analytics.png" alt="Analytics" delay={0.4} size={350} />
                        <h3>Predictive Market Intelligence</h3>
                        <p>Modelli di forecasting avanzati per l'ottimizzazione dinamica delle revenue e l'analisi dei flussi.</p>
                    </Card>

                    <Card variants={itemVariants} className="tech-card">
                        <ParticleImage src="assets/icon-cloud.png" alt="Cloud" delay={0.6} size={350} />
                        <h3>High-Concurrency Cloud</h3>
                        <p>Infrastruttura serverless geo-distribuita progettata per latenza millisecondi e uptime 99.9%.</p>
                    </Card>
                </motion.div>
            </div>
        </section>
    );
};

const CountUp = ({ end, duration = 2, prefix = "", suffix = "" }) => {
    const [count, setCount] = React.useState(0);
    const nodeRef = React.useRef(null);
    const isInView = useInView(nodeRef, { once: true, margin: "-50px" });

    React.useEffect(() => {
        if (!isInView) return;

        let startTime;
        let animationFrame;

        const animate = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const percentage = Math.min(progress / (duration * 1000), 1);

            // Ease out quart
            const ease = 1 - Math.pow(1 - percentage, 4);

            setCount(Math.floor(end * ease));

            if (percentage < 1) {
                animationFrame = requestAnimationFrame(animate);
            }
        };

        animationFrame = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationFrame);
    }, [end, duration, isInView]);

    return (
        <span ref={nodeRef} className="stat-num">
            {prefix}{count}{suffix}
        </span>
    );
};

export const Traction = () => {
    // Unique 3D Flip Animation for Stats
    const statsContainerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    const statCardVariants = {
        hidden: {
            opacity: 0,
            rotateX: -90,
            y: 50,
            transformPerspective: 1000
        },
        visible: {
            opacity: 1,
            rotateX: 0,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 20,
                mass: 1.2
            }
        }
    };

    return (
        <section className="section-padding">
            <div className="container">
                <div className="traction-grid">
                    <div className="traction-text">
                        <h2 className="section-title">Market Validation</h2>
                        <p className="section-desc">
                            Le metriche di adozione confermano la scalabilità del modello e la rapida penetrazione di mercato.
                        </p>

                        <div className="roadmap-mini">
                            <div className="roadmap-item active">
                                <span className="dot"></span>
                                <span>MVP Validation Phase</span>
                            </div>
                            <div className="roadmap-item">
                                <span className="dot"></span>
                                <span>City-Level Scale Up</span>
                            </div>
                            <div className="roadmap-item">
                                <span className="dot"></span>
                                <span>National Expansion & SaaS</span>
                            </div>
                        </div>
                    </div>

                    <motion.div
                        className="stats-grid"
                        variants={statsContainerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        <motion.div variants={statCardVariants} className="stat-box">
                            <div className="stat-icon-wrapper">
                                <img src="assets/icon-stats-users.png" alt="Utenti" className="stat-icon-img" />
                            </div>
                            <CountUp end={15} suffix="k+" />
                            <span className="stat-label">Validated Users</span>
                        </motion.div>

                        <motion.div variants={statCardVariants} className="stat-box">
                            <div className="stat-icon-wrapper">
                                <img src="assets/icon-stats-partners.png" alt="Partner" className="stat-icon-img" />
                            </div>
                            <CountUp end={120} suffix="+" />
                            <span className="stat-label">B2B Partners</span>
                        </motion.div>

                        <motion.div variants={statCardVariants} className="stat-box full">
                            <div className="stat-icon-wrapper">
                                <img src="assets/icon-stats-growth.png" alt="Growth" className="stat-icon-img" />
                            </div>
                            <CountUp end={40} prefix="+" suffix="%" />
                            <span className="stat-label">MoM Growth Rate</span>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default CoreTech;
