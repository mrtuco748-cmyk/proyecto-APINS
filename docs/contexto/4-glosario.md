# Glosario del Proyecto APINS

## Terminos del Dominio (Negocio)

### Isla Apipe
**Definicion**: Isla ubicada en la Provincia de Corrientes, Argentina, sobre el Rio Parana
**Sinonimos**: Isla Apipe Grande
**Donde aparece**: Todas las secciones del sitio
**Ejemplos**: Pagina principal, seccion de datos geograficos

### Datos Geograficos
**Definicion**: Informacion sobre la ubicacion, dimensiones y caracteristicas fisicas de la isla
**Sinonimos**: Info geografica, coordenadas
**Donde aparece**: Seccion de geografia del sitio

### Turismo
**Definicion**: Actividades y atractivos turisticos disponibles en Isla Apipe
**Sinonimos**: Atractivos, actividades turisticas
**Donde aparece**: Seccion de turismo del sitio

### Gastronomia
**Definicion**: Comidas y platos tipicos de la region de Isla Apipe
**Sinonimos**: Comida local, platos tipicos
**Donde aparece**: Seccion de gastronomia del sitio

### Historia y Cultura
**Definicion**: Datos historicos y culturales de la isla y sus habitantes
**Sinonimos**: Patrimonio cultural, tradiciones
**Donde aparece**: Seccion de historia del sitio

---

## Entidades Principales

### Entidad: DatosIsla
- **Descripcion**: Objeto que contiene toda la informacion sobre la isla
- **Propiedades principales**:
  - `nombre`: string - Nombre de la isla
  - `ubicacion`: string - Ubicacion geografica
  - `dimensiones`: object - Tamanio y coordenadas
  - `poblacion`: number - Poblacion estimada
  - `secciones`: array - Lista de secciones disponibles (geografia, turismo, etc.)
- **Donde se define**: src/data/
- **Relaciones**: Se usa en todos los componentes de presentacion
- **Ejemplo**:
  ```typescript
  const datosIsla = {
    nombre: "Isla Apipe",
    ubicacion: "Corrientes, Argentina",
    secciones: ["geografia", "turismo", "gastronomia", "historia"]
  }
  ```

### Entidad: Seccion
- **Descripcion**: Una seccion tematica del sitio web
- **Propiedades principales**:
  - `id`: string - Identificador unico
  - `titulo`: string - Titulo de la seccion
  - `contenido`: array - Lista de items o datos
- **Donde se define**: src/pages/
- **Relaciones**: Se renderiza desde datosIsla

---

## Acronimos y Siglas Internas

### Variables/Prefijos Comunes
- `isla_`: Referencia a Isla Apipe (ej: `isla_datos`, `isla_info`)
- `geo_`: Referencia a datos geograficos
- `tur_`: Referencia a datos turisticos

### Acronimos del Negocio
- **APINS**: Nombre del proyecto (Isla Apipe)
- **RPA**: Rio Parana (area geografica)
- **ECO**: Ecorregion (para secciones ambientales)

### Acronimos Tecnicos
- **API**: Application Programming Interface (para backend Python)
- **SSR**: Server-Side Rendering (Next.js)
- **SEO**: Search Engine Optimization
- **JSON**: JavaScript Object Notation

---

## Estados y Enumeraciones Comunes

### Estado de Seccion
- `ACTIVA`: La seccion esta publicada y visible
- `BORRADOR`: La seccion esta en desarrollo, no visible
- `ARCHIVADA`: La seccion fue removida del sitio activo

### Estado de Contenido
- `PENDIENTE`: Contenido por crear
- `LISTO`: Contenido completado y validado
- `EN_REVISION`: Contenido en proceso de revision

---

## Coloquialismos y Jerga Interna
- **"La Isla"**: Se refiere siempre a Isla Apipe Grande
- **"El Rio"**: Se refiere al Rio Parana
- **"Corrientes"**: Se refiere a la Provincia de Corrientes, no a la ciudad

---

Ultima actualizacion: [YYYY-MM-DD]
Actualizado por: [NOMBRE]
