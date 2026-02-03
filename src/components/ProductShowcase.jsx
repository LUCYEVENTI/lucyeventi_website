import React from 'react';
import { motion } from 'framer-motion';
import Button from './ui/Button';
import { Smartphone, Zap, Shield, BarChart3 } from 'lucide-react';
import './ProductShowcase.css';

const ProductShowcase = () => {
    return (
        <section id="product" className="section-padding">
            <div className="container">
                <div className="product-grid">
                    <motion.div
                        className="product-info"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="section-title">Ecosistema <br /><span className="text-gradient">Mobile Integrato.</span></h2>
                        <p className="section-desc">
                            LUCY App agisce come terminale utente per la nostra infrastruttura intelligente,
                            offrendo un'esperienza di scoperta personalizzata e strumenti di gestione avanzati.
                        </p>

                        <ul className="feature-list">
                            <motion.li
                                className="feature-item"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1, duration: 0.5 }}
                            >
                                <div className="feature-icon-wrapper">
                                    <img src="assets/icon-smart-match.png" alt="Smart Match" className="feature-icon-img" />
                                </div>
                                <div>
                                    <h3>Smart Matching</h3>
                                    <p>Algoritmi proprietari che ti mostrano solo eventi affini al tuo vibe.</p>
                                </div>
                            </motion.li>
                            <motion.li
                                className="feature-item"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3, duration: 0.5 }}
                            >
                                <div className="feature-icon-wrapper">
                                    <img src="assets/icon-security.png" alt="Security" className="feature-icon-img" />
                                </div>
                                <div>
                                    <h3>Community Sicura</h3>
                                    <p>Interazioni real-time verificate e sistema di feedback garantito.</p>
                                </div>
                            </motion.li>
                            <motion.li
                                className="feature-item"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5, duration: 0.5 }}
                            >
                                <div className="feature-icon-wrapper">
                                    <img src="assets/icon-business.png" alt="Business" className="feature-icon-img" />
                                </div>
                                <div>
                                    <h3>Business Tools</h3>
                                    <p>Dashboard analitiche avanzate e CRM integrato per gli organizzatori.</p>
                                </div>
                            </motion.li>
                        </ul>
                    </motion.div>

                    <motion.div
                        className="product-visual"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        {/* Mockup Placeholder */}
                        <div className="mockup-frame">
                            <div className="mockup-screen">
                                <div className="mockup-header">
                                    <div className="mockup-notch"></div>
                                </div>
                                <div className="mockup-content">
                                    {/* Abstract App UI Representation */}
                                    <div className="ui-header">
                                        <div className="ui-avatar"></div>
                                        <div className="ui-bar"></div>
                                    </div>
                                    <div className="ui-card-hero"></div>
                                    <div className="ui-row">
                                        <div className="ui-card-sm"></div>
                                        <div className="ui-card-sm"></div>
                                    </div>
                                    <div className="ui-list">
                                        <div className="ui-list-item"></div>
                                        <div className="ui-list-item"></div>
                                        <div className="ui-list-item"></div>
                                    </div>
                                </div>
                                <div className="mockup-nav"></div>
                            </div>
                            <div className="mockup-glow"></div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ProductShowcase;
