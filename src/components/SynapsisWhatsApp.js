// src/components/SynapsisWhatsApp.js
import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const SynapsisWhatsApp = () => {
  const { t } = useLanguage();
  
  return (
    <motion.a
      href="https://wa.me/525512345678"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-50 bg-gradient-to-br from-[#25D366] via-[#128C7E] to-[#075E54] p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
    >
      {/* Nuevo icono de WhatsApp más moderno */}
      <div className="relative">
        <svg
          className="w-8 h-8 text-white"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 2C6.48 2 2 6.48 2 12C2 13.82 2.5 15.53 3.35 17L2 22L7 20.65C8.47 21.5 10.18 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM16.57 15.43C16.37 16.38 15.59 17.16 14.64 17.36C13.69 17.56 12.5 17.5 11.5 17.5C9.5 17.5 7.5 16.5 6.5 15.5C5.5 14.5 4.5 12.5 4.5 10.5C4.5 9.5 4.44 8.31 4.64 7.36C4.84 6.41 5.62 5.63 6.57 5.43C6.87 5.37 7.17 5.5 7.37 5.75L8.5 7.25C8.7 7.5 8.7 7.87 8.5 8.12L8.25 8.5C8.25 8.5 8 8.87 8 9.5C8 10.13 8.5 11.5 9.5 12.5C10.5 13.5 11.87 14 12.5 14C13.13 14 13.5 13.75 13.5 13.75L13.88 13.5C14.13 13.3 14.5 13.3 14.75 13.5L16.25 14.63C16.5 14.83 16.63 15.13 16.57 15.43Z"
            fill="currentColor"
          />
          {/* Efecto de brillo */}
          <path
            d="M12 2C6.48 2 2 6.48 2 12C2 13.82 2.5 15.53 3.35 17L2 22L7 20.65C8.47 21.5 10.18 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM16.57 15.43C16.37 16.38 15.59 17.16 14.64 17.36C13.69 17.56 12.5 17.5 11.5 17.5C9.5 17.5 7.5 16.5 6.5 15.5C5.5 14.5 4.5 12.5 4.5 10.5C4.5 9.5 4.44 8.31 4.64 7.36C4.84 6.41 5.62 5.63 6.57 5.43C6.87 5.37 7.17 5.5 7.37 5.75L8.5 7.25C8.7 7.5 8.7 7.87 8.5 8.12L8.25 8.5C8.25 8.5 8 8.87 8 9.5C8 10.13 8.5 11.5 9.5 12.5C10.5 13.5 11.87 14 12.5 14C13.13 14 13.5 13.75 13.5 13.75L13.88 13.5C14.13 13.3 14.5 13.3 14.75 13.5L16.25 14.63C16.5 14.83 16.63 15.13 16.57 15.43Z"
            fill="url(#gradient)"
            fillOpacity="0.3"
          />
          <defs>
            <linearGradient
              id="gradient"
              x1="2"
              y1="2"
              x2="22"
              y2="22"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FFFFFF" />
              <stop offset="1" stopColor="#FFFFFF" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
        {/* Efecto de pulso */}
        <motion.div
          className="absolute inset-0 rounded-full bg-white"
          initial={{ scale: 1, opacity: 0.5 }}
          animate={{ scale: 1.5, opacity: 0 }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "loop"
          }}
        />
      </div>

      {/* Tooltip mejorado */}
      <div className="absolute right-16 top-1/2 -translate-y-1/2 bg-gradient-to-r from-gray-900 to-gray-800 text-white px-4 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        <div className="flex items-center space-x-2">
          <span>{t('whatsapp.tooltip', '¡Hablemos por WhatsApp!')}</span>
          <motion.span
            animate={{ x: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            →
          </motion.span>
        </div>
      </div>
    </motion.a>
  );
};

export default SynapsisWhatsApp;