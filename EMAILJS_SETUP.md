# Configuración de EmailJS para el formulario de contacto

Este documento explica cómo configurar EmailJS para que el formulario de contacto del sitio web pueda enviar mensajes a tu correo electrónico.

## Paso 1: Crear una cuenta en EmailJS

1. Ve a [EmailJS](https://www.emailjs.com/) y crea una cuenta gratuita.
2. El plan gratuito permite enviar hasta 200 correos por mes, lo cual es suficiente para la mayoría de los sitios web pequeños.

## Paso 2: Configurar un servicio de email

1. Una vez dentro de tu cuenta, ve a la sección "Email Services".
2. Haz clic en "Add New Service" y selecciona tu proveedor de email preferido (Gmail, Outlook, etc.).
3. Sigue las instrucciones para conectar tu cuenta de correo electrónico.
4. Cuando hayas completado la configuración, anota el `SERVICE_ID` que se te asigna.

## Paso 3: Crear una plantilla de email

1. Ve a la sección "Email Templates".
2. Haz clic en "Create New Template".
3. Diseña tu plantilla de email. Puedes usar las siguientes variables que se enviarán desde el formulario:
   - `{{name}}` - Nombre del usuario
   - `{{email}}` - Email del usuario
   - `{{company}}` - Empresa del usuario
   - `{{message}}` - Mensaje del usuario
4. Guarda la plantilla y anota el `TEMPLATE_ID` que se te asigna.

## Paso 4: Obtener tu clave pública

1. Ve a la sección "Account" o "Integration".
2. Busca tu "Public Key" y anótala. Este es tu `PUBLIC_KEY`.

## Paso 5: Actualizar el código

Abre el archivo `src/components/SynapsisCTA.js` y actualiza las siguientes constantes con los valores que anotaste:

```javascript
const EMAILJS_SERVICE_ID = "tu_service_id"; // por ejemplo: "service_abc123"
const EMAILJS_TEMPLATE_ID = "tu_template_id"; // por ejemplo: "template_xyz789"
const EMAILJS_PUBLIC_KEY = "tu_public_key"; // por ejemplo: "abc123xyz789"
```

## Prueba el formulario

Una vez completada la configuración, el formulario debería enviar emails a la dirección que configuraste en tu servicio de EmailJS.

## Nota importante sobre la seguridad

La clave pública de EmailJS está pensada para ser usada en el frontend, por lo que es seguro incluirla en tu código. Sin embargo, nunca incluyas claves privadas o credenciales sensibles en tu código frontend.

Si necesitas un sistema más seguro o con más funcionalidades, considera implementar un backend propio para manejar los envíos de email. 