import React from 'react';
import { motion } from 'framer-motion';
import logoSynapsis from '../assets/synapsis_isotipo.svg';

const SynapsisLogo = () => {
  return (
    <div className="fixed top-4 left-4 z-50">
      <motion.a 
        href="#" 
        className="block glass-effect rounded-xl p-1.5 border border-transparent hover:border-fuchsia-500 transition-all duration-300"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <img 
          src={logoSynapsis} 
          alt="Synapsis Logo" 
          className="h-8 w-auto object-contain"
        />
      </motion.a>
    </div>
  );
};

export default SynapsisLogo;