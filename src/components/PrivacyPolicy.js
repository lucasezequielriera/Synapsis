import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
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
            {language === 'en' ? 'Privacy Policy' : 'Política de Privacidad'}
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
                  ? 'Synapsis Team LLC ("we," "our," or "us") respects your privacy and is committed to protecting it through our compliance with this policy. This Privacy Policy describes the types of information we may collect from you or that you may provide when you visit our website and our practices for collecting, using, maintaining, protecting, and disclosing that information.'
                  : 'Synapsis Team LLC ("nosotros", "nuestro" o "nos") respeta su privacidad y se compromete a protegerla mediante el cumplimiento de esta política. Esta Política de Privacidad describe los tipos de información que podemos recopilar de usted o que usted puede proporcionar cuando visita nuestro sitio web y nuestras prácticas para recopilar, usar, mantener, proteger y divulgar esa información.'}
              </p>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold mb-3 text-white">
                {language === 'en' ? '2. Information We Collect' : '2. Información que Recopilamos'}
              </h2>
              <p className="mb-3">
                {language === 'en' 
                  ? 'We collect several types of information from and about users of our website, including information:'
                  : 'Recopilamos varios tipos de información de y sobre los usuarios de nuestro sitio web, incluyendo información:'}
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  {language === 'en' 
                    ? 'By which you may be personally identified, such as name, postal address, e-mail address, telephone number, or any other identifier by which you may be contacted online or offline ("personal information").'
                    : 'Por la cual usted puede ser identificado personalmente, como nombre, dirección postal, dirección de correo electrónico, número de teléfono o cualquier otro identificador por el cual se le pueda contactar en línea o fuera de línea ("información personal").'}
                </li>
                <li>
                  {language === 'en' 
                    ? 'About your internet connection, the equipment you use to access our Website, and usage details.'
                    : 'Sobre su conexión a Internet, el equipo que utiliza para acceder a nuestro sitio web y detalles de uso.'}
                </li>
                <li>
                  {language === 'en' 
                    ? 'That is about you but individually does not identify you, such as job title or industry.'
                    : 'Que es sobre usted pero individualmente no lo identifica, como el cargo o la industria.'}
                </li>
                <li>
                  {language === 'en' 
                    ? 'Professional and employment-related information when you use our human resources services.'
                    : 'Información profesional y relacionada con el empleo cuando utiliza nuestros servicios de recursos humanos.'}
                </li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold mb-3 text-white">
                {language === 'en' ? '3. How We Collect Information' : '3. Cómo Recopilamos Información'}
              </h2>
              <p className="mb-3">
                {language === 'en' 
                  ? 'We collect this information:'
                  : 'Recopilamos esta información:'}
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  {language === 'en' 
                    ? 'Directly from you when you provide it to us through forms, applications, or other interactions with our website.'
                    : 'Directamente de usted cuando nos la proporciona a través de formularios, aplicaciones u otras interacciones con nuestro sitio web.'}
                </li>
                <li>
                  {language === 'en' 
                    ? 'Automatically as you navigate through the site. Information collected automatically may include usage details, IP addresses, and information collected through cookies.'
                    : 'Automáticamente mientras navega por el sitio. La información recopilada automáticamente puede incluir detalles de uso, direcciones IP e información recopilada a través de cookies.'}
                </li>
                <li>
                  {language === 'en' 
                    ? 'From third-party sources, for example, our business partners or service providers.'
                    : 'De fuentes de terceros, por ejemplo, nuestros socios comerciales o proveedores de servicios.'}
                </li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold mb-3 text-white">
                {language === 'en' ? '4. How We Use Your Information' : '4. Cómo Usamos Su Información'}
              </h2>
              <p className="mb-3">
                {language === 'en' 
                  ? 'We use information that we collect about you or that you provide to us, including any personal information:'
                  : 'Utilizamos la información que recopilamos sobre usted o que usted nos proporciona, incluida cualquier información personal:'}
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  {language === 'en' 
                    ? 'To present our website and its contents to you.'
                    : 'Para presentarle nuestro sitio web y su contenido.'}
                </li>
                <li>
                  {language === 'en' 
                    ? 'To provide you with information, products, or services that you request from us.'
                    : 'Para proporcionarle información, productos o servicios que nos solicite.'}
                </li>
                <li>
                  {language === 'en' 
                    ? 'To fulfill any other purpose for which you provide it.'
                    : 'Para cumplir cualquier otro propósito para el que lo proporcione.'}
                </li>
                <li>
                  {language === 'en' 
                    ? 'To provide human resources services, including recruitment, employee management, payroll processing, and benefits administration.'
                    : 'Para proporcionar servicios de recursos humanos, incluido el reclutamiento, la gestión de empleados, el procesamiento de nóminas y la administración de beneficios.'}
                </li>
                <li>
                  {language === 'en' 
                    ? 'To improve our website and user experience.'
                    : 'Para mejorar nuestro sitio web y la experiencia del usuario.'}
                </li>
                <li>
                  {language === 'en' 
                    ? 'For any other purpose with your consent.'
                    : 'Para cualquier otro propósito con su consentimiento.'}
                </li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold mb-3 text-white">
                {language === 'en' ? '5. Disclosure of Your Information' : '5. Divulgación de Su Información'}
              </h2>
              <p className="mb-3">
                {language === 'en' 
                  ? 'We may disclose aggregated information about our users, and information that does not identify any individual, without restriction. We may disclose personal information that we collect or you provide as described in this privacy policy:'
                  : 'Podemos divulgar información agregada sobre nuestros usuarios e información que no identifica a ningún individuo, sin restricciones. Podemos divulgar información personal que recopilamos o que usted proporciona como se describe en esta política de privacidad:'}
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  {language === 'en' 
                    ? 'To our subsidiaries and affiliates.'
                    : 'A nuestras subsidiarias y afiliadas.'}
                </li>
                <li>
                  {language === 'en' 
                    ? 'To contractors, service providers, and other third parties we use to support our business and who are bound by contractual obligations to keep personal information confidential and use it only for the purposes for which we disclose it to them.'
                    : 'A contratistas, proveedores de servicios y otros terceros que utilizamos para respaldar nuestro negocio y que están obligados por obligaciones contractuales a mantener la información personal confidencial y utilizarla solo para los fines para los que se la revelamos.'}
                </li>
                <li>
                  {language === 'en' 
                    ? 'To a buyer or other successor in the event of a merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of our assets.'
                    : 'A un comprador u otro sucesor en caso de una fusión, desinversión, reestructuración, reorganización, disolución u otra venta o transferencia de algunos o todos nuestros activos.'}
                </li>
                <li>
                  {language === 'en' 
                    ? 'To fulfill the purpose for which you provide it.'
                    : 'Para cumplir el propósito para el que lo proporciona.'}
                </li>
                <li>
                  {language === 'en' 
                    ? 'For any other purpose disclosed by us when you provide the information.'
                    : 'Para cualquier otro propósito revelado por nosotros cuando proporciona la información.'}
                </li>
                <li>
                  {language === 'en' 
                    ? 'With your consent.'
                    : 'Con su consentimiento.'}
                </li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold mb-3 text-white">
                {language === 'en' ? '6. Data Security' : '6. Seguridad de Datos'}
              </h2>
              <p>
                {language === 'en' 
                  ? 'We have implemented measures designed to secure your personal information from accidental loss and from unauthorized access, use, alteration, and disclosure. All information you provide to us is stored on secure servers behind firewalls. Unfortunately, the transmission of information via the internet is not completely secure. Although we do our best to protect your personal information, we cannot guarantee the security of your personal information transmitted to our Website. Any transmission of personal information is at your own risk.'
                  : 'Hemos implementado medidas diseñadas para proteger su información personal contra pérdidas accidentales y contra accesos, usos, alteraciones y divulgaciones no autorizados. Toda la información que nos proporciona se almacena en servidores seguros detrás de firewalls. Desafortunadamente, la transmisión de información a través de Internet no es completamente segura. Aunque hacemos todo lo posible para proteger su información personal, no podemos garantizar la seguridad de su información personal transmitida a nuestro sitio web. Cualquier transmisión de información personal es bajo su propio riesgo.'}
              </p>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold mb-3 text-white">
                {language === 'en' ? '7. Data Retention' : '7. Retención de Datos'}
              </h2>
              <p>
                {language === 'en' 
                  ? 'We will retain your personal information for as long as necessary to fulfill the purposes for which we collected it, including for the purposes of satisfying any legal, accounting, or reporting requirements. To determine the appropriate retention period for personal information, we consider the amount, nature, and sensitivity of the personal information, the potential risk of harm from unauthorized use or disclosure, the purposes for which we process your personal information, and applicable legal requirements.'
                  : 'Conservaremos su información personal durante el tiempo que sea necesario para cumplir con los fines para los que la recopilamos, incluidos los fines de satisfacer cualquier requisito legal, contable o de informes. Para determinar el período de retención apropiado para la información personal, consideramos la cantidad, naturaleza y sensibilidad de la información personal, el riesgo potencial de daño por uso o divulgación no autorizados, los fines para los que procesamos su información personal y los requisitos legales aplicables.'}
              </p>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold mb-3 text-white">
                {language === 'en' ? '8. Your Rights and Choices' : '8. Sus Derechos y Opciones'}
              </h2>
              <p>
                {language === 'en' 
                  ? 'You have certain rights regarding the personal information we maintain about you. These include the right to request access to your personal information, to request correction of inaccurate data, to request the deletion or restriction of your personal information, and, if applicable, to request data portability. To exercise these rights, please contact us using the information provided at the end of this policy.'
                  : 'Usted tiene ciertos derechos con respecto a la información personal que mantenemos sobre usted. Estos incluyen el derecho a solicitar acceso a su información personal, solicitar la corrección de datos inexactos, solicitar la eliminación o restricción de su información personal y, si corresponde, solicitar la portabilidad de datos. Para ejercer estos derechos, póngase en contacto con nosotros utilizando la información proporcionada al final de esta política.'}
              </p>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold mb-3 text-white">
                {language === 'en' ? '9. Changes to Our Privacy Policy' : '9. Cambios en Nuestra Política de Privacidad'}
              </h2>
              <p>
                {language === 'en' 
                  ? 'It is our policy to post any changes we make to our privacy policy on this page. If we make material changes to how we treat our users\' personal information, we will notify you through a notice on the Website home page. The date the privacy policy was last revised is identified at the top of the page. You are responsible for periodically visiting our Website and this privacy policy to check for any changes.'
                  : 'Es nuestra política publicar cualquier cambio que hagamos en nuestra política de privacidad en esta página. Si realizamos cambios materiales en la forma en que tratamos la información personal de nuestros usuarios, se lo notificaremos a través de un aviso en la página de inicio del sitio web. La fecha en que se revisó por última vez la política de privacidad se identifica en la parte superior de la página. Usted es responsable de visitar periódicamente nuestro sitio web y esta política de privacidad para verificar si hay cambios.'}
              </p>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold mb-3 text-white">
                {language === 'en' ? '10. Contact Information' : '10. Información de Contacto'}
              </h2>
              <p>
                {language === 'en' 
                  ? 'To ask questions or comment about this privacy policy and our privacy practices, contact us at: account@synapsis.team, or via our contact form on our website.'
                  : 'Para hacer preguntas o comentarios sobre esta política de privacidad y nuestras prácticas de privacidad, contáctenos en: account@synapsis.team, o a través de nuestro formulario de contacto en nuestro sitio web.'}
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy; 