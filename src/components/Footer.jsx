import React from 'react';
import Button from './ui/Button';
import { Mail, Linkedin, Twitter } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer id="contact" className="site-footer">
            <div className="container">
                <div className="cta-box">
                    <h2>Pronto a investire nel futuro?</h2>
                    <p>Unisciti a noi nel ridefinire l'intrattenimento globale.</p>
                    <div className="cta-form">
                        <input id="email-input" type="email" placeholder="La tua email business" />
                        <Button variant="primary" onClick={() => {
                            const email = document.getElementById('email-input').value;
                            window.location.href = `mailto:lucymatching@gmail.com?subject=Investor Inquiry&body=Hi, I am interested in LucyEventi. My email is ${email}`;
                        }}>Contattaci</Button>
                    </div>
                </div>

                <div className="footer-content">
                    <div className="footer-brand">
                        <h3>LucyEventi</h3>
                        <p>Artificial Intelligence for Real Experiences.</p>
                        <div className="social-links">
                            <a href="#" className="social-link"><Linkedin size={20} /></a>
                            <a href="#" className="social-link"><Twitter size={20} /></a>
                            <a href="#" className="social-link"><Mail size={20} /></a>
                        </div>
                    </div>

                    <div className="footer-links" style={{ justifyContent: 'center', gap: '4rem' }}>
                        <div className="link-col">
                            <h4>Azienda</h4>
                            <a href="#">Chi siamo</a>
                        </div>
                        <div className="link-col">
                            <h4>Prodotto</h4>
                            <a href="#" onClick={(e) => {
                                e.preventDefault();
                                document.getElementById('product-start').scrollIntoView({ behavior: 'smooth' });
                            }}>Eventi Hub</a>
                            <a href="#" style={{ opacity: 0.4, cursor: 'not-allowed', pointerEvents: 'none' }}>Download App</a>
                        </div>
                        {/* Legale column removed */}
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} LucyEventi S.r.l. Tutti i diritti riservati.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
