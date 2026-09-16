# Flujo de Trabajo y Desarrollo - APINS

## Setup Inicial

### Requisitos Previos
- Node.js 18+
- npm o pnpm
- Python 3.10+ (para el backend)
- Vercel CLI (opcional, para deploy local)

### Clonar y Instalar (Frontend Next.js)
```bash
git clone [REPO_URL]
cd proyecto-APINS
npm install
```

### Instalar Dependencias Python (Backend)
```bash
cd backend/  # si aplica
pip install -r requirements.txt
```

### Variables de Entorno
```bash
cp .env.example .env
# Editar .env con tus valores
```

### Correr Localmente
```bash
npm run dev
# Para Next.js, esto inicia en http://localhost:3000
```

### Verificar Setup
```bash
npm run test
# Debe pasar todos los tests
```

---

## Pasos para Hacer un Cambio

### 1. Crear Rama
```bash
git checkout -b [tipo]/[descripcion-breve]
# Ejemplo: git checkout -b feature/info-geografica
```

**Convencion de ramas**:
- `feature/[descripcion]`: Nueva feature
- `bugfix/[descripcion]`: Bugfix
- `refactor/[descripcion]`: Refactoring
- `docs/[descripcion]`: Documentacion

### 2. Hacer Cambios
- Seguir convenciones de codigo (ver 2-convenciones.md)
- Escribir/actualizar tests
- Documentar cambios significativos
- No usar emojis en commits ni codigo

### 3. Testing Local
```bash
# Correr tests
npm test

# Verificar linting
npm run lint

# Verificar formato
npm run format
```

Debe pasar TODO

### 4. Commit
```bash
git add [archivos]
git commit -m "[tipo]: [mensaje]"
```

Formato: Conventional Commits (ver 2-convenciones.md > Commits)

### 5. Push
```bash
git push origin [rama]
```

### 6. Pull Request
- Titulo claro y descriptivo
- Descripcion del cambio
- Referencia a issues si aplica
- Checklist completado
- Tests pasando

### 7. Code Review
- Al menos 1 aprobacion
- Cambios solicitados abordados
- CI/CD en verde

### 8. Merge
```bash
git merge [rama]
git branch -d [rama]
```

---

## Checklist de "Terminado"

### Antes de Hacer Push
- Codigo escrito y funcionando
- Nuevos tests agregados / existentes actualizados
- Cobertura de tests aceptable (80%+)
- Sin warnings de linter
- Formato de codigo correcto
- Commits con mensaje claro
- Sin archivos sin commitear

### Antes de PR
- Sin conflictos con main
- Titulo y descripcion claros
- Referencias a issues
- Checklist de PR completado

### Antes de Merge
- Aprobacion de review
- CI/CD pasando
- Tests pasando
- No hay deuda tecnica critica agregada

---

## Proceso de Deploy

### Ambientes
- **Development**: Local (npm run dev)
- **Production**: Vercel (deploy automatico desde main)

### Trigger de Deploy
- Automatico en merge a main (Vercel)
- Manual: `vercel --prod` si se necesita

### Pasos de Deploy

#### A Produccion
```bash
# Vercel hace deploy automatico desde git
# Solo mergear a main es suficiente
git checkout main
git pull origin main
```

### Checklist de Deploy
- Todos los tests pasan
- Linting limpio
- Build exitoso
- Sin variables de entorno faltantes

### Rollback
Si algo sale mal en Vercel:
```bash
# Vercel tiene rollback desde su dashboard
# O hacer revert del commit problemático
git revert [commit-problematico]
```

---

## Troubleshooting

### Problema: Next.js no compila
**Sintomas**: Errores de build, pagina en blanco
**Causa**: Errores de TypeScript, imports rotos
**Solucion**:
```bash
npm run build
# Revisar errores especificos
```

### Problema: Tests no pasan
**Sintomas**: Failures en test runner
**Causa**: Bug en codigo, test mal escrito
**Solucion**:
```bash
npm test
# Revisar cada failure
```

---

## Recursos Utiles
- Documentacion Next.js: https://nextjs.org/docs
- Documentacion Vercel: https://vercel.com/docs
- Documentacion Python: https://docs.python.org/3/

---

Ultima actualizacion: [YYYY-MM-DD]
Actualizado por: [NOMBRE]
