# Decisiones Tecnicas - APINS

## Matriz de Decisiones

Cada decision sigue este formato:

```
### D-N: [Titulo breve de la decision]
- Fecha: YYYY-MM-DD
- Contexto: [Situacion que llevo a la decision]
- Que se decido: [1-2 lineas claras]
- Por que: [Razones tecnicas / negocio / contexto]
- Alternativas descartadas:
  - [Alternativa A]: Por que no
  - [Alternativa B]: Por que no
- Impacto: [Que cambio, que afecta]
- Tradeoffs: [Que ganamos vs que perdemos]
- Revisable: [Si/No] - Puede cambiar en futuro?
- Relacionado con: [Archivos/componentes afectados]
```

---

## Decisiones Identificadas

### D-1: Next.js/Nuxt como Framework Frontend
- Fecha: [YYYY-MM-DD]
- Contexto: Se necesita un framework moderno para proyecto web personal sobre Isla Apipe
- Que se decido: Usar Next.js/Nuxt como framework principal del frontend
- Por que: Ecosistema rico, SSR incluido, buena documentacion, Vercel como soporte nativo
- Alternativas descartadas:
  - React puro: Menos estructura para proyecto personal
  - Vue solo: Menor adopción en el mercado laboral
  - Angular: Overkill para proyecto personal
- Impacto: Estructura de carpetas y codigo definida por Next.js
- Tradeoffs: Menor flexibilidad que React puro, pero mejor organización
- Revisable: Si, si el proyecto crece mucho
- Relacionado con: 1-arquitectura.md

### D-2: Python como Lenguaje Backend/Logica
- Fecha: [YYYY-MM-DD]
- Contexto: Necesidad de procesamiento de datos sobre la isla
- Que se decido: Usar Python para backend o procesamiento de datos
- Por que: Facil de aprender, buen ecosistema para datos, adecuado para un solo desarrollador
- Alternativas descartadas:
  - Node.js solo: Ya se usa Next.js, pero para lógica de datos Python es más natural
  - Otros lenguajes: Menor familiaridad
- Impacto: Separacion frontend/backend con dos lenguajes
- Tradeoffs: Mantener dos ecosistemas vs simplicidad de un solo lenguaje
- Revisable: Si, si se migra a un stack unificado
- Relacionado con: 1-arquitectura.md

### D-3: Sin Base de Datos (Datos Embebidos)
- Fecha: [YYYY-MM-DD]
- Contexto: Proyecto pequeño sobre una isla específica, datos estáticos
- Que se decido: No usar base de datos, almacenar datos en archivos JSON
- Por que: Simplicidad para proyecto personal, sin necesidad de infraestructura de BD
- Alternativas descartadas:
  - PostgreSQL: Overkill para datos estaticos de una isla
  - Firebase: Dependencia externa no deseada
  - MongoDB: Complejidad innecesaria
- Impacto: Datos en archivos JSON, facil de editar y mantener
- Tradeoffs: Escalabilidad limitada vs simplicidad total
- Revisable: Si, si se agrega contenido dinámico o usuarios
- Relacionado con: 1-arquitectura.md, 6-errores-conocidos.md

### D-4: Deploy en Vercel
- Fecha: [YYYY-MM-DD]
- Contexto: Necesidad de hosting gratuito y simple para proyecto personal
- Que se decido: Usar Vercel como plataforma de deploy
- Por que: Integracion nativa con Next.js, plan gratuito adecuado, deploy simple
- Alternativas descartadas:
  - Netlify: Buena alternativa, pero Vercel es mas natural para Next.js
  - GitHub Pages: Menos features
  - Hosting propio: Complejidad innecesaria
- Impacto: Deploy simplificado, integracion continua
- Tradeoffs: Dependencia de Vercel vs facilidad de uso
- Revisable: Si, si se migra a otro stack
- Relacionado con: 1-arquitectura.md

### D-5: No usar Emojis en el Codigo
- Fecha: 2026-09-16
- Contexto: Preferencia personal del desarrollador
- Que se decido: No usar emojis en archivos de codigo, documentacion ni commits
- Por que: Preferencia estetica y profesional del desarrollador
- Alternativas descartadas:
  - Usar emojis: Preferencia personal contraria
- Impacto: Documentacion y codigo sin caracteres emoji
- Tradeoffs: Menos amigable visualmente vs gusto personal
- Revisable: Si, se puede cambiar si se prefiere
- Relacionado con: 2-convenciones.md

### D-6: Tailwind CSS como Framework de Estilos
- Fecha: 2026-09-16
- Contexto: Necesidad de estilos responsivos con diseño de colores tierra/rio
- Que se decido: Usar Tailwind CSS v4 junto a Next.js
- Por que: Utilidades atomicas, responsive-first, rapido de prototipar, integracion con Next.js
- Alternativas descartadas:
  - CSS puro: Más lento de iterar
  - Styled-components: Overhead innecesario para proyecto pequeño
  - Material UI: No encaja con la estética natural
- Impacto: Sistema de colores tierra/rio/verde/arena definido en tailwind.config
- Tradeoffs: Clases largas en HTML vs velocidad de desarrollo
- Revisable: Si, si se necesita más personalización
- Relacionado con: 2-convenciones.md

### D-7: GSAP para Animaciones de Scroll
- Fecha: 2026-09-16
- Contexto: Necesidad de efectos scrollytelling (reveal, parallax, scroll-triggered)
- Que se decido: Usar GSAP + ScrollTrigger para animaciones de scroll
- Por que: Performance optima, ampliamente usado, soporte mobile, ScrollTrigger nativo
- Alternativas descartadas:
  - Framer Motion: Más pesado, orientado a React
  - CSS-only: Limitado para interacciones complejas
  - Locomotive Scroll: Más pesado, menos versátil
- Impacto: Secciones que se revelan al scrollgear, efectos paralaje, transiciones suaves
- Tradeoffs: Dependencia externa vs capacidad de animación superior
- Revisable: Si, si se prefiere solución sin dependencias
- Relacionado con: components/ProgressBar.tsx, components/SectionReveal.tsx

### D-8: Imágenes desde Unsplash como placeholder
- Fecha: 2026-09-16
- Contexto: Sin imágenes propias de la isla disponibles inicialmente
- Que se decido: Usar imágenes de Unsplash como placeholder temporal
- Por que: Necesidad de tener un sitio visual funcional antes de conseguir fotos reales
- Alternativas descartadas:
  - Esperar fotos reales: Sitio sin contenido visual
  - Imágenes de stock de pago: Costo innecesario para proyecto personal
- Impacto: Sitio con contenido visual funcional desde el inicio
- Tradeoffs: Imágenes genéricas vs velocidad de lanzamiento
- Revisable: Si, al conseguir fotos reales de la isla
- Relacionado con: components/Hero.tsx

---

## Decisiones por Categoria

### Arquitectura
- D-1: Next.js/Nuxt como framework frontend
- D-3: Sin base de datos

### Stack Tecnologico
- D-2: Python como lenguaje backend
- D-4: Deploy en Vercel
- D-6: Tailwind CSS para estilos
- D-7: GSAP para animaciones
- D-8: Imágenes placeholder (Unsplash)

### Convenciones
- D-5: No usar emojis

### CI/CD y Deployment
- D-4: Vercel como plataforma de deploy

---

## Proximas Decisiones Pendientes
- [ ] Framework Python especifico (FastAPI vs Flask vs solo scripts)
- [ ] Estructura de datos (JSON plano vs sistema de archivos)
- [ ] Sistema de SEO/metadata para Next.js
- [ ] Estrategia de imagenes/medios para la isla (reemplazar Unsplash)
- [ ] Integración de GSAP en secciones específicas (horizontal scroll, parallax)
- [ ] Testing setup (jest + React Testing Library)

---

Ultima actualizacion: [YYYY-MM-DD]
Actualizado por: [NOMBRE]
