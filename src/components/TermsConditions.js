import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router-dom';

const TermsConditions = () => {
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
            {language === 'en' ? 'Terms and Conditions' : 'Términos y Condiciones'}
          </motion.h1>
          
          <motion.p variants={itemVariants} className="text-gray-300 mb-6">
            Last Updated: {new Date().toLocaleDateString()}
          </motion.p>
          
          <motion.div variants={itemVariants} className="space-y-6 text-gray-300">
            <div>
              <h2 className="text-xl font-semibold mb-3 text-white">
                {language === 'en' ? '1. Introduction and Acceptance' : '1. Introducción y Aceptación'}
              </h2>
              <p>
                {language === 'en' 
                  ? 'Welcome to Synapsis Team LLC ("Company", "we", "our", "us"). These Terms and Conditions ("Terms", "Terms and Conditions") govern your use of our website located at www.synapsisteam.com (the "Service") and any related services, including our human resources solutions, operated by Synapsis Team LLC. By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the terms, you do not have permission to access the Service.'
                  : 'Bienvenido a Synapsis Team LLC ("Compañía", "nosotros", "nuestro", "nos"). Estos Términos y Condiciones ("Términos", "Términos y Condiciones") rigen su uso de nuestro sitio web ubicado en www.synapsisteam.com (el "Servicio") y cualquier servicio relacionado, incluidas nuestras soluciones de recursos humanos, operadas por Synapsis Team LLC. Al acceder o utilizar el Servicio, acepta estar sujeto a estos Términos. Si no está de acuerdo con alguna parte de los términos, no tiene permiso para acceder al Servicio.'}
              </p>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold mb-3 text-white">
                {language === 'en' ? '2. Communications' : '2. Comunicaciones'}
              </h2>
              <p>
                {language === 'en' 
                  ? 'By using our Service, you agree to subscribe to newsletters, marketing or promotional materials and other information we may send. However, you may opt out of receiving any, or all, of these communications from us by following the unsubscribe link or instructions provided in any email we send or by contacting us.'
                  : 'Al utilizar nuestro Servicio, acepta suscribirse a boletines, materiales de marketing o promocionales y otra información que podamos enviar. Sin embargo, puede optar por no recibir ninguna o todas estas comunicaciones de nosotros siguiendo el enlace para darse de baja o las instrucciones proporcionadas en cualquier correo electrónico que enviemos o poniéndose en contacto con nosotros.'}
              </p>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold mb-3 text-white">
                {language === 'en' ? '3. Services Provided' : '3. Servicios Proporcionados'}
              </h2>
              <p className="mb-3">
                {language === 'en' 
                  ? 'Synapsis Team LLC provides the following human resources and business services:'
                  : 'Synapsis Team LLC proporciona los siguientes servicios de recursos humanos y negocios:'}
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  {language === 'en' 
                    ? 'HR consulting and strategic planning'
                    : 'Consultoría y planificación estratégica de RRHH'}
                </li>
                <li>
                  {language === 'en' 
                    ? 'Recruitment and talent acquisition'
                    : 'Reclutamiento y adquisición de talento'}
                </li>
                <li>
                  {language === 'en' 
                    ? 'Employee onboarding and development'
                    : 'Incorporación y desarrollo de empleados'}
                </li>
                <li>
                  {language === 'en' 
                    ? 'Performance management systems'
                    : 'Sistemas de gestión del desempeño'}
                </li>
                <li>
                  {language === 'en' 
                    ? 'Benefits administration'
                    : 'Administración de beneficios'}
                </li>
                <li>
                  {language === 'en' 
                    ? 'Payroll processing and management'
                    : 'Procesamiento y gestión de nóminas'}
                </li>
                <li>
                  {language === 'en' 
                    ? 'Compliance and regulatory guidance'
                    : 'Orientación normativa y de cumplimiento'}
                </li>
                <li>
                  {language === 'en' 
                    ? 'HR technology and systems implementation'
                    : 'Implementación de tecnología y sistemas de RRHH'}
                </li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold mb-3 text-white">
                {language === 'en' ? '4. Service Agreement' : '4. Acuerdo de Servicio'}
              </h2>
              <p>
                {language === 'en' 
                  ? 'For specific HR services, a separate Service Agreement may be required. The terms of such agreements will be provided at the time of engagement and will supplement these Terms and Conditions. In the event of any conflict between the Service Agreement and these Terms, the Service Agreement shall prevail.'
                  : 'Para servicios específicos de RRHH, es posible que se requiera un Acuerdo de Servicio separado. Los términos de dichos acuerdos se proporcionarán en el momento del compromiso y complementarán estos Términos y Condiciones. En caso de conflicto entre el Acuerdo de Servicio y estos Términos, prevalecerá el Acuerdo de Servicio.'}
              </p>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold mb-3 text-white">
                {language === 'en' ? '5. Content' : '5. Contenido'}
              </h2>
              <p>
                {language === 'en' 
                  ? 'Our Service allows you to access, view, and interact with content provided by us, including but not limited to HR resources, documents, templates, and advice ("Content"). The Content is intended solely for general informational purposes and does not constitute legal, tax, or professional advice. You should consult with appropriate professionals regarding specific situations.'
                  : 'Nuestro Servicio le permite acceder, ver e interactuar con el contenido proporcionado por nosotros, incluidos, entre otros, recursos de RRHH, documentos, plantillas y consejos ("Contenido"). El Contenido está destinado únicamente a fines informativos generales y no constituye asesoramiento legal, fiscal o profesional. Debe consultar con los profesionales apropiados sobre situaciones específicas.'}
              </p>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold mb-3 text-white">
                {language === 'en' ? '6. Accounts and Login Credentials' : '6. Cuentas y Credenciales de Inicio de Sesión'}
              </h2>
              <p>
                {language === 'en' 
                  ? 'When you create an account with us, you must provide information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service. You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password. You agree not to disclose your password to any third party. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.'
                  : 'Cuando crea una cuenta con nosotros, debe proporcionar información precisa, completa y actualizada en todo momento. No hacerlo constituye un incumplimiento de los Términos, lo que puede resultar en la terminación inmediata de su cuenta en nuestro Servicio. Usted es responsable de salvaguardar la contraseña que utiliza para acceder al Servicio y de cualquier actividad o acción bajo su contraseña. Acepta no revelar su contraseña a terceros. Debe notificarnos inmediatamente al tener conocimiento de cualquier violación de seguridad o uso no autorizado de su cuenta.'}
              </p>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold mb-3 text-white">
                {language === 'en' ? '7. Intellectual Property' : '7. Propiedad Intelectual'}
              </h2>
              <p>
                {language === 'en' 
                  ? 'The Service and its original content (excluding Content provided by users), features, and functionality are and will remain the exclusive property of Synapsis Team LLC and its licensors. The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Synapsis Team LLC.'
                  : 'El Servicio y su contenido original (excluyendo el Contenido proporcionado por los usuarios), características y funcionalidad son y seguirán siendo propiedad exclusiva de Synapsis Team LLC y sus licenciantes. El Servicio está protegido por derechos de autor, marcas comerciales y otras leyes de los Estados Unidos y países extranjeros. Nuestras marcas comerciales y presentación comercial no pueden utilizarse en relación con ningún producto o servicio sin el consentimiento previo por escrito de Synapsis Team LLC.'}
              </p>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold mb-3 text-white">
                {language === 'en' ? '8. Limitation of Liability' : '8. Limitación de Responsabilidad'}
              </h2>
              <p>
                {language === 'en' 
                  ? 'IN NO EVENT SHALL SYNAPSIS TEAM LLC, NOR ITS DIRECTORS, EMPLOYEES, PARTNERS, AGENTS, SUPPLIERS, OR AFFILIATES, BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM (I) YOUR ACCESS TO OR USE OF OR INABILITY TO ACCESS OR USE THE SERVICE; (II) ANY CONDUCT OR CONTENT OF ANY THIRD PARTY ON THE SERVICE; (III) ANY CONTENT OBTAINED FROM THE SERVICE; AND (IV) UNAUTHORIZED ACCESS, USE OR ALTERATION OF YOUR TRANSMISSIONS OR CONTENT, WHETHER BASED ON WARRANTY, CONTRACT, TORT (INCLUDING NEGLIGENCE) OR ANY OTHER LEGAL THEORY, WHETHER OR NOT WE HAVE BEEN INFORMED OF THE POSSIBILITY OF SUCH DAMAGE, AND EVEN IF A REMEDY SET FORTH HEREIN IS FOUND TO HAVE FAILED OF ITS ESSENTIAL PURPOSE.'
                  : 'EN NINGÚN CASO SYNAPSIS TEAM LLC, NI SUS DIRECTORES, EMPLEADOS, SOCIOS, AGENTES, PROVEEDORES O AFILIADOS, SERÁN RESPONSABLES POR DAÑOS INDIRECTOS, INCIDENTALES, ESPECIALES, CONSECUENTES O PUNITIVOS, INCLUYENDO SIN LIMITACIÓN, PÉRDIDA DE BENEFICIOS, DATOS, USO, BUENA VOLUNTAD U OTRAS PÉRDIDAS INTANGIBLES, RESULTANTES DE (I) SU ACCESO O USO O INCAPACIDAD PARA ACCEDER O USAR EL SERVICIO; (II) CUALQUIER CONDUCTA O CONTENIDO DE CUALQUIER TERCERO EN EL SERVICIO; (III) CUALQUIER CONTENIDO OBTENIDO DEL SERVICIO; Y (IV) ACCESO NO AUTORIZADO, USO O ALTERACIÓN DE SUS TRANSMISIONES O CONTENIDO, YA SEA BASADO EN GARANTÍA, CONTRATO, AGRAVIO (INCLUYENDO NEGLIGENCIA) O CUALQUIER OTRA TEORÍA LEGAL, HAYA SIDO O NO INFORMADO DE LA POSIBILIDAD DE DICHO DAÑO, E INCLUSO SI UN REMEDIO ESTABLECIDO AQUÍ SE ENCUENTRA QUE HA FALLADO EN SU PROPÓSITO ESENCIAL.'}
              </p>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold mb-3 text-white">
                {language === 'en' ? '9. Disclaimer' : '9. Descargo de Responsabilidad'}
              </h2>
              <p>
                {language === 'en' 
                  ? 'YOUR USE OF THE SERVICE IS AT YOUR SOLE RISK. THE SERVICE IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS. THE SERVICE IS PROVIDED WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT OR COURSE OF PERFORMANCE. SYNAPSIS TEAM LLC ITS SUBSIDIARIES, AFFILIATES, AND ITS LICENSORS DO NOT WARRANT THAT A) THE SERVICE WILL FUNCTION UNINTERRUPTED, SECURE OR AVAILABLE AT ANY PARTICULAR TIME OR LOCATION; B) ANY ERRORS OR DEFECTS WILL BE CORRECTED; C) THE SERVICE IS FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS; OR D) THE RESULTS OF USING THE SERVICE WILL MEET YOUR REQUIREMENTS.'
                  : 'SU USO DEL SERVICIO ES BAJO SU PROPIO RIESGO. EL SERVICIO SE PROPORCIONA "TAL CUAL" Y "SEGÚN DISPONIBILIDAD". EL SERVICIO SE PROPORCIONA SIN GARANTÍAS DE NINGÚN TIPO, YA SEAN EXPRESAS O IMPLÍCITAS, INCLUYENDO, PERO NO LIMITADO A, GARANTÍAS IMPLÍCITAS DE COMERCIABILIDAD, IDONEIDAD PARA UN PROPÓSITO PARTICULAR, NO INFRACCIÓN O CURSO DE RENDIMIENTO. SYNAPSIS TEAM LLC, SUS SUBSIDIARIAS, AFILIADOS Y SUS LICENCIANTES NO GARANTIZAN QUE A) EL SERVICIO FUNCIONARÁ ININTERRUMPIDAMENTE, SEGURO O DISPONIBLE EN CUALQUIER MOMENTO O UBICACIÓN PARTICULAR; B) CUALQUIER ERROR O DEFECTO SERÁ CORREGIDO; C) EL SERVICIO ESTÉ LIBRE DE VIRUS U OTROS COMPONENTES DAÑINOS; O D) LOS RESULTADOS DEL USO DEL SERVICIO CUMPLIRÁN CON SUS REQUISITOS.'}
              </p>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold mb-3 text-white">
                {language === 'en' ? '10. Termination' : '10. Terminación'}
              </h2>
              <p>
                {language === 'en' 
                  ? 'We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms. Upon termination, your right to use the Service will immediately cease. If you wish to terminate your account, you may simply discontinue using the Service.'
                  : 'Podemos terminar o suspender su cuenta inmediatamente, sin previo aviso o responsabilidad, por cualquier motivo, incluyendo, sin limitación, si incumple los Términos. Tras la terminación, su derecho a utilizar el Servicio cesará inmediatamente. Si desea terminar su cuenta, simplemente puede dejar de utilizar el Servicio.'}
              </p>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold mb-3 text-white">
                {language === 'en' ? '11. Governing Law' : '11. Ley Aplicable'}
              </h2>
              <p>
                {language === 'en' 
                  ? 'These Terms shall be governed and construed in accordance with the laws of the State of Delaware, United States, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect. These Terms constitute the entire agreement between us regarding our Service, and supersede and replace any prior agreements we might have between us regarding the Service.'
                  : 'Estos Términos se regirán e interpretarán de acuerdo con las leyes del Estado de Delaware, Estados Unidos, sin tener en cuenta sus disposiciones sobre conflictos de leyes. Nuestra falta de aplicación de cualquier derecho o disposición de estos Términos no se considerará una renuncia a esos derechos. Si alguna disposición de estos Términos es considerada inválida o inaplicable por un tribunal, las disposiciones restantes de estos Términos permanecerán en vigor. Estos Términos constituyen el acuerdo completo entre nosotros con respecto a nuestro Servicio, y reemplazan cualquier acuerdo previo que podamos haber tenido entre nosotros con respecto al Servicio.'}
              </p>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold mb-3 text-white">
                {language === 'en' ? '12. Changes to Terms' : '12. Cambios en los Términos'}
              </h2>
              <p>
                {language === 'en' 
                  ? 'We reserve the right, at our sole discretion, to modify or replace these Terms at any time. By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Service.'
                  : 'Nos reservamos el derecho, a nuestra sola discreción, de modificar o reemplazar estos Términos en cualquier momento. Al continuar accediendo o utilizando nuestro Servicio después de que esas revisiones entren en vigor, acepta estar sujeto a los términos revisados. Si no está de acuerdo con los nuevos términos, deje de utilizar el Servicio.'}
              </p>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold mb-3 text-white">
                {language === 'en' ? '13. Contact Us' : '13. Contáctenos'}
              </h2>
              <p>
                {language === 'en' 
                  ? 'If you have any questions about these Terms, please contact us at account@synapsis.team.'
                  : 'Si tiene alguna pregunta sobre estos Términos, contáctenos en account@synapsis.team.'}
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsConditions; 