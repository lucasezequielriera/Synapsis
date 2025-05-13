import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LanguageProvider } from './context/LanguageContext';
import LanguageSelector from './components/LanguageSelector';
import SynapsisLogo from './components/SynapsisLogo';
import SynapsisHero from './components/SynapsisHero';
import SynapsisFeatures from './components/SynapsisFeatures';
import SynapsisSolutions from './components/SynapsisSolutions';
import SynapsisTestimonials from './components/SynapsisTestimonials';
import SynapsisPricing from './components/SynapsisPricing';
import SynapsisCTA from './components/SynapsisCTA';
import SynapsisFooter from './components/SynapsisFooter';
import SynapsisWhatsApp from './components/SynapsisWhatsApp';

const App = () => {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Intersection Observer for animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el));
  }, []);

  return (
    <LanguageProvider>
      <div className="font-sans bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 min-h-screen relative">
        <SynapsisLogo />
        <LanguageSelector />
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <SynapsisHero />
            <SynapsisSolutions />
            <SynapsisFeatures />
            {/* <SynapsisTestimonials /> */}
            <SynapsisPricing />
            <SynapsisCTA />
            <SynapsisFooter />
            <SynapsisWhatsApp />
          </motion.div>
        </AnimatePresence>
      </div>
    </LanguageProvider>
  );
};

export default App;