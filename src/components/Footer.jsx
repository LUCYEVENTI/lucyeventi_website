import React from 'react';
import Button from './ui/Button';
import { Mail, Linkedin, Twitter } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer id="contact" className="site-footer">
            <div className="container">
                <div className="cta-box">
                    <h2>Partner with Innovation</h2>
                    <p>Partecipa alla costruzione dell'infrastruttura sociale di domani.</p>
                    <div className="cta-form">
                        <input id="email-input" type="email" placeholder="Business Email" />
                        <Button variant="primary" onClick={() => {
                            const email = document.getElementById('email-input').value;
                            window.location.href = `mailto:lucymatching@gmail.com?subject=Investor Inquiry&body=Hi, I am interested in Lucy Technologies. My email is ${email}`;
                        }}>Inizia la Conversazione</Button>
                    </div>
                </div>

                <div className="footer-content">
                    <div className="footer-brand">
                        <h3>LUCY TECHNOLOGIES</h3>
                        <p>Engineering the Future of Social Interaction.</p>
                        <div className="social-links">
                            <a href="#" className="social-link"><Linkedin size={20} /></a>
                            <a href="#" className="social-link"><Twitter size={20} /></a>
                            <a href="#" className="social-link"><Mail size={20} /></a>
                        </div>
                    </div>

                    <div className="footer-links" style={{ justifyContent: 'center', gap: '4rem' }}>
                        <div className="link-col">
                            <h4>Corporate</h4>
                            <a href="#">About Us</a>
                        </div>
                        <div className="link-col">
                            <h4>Product</h4>
                            <a href="#" onClick={(e) => {
                                e.preventDefault();
                                document.getElementById('product-start').scrollIntoView({ behavior: 'smooth' });
                            }}>LUCY App</a>
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
