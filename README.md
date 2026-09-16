# 🚀 OpenCode v2.0 - Sistema de Documentación de Contexto

**Tu plantilla escalable para todos tus proyectos. Estructura, documentación inteligente y flujo de trabajo garantizado.**

---

## 📦 ¿Qué Incluye Este Pack?

### 4 Documentos Principales

| Archivo | Propósito |
|---------|-----------|
| **OPENCODE_INIT.md** | 📚 Guía completa de inicialización. Contiene el cuestionario discovery y explicación de todas las fases |
| **IMPLEMENTACION_PLANTILLA.md** | 🛠️ Paso a paso para implementar la plantilla en proyectos nuevos o existentes |
| **TEMPLATE_VACIO.md** | 📋 Los 10 archivos listos para copiar/pegar. Solo completa los `[CAMPOS]` |
| **README.md** | 📄 Este archivo. Resumen y guía rápida |

---

## 🎯 Antes vs Después

### ❌ Antes (Sin Plantilla)
```
Usuario: "Necesito agregar feature X"
OpenCode: Asume cosas, erra la arquitectura, no documenta
Usuario: Confundido, trabajo perdido, debe repetir
```

### ✅ Después (Con Plantilla)
```
Usuario: "Necesito agregar feature X"
OpenCode: 
  1. Lee 8 docs (2 min) ✓
  2. Pregunta "¿Así?: [plan]" 
  3. Usuario: "✓ Procede"
  4. OpenCode: Implementa paso a paso, valida, documenta
  5. Usuario: "Listo, funciona, entiendo qué pasó"
```

---

## 🚀 Quick Start (5 minutos)

### Para Proyecto NUEVO
1. Lee `OPENCODE_INIT.md` Fase 0 (cuestionario)
2. Responde las 6 preguntas
3. Dale al usuario las respuestas a OpenCode
4. OpenCode genera los 8 docs automáticamente
5. Valida que sean correctos
6. ¡Listo! Empieza a trabajar

### Para Proyecto EXISTING
1. Lee `OPENCODE_INIT.md` Fase 0 (cuestionario)
2. Responde las 6 preguntas describiendo el estado ACTUAL
3. Dale las respuestas a OpenCode
4. OpenCode analiza tu repo y genera los 8 docs
5. Valida/corrige basado en lo que ve
6. ¡Listo! Empieza a trabajar

### Para Copiar la Plantilla Completa
1. Abre `TEMPLATE_VACIO.md`
2. Copia cada uno de los 10 archivos
3. Pegalos en tu proyecto en la estructura correcta
4. Llena todos los `[CAMPOS]`
5. ¡Listo!

---

## 📚 Los 8 Documentos de Contexto

### 1️⃣ `arquitectura.md` 🏗️
**Qué**: Stack tech, estructura de carpetas, flujo de datos
**Para quién**: Developers nuevos, entender el big picture
**Tiempo lectura**: 2-3 min

### 2️⃣ `convenciones.md` ✍️
**Qué**: Cómo se escribe código aquí (naming, formato, patrones)
**Para quién**: Developers, evitar discusiones estériles
**Tiempo lectura**: 3-4 min

### 3️⃣ `decisiones.md` 🤔
**Qué**: Por qué se eligió este stack, patrón, herramienta
**Para quién**: Developers sénior, architects, para no repetir errores
**Tiempo lectura**: 4-5 min

### 4️⃣ `glosario.md` 📖
**Qué**: Términos del dominio, entidades, siglas internas
**Para quién**: Developers nuevos, evitar confusiones
**Tiempo lectura**: 2 min

### 5️⃣ `flujo-de-trabajo.md` 🔄
**Qué**: Cómo hacer un cambio, PR process, deploy
**Para quién**: Developers, cuando quieren contribuir
**Tiempo lectura**: 5 min

### 6️⃣ `errores-conocidos.md` ⚠️
**Qué**: Bugs, gotchas, code smells, deuda técnica
**Para quién**: Todos, especialmente antes de tocar código frágil
**Tiempo lectura**: 3-5 min

### 7️⃣ `historial.md` 📜
**Qué**: Log de cambios, lecciones aprendidas, evolución
**Para quién**: Documentar decisiones y cambios a medida que ocurren
**Tiempo lectura**: Variable

### 8️⃣ `forma-de-trabajo-con-el-usuario.md` 🤝
**Qué**: Cómo OpenCode debe trabajar contigo (modo, velocidad, reglas)
**Para quién**: OpenCode (es su instructivo), tú (defines reglas)
**Tiempo lectura**: 2 min

---

## 🔧 Los 2 Archivos de Configuración

### 9️⃣ `AGENTS.md` 🤖
**Qué**: Instrucciones para OpenCode (protocolo, checklist, reglas)
**Ubicación**: Raíz del proyecto
**Quién lo lee**: OpenCode, antes de cada sesión
**Por qué**: Define cómo trabaja OpenCode

```
OpenCode:
  1. Lee esto primero
  2. Lee los 8 docs
  3. Sigue el protocolo
  4. Valida cambios
  5. Documenta todo
```

### 🔟 `opencode.json` ⚙️
**Qué**: Config JSON con respuestas al cuestionario, metadata, checklist
**Ubicación**: Raíz del proyecto
**Estructura**:
```json
{
  "projectMetadata": {...},        // Nombre, tipo, versión
  "discoveryAnswers": {...},       // Respuestas al cuestionario
  "agentConfig": {...},            // Config de operación
  "qualityChecklist": {...},       // Qué validar
  "lastSession": "YYYY-MM-DD"      // Tracking
}
```

---

## 🔄 Flujo de Trabajo Garantizado

### Primera Sesión (Setup)

```
1. Cuestionario Discovery (30-45 min)
   ↓
2. Análisis Automático del Repo (5-10 min)
   ↓
3. Generación de 8 Docs (5-10 min)
   ↓
4. Presentación y Validación (10-15 min)
   ↓
5. Ajustes Iterativos (10-20 min)
   ↓
6. Setup de Preferencias (5-10 min)
   ↓
7. Primera Prueba (10-20 min)
   ↓
✅ Sistema Listo
```

**Tiempo Total**: ~2 horas

### Sesiones Posteriores (Cada vez que pidas algo)

```
TÚ: "Necesito hacer X"
  ↓
OPENCODE: Lee los 8 docs (2 min)
  ↓
OPENCODE: Valida contexto (inconsistencias? desactualizaciones?)
  ↓
OPENCODE: Propone plan + alternativas
  ↓
TÚ: Confirma / Modifica
  ↓
OPENCODE: Implementa PASO A PASO
  ├─ Después de cada paso: valida calidad
  ├─ Si encuentra bugs: PAUSA y reporta
  └─ Al final: documenta cambios
  ↓
✅ Cambio + Documentación + Aprendizaje
```

**Tiempo**: Variable (depende de complejidad)

---

## ✨ Mejoras Clave vs Plantilla Original

### ❌ Problemas de la Plantilla Original
- No había cuestionario inicial (OpenCode adivinaba)
- No había validación paso a paso (errores sin notar)
- No diferenciaba proyecto nuevo vs existing
- No escalaba bien (no adaptable a proyecto grande/pequeño)
- No documentaba cómo OpenCode debería trabajar
- Sin historial de cambios

### ✅ Soluciones en v2.0
| Problema | Solución |
|----------|----------|
| Falta de context | **Cuestionario discovery exhaustivo (6 bloques)** |
| Errores no detectados | **Validación paso a paso + checklist de calidad** |
| No adaptable | **Configuración flexible en forma-de-trabajo-con-el-usuario.md** |
| No escalable | **Estructura modular, fields opcionales, secciones adaptables** |
| OpenCode adivinaba | **AGENTS.md define exactamente cómo trabajar** |
| Sin historia | **historial.md + últimas actualizaciones en cada doc** |

---

## 🎯 Casos de Uso

### Caso 1: Proyecto Web SPA con React
- Stack: React, TypeScript, Vite, Node.js
- Tamaño: 20k LOC
- Equipo: 3 developers
- Tiempo setup: ~1.5 horas
- Resultado: 8 docs + 2 config, OpenCode lista en próxima sesión

### Caso 2: Proyecto CLI en Rust
- Stack: Rust, Clap, Tokio
- Tamaño: 5k LOC
- Equipo: Solo tú
- Tiempo setup: ~45 min
- Resultado: 8 docs ajustados a Rust, OpenCode lista

### Caso 3: Monorepo (backend + frontend + mobile)
- Stack: Node.js, React, React Native
- Tamaño: 100k+ LOC
- Equipo: 10+ developers
- Tiempo setup: ~3 horas
- Resultado: 8 docs + sub-contextos (por workspace), OpenCode lista

---

## 📋 Arquivos del Pack

```
pack-plantilla-opencode-v2.0/
├── README.md                      ← Estás aquí
├── OPENCODE_INIT.md              ← Guía completa
├── IMPLEMENTACION_PLANTILLA.md   ← Paso a paso
└── TEMPLATE_VACIO.md             ← 10 archivos para copiar
```

---

## 🎓 Recomendaciones de Lectura

### Si tienes 5 minutos
1. Lee este README
2. Mira el "Quick Start"
3. ¡Ya sabes qué hacer!

### Si tienes 15 minutos
1. Lee este README
2. Lee `OPENCODE_INIT.md` - Fases 0 a 3
3. Entiende el flow general

### Si tienes 1 hora
1. Lee TODO este README
2. Lee TODO `OPENCODE_INIT.md`
3. Lee secciones clave de `IMPLEMENTACION_PLANTILLA.md`
4. Abre `TEMPLATE_VACIO.md` y entiende la estructura
5. ¡Estás listo para setup!

### Si quieres copiar la plantilla directamente
1. Abre `TEMPLATE_VACIO.md`
2. Copia cada archivo
3. Pega en tu proyecto
4. Completa los `[CAMPOS]`
5. ¡Listo!

---

## 🚀 Primeros Pasos

### Opción A: Proyecto Completamente Nuevo
```
1. Lee OPENCODE_INIT.md
2. Responde el cuestionario (Bloque 1-6)
3. Comparte respuestas con OpenCode
4. OpenCode genera los 8 docs
5. Valida que sean correctos
6. ¡Empieza a trabajar!
```

### Opción B: Proyecto Existente
```
1. Lee OPENCODE_INIT.md
2. Responde el cuestionario describiendo el estado ACTUAL
3. Comparte respuestas con OpenCode
4. OpenCode analiza tu repo
5. OpenCode genera los 8 docs (basado en lo que ve)
6. Valida/corrige
7. ¡Empieza a trabajar!
```

### Opción C: Copiar Plantilla Directamente
```
1. Abre TEMPLATE_VACIO.md
2. Copia los 10 archivos
3. Pega en tu proyecto (estructura correcta)
4. Llena todos los [CAMPOS] según tu proyecto
5. ¡Listo!
```

---

## 💡 Tips para Éxito

### Tip 1: Sé Específico en el Cuestionario
- No digas "usamos React". Di "usamos React 18.2 con TypeScript 5.1, vite, y zustand"
- No digas "pequeño equipo". Di "3 developers, 1 designer, sin QA dedicado"
- OpenCode es tan bueno como la información que le des

### Tip 2: Completa los Docs con Ejemplos Reales
- No dejes `[COMPLETAR]` vacío
- Pon código real, rutas reales, errores reales
- Los ejemplos son más útiles que las explicaciones genéricas

### Tip 3: Mantén los Docs Vivos
- Después de cada sesión, verifica que los docs estén actualizados
- Si OpenCode encontró algo nuevo, documéntalo
- Un doc desactualizó es peor que no tener doc

### Tip 4: Define Bien tus Preferencias
- En `forma-de-trabajo-con-el-usuario.md`, sé explícito
- "Quiero que preguntes antes de cualquier cambio mayor"
- "Quiero que vaya rápido, no me importan los detalles"
- OpenCode se adapta a tus preferencias

### Tip 5: Usa el Cuestionario Discovery
- No te lo saltes
- Es 30 minutos bien invertidos
- OpenCode entiende tu proyecto desde el inicio
- Ahorra horas de malentendidos después

---

## 🐛 FAQ

### P: ¿Cuánto tiempo toma hacer setup?
**R**: ~2 horas para setup completo. Pero después, cada sesión es más rápida (OpenCode lee los docs en 2 min).

### P: ¿Funciona para equipos grandes?
**R**: Sí. Scalea bien: proyecto pequeño (~5k LOC) vs grande (>100k LOC). Ajusta nivel de detalle según el caso.

### P: ¿Puedo cambiar los documentos después?
**R**: Sí, totalmente. La plantilla es flexible. Agrega secciones, elimina las que no necesites, adapta al proyecto.

### P: ¿Qué pasa si me equivoco en el cuestionario?
**R**: No problem. OpenCode va a validar basado en lo que ve en tu repo. Si hay inconsistencias, las detecta.

### P: ¿Es obligatorio llenar TODO?
**R**: Idealmente sí, pero es flexible. Si algo no aplica al proyecto, ponlo como [NO APLICA]. OpenCode lo entiende.

### P: ¿Puedo usar esto con CI/CD?
**R**: Sí. De hecho, es recomendable. El checklist de calidad se puede automatizar.

### P: ¿Cómo hago si tengo proyecto existing con mucho código?
**R**: OpenCode analiza el repo y genera los docs. Luego tú validas/corriges basado en lo que ves. Iterativo, no es magia.

### P: ¿Funciona con diferentes lenguajes?
**R**: Sí. React, Vue, Angular, Node.js, Python, Rust, Go, etc. La plantilla es agnóstica al lenguaje.

---

## 📞 Soporte

### Algo no funciona
1. Revisa si completaste bien el cuestionario
2. Verifica que los docs están en la carpeta correcta
3. Revisa `AGENTS.md` para entender el protocolo
4. Pregunta a OpenCode ("¿Estoy usando mal el sistema?")

### Cambios en el protocolo
1. Edita `forma-de-trabajo-con-el-usuario.md`
2. OpenCode lo leerá en la próxima sesión
3. Documenta el cambio en `historial.md`

### Nuevo proyecto / Nueva plantilla
1. Copia `TEMPLATE_VACIO.md` 
2. Sigue el proceso de setup nuevamente
3. Reutiliza docs anteriores como referencia (patrones similares)

---

## 🎉 ¡Listo para Empezar!

### Resumen en 1 minuto
```
1. Lee OPENCODE_INIT.md
2. Responde el cuestionario (o copia TEMPLATE_VACIO.md)
3. OpenCode genera 8 docs + 2 config
4. Valida que sean correctos
5. Empieza a trabajar con confianza
```

**Tu proyecto, documentado. OpenCode, configurado. Desarrollo, fluido. ✨**

---

## 📚 Documentos Incluidos

- ✅ `OPENCODE_INIT.md` - Guía completa (25+ páginas)
- ✅ `IMPLEMENTACION_PLANTILLA.md` - Paso a paso (10+ páginas)
- ✅ `TEMPLATE_VACIO.md` - 10 archivos listos (15+ páginas)
- ✅ `README.md` - Este archivo (resumen)

**Total: 60+ páginas de documentación, guías y ejemplos.**

---

**Última actualización**: Julio 2026
**Versión**: 2.0
**Autor**: OpenCode System
**Licencia**: Libre para usar en tus proyectos

---

¡Que disfrutes mejor control, mejor documentación y mejor trabajo con OpenCode! 🚀
