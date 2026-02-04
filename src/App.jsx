import React, { useEffect } from 'react';
import Header from './components/Header';
import HeroProductWrapper from './components/HeroProductWrapper';

import CoreTech, { Traction } from './components/CoreTech';
import CompanyOverview from './components/CompanyOverview';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress'; // Import Progress
import { motion, useScroll, useSpring } from 'framer-motion';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
      <Header />
      <ScrollProgress /> {/* Add Navigation Dots */}

      <motion.div
        className="progress-bar"
        style={{ scaleX }}
      />

      <main>
        {/* Unified Wrapper contains 'hero-start' and 'product-start' */}
        <HeroProductWrapper />

        <div id="tech">
          <CoreTech />
        </div>

        <div id="traction">
          <Traction />
        </div>

        <CompanyOverview />
      </main>

      {/* Footer ID is inside the component, but we can wrap it or ensure the ID matches */}
      <Footer />
    </>
  );
}

export default App;
