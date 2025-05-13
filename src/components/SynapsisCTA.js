// src/components/SynapsisCTA.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRightIcon,
  EnvelopeIcon,
  PhoneIcon,
  BuildingOfficeIcon
} from '@heroicons/react/24/outline';
import { useLanguage } from '../context/LanguageContext';

const SynapsisCTA = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 grid-pattern opacity-10" />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-purple-500/10 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {t('cta.title')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-cyan-400">{t('cta.titleHighlight', 'Negocio')}</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              {t('cta.subtitle')}
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full bg-fuchsia-500/20 flex items-center justify-center">
                  <BuildingOfficeIcon className="w-6 h-6 text-fuchsia-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">{t('cta.feature1.title')}</h3>
                  <p className="text-gray-400">{t('cta.feature1.subtitle')}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center">
                  <EnvelopeIcon className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">{t('cta.feature2.title')}</h3>
                  <p className="text-gray-400">{t('cta.feature2.subtitle')}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center">
                  <PhoneIcon className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">{t('cta.feature3.title')}</h3>
                  <p className="text-gray-400">{t('cta.feature3.subtitle')}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-effect p-8 rounded-2xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  {t('cta.form.name')}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-fuchsia-500 focus:border-transparent"
                  placeholder={t('cta.form.namePlaceholder')}
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  {t('cta.form.email')}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-fuchsia-500 focus:border-transparent"
                  placeholder={t('cta.form.emailPlaceholder')}
                  required
                />
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                  {t('cta.form.company')}
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-fuchsia-500 focus:border-transparent"
                  placeholder={t('cta.form.companyPlaceholder')}
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  {t('cta.form.message')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-3 bg-white/5 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-fuchsia-500 focus:border-transparent"
                  placeholder={t('cta.form.messagePlaceholder')}
                  required
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-gradient-to-r from-fuchsia-500 to-cyan-400 text-white font-bold py-4 px-8 rounded-lg hover:shadow-lg hover:shadow-fuchsia-500/20 transition duration-300 flex items-center justify-center space-x-2"
              >
                <span>{t('cta.button')}</span>
                <ArrowRightIcon className="w-5 h-5" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SynapsisCTA;