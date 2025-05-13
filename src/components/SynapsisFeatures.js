// src/components/SynapsisFeatures.js
import React from 'react';
import { motion } from 'framer-motion';
import { 
  CpuChipIcon, 
  RocketLaunchIcon, 
  ShieldCheckIcon,
  ChartBarIcon,
  CogIcon,
  CloudIcon
} from '@heroicons/react/24/outline';
import { useLanguage } from '../context/LanguageContext';

const SynapsisFeatures = () => {
  const { t } = useLanguage();
  
  const features = [
    {
      icon: <CpuChipIcon className="w-12 h-12" />,
      titleKey: "features.ai.title",
      descriptionKey: "features.ai.description",
      gradient: "from-fuchsia-500 to-cyan-400"
    },
    {
      icon: <RocketLaunchIcon className="w-12 h-12" />,
      titleKey: "features.automation.title",
      descriptionKey: "features.automation.description",
      gradient: "from-cyan-400 to-blue-500"
    },
    {
      icon: <ShieldCheckIcon className="w-12 h-12" />,
      titleKey: "features.security.title",
      descriptionKey: "features.security.description",
      gradient: "from-blue-500 to-indigo-500"
    },
    {
      icon: <ChartBarIcon className="w-12 h-12" />,
      titleKey: "features.analytics.title",
      descriptionKey: "features.analytics.description",
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      icon: <CogIcon className="w-12 h-12" />,
      titleKey: "features.integration.title",
      descriptionKey: "features.integration.description",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: <CloudIcon className="w-12 h-12" />,
      titleKey: "features.cloud.title",
      descriptionKey: "features.cloud.description",
      gradient: "from-pink-500 to-rose-500"
    }
  ];

  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 grid-pattern opacity-10" />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-purple-500/10 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t('features.title')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-cyan-400">{t('features.titleHighlight', 'Negocio')}</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('features.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="glass-effect p-8 rounded-2xl hover-glow"
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} p-3 mb-6`}>
                <div className="text-white">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{t(feature.titleKey)}</h3>
              <p className="text-gray-300">{t(feature.descriptionKey)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SynapsisFeatures;