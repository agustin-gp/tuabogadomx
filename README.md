# TuAbogadoMX - Starter (Next.js + Firebase + MercadoPago)

Este repositorio es un *starter* mínimo listo para desplegar en **Vercel** y conectar con **Firebase** y **MercadoPago**.
Incluye:
- Next.js (páginas)
- Tailwind CSS (colores: azul petróleo y dorado)
- Autenticación básica con Firebase (email/password)
- Ruta API para crear preferencia con MercadoPago (servidor - requiere ACCESS_TOKEN)
- Estructura bilingüe simple (i18n JSON)
- Instrucciones paso a paso para no programadores

---

## Archivos importantes
- `package.json` - dependencias y scripts.
- `lib/firebase.js` - configuración cliente de Firebase.
- `pages/api/mercadopago.js` - endpoint para crear preferencia de pago.
- `pages/index.js`, `pages/login.js`, `pages/dashboard.js` - vistas base.
- `components/Layout.js`, `components/Nav.js` - componentes reutilizables.
- `public/` - assets.

---

## Variables de entorno (Vercel / local .env)
Crea estas variables (en Vercel -> Project -> Settings -> Environment Variables):
- `NEXT_PUBLIC_FIREBASE_API_KEY`
- `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN`
- `NEXT_PUBLIC_FIREBASE_PROJECT_ID`
- `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET`
- `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID`
- `NEXT_PUBLIC_FIREBASE_APP_ID`
- `MERCADOPAGO_ACCESS_TOKEN`  (token de servidor — **no** lo expongas en frontend)
- `NEXT_PUBLIC_MERCADOPAGO_PUBLIC_KEY` (clave pública para el frontend si la necesitas)

---

## Pasos para desplegar en Vercel (explicado para no programadores)

1. Crear cuenta en Firebase:
   - Ve a https://console.firebase.google.com/
   - Crea un nuevo proyecto: "tuabogadomx"
   - En "Authentication" -> habilita "Email/Password".
   - En "Project settings" -> "General" -> agrega una web app y copia la configuración (apiKey, authDomain, projectId...).
   - Usa esos valores para las variables `NEXT_PUBLIC_FIREBASE_...`

2. Crear cuenta en MercadoPago:
   - Ve a https://www.mercadopago.com/ (o el dominio de tu país).
   - Obtén tus credenciales: ACCESS_TOKEN (servidor) y PUBLIC_KEY.
   - Agrega `MERCADOPAGO_ACCESS_TOKEN` en Vercel como **Environment Variable** (Secret) y `NEXT_PUBLIC_MERCADOPAGO_PUBLIC_KEY` si usarás el checkout en el frontend.

3. Subir el proyecto a GitHub (opcional, pero recomendado para conectar con Vercel):
   - Crea repositorio y sube todo.
   - Conecta Vercel a GitHub y selecciona el repo.

4. Desplegar en Vercel:
   - En Vercel, crea un nuevo proyecto -> importar desde GitHub.
   - Asegúrate de añadir las variables de entorno en la configuración del proyecto (ver sección Variables de entorno).
   - Vercel instalará dependencias y desplegará automáticamente.

5. Probar:
   - Abre la URL desplegada por Vercel.
   - Regístrate y prueba el flujo de pago (el API de MercadoPago está listo pero requiere credenciales reales o sandbox).

---

## Notas para avanzar
- Esto es un *starter* funcional, pensado para que un desarrollador lo conecte a servicios reales.
- Si quieres, puedo:
  - Generar un README en español + video corto con pasos (texto).
  - Añadir más pantallas (registro de abogados, panel con suscripciones, pasarela de pago visual).
  - Preparar los comandos Git/Terminal paso a paso para una computadora Windows si lo necesitas.

