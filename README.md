# Teledígitos Web

Estructuras digitales sobrias, eficientes y duraderas. Este es el código fuente del sitio web estático de Teledígitos.

## Tecnologías
- [Vite](https://vitejs.dev/)
- HTML, CSS, JavaScript (Vanilla)

## Desarrollo Local

Para correr el proyecto en tu máquina de forma local:

1. Instala las dependencias:
   ```bash
   npm install
   ```
2. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```
   *(También puedes usar el script de conveniencia desde tu terminal con `./run_teledigitos.sh` si estás en la carpeta `/root/`)*

## Despliegue (Producción)

Este proyecto está configurado para ser desplegado mediante **GitHub Pages** (y la rama `gh-pages`). 

Para generar y subir una nueva versión a producción:
1. Haz tus cambios en el código (HTML, CSS, JS).
2. Ejecuta el comando de construcción y publicación:
   ```bash
   npm run build
   npx gh-pages -d dist
   ```
El sitio se servirá y actualizará automáticamente desde GitHub.

## Variables de Entorno (Opcional)
Consulta el archivo `.env.example` para ver la estructura de variables de entorno, por si usas scripts de CI/CD automatizados o herramientas de despliegue como Vercel/Netlify en el futuro. No debes subir nunca tu archivo `.env` a GitHub.
