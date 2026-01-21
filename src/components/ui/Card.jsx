import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ children, className = '', delay = 0, ...props }) => {
    return (
        <motion.div
            className={`glass-panel ${className}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
            style={{ padding: '2.5rem' }}
            {...props}
        >
            {children}
        </motion.div>
    );
};

export default Card;
