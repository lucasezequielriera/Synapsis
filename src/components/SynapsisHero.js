// src/components/SynapsisHero.js
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Typewriter from 'typewriter-effect';
import { useLanguage } from '../context/LanguageContext';
import NeuronEffect from './NeuronEffect';

const SynapsisHero = () => {
  const { t, language } = useLanguage();

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
    { number: '98%', labelKey: 'hero.stat.satisfaction' },
    { number: '500+', labelKey: 'hero.stat.projects' },
    { number: '50+', labelKey: 'hero.stat.companies' },
    { number: '24/7', labelKey: 'hero.stat.support' },
  ];

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="absolute left-1/2 top-1/3 w-[600px] h-[600px] bg-gradient-to-tr from-fuchsia-500 via-indigo-500 to-cyan-400 opacity-30 rounded-full blur-3xl animate-float" />
        <div className="absolute right-1/4 bottom-0 w-[400px] h-[400px] bg-gradient-to-br from-cyan-400 via-purple-500 to-fuchsia-500 opacity-20 rounded-full blur-2xl animate-float" />
        
        {/* Efecto de Neuronas */}
        <NeuronEffect color="rgba(134, 25, 143, 0.7)" density={70} />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10">
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
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-fuchsia-500 to-cyan-400 text-white rounded-full hover-glow flex items-center justify-center gap-2"
            >
              {t('hero.button.start')}
              <ArrowRightIcon className="w-5 h-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 glass-effect text-white rounded-full hover-glow"
            >
              {t('hero.button.demo')}
            </motion.button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="glass-effect p-4 rounded-xl"
              >
                <div className="text-3xl font-bold text-gradient mb-2">{stat.number}</div>
                <div className="text-sm text-gray-400">{t(stat.labelKey)}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2" />
        </div>
      </motion.div>
    </div>
  );
};

export default SynapsisHero;