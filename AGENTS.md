# Reglas del proyecto: proyecto-sgie

- **Tipo:** web. **Descripción inicial:** completar `docs/00-alcance.md`.
- Usa español en explicaciones y documentación (nombres de funciones/clases pueden estar en inglés).
- Antes de cambios relevantes: lee el alcance, explica plan y riesgos y confirma los criterios de aceptación. No implementes funcionalidades ambiguas a ciegas.
- Mantén cambios pequeños, funciones simples y lógica desacoplada de la interfaz.
- Documenta decisiones no triviales con un ADR en `docs/decisiones/`.
- Añade pruebas para correcciones y funcionalidades; no declares que pasaron sin ejecutarlas.
- Evita dependencias sin necesidad, registra versiones y cambios de esquema.
- No incluyas credenciales, datos de clientes ni tokens en repositorios ni logs.
- Nunca hagas despliegue, push, borrado masivo, migraciones destructivas o cambios en producción sin aprobación explícita.
- Revisa permisos, sanitización, autorización y errores; no desactives controles para conseguir que un test pase.
- Usa `@planificar-funcionalidad` para tareas amplias, `@revision-calidad` para QA y `@seguridad-basica` para auditorías preliminares.
- Usa los subagentes `architect`, `reviewer` y `qa` como asesores de solo lectura, no como mecanismos automáticos de aprobación.

## Perfil de tecnología

JavaScript web nativo; datos del ejemplo guardados en localStorage (no backend)

## Comandos de validación

`npm ci`, `npm test`, `npm run build` y `npm run dev`.
