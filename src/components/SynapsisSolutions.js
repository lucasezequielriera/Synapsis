// src/components/SynapsisSolutions.js
import React from 'react';
import { motion } from 'framer-motion';
import { 
  BeakerIcon, 
  CommandLineIcon, 
  CubeIcon, 
  ServerIcon,
  ChartPieIcon,
  CogIcon,
  ArrowLongRightIcon
} from '@heroicons/react/24/outline';
import { useLanguage } from '../context/LanguageContext';

const SynapsisSolutions = () => {
  const { t } = useLanguage();
  
  const solutions = [
    {
      titleKey: "solutions.ai.title",
      descriptionKey: "solutions.ai.description",
      icon: <BeakerIcon className="w-full h-full" />,
      gradient: "from-fuchsia-500 to-cyan-400",
      features: ["Análisis Predictivo", "NLP", "Computer Vision", "Deep Learning"]
    },
    {
      titleKey: "solutions.automation.title",
      descriptionKey: "solutions.automation.description",
      icon: <CommandLineIcon className="w-full h-full" />,
      gradient: "from-cyan-400 to-blue-500",
      features: ["RPA", "Workflow Automation", "Task Scheduling", "Process Optimization"]
    },
    {
      titleKey: "solutions.systems.title",
      descriptionKey: "solutions.systems.description",
      icon: <CubeIcon className="w-full h-full" />,
      gradient: "from-blue-500 to-indigo-500",
      features: ["ERP", "CRM", "BPM", "Custom Software"]
    },
    {
      titleKey: "solutions.cloud.title",
      descriptionKey: "solutions.cloud.description",
      icon: <ServerIcon className="w-full h-full" />,
      gradient: "from-indigo-500 to-purple-500",
      features: ["AWS", "Azure", "GCP", "Hybrid Cloud"]
    },
    {
      titleKey: "solutions.bi.title",
      descriptionKey: "solutions.bi.description",
      icon: <ChartPieIcon className="w-full h-full" />,
      gradient: "from-purple-500 to-pink-500",
      features: ["Data Analytics", "Dashboards", "Reports", "KPI Tracking"]
    },
    {
      titleKey: "solutions.devops.title",
      descriptionKey: "solutions.devops.description",
      icon: <CogIcon className="w-full h-full" />,
      gradient: "from-pink-500 to-rose-500",
      features: ["CI/CD", "Containerization", "Monitoring", "Automated Testing"]
    }
  ];

  // Variantes para animaciones
  const fadeInUpVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1, 
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.7,
        ease: [0.6, 0.05, 0.01, 0.9]
      }
    })
  };

  const line = {
    hidden: { height: 0 },
    visible: { 
      height: "100%",
      transition: { 
        duration: 1.5,
        ease: "easeInOut"
      }
    }
  };

  const circle = {
    hidden: { scale: 0, opacity: 0 },
    visible: (i) => ({
      scale: 1,
      opacity: 1,
      transition: {
        delay: i * 0.2 + 0.3,
        duration: 0.5
      }
    })
  };

  return (
    <section id="solutions" className="py-24 px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 grid-pattern opacity-10" />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-purple-500/10 to-transparent" />
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-fuchsia-500/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold uppercase tracking-wide rounded-full glass-effect border border-white/10 text-fuchsia-400">
            {t('solutions.label', 'Ruta Tecnológica')}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t('solutions.title')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-cyan-400">{t('solutions.titleHighlight', 'Tecnológicas')}</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('solutions.subtitle')}
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Línea vertical central */}
          <motion.div 
            className="absolute left-1/2 top-0 bottom-0 w-1 -ml-0.5 bg-gradient-to-b from-fuchsia-500 via-cyan-400 to-indigo-600 hidden md:block"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={line}
          ></motion.div>

          {/* Timeline Items */}
          <div className="relative z-10">
            {solutions.map((solution, index) => {
              const isEven = index % 2 === 0;
              return (
            <motion.div
              key={index}
                  className={`flex flex-col md:flex-row items-center relative mb-20 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
              viewport={{ once: true }}
                  variants={fadeInUpVariant}
                >
                  {/* Dot on timeline */}
                  <motion.div 
                    className={`absolute left-1/2 -ml-3 w-6 h-6 rounded-full ${isEven ? 'bg-gradient-to-r from-fuchsia-500 to-cyan-400' : 'bg-gradient-to-r from-cyan-400 to-indigo-500'} z-20 flex items-center justify-center hidden md:flex`}
                    custom={index}
                    variants={circle}
                  >
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </motion.div>

                  {/* Content */}
                  <div className={`md:w-1/2 ${isEven ? 'md:pr-20' : 'md:pl-20'} w-full`}>
                    <motion.div 
                      className={`glass-effect rounded-2xl p-6 border border-white/5 hover:border-${solution.gradient.split('-')[1]}/30 transition-all duration-300`}
                      whileHover={{ y: -5, x: isEven ? -5 : 5, transition: { type: "spring", stiffness: 300 } }}
                    >
                      <div className="flex items-start gap-4">
                        {/* Icon */}
                        <div className={`w-16 h-16 shrink-0 rounded-2xl bg-gradient-to-br ${solution.gradient} flex items-center justify-center p-3 shadow-lg`}>
                          <motion.div 
                            className="text-white"
                            whileHover={{ rotate: 10, scale: 1.1 }}
                          >
                  {solution.icon}
                          </motion.div>
                </div>

                        {/* Text Content */}
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-white mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                            {t(solution.titleKey, solution.title)}
                          </h3>
                          <p className="text-sm text-gray-300 mb-4">
                            {t(solution.descriptionKey, solution.description)}
                          </p>
                          
                          {/* Features */}
                          <div className="flex flex-wrap gap-2 mb-4">
                {solution.features.map((feature, idx) => (
                  <span
                    key={idx}
                                className={`px-2.5 py-1 text-xs font-medium rounded-full 
                                  bg-gradient-to-r ${solution.gradient} bg-opacity-10 backdrop-blur-sm 
                                  text-white shadow-sm border border-white/10`}
                  >
                    {feature}
                  </span>
                ))}
              </div>
                          
                          {/* Action Button */}
              <motion.button
                            whileHover={{ scale: 1.02, x: 5 }}
                            whileTap={{ scale: 0.98 }}
                            className={`py-1.5 px-3 rounded-lg bg-gradient-to-r ${solution.gradient} bg-opacity-20 
                                        text-white text-sm font-medium flex items-center gap-1.5 group/button w-fit
                                        hover:shadow-lg hover:shadow-${solution.gradient.split('-')[1]}/20`}
                          >
                            <span>{t('solutions.explore')}</span>
                            <ArrowLongRightIcon className="w-4 h-4 group-hover/button:translate-x-1 transition-transform" />
              </motion.button>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Connection Line for Mobile */}
                  <div className="h-14 w-1 bg-gradient-to-b from-fuchsia-400 to-cyan-500 my-2 block md:hidden"></div>
            </motion.div>
              );
            })}
          </div>
        </div>
        
        {/* Destination Point */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-8 text-center relative"
        >
          <div className="absolute left-1/2 -top-12 transform -translate-x-1/2 w-10 h-10 bg-gradient-to-r from-fuchsia-500 to-indigo-500 rounded-full flex items-center justify-center shadow-lg shadow-fuchsia-500/20 hidden md:flex">
            <div className="w-6 h-6 bg-white/20 rounded-full backdrop-blur-sm flex items-center justify-center">
              <div className="w-3 h-3 bg-white rounded-full"></div>
            </div>
          </div>
          
          <a 
            href="#contact" 
            className="inline-flex items-center px-6 py-3 rounded-xl glass-effect border border-fuchsia-500/30 hover:border-fuchsia-500/80 transition-all hover:shadow-lg hover:shadow-fuchsia-500/20 group"
          >
            <span className="font-semibold bg-gradient-to-r from-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
              {t('solutions.contactUs', 'Solicitar consultoría tecnológica')}
            </span>
            <ArrowLongRightIcon className="w-5 h-5 ml-2 text-fuchsia-400 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default SynapsisSolutions;