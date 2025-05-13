import React, { createContext, useState, useContext, useCallback } from 'react';

// Esta función intentará importar dinámicamente los archivos de traducción
// Nota: Esta es una implementación básica. Los archivos de traducción deben estar en src/translations/
const loadTranslations = async (language) => {
  try {
    // Importación dinámica del archivo de traducciones
    const translations = await import(`../translations/${language}.js`);
    return translations.default;
  } catch (error) {
    console.error(`Error loading translations for ${language}:`, error);
    // Si falla, retornamos un objeto vacío para evitar errores
    return {};
  }
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('es');
  const [translations, setTranslations] = useState({});

  // Función para cambiar el idioma
  const changeLanguage = useCallback(async (newLanguage) => {
    setLanguage(newLanguage);
    // Cargar las traducciones para el nuevo idioma
    const newTranslations = await loadTranslations(newLanguage);
    setTranslations(newTranslations);
  }, []);

  // Cargar las traducciones iniciales
  React.useEffect(() => {
    const initTranslations = async () => {
      const initialTranslations = await loadTranslations(language);
      setTranslations(initialTranslations);
    };
    
    initTranslations();
  }, []);

  // Función para traducir un texto
  const t = useCallback((key) => {
    // Si la clave existe en las traducciones, la retornamos
    if (translations && translations[key]) {
      return translations[key];
    }
    // Si no, retornamos la clave como fallback
    return key;
  }, [translations]);

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}; 