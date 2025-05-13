// src/components/SynapsisTestimonials.js
import React from 'react';
import { motion } from 'framer-motion';
import { StarIcon } from '@heroicons/react/24/solid';
import NeuronEffect from './NeuronEffect';
import { useLanguage } from '../context/LanguageContext';

const SynapsisTestimonials = () => {
  const { t } = useLanguage();
  
  const testimonials = [
    {
      quoteKey: "testimonials.quote1",
      author: "Dr. Ana Martínez",
      role: "Directora de Innovación, TechCorp",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/1.jpg"
    },
    {
      quoteKey: "testimonials.quote2",
      author: "Carlos Rodríguez",
      role: "CEO, Automotriz Global",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/1.jpg"
    },
    {
      quoteKey: "testimonials.quote3",
      author: "Laura Sánchez",
      role: "CTO, FinTech Solutions",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/2.jpg"
    }
  ];

  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 grid-pattern opacity-10" />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-purple-500/10 to-transparent" />
        
        {/* Efecto de Neuronas */}
        <NeuronEffect color="rgba(60, 120, 200, 0.7)" density={55} />
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
            {t('testimonials.title')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-cyan-400">{t('testimonials.titleHighlight', 'Éxito')}</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('testimonials.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="glass-effect p-8 rounded-2xl hover-glow"
            >
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-16 h-16 rounded-full mr-4"
                />
                <div>
                  <h3 className="text-xl font-bold text-white">{testimonial.author}</h3>
                  <p className="text-gray-400">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <StarIcon key={i} className="w-5 h-5 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-300 italic mb-6">"{t(testimonial.quoteKey)}"</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-sm text-gray-400">{t('testimonials.verified')}</span>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-sm text-fuchsia-400 hover:text-fuchsia-300 transition"
                >
                  {t('testimonials.viewCase')} →
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SynapsisTestimonials;