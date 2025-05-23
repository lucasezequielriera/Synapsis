import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router-dom';

const CookiePolicy = () => {
  const { t, language } = useLanguage();
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <Link 
            to="/"
            className="inline-flex items-center mb-8 text-gray-300 hover:text-white transition-colors"
          >
            <ArrowLeftIcon className="w-5 h-5 mr-2" />
            {language === 'en' ? 'Back to Home' : 'Volver al Inicio'}
          </Link>
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="glass-effect p-8 rounded-xl"
        >
          <motion.h1 
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-fuchsia-400 to-cyan-400 bg-clip-text text-transparent"
          >
            {language === 'en' ? 'Cookie Policy' : 'Política de Cookies'}
          </motion.h1>
          
          <motion.p variants={itemVariants} className="text-gray-300 mb-6">
            Last Updated: {new Date().toLocaleDateString()}
          </motion.p>
          
          <motion.div variants={itemVariants} className="space-y-6 text-gray-300">
            <div>
              <h2 className="text-xl font-semibold mb-3 text-white">
                {language === 'en' ? '1. Introduction' : '1. Introducción'}
              </h2>
              <p>
                {language === 'en' 
                  ? 'Synapsis Team LLC ("we," "our," or "us") uses cookies and similar technologies on our website. This Cookie Policy explains how we use cookies, how we share information with others, and your choices regarding our use of cookies. This policy should be read alongside our Privacy Policy which explains how we use personal information generally.'
                  : 'Synapsis Team LLC ("nosotros", "nuestro" o "nos") utiliza cookies y tecnologías similares en nuestro sitio web. Esta Política de Cookies explica cómo usamos cookies, cómo compartimos información con otros y sus opciones con respecto a nuestro uso de cookies. Esta política debe leerse junto con nuestra Política de Privacidad, que explica cómo usamos la información personal en general.'}
              </p>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold mb-3 text-white">
                {language === 'en' ? '2. What Are Cookies' : '2. Qué Son las Cookies'}
              </h2>
              <p>
                {language === 'en' 
                  ? 'Cookies are small text files that are stored on your computer or mobile device when you visit a website. They are widely used in order to make websites work, or work more efficiently, as well as to provide information to the owners of the site. Cookies allow a website to recognize your device and remember if you\'ve been to the website before.'
                  : 'Las cookies son pequeños archivos de texto que se almacenan en su computadora o dispositivo móvil cuando visita un sitio web. Se utilizan ampliamente para hacer que los sitios web funcionen, o funcionen de manera más eficiente, así como para proporcionar información a los propietarios del sitio. Las cookies permiten que un sitio web reconozca su dispositivo y recuerde si ha estado en el sitio web antes.'}
              </p>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold mb-3 text-white">
                {language === 'en' ? '3. Types of Cookies We Use' : '3. Tipos de Cookies que Utilizamos'}
              </h2>
              <p className="mb-3">
                {language === 'en' 
                  ? 'We use the following types of cookies on our website:'
                  : 'Utilizamos los siguientes tipos de cookies en nuestro sitio web:'}
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <span className="font-semibold">
                    {language === 'en' ? 'Essential Cookies: ' : 'Cookies Esenciales: '}
                  </span>
                  {language === 'en' 
                    ? 'These cookies are necessary for the website to function properly. They enable basic functions like page navigation and access to secure areas of the website. The website cannot function properly without these cookies.'
                    : 'Estas cookies son necesarias para que el sitio web funcione correctamente. Permiten funciones básicas como la navegación por páginas y el acceso a áreas seguras del sitio web. El sitio web no puede funcionar correctamente sin estas cookies.'}
                </li>
                <li>
                  <span className="font-semibold">
                    {language === 'en' ? 'Functional Cookies: ' : 'Cookies Funcionales: '}
                  </span>
                  {language === 'en' 
                    ? 'These cookies allow the website to remember choices you make (such as your username, language, or region) and provide enhanced, more personal features. They may also be used to provide services you have asked for.'
                    : 'Estas cookies permiten que el sitio web recuerde las elecciones que realiza (como su nombre de usuario, idioma o región) y proporciona funciones mejoradas y más personales. También pueden utilizarse para proporcionar servicios que haya solicitado.'}
                </li>
                <li>
                  <span className="font-semibold">
                    {language === 'en' ? 'Performance/Analytics Cookies: ' : 'Cookies de Rendimiento/Análisis: '}
                  </span>
                  {language === 'en' 
                    ? 'These cookies collect information about how visitors use a website, for instance which pages visitors go to most often. We use this information to improve our website and your browsing experience, as well as to help us run advertising campaigns that are tailored to your interests.'
                    : 'Estas cookies recopilan información sobre cómo los visitantes utilizan un sitio web, por ejemplo, qué páginas visitan con más frecuencia. Utilizamos esta información para mejorar nuestro sitio web y su experiencia de navegación, así como para ayudarnos a ejecutar campañas publicitarias adaptadas a sus intereses.'}
                </li>
                <li>
                  <span className="font-semibold">
                    {language === 'en' ? 'Targeting/Advertising Cookies: ' : 'Cookies de Segmentación/Publicidad: '}
                  </span>
                  {language === 'en' 
                    ? 'These cookies are used to deliver advertisements more relevant to you and your interests. They are also used to limit the number of times you see an advertisement as well as help measure the effectiveness of an advertising campaign.'
                    : 'Estas cookies se utilizan para entregar anuncios más relevantes para usted y sus intereses. También se utilizan para limitar el número de veces que ve un anuncio, así como para ayudar a medir la efectividad de una campaña publicitaria.'}
                </li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold mb-3 text-white">
                {language === 'en' ? '4. Specific Cookies We Use' : '4. Cookies Específicas que Utilizamos'}
              </h2>
              <p className="mb-3">
                {language === 'en' 
                  ? 'Below is a detailed list of the cookies we use on our website:'
                  : 'A continuación se muestra una lista detallada de las cookies que utilizamos en nuestro sitio web:'}
              </p>
              
              <div className="overflow-x-auto mb-4">
                <table className="min-w-full">
                  <thead>
                    <tr className="border-b border-gray-600">
                      <th className="px-4 py-2 text-left">
                        {language === 'en' ? 'Cookie Name' : 'Nombre de Cookie'}
                      </th>
                      <th className="px-4 py-2 text-left">
                        {language === 'en' ? 'Purpose' : 'Propósito'}
                      </th>
                      <th className="px-4 py-2 text-left">
                        {language === 'en' ? 'Type' : 'Tipo'}
                      </th>
                      <th className="px-4 py-2 text-left">
                        {language === 'en' ? 'Duration' : 'Duración'}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-700">
                      <td className="px-4 py-2">_syn_csrf</td>
                      <td className="px-4 py-2">
                        {language === 'en' 
                          ? 'Used for security purposes to prevent CSRF attacks'
                          : 'Utilizado con fines de seguridad para prevenir ataques CSRF'}
                      </td>
                      <td className="px-4 py-2">
                        {language === 'en' ? 'Essential' : 'Esencial'}
                      </td>
                      <td className="px-4 py-2">
                        {language === 'en' ? 'Session' : 'Sesión'}
                      </td>
                    </tr>
                    <tr className="border-b border-gray-700">
                      <td className="px-4 py-2">_syn_session</td>
                      <td className="px-4 py-2">
                        {language === 'en' 
                          ? 'Maintains user session data'
                          : 'Mantiene datos de sesión de usuario'}
                      </td>
                      <td className="px-4 py-2">
                        {language === 'en' ? 'Essential' : 'Esencial'}
                      </td>
                      <td className="px-4 py-2">
                        {language === 'en' ? 'Session' : 'Sesión'}
                      </td>
                    </tr>
                    <tr className="border-b border-gray-700">
                      <td className="px-4 py-2">_syn_language</td>
                      <td className="px-4 py-2">
                        {language === 'en' 
                          ? 'Stores user language preference'
                          : 'Almacena la preferencia de idioma del usuario'}
                      </td>
                      <td className="px-4 py-2">
                        {language === 'en' ? 'Functional' : 'Funcional'}
                      </td>
                      <td className="px-4 py-2">1 {language === 'en' ? 'year' : 'año'}</td>
                    </tr>
                    <tr className="border-b border-gray-700">
                      <td className="px-4 py-2">_ga</td>
                      <td className="px-4 py-2">
                        {language === 'en' 
                          ? 'Google Analytics - Used to distinguish users'
                          : 'Google Analytics - Utilizado para distinguir usuarios'}
                      </td>
                      <td className="px-4 py-2">
                        {language === 'en' ? 'Analytics' : 'Analítica'}
                      </td>
                      <td className="px-4 py-2">2 {language === 'en' ? 'years' : 'años'}</td>
                    </tr>
                    <tr className="border-b border-gray-700">
                      <td className="px-4 py-2">_gid</td>
                      <td className="px-4 py-2">
                        {language === 'en' 
                          ? 'Google Analytics - Used to distinguish users'
                          : 'Google Analytics - Utilizado para distinguir usuarios'}
                      </td>
                      <td className="px-4 py-2">
                        {language === 'en' ? 'Analytics' : 'Analítica'}
                      </td>
                      <td className="px-4 py-2">24 {language === 'en' ? 'hours' : 'horas'}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold mb-3 text-white">
                {language === 'en' ? '5. Third-Party Cookies' : '5. Cookies de Terceros'}
              </h2>
              <p>
                {language === 'en' 
                  ? 'Some cookies are placed by third parties on our website. These third parties may include analytics providers (like Google Analytics), social media platforms, and advertising networks. These third parties may use cookies, web beacons, and similar technologies to collect information about your use of our website and other websites. This information may be used by them to serve advertisements that they believe are most likely to be of interest to you based on content you have viewed.'
                  : 'Algunas cookies son colocadas por terceros en nuestro sitio web. Estos terceros pueden incluir proveedores de análisis (como Google Analytics), plataformas de redes sociales y redes publicitarias. Estos terceros pueden usar cookies, balizas web y tecnologías similares para recopilar información sobre su uso de nuestro sitio web y otros sitios web. Esta información puede ser utilizada por ellos para mostrarle anuncios que creen que son más probables que sean de su interés en función del contenido que ha visto.'}
              </p>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold mb-3 text-white">
                {language === 'en' ? '6. Your Choices Regarding Cookies' : '6. Sus Opciones Respecto a las Cookies'}
              </h2>
              <p className="mb-3">
                {language === 'en' 
                  ? 'You can choose to have your computer warn you each time a cookie is being sent, or you can choose to turn off all cookies through your browser settings. Since each browser is a little different, look at your browser\'s Help Menu to learn the correct way to modify your cookies.'
                  : 'Puede elegir que su computadora le avise cada vez que se envía una cookie, o puede optar por desactivar todas las cookies a través de la configuración de su navegador. Dado que cada navegador es un poco diferente, consulte el Menú de Ayuda de su navegador para conocer la forma correcta de modificar sus cookies.'}
              </p>
              <p className="mb-3">
                {language === 'en' 
                  ? 'If you disable cookies, some features that make your site experience more efficient may not function properly.'
                  : 'Si deshabilita las cookies, es posible que algunas funciones que hacen que su experiencia en el sitio sea más eficiente no funcionen correctamente.'}
              </p>
              <p>
                {language === 'en' 
                  ? 'Instructions for managing cookies in the most common browsers are available at:'
                  : 'Las instrucciones para administrar cookies en los navegadores más comunes están disponibles en:'}
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>
                  <a href="https://support.google.com/chrome/answer/95647" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-fuchsia-400 hover:text-cyan-400 transition-colors"
                  >
                    {language === 'en' ? 'Google Chrome' : 'Google Chrome'}
                  </a>
                </li>
                <li>
                  <a href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-fuchsia-400 hover:text-cyan-400 transition-colors"
                  >
                    {language === 'en' ? 'Mozilla Firefox' : 'Mozilla Firefox'}
                  </a>
                </li>
                <li>
                  <a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-fuchsia-400 hover:text-cyan-400 transition-colors"
                  >
                    {language === 'en' ? 'Apple Safari' : 'Apple Safari'}
                  </a>
                </li>
                <li>
                  <a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-fuchsia-400 hover:text-cyan-400 transition-colors"
                  >
                    {language === 'en' ? 'Microsoft Edge' : 'Microsoft Edge'}
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold mb-3 text-white">
                {language === 'en' ? '7. Cookie Consent' : '7. Consentimiento de Cookies'}
              </h2>
              <p>
                {language === 'en' 
                  ? 'When you first visit our website, you will be shown a cookie banner requesting your consent to set non-essential cookies. By clicking "Accept All Cookies" or continuing to browse the site, you are agreeing to our use of cookies as described in this policy. If you do not agree to our use of cookies, you should set your browser settings accordingly or not use the website.'
                  : 'Cuando visite nuestro sitio web por primera vez, se le mostrará un banner de cookies solicitando su consentimiento para establecer cookies no esenciales. Al hacer clic en "Aceptar todas las cookies" o continuar navegando por el sitio, está aceptando nuestro uso de cookies como se describe en esta política. Si no está de acuerdo con nuestro uso de cookies, debe configurar la configuración de su navegador en consecuencia o no utilizar el sitio web.'}
              </p>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold mb-3 text-white">
                {language === 'en' ? '8. Changes to Our Cookie Policy' : '8. Cambios en Nuestra Política de Cookies'}
              </h2>
              <p>
                {language === 'en' 
                  ? 'We may update our Cookie Policy from time to time. We will notify you of any changes by posting the new Cookie Policy on this page and updating the "Last Updated" date at the top of this policy. You are advised to review this Cookie Policy periodically for any changes.'
                  : 'Podemos actualizar nuestra Política de Cookies de vez en cuando. Le notificaremos cualquier cambio publicando la nueva Política de Cookies en esta página y actualizando la fecha de "Última Actualización" en la parte superior de esta política. Se le recomienda revisar esta Política de Cookies periódicamente para detectar cualquier cambio.'}
              </p>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold mb-3 text-white">
                {language === 'en' ? '9. Contact Us' : '9. Contáctenos'}
              </h2>
              <p>
                {language === 'en' 
                  ? 'If you have any questions about our Cookie Policy, please contact us at account@synapsis.team.'
                  : 'Si tiene alguna pregunta sobre nuestra Política de Cookies, contáctenos en account@synapsis.team.'}
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default CookiePolicy; 