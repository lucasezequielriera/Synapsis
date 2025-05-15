import React, { useEffect, useState } from 'react';
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
import initSEOOptimizations from './utils/seo';
import { onCLS, onFCP, onLCP } from 'web-vitals';
import { HelmetProvider } from 'react-helmet-async';
import SEO from './components/SEO';

const App = () => {
  const isDesktop = window.innerWidth >= 1024;

  useEffect(() => {
    // Inicializar optimizaciones SEO
    initSEOOptimizations();
    
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

    // Mejora del tiempo de primer renderizado (FCP)
    const reportWebVitals = (metric) => {
      // Envío de métricas a GA o servicio de análisis si está disponible
      if (window.gtag) {
        window.gtag('event', metric.name, {
          event_category: 'Web Vitals',
          event_label: metric.id,
          value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
          non_interaction: true,
        });
      }
      console.log(metric.name, metric.value);
    };

    // Registrar métricas web vitals
    onCLS(reportWebVitals);
    onFCP(reportWebVitals);
    onLCP(reportWebVitals);
  }, []);

  return (
    <HelmetProvider>
      <LanguageProvider>
        <div className="font-sans bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 min-h-screen relative">
          <header>
            {/* <SynapsisLogo /> */}
            <nav aria-label="Language selection">
              <LanguageSelector />
            </nav>
            {/* Global SEO meta tags */}
            <SEO />
          </header>
          <AnimatePresence>
            <motion.main
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <section aria-label="Introduction">
                <SynapsisHero />
              </section>
              { isDesktop && <>
                <section aria-label="Solutions">
                  <SynapsisSolutions />
                </section>
                <section aria-label="Features">
                  <SynapsisFeatures />
                </section>
                {/* <section aria-label="Testimonials">
                  <SynapsisTestimonials />
                </section> */}
                <section aria-label="Pricing">
                  <SynapsisPricing />
                </section>
                <section aria-label="Contact us">
                  <SynapsisCTA />
                </section>
              </>}
            </motion.main>
          </AnimatePresence>
          { isDesktop && <>
            <footer>
              <SynapsisFooter />
            </footer>
            <aside aria-label="WhatsApp contact">
              <SynapsisWhatsApp />
            </aside>
          </>}
        </div>
      </LanguageProvider>
    </HelmetProvider>
  );
};

export default App;