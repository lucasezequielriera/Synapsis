// src/components/SynapsisFooter.js
import React from 'react';
import { motion } from 'framer-motion';
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  GlobeAltIcon,
  DocumentTextIcon,
  UserGroupIcon,
  CodeBracketIcon,
  ServerIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';
import { useLanguage } from '../context/LanguageContext';

const SynapsisFooter = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-white py-16 px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 grid-pattern opacity-10" />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-purple-500/10 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"> */}
          {/* Company Info */}
          {/* <div>
            <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
              Synapsis
            </h3>
            <p className="text-gray-400 mb-6">
              {t('footer.companyDescription')}
            </p>
            <div className="flex space-x-4">
              {['twitter', 'linkedin', 'github', 'facebook'].map((social) => (
                <motion.a
                  key={social}
                  href={`https://${social}.com`}
                  whileHover={{ y: -3 }}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition"
                >
                  <span className="sr-only">{social}</span>
                  <GlobeAltIcon className="w-5 h-5 text-white" />
                </motion.a>
              ))}
            </div>
          </div> */}

          {/* Quick Links */}
          {/* <div>
            <h4 className="text-lg font-semibold mb-6">{t('footer.quickLinks')}</h4>
            <ul className="space-y-4">
              {[
                { name: t('footer.link.home'), href: '#' },
                { name: t('footer.link.services'), href: '#servicios' },
                { name: t('footer.link.solutions'), href: '#soluciones' },
                { name: t('footer.link.cases'), href: '#casos' },
                { name: t('footer.link.contact'), href: '#contacto' }
              ].map((link) => (
                <li key={link.name}>
                  <motion.a
                    href={link.href}
                    whileHover={{ x: 5 }}
                    className="text-gray-400 hover:text-white transition flex items-center"
                  >
                    <ArrowRightIcon className="w-4 h-4 mr-2" />
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div> */}

          {/* Services */}
          {/* <div>
            <h4 className="text-lg font-semibold mb-6">{t('footer.services')}</h4>
            <ul className="space-y-4">
              {[
                { name: t('footer.service.ai'), icon: <CodeBracketIcon className="w-5 h-5" /> },
                { name: t('footer.service.automation'), icon: <ServerIcon className="w-5 h-5" /> },
                { name: t('footer.service.enterprise'), icon: <DocumentTextIcon className="w-5 h-5" /> },
                { name: t('footer.service.consulting'), icon: <UserGroupIcon className="w-5 h-5" /> }
              ].map((service) => (
                <li key={service.name}>
                  <motion.a
                    href="#"
                    whileHover={{ x: 5 }}
                    className="text-gray-400 hover:text-white transition flex items-center"
                  >
                    {service.icon}
                    <span className="ml-2">{service.name}</span>
                  </motion.a>
                </li>
              ))}
            </ul>
          </div> */}

          {/* Contact */}
          {/* <div>
            <h4 className="text-lg font-semibold mb-6">{t('footer.contact')}</h4>
            <ul className="space-y-4">
              <li className="flex items-center text-gray-400">
                <EnvelopeIcon className="w-5 h-5 mr-3" />
                contacto@synapsis.com
              </li>
              <li className="flex items-center text-gray-400">
                <PhoneIcon className="w-5 h-5 mr-3" />
                +52 55 1234 5678
              </li>
              <li className="flex items-center text-gray-400">
                <MapPinIcon className="w-5 h-5 mr-3" />
                CDMX, México
              </li>
            </ul>
          </div>
        </div> */}

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              {t('footer.rights')}
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-500 hover:text-white text-sm">{t('footer.privacy')}</a>
              <a href="#" className="text-gray-500 hover:text-white text-sm">{t('footer.terms')}</a>
              <a href="#" className="text-gray-500 hover:text-white text-sm">{t('footer.cookies')}</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SynapsisFooter;