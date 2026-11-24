# proyecto-sgie

Proyecto independiente generado a partir del **Starter Kit Maestro OpenCode + VS Code**.

**Perfil:** `web`.

## Primeros pasos

```bash
npm ci
npm test
npm run build
npm run dev
```
Visita http://127.0.0.1:5173.

## Trabajo con IA

1. Abre esta carpeta con `code .`.
2. Ejecuta `opencode` y selecciona tu proveedor/modelo (primera vez: `/connect`, `/models`).
3. Completa `docs/00-alcance.md` y pide a OpenCode revisar `AGENTS.md`.
4. Usa `@planificar-funcionalidad` antes de funcionalidades grandes.
5. Usa el subagente `reviewer` y `@revision-calidad` antes de hacer PR.

## Control de versiones

```bash
git init -b main
git add .
git commit -m "chore: inicio del proyecto"
```

Para subir a GitHub, autentícate con `gh auth login` y crea un repositorio nuevo desde esta carpeta.

## Limitaciones iniciales

Frontend de demostración sin autenticación, backend ni base de datos. No almacenes información sensible en localStorage.

Los agentes no sustituyen la revisión humana, ni esta plantilla viene conectada a bases de datos, hosting o modelos de IA por defecto.
