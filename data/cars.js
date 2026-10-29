const carsData = [
{
  id: 18,
  brand: "Toyota",
  model: "C-HR+",
  type: "SUV compacto",
  launchYear: 2026,
  warranty: {
    vehicle: "3 años / 100.000 km · Toyota Relax hasta 15 años / 250.000 km*",
    battery: "8 años / 160.000 km · ampliable hasta 10 años / 1.000.000 km*",
    capacity: "70 % mínimo · *Ampliaciones sujetas a condiciones y mantenimiento Toyota"
  },
  priceMin: 36375,
  priceMax: 43425,
  priceText: "36.375 € - 43.425 €",
  rangeText: "Hasta 607 km WLTP",
  minRangeVal: 501,
  maxRangeVal: 607,
  batteryText: "77 kWh",
  batteryType: "Iones de litio",
  powerText: "224 / 343 CV",
  trunk: 416,
  frunkText: "No disponible",
  seats: 5,
  acceleration: "Según versión",
  dimensions: "4,53 × 1,87 × 1,595 m",
  charging: "150 kW CC · 10-80 % en unos 28 min",
  description: "El Toyota C-HR+ es el tercer modelo 100 % eléctrico de la marca japonesa y el más económico de su gama eléctrica. Este SUV compacto de diseño coupé ofrece cinco plazas y versiones de tracción delantera o total.",
  highlights: ["Consumo homologado: 13,4 kWh/100 km (4x2) y 15,7 kWh/100 km (4x4)", "SUV 100 % eléctrico de cinco plazas", "Batería de 77 kWh en los acabados españoles anunciados", "Advance de 224 CV y Spirit AWD-i de 343 CV"],
  considerations: ["No confundir con el Toyota C-HR híbrido", "Comprobar las condiciones comerciales de los precios anunciados", "Autonomía y potencia definitivas dependen de la homologación y el acabado"],
  idealFor: ["Uso familiar", "Ciudad y carretera", "Viajes"],
  priceInfo: {
    includesVat: true,
    includesAid: false,
    note: "Precios «desde» mostrados en el configurador oficial Toyota España: 36.375 € (Electric 250 4x2) y 43.425 € (Electric 350 AWD-i 4x4). En las capturas, «Método de pago» indica respectivamente 36.975 € y 43.625 €. Confirmar condiciones de cada importe; no se han restado ayudas públicas."
  },
  chargingInfo: {
    dcMax: "150 kW",
    acMax: "Según versión",
    fastChargeText: "10-80 % en unos 28 min",
    connector: "CCS2",
    v2l: null
  },
  trims: [
    { name: "Electric 250 4x2 77 kWh", price: "36.375 €", priceValue: 36375, battery: "77 kWh", batteryType: "Iones de litio", power: "224 CV", range: "Hasta 607 km WLTP", rangeValue: 607, accel: "Consultar versión" },
    { name: "Electric 350 AWD-i 4x4 77 kWh", price: "43.425 €", priceValue: 43425, battery: "77 kWh", batteryType: "Iones de litio", power: "343 CV", range: "Hasta 501 km WLTP", rangeValue: 501, accel: "5,2 s (0-100 km/h)" }
  ],
  colors: [
    { name: "Gris Manhattan (Advance)", hex: "#888B8C", code: "1H5" },
    { name: "Blanco Perlado Iceberg (Advance)", hex: "#F1F0EB", code: "089" },
    { name: "Negro Cosmo (Advance)", hex: "#202124", code: "218" },
    { name: "Gris Lunar (Advance)", hex: "#879194", code: "6Y1" },
    { name: "Rojo Persa (Advance)", hex: "#A84736", code: "4Z3" },
    { name: "Bi-tono Gris Manhattan (Spirit)", hex: "#888B8C", code: "2YY" },
    { name: "Bi-tono Blanco Perlado Iceberg (Spirit)", hex: "#F1F0EB", code: "2PS" },
    { name: "Bi-tono Gris Lunar (Spirit)", hex: "#879194", code: "M66" },
    { name: "Bi-tono Rojo Persa (Spirit)", hex: "#A84736", code: "M67" }
  ],
  images: [],
  videos: [{title: "Toyota C-HR+ eléctrico: vídeos y pruebas", url: "https://www.youtube.com/results?search_query=Toyota+C-HR%2B+electrico+prueba", thumb: ""}],
  brandInfo: {
    logo: "",
    group: "Toyota Motor Corporation",
    relation: "Fabricante",
    note: "Toyota es un fabricante japonés de automóviles."
  },
  brandUrl: "https://www.toyota.es",
  dataStatus: { status: "Precios y autonomías contrastados con capturas del configurador Toyota España", checkedAt: "17/10/2026" }
},

{
  "id": 16,
  "brand": "BYD",
  "model": "DOLPHIN",
  "type": "Compacto",
  "launchYear": null,
  "warranty": {
    "vehicle": "6 años / 150.000 km",
    "battery": "8 años / 250.000 km",
    "capacity": "70 %"
  },
  "priceMin": 36690,
  "priceMax": 38690,
  "priceText": "36.690 € - 38.690 €",
  "rangeText": "Hasta 427 km WLTP",
  "minRangeVal": 427,
  "maxRangeVal": 427,
  "batteryText": "60.4 kWh",
  "batteryType": "Blade Battery",
  "powerText": "204 CV",
  "trunk": 364,
  "frunkText": "Consultar versión",
  "seats": 5,
  "acceleration": "Consultar versión",
  "dimensions": "4,29 × 1,77 × 1,57 m",
  "charging": "Consultar versión",
  "description": "El BYD DOLPHIN es un compacto 100 % eléctrico. La autonomía, la batería y el equipamiento dependen del acabado. Esta ficha está en preparación y no muestra precios ni características sin confirmar para la versión española.",
  "highlights": [
    "Propulsión 100 % eléctrica",
    "Tecnología de batería BYD",
    "Ficha disponible para comparar"
  ],
  "considerations": [
    "Precios al contado con IVA y sin ayudas pendientes de verificar",
    "Comprobar la versión y sus datos homologados"
  ],
  "idealFor": [
    "Uso diario",
    "Movilidad eléctrica"
  ],
  "priceInfo": {
    "includesVat": true,
    "includesAid": false,
    "note": "PVP recomendado en España con IVA, sin ayudas públicas ni descuentos condicionados. Confirmar tarifa vigente antes de contratar."
  },
  "chargingInfo": {
    "dcMax": "Consultar versión",
    "acMax": "Consultar versión",
    "fastChargeText": "Consultar versión",
    "connector": "CCS2",
    "v2l": null
  },
  "trims": [{"name":"Comfort","price":"36.690 €","priceValue":36690,"battery":"Consultar ficha de la versión","batteryType":"LFP Blade / consultar versión","power":"Consultar versión","range":"Consultar versión","rangeValue":null,"accel":"Consultar versión"},{"name":"Design","price":"38.690 €","priceValue":38690,"battery":"Consultar ficha de la versión","batteryType":"LFP Blade / consultar versión","power":"Consultar versión","range":"Consultar versión","rangeValue":null,"accel":"Consultar versión"}],
  "colors": [],
  "images": [],
  "videos": [],
  "brandInfo": {
    "logo": "img/brands/byd.png",
    "group": "BYD Company",
    "relation": "Fabricante",
    "note": "Marca de vehículos eléctricos de BYD Company."
  },
  "brandUrl": "https://www.byd.com/es-es/coches-electricos/dolphin",
  "dataStatus": {
    "status": "Precio de tarifa localizado; resto de datos por contrastar",
    "checkedAt": "16/10/2026"
  }
},
{
  "id": 17,
  "brand": "BYD",
  "model": "ATTO 2",
  "type": "SUV urbano",
  "launchYear": null,
  "warranty": {
    "vehicle": "6 años / 150.000 km",
    "battery": "8 años / 250.000 km",
    "capacity": "70 %"
  },
  "priceMin": 29990,
  "priceMax": 36200,
  "priceText": "29.990 € - 36.200 €",
  "rangeText": "Hasta 320 km WLTP",
  "minRangeVal": 320,
  "maxRangeVal": 320,
  "batteryText": "45.1 kWh",
  "batteryType": "Blade Battery",
  "powerText": "177 CV",
  "trunk": 400,
  "frunkText": "Consultar versión",
  "seats": 5,
  "acceleration": "Consultar versión",
  "dimensions": "4,31 × 1,83 × 1,68 m",
  "charging": "Consultar versión",
  "description": "El BYD ATTO 2 es un suv urbano 100 % eléctrico. La autonomía, la batería y el equipamiento dependen del acabado. Esta ficha está en preparación y no muestra precios ni características sin confirmar para la versión española.",
  "highlights": [
    "Propulsión 100 % eléctrica",
    "Tecnología de batería BYD",
    "Ficha disponible para comparar"
  ],
  "considerations": [
    "Precios al contado con IVA y sin ayudas pendientes de verificar",
    "Comprobar la versión y sus datos homologados"
  ],
  "idealFor": [
    "Uso diario",
    "Movilidad eléctrica"
  ],
  "priceInfo": {
    "includesVat": true,
    "includesAid": false,
    "note": "PVP recomendado en España con IVA, sin ayudas públicas ni descuentos condicionados. Confirmar tarifa vigente antes de contratar."
  },
  "chargingInfo": {
    "dcMax": "Consultar versión",
    "acMax": "Consultar versión",
    "fastChargeText": "Consultar versión",
    "connector": "CCS2",
    "v2l": null
  },
  "trims": [{"name":"Active","price":"29.990 €","priceValue":29990,"battery":"Consultar ficha de la versión","batteryType":"LFP Blade / consultar versión","power":"Consultar versión","range":"Consultar versión","rangeValue":null,"accel":"Consultar versión"},{"name":"Boost","price":"31.990 €","priceValue":31990,"battery":"Consultar ficha de la versión","batteryType":"LFP Blade / consultar versión","power":"Consultar versión","range":"Consultar versión","rangeValue":null,"accel":"Consultar versión"},{"name":"Comfort","price":"36.200 €","priceValue":36200,"battery":"Consultar ficha de la versión","batteryType":"LFP Blade / consultar versión","power":"Consultar versión","range":"Consultar versión","rangeValue":null,"accel":"Consultar versión"}],
  "colors": [],
  "images": ["img/cars/byd-atto2/Byd_Atto2_01.webp", "img/cars/byd-atto2/Byd_Atto2_02.webp", "img/cars/byd-atto2/Byd_Atto2_03.webp", "img/cars/byd-atto2/Byd_Atto2_04.webp", "img/cars/byd-atto2/Byd_Atto2_05.webp", "img/cars/byd-atto2/Byd_Atto2_06.webp", "img/cars/byd-atto2/Byd_Atto2_07.webp", "img/cars/byd-atto2/Byd_Atto2_08.webp"],
  "videos": [],
  "brandInfo": {
    "logo": "img/brands/byd.png",
    "group": "BYD Company",
    "relation": "Fabricante",
    "note": "Marca de vehículos eléctricos de BYD Company."
  },
  "brandUrl": "https://www.byd.com/es-es",
  "dataStatus": {
    "status": "Precio de tarifa localizado; resto de datos por contrastar",
    "checkedAt": "16/10/2026"
  }
},
{
  "id": 18,
  "brand": "BYD",
  "model": "ATTO 3",
  "type": "SUV compacto",
  "launchYear": null,
  "warranty": {
    "vehicle": "6 años / 150.000 km",
    "battery": "8 años / 250.000 km",
    "capacity": "70 %"
  },
  "priceMin": 38990,
  "priceMax": 38990,
  "priceText": "38.990 €",
  "rangeText": "Hasta 420 km WLTP",
  "minRangeVal": 420,
  "maxRangeVal": 420,
  "batteryText": "60.5 kWh",
  "batteryType": "Blade Battery",
  "powerText": "204 CV",
  "trunk": 440,
  "frunkText": "Consultar versión",
  "seats": 5,
  "acceleration": "Consultar versión",
  "dimensions": "4,46 × 1,88 × 1,62 m",
  "charging": "Consultar versión",
  "description": "El BYD ATTO 3 es un suv compacto 100 % eléctrico. La autonomía, la batería y el equipamiento dependen del acabado. Esta ficha está en preparación y no muestra precios ni características sin confirmar para la versión española.",
  "highlights": [
    "Propulsión 100 % eléctrica",
    "Tecnología de batería BYD",
    "Ficha disponible para comparar"
  ],
  "considerations": [
    "Precios al contado con IVA y sin ayudas pendientes de verificar",
    "Comprobar la versión y sus datos homologados"
  ],
  "idealFor": [
    "Uso diario",
    "Movilidad eléctrica"
  ],
  "priceInfo": {
    "includesVat": true,
    "includesAid": false,
    "note": "PVP recomendado en España con IVA, sin ayudas públicas ni descuentos condicionados. Referencia histórica: confirmar disponibilidad y tarifa vigente."
  },
  "chargingInfo": {
    "dcMax": "Consultar versión",
    "acMax": "Consultar versión",
    "fastChargeText": "Consultar versión",
    "connector": "CCS2",
    "v2l": null
  },
  "trims": [{"name":"Versión de acceso (referencia histórica)","price":"38.990 €","priceValue":38990,"battery":"Consultar ficha de la versión","batteryType":"LFP Blade / consultar versión","power":"Consultar versión","range":"Consultar versión","rangeValue":null,"accel":"Consultar versión"}],
  "colors": [],
  "images": [],
  "videos": [],
  "brandInfo": {
    "logo": "img/brands/byd.png",
    "group": "BYD Company",
    "relation": "Fabricante",
    "note": "Marca de vehículos eléctricos de BYD Company."
  },
  "brandUrl": "https://www.byd.com/es-es",
  "dataStatus": {
    "status": "Precio de tarifa localizado; resto de datos por contrastar",
    "checkedAt": "16/10/2026"
  }
},
{
  "id": 19,
  "brand": "BYD",
  "model": "ATTO 3 EVO",
  "type": "SUV compacto",
  "launchYear": null,
  "warranty": {
    "vehicle": "6 años / 150.000 km",
    "battery": "8 años / 250.000 km",
    "capacity": "70 %"
  },
  "priceMin": 42990,
  "priceMax": 45990,
  "priceText": "42.990 € - 45.990 €",
  "rangeText": "Autonomía WLTP pendiente de verificar",
  "minRangeVal": null,
  "maxRangeVal": null,
  "batteryText": "Consultar versión",
  "batteryType": "Blade Battery",
  "powerText": "Hasta 449 CV",
  "trunk": 490,
  "frunkText": "Consultar versión",
  "seats": 5,
  "acceleration": "Consultar versión",
  "dimensions": "Consultar versión",
  "charging": "Consultar versión",
  "description": "El BYD ATTO 3 EVO es un suv compacto 100 % eléctrico. La autonomía, la batería y el equipamiento dependen del acabado. Esta ficha está en preparación y no muestra precios ni características sin confirmar para la versión española.",
  "highlights": [
    "Propulsión 100 % eléctrica",
    "Tecnología de batería BYD",
    "Ficha disponible para comparar"
  ],
  "considerations": [
    "Precios al contado con IVA y sin ayudas pendientes de verificar",
    "Comprobar la versión y sus datos homologados"
  ],
  "idealFor": [
    "Uso diario",
    "Movilidad eléctrica"
  ],
  "priceInfo": {
    "includesVat": true,
    "includesAid": false,
    "note": "PVP recomendado en España con IVA, sin ayudas públicas ni descuentos condicionados. Confirmar tarifa vigente antes de contratar."
  },
  "chargingInfo": {
    "dcMax": "Consultar versión",
    "acMax": "Consultar versión",
    "fastChargeText": "Consultar versión",
    "connector": "CCS2",
    "v2l": null
  },
  "trims": [{"name":"Design","price":"42.990 €","priceValue":42990,"battery":"Consultar ficha de la versión","batteryType":"LFP Blade / consultar versión","power":"Consultar versión","range":"Consultar versión","rangeValue":null,"accel":"Consultar versión"},{"name":"Excellence","price":"45.990 €","priceValue":45990,"battery":"Consultar ficha de la versión","batteryType":"LFP Blade / consultar versión","power":"Consultar versión","range":"Consultar versión","rangeValue":null,"accel":"Consultar versión"}],
  "colors": [],
  "images": [],
  "videos": [],
  "brandInfo": {
    "logo": "img/brands/byd.png",
    "group": "BYD Company",
    "relation": "Fabricante",
    "note": "Marca de vehículos eléctricos de BYD Company."
  },
  "brandUrl": "https://www.byd.com/es-es",
  "dataStatus": {
    "status": "Precio de tarifa localizado; resto de datos por contrastar",
    "checkedAt": "16/10/2026"
  }
},
{
  "id": 20,
  "brand": "BYD",
  "model": "SEAL",
  "type": "Berlina",
  "launchYear": 2023,
  "warranty": {
    "vehicle": "6 años / 150.000 km",
    "battery": "8 años / 250.000 km",
    "capacity": "70 %"
  },
  "priceMin": 41990,
  "priceMax": 52490,
  "priceText": "41.990 € - 52.490 €",
  "rangeText": "460 - 570 km WLTP",
  "minRangeVal": 460,
  "maxRangeVal": 570,
  "batteryText": "61,4 - 82,5 kWh",
  "batteryType": "LFP (BYD Blade Battery)",
  "powerText": "228 - 530 CV",
  "trunk": 485,
  "frunkText": "72 L",
  "seats": 5,
  "acceleration": "3,8 - 7,5 s",
  "dimensions": "4,80 × 1,88 × 1,46 m",
  "charging": "110 - 150 kW CC · 10-80 % en aprox. 37 min",
  "description": "El BYD SEAL es una berlina eléctrica de cinco plazas actualizada en 2026. Ofrece tres versiones con tracción trasera o total, baterías Blade LFP de 61,4 y 82,5 kWh y entre 460 y 570 km de autonomía WLTP. La actualización aumenta el maletero trasero a 485 litros y el delantero a 72 litros.",
  "highlights": [
    "Hasta 570 km de autonomía WLTP en Design",
    "Maletero de 485 L y frunk de 72 L en el modelo actualizado de 2026",
    "Hasta 530 CV y aceleración de 0 a 100 km/h en 3,8 s"
  ],
  "considerations": [
    "La versión Excellence AWD prioriza prestaciones y homologa 520 km WLTP, menos que Design",
    "La carga rápida máxima es de 110 kW en Comfort y 150 kW en Design y Excellence",
    "Las unidades anteriores a la actualización de 2026 tienen maleteros de 400 + 53 L"
  ],
  "idealFor": [
    "Quien busque una berlina eléctrica eficiente para viajar",
    "Conductores que valoren prestaciones y tecnología"
  ],
  "priceInfo": {
    "includesVat": true,
    "includesAid": false,
    "note": "PVP recomendado en España con IVA, sin ayudas públicas ni descuentos condicionados. Confirmar tarifa vigente antes de contratar."
  },
  "chargingInfo": {
    "dcMax": "110 - 150 kW",
    "acMax": "11 kW",
    "fastChargeText": "10-80 % en aproximadamente 37 min (según versión)",
    "connector": "CCS2",
    "v2l": true
  },
  "trims": [
    {
      "name": "Comfort RWD",
      "price": "41.990 €",
      "priceValue": 41990,
      "battery": "61,4 kWh",
      "batteryType": "LFP Blade",
      "power": "228 CV",
      "range": "460 km WLTP",
      "rangeValue": 460,
      "accel": "7,5 s"
    },
    {
      "name": "Design RWD",
      "price": "49.490 €",
      "priceValue": 49490,
      "battery": "82,5 kWh",
      "batteryType": "LFP Blade",
      "power": "313 CV",
      "range": "570 km WLTP",
      "rangeValue": 570,
      "accel": "5,9 s"
    },
    {
      "name": "Excellence AWD",
      "price": "52.490 €",
      "priceValue": 52490,
      "battery": "82,5 kWh",
      "batteryType": "LFP Blade",
      "power": "530 CV",
      "range": "520 km WLTP",
      "rangeValue": 520,
      "accel": "3,8 s"
    }
  ],
  "colors": [
    {
      "name": "Atlantis Grey",
      "hex": "#75818A"
    },
    {
      "name": "Indigo Grey",
      "hex": "#58657A"
    },
    {
      "name": "Obsidian Black",
      "hex": "#202226"
    },
    {
      "name": "Polar White",
      "hex": "#F2F2EF",
      "border": "#CBD5E1"
    },
    {
      "name": "Lavender Grey",
      "hex": "#9C98A9"
    },
    {
      "name": "Ruby Red",
      "hex": "#8B2539"
    }
  ],
  "images": [
    "img/cars/byd-seal/byd-seal_01.webp",
    "img/cars/byd-seal/byd-seal_02.webp",
    "img/cars/byd-seal/byd-seal_03.webp",
    "img/cars/byd-seal/byd-seal_04.webp",
    "img/cars/byd-seal/byd-seal_05.webp",
    "img/cars/byd-seal/byd-seal_06.webp",
    "img/cars/byd-seal/byd-seal_07.webp",
    "img/cars/byd-seal/byd-seal_08.webp"
  ],
  "videos": [],
  "brandInfo": {
    "logo": "img/brands/byd.png",
    "group": "BYD Company",
    "relation": "Fabricante",
    "note": "Marca de vehículos eléctricos de BYD Company."
  },
  "brandUrl": "https://www.byd.com/es-es/coches-electricos/seal",
  "dataStatus": {
    "status": "Gama y PVP recomendados contrastados con BYD España (actualización 2026)",
    "checkedAt": "29/10/2026"
  }
},
{
  "id": 21,
  "brand": "BYD",
  "model": "SEAL U EV",
  "type": "SUV familiar",
  "launchYear": null,
  "warranty": {
    "vehicle": "6 años / 150.000 km",
    "battery": "8 años / 250.000 km",
    "capacity": "70 %"
  },
  "priceMin": 43790,
  "priceMax": 47290,
  "priceText": "43.790 € - 47.290 €",
  "rangeText": "Hasta 500 km WLTP",
  "minRangeVal": 500,
  "maxRangeVal": 500,
  "batteryText": "87 kWh",
  "batteryType": "Blade Battery",
  "powerText": "218 CV",
  "trunk": 552,
  "frunkText": "Consultar versión",
  "seats": 5,
  "acceleration": "Consultar versión",
  "dimensions": "4,79 × 1,89 × 1,67 m",
  "charging": "Consultar versión",
  "description": "El BYD SEAL U EV es un suv familiar 100 % eléctrico. La autonomía, la batería y el equipamiento dependen del acabado. Esta ficha está en preparación y no muestra precios ni características sin confirmar para la versión española.",
  "highlights": [
    "Propulsión 100 % eléctrica",
    "Tecnología de batería BYD",
    "Ficha disponible para comparar"
  ],
  "considerations": [
    "Precios al contado con IVA y sin ayudas pendientes de verificar",
    "Comprobar la versión y sus datos homologados"
  ],
  "idealFor": [
    "Uso diario",
    "Movilidad eléctrica"
  ],
  "priceInfo": {
    "includesVat": true,
    "includesAid": false,
    "note": "PVP recomendado en España con IVA, sin ayudas públicas ni descuentos condicionados. Confirmar tarifa vigente antes de contratar."
  },
  "chargingInfo": {
    "dcMax": "Consultar versión",
    "acMax": "Consultar versión",
    "fastChargeText": "Consultar versión",
    "connector": "CCS2",
    "v2l": null
  },
  "trims": [{"name":"Comfort","price":"43.790 €","priceValue":43790,"battery":"Consultar ficha de la versión","batteryType":"LFP Blade / consultar versión","power":"Consultar versión","range":"Consultar versión","rangeValue":null,"accel":"Consultar versión"},{"name":"Design","price":"47.290 €","priceValue":47290,"battery":"Consultar ficha de la versión","batteryType":"LFP Blade / consultar versión","power":"Consultar versión","range":"Consultar versión","rangeValue":null,"accel":"Consultar versión"}],
  "colors": [],
  "images": [],
  "videos": [],
  "brandInfo": {
    "logo": "img/brands/byd.png",
    "group": "BYD Company",
    "relation": "Fabricante",
    "note": "Marca de vehículos eléctricos de BYD Company."
  },
  "brandUrl": "https://www.byd.com/es-es",
  "dataStatus": {
    "status": "Precio de tarifa localizado; resto de datos por contrastar",
    "checkedAt": "16/10/2026"
  }
},
{
  "id": 22,
  "brand": "BYD",
  "model": "SEALION 7",
  "type": "SUV coupé",
  "launchYear": 2024,
  "warranty": {
    "vehicle": "6 años / 150.000 km",
    "battery": "8 años / 250.000 km",
    "capacity": "70 %"
  },
  "priceMin": 47990,
  "priceMax": 54390,
  "priceText": "47.990 € - 54.390 €",
  "rangeText": "456 - 502 km WLTP",
  "minRangeVal": 456,
  "maxRangeVal": 502,
  "batteryText": "82,5 - 91,3 kWh",
  "batteryType": "LFP (BYD Blade Battery)",
  "powerText": "313 - 530 CV",
  "trunk": 520,
  "frunkText": "58 L",
  "seats": 5,
  "acceleration": "4,5 - 6,7 s",
  "dimensions": "4,83 × 1,93 × 1,62 m",
  "charging": "150 - 230 kW CC · 10-80 % en 24-32 min",
  "description": "El BYD SEALION 7 es un SUV coupé eléctrico de cinco plazas con batería Blade LFP, 520 litros de maletero y 58 litros de frunk. Se ofrece con tracción trasera Comfort de 313 CV y dos versiones de tracción total de 530 CV. Su autonomía homologada oscila entre 456 y 502 km WLTP y admite carga rápida de hasta 230 kW en la versión Excellence AWD.",
  "highlights": [
    "Hasta 502 km WLTP y batería Blade LFP de 82,5 a 91,3 kWh",
    "Maletero de 520 L más frunk de 58 L",
    "Hasta 530 CV y 0-100 km/h en 4,5 s en las versiones AWD"
  ],
  "considerations": [
    "La versión Design AWD homologa 456 km WLTP, menos que Comfort (482 km)",
    "La carga rápida de 230 kW es exclusiva de Excellence AWD; Comfort y Design admiten 150 kW",
    "Los precios indicados son PVP recomendados sin ayudas ni financiación; pueden variar según tarifa"
  ],
  "idealFor": [
    "Familias que buscan un SUV eléctrico amplio de cinco plazas",
    "Quien valore prestaciones, equipamiento y autonomía para viajar"
  ],
  "priceInfo": {
    "includesVat": true,
    "includesAid": false,
    "note": "PVP recomendado en España con IVA, sin ayudas públicas ni descuentos condicionados. Confirmar tarifa vigente antes de contratar."
  },
  "chargingInfo": {
    "dcMax": "150 - 230 kW",
    "acMax": "11 kW",
    "fastChargeText": "10-80 % en 32 min (Comfort/Design) o 24 min (Excellence)",
    "connector": "CCS2",
    "v2l": true
  },
  "trims": [
    {
      "name": "Comfort RWD",
      "price": "47.990 €",
      "priceValue": 47990,
      "battery": "82,5 kWh",
      "batteryType": "LFP Blade",
      "power": "313 CV",
      "range": "482 km WLTP",
      "rangeValue": 482,
      "accel": "6,7 s"
    },
    {
      "name": "Design AWD",
      "price": "51.500 €",
      "priceValue": 51500,
      "battery": "82,5 kWh",
      "batteryType": "LFP Blade",
      "power": "530 CV",
      "range": "456 km WLTP",
      "rangeValue": 456,
      "accel": "4,5 s"
    },
    {
      "name": "Excellence AWD",
      "price": "54.390 €",
      "priceValue": 54390,
      "battery": "91,3 kWh",
      "batteryType": "LFP Blade",
      "power": "530 CV",
      "range": "502 km WLTP",
      "rangeValue": 502,
      "accel": "4,5 s"
    }
  ],
  "colors": [
    {
      "name": "Atlantis Grey",
      "hex": "#77858C"
    },
    {
      "name": "Indigo Grey",
      "hex": "#4D596C"
    },
    {
      "name": "Obsidian Black",
      "hex": "#202225"
    },
    {
      "name": "Polar White",
      "hex": "#F2F1ED",
      "border": "#CBD5E1"
    }
  ],
  "images": [
    "img/cars/byd-sealion7/byd-sealion7_01.webp",
    "img/cars/byd-sealion7/byd-sealion7_02.webp",
    "img/cars/byd-sealion7/byd-sealion7_03.webp",
    "img/cars/byd-sealion7/byd-sealion7_04.webp",
    "img/cars/byd-sealion7/byd-sealion7_05.webp",
    "img/cars/byd-sealion7/byd-sealion7_06.webp",
    "img/cars/byd-sealion7/byd-sealion7_07.webp",
    "img/cars/byd-sealion7/byd-sealion7_08.webp"
  ],
  "videos": [],
  "brandInfo": {
    "logo": "img/brands/byd.png",
    "group": "BYD Company",
    "relation": "Fabricante",
    "note": "Marca de vehículos eléctricos de BYD Company."
  },
  "brandUrl": "https://www.byd.com/es-es/coches-electricos/sealion-7",
  "dataStatus": {
    "status": "Datos contrastados con ficha técnica y precios publicados por BYD España",
    "checkedAt": "29/10/2026"
  }
},
{
  "id": 23,
  "brand": "BYD",
  "model": "TANG",
  "type": "SUV 7 plazas",
  "launchYear": 2025,
  "warranty": {
    "vehicle": "6 años / 150.000 km",
    "battery": "8 años / 250.000 km",
    "capacity": "70 %"
  },
  "priceMin": 72000,
  "priceMax": 72000,
  "priceText": "72.000 €",
  "rangeText": "530 km WLTP",
  "minRangeVal": 530,
  "maxRangeVal": 530,
  "batteryText": "108,8 kWh",
  "batteryType": "LFP Blade Battery",
  "powerText": "517 CV",
  "trunk": 235,
  "frunkText": "No",
  "seats": 7,
  "acceleration": "4,9 s",
  "dimensions": "4,97 × 1,96 × 1,75 m",
  "charging": "170 kW DC · 11 kW AC · 10–80 % en 46 min",
  "description": "El BYD TANG Flagship AWD es un SUV eléctrico de siete plazas con tracción total, batería Blade LFP de 108,8 kWh y 530 km de autonomía WLTP. Ofrece 517 CV, una aceleración de 0 a 100 km/h en 4,9 segundos y un habitáculo amplio para viajar en familia.",
  "highlights": [
    "Siete plazas y tracción total AWD",
    "Batería Blade LFP de 108,8 kWh",
    "517 CV y 530 km de autonomía WLTP"
  ],
  "considerations": [
    "Precio elevado frente a otros SUV familiares eléctricos",
    "Maletero de 235 L con las siete plazas en uso"
  ],
  "idealFor": [
    "Familias numerosas",
    "Viajes"
  ],
  "priceInfo": {
    "includesVat": true,
    "includesAid": false,
    "note": "PVP recomendado en España con IVA, sin ayudas públicas ni descuentos condicionados. Confirmar tarifa vigente antes de contratar."
  },
  "chargingInfo": {
    "dcMax": "170 kW",
    "acMax": "11 kW",
    "fastChargeText": "10–80 % en 46 min · 30–80 % en 30 min",
    "connector": "CCS2",
    "v2l": null
  },
  "trims": [{"name":"Flagship AWD","price":"72.000 €","priceValue":72000,"battery":"108,8 kWh","batteryType":"LFP Blade","power":"517 CV","range":"530 km WLTP","rangeValue":530,"accel":"4,9 s"}],
  "colors": [{"name":"Snow White","hex":"#F2F2EF","border":"#D9DDE3"},{"name":"Mountain Grey","hex":"#777B80"},{"name":"Silver Sand Black","hex":"#242528"}],
  "images": ["img/cars/byd-tang/byd-tang_01.webp","img/cars/byd-tang/byd-tang_02.webp","img/cars/byd-tang/byd-tang_03.webp","img/cars/byd-tang/byd-tang_04.webp","img/cars/byd-tang/byd-tang_05.webp","img/cars/byd-tang/byd-tang_06.webp","img/cars/byd-tang/byd-tang_07.webp","img/cars/byd-tang/byd-tang_08.webp"],
  "videos": [],
  "brandInfo": {
    "logo": "img/brands/byd.png",
    "group": "BYD Company",
    "relation": "Fabricante",
    "note": "Marca de vehículos eléctricos de BYD Company."
  },
  "brandUrl": "https://www.byd.com/es-es",
  "dataStatus": {
    "status": "Ficha técnica completada con datos del fabricante; precio PVP de referencia",
    "checkedAt": "29/10/2026"
  }
},
{
  "id": 24,
  "brand": "BYD",
  "model": "HAN",
  "type": "Berlina grande",
  "launchYear": 2023,
  "warranty": {
    "vehicle": "6 años / 150.000 km",
    "battery": "8 años / 250.000 km",
    "capacity": "70 %"
  },
  "priceMin": 69990,
  "priceMax": 73620,
  "priceText": "69.990 - 73.620 €",
  "rangeText": "521 km WLTP",
  "minRangeVal": 521,
  "maxRangeVal": 521,
  "batteryText": "85,4 kWh",
  "batteryType": "LFP (BYD Blade Battery)",
  "powerText": "517 CV",
  "trunk": 410,
  "frunkText": "No disponible",
  "seats": 5,
  "acceleration": "3,9 s",
  "dimensions": "5,00 × 1,91 × 1,50 m",
  "charging": "120 kW CC · 30-80 % en 30 min",
  "description": "El BYD HAN es una berlina eléctrica de representación con dos motores, tracción integral AWD y 517 CV. Su batería Blade LFP de 85,4 kWh ofrece 521 km de autonomía homologada WLTP. Destaca por su equipamiento de confort y su aceleración de 0 a 100 km/h en 3,9 segundos. Modelo descatalogado en España; los precios mostrados son referencias históricas, no ofertas actuales.",
  "highlights": [
    "517 CV, tracción integral AWD y aceleración de 0 a 100 km/h en 3,9 s",
    "Batería Blade LFP de 85,4 kWh y 521 km WLTP",
    "Habitáculo amplio, 5 plazas y equipamiento de alta gama"
  ],
  "considerations": [
    "Modelo descatalogado en España: no existe una tarifa de venta nueva vigente confirmada",
    "Los precios indicados son tarifas históricas con IVA y sin ayudas",
    "Carga rápida máxima de 120 kW CC; maletero de 410 L"
  ],
  "idealFor": [
    "Quien busque una berlina eléctrica grande y potente",
    "Viajes y uso familiar de cinco plazas"
  ],
  "priceInfo": {
    "includesVat": true,
    "includesAid": false,
    "note": "Precios históricos de tarifa española (2025), con IVA y sin ayudas públicas. Modelo descatalogado: no son precios de venta actuales."
  },
  "chargingInfo": {
    "dcMax": "120 kW",
    "acMax": "7 kW (ficha Executive España 2025)",
    "fastChargeText": "30-80 % en 30 min (CC, 120 kW)",
    "connector": "CCS2",
    "v2l": true
  },
  "trims": [
    {
      "name": "HAN AWD Executive",
      "price": "69.990 € (histórico)",
      "priceValue": 69990,
      "battery": "85,4 kWh",
      "batteryType": "LFP Blade",
      "power": "517 CV",
      "range": "521 km WLTP",
      "rangeValue": 521,
      "accel": "3,9 s"
    },
    {
      "name": "HAN AWD Emerald Edition",
      "price": "73.620 € (histórico)",
      "priceValue": 73620,
      "battery": "85,4 kWh",
      "batteryType": "LFP Blade",
      "power": "517 CV",
      "range": "521 km WLTP",
      "rangeValue": 521,
      "accel": "3,9 s"
    }
  ],
  "colors": [
    {
      "name": "Snow White",
      "hex": "#F0F0ED",
      "border": "#CBD5E1"
    },
    {
      "name": "Time Grey",
      "hex": "#858A90"
    },
    {
      "name": "Space Black",
      "hex": "#202226"
    },
    {
      "name": "AI Blue",
      "hex": "#466481"
    },
    {
      "name": "Emperor Red",
      "hex": "#91332D"
    },
    {
      "name": "Mountain Green",
      "hex": "#52645B"
    }
  ],
  "images": [
    "img/cars/byd-han/byd-han_01.webp",
    "img/cars/byd-han/byd-han_02.webp",
    "img/cars/byd-han/byd-han_03.webp",
    "img/cars/byd-han/byd-han_04.webp",
    "img/cars/byd-han/byd-han_05.webp",
    "img/cars/byd-han/byd-han_06.webp",
    "img/cars/byd-han/byd-han_07.webp",
    "img/cars/byd-han/byd-han_08.webp"
  ],
  "videos": [],
  "brandInfo": {
    "logo": "img/brands/byd.png",
    "group": "BYD Company",
    "relation": "Fabricante",
    "note": "Marca de vehículos eléctricos de BYD Company."
  },
  "brandUrl": "https://www.byd.com/es-es/car/han",
  "dataStatus": {
    "status": "Ficha técnica contrastada; modelo descatalogado y precios históricos",
    "checkedAt": "29/10/2026"
  }
},
{
    "id": 15,
    "brand": "Renault",
    "model": "Twingo E-Tech eléctrico",
    "type": "Urbano",
    "launchYear": 2026,
    "warranty": {
        "vehicle": "3 años / kilometraje según condiciones Renault",
        "battery": "8 años / 160.000 km",
        "capacity": "70 %"
    },
    "priceMin": 19900,
    "priceMax": 21500,
    "priceText": "19.900 - 21.500 €",
    "rangeText": "Hasta 263 km",
    "minRangeVal": 263,
    "maxRangeVal": 263,
    "batteryText": "27,5 kWh",
    "batteryType": "LFP",
    "powerText": "82 CV",
    "trunk": 360,
    "frunkText": "No disponible",
    "seats": 4,
    "acceleration": "12,1 s",
    "dimensions": "3,79 × 1,72 × 1,49 m",
    "charging": "Hasta 50 kW CC (según equipamiento)",
    "description": "El Renault Twingo E-Tech eléctrico recupera el concepto de coche urbano compacto con cinco puertas, cuatro plazas y un interior modular. La batería de 27,5 kWh ofrece hasta 263 km de autonomía WLTP según la versión y la configuración.",
    "highlights": [
        "Hasta 263 km WLTP",
        "Cinco puertas en menos de 3,8 metros",
        "Asientos traseros deslizantes",
        "Hasta 360 litros de maletero"
    ],
    "considerations": [
        "Cuatro plazas",
        "Autonomía orientada a ciudad y trayectos cortos",
        "La carga rápida depende del equipamiento"
    ],
    "idealFor": [
        "Ciudad",
        "Uso diario",
        "Primer eléctrico",
        "Segundo coche familiar"
    ],
    "priceInfo": {
        "includesVat": true,
        "includesAid": false,
        "note": "Precios de tarifa orientativos con IVA y sin ayudas públicas. Pueden variar según acabado, equipamiento y condiciones comerciales."
    },
    "chargingInfo": {
        "dcMax": "Hasta 50 kW (según equipamiento)",
        "acMax": "Hasta 11 kW (según equipamiento)",
        "fastChargeText": "Consultar equipamiento y ficha oficial de la versión",
        "connector": "CCS2 (si equipa carga CC)",
        "v2l": null
    },
    "trims": [
        {
            "name": "Evolution",
            "price": "19.900 €",
            "priceValue": 19900,
            "battery": "27,5 kWh",
            "batteryType": "LFP",
            "power": "82 CV",
            "range": "Hasta 263 km WLTP",
            "rangeValue": 263,
            "accel": "12,1 s"
        },
        {
            "name": "Techno",
            "price": "21.500 €",
            "priceValue": 21500,
            "battery": "27,5 kWh",
            "batteryType": "LFP",
            "power": "82 CV",
            "range": "Hasta 263 km WLTP",
            "rangeValue": 263,
            "accel": "12,1 s"
        }
    ],
    "colors": [
        {
            "name": "Amarillo Mango",
            "hex": "#e7bd20"
        },
        {
            "name": "Rojo Absoluto",
            "hex": "#b52632"
        },
        {
            "name": "Verde Absoluto",
            "hex": "#4b8b67"
        },
        {
            "name": "Negro",
            "hex": "#191919"
        },
        {
            "name": "Blanco",
            "hex": "#f5f5f2",
            "border": "#cbd5e1"
        }
    ],
    "images": [
        "img/cars/renault-twingo/renault-twingo_01.webp",
        "img/cars/renault-twingo/renault-twingo_02.webp",
        "img/cars/renault-twingo/renault-twingo_03.webp",
        "img/cars/renault-twingo/renault-twingo_04.webp",
        "img/cars/renault-twingo/renault-twingo_05.webp",
        "img/cars/renault-twingo/renault-twingo_06.webp",
        "img/cars/renault-twingo/renault-twingo_07.webp",
        "img/cars/renault-twingo/renault-twingo_08.webp"
    ],
    "videos": [
        {
            "title": "Renault Twingo E-Tech eléctrico",
            "url": "https://www.youtube.com/results?search_query=Renault+Twingo+E-Tech+electrico+2026",
            "thumb": "img/cars/renault-twingo/renault-twingo_01.webp"
        }
    ],
    "brandInfo": {
        "logo": "img/brands/renault.png",
        "group": "Renault Group",
        "relation": "Marca del grupo",
        "note": "Renault es una marca de Renault Group."
    },
    "brandUrl": "https://www.renault.es/electricos/twingo-e-tech-electrico.html",
    "dataStatus": {
        "status": "Revisado parcialmente",
        "checkedAt": "15/10/2026"
    }
},
{
    "id": 14,
    "brand": "Leapmotor",
    "model": "T03",
    "type": "Urbano",
    "launchYear": 2024,
    "warranty": {
        "vehicle": "4 años / 120.000 km",
        "battery": "8 años / 160.000 km",
        "capacity": "80 %"
    },
    "priceMin": 19475,
    "priceMax": 19475,
    "priceText": "19.475 €",
    "rangeText": "265 km",
    "minRangeVal": 265,
    "maxRangeVal": 265,
    "batteryText": "37,3 kWh",
    "batteryType": "LFP",
    "powerText": "95 CV",
    "trunk": 210,
    "frunkText": "No disponible",
    "seats": 4,
    "acceleration": "12,7 s",
    "dimensions": "3,62 × 1,65 × 1,58 m",
    "charging": "Hasta 45 kW CC",
    "description": "El Leapmotor T03 es un eléctrico urbano compacto de cuatro plazas con batería de 37,3 kWh y autonomía homologada de hasta 265 km WLTP. Su formato pequeño facilita los desplazamientos y el aparcamiento en ciudad.",
    "highlights": [
        "265 km WLTP",
        "Tamaño urbano compacto",
        "Techo panorámico",
        "Batería de 37,3 kWh"
    ],
    "considerations": [
        "Cuatro plazas",
        "Maletero reducido",
        "Autonomía principalmente urbana",
        "Confirmar precio al contado actualizado antes de contratar"
    ],
    "idealFor": [
        "Ciudad",
        "Uso diario",
        "Primer eléctrico",
        "Segundo coche"
    ],
    "priceInfo": {
        "includesVat": true,
        "includesAid": false,
        "note": "Precio de referencia pendiente de confirmación actualizada. No se descuentan ayudas públicas; comprobar PVP al contado sin financiación ni CAE."
    },
    "chargingInfo": {
        "dcMax": "45 kW",
        "acMax": "6,6 kW",
        "fastChargeText": "30-80 % en aproximadamente 36 min",
        "connector": "CCS2",
        "v2l": false
    },
    "trims": [
        {
            "name": "T03 37,3 kWh",
            "price": "19.475 €",
            "priceValue": 19475,
            "battery": "37,3 kWh",
            "batteryType": "LFP",
            "power": "95 CV",
            "range": "265 km WLTP",
            "rangeValue": 265,
            "accel": "12,7 s"
        }
    ],
    "colors": [
        {
            "name": "Blanco",
            "hex": "#f5f5f4",
            "border": "#cbd5e1"
        },
        {
            "name": "Gris",
            "hex": "#64748b"
        },
        {
            "name": "Azul",
            "hex": "#7ca5ba"
        }
    ],
    "images": [
        "img/cars/leapmotor_t03/t03_01.webp",
        "img/cars/leapmotor_t03/t03_02.webp",
        "img/cars/leapmotor_t03/t03_03.webp",
        "img/cars/leapmotor_t03/t03_04.webp",
        "img/cars/leapmotor_t03/t03_05.webp",
        "img/cars/leapmotor_t03/t03_06.webp",
        "img/cars/leapmotor_t03/t03_07.webp",
        "img/cars/leapmotor_t03/t03_08.webp"
    ],
    "videos": [
        {
            "title": "Leapmotor T03",
            "url": "https://www.youtube.com/results?search_query=Leapmotor+T03+prueba",
            "thumb": "img/cars/leapmotor_t03/t03_01.webp"
        }
    ],
    "brandInfo": {
        "logo": "img/brands/leapmotor.png",
        "group": "Leapmotor International",
        "relation": "Distribución en Europa con Stellantis",
        "note": "Marca de vehículos eléctricos con distribución europea mediante Leapmotor International."
    },
    "brandUrl": "https://www.leapmotor.net/es-es/modelos/t03",
    "dataStatus": {
        "status": "Pendiente de revisar precio",
        "checkedAt": "15/10/2026"
    }
},
    {
        id:13,
        brand:"Tesla",
        model:"Model 3",
        type:"Berlina",
        launchYear:2026,
        warranty:{vehicle:"4 años / 80.000 km",battery:"8 años / 160.000-192.000 km según versión",capacity:"70 %"},
        priceMin:36990,priceMax:57490,priceText:"36.990 - 57.490 €",
        rangeText:"572 - 750 km",minRangeVal:572,maxRangeVal:750,
        batteryText:"62,5 / 79 kWh",batteryType:"LFP / NMC",
        powerText:"279 - 464 CV",
        trunk:594,frunkText:"88 L",seats:5,
        acceleration:"3,1 - 6,2 s",dimensions:"4,72 × 1,85 × 1,44 m",
        charging:"175 / 250 kW · hasta 286 km recuperados en 15 min",
        description:"Berlina eléctrica de referencia y uno de los coches eléctricos más vendidos en España. Destaca por su elevada eficiencia, amplia autonomía, acceso a la red de Supercargadores Tesla y avanzado software. Incorpora el Modo Centinela y tecnología de conducción autónoma, todavía pendiente de autorización completa en Europa. La variante Premium Gran Autonomía de tracción trasera anuncia hasta 750 km WLTP.",
        highlights:["Hasta 750 km WLTP","Red de Supercargadores","Consumo contenido","594 L de maletero + 88 L de frunk"],
        considerations:["Red de talleres oficiales y puntos de venta limitada en España","Muchas funciones dependen de la pantalla central","La versión de acceso ofrece menos equipamiento de confort","La tarifa no incluye 980 € de destino y documentación"],
        idealFor:["Viajes largos","Uso familiar","Autopista","Desplazamientos diarios"],
        priceInfo:{includesVat:true,includesAid:false,note:"Tarifas oficiales con IVA, sin ayudas ni descuentos. Tesla añade 980 € por destino y documentación; las opciones aumentan el precio."},
        chargingInfo:{dcMax:"175 / 250 kW",acMax:"11 kW",fastChargeText:"Hasta 286 km de autonomía añadidos en 15 min (según versión); Tesla no publica un tiempo 10-80 % común",connector:"CCS2",v2l:false},
        trims:[
            {name:"RWD",price:"36.990 €",priceValue:36990,battery:"62,5 kWh",batteryType:"LFP",power:"279 CV",range:"572 km WLTP",rangeValue:572,accel:"6,2 s"},
            {name:"Premium Gran Autonomía RWD",price:"44.990 €",priceValue:44990,battery:"79 kWh",batteryType:"NMC",power:"304 CV",range:"750 km WLTP",rangeValue:750,accel:"5,2 s"},
            {name:"Premium Gran Autonomía AWD",price:"48.990 €",priceValue:48990,battery:"79 kWh",batteryType:"NMC",power:"392 CV",range:"660 km WLTP",rangeValue:660,accel:"4,0 s"},
            {name:"Performance AWD",price:"57.490 €",priceValue:57490,battery:"79 kWh",batteryType:"NMC",power:"464 CV",range:"571 km WLTP",rangeValue:571,accel:"3,1 s"}
        ],
        colors:[{name:"Blanco Perla",hex:"#f5f5f3",border:"#cbd5e1"},{name:"Negro",hex:"#17191b"},{name:"Gris Sigilo",hex:"#53575c"},{name:"Azul",hex:"#28436b"},{name:"Rojo",hex:"#8b1e2d"}],
        images:["img/cars/tesla-model3/Tesla-Model3_01.webp","img/cars/tesla-model3/Tesla-Model3_02.webp","img/cars/tesla-model3/Tesla-Model3_03.webp","img/cars/tesla-model3/Tesla-Model3_04.webp","img/cars/tesla-model3/Tesla-Model3_05.webp","img/cars/tesla-model3/Tesla-Model3_06.webp","img/cars/tesla-model3/Tesla-Model3_07.webp","img/cars/tesla-model3/Tesla-Model3_08.webp"],
        videos:[{title:"Tesla Model 3",url:"https://www.youtube.com/results?search_query=Tesla+Model+3+2026+prueba",thumb:"img/cars/tesla-model3/Tesla-Model3_01.webp"}],
        brandInfo:{logo:"https://commons.wikimedia.org/wiki/Special:Redirect/file/Teslalogo.png",group:"Tesla, Inc.",relation:"Fabricante",note:"Fabricante estadounidense especializado en vehículos eléctricos."},
        brandUrl:"https://www.tesla.com/es_es/model3",
        dataStatus:{status:"Revisado",checkedAt:"15/10/2026"}
    },
    {
        id: 1,
        brand: "Leapmotor",
        model: "B03X",
        type: "SUV",
        launchYear: 2026,
        warranty:{"vehicle":"Hasta 4 años / 120.000 km","battery":"8 años / 160.000 km","capacity":"70 %"},
        priceMin: 22900, priceMax: 27900, priceText: "22.900 - 27.900 €",
        rangeText: "292 - 382 km", minRangeVal: 292, maxRangeVal: 382,
        batteryText: "39,8 - 53 kWh", batteryType: "LFP",
        powerText: "177 - 197 CV", trunk: 510, frunkText: "No disponible", seats: 5, acceleration: "8,6 s",
        dimensions: "4,32 × 1,81 × 1,62 m", charging: "100 / 133 kW · 30-80% en 16 min",
        description: "SUV eléctrico compacto con dos opciones de batería, buen espacio interior y un posicionamiento de precio contenido.",
        highlights: ["Relación precio/equipamiento","510 litros de maletero","Dos tamaños de batería","Formato SUV compacto"],
        considerations: ["La batería pequeña está más orientada al uso diario","Marca todavía joven en Europa","La versión de mayor autonomía supone un salto de precio"],
        idealFor: ["Uso diario","Familias","Ciudad","Trayectos interurbanos"],
        priceInfo: { includesVat: true, includesAid: false, note: "Precios mostrados con IVA y sin ayudas públicas." },
        chargingInfo: { dcMax: "100 / 133 kW", acMax: "11 kW", fastChargeText: "30-80% en 16 min", connector: "CCS2", v2l: null },
        trims: [
            { name:"Pro", price:"22.900 €", priceValue:22900, battery:"39,8 kWh", batteryType:"LFP", power:"130 kW (177 CV)", range:"292 km WLTP", rangeValue:292, accel:"8,6 s" },
            { name:"ProMax", price:"27.900 €", priceValue:27900, battery:"53 kWh", batteryType:"LFP", power:"145 kW (197 CV)", range:"382 km WLTP", rangeValue:382, accel:"8,6 s" }
        ],
        colors:[{name:"Marrón Bellota",hex:"#8c7355"},{name:"Azul Arándano",hex:"#3b4d66"},{name:"Plata Estelar",hex:"#cbd5e1",border:"#94a3b8"},{name:"Verde Alga",hex:"#233d2c"},{name:"Gris Tundra",hex:"#71797e"},{name:"Beige Escarcha",hex:"#e5e3d4",border:"#cbd5e1"}],
        images:["img/cars/leapmotor-b03x/b03x-0.jpg","img/cars/leapmotor-b03x/b03x-1.jpg","img/cars/leapmotor-b03x/b03x-3.jpg","img/cars/leapmotor-b03x/b03x-4.jpg","img/cars/leapmotor-b03x/b03x-5.jpg","img/cars/leapmotor-b03x/b03x-6.jpg","img/cars/leapmotor-b03x/b03x-7.jpg","img/cars/leapmotor-b03x/b03x-8.jpg"],
        videos:[{title:"Leapmotor B03X: Prueba completa y detalles",url:"https://www.youtube.com/results?search_query=Leapmotor+B03X+review",thumb:"img/cars/leapmotor-b03x/b03x-7.jpg"}],
        brandInfo:{logo:"img/brands/leapmotor.png",group:"Stellantis",relation:"Alianza estratégica",note:"Stellantis es el principal accionista individual de Leapmotor y lidera Leapmotor International fuera de China."},
        brandUrl:"https://www.leapmotor.com",
         dataStatus:{ status:"Revisado", checkedAt:"07/10/2026" }
    },

            {
        id:2,
        brand:"Citroën",
        model:"ë-C3",
        type:"Utilitario / Compacto",
        launchYear:2024,
        warranty:{"vehicle":"2 años; hasta 8 años / 160.000 km con We Care","battery":"8 años / 160.000 km","capacity":"70 %"},

        priceMin:21350,
        priceMax:28450,
        priceText:"21.350 - 28.450 €",

        rangeText:"212 - 325 km",
        minRangeVal:212,
        maxRangeVal:325,

        batteryText:"30 - 44 kWh",
        batteryType:"LFP",
        powerText:"113 CV",

        trunk:310,
        frunkText:"No disponible",
        seats:5,
        acceleration:"≈11 s",
        dimensions:"4,02 × 1,76 × 1,58 m",
        charging: "30 / 100 kW · 20-80% en 36 / 26 min",

        description:"El Citroën ë-C3 es un eléctrico urbano cómodo y asequible, disponible con dos baterías y una gama amplia de acabados. Las versiones Urban Range priorizan precio y ciudad; las Comfort Range ofrecen mayor autonomía y carga rápida de hasta 100 kW.",

        highlights:[
            "Desde 21.350 € de PVPR sin ayudas",
            "Hasta 325 km WLTP",
            "Suspensión Citroën Advanced Comfort según versión",
            "Gama amplia de acabados y ediciones especiales"
        ],

        considerations:[
            "La batería de 30 kWh está especialmente orientada a ciudad",
            "La carga DC de la Urban Range queda limitada a 30 kW",
            "OUTDOOR se muestra en una ficha independiente por su diseño específico"
        ],

        idealFor:[
            "Ciudad",
            "Primer eléctrico",
            "Uso diario",
            "Segundo coche familiar"
        ],

        priceInfo:{
            includesVat:true,
            includesAid:false,
            note:"PVPR de referencia con IVA y sin Plan Auto+, CAE ni otras ayudas públicas. Las promociones de Citroën pueden mostrar importes inferiores al incluir ayudas o campañas."
        },

        chargingInfo:{
            dcMax:"30 kW (30 kWh) / 100 kW (44 kWh)",
            acMax:"11 kW",
            fastChargeText:"20-80% en 36 min (30 kWh) o 26 min (44 kWh)",
            connector:"CCS2",
            v2l:false
        },

        trims:[
            {
                name:"YOU Urban Range",
                price:"21.350 €",
                priceValue:21350,
                battery:"30 kWh",
                batteryType:"LFP",
                power:"83 kW (113 CV)",
                range:"212 km WLTP",
                rangeValue:212,
                accel:"≈11 s"
            },
            {
                name:"PLUS Comfort Range",
                price:"23.950 €",
                priceValue:23950,
                battery:"44 kWh",
                batteryType:"LFP",
                power:"83 kW (113 CV)",
                range:"hasta 325 km WLTP",
                rangeValue:325,
                accel:"≈11 s"
            },
            {
                name:"MAX Comfort Range",
                price:"28.450 €",
                priceValue:28450,
                battery:"44 kWh",
                batteryType:"LFP",
                power:"83 kW (113 CV)",
                range:"hasta 325 km WLTP",
                rangeValue:325,
                accel:"≈11 s"
            },
            {
                name:"BUSINESS Comfort Range",
                price:"28.450 €",
                priceValue:28450,
                battery:"44 kWh",
                batteryType:"LFP",
                power:"83 kW (113 CV)",
                range:"hasta 325 km WLTP",
                rangeValue:325,
                accel:"≈11 s"
            },
            {
                name:"TONIC Urban Range",
                price:"Precio por confirmar",
                priceValue:null,
                battery:"30 kWh",
                batteryType:"LFP",
                power:"83 kW (113 CV)",
                range:"hasta 215 km WLTP",
                rangeValue:215,
                accel:"≈11 s"
            },
            {
                name:"TONIC Comfort Range",
                price:"Precio por confirmar",
                priceValue:null,
                battery:"44 kWh",
                batteryType:"LFP",
                power:"83 kW (113 CV)",
                range:"hasta 324 km WLTP",
                rangeValue:324,
                accel:"≈11 s"
            },
            {
                name:"COLLECTION Comfort Range",
                price:"27.551 €",
                priceValue:27551,
                battery:"44 kWh",
                batteryType:"LFP",
                power:"83 kW (113 CV)",
                range:"hasta 325 km WLTP",
                rangeValue:325,
                accel:"≈11 s"
            }
        ],

        colors:[
    {name:"Azul Monte Carlo",hex:"#2f5f87"},
    {name:"Blanco Polar",hex:"#f4f4f1",border:"#cbd5e1"},
    {name:"Negro Perla Nera",hex:"#151719"},
    {name:"Mercury Grey",hex:"#777b7e"},
    {name:"Azul Brillante",hex:"#537f9b"},
    {name:"Rojo Elixir",hex:"#8f1f2d"}
],

        images:[
            "img/cars/citroen-ec3/c3_01.webp",
            "img/cars/citroen-ec3/c3_02.webp",
            "img/cars/citroen-ec3/c3_03.webp",
            "img/cars/citroen-ec3/c3_04.webp",
            "img/cars/citroen-ec3/c3_05.webp",
            "img/cars/citroen-ec3/c3_06.webp",
            "img/cars/citroen-ec3/c3_07.webp",
            "img/cars/citroen-ec3/c3_08.webp"
        ],

        videos:[
            {
                title:"Citroën ë-C3",
                url:"https://www.youtube.com/results?search_query=Citroen+e-C3+prueba",
                thumb:"img/cars/citroen-ec3/c3_01.webp"
            }
        ],

        brandInfo:{
            logo:"img/brands/citroen.png",
            group:"Stellantis",
            relation:"Marca del grupo",
            note:"Citroën forma parte de Stellantis."
        },

        brandUrl:"https://www.citroen.es",

        dataStatus:{
            status:"Revisado",
            checkedAt:"07/10/2026"
        }
    },

        {
        id:3,
        brand:"Renault",
        model:"5 E-Tech eléctrico",
        type:"Utilitario / Compacto",
        launchYear:2024,
        warranty:{"vehicle":"3 años / km ilimitados","battery":"8 años / 160.000 km","capacity":"70 %"},

        priceMin:23056,
        priceMax:36585,
        priceText:"23.056 - 36.585 €",

        rangeText:"310 - 430 km",
        minRangeVal:310,
        maxRangeVal:430,

        batteryText:"40 - 52 kWh",
        batteryType:"NMC",
        powerText:"95 - 150 CV",

        trunk:326, frunkText: "No disponible",
        seats:5,
        acceleration:"8,0 - 12,0 s",
        dimensions:"3,92 × 1,77 × 1,50 m",
        charging: "Hasta 100 kW (excepto Five) · 15-80% en 30 min",

        description:"El Renault 5 E-Tech eléctrico combina formato urbano, diseño distintivo y una gama amplia de acabados. El five de 95 CV y 40 kWh es actualmente la puerta de entrada, mientras que evolution, techno, iconic cinq y Roland-Garros amplían autonomía, potencia y equipamiento.",

        highlights:[
            "Cinco acabados",
            "Hasta 430 km WLTP",
            "Desde 23.056 € sin ayudas públicas",
            "V2L disponible según versión"
        ],

        considerations:[
            "El five actual de 95 CV convive temporalmente con una nueva versión de 110 CV anunciada para finales de 2026",
            "La carga rápida y algunas funciones dependen de la versión",
            "Los colores y opciones de personalización dependen del acabado"
        ],

        idealFor:[
            "Ciudad",
            "Uso diario",
            "Parejas",
            "Viajes medios"
        ],

        priceInfo:{
            includesVat:true,
            includesAid:false,
            note:"PVP de referencia con IVA y sin Auto+, CAE ni otras ayudas públicas. La gama está en transición durante 2026."
        },

        chargingInfo:{
            dcMax:"100 kW según versión",
            acMax:"11 kW según versión",
            fastChargeText:"15-80% aprox. 30 min en versiones compatibles",
            connector:"CCS2",
            v2l:"Según versión"
        },

        trims:[
            {
                name:"five · 40 kWh",
                status:"Actual",
                price:"23.056 €",
                priceValue:23056,
                battery:"40 kWh",
                batteryType:"NMC",
                power:"70 kW (95 CV)",
                range:"310 km WLTP",
                rangeValue:310,
                accel:"12,0 s"
            },
            {
                name:"five · 37 kWh",
                status:"Próximamente",
                price:"Pendiente",
                priceValue:null,
                battery:"37 kWh",
                batteryType:"Pendiente confirmar",
                power:"80 kW (110 CV)",
                range:"Pendiente confirmar",
                rangeValue:null,
                accel:"Pendiente"
            },
            {
                name:"evolution · 40 kWh",
                status:"Actual",
                price:"28.085 €",
                priceValue:28085,
                battery:"40 kWh",
                batteryType:"NMC",
                power:"90 kW (120 CV)",
                range:"315 km WLTP",
                rangeValue:315,
                accel:"≈9,0 s"
            },
            {
                name:"techno · 40 kWh",
                status:"Actual",
                price:"30.085 €",
                priceValue:30085,
                battery:"40 kWh",
                batteryType:"NMC",
                power:"90 kW (120 CV)",
                range:"315 km WLTP",
                rangeValue:315,
                accel:"≈9,0 s"
            },
            {
                name:"evolution · 52 kWh",
                status:"Actual",
                price:"31.085 €",
                priceValue:31085,
                battery:"52 kWh",
                batteryType:"NMC",
                power:"110 kW (150 CV)",
                range:"430 km WLTP",
                rangeValue:430,
                accel:"≈8,0 s"
            },
            {
                name:"techno · 52 kWh",
                status:"Actual",
                price:"33.085 €",
                priceValue:33085,
                battery:"52 kWh",
                batteryType:"NMC",
                power:"110 kW (150 CV)",
                range:"430 km WLTP",
                rangeValue:430,
                accel:"≈8,0 s"
            },
            {
                name:"iconic cinq · 52 kWh",
                status:"Actual",
                price:"35.085 €",
                priceValue:35085,
                battery:"52 kWh",
                batteryType:"NMC",
                power:"110 kW (150 CV)",
                range:"430 km WLTP",
                rangeValue:430,
                accel:"≈8,0 s"
            },
            {
                name:"Roland-Garros · 52 kWh",
                status:"Actual",
                price:"36.585 €",
                priceValue:36585,
                battery:"52 kWh",
                batteryType:"NMC",
                power:"110 kW (150 CV)",
                range:"430 km WLTP",
                rangeValue:430,
                accel:"≈8,0 s"
            }
        ],

        colors:[
            {name:"Amarillo Pop",hex:"#e5d329"},
            {name:"Verde Pop",hex:"#4f755e"},
            {name:"Azul Noche",hex:"#173d68"},
            {name:"Blanco Nacarado",hex:"#f4f2eb",border:"#cbd5e1"},
            {name:"Negro Brillante",hex:"#111315"},
            {name:"Rojo Deseo",hex:"#8e1e2b"},
            {name:"Gris Pizarra",hex:"#62676a"}
        ],

        colorAvailability:{
            note:"La disponibilidad de colores depende del acabado. La ficha muestra conjuntamente todos los colores disponibles en la gama.",

            five:[
                "Verde Pop",
                "Negro Brillante"
            ],

            evolution:[
                "Amarillo Pop",
                "Verde Pop",
                "Blanco Nacarado",
                "Negro Brillante",
                "Rojo Deseo",
                "Gris Pizarra"
            ],

            techno:[
                "Amarillo Pop",
                "Verde Pop",
                "Azul Noche",
                "Blanco Nacarado",
                "Negro Brillante",
                "Rojo Deseo",
                "Gris Pizarra"
            ],

            iconicCinq:[
                "Amarillo Pop",
                "Azul Noche",
                "Negro Brillante",
                "Rojo Deseo",
                "Gris Pizarra"
            ],

            rolandGarros:[
                "Azul Noche",
                "Blanco Nacarado",
                "Gris Pizarra"
            ]
        },

        images:[
            "img/cars/renault-5/01.webp",
            "img/cars/renault-5/02.webp",
            "img/cars/renault-5/03.webp",
            "img/cars/renault-5/04.webp",
            "img/cars/renault-5/05.webp",
            "img/cars/renault-5/06.webp",
            "img/cars/renault-5/07.webp",
            "img/cars/renault-5/08.webp"
        ],

        videos:[
            {
                title:"Renault 5 E-Tech eléctrico",
                url:"https://www.youtube.com/results?search_query=Renault+5+E-Tech+prueba",
                thumb:"img/cars/renault-5/01.webp"
            }
        ],

        brandInfo:{
            logo:"img/brands/renault.png",
            group:"Renault Group",
            relation:"Marca principal",
            note:"Renault es la marca principal de Renault Group."
        },

        brandUrl:"https://www.renault.es",

        dataStatus:{ status:"Revisado", checkedAt:"07/10/2026" }
    },

    {

    id: 4,
    brand: "Hyundai",
    model: "INSTER",
    type: "Utilitario / Compacto",
    launchYear: 2025,
        warranty:{"vehicle":"5 años / km ilimitados","battery":"8 años / 160.000 km","capacity":"70 %"},

    priceMin: 24706,
    priceMax: 32416,
    priceText: "24.706 - 32.416 €",

    rangeText: "327 - 370 km",
    minRangeVal: 327,
    maxRangeVal: 370,

    batteryText: "42 - 49 kWh",
    batteryType: "NMC",
    powerText: "97 - 115 CV",

    trunk: 280,
    seats: 4,
    acceleration: "10,6 - 11,7 s",
    dimensions: "3,83 × 1,61 × 1,58 m",
    charging: "73 / 85 kW · 10-80% en 30 min",

    description: "El Hyundai INSTER es un SUV urbano 100% eléctrico de cuatro plazas que combina unas dimensiones exteriores compactas con un habitáculo sorprendentemente versátil. Dispone de dos capacidades de batería, 42 y 49 kWh, ofrece hasta 370 km de autonomía WLTP y cuenta con tecnología de carga bidireccional V2L.",

    highlights: [
        "Hasta 370 km de autonomía WLTP",
        "Interior flexible con asientos traseros deslizantes",
        "Carga rápida del 10 al 80% en unos 30 minutos",
        "Función V2L para alimentar dispositivos externos",
        "Dimensiones compactas ideales para ciudad"
    ],

    considerations: [
        "Homologado para 4 plazas",
        "Maletero de 280 litros en configuración estándar",
        "La batería de 49 kWh incrementa el precio",
        "Autonomía más limitada que la de eléctricos de segmentos superiores"
    ],

    idealFor: [
        "Ciudad",
        "Parejas",
        "Familias de hasta 4 personas",
        "Uso diario",
        "Aparcamiento en espacios reducidos"
    ],

    priceInfo: {
        includesVat: true,
        includesAid: false,
        note: "PVP de tarifa 2026 con IVA, sin ayudas, descuentos promocionales ni financiación. Precios de referencia publicados; sujetos a revisión según tarifa oficial vigente."
    },

    chargingInfo: {
        dcMax: "73 / 85 kW",
        acMax: "11 kW",
        fastChargeText: "10-80% en unos 30 min",
        connector: "CCS2",
        v2l: true
    },

    trims: [
        {
            name: "KLASS 42 kWh",
            price: "24.706 €",
            priceValue: 24706,
            battery: "42 kWh",
            batteryType: "NMC",
            power: "71,1 kW (97 CV)",
            range: "327 km WLTP",
            rangeValue: 327,
            accel: "11,7 s",
            seats: 4
        },
        {
            name: "MAXX 42 kWh",
            price: "26.406 €",
            priceValue: 26406,
            battery: "42 kWh",
            batteryType: "NMC",
            power: "71,1 kW (97 CV)",
            range: "327 km WLTP",
            rangeValue: 327,
            accel: "11,7 s",
            seats: 4
        },
        {
            name: "MAXX 49 kWh 17\"",
            price: "28.066 €",
            priceValue: 28066,
            battery: "49 kWh",
            batteryType: "NMC",
            power: "84,5 kW (115 CV)",
            range: "360 km WLTP",
            rangeValue: 360,
            accel: "10,6 s",
            seats: 4
        },
        {
            name: "MAXX Cross 49 kWh",
            price: "29.215 €",
            priceValue: 29215,
            battery: "49 kWh",
            batteryType: "NMC",
            power: "84,5 kW (115 CV)",
            range: "360 km WLTP",
            rangeValue: 360,
            accel: "10,6 s",
            seats: 4
        },
        {
            name: "TECNO 49 kWh",
            price: "31.016 €",
            priceValue: 31016,
            battery: "49 kWh",
            batteryType: "NMC",
            power: "84,5 kW (115 CV)",
            range: "360 km WLTP",
            rangeValue: 360,
            accel: "10,6 s",
            seats: 4
        },
        {
            name: "TECNO 2C 49 kWh",
            price: "31.316 €",
            priceValue: 31316,
            battery: "49 kWh",
            batteryType: "NMC",
            power: "84,5 kW (115 CV)",
            range: "360 km WLTP",
            rangeValue: 360,
            accel: "10,6 s",
            seats: 4
        },
        {
            name: "TECNO Cross 49 kWh",
            price: "32.416 €",
            priceValue: 32416,
            battery: "49 kWh",
            batteryType: "NMC",
            power: "84,5 kW (115 CV)",
            range: "360 km WLTP",
            rangeValue: 360,
            accel: "10,6 s",
            seats: 4
        }
    ],

    colors: [
        {
            name: "Atlas White",
            hex: "#E8E9E7",
            border: "#CBD5E1"
        },
        {
            name: "Unbleached Ivory",
            hex: "#D9D0BC"
        },
        {
            name: "Buttercream Yellow Pearl",
            hex: "#E4DB9D"
        },
        {
            name: "Sienna Orange Metallic",
            hex: "#B76E49"
        },
        {
            name: "Aero Silver Matte",
            hex: "#A8ACAA"
        },
        {
            name: "Tomboy Khaki",
            hex: "#777C69"
        },
        {
            name: "Dusk Blue Matte",
            hex: "#637C89"
        },
        {
            name: "Abyss Black Pearl",
            hex: "#191C20"
        }
    ],

    images: [
        "img/cars/hyundai-inster/inster_01.webp",
        "img/cars/hyundai-inster/inster_02.webp",
        "img/cars/hyundai-inster/inster_03.webp",
        "img/cars/hyundai-inster/inster_04.webp",
        "img/cars/hyundai-inster/inster_05.webp",
        "img/cars/hyundai-inster/inster_06.webp",
        "img/cars/hyundai-inster/inster_07.webp",
        "img/cars/hyundai-inster/inster_08.webp",

    ],

    videos: [
        {
            title: "Hyundai INSTER: pruebas y análisis",
            url: "https://www.youtube.com/results?search_query=Hyundai+INSTER+prueba",
            thumb: "img/cars/hyundai-inster/inster_01.webp"
        }
    ],

    brandInfo: {
        logo: "img/brands/hyundai.png",
        group: "Hyundai Motor Group",
        relation: "Marca del grupo",
        note: "Hyundai forma parte de Hyundai Motor Group."
    },

    brandUrl: "https://www.hyundai.com/es/es/modelos/inster.html",

    dataStatus:{ status:"Revisado", checkedAt:"08/10/2026"
    }
},

    {
        id:5, brand:"BYD", model:"DOLPHIN SURF", type:"Utilitario / Compacto", launchYear:2025,
        warranty:{"vehicle":"6 años / 150.000 km","battery":"8 años / 250.000 km","capacity":"70 %"},
        priceMin:20140, priceMax:26990, priceText:"20.140 - 26.990 €",
        rangeText:"220 - 322 km", minRangeVal:220, maxRangeVal:322,
        batteryText:"30 - 43,2 kWh", batteryType:"LFP Blade", powerText:"88 - 156 CV",
        trunk:308, frunkText: "No disponible", seats:5, acceleration:"9,1 - 12,1 s", dimensions:"3,99 × 1,72 × 1,59 m",
        charging: "65 / 85 kW · 10-80% en 30-31 min",
        description:"Urbano eléctrico de BYD con batería Blade LFP, formato compacto y una gama que va desde una versión básica de 30 kWh hasta una Comfort bastante más potente.",
        highlights:["Precio competitivo","Batería Blade LFP","308 litros de maletero","Disponible con 5 plazas"],
        considerations:["Autonomía de acceso limitada","La versión Active MY26 sigue figurando con 4 plazas","Comfort sube bastante de precio"],
        idealFor:["Ciudad","Uso diario","Primer eléctrico","Familias pequeñas"],
        priceInfo:{includesVat:true,includesAid:false,note:"PVP recomendado Península y Baleares, sin campañas ni ayudas públicas."},
        chargingInfo:{dcMax: "65 / 85 kW",acMax:"11 kW",fastChargeText:"Carga rápida CC",connector:"CCS2",v2l:true},
        trims:[
            {name:"Active MY26  4 plazas",price:"20.140 €",priceValue:20140,battery:"30 kWh",batteryType:"LFP Blade",power:"65 kW (88 CV)",range:"220 km WLTP",rangeValue:220,accel:"11,1 s"},
            {name:"Boost MY26  5 plazas",price:"24.490 €",priceValue:24490,battery:"43,2 kWh",batteryType:"LFP Blade",power:"65 kW (88 CV)",range:"hasta 322 km WLTP",rangeValue:322,accel:"12,1 s"},
            {name:"Comfort MY26  5 plazas",price:"26.990 €",priceValue:26990,battery:"43,2 kWh",batteryType:"LFP Blade",power:"115 kW (156 CV)",range:"hasta 322 km WLTP",rangeValue:322,accel:"9,1 s"}
        ],

colors: [
  { name: "Lime Green", hex: "#B2BD49" },
  { name: "Ice Blue", hex: "#9DB7D3" },
  { name: "Skiing White / Apricity White", hex: "#D3D0C7" },
  { name: "Obsidian Black / Polar Night Black", hex: "#20242B" }
],

images: [
  "img/cars/byd-dolphin-surf/dolphin-surf_01.webp",
  "img/cars/byd-dolphin-surf/dolphin-surf_02.webp",
  "img/cars/byd-dolphin-surf/dolphin-surf_03.webp",
  "img/cars/byd-dolphin-surf/dolphin-surf_04.webp",
  "img/cars/byd-dolphin-surf/dolphin-surf_05.webp",
  "img/cars/byd-dolphin-surf/dolphin-surf_06.webp",
  "img/cars/byd-dolphin-surf/dolphin-surf_07.webp",
  "img/cars/byd-dolphin-surf/dolphin-surf_08.webp"
],

        videos:[{title:"BYD DOLPHIN SURF",url:"https://www.youtube.com/results?search_query=BYD+Dolphin+Surf+prueba",thumb:"img/cars/byd-dolphin-surf/dolphin-surf_01.webp"}],
        brandInfo:{logo:"img/brands/byd.png",group:"BYD Company",relation:"Marca del grupo",note:"BYD Auto pertenece a BYD Company."},
        brandUrl:"https://www.byd.com/es-es",  dataStatus:{
            status:"Revisado",
            checkedAt:"07/10/2026"}

    },

{
    id: 6,
    brand: "Kia",
    model: "EV3",
    type: "SUV",
    launchYear: 2024,
        warranty:{"vehicle":"7 años / 150.000 km","battery":"8 años / 160.000 km","capacity":"70 %"},

    priceMin: 37020,
    priceMax: 48795,
    priceText: "37.020 - 48.795 €",

    rangeText: "436 - 605 km",
    minRangeVal: 436,
    maxRangeVal: 605,

    batteryText: "58,3 - 81,4 kWh",
    batteryType: "NMC",
    powerText: "204 CV",

    trunk: 460,
    frunkText: "25 L",
    seats: 5,
    acceleration: "7,5 - 7,7 s",
    dimensions: "4,30 × 1,85 × 1,56 m",
    charging: "102 / 128 kW · 10-80% en 29-31 min",

    description: "El Kia EV3 es un SUV compacto 100% eléctrico que destaca por su autonomía, habitabilidad y tecnología. Ofrece dos baterías de 58,3 y 81,4 kWh, con hasta 605 km de autonomía WLTP. La gama incluye acabados Air, Earth y GT-Line, con un maletero de 460 litros y un compartimento delantero adicional de 25 litros.",

    highlights: [
        "Hasta 605 km de autonomía WLTP",
        "Dos baterías disponibles: 58,3 y 81,4 kWh",
        "Maletero de 460 litros más frunk de 25 litros",
        "Carga rápida del 10 al 80% en aproximadamente 29-31 minutos",
        "Tecnología V2L disponible según equipamiento",
        "Garantía Kia de 7 años o 150.000 km"
    ],

considerations: [
    "La carga rápida es menos potente que en algunos rivales con arquitectura de 800 V",
    "La batería Long Range incrementa el peso y el precio",
    "La autonomía varía según acabado, llantas y equipamiento",
    "El acabado GT-Line tiene un precio considerablemente superior al Air"
],

    idealFor: [
        "Familias",
        "Viajes largos",
        "Uso diario",
        "SUV compacto",
        "Conductores que priorizan autonomía"
    ],

    priceInfo: {
        includesVat: true,
        includesAid: false,
        note: "PVP de tarifa de referencia con IVA, sin ayudas públicas, descuentos comerciales ni financiación. Importes correspondientes a referencias de enero de 2026, pendientes de confirmar con la tarifa vigente de octubre de 2026."
    },

    chargingInfo: {
        dcMax: "102 / 128 kW",
        acMax: "11 kW",
        fastChargeText: "10-80% en aproximadamente 29-31 minutos",
        connector: "CCS2",
        v2l: "Según acabado y equipamiento"
    },

    trims: [
        {
            name: "Standard Range Air",
            price: "37.020 €",
            priceValue: 37020,
            battery: "58,3 kWh",
            batteryType: "NMC",
            power: "150 kW (204 CV)",
            range: "436 km WLTP",
            rangeValue: 436,
            accel: "7,5 s"
        },
        {
            name: "Standard Range Earth",
            price: "38.520 €",
            priceValue: 38520,
            battery: "58,3 kWh",
            batteryType: "NMC",
            power: "150 kW (204 CV)",
            range: "436 km WLTP aprox.",
            rangeValue: 436,
            accel: "7,5 s"
        },
        {
            name: "Long Range Air",
            price: "41.795 €",
            priceValue: 41795,
            battery: "81,4 kWh",
            batteryType: "NMC",
            power: "150 kW (204 CV)",
            range: "605 km WLTP",
            rangeValue: 605,
            accel: "7,7 s"
        },
        {
            name: "Long Range Earth",
            price: "43.295 €",
            priceValue: 43295,
            battery: "81,4 kWh",
            batteryType: "NMC",
            power: "150 kW (204 CV)",
            range: "hasta 605 km WLTP",
            rangeValue: 605,
            accel: "7,7 s"
        },
        {
            name: "Long Range GT-Line",
            price: "48.795 €",
            priceValue: 48795,
            battery: "81,4 kWh",
            batteryType: "NMC",
            power: "150 kW (204 CV)",
            range: "hasta 563 km WLTP aprox.",
            rangeValue: 563,
            accel: "7,7 s"
        }
    ],

colors: [
    { name: "Aventurine Green", hex: "#687B69" },
    { name: "Terracotta", hex: "#B66E53" },
    { name: "Frost Blue", hex: "#8CA7B0" },
    { name: "Shale Grey", hex: "#777D7D" },
    { name: "Ivory Silver", hex: "#B9B9B0" },
    { name: "Ivory Silver Matte", hex: "#A9AAA3" },
    { name: "Aurora Black Pearl", hex: "#17191C" },
    { name: "Clear White", hex: "#F2F2EF", border: "#CBD5E1" },
    { name: "Snow White Pearl", hex: "#E9E9E4", border: "#CBD5E1" }
],

colorAvailability: {
    note: "La disponibilidad de colores depende del acabado. Ivory Silver Matte es exclusivo del GT-Line."
},

images: [
    "img/cars/kia-ev3/kia-ev3_01.webp",
    "img/cars/kia-ev3/kia-ev3_02.webp",
    "img/cars/kia-ev3/kia-ev3_03.webp",
    "img/cars/kia-ev3/kia-ev3_04.webp",
    "img/cars/kia-ev3/kia-ev3_05.webp",
    "img/cars/kia-ev3/kia-ev3_06.webp",
    "img/cars/kia-ev3/kia-ev3_07.webp",
    "img/cars/kia-ev3/kia-ev3_08.webp"
],

    videos: [
        {
            title: "Kia EV3: pruebas y análisis",
            url: "https://www.youtube.com/results?search_query=Kia+EV3+prueba",
            thumb: "img/cars/kia-ev3/kia-ev3_01.webp"
        }
    ],

    brandInfo: {
        logo: "img/brands/kia.png",
        group: "Hyundai Motor Group",
        relation: "Marca del grupo",
        note: "Kia forma parte de Hyundai Motor Group."
    },

    brandUrl: "https://www.kia.com/es/modelos/ev3/",
    dataStatus: {
        status: "Revisado",
        checkedAt: "08/10/2026"
    }
},

    
{
  id: 7,
  brand: "Volvo",
  model: "EX30",
  type: "SUV",
  launchYear: 2023,
        warranty:{"vehicle":"3 años / km ilimitados","battery":"8 años / 160.000 km","capacity":"70 %"},

 priceMin: 35412,
priceMax: 53043,
priceText: "35.412 - 53.043 €",

  rangeText: "337 - 475 km WLTP",
  minRangeVal: 337,
  maxRangeVal: 475,

  batteryText: "51 - 69 kWh",
  batteryType: "LFP / NMC",
  powerText: "272 - 428 CV",

  trunk: 318,
  frunkText: "7 L",
  seats: 5,
  acceleration: "3,6 - 5,7 s",

  dimensions: "4,23 × 1,84 × 1,55 m",
  charging: "Hasta 175 kW · 10-80% en 26-27 min",

  description:
    "SUV eléctrico compacto de diseño escandinavo, con " +
    "tracción trasera o total, prestaciones destacadas " +
    "y una versión Long Range especialmente interesante " +
    "para combinar ciudad y viajes.",

  highlights: [
    "Hasta 475 km de autonomía WLTP",
    "Hasta 428 CV y 0-100 km/h en 3,6 s",
    "Carga rápida del 10 al 80% en 26-27 minutos",
    "Diseño compacto y equipamiento tecnológico"
  ],

  considerations: [
    "El maletero de 318 litros es menor que el de algunos rivales",
    "La mayoría de funciones se gestionan desde la pantalla central",
    "La versión AWD tiene menor autonomía que la Long Range RWD",
    "El equipamiento y la autonomía varían según la configuración"
  ],

  idealFor: [
    "Ciudad",
    "Parejas",
    "Familias pequeñas",
    "Viajes",
    "SUV compacto"
  ],

  priceInfo: {
    includesVat: true,
    includesAid: false,
    note:
      "Precios de partida publicados por Volvo España " +
      "para cada motorización. No representan todos los " +
      "acabados ni opciones. Sin ayudas públicas ni " +
      "ofertas condicionadas a financiación."
  },

  chargingInfo: {
    dcMax: "Hasta 175 kW",
    acMax: "11 kW",
    fastChargeText: "10-80% en 26-27 min",
    connector: "CCS2",
    v2l: false
  },


trims: [
  {
    name: "P5 Essential",
    price: "35.413 €",
    priceValue: 35413,
    battery: "51 kWh",
    batteryType: "LFP",
    power: "272 CV",
    range: "335 km WLTP",
    rangeValue: 335,
    accel: "5,7 s"
  },
  {
    name: "P5 Core",
    price: "36.562 €",
    priceValue: 36562,
    battery: "51 kWh",
    batteryType: "LFP",
    power: "272 CV",
    range: "337 km WLTP",
    rangeValue: 337,
    accel: "5,7 s"
  },
  {
    name: "P5 Plus",
    price: "39.466 €",
    priceValue: 39466,
    battery: "51 kWh",
    batteryType: "LFP",
    power: "272 CV",
    range: "337 km WLTP",
    rangeValue: 337,
    accel: "5,7 s"
  },
  {
    name: "P5 Plus Black Edition",
    price: "40.918 €",
    priceValue: 40918,
    battery: "51 kWh",
    batteryType: "LFP",
    power: "272 CV",
    range: "337 km WLTP",
    rangeValue: 337,
    accel: "5,7 s"
  },
  {
    name: "P5 Long Range Core",
    price: "41.402 €",
    priceValue: 41402,
    battery: "69 kWh",
    batteryType: "NMC",
    power: "272 CV",
    range: "474 km WLTP",
    rangeValue: 474,
    accel: "5,3 s"
  },
  {
    name: "P5 Long Range Plus",
    price: "44.306 €",
    priceValue: 44306,
    battery: "69 kWh",
    batteryType: "NMC",
    power: "272 CV",
    range: "475 km WLTP",
    rangeValue: 475,
    accel: "5,3 s"
  },
  {
    name: "P5 Long Range Plus Black Edition",
    price: "45.940 €",
    priceValue: 45940,
    battery: "69 kWh",
    batteryType: "NMC",
    power: "272 CV",
    range: "475 km WLTP",
    rangeValue: 475,
    accel: "5,3 s"
  },
  {
    name: "P8 AWD Plus",
    price: "47.573 €",
    priceValue: 47573,
    battery: "69 kWh",
    batteryType: "NMC",
    power: "428 CV",
    range: "450 km WLTP",
    rangeValue: 450,
    accel: "3,6 s"
  },
  {
    name: "P5 Long Range Ultra",
    price: "48.299 €",
    priceValue: 48299,
    battery: "69 kWh",
    batteryType: "NMC",
    power: "272 CV",
    range: "475 km WLTP",
    rangeValue: 475,
    accel: "5,3 s"
  },
  {
    name: "P5 Long Range Ultra Black Edition",
    price: "48.965 €",
    priceValue: 48965,
    battery: "69 kWh",
    batteryType: "NMC",
    power: "272 CV",
    range: "474 km WLTP",
    rangeValue: 474,
    accel: "5,3 s"
  },
  {
    name: "P8 AWD Ultra",
    price: "52.014 €",
    priceValue: 52014,
    battery: "69 kWh",
    batteryType: "NMC",
    power: "428 CV",
    range: "450 km WLTP",
    rangeValue: 450,
    accel: "3,6 s"
  },
  {
    name: "P8 AWD Ultra Black Edition",
    price: "51.627 €",
    priceValue: 51627,
    battery: "69 kWh",
    batteryType: "NMC",
    power: "428 CV",
    range: "449 km WLTP",
    rangeValue: 449,
    accel: "3,6 s"
  },
  {
    name: "P5 Long Range Cross Country Ultra",
    price: "51.439 €",
    priceValue: 51439,
    battery: "69 kWh",
    batteryType: "NMC",
    power: "272 CV",
    range: "Pendiente de confirmar",
    rangeValue: null,
    accel: "Pendiente de confirmar"
  },
  {
    name: "P8 AWD Cross Country Ultra",
    price: "53.043 €",
    priceValue: 53043,
    battery: "69 kWh",
    batteryType: "NMC",
    power: "428 CV",
    range: "Pendiente de confirmar",
    rangeValue: null,
    accel: "Pendiente de confirmar"
  }
],


 
colors: [
  { name: "Onyx Black", hex: "#2D2926" },
  { name: "Crystal White", hex: "#F1F1F1" },
  { name: "Denim Blue", hex: "#505B7A" },
  { name: "Vapour Grey", hex: "#7D8182" },
  { name: "Sand Dune", hex: "#EDE9DF" },
  { name: "Cloud Blue", hex: "#CBD6E2" }
],


  images: [
    "img/cars/volvo-ex30/volvo-ex30_01.webp",
    "img/cars/volvo-ex30/volvo-ex30_02.webp",
    "img/cars/volvo-ex30/volvo-ex30_03.webp",
    "img/cars/volvo-ex30/volvo-ex30_04.webp",
    "img/cars/volvo-ex30/volvo-ex30_05.webp",
    "img/cars/volvo-ex30/volvo-ex30_06.webp",
    "img/cars/volvo-ex30/volvo-ex30_07.webp",
    "img/cars/volvo-ex30/volvo-ex30_08.webp"
  ],

  videos: [
    {
      title: "Volvo EX30 - Pruebas y opiniones",
      url: "https://www.youtube.com/results?search_query=Volvo+EX30+prueba",
      thumb: "img/cars/volvo-ex30/volvo-ex30_01.webp"
    }
  ],

  brandInfo: {
    logo: "img/brands/volvo.png",
    group: "Geely Holding",
    relation: "Marca del grupo",
    note: "Volvo Cars pertenece al grupo Geely Holding."
  },

  brandUrl: "https://www.volvocars.com/es/",
  dataStatus: {
    status: "Revisado",
    checkedAt: "08/10/2026"
  }
},


    

    {
        id:9, brand:"Tesla", model:"Model Y", type:"SUV", launchYear:2021,
        warranty:{"vehicle":"4 años / 80.000 km","battery":"8 años / 160.000–192.000 km según versión","capacity":"70 %"},
        priceMin:40990, priceMax:62990, priceText:"40.990 - 62.990 €",
        rangeText:"525 - 609 km", minRangeVal:525, maxRangeVal:609,
        batteryText:"60 - 75 kWh", batteryType:"LFP / NCM", powerText:"299 - 514 CV",
        trunk:854, frunkText:"117 L", seats:"5-7", acceleration:"3,5 - 7,2 s", dimensions:"4,79 × 1,92 × 1,62 m",
        charging:"Supercarga DC hasta 250 kW",
        description:"El SUV eléctrico familiar por excelencia y uno de los más vendidos del mundo. Destaca por su avanzado software, el Modo Centinela y su tecnología de conducción autónoma, todavía pendiente de autorización completa en Europa. Su gran capacidad de carga y la opción de 7 plazas lo convierten en un referente para las familias.",
        highlights:["Hasta 609 km de autonomía en Premium Gran autonomía con tracción trasera","Amplio espacio de carga","Red Tesla Supercharger","Planificación de rutas y actualizaciones remotas","Opción de siete plazas en Premium AWD"],
        considerations:["La tercera fila es opcional y solo está disponible en determinadas versiones","Las autonomías dependen de las llantas y la configuración","Tesla modifica precios y disponibilidad con frecuencia","El precio final puede incluir gastos de destino y documentación"],
        idealFor:["Familias","Viajes largos","Uso diario","Tecnología","7 plazas opcionales"],
        priceInfo:{includesVat:true,includesAid:false,note:"Precios base de vehículo publicados en el configurador oficial español, con IVA, sin ayudas públicas ni ahorro estimado de combustible. No incluyen opciones ni gastos adicionales de destino y documentación (980 € mostrados en la configuración consultada)."},
        chargingInfo:{dcMax:"Hasta 250 kW",acMax:"11 kW",fastChargeText:"Supercarga rápida; tiempo variable según condiciones",connector:"CCS2",v2l:false},
        trims:[
            {name:"Model Y Estándar (RWD)",price:"40.990 €",priceValue:40990,battery:"60 kWh",batteryType:"LFP",power:"299 CV (220 kW)",range:"525 km WLTP",rangeValue:525,accel:"7,2 s",seats:5},
            {name:"Model Y Gran Autonomía (RWD)",price:"50.990 €",priceValue:50990,battery:"75 kWh",batteryType:"NCM",power:"347 CV",range:"609 km",rangeValue:609,accel:"5,6 s",seats:5},
            {name:"Model Y Gran Autonomía (AWD)",price:"52.990 €",priceValue:52990,battery:"75 kWh",batteryType:"NCM",power:"514 CV",range:"600 km WLTP",rangeValue:600,accel:"—",seats:"5; 7 opcionales"},
            {name:"Model Y Performance (AWD)",price:"62.990 €",priceValue:62990,battery:"75 kWh",batteryType:"NCM",power:"460 CV",range:"580 km WLTP",rangeValue:580,accel:"3,5 s",seats:5}
        ],
        colors:[{name:"Gris Sigilo",hex:"#555b60"},{name:"Blanco Perla Multicapas",hex:"#f3f3f0",border:"#cbd5e1"},{name:"Negro Diamante",hex:"#171717"},{name:"Azul Costero",hex:"#33546b"},{name:"Quicksilver",hex:"#a6aaac"},{name:"Ultra Red",hex:"#8c1821"}],
        images:["img/cars/tesla-model-y/modelY_01.webp","img/cars/tesla-model-y/modelY_02.webp","img/cars/tesla-model-y/modelY_03.webp","img/cars/tesla-model-y/modelY_04.webp","img/cars/tesla-model-y/modelY_05.webp","img/cars/tesla-model-y/modelY_06.webp","img/cars/tesla-model-y/modelY_07.webp","img/cars/tesla-model-y/modelY_08.webp"],
        videos:[{title:"Tesla Model Y",url:"https://www.youtube.com/results?search_query=Tesla+Model+Y+2026+prueba",thumb:"img/cars/tesla-model-y/modelY_01.webp"}],
        brandInfo:{logo:"https://commons.wikimedia.org/wiki/Special:Redirect/file/Teslalogo.png",group:"Tesla, Inc.",relation:"Fabricante",note:"Tesla diseña y comercializa sus vehículos directamente."},
        brandUrl:"https://www.tesla.com/es_es/modely",
        dataStatus:{status:"Revisado",checkedAt:"13/10/2026"}
    },

    {
        id:10, brand:"XPENG", model:"G6", type:"SUV", launchYear:2024,
        priceMin:44600, priceMax:53570, priceText:"44.600 - 53.570 €",
        rangeText:"435 - 570 km WLTP", minRangeVal:435, maxRangeVal:570,
        batteryText:"69 - 81 kWh", batteryType:"LFP", powerText:"252 - 487 CV",
        trunk:571, frunkText: "No disponible", seats:5, acceleration:"4,1 - 6,9 s", dimensions:"4,76 × 1,92 × 1,65 m",
        charging:"Carga DC hasta 451 kW (10-80% en 12 min)",
        description:"SUV coupé eléctrico familiar que destaca por su tecnología, su amplio habitáculo y una de las recargas más rápidas del mercado. Su arquitectura de 800 V permite cargar del 10 al 80 % en 12 minutos, con hasta 535 km de autonomía WLTP combinada. Ofrece asistencia avanzada XPILOT y versiones RWD y AWD.",
        highlights:["Arquitectura de 800 V","Carga del 10 al 80 % en 12 minutos","571 litros de maletero","Asistencia XPILOT","Hasta 535 km WLTP"],
        considerations:["Red comercial más limitada que la de marcas tradicionales","La autonomía WLTP combinada es inferior a las cifras urbanas publicitadas","Precio al contado de Long Range y Performance pendiente de confirmación en España"],
        idealFor:["Familias","Viajes","Tecnología","Carga rápida"],
        priceInfo:{includesVat:true,includesAid:false,note:"Precios oficiales de tarifa usados en la comparativa, con IVA y sin ofertas ni ayudas: Standard Range RWD ≈44.600 €, Long Range RWD ≈47.570 € y AWD Performance ≈53.570 €. Las ofertas/ayudas mostradas por la marca no se descuentan en la ficha."},
        warranty:{vehicle:"5 años / 120.000 km",battery:"8 años / 160.000 km",capacity:"No especificado en la ficha oficial",source:"https://www.xpeng-auto.es/g6"},
        chargingInfo:{dcMax:"382 - 451 kW",acMax:"11 kW",fastChargeText:"10-80 % en 12 minutos",connector:"CCS2",v2l:true},
        trims:[
            {name:"Standard Range RWD",price:"44.600 €",priceValue:44600,battery:"69 kWh",batteryType:"LFP",power:"252 CV",range:"Hasta 435 km WLTP",rangeValue:435,accel:"6,9 s",seats:5},
            {name:"Long Range RWD",price:"47.570 €",priceValue:47570,battery:"81 kWh",batteryType:"LFP",power:"297 CV",range:"Hasta 570 km WLTP",rangeValue:570,accel:"6,7 s",seats:5},
            {name:"AWD Performance",price:"53.570 €",priceValue:53570,battery:"81 kWh",batteryType:"LFP",power:"487 CV",range:"Hasta 550 km WLTP",rangeValue:550,accel:"4,1 s",seats:5}
        ],
        colors:[{name:"Arctic White",hex:"#f3f4f3",border:"#cbd5e1"},{name:"Stellar Purple",hex:"#81758f"},{name:"Graphite Gray",hex:"#555b60"},{name:"Silver Frost",hex:"#b8bdc0"},{name:"Midnight Black",hex:"#11161b"},{name:"Black Edition",hex:"#050505"}],
        images:["img/cars/xpeng-g6/xpeng-g6_01.webp","img/cars/xpeng-g6/xpeng-g6_02.webp","img/cars/xpeng-g6/xpeng-g6_03.webp","img/cars/xpeng-g6/xpeng-g6_04.webp","img/cars/xpeng-g6/xpeng-g6_05.webp","img/cars/xpeng-g6/xpeng-g6_06.webp","img/cars/xpeng-g6/xpeng-g6_07.webp","img/cars/xpeng-g6/xpeng-g6_08.webp"],
        videos:[{title:"XPENG G6",url:"https://www.youtube.com/results?search_query=XPENG+G6+2026+prueba",thumb:"img/cars/xpeng-g6/xpeng-g6_01.webp"}],
        brandInfo:{logo:"img/brands/XPeng.png",group:"XPeng Inc.",relation:"Fabricante",note:"XPENG es un fabricante independiente chino de vehículos eléctricos."},
        brandUrl:"https://www.xpeng-auto.es/g6", dataStatus:{ status:"Revisado", checkedAt:"14/10/2026" }
    },

    
{
  id: 11,
  brand: "Peugeot",
  model: "E-5008",
  type: "SUV",
  launchYear: 2024,
        warranty:{"vehicle":"3 años; hasta 8 años / 160.000 km con Peugeot Care","battery":"8 años / 160.000 km","capacity":"70 %"},

  priceMin: 48716,
  priceMax: 58496,
  priceText: "48.716 - 58.496 €",

  rangeText: "477 - 668 km WLTP",
  minRangeVal: 477,
  maxRangeVal: 668,

  batteryText: "73 - 97 kWh",
  batteryType: "NMC",
  powerText: "210 - 325 CV",

  trunk: 348,
  frunkText: "No disponible",
  seats: 7,
  acceleration: "Según motorización",
  dimensions: "4,79 × 1,90 × 1,69 m",
  charging: "Hasta 160 kW · 20-80% en unos 30 min",

  description:
    "SUV familiar eléctrico de siete plazas con tres " +
    "motorizaciones documentadas: Electric 210, " +
    "Dual Motor 325 y Long Range 230. " +
    "Destaca por su habitabilidad, el Peugeot Panoramic " +
    "i-Cockpit y un maletero de hasta 916 litros " +
    "con cinco plazas en uso.",

  highlights: [
    "Siete plazas de serie",
    "Hasta 668 km WLTP en Long Range",
    "Hasta 916 litros de maletero con cinco plazas",
    "Panoramic i-Cockpit",
    "Versiones de tracción delantera y total",
    "Baterías de 73 y 97 kWh"
  ],

  considerations: [
    "348 litros de maletero con las siete plazas",
    "El Long Range está pendiente de confirmar en el configurador español",
    "La autonomía depende de la motorización y del acabado",
    "Las dimensiones pueden dificultar el aparcamiento urbano",
    "Los precios publicados no incluyen posibles opciones"
  ],

  idealFor: [
    "Familias numerosas",
    "7 plazas",
    "Viajes largos",
    "Equipaje",
    "Uso diario"
  ],

  priceInfo: {
    includesVat: true,
    includesAid: false,
    note:
      "PVP de tarifa de referencia publicados para España, " +
      "con IVA y sin ayudas públicas, financiación ni " +
      "descuentos promocionales. El intervalo corresponde " +
      "a las versiones con precio disponible. " +
      "Long Range pendiente de confirmar."
  },

  chargingInfo: {
    dcMax: "Hasta 160 kW",
    acMax: "11 kW",
    fastChargeText: "20-80% en unos 30 min",
    connector: "CCS2",
    v2l: false
  },

  trims: [
    {
      name: "Allure Electric 210",
      price: "48.716 €",
      priceValue: 48716,
      battery: "73 kWh",
      batteryType: "NMC",
      power: "157 kW (210 CV)",
      range: "Hasta 504 km WLTP",
      rangeValue: 504,
      accel: "Pendiente de confirmar"
    },
    {
      name: "GT Electric 210",
      price: "53.316 €",
      priceValue: 53316,
      battery: "73 kWh",
      batteryType: "NMC",
      power: "157 kW (210 CV)",
      range: "Hasta 504 km WLTP",
      rangeValue: 504,
      accel: "Pendiente de confirmar"
    },
    {
      name: "GT Dual Motor 325",
      price: "55.316 €",
      priceValue: 55316,
      battery: "73 kWh",
      batteryType: "NMC",
      power: "239 kW (325 CV)",
      range: "Hasta 477 km WLTP",
      rangeValue: 477,
      accel: "Pendiente de confirmar"
    },
    {
      name: "GT Exclusive Electric 210",
      price: "56.496 €",
      priceValue: 56496,
      battery: "73 kWh",
      batteryType: "NMC",
      power: "157 kW (210 CV)",
      range: "Hasta 504 km WLTP",
      rangeValue: 504,
      accel: "Pendiente de confirmar"
    },
    {
      name: "GT Exclusive Dual Motor 325",
      price: "58.496 €",
      priceValue: 58496,
      battery: "73 kWh",
      batteryType: "NMC",
      power: "239 kW (325 CV)",
      range: "Hasta 477 km WLTP",
      rangeValue: 477,
      accel: "Pendiente de confirmar"
    },
    {
      name: "Electric 230 Long Range",
      status: "Disponibilidad por confirmar",
      price: "Precio por confirmar",
      priceValue: null,
      battery: "97 kWh",
      batteryType: "NMC",
      power: "170 kW (230 CV)",
      range: "Hasta 668 km WLTP",
      rangeValue: 668,
      accel: "Pendiente de confirmar"
    }
  ],

  colors: [
    {
      name: "Azul Obsession",
      hex: "#486C7B"
    },
    {
      name: "Azul Ingaro",
      hex: "#31465A"
    },
    {
      name: "Negro Perla Nera",
      hex: "#111316"
    },
    {
      name: "Gris Titanium",
      hex: "#6D7275"
    },
    {
      name: "Blanco Okenite",
      hex: "#F1F1ED",
      border: "#CBD5E1"
    }
  ],

  images: [
  "img/cars/peugeot-e5008/peugeot-e5008_01.webp",
  "img/cars/peugeot-e5008/peugeot-e5008_02.webp",
  "img/cars/peugeot-e5008/peugeot-e5008_03.webp",
  "img/cars/peugeot-e5008/peugeot-e5008_04.webp",
  "img/cars/peugeot-e5008/peugeot-e5008_05.webp",
  "img/cars/peugeot-e5008/peugeot-e5008_06.webp",
  "img/cars/peugeot-e5008/peugeot-e5008_07.webp",
  "img/cars/peugeot-e5008/peugeot-e5008_08.webp"
],

  videos: [
    {
      title: "Peugeot E-5008: pruebas y análisis",
      url: "https://www.youtube.com/results?search_query=Peugeot+E-5008+prueba",
      thumb: "img/cars/peugeot-e5008/peugeot-e5008_01.webp"
    }
  ],

  brandInfo: {
    logo: "img/brands/peugeot.png",
    group: "Stellantis",
    relation: "Marca del grupo",
    note: "Peugeot forma parte de Stellantis."
  },

  brandUrl: "https://www.peugeot.es",

  dataStatus: {
    status: "Revisión parcial",
    checkedAt: "08/10/2026"
  }
},
{
    id: 12,
    brand: "Citroën",
    model: "ë-C3 OUTDOOR",
    type: "Utilitario / Compacto",
    launchYear: 2026,
        warranty:{"vehicle":"2 años; hasta 8 años / 160.000 km con We Care","battery":"8 años / 160.000 km","capacity":"70 %"},

    priceMin: 23950,
    priceMax: 23950,
    priceText: "23.950 €",

    rangeText: "hasta 323 km",
    minRangeVal: 323,
    maxRangeVal: 323,

    batteryText: "44 kWh",
    batteryType: "LFP",
    powerText: "113 CV",

    trunk: 310,
    frunkText: "No disponible",
    seats: 5,
    acceleration: "≈11 s",
    dimensions: "4,02 × 1,76 × 1,58 m",
    charging: "Hasta 100 kW · 20-80% en unos 26 min",

    description: "Edición especial del Citroën ë-C3 con una estética más aventurera y equipamiento diferenciado. Incorpora paragolpes y elementos exteriores específicos, llantas MAGNETITE de 17 pulgadas, detalles en Rojo Infra y un ambiente interior exclusivo. Mantiene la mecánica eléctrica Comfort Range de 44 kWh y 113 CV.",

    highlights: [
        "Diseño OUTDOOR exclusivo",
        "Batería de 44 kWh y hasta 323 km WLTP",
        "Llantas MAGNETITE de 17 pulgadas",
        "Asientos Citroën Advanced Comfort",
        "Detalles exteriores en Rojo Infra",
        "Navegación 3D"
    ],

    considerations: [
        "Comparte mecánica con el ë-C3 Comfort Range",
        "Las principales diferencias están en el diseño y el equipamiento",
        "Precio oficial de tarifa pendiente de confirmar"
    ],

    idealFor: [
        "Ciudad",
        "Uso diario",
        "Diseño diferencial",
        "Escapadas"
    ],

priceInfo: {
    includesVat: true,
    includesAid: false,
    note: "Precio al contado mostrado en el configurador oficial de Citroën, con IVA. Puede incluir descuentos comerciales. Sin ayudas públicas identificadas en la configuración."
},

    chargingInfo: {
        dcMax: "100 kW",
        acMax: "11 kW",
        fastChargeText: "20-80% en unos 26 min",
        connector: "CCS2",
        v2l: false
    },

    trims: [
        {
            name: "OUTDOOR Comfort Range",
            price: "23.950 €",
            priceValue: 23950,
            battery: "44 kWh",
            batteryType: "LFP",
            power: "83 kW (113 CV)",
            range: "hasta 323 km WLTP",
            rangeValue: 323,
            accel: "≈11 s"
        }
    ],

colors: [
    { name: "Negro Perla Nera", hex: "#151719" },
    { name: "Azul Brillante", hex: "#145b9a" },
    { name: "Mercury Grey", hex: "#777b7e" },
    { name: "Roman Green", hex: "#53634e" },
    { name: "Blanco Polar", hex: "#f4f4f1", border: "#cbd5e1" }
],

    images: [
        "img/cars/citroen-ec3-outdoor/c3-outdoor_01.webp",
        "img/cars/citroen-ec3-outdoor/c3-outdoor_02.webp",
        "img/cars/citroen-ec3-outdoor/c3-outdoor_03.webp",
        "img/cars/citroen-ec3-outdoor/c3-outdoor_04.webp",
        "img/cars/citroen-ec3-outdoor/c3-outdoor_05.webp",
        "img/cars/citroen-ec3-outdoor/c3-outdoor_06.webp",
        "img/cars/citroen-ec3-outdoor/c3-outdoor_07.webp",
        "img/cars/citroen-ec3-outdoor/c3-outdoor_08.webp"
    ],

    videos: [
        {
            title: "Citroën ë-C3 OUTDOOR",
            url: "https://www.youtube.com/results?search_query=Citroen+e-C3+Outdoor",
            thumb: "img/cars/citroen-ec3-outdoor/c3-outdoor_01.webp"
        }
    ],

    brandInfo: {
        logo: "img/brands/citroen.png",
        group: "Stellantis",
        relation: "Marca del grupo",
        note: "Citroën es una marca francesa que forma parte del grupo Stellantis."
    },

    brandUrl: "https://www.citroen.es",

dataStatus: {
    status: "Revisado",
    checkedAt: "07/10/2026"
}

}

];
