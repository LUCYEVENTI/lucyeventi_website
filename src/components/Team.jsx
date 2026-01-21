import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Mail, Twitter } from 'lucide-react';
import { teamMembers } from '../data/team';
import './Team.css';

const Team = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    return (
        <section className="section-padding bg-surface">
            <div className="container">
                <div className="text-center mb-16">
                    <h2 className="section-title">Il Team</h2>
                    <p className="section-desc max-w-2xl mx-auto">
                        Visionari, ingegneri e creativi uniti per rivoluzionare il mondo della nightlife.
                    </p>
                </div>

                <motion.div
                    className="team-grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    {teamMembers.map((member) => (
                        <motion.div key={member.id} variants={cardVariants} className="team-card">
                            <div className="member-avatar">
                                <img
                                    src={member.avatar}
                                    alt={member.name}
                                    className="member-img"
                                    onError={(e) => {
                                        e.target.style.display = 'none';
                                        e.target.parentElement.style.background = 'linear-gradient(135deg, #4f46e5, #9333ea)';
                                    }}
                                />
                            </div>
                            <h3 className="member-name">{member.name}</h3>
                            <p className="member-role">{member.role}</p>
                            <p className="member-bio">{member.bio}</p>
                            <div className="social-links">
                                {member.social.linkedin && <a href={member.social.linkedin} className="social-icon"><Linkedin size={18} /></a>}
                                {member.social.twitter && <a href={member.social.twitter} className="social-icon"><Twitter size={18} /></a>}
                                {member.social.email && <a href={`mailto:${member.social.email}`} className="social-icon"><Mail size={18} /></a>}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Team;
