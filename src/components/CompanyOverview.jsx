import React from 'react';
import { motion } from 'framer-motion';
import ParticleImage from './ui/ParticleImage';
import './CompanyOverview.css';

const CompanyOverview = () => {
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
        <section id="company" className="section-padding bg-surface company-overview-section">
            <div className="container">
                {/* Intro Header */}
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="section-title"
                    >
                        Beyond The App
                    </motion.h2>
                    <motion.div
                        className="overview-intro"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <p className="intro-lead">
                            Lucy Technologies è una società di ricerca e sviluppo focalizzata sull'intelligenza artificiale applicata.
                            Progettiamo infrastrutture neurali per ottimizzare le interazioni umane e i modelli di business nel settore dell'intrattenimento.
                        </p>
                    </motion.div>
                </div>

                {/* 75% Focus: Innovation Pillars */}
                {/* 75% Focus: Innovation Pillars */}
                {/* 75% Focus: Innovation Pillars */}
                <motion.div
                    className="innovation-grid"
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.3
                            }
                        }
                    }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <motion.div
                        className="innovation-card"
                        variants={itemVariants}
                    >
                        <ParticleImage src="assets/icon-ai-core.png" alt="AI Core" delay={0.2} size={80} />
                        <h3>AI Core Development</h3>
                        <p>Sviluppiamo modelli predittivi proprietari e agenti autonomi capaci di comprendere comportamenti complessi e ottimizzare esperienze in tempo reale.</p>
                    </motion.div>

                    <motion.div
                        className="innovation-card"
                        variants={itemVariants}
                    >
                        <ParticleImage src="assets/icon-global-network.png" alt="Ecosistemi Scalabili" delay={0.4} size={80} />
                        <h3>Ecosistemi Scalabili</h3>
                        <p>Costruiamo architetture cloud-native progettate per connettere migliaia di utenti e venue simultaneamente, garantendo affidabilità e velocità.</p>
                    </motion.div>

                    <motion.div
                        className="innovation-card"
                        variants={itemVariants}
                    >
                        <ParticleImage src="assets/icon-innovation.png" alt="R&D Continuo" delay={0.6} size={80} />
                        <h3>R&D Continuo</h3>
                        <p>Investiamo costantemente in ricerca e sviluppo per integrare le ultime frontiere del Machine Learning nei nostri prodotti e servizi B2B.</p>
                    </motion.div>
                </motion.div>

                {/* 25% Focus: The Product */}
                <motion.div
                    className="product-focus-wrapper"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                >
                    <div className="product-content">
                        <span className="product-label">Product Division</span>
                        <h3 className="text-3xl font-bold mb-4 text-white">LUCY App</h3>
                        <p className="text-lg text-gray-300 mb-6">
                            L'applicazione mobile rappresenta l'interfaccia utente del nostro ecosistema.
                            Uno strumento che traduce la complessità dei nostri algoritmi in un'esperienza d'uso fluida e intuitiva.
                        </p>
                        <div className="flex gap-4">
                            {/* Launch Badge Removed */}
                        </div>
                    </div>
                    <div className="product-visual" style={{ overflow: 'visible' }}>
                        <div className="product-visual-abstract"></div>
                        <img
                            src="assets/icon-rocket-launch.png"
                            alt="Lucy App Launch"
                            className="rocket-3d-anim"
                            style={{
                                width: '380px',
                                height: '380px',
                                objectFit: 'contain',
                                position: 'relative',
                                zIndex: 10,
                                filter: 'drop-shadow(0 20px 50px rgba(124, 58, 237, 0.5))',
                                margin: '-80px',
                                transform: 'scale(1.1)'
                            }}
                        />
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default CompanyOverview;
