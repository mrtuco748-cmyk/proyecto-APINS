# Forma de Trabajo con el Usuario - APINS

## Modo de Operacion General
Elegido: consultivo

### Descripcion
El usuario prefiere ver opciones y elegir. OpenCode debe presentar alternativas antes de actuar. El usuario decide el camino a seguir.

### Ejemplos de Interaccion
```
OpenCode: "Quiero agregar una seccion de gastronomia. Opciones:
  1. Seccion simple con lista de platos
  2. Seccion con filtros por tipo de comida
  3. Seccion con busqueda

¿Cual prefieres?"
```

### Regla No-Negotiable
No usar emojis en ningun archivo de codigo, documentacion ni respuesta.

---

## Velocidad de Cambios
Elegida: rapido

### Que Significa
OpenCode puede hacer varias cosas sin pausar entre medias. Menos interrupciones, más velocidad.

### Por Que Esta Eleccion
El desarrollador es solo una persona y quiere avanzar rápido en el proyecto. Los cambios son de un proyecto personal pequeño.

---

## Nivel de Detalle
Elegido: exhaustivo

### Que Incluir/Excluir
- Incluir: Todas las alternativas, tradeoffs, impactos, ejemplos de codigo completos
- Excluir: Explicaciones demasiado basicas, repetir lo que ya esta documentado

---

## Reglas NO-NEGOCIABLES

### Reglas Sagradas
- No usar emojis bajo ninguna circunstancia
- Conventional Commits en todos los mensajes
- TypeScript strict mode donde se use
- Sin valores hardcodeados en componentes
- Test passante antes de considerar tarea completada

### Areas Intocables
- [Definir segun avance el proyecto]

### Reglas de Negocio Criticas
- La informacion sobre Isla Apipe debe ser precisa y respetuosa con la cultura local
- El contenido debe estar disponible en español
- Sin datos sensibles ni personales de habitantes

---

## Herramientas Obligatorias

| Categoria | Herramienta | Configuracion | Comando |
|---|---|---|---|
| Linter | [pendiente de definir] | [pendiente] | [pendiente] |
| Testing | [pendiente de definir] | [pendiente] | [pendiente] |
| CI/CD | Vercel | Integracion git | Auto |
| Format | [pendiente de definir] | [pendiente] | [pendiente] |

---

## Checklist Antes de Cada Accion Significativa

- [ ] Leer los 8 docs de contexto (especialmente el relevante)
- [ ] Identificar que cambiaria
- [ ] Comunicar al usuario ANTES de actuar
- [ ] Esperar confirmacion explicita (✅/❌/🤔)
- [ ] Listar alternativas si hay varias opciones
- [ ] Validar cambios post-ejecución

---

## Feedback Loop

### Frecuencia de Actualizaciones
Cada paso: El usuario prefiere ver los resultados después de cada cambio significativo

### Como Reportar Issues
[Definir segun avance]

### Como Hacer Feature Requests
[Definir segun avance]

---

## Documentacion Automatica

Despues de cada accion significativa, actualizar:
- [ ] historial.md: Que se hizo
- [ ] decisiones.md: Si fue una decision (referencia a D-X)
- [ ] errores-conocidos.md: Si se descubrieron problemas
- [ ] convenciones.md: Si se establece algo nuevo
- [ ] Este archivo: Si la forma de trabajo cambió

---

## Ultima Actualizacion
Fecha: [YYYY-MM-DD]
Actualizado por: [NOMBRE]
Cambios principales: Setup inicial - definido modo consultivo, rápido, exhaustivo, sin emojis
