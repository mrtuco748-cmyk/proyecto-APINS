# Errores Conocidos y Deuda Tecnica - APINS

## Formato de Registro

```
### [SEVERIDAD] - [Nombre del problema]
- Donde: [Archivo/Funcion/Componente]
- Que pasa: [Descripcion clara del problema]
- Impacto: [Como afecta a usuarios/desarrolladores]
- Sintomas: [Como se manifiesta]
- Causa raiz: [Por que pasa]
- Workaround: [Solucion temporal si existe]
- Fix permanente: [Que hace falta]
- Prioridad: [CRITICA|ALTA|MEDIA|BAJA]
- Esfuerzo estimado: [BAJO|MEDIO|ALTO]
- Asignado a: [Usuario o "Sin asignar"]
- Estado: [ABIERTO|EN PROGRESO|BLOQUEADO]
```

---

## Bugs Activos

No hay bugs activos registrados. El proyecto esta en Day 1.

---

## Code Smells

### Duplicacion de Logicos (esperada al crecer)
- **Ubicacion**: Al agregar secciones
- **Descripcion**: Posible duplicacion de logica de renderizado entre secciones
- **Refactor**: Extraer componentes compartidos
- **Prioridad**: MEDIA

---

## Inconsistencias

### Inconsistencia de Stack (Python + Next.js)
- **Donde se ve**: Estructura del proyecto
- **Que es inconsistente**: Dos lenguajes y ecosistemas diferentes
- **Por que ocurre**: Decision de diseño inicial
- **Como fix**: Documentar bien la separacion, usar scripts de build unificados

---

## Gotchas (Cosas No Obvias)

### Gotcha: Sin base de datos definida
- **Descripcion**: El proyecto asume datos embebidos, lo que puede limitar funcionalidad futura
- **Cuando ocurre**: Al querer agregar datos dinamicos
- **Como evitar**: Planificar migracion a BD desde el inicio si se espera crecimiento
- **Ejemplo**: Si se necesitan usuarios, se necesitaria BD

### Gotcha: Desarrollador solo
- **Descripcion**: Un solo desarrollador puede ser cuello de botella
- **Cuando ocurre**: Cuando el proyecto crece y el volumen de trabajo aumenta
- **Como evitar**: Documentar bien para facilitar onboarding futuro
- **Ejemplo**: Sin documentacion, un nuevo dev tardaria mas en entender el proyecto

---

## Deuda Tecnica

### Refactors Pendientes
- [ ] Definir framework Python especifico (FastAPI/Flask)
- [ ] Implementar sistema de testing completo
- [ ] Agregar TypeScript strict mode
- [ ] Configurar pre-commit hooks

### Librerias Desactualizadas
| Librería | Version Actual | Ultima | Estado |
|---|---|---|---|
| [Completar] | [v.1.0] | [v.2.0] | [SEGURA|DEPRECADA|INSEGURA] |

### Configuracion Mejorable
- [ ] Configurar CI/CD
- [ ] Agregar prettier/eslint config formal
- [ ] Definir TypeScript strict mode

---

## Secretos y Seguridad

### Secretos Expuestos Historicos
- [ ] Ninguno hasta el momento

### Vulnerabilidades Conocidas
- [ ] Ninguna conocida (proyecto nuevo)

### Validaciones Debiles
- **En**: [Definir cuando se agregue validacion]
- **Problema**: [Definir]
- **Riesgo**: [Definir]
- **Fix**: [Definir]

---

## Performance Issues

### Bottleneck: Sin problemas conocidos
- **Ubicacion**: N/A
- **Sintomas**: N/A
- **Causa**: N/A
- **Workaround**: N/A
- **Fix**: N/A

---

## Ultimas Actualizaciones
- Ultima revision: [YYYY-MM-DD]
- Revisado por: [NOMBRE]
- Proxima revision programada: [YYYY-MM-DD]
