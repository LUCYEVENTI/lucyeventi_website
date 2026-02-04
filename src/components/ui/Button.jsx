import React from 'react';
import { motion } from 'framer-motion';
import './Button.css';

const Button = ({
    children,
    variant = 'primary',
    onClick,
    className = '',
    icon: Icon
}) => {
    return (
        <motion.button
            className={`btn btn-${variant} ${size ? `btn-${size}` : ''} ${className}`}
            onClick={onClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            {children}
            {Icon && <Icon size={20} className="btn-icon" />}
        </motion.button>
    );
};

export default Button;
