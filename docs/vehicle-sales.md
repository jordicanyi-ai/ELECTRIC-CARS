# Coches en venta — preparación de la primera fase

La sección está implementada pero desactivada y sin anuncios de muestra. El menú y los enlaces de las fichas solo aparecen cuando hay al menos una unidad válida, publicada y vigente, de un concesionario activo.

## Primera fase: publicación gestionada

1. Recibir datos y fotografías del concesionario fuera del repositorio público.
2. Revisar precio al contado con IVA, versión, kilometraje, año, ubicación, fotos y datos de contacto profesionales destinados a publicación.
3. Preparar un JSON de stock revisado **fuera del repositorio** con las listas `dealers` y `listings` descritas abajo.
4. Ejecutar `node scripts/prepare-vehicle-sales.cjs /ruta/stock-revisado.json`.
5. Revisar el diff de `data/vehicle-sales.js` y publicar mediante el flujo habitual de GitHub. Las fotos locales deben existir en `img/sales/`; también se admiten URL HTTPS de fotos autorizadas.
6. Para retirar una unidad, marcarla como `sold`, `draft` o `withdrawn` en el archivo de trabajo y regenerar. Para renovar una unidad publicada, comprobar de nuevo su disponibilidad y actualizar su fecha de vencimiento.

El script rechaza unidades declaradas publicadas si tienen datos inválidos, fechas vencidas, identificadores duplicados, versiones desconocidas o un concesionario inactivo. Solo exporta unidades publicadas vigentes y sus concesionarios, con una lista cerrada de campos públicos. No se exportan notas internas, documentos ni borradores.

## Datos

Concesionario: `id` estable (letras, números, guion o guion bajo), `name`, `active: true`, y `email` y/o `phone` profesionales públicos. No incluir documentación fiscal, credenciales ni contactos privados.

Unidad:

| Campo | Significado |
| --- | --- |
| `id`, `dealerId` | Identificador de la unidad y del concesionario |
| `modelId` | `id` numérico existente en `data/cars.js`; no usar posiciones del array |
| `trimName` | Opcional; nombre exacto de una versión del modelo |
| `condition` | `new`, `demo` o `used` |
| `year`, `mileageKm` | Año y kilómetros como enteros |
| `price`, `currency`, `priceIncludesVat` | Precio al contado numérico, `EUR`, `true` |
| `city`, `province` | Ubicación pública del vehículo |
| `photos` | Una o más rutas `img/sales/...` o URL HTTPS |
| `status` | Solo `published` se exporta; `draft`, `sold` y `withdrawn` se omiten |
| `publishedAt`, `expiresAt` | Fechas ISO 8601 con zona horaria; la publicación debe ser anterior o igual al momento actual y el vencimiento posterior |

La ficha del modelo ofrece «Ver unidades en venta» cuando tiene stock activo. La sección permite buscar por modelo/localidad y filtrar por estado y precio; los resultados se ordenan por precio. Las unidades ofertadas no cambian los datos ni los ránquings del comparador.

## Segunda fase: cuentas de concesionario

Todavía no hay base de datos, registro de usuarios, subida de archivos, cobros ni edición autónoma. No se ha contratado ni aprovisionado ningún servicio.

Antes de abrir cuentas: elegir un backend compatible con el alojamiento, migrar los mismos IDs a tablas de concesionarios/modelos/versiones/unidades/fotos, añadir autenticación y permisos por concesionario, mantener revisión previa y separar borradores privados de la API pública. La baja de un anuncio, la caducidad y el estado vendido deben aplicarse en el servidor. Añadir límites y validación de fotos y gestionar autorización de publicación de los datos comerciales.

No guardar datos personales ni borradores en `data/vehicle-sales.js`: es un archivo público. La comprobación en el navegador mejora la presentación, pero no sustituye permisos ni protección en el servidor.
