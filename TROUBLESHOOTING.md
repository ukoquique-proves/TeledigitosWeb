# Guía de Solución de Problemas (Troubleshooting)

Esta guía documenta los problemas más comunes al desarrollar y desplegar este proyecto, así como sus soluciones.

## 1. Los cambios no se reflejan en GitHub Pages tras hacer `git push` a `main`

**Problema:**
Haces cambios locales, haces commit y push a la rama `main`, pero la página pública en `https://[usuario].github.io/TeledigitosWeb/` sigue mostrando una versión antigua de la web (o faltan imágenes nuevas).

**Causa:**
El repositorio de GitHub está configurado para servir el sitio desde la rama `gh-pages`, no desde `main`. Al subir código fuente a `main`, el sitio web empaquetado (la carpeta `dist`) que vive en `gh-pages` no se actualiza automáticamente a menos que lo compiles y subas explícitamente.

**Solución:**
En lugar de depender únicamente de `git push`, debes usar el script de despliegue configurado.
Ejecuta los siguientes comandos en tu terminal local:
```bash
npm run build
npm run deploy
```
Esto compilará el código y subirá automáticamente la carpeta `dist` a la rama `gh-pages`, forzando la actualización del sitio en vivo. 
*(Nota: Puede tardar 1 o 2 minutos en actualizarse en GitHub Pages y podrías necesitar refrescar la caché del navegador).*

## 2. Vite no construye nuevos archivos HTML (ej. `about.html` o `aspiracion.html` dan error 404 en producción)

**Problema:**
Creas un nuevo archivo HTML en la raíz del proyecto. En desarrollo (`npm run dev`) funciona bien, pero al subir a producción, la URL del nuevo archivo no existe o devuelve un error 404.

**Causa:**
Vite es un empaquetador que por defecto solo busca y procesa el archivo `index.html`. Si tienes múltiples páginas (arquitectura Multi-Page Application), Vite las ignora al compilar a menos que se lo indiques explícitamente.

**Solución:**
Debes registrar cada nuevo archivo HTML en la configuración de Vite.
Abre el archivo `vite.config.js` y añade el nuevo archivo en la sección de `rollupOptions.input`:
```javascript
export default defineConfig(({ mode }) => {
  // ...
  return {
    // ...
    build: {
      rollupOptions: {
        input: {
          main: resolve(__dirname, 'index.html'),
          about: resolve(__dirname, 'about.html'),
          aspiracion: resolve(__dirname, 'aspiracion.html'),
          // Añade aquí tu nuevo archivo:
          // nueva_pagina: resolve(__dirname, 'nueva_pagina.html')
        }
      }
    }
  }
})
```

## 3. Las imágenes o iconos (assets) no cargan o tienen la ruta rota en producción

**Problema:**
Añades una etiqueta `<img src="./foto.png" />` en tu HTML, funciona en local, pero falla en producción.

**Causa:**
Este proyecto se sirve bajo el sub-path `/TeledigitosWeb/` en GitHub Pages (configurado en `vite.config.js` como `base: '/TeledigitosWeb/'`). Las rutas absolutas desde la raíz (`/imagen.png`) resuelven al dominio raíz (`https://usuario.github.io/imagen.png`), no al sub-path, y dan 404.

**Solución:**
Hay dos patrones válidos según el tipo de asset:

1. **Imágenes importadas en JS** (componentes como `AppHeader.js`): usa `import` de ES modules. Vite reescribe la ruta automáticamente al empaquetar.
   ```js
   import logo from '../../images/teledigitos.png';
   // luego: <img src="${logo}" />
   ```

2. **Assets referenciados directamente en HTML**: usa rutas relativas (`./imagen.png`) o el placeholder `%BASE_URL%` que Vite reemplaza con el base path correcto al compilar.
   ```html
   <!-- bien -->
   <img src="./images/yoFoto.png" />
   <link rel="icon" href="%BASE_URL%favicon.svg" />

   <!-- mal — falla en GitHub Pages -->
   <img src="/images/yoFoto.png" />
   <link rel="icon" href="/favicon.svg" />
   ```

> **Nota:** `%BASE_URL%` es especialmente importante para el favicon y cualquier `<link>` o `<meta>` en `<head>`, ya que Vite no reescribe atributos `href` en etiquetas `<link>` de la misma forma que lo hace con `src` en `<img>` procesadas por Rollup.
