import React from 'react';
import { motion } from 'framer-motion';

const ParticleImage = ({ src, alt, delay, size = 120 }) => {
    // Generate static random positions for particles once
    const particles = React.useMemo(() => {
        const particleCount = 12;
        const radius = size / 2 + 20;
        return Array.from({ length: particleCount }).map((_, i) => {
            const angle = (i / particleCount) * 2 * Math.PI;
            const r = radius + Math.random() * 20;
            return {
                x: r * Math.cos(angle),
                y: r * Math.sin(angle),
                delay: delay + (Math.random() * 0.2)
            };
        });
    }, [size, delay]);

    return (
        <div
            className="icon-wrapper"
            style={{
                position: 'relative',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                '--icon-size': `${size}px`
            }}
        >
            {/* Particles */}
            {particles.map((p, i) => (
                <motion.div
                    key={i}
                    className="tech-particle"
                    initial={{ x: p.x, y: p.y, opacity: 0, scale: 0 }}
                    whileInView={{
                        x: 0,
                        y: 0,
                        opacity: [0, 1, 0], // Fade in then out
                        scale: [0.5, 1.2, 0] // Pulse then shrink
                    }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.6,
                        delay: p.delay,
                        ease: "easeIn"
                    }}
                    style={{
                        position: 'absolute',
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        background: '#A78BFA',
                        boxShadow: '0 0 10px #A78BFA',
                        zIndex: 20
                    }}
                />
            ))}

            {/* Main Image */}
            <motion.img
                src={src}
                alt={alt}
                className="tech-icon"
                initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
                whileInView={{
                    opacity: 1,
                    scale: 1,
                    filter: "blur(0px)"
                }}
                viewport={{ once: true }}
                transition={{
                    duration: 0.5,
                    delay: delay + 0.4, // Wait for particles to arrive
                    ease: "easeOut"
                }}
                style={{
                    position: 'relative',
                    zIndex: 21,
                    objectFit: 'contain'
                }}
            />
        </div>
    );
};

export default ParticleImage;
