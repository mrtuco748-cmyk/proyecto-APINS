# Convenciones del Proyecto APINS

## Estilo de Codigo

### Naming Conventions

#### Variables
- Patron: camelCase
- Ejemplos:
  ```
  const islaData = { ... }
  let tituloSeccion = "Isla Apipe"
  ```

#### Funciones/Metodos
- Patron: camelCase
- Ejemplos:
  ```
  function cargarDatosIsla() { ... }
  const getInformacionGeografica = () => { ... }
  ```

#### Clases/Tipos
- Patron: PascalCase
- Ejemplos:
  ```
  class DatosIsla { ... }
  class SeccionTuristica { ... }
  ```

#### Constantes
- Patron: SCREAMING_SNAKE_CASE
- Ejemplos:
  ```
  const MAX_IMAGENES = 10
  const API_VERSION = "v1"
  ```

#### Archivos y Carpetas
- Patron: kebab-case
- Convencion: un archivo por componente, agrupar por feature
- Ejemplos:
  ```
  ✅ src/pages/home.tsx
  ✅ src/components/info-isla.tsx
  ✅ src/data/datos-geograficos.json
  ❌ src/Pages/Home.jsx
  ❌ src/components/Info_Isla.tsx
  ```

---

### Formato de Codigo

#### Indentacion
- Espacios: 2 caracteres
- Herramienta: prettier (para Next.js/TypeScript), black (para Python)

#### Linea Maxima
- Ancho maximo: 100 caracteres

#### Espacios en Blanco
- Espacio alrededor de operadores: si
- Espacio en brackets: si

#### Comillas
- Usar: comillas dobles
- Excepciones: strings con comillas dobles adentro usar simples

---

### Imports

#### Orden de Imports (Next.js/TypeScript)
1. Librerias de React/Next
2. Librerias terceras
3. Imports locales de componentes
4. Imports relativos

#### Ejemplos
```typescript
// CORRECTO
import React from 'react';
import { useState } from 'react';
import InfoIsla from '@/components/InfoIsla';
import { datosIsla } from '@/data/datos-isla';

// INCORRECTO
import InfoIsla from '@/components/InfoIsla';
import React from 'react';
```

#### Reglas Especiales
- Los imports de Python siguen PEP 8 (stdlib, third-party, local)

---

## Patrones Usados

### Patrones Arquitectonicos
- Server-Side Rendering (SSR) via Next.js/Nuxt
- Separacion frontend/backend (Next.js + Python)
- Datos embebidos o archivos JSON estaticos

### Patrones de Codigo
- Componentes funcionales con hooks (Next.js)
- Funciones puras para procesamiento de datos (Python)
- Separacion de datos y presentacion

### Patrones de Estado
- Estado local de componente (useState)
- Props drilling para componentes hijos
- Sin estado global (por simplicidad)

### Patrones de Asincronia
- Promesas/async-await (TypeScript)
- async/await (Python)

---

## Patrones Prohibidos

### NO Hacer
- Usar clases en TypeScript cuando sea funcional (a menos que sea necesario)
- Embebir datos directamente en componentes (usar archivos JSON separados)
- Usar `any` en TypeScript
- Importar archivos de forma desordenada
- Codigo sin type annotations en Python

### Alternativas Recomendadas
- Usar componentes funcionales + hooks en lugar de clases
- Usar archivos de datos separados
- Usar tipos estrictos

---

## Testing

### Framework
- Framework: jest/vitest (para TypeScript/Next.js)
- Framework: pytest (para Python)
- Version: [COMPLETAR]

### Convenciones
- Ubicacion: src/__tests__ o src/components/[Nombre].test.ts
- Naming: .test.ts o .spec.ts
- Ejemplos:
  ```
  ✅ src/components/__tests__/InfoIsla.test.tsx
  ✅ src/data/__tests__/datos.test.ts
  ```

### Cobertura
- Minimo requerido: 80%
- Comando: `npm test -- --coverage` o `pytest --cov`

### Patron AAA (Arrange-Act-Assert)
```typescript
// CORRECTO
describe('cargarDatosIsla', () => {
  it('should return isla data correctly', () => {
    // Arrange
    const input = 'isla';
    
    // Act
    const result = cargarDatosIsla(input);
    
    // Assert
    expect(result.nombre).toBe('Isla Apipe');
  });
});
```

### Tests por Tipo

#### Unit Tests
- Probar componentes individuales
- Probar funciones de procesamiento de datos (Python)

#### Integration Tests
- Probar flujos entre frontend y datos
- Probar paginas completas

---

## Commits

### Formato
- Estilo: Conventional Commits
- Patron: `[type]: [message]`

### Tipos
- [feat]: Nueva feature
- [fix]: Bugfix
- [refactor]: Refactoring sin cambio funcional
- [docs]: Cambios de documentacion
- [test]: Cambios en tests
- [chore]: Build, deps, etc.

### Ejemplos
```
✅ feat: add isla information section
✅ fix: resolve data loading issue
✅ docs: update arquitectura for Python backend
✅ test: add unit tests for datos-isla

❌ update stuff
❌ fixed things
```

### Reglas
- Primera linea < 50 caracteres
- Imperativo: "add", no "added" o "adds"
- Referencia issues si aplica

---

## Excepciones y Irregularidades

### Donde NO se Sigue la Convencion
- [Definir segun el proyecto avance]

### Por Que
[EXPLICAR]

### Se Puede Cambiar?
- [ ] Si es deuda tecnica
- [ ] No hay razon especifica
- [ ] Tal vez requiere refactoring

---

## Reglas NO-NEGOCIABLES (Definidas por el desarrollador)

- No usar emojis en ningun archivo de codigo o documentacion
- TypeScript estricto donde se use
- Commits con mensaje claro (Conventional Commits)
- Sin valores hardcodeados en componentes (usar datos separados)

---

## Ultima Actualizacion
Fecha: [YYYY-MM-DD]
Actualizado por: [NOMBRE]
Cambios principales: Setup inicial
