import React from 'react';
import { motion } from 'framer-motion';
import './Button.css';

const Button = ({
    children,
    variant = 'primary',
    size,
    onClick,
    className = '',
    icon: Icon,
    disabled = false
}) => {
    return (
        <motion.button
            className={`btn btn-${variant} ${size ? `btn-${size}` : ''} ${className}`}
            onClick={disabled ? undefined : onClick}
            disabled={disabled}
            whileHover={disabled ? {} : { scale: 1.05 }}
            whileTap={disabled ? {} : { scale: 0.95 }}
            style={{ opacity: disabled ? 0.5 : 1, cursor: disabled ? 'not-allowed' : 'pointer' }}
        >
            {children}
            {Icon && <Icon size={20} className="btn-icon" />}
        </motion.button>
    );
};

export default Button;
