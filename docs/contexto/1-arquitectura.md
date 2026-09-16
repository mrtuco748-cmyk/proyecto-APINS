# Arquitectura del Proyecto APINS

## Stack Tecnologico

### Lenguajes
- Python (backend/lógica)
- TypeScript/JavaScript (frontend)

### Frameworks y Librerias
- Next.js/Nuxt (framework frontend)
- Python (backend - framework a definir: FastAPI o Flask probable)

### Herramientas y Utilidades
- Vercel (deploy/hosting)
- Git (control de versiones)

### Base de Datos
- Ninguna (sitio estático o con datos embebidos)

### Infraestructura
- Vercel para hosting y deploy
- Git para versionado

### Versiones Clave
| Componente | Version | Estado |
|---|---|---|
| [Completar] | [v.x.x] | [activo/deprecated/planning] |

---

## Mapa de Carpetas

```
mi-proyecto/
├── docs/
│   └── contexto/
│       ├── 1-arquitectura.md
│       ├── 2-convenciones.md
│       ├── 3-decisiones.md
│       ├── 4-glosario.md
│       ├── 5-flujo-de-trabajo.md
│       ├── 6-errores-conocidos.md
│       ├── 7-historial.md
│       └── 8-forma-de-trabajo-con-el-usuario.md
├── src/                  # Codigo fuente
│   ├── pages/           # Paginas Next.js/Nuxt
│   ├── components/      # Componentes reutilizables
│   ├── data/            # Datos de la isla (JSON/API)
│   └── styles/          # Estilos globales
├── public/              # Archivos estaticos
├── docs/                # Documentacion
└── ... (resto del proyecto)
```

### Descripcion de Carpetas Principales

#### `/src`
Codigo fuente de la aplicacion. Contiene paginas, componentes y datos de Isla Apipe.

#### `/public`
Archivos estaticos como imagenes, favicon, y archivos multimedia sobre la isla.

#### `/docs`
Documentacion del proyecto.

#### `/config` (si existe)
Configuraciones de entorno y variables.

---

## Flujo de Datos

### Entrada de Informacion
- Datos sobre Isla Apipe Grande, Corrientes, Argentina
- Informacion geografica, turistica, cultural, historica
- Cargados como datos embebidos (JSON) o archivos estaticos

### Procesamiento
- Next.js/Nuxt renderiza la informacion en paginas
- Python puede generar o procesar datos si es necesario

### Almacenamiento
- Sin base de datos
- Datos en archivos JSON o embebidos en el codigo
- Imagenes y medios en la carpeta public/

### Salida
- Sitio web estatico o renderizado
- Deploy en Vercel

---

## Escalabilidad Actual

### Fortalezas
- Stack moderno (Next.js + Python)
- Hosting simple con Vercel
- Sin dependencias externas complejas
- Facil de mantener para desarrollador individual

### Cuellos de Botella
- Proyecto nuevo, sin implementacion
- Sin base de datos puede limitar funcionalidad dinámica
- Desarrollador solo (puede ser limitante para crecimiento)

### Capacidad de Crecimiento
- Puede crecer en contenido facilmente (mas datos sobre la isla)
- Escalar a mas paginas secciones es directo
- Migracion a BD posible si se necesita más tarde

---

## Lo Que NO Existe

### Features Esperables Faltantes
- [ ] Autenticacion de usuarios
- [ ] Sistema de busqueda avanzada
- [ ] Mapa interactivo de la isla
- [ ] Galeria multimedia
- [ ] API para datos de la isla
- [ ] Sistema de comentarios
- [ ] SEO avanzado

### Infraestructura Faltante
- [ ] CI/CD pipeline
- [ ] Sistema de monitoreo
- [ ] Analitica web
- [ ] Dominio personalizado

### No-Funcionales Faltantes
- [ ] Logging centralizado
- [ ] Testing (aunque se requiere high coverage)
- [ ] Estrategia de backup de datos

### Por Que Falta
El proyecto esta en Day 1. Todos los features se implementaran segun la prioridad definida en el cuestionario. La falta de base de datos es una decision de diseño inicial que puede cambiar.

---

## Notas
Este documento se actualizara conforme se avance en el desarrollo. La arquitectura es para un proyecto personal sobre Isla Apipe Grande, Provincia de Corrientes, Argentina.
