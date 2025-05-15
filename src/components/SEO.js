import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../context/LanguageContext';

/**
 * Reusable SEO component for Synapsis marketing site.
 * Allows overriding of title/description and injection of structured data.
 */
const SEO = ({
  title = 'Synapsis | Transformación Digital & IA',
  description = 'Plataforma de desarrollo y automatización para acelerar tu negocio con Inteligencia Artificial.',
  url = 'https://synapsis.com',
  image = 'https://synapsis.com/og-image.png',
  structuredData = null,
  children
}) => {
  const { language } = useLanguage();
  const localeMap = {
    es: 'es_ES',
    en: 'en_US',
    fr: 'fr_FR',
    de: 'de_DE'
  };
  const locale = localeMap[language] || 'es_ES';

  return (
    <Helmet htmlAttributes={{ lang: language || 'es' }}>
      <title>{title}</title>
      <meta name="description" content={description} />
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:locale" content={locale} />
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      {/* Theme & manifest */}
      <meta name="theme-color" content="#8B5CF6" />
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
      {children}
    </Helmet>
  );
};

export default SEO; 