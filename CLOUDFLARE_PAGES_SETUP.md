# Desplegament a Cloudflare Pages — electricos.eu

Aquest repositori és una web estàtica (HTML, CSS, JavaScript i imatges). No necessita compilació ni servidor Node.

## Crear una còpia de proves (sense canviar el domini)
1. A Cloudflare, obre **Workers & Pages** > **Create** > **Pages** > **Connect to Git**.
2. Autoritza GitHub i selecciona el repositori `jordicanyi-ai/ELECTRIC-CARS`, branca `main`.
3. Configura **Framework preset: None**, **Build command: buit**, **Build output directory: /** (arrel del repositori). Si el formulari exigeix un directori, usa `.`.
4. Desplega i obre el subdomini `*.pages.dev` que Cloudflare assigni.
5. Comprova el catàleg, fotos, cerca, filtres, comparador, galeries i rànquing de vendes abans de moure el domini.

## Canviar el domini només després de provar
Afegeix `electricos.eu` com a custom domain de Pages, configura els registres DNS indicats per Cloudflare i comprova HTTPS i els fitxers `ads.txt`. No canviïs DNS abans de validar la còpia.

## Seguretat
- GitHub continua sent la font de veritat; els desplegaments de Pages són còpies generades.
- No eliminis el projecte Vercel fins que Cloudflare i el domini funcionin correctament.
- Evita publicar fitxes sense validar la sintaxi de `data/cars.js` i `js/app.js`.
- El fitxer `CNAME` existent s'utilitza per GitHub Pages; no cal tocar-lo per crear la còpia de proves.
