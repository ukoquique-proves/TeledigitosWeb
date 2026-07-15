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
Para que Vite procese, optimice y genere los hash correctos para las imágenes estáticas referenciadas en tu HTML, debe poder encontrarlas y resolver la ruta correctamente. Las imágenes puestas directamente en la raíz y llamadas de forma relativa a veces causan conflictos de caché o se pierden si no se referencian correctamente.

**Solución:**
Las mejores prácticas en este proyecto para imágenes son:
1. Usar siempre etiquetas `<img>` directas en los archivos HTML registrados en `vite.config.js` para que Vite las detecte y procese al empaquetar en la carpeta `dist/assets/`.
2. O bien, colocar las imágenes que no cambian en la carpeta `/public` y referenciarlas de forma absoluta desde la raíz, ej: `<img src="/favicon.svg" />`.
