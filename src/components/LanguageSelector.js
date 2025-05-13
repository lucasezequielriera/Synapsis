import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { GlobeAltIcon, ChevronDownIcon } from '@heroicons/react/24/outline';

const LanguageSelector = () => {
  const { language, changeLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'es', name: 'Español' },
    { code: 'en', name: 'English' }
  ];

  const currentLanguage = languages.find(lang => lang.code === language) || languages[0];

  const toggleDropdown = () => setIsOpen(!isOpen);
  const closeDropdown = () => setIsOpen(false);

  const handleLanguageSelect = (code) => {
    changeLanguage(code);
    closeDropdown();
  };

  return (
    <div className="fixed top-4 right-4 z-50">
      <motion.div 
        className="relative"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <motion.button
          className="glass-effect rounded-xl px-3 py-2 flex items-center space-x-2 hover-glow border border-transparent hover:border-fuchsia-500 transition-all duration-300"
          onClick={toggleDropdown}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="bg-gradient-to-r from-fuchsia-500 to-cyan-400 rounded-full p-1">
            <GlobeAltIcon className="h-4 w-4 text-white" />
          </div>
          <span className="text-white font-medium text-sm">{currentLanguage.name}</span>
          <ChevronDownIcon 
            className={`h-4 w-4 text-gray-300 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
          />
        </motion.button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="absolute right-0 mt-2 w-full glass-effect rounded-xl overflow-hidden shadow-lg border border-fuchsia-500/30"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              {languages.map((lang) => (
                <motion.button
                  key={lang.code}
                  className={`block w-full text-left px-4 py-2 text-sm transition-colors duration-200 
                              ${language === lang.code 
                                ? 'bg-gradient-to-r from-fuchsia-500/20 to-cyan-400/20 text-white' 
                                : 'text-gray-300 hover:bg-white/10'}`}
                  onClick={() => handleLanguageSelect(lang.code)}
                  whileHover={{ x: 5 }}
                >
                  {lang.name}
                </motion.button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default LanguageSelector; 