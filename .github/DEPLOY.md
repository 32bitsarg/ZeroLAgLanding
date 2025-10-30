# Configuración de Deploy Automático a Hostinger

Este proyecto usa GitHub Actions para desplegar automáticamente a Hostinger cada vez que se hace push a la rama `main`.

## Configuración de Secrets en GitHub

Debes configurar los siguientes secrets en tu repositorio de GitHub:

1. Ve a tu repositorio en GitHub
2. Click en **Settings** (Configuración)
3. En el menú lateral, click en **Secrets and variables** → **Actions**
4. Click en **New repository secret**
5. Agrega los siguientes secrets:

### Secrets necesarios:

| Nombre del Secret | Valor |
|-------------------|-------|
| `FTP_USERNAME` | `u253625720` |
| `FTP_PASSWORD` | Tu contraseña FTP de Hostinger |

## Datos de conexión FTP (referencia)

- **Servidor FTP:** 45.132.157.159
- **Puerto:** 21
- **Usuario:** u253625720
- **Directorio remoto:** /public_html/

## Cómo funciona

1. Cada vez que hagas `git push` a la rama `main`, se ejecuta automáticamente
2. GitHub Actions:
   - Instala Node.js 22
   - Instala dependencias (`npm ci`)
   - Compila el proyecto (`npm run build`)
   - Sube la carpeta `dist/` a `/public_html/` vía FTP

## Verificar el deploy

- Revisa el estado de los workflows en: **Actions** tab de tu repo
- Si falla, revisa los logs para ver el error
- Asegúrate de que los secrets estén configurados correctamente

## Comandos útiles localmente

```bash
# Build local para probar antes de pushear
npm run build

# Preview del build
npm run preview
```

## Notas de seguridad

⚠️ **Nunca** subas credenciales FTP al repositorio
✅ Siempre usa GitHub Secrets para información sensible

