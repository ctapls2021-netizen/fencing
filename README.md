# Mulholland Brand — Fencing Landing Pages (V1 & V2)

Landing pages de alto rendimiento para **Mulholland Brand** desarrolladas en **Astro 5** y **React 19**.

## 🌟 Estructura de Rutas

El proyecto integra ambas versiones en una sola arquitectura modular:

- **Versión 1 (V1)**: 
  - Rutas: `/` y `/v1`
  - Diseño enfocado en catálogo de colecciones interactivas, testimonios en cuadrícula (desktop) y carrusel táctil (mobile), y timeline de 3 pasos.
- **Versión 2 (V2)**: 
  - Ruta: `/v2`
  - Diseño con hero arquitectónico oscuro, selector de estilos con transiciones suaves, tarjetas de proceso con efecto de elevación (*hover lift*), zoom en imágenes (*zoom 110%*) y tipografía animada (*llamador pulse*).

## 🚀 Comandos

```bash
# Instalar dependencias
npm install

# Modo desarrollo
npm run dev

# Compilar para producción (Genera carpeta /dist)
npm run build

# Vista previa de la compilación
npm run preview
```

## 📦 Despliegue en Cloudflare Pages / Vercel

- **Framework preset**: Astro
- **Build command**: `npm run build`
- **Build output directory**: `dist`
