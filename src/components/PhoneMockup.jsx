import React from 'react';
import { motion } from 'framer-motion';
import './ProductShowcase.css'; // Reusing existing phone styles

const VideoCard = ({ src, className, style }) => (
    <div className={className} style={{
        position: 'relative',
        overflow: 'hidden',
        border: 'none',
        background: '#000', // Fallback
        ...style
    }}>
        <video
            src={src}
            autoPlay
            loop
            muted
            playsInline
            style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                top: 0,
                left: 0
            }}
        />
        {/* Purple Overlay */}
        <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(139, 92, 246, 0.4)', // Purple overlay
            mixBlendMode: 'overlay', // Blend texture
            zIndex: 2
        }}></div>
        {/* Legibility Gradient */}
        <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(to top, rgba(0,0,0,0.6), transparent)',
            zIndex: 2
        }}></div>
    </div>
);

const PhoneMockup = ({ state = 'hero' }) => {
    const [isMobile, setIsMobile] = React.useState(false);

    React.useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth <= 960);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // On mobile, we disable the 3D flip to avoid browser quirks and "upside down" issues.
    // We just switch the z-index or opacity.

    return (
        <div className="mockup-frame" style={{
            width: isMobile ? '280px' : '310px',
            height: isMobile ? '560px' : '620px',
            margin: '0 auto'
        }}>
            <div className="mockup-screen" style={{ overflow: 'hidden', perspective: '1000px' }}>
                <div className="mockup-header">
                    <div className="mockup-notch"></div>
                </div>

                {/* Content Container */}
                <motion.div
                    className="mockup-content-wrapper"
                    style={{
                        width: '100%',
                        height: '100%',
                        position: 'relative',
                        transformStyle: 'preserve-3d'
                    }}
                    animate={{
                        rotateY: state === 'app' ? 180 : 0
                    }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                    {/* Front Face: Hero State */}
                    <div className="screen-face front" style={{
                        position: 'absolute', width: '100%', height: '100%',
                        backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden',
                        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                        background: 'var(--bg-dark)',
                        opacity: state === 'hero' ? 1 : 0,
                        transition: 'opacity 0.4s'
                    }}>
                        {/* Abstract Hero Visual */}
                        <div style={{ position: 'relative', zIndex: 2 }}>
                            <div className="gradient-sphere" style={{ width: '150px', height: '150px', background: 'var(--accent-primary)', opacity: 0.6, filter: 'blur(40px)' }}></div>
                            <h2 style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', fontSize: '2rem', fontWeight: 'bold' }}>LUCYEVENTI</h2>
                        </div>
                    </div>

                    {/* Back Face: App UI */}
                    <div className="screen-face back" style={{
                        position: 'absolute', width: '100%', height: '100%',
                        backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden',
                        transform: 'rotateY(180deg)',
                        background: 'var(--bg-dark)', display: 'flex', flexDirection: 'column',
                        opacity: state === 'app' ? 1 : 0,
                        transition: 'opacity 0.4s'
                    }}>
                        <div className="mockup-content" style={{ padding: '1rem', paddingTop: '3rem' }}>
                            <div className="ui-header">
                                <div className="ui-avatar"></div>
                                <div className="ui-bar"></div>
                            </div>

                            {/* Main Hero Card */}
                            <VideoCard src="assets/club-video.mp4" className="ui-card-hero" />

                            <div className="ui-row">
                                <VideoCard src="assets/club-video1.mp4" className="ui-card-sm" />
                                <VideoCard src="assets/club-video2.mp4" className="ui-card-sm" />
                            </div>

                            <div className="ui-list">
                                <VideoCard src="assets/club-video3.mp4" className="ui-list-item" />
                                <VideoCard src="assets/club-video4.mp4" className="ui-list-item" />
                                <VideoCard src="assets/club-video5.mp4" className="ui-list-item" />
                            </div>
                        </div>
                        <div className="mockup-nav"></div>
                    </div>
                </motion.div>
            </div>
            <div className="mockup-glow"></div>
        </div>
    );
};

export default PhoneMockup;
