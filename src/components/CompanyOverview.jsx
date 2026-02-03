import React from 'react';
import { motion } from 'framer-motion';
import { Rocket } from 'lucide-react';
import ParticleImage from './ui/ParticleImage';
import './CompanyOverview.css';

const CompanyOverview = () => {
    return (
        <section className="section-padding bg-surface company-overview-section">
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
                <div className="innovation-grid">
                    <motion.div
                        className="innovation-card"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        <div className="card-icon"><Cpu size={32} /></div>
                        <h3>AI Core Development</h3>
                        <p>Sviluppiamo modelli predittivi proprietari e agenti autonomi capaci di comprendere comportamenti complessi e ottimizzare esperienze in tempo reale.</p>
                    </motion.div>

                    <motion.div
                        className="innovation-card"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <div className="card-icon"><Globe size={32} /></div>
                        <h3>Ecosistemi Scalabili</h3>
                        <p>Costruiamo architetture cloud-native progettate per connettere migliaia di utenti e venue simultaneamente, garantendo affidabilità e velocità.</p>
                    </motion.div>

                    <motion.div
                        className="innovation-card"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                    >
                        <div className="card-icon"><Zap size={32} /></div>
                        <h3>R&D Continuo</h3>
                        <p>Investiamo costantemente in ricerca e sviluppo per integrare le ultime frontiere del Machine Learning nei nostri prodotti e servizi B2B.</p>
                    </motion.div>
                </div>

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
                    <div className="product-visual">
                        <div className="product-visual-abstract"></div>
                        <Rocket size={120} className="relative z-10 text-white opacity-90 drop-shadow-lg" />
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default CompanyOverview;
