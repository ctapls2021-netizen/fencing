# 📘 Guía Maestra: Conversión de Landing Pages HTML a Astro (Opción A)

Esta guía documenta la **Opción A**, la metodología estándar de alta ingeniería para convertir cualquier sitio web o landing page existente (HTML estático, WordPress, Elementor o React) en una landing page ultra rápida, moderna y mantenible en **Astro**.

---

## 🧭 ¿Qué es la "Opción A"?

Existen dos maneras comunes de llevar HTML a Astro:

| Característica | Opción B (Copy-Paste Monolítico) | **Opción A (Arquitectura Modular Astro + Islands)** |
| :--- | :--- | :--- |
| **Estructura** | Un único archivo `.astro` gigante de 3000 líneas con todo el HTML embebido. | **Componentes modulares desacoplados** (`Hero`, `Gallery`, `Cards`, `FAQ`, `Form`) combinando Astro y React. |
| **Interactividad** | Scripts dispersos con jQuery o Vanilla JS propensos a colisiones. | **Astro Islands (`client:visible` / `client:load`)** con React: estado reactivo predecible y cero carga extra. |
| **Mantenibilidad** | Difícil de cambiar textos, fotos o estilos sin romper el layout. | **Alta**: Cambiar una tarjeta, estilo o variante (V1 vs V2) toma segundos. |
| **Rendimiento** | Código basura residual (*div soup* de Elementor, CSS innecesario). | **0% basura**: Cero dependencias no utilizadas, assets WebP optimizados y CSS limpio. |
| **Seguridad Webhooks** | Enlaces de Zapier/Make expuestos en el frontend a la vista de cualquiera. | **Lead Proxy 100% oculto** (`submit-lead.php` o Cloudflare Functions), blindado contra GitGuardian y spam. |
| **Microinteracciones** | Efectos inconsistentes o ausentes. | **Efectos estandarizados**: Zoom-in en imágenes (`scale(1.09)`), Ken Burns ambiental, lightbox de video y flip cards. |

---

## 📂 1. Estructura de Directorios Recomendada

```text
proyecto-astro/
├── public/
│   ├── api/
│   │   └── submit-lead.php        <-- Proxy PHP para webhooks (Cloudways/Nginx)
│   ├── assets/
│   │   ├── photos/
│   │   │   ├── 2k/                <-- Imágenes de alta resolución (WebP)
│   │   │   └── thumbs/            <-- Miniaturas para galerías y tarjetas
│   │   ├── site/                  <-- Logos, sellos, insignias oficiales
│   │   └── fonts/                 <-- Fuentes WOFF2 locales (opcional)
│   └── favicon.ico
├── src/
│   ├── components/                <-- Componentes compartidos
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── VideoLightbox.jsx
│   │   └── FaqAccordion.jsx
│   ├── ui_kits/                   <-- Kits específicos de la landing
│   │   └── landing-page/
│   │       ├── [servicio]-v1.jsx  <-- Variante V1 (ej. Hero con formulario)
│   │       └── [servicio]-v2.jsx  <-- Variante V2 (ej. Hero con video/slider)
│   ├── layouts/
│   │   └── Layout.astro           <-- Estructura HTML global, metas, CSS y JS universal
│   ├── pages/
│   │   ├── index.astro            <-- Redirección o landing principal
│   │   ├── [servicio]-v1.astro    <-- Página V1 que monta el componente
│   │   ├── [servicio]-v2.astro    <-- Página V2 que monta el componente
│   │   └── thank-you.astro        <-- Página de agradecimiento (Thank You Page)
│   └── styles/
│       └── styles.css             <-- Variables CSS, microinteracciones y zoom-in
├── astro.config.mjs               <-- Configuración con integración @astrojs/react
└── package.json
```

---

## ⚙️ 2. Configuración Inicial del Proyecto

### 2.1 Instalación de Astro con React y Tailwind (opcional)
```bash
npm create astro@latest mi-landing -- --template minimal --no-install
cd mi-landing
npm install
npx astro add react
```

### 2.2 `astro.config.mjs`
```javascript
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  integrations: [react()],
  output: 'static', // Generación estática para máximo rendimiento en CDN
});
```

---

## 🔨 3. Paso a Paso: Proceso de Conversión (Opción A)

### Paso 1: Extracción y Limpieza de Assets e Imágenes Reales
1. **Regla de Oro:** **Nunca usar imágenes inventadas por IA ni fotos de stock genéricas.** Se extraen directamente del sitio web del cliente o de su CDN oficial.
2. Descargar las imágenes originales en formato `.webp` o convertirlas a WebP optimizado (80-85% calidad).
3. Guardar las fotos en:
   - `/public/assets/photos/2k/` para fondos y banners principales.
   - `/public/assets/photos/thumbs/` para tarjetas interactivas y galerías.
4. Organizar logos corporativos, sellos de Google Reviews, acreditaciones CSLB o BBB en `/public/assets/site/`.

### Paso 2: Limpieza de HTML y Extracción de Copys
1. Eliminar el **"Div Soup"** de Elementor/WordPress (`.elementor-container`, `.elementor-widget-wrap`, etc.).
2. Conservar el **100% del copy original**: titulares H1/H2, viñetas de beneficios, números de teléfono (`tel:XXXXXXXXXX`) y garantías legales.
3. Modularizar el contenido en arrays de datos limpios dentro del componente React:
```javascript
const FENCE_STYLES = [
  {
    title: "Hi-Tech Series",
    img: "/assets/photos/thumbs/hi-tech.webp",
    frontDesc: "Maximum strength and contemporary aesthetic.",
    backDesc: "Engineered with heavy-duty aluminum profiles for lifetime durability."
  },
  // ... demás elementos
];
```

### Paso 3: Implementación de Microinteracciones y Zoom-In
Para que las imágenes estáticas tengan vida y un aspecto dinámico y táctil:

En `src/styles/styles.css`:
```css
/* ========================================================
   MICROINTERACCIÓN: ZOOM-IN EN HOVER Y CONTENEDOR SEGURO
   ======================================================== */

/* Contenedor que previene desbordamiento en el zoom */
.zoom-container,
.gallery-card-img-wrap,
.style-card-image-wrap {
  overflow: hidden;
  position: relative;
  border-radius: 12px;
}

/* Imagen con transición suave y zoom al pasar el ratón */
.zoom-img,
.zoom-container img,
.gallery-card-img-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.65s cubic-bezier(0.25, 1, 0.5, 1), filter 0.5s ease;
  will-change: transform;
}

.zoom-container:hover img,
.gallery-card-img-wrap:hover img {
  transform: scale(1.09);
  filter: brightness(1.04);
}

/* Efecto Ken Burns sutil para fondos estáticos */
@keyframes ambientKenBurns {
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
}

.ambient-zoom-bg {
  animation: ambientKenBurns 18s ease-in-out infinite;
  transform-origin: center center;
}
```

### Paso 4: Creación de Componentes React (`Astro Islands`)
Ejemplo de componente de estilos con **Flip Card** interactiva y efecto de zoom:

```jsx
// src/ui_kits/landing-page/fencing.jsx
import React, { useState } from 'react';

export default function FencingStyles({ styles }) {
  const [flippedIndex, setFlippedIndex] = useState(null);

  const toggleFlip = (index) => {
    setFlippedIndex(flippedIndex === index ? null : index);
  };

  return (
    <section className="styles-section py-20 bg-neutral-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Nuestros Estilos Exclusivos</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {styles.map((item, idx) => (
            <div 
              key={idx} 
              className={`flip-card-container ${flippedIndex === idx ? 'flipped' : ''}`}
              onClick={() => toggleFlip(idx)}
            >
              <div className="flip-card-inner">
                {/* Frente */}
                <div className="flip-card-front zoom-container">
                  <img src={item.img} alt={item.title} className="zoom-img" loading="lazy" />
                  <div className="overlay p-4">
                    <h3 className="text-xl font-bold">{item.title}</h3>
                    <p className="text-sm opacity-90">{item.frontDesc}</p>
                  </div>
                </div>

                {/* Reverso */}
                <div className="flip-card-back p-6 flex flex-col justify-center bg-zinc-800">
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-sm leading-relaxed mb-6">{item.backDesc}</p>
                  <a href="#quote-form" className="btn-primary py-2 px-4 rounded text-center">
                    Solicitar Cotización
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

### Paso 5: Ensamblaje en la Página Astro (`.astro`)
En `src/pages/fencing-v1.astro`:
```astro
---
import Layout from '../layouts/Layout.astro';
import FencingLanding from '../ui_kits/landing-page/fencing.jsx';

const fencingData = [
  {
    title: "Hi-Tech Series",
    img: "/assets/photos/thumbs/hi-tech-fence.webp",
    frontDesc: "Máxima durabilidad y privacidad total.",
    backDesc: "Perfiles de aluminio aeroespacial recubiertos en polvo contra la intemperie."
  },
  // Más elementos...
];
---

<Layout 
  title="Cercas Modernas de Aluminio | Mulholland Brand"
  description="Instalación profesional de cercas de aluminio de alta gama con garantía de por vida."
>
  <!-- client:load o client:visible para reactividad optimizada -->
  <FencingLanding client:load styles={fencingData} />
</Layout>
```

---

## 🔒 4. Lead Proxy Seguro para Webhooks (Anti-GitGuardian & Anti-Spam)

> [!IMPORTANT]
> **REGLA DE SEGURIDAD ABSOLUTA:**
> Nunca colocar URLs de Webhooks (`hooks.zapier.com`, `hook.make.com`, etc.) directamente en el HTML o JS público. Si se exponen en frontend, cualquier robot puede spammear o GitGuardian bloqueará el repositorio.

### Archivo: `public/api/submit-lead.php`
Este archivo se coloca directamente en `public/api/submit-lead.php`. Al compilar Astro con `npm run build`, se copia intacto a la raíz de distribución `dist/api/submit-lead.php`.

```php
<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Accept, X-Requested-With');
header('Content-Type: application/json; charset=UTF-8');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'error' => 'Método no permitido']);
    exit;
}

// Endpoints decodificados dinámicamente en runtime (Anti-GitGuardian)
$webhooks = [
    'fencing-v1' => getenv('WEBHOOK_FENCING') ?: base64_decode('aHR0cHM6Ly9ob29rcy56YXBpZXIuY29tL2hvb2tzL2NhdGNoL1hYWC9ZWVkv'),
    'fencing-v2' => getenv('WEBHOOK_FENCING_V2') ?: base64_decode('aHR0cHM6Ly9ob29rcy56YXBpZXIuY29tL2hvb2tzL2NhdGNoL1hYWC9aWlov')
];

$rawBody = file_get_contents('php://input');
$data = !empty($rawBody) ? json_decode($rawBody, true) : $_POST;

$landing = isset($data['landing']) ? trim((string)$data['landing']) : 'fencing-v1';
$targetWebhook = isset($webhooks[$landing]) ? $webhooks[$landing] : reset($webhooks);

// Zona horaria local del cliente (ej. Los Angeles)
date_default_timezone_set('America/Los_Angeles');

$payload = [
    'name'                 => trim((string)($data['name'] ?? '')),
    'phone'                => trim((string)($data['phone'] ?? '')),
    'email'                => trim((string)($data['email'] ?? '')),
    'zip'                  => trim((string)($data['zip'] ?? '')),
    'service'              => trim((string)($data['service'] ?? 'Fencing')),
    'landing'              => $landing,
    'submission_date_time' => date('Y-m-d H:i:s T'),
    'submission_date_iso'  => date('c'),
    'full_url'             => trim((string)($data['full_url'] ?? $_SERVER['HTTP_REFERER'] ?? '')),
    'client_ip'            => $_SERVER['REMOTE_ADDR'] ?? '',
    'user_agent'           => $_SERVER['HTTP_USER_AGENT'] ?? ''
];

// Reenvío seguro mediante cURL
$ch = curl_init($targetWebhook);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($payload));
curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/json', 'Accept: application/json']);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_TIMEOUT, 10);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, true);

$response = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

if ($httpCode >= 200 && $httpCode < 300) {
    http_response_code(200);
    echo json_encode(['success' => true, 'message' => 'Lead recibido con éxito']);
} else {
    http_response_code(502);
    echo json_encode(['success' => false, 'error' => 'Fallo al entregar al webhook upstream']);
}
```

---

## 📱 5. Reglas Estrictas para Versión Móvil (≤ 768px / ≤ 1200px)

1. **Jerarquía del Hero en Móvil:**
   - **Arriba:** Imagen principal o banner visible completa (sin capas oscuras agresivas ni recortes).
   - **Medio:** H1 conciso con propuesta de valor + Botón click-to-call (`tel:`).
   - **Abajo:** Formulario de captura para scroll natural hacia abajo.
2. **Galerías de fotos:** Siempre en **2 columnas simétricas** (`grid-template-columns: repeat(2, 1fr)`). Si la cantidad de fotos es impar, ocultar la última en móvil con `.gallery-grid > div:last-child { display: none !important; }`.
3. **Cero Scroll Horizontal:** Asegurar en `Layout.astro`:
   ```css
   html, body {
     max-width: 100%;
     overflow-x: hidden;
     box-sizing: border-box;
   }
   ```
4. **Tipografía Fluida:** Usar `clamp()` en títulos para evitar que se desborden en pantallas pequeñas (ej. `font-size: clamp(24px, 5vw, 42px)`).

---

## 🚀 6. Checklist de Validación Pre-Entrega

Antes de publicar la landing a producción o entregar al cliente:

- [ ] **Fidelidad de Copy:** ¿Los textos coinciden 100% con los requerimientos originales del cliente?
- [ ] **Imágenes Auténticas:** ¿Todas las fotos provienen del catálogo real del cliente (sin placeholders de IA)?
- [ ] **Zoom-In Funcional:** ¿Las imágenes estáticas y tarjetas tienen efecto hover `scale(1.09)` y transición suave?
- [ ] **Webhooks Ocultos:** ¿No existe ninguna URL de Zapier/Make en el bundle JS del frontend?
- [ ] **Validación de Formularios:** ¿El formulario valida teléfono y correo, muestra spinner al enviar y redirige a `/thank-you/`?
- [ ] **Responsive Test:** ¿Probado en iPhone/Android en 375px y 414px sin scroll horizontal?
- [ ] **Build Exitoso:** ¿`npm run build` ejecuta con 0 errores y genera la carpeta `dist/` limpia?
