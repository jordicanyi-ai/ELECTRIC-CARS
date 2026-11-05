# Price bot: preparació tècnica (NO ACTIVAT)

Destinatari previst: **electricos.eu@gmail.com**. Periodicitat prevista: **setmanal**.

Fitxer de dades localitzat: `data/cars.js` (array `carsData`; camps `priceMin`, `priceMax`, `trims[].priceValue`).

## Prova local en mode lectura
```sh
node scripts/price-review.cjs data/cars.js docs/price-review-example.json
```
L'exemple és només una prova de format, **no una verificació actual de preus**. El programa llegeix els fitxers i imprimeix un informe JSON per stdout. No escriu dades ni envia correus. El camp `officialSource` és una declaració d'entrada: encara **no** es comprova automàticament que la pàgina acrediti el preu.

## Pendent abans d'activar
1. Adaptadors de consulta a fonts oficials espanyoles i evidència documental per model/versió.
2. Verificació real del contingut i de les condicions de venda; no confiar només en la declaració de l'entrada.
3. Comprovacions de coherència entre preus de versions i rangs min/max.
4. Proves automatitzades, detecció d'errors i límits de peticions.
5. Enviament de correu via proveïdor autoritzat i secrets segurs, amb aprovació de la configuració.
6. Workflow setmanal de GitHub Actions, **només després de l'aprovació explícita**.
7. Cap modificació dels preus sense aprovació específica; cap desplegament automàtic.

Aquesta branca no conté cap workflow de GitHub Actions ni cap secret. No s'ha configurat cap enviament real.
