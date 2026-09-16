# AGENTS.md - Instrucciones para OpenCode

## Protocolo de Inicio (En cada sesion nueva)

### 1 Carga Contextual
- Leer docs/contexto/forma-de-trabajo-con-el-usuario.md PRIMERO
- Leer todos los 8 docs de contexto en este orden:
  1. glosario.md (entender el lenguaje del proyecto)
  2. arquitectura.md (entender la estructura)
  3. convenciones.md (entender las reglas)
  4. decisiones.md (entender el porque)
  5. flujo-de-trabajo.md (entender como se trabaja)
  6. errores-conocidos.md (entender las trampas)
  7. historial.md (entender la evolucion)
  8. Revisar cambios recientes si existen

### 2 Validacion de Contexto
- Si algun doc esta vacio o incompleto, AVISAR al usuario
- Si hay inconsistencias entre docs, ALERTAR
- Si hay cambios en el codigo no reflejados en docs, ACTUALIZAR

### 3 Modo de Operacion
- SIEMPRE preguntar antes de cambios mayores
- NUNCA asumir preferencias del usuario
- Si forma-de-trabajo-con-el-usuario.md esta vacio:
  - Hacer las preguntas de los bloques 4 y 6 de OPENCODE_INIT.md
  - Guardar respuestas en ese archivo
  - Esperar confirmacion antes de continuar

### 4 Reglas NO-NEGOCIABLES del Proyecto
- NO USAR EMOJIS en codigo, documentacion ni respuestas
- Usar Conventional Commits
- TypeScript strict mode donde aplique
- Sin hardcoded values en componentes
- Test passante antes de considerar tarea completa

### 5 Proceso de Cambios (PASO A PASO)

Para CUALQUIER cambio significativo:

1 COMUNICAR: Que quiero hacer
  - Mostrar el cambio propuesto
  - Explicar impacto
  - Listar alternativas

2 VALIDAR: Esperar confirmacion del usuario
  - ✅ = proceder
  - ❌ = cancelar, preguntar que cambiar
  - 🤔 = usuario propone variacion, volver a paso 1

3 IMPLEMENTAR: Hacer el cambio
  - Seguir convenciones del proyecto
  - Parar despues de cada archivo/funcion importante
  - Mostrar resultado

4 VERIFICAR: Validar lo hecho
  - ¿Compila/funciona?
  - ¿Sigue convenciones?
  - ¿Tiene errores obvios?
  - PARAR Y REPORTAR errores/concerns ANTES de continuar

5 DOCUMENTAR: Actualizar contexto
  - Agregar entrada a historial.md
  - Actualizar decisiones.md si aplica
  - Actualizar errores-conocidos.md si aplica
  - Actualizar convenciones.md si establece nueva

### 6 Checklist de Calidad (Hacer ANTES de dar por terminado)

Validar:
- El codigo sigue convenciones del proyecto
- No hay imports muertos
- No hay duplicacion de logica
- No hay valores hardcodeados (excepto constantes)
- Los cambios afectan a los tests (que hay que actualizar)
- Los commits tienen mensaje claro
- No hay secretos o datos sensibles expuestos
- La documentación está actualizada
- No hay code smells obvios

---

## Modo Escalado (para cambios complejos)

Si el cambio afecta múltiples archivos o es arquitectónico:

1 Crear plan detallado (mostrar al usuario)
2 Desglosar en pasos pequeños
3 Validar después de cada paso
4 Documentar transversalmente (que cambió dónde)
5 Hacer testing manual (si hay que probar la integración)

---

## Reglas NO-NEGOCIABLES Globales

- Basarse SOLO en lo que ve en el repo
- Documentar TODO lo que se hace
- Preguntar ANTES, no después
- Validar SIEMPRE la calidad
- No asumir nada: preguntar en caso de duda
- NO USAR EMOJIS BAJO NINGUNA CIRCUNSTANCIA
- Siempre presentar alternativas al usuario (modo consultivo)

---

Ultima actualizacion: [YYYY-MM-DD]
Actualizado por: [NOMBRE]
