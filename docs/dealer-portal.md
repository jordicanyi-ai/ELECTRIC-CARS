# Área privada de concesionarios — preparación (NO activa)

## Estado
El comparador público y la sección de venta existente siguen intactos. Esta fase prepara el modelo de datos y las reglas de acceso, pero **no habilita todavía** registro, inicio de sesión, carga de fotos ni publicación desde el navegador. No hay credenciales, claves ni usuarios reales en GitHub.

## Arquitectura
- Frontend: Cloudflare Pages, en `electricos.eu`.
- Backend propuesto: Supabase Auth + PostgreSQL con Row Level Security.
- Cada concesionario tiene miembros asignados; no puede ver borradores ni gestionar anuncios ajenos.
- El administrador valida los anuncios antes de publicarlos.
- El precio de venta es al contado, IVA incluido, sin descontar ayudas.
- Mantener el catálogo de modelos en `data/cars.js` y referenciar su ID estable.

## Flujo previsto
1. Administrador da de alta y verifica un concesionario.
2. Asigna una cuenta autenticada como propietario del concesionario.
3. El concesionario crea/edita borradores y solicita revisión.
4. El administrador aprueba o rechaza. Solo se muestran anuncios publicados, vigentes y de concesionarios activos.
5. El concesionario puede marcar vendido o retirar, pero nunca autoaprobar.
6. Las fotos se guardan en almacenamiento privado con reglas de propiedad y publicación controlada.

## Seguridad antes de lanzar
- Crear proyecto Supabase y ejecutar `supabase/dealers_schema.sql` en entorno de prueba.
- Implementar aprobación mediante función administrativa segura (nunca con la clave service-role en el navegador).
- Añadir políticas Storage y validación de MIME, tamaño, cuota y cantidad de imágenes.
- Revisar la política de actualización para impedir cambiar `dealer_id`, `status` aprobado y otros campos protegidos mediante una función RPC o trigger. **No abrir acceso de escritura a producción antes de ello.**
- Probar dos concesionarios y un administrador, incluidas pruebas de acceso cruzado, caducidad, venta y retirada.
- Configurar confirmación de correo, recuperación de contraseña, protección antiabuso, privacidad y retención de datos.
- No publicar formularios ni rutas de administración hasta completar las pruebas.

## Próximo paso
Conectar el proyecto Supabase de prueba y desarrollar una zona privada real detrás de Auth. El frontend público no debe ofrecer enlaces a esta zona durante la preparación.
