# Bot de revisió de preus — proposta (NO ACTIVAT)

Estat: preparació. Aquesta branca no executa tasques automàtiques, no envia correus i no modifica cap preu.

## Objectiu
Revisar setmanalment els preus dels vehicles d'electricos.eu i enviar un informe per correu electrònic amb canvis **verificats**. Qualsevol publicació requereix aprovació explícita de l'administrador.

## Regles innegociables
- Mercat: Espanya. Moneda EUR, impostos inclosos (IVA), sense ajudes públiques, MOVES, finançament condicionat ni descomptes que exigeixin requisits no universals.
- Comparar exactament model, versió, any i, quan correspongui, configuració i condicions comercials.
- Prioritzar configuradors i tarifes oficials espanyoles; registrar URL, data, versió, evidència i grau de confiança.
- Si no hi ha un preu nou verificable: **conservar el preu publicat** sense cap modificació.
- No convertir valors absents en 0, null ni estimacions.
- No modificar fitxers de dades, ni fer commits de preus, ni fusionar PR ni desplegar sense aprovació explícita.
- El bot pot generar informes o propostes de canvis separades; mai escriure directament a main.

## Flux previst
1. Un workflow GitHub Actions amb calendari setmanal (pendent d'aprovació per activar-lo).
2. Lectura en mode només lectura del catàleg existent; detectar models i preus.
3. Consulta de fonts oficials, normalització i validació de preus.
4. Comparació; si hi ha canvis verificats, crear informe amb preu anterior, nou, diferència, font i data.
5. Enviar informe via SMTP/API de correu amb credencials a GitHub Actions Secrets; mai guardar credencials al repositori.
6. Recollir aprovació explícita per cada conjunt de canvis abans de preparar/mergejar cap actualització.

## Abans d'implementar
- Identificar la ubicació i format reals de les dades de vehicles.
- Definir adaptadors de fonts oficials per marca i tractament de contingut dinàmic.
- Acordar destinatari del correu, proveïdor SMTP/API i secrets.
- Provar en sec (dry run) amb alguns models i casos sense preu.
- Revisar permisos mínims, costos, límits i errors del workflow.
- Obtenir aprovació separada per activar la programació setmanal.

## Estat de seguretat
Aquesta documentació és només preparatòria; cap workflow ni canvi de preus està activat.
