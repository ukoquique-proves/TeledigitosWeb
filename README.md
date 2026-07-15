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

Este proyecto está configurado para ser desplegado mediante **GitHub Pages**. Tienes dos opciones de despliegue:

### Opción 1: Despliegue Manual (Por Defecto)
Para generar y subir una nueva versión a producción manualmente:
1. Haz tus cambios en el código (HTML, CSS, JS).
2. Ejecuta el comando de construcción y publicación:
   ```bash
   npm run build && npm run deploy
   ```
Esto publicará la carpeta empaquetada en la rama `gh-pages`.

### Opción 2: Despliegue Automatizado con GitHub Actions (Recomendado)
Puedes configurar el repositorio para que cada vez que hagas `git push` a `main`, el sitio se actualice solo.
1. Ve a tu repositorio en GitHub > **Settings** > **Pages**.
2. Bajo **Build and deployment**, cambia el **Source** a **GitHub Actions**.
3. ¡Listo! Ya no necesitarás correr el script de despliegue manualmente.

## Variables de Entorno (Opcional)
Consulta el archivo `.env.example` para ver la estructura de variables de entorno, por si usas scripts de CI/CD automatizados o herramientas de despliegue como Vercel/Netlify en el futuro. No debes subir nunca tu archivo `.env` a GitHub.
