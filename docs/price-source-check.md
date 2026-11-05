# Consulta de fonts oficials (prototip inactiu)

`node scripts/price-source-check.cjs docs/price-sources.json`

El programa fa una consulta HTTPS **manual**, només a dominis `.es` inclosos explícitament a la llista, i presenta possibles imports trobats a l'HTML. No segueix redireccions, no envia correus, no desa ni altera preus. La llista actual és una **mostra tècnica**, no una cobertura del catàleg.

**Important:** els imports detectats NO són preus verificats. Poden correspondre a un altre model, un pagament mensual, una oferta amb finançament o una promoció amb ajudes. No s'han d'enviar a `price-review.cjs` com a verificats sense una comprovació documental humana de versió, mercat, IVA i condicions. Les pàgines carregades per JavaScript poden no exposar imports.

**Seguretat:** aquesta versió és només de recerca; abans d'executar-la en infraestructura compartida cal afegir protecció contra DNS cap a IP privades i límits de lectura per streaming. No crear cap tasca programada ni activar correus fins a validació i autorització.
