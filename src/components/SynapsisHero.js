// src/components/SynapsisHero.js
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Typewriter from 'typewriter-effect';
import { useLanguage } from '../context/LanguageContext';
import NeuronEffect from './NeuronEffect';

const SynapsisHero = () => {
  const { t, language } = useLanguage();
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);

  // Helper to scroll smoothly to the contact section
  const scrollToContact = () => {
    const contactSection = document.getElementById('solutions');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.hash = 'contact';
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Textos según el idioma para el efecto typewriter
  const typewriterStrings = {
    es: [
      'Inteligencia Artificial',
      'Automatización de Procesos',
      'Sistemas Empresariales',
      'Análisis Predictivo',
      'Cloud Computing',
      'Machine Learning',
      'Transformación Digital',
      'Optimización de Negocios'
    ],
    en: [
      'Artificial Intelligence',
      'Process Automation',
      'Enterprise Systems',
      'Predictive Analytics',
      'Cloud Computing',
      'Machine Learning',
      'Digital Transformation',
      'Business Optimization'
    ],
    fr: [
      'Intelligence Artificielle',
      'Automatisation des Processus',
      'Systèmes d\'Entreprise',
      'Analyse Prédictive',
      'Cloud Computing',
      'Machine Learning',
      'Transformation Numérique',
      'Optimisation des Entreprises'
    ],
    de: [
      'Künstliche Intelligenz',
      'Prozessautomatisierung',
      'Unternehmenssysteme',
      'Prädiktive Analytik',
      'Cloud Computing',
      'Machine Learning',
      'Digitale Transformation',
      'Geschäftsoptimierung'
    ]
  };

  // Usamos el idioma actual o fallback a español
  const currentLanguageStrings = typewriterStrings[language] || typewriterStrings.es;

  // Stats adaptados para usar traducciones
  const stats = [
    { number: t('hero.stat.number1'), labelKey: t('hero.stat.website') },
    { number: t('hero.stat.number2'), labelKey: t('hero.stat.companySystem') },
    { number: t('hero.stat.number3'), labelKey: t('hero.stat.automatization') },
    { number: t('hero.stat.number4'), labelKey: t('hero.stat.digitalTransformation') },
  ];

  // ADD: teléfono de WhatsApp para contacto
  const whatsappPhone = '+34627043397';

  // Clase para altura del contenedor
  const heightClass = isDesktop ? "min-h-screen" : "min-h-screen";

  return (
    <div className={`relative ${heightClass} flex items-center justify-center overflow-hidden`}>
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="absolute left-1/2 top-1/3 w-[600px] h-[600px] bg-gradient-to-tr from-fuchsia-500 via-indigo-500 to-cyan-400 opacity-30 rounded-full blur-3xl animate-float" />
        <div className="absolute right-1/4 bottom-0 w-[400px] h-[400px] bg-gradient-to-br from-cyan-400 via-purple-500 to-fuchsia-500 opacity-20 rounded-full blur-2xl animate-float" />
        
        {/* Efecto de Neuronas */}
        <NeuronEffect color="rgba(134, 25, 143, 0.7)" density={isDesktop ? 70 : 20} />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10" style={{ paddingTop: !isDesktop && 100, paddingBottom: !isDesktop && 25 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold pb-6 text-gradient" style={{ fontSize: '5.5rem' }}>
            {t('hero.title')}
          </h1>
          
          {/* Typewriter Effect */}
          <div className="h-12 mb-8 text-2xl md:text-3xl font-medium">
            <Typewriter
              options={{
                strings: currentLanguageStrings,
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
                delay: 50,
                cursor: '|',
                wrapperClassName: 'text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-cyan-400'
              }}
            />
          </div>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            {t('hero.subtitle')}
          </p>
          
          { isDesktop &&
            <div className="flex justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-fuchsia-500 to-cyan-400 text-white rounded-full hover-glow flex items-center justify-center gap-2"
                onClick={scrollToContact}
              >
                {t('hero.button.start')}
                <ArrowRightIcon className="w-5 h-5" />
              </motion.button>
            </div>
          }

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            {stats.map((stat, index) => {
              const whatsappMessage = encodeURIComponent(`${t('hero.stat.consulting')} ${stat.number}. ${t('hero.stat.consultingSecondPart')}`);
              const whatsappUrl = `https://wa.me/${whatsappPhone}?text=${whatsappMessage}`;
              return (
                <motion.a
                  key={index}
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="glass-effect p-4 rounded-xl cursor-pointer block"
                >
                  <div className="text-3xl font-bold text-gradient mb-2 text-center">{stat.number}</div>
                  <div className="text-sm text-gray-400 text-center">{t(stat.labelKey)}</div>
                </motion.a>
              );
            })}
          </div>
        { !isDesktop && <div style={{ marginTop: 40 }}>
          <p className="text-gray-400 text-xs">
            {t('footer.rights')}
          </p>
        </div> }
        </motion.div>
      </div>

      {/* Scroll Indicator - Solo en desktop */}
      {isDesktop && (
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2" />
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default SynapsisHero;