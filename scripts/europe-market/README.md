# European market data — staging only

**Status:** preparation; not connected to the public rankings.

## Sources
- [Ember monthly EV sales](https://ember-energy.org/data/monthly-ev-sales-data/): open CC BY 4.0 monthly BEV registrations by country. **No model breakdown.**
- [EAFO](https://alternative-fuels-observatory.ec.europa.eu/): cross-check national registrations; different country reporting dates.
- A licensed or verifiably open **country + model + month** source is still required before enabling country-specific model rankings.

## Manual verification / staging
Download Ember's **Monthly EV sales (CSV)** from the official source and run:

```bash
python3 scripts/europe-market/validate.py path/to/monthly_ev_sales.csv
```

The command validates the monthly BEV rows and creates `reports/europe-market-preview.json`.
This is **not** consumed by the website. Never replace model rankings with country totals.

## Publication safeguards
- Separate BEV from PHEV.
- Match source geography and month; avoid comparing incomplete-country months as full Europe.
- Preserve original monthly records and source attribution.
- Calculate year-to-date from the same underlying model-level source.
- Do not publish data without verified model-level coverage and explicit approval.
- Existing European and Spanish rankings remain untouched.
