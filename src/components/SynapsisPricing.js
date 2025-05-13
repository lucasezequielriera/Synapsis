import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRightIcon, CheckIcon } from '@heroicons/react/24/outline';
import { useLanguage } from '../context/LanguageContext';

const SynapsisPricing = () => {
  const { t } = useLanguage();

  // Planes de precios
  const pricingPlans = [
    {
      name: t('pricing.basic.name', 'Básico'),
      description: t('pricing.basic.description', 'Página web estática perfecta para pequeñas empresas y profesionales'),
      price: '599',
      currency: '$',
      period: t('pricing.period.yearly', '/año'),
      features: [
        t('pricing.basic.feature1', 'Diseño Responsive'),
        t('pricing.basic.feature2', 'Hasta 5 páginas'),
        t('pricing.basic.feature3', 'Formulario de contacto'),
        t('pricing.basic.feature4', 'SEO básico'),
        t('pricing.basic.feature5', 'Integración con redes sociales'),
      ],
      cta: t('pricing.basic.cta', 'Comenzar ahora'),
      popular: false,
      color: 'from-cyan-500 to-blue-500'
    },
    {
      name: t('pricing.pro.name', 'Profesional'),
      description: t('pricing.pro.description', 'Sitio web dinámico con CMS para empresas en crecimiento'),
      price: '1299',
      currency: '$',
      period: t('pricing.period.yearly', '/año'),
      features: [
        t('pricing.pro.feature1', 'Todo lo del plan Básico'),
        t('pricing.pro.feature2', 'Hasta 15 páginas'),
        t('pricing.pro.feature3', 'Panel de administración'),
        t('pricing.pro.feature4', 'Blog integrado'),
        t('pricing.pro.feature5', 'SEO avanzado'),
        t('pricing.pro.feature6', 'Optimización de velocidad'),
      ],
      cta: t('pricing.pro.cta', 'Seleccionar plan'),
      popular: true,
      color: 'from-fuchsia-500 to-purple-600'
    },
    {
      name: t('pricing.enterprise.name', 'Empresarial'),
      description: t('pricing.enterprise.description', 'Solución completa con funcionalidades avanzadas para grandes empresas'),
      price: '2499',
      currency: '$',
      period: t('pricing.period.yearly', '/año'),
      features: [
        t('pricing.enterprise.feature1', 'Todo lo del plan Profesional'),
        t('pricing.enterprise.feature2', 'Páginas ilimitadas'),
        t('pricing.enterprise.feature3', 'E-commerce integrado'),
        t('pricing.enterprise.feature4', 'Pasarela de pagos'),
        t('pricing.enterprise.feature5', 'Área de clientes'),
        t('pricing.enterprise.feature6', 'Análisis avanzado'),
        t('pricing.enterprise.feature7', 'Soporte prioritario 24/7'),
      ],
      cta: t('pricing.enterprise.cta', 'Contactar ventas'),
      popular: false,
      color: 'from-indigo-500 to-indigo-800'
    }
  ];

  return (
    <section id="pricing" className="py-24 px-4 relative overflow-hidden">
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
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t('pricing.title', 'Nuestros')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-cyan-400">{t('pricing.titleHighlight', 'Planes')}</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('pricing.subtitle', 'Soluciones a medida para cada etapa de tu negocio')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`glass-effect rounded-2xl overflow-hidden ${plan.popular ? 'ring-2 ring-fuchsia-500 transform scale-105 md:-my-4' : ''}`}
            >
              {plan.popular && (
                <div className="bg-gradient-to-r from-fuchsia-500 to-purple-600 text-white text-sm font-semibold text-center py-2">
                  {t('pricing.mostPopular', 'Más popular')}
                </div>
              )}
              
              <div className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 mb-6">{plan.description}</p>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-gray-400 text-xl">{plan.currency}</span>
                    <span className={`text-5xl font-bold bg-gradient-to-r ${plan.color} bg-clip-text text-transparent`}>{plan.price}</span>
                    <span className="text-gray-400 text-sm">{plan.period}</span>
                  </div>
                </div>
                
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className={`flex-shrink-0 p-1 bg-gradient-to-r ${plan.color} rounded-full mt-1`}>
                        <CheckIcon className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-3 rounded-xl bg-gradient-to-r ${plan.color} text-white font-semibold flex items-center justify-center gap-2`}
                >
                  {plan.cta}
                  <ArrowRightIcon className="w-4 h-4" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-white">
            {t('pricing.customSolution', '¿Necesitas una solución personalizada?')} {' '}
            <a href="#contact" className="font-medium text-fuchsia-400 hover:text-fuchsia-300 underline">
              {t('pricing.contactUs', 'Contáctanos')}
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SynapsisPricing; 