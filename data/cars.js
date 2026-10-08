const carsData = [
    {
        id: 1,
        brand: "Leapmotor",
        model: "B03X",
        type: "SUV",
        launchYear: 2026,
        priceMin: 22900, priceMax: 27900, priceText: "22.900 - 27.900 €",
        rangeText: "292 - 382 km", minRangeVal: 292, maxRangeVal: 382,
        batteryText: "39,8 - 53 kWh", batteryType: "LFP",
        powerText: "177 - 197 CV", trunk: 510, frunkText: "No disponible", seats: 5, acceleration: "8,6 s",
        dimensions: "4,32 × 1,81 × 1,62 m", charging: "30-80% en 16-17 min",
        description: "SUV eléctrico compacto con dos opciones de batería, buen espacio interior y un posicionamiento de precio contenido.",
        highlights: ["Relación precio/equipamiento","510 litros de maletero","Dos tamaños de batería","Formato SUV compacto"],
        considerations: ["La batería pequeña está más orientada al uso diario","Marca todavía joven en Europa","La versión de mayor autonomía supone un salto de precio"],
        idealFor: ["Uso diario","Familias","Ciudad","Trayectos interurbanos"],
        priceInfo: { includesVat: true, includesAid: false, note: "Precios mostrados con IVA y sin ayudas públicas." },
        chargingInfo: { dcMax: null, acMax: null, fastChargeText: "30-80% en 16-17 min", connector: "CCS2", v2l: null },
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
        charging:"20-80% en 26-36 min",

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
        charging:"15-80% aprox. 30 min según versión",

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
    charging: "10-80% en unos 30 min",

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
        dcMax: "hasta ~120 kW",
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
        priceMin:20140, priceMax:26990, priceText:"20.140 - 26.990 €",
        rangeText:"220 - 322 km", minRangeVal:220, maxRangeVal:322,
        batteryText:"30 - 43,2 kWh", batteryType:"LFP Blade", powerText:"88 - 156 CV",
        trunk:308, frunkText: "No disponible", seats:5, acceleration:"9,1 - 12,1 s", dimensions:"3,99 × 1,72 × 1,59 m",
        charging:"DC hasta 85 kW",
        description:"Urbano eléctrico de BYD con batería Blade LFP, formato compacto y una gama que va desde una versión básica de 30 kWh hasta una Comfort bastante más potente.",
        highlights:["Precio competitivo","Batería Blade LFP","308 litros de maletero","Disponible con 5 plazas"],
        considerations:["Autonomía de acceso limitada","La versión Active MY26 sigue figurando con 4 plazas","Comfort sube bastante de precio"],
        idealFor:["Ciudad","Uso diario","Primer eléctrico","Familias pequeñas"],
        priceInfo:{includesVat:true,includesAid:false,note:"PVP recomendado Península y Baleares, sin campañas ni ayudas públicas."},
        chargingInfo:{dcMax:"85 kW",acMax:"11 kW",fastChargeText:"Carga rápida CC",connector:"CCS2",v2l:true},
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
    charging: "10-80% en 29-31 min",

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
        dcMax: "hasta 128 kW aprox.",
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

  priceMin: 35413,
priceMax: 51627,
priceText: "35.413 - 51.627 €",

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
  charging: "10-80% en 26-27 min",

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
    price: "PVP pendiente de confirmar",
    priceValue: null,
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
        colors:[{name:"Verde",hex:"#7d9a78"},{name:"Gris",hex:"#737a80"},{name:"Azul",hex:"#395a70"},{name:"Blanco",hex:"#f3f4f4",border:"#cbd5e1"}],
        images:["img/cars/skoda-elroq/01.webp","img/cars/skoda-elroq/02.webp","img/cars/skoda-elroq/03.webp"],
        videos:[{title:"Škoda Elroq",url:"https://www.youtube.com/results?search_query=Skoda+Elroq+prueba",thumb:"img/cars/skoda-elroq/01.webp"}],
        brandInfo:{logo:"",group:"Volkswagen Group",relation:"Marca del grupo",note:"Škoda Auto forma parte del Grupo Volkswagen."},
        brandUrl:"https://www.skoda.es", dataStatus:{ status:"Revisado", checkedAt:"07/10/2026" }
    },

    {
        id:8, brand:"Volvo", model:"EX30", type:"SUV", launchYear:2023,
        priceMin:35800, priceMax:52000, priceText:"35.800 - ≈52.000 €",
        rangeText:"337 - 475 km", minRangeVal:337, maxRangeVal:475,
        batteryText:"51 - 69 kWh", batteryType:"NMC / según versión", powerText:"272 - 428 CV",
        trunk:318, frunkText: "7 L", seats:5, acceleration:"3,6 - 5,7 s", dimensions:"4,23 × 1,84 × 1,55 m",
        charging:"10-80% desde 26 min",
        description:"El SUV más compacto de Volvo combina dimensiones contenidas, mucha potencia y hasta 475 km WLTP en la versión Long Range.",
        highlights:["Hasta 475 km WLTP","272 CV incluso en acceso","Tamaño compacto","Carga rápida"],
        considerations:["Maletero contenido para un SUV","Mandos muy centralizados en pantalla","Versiones AWD son muy potentes pero más caras"],
        idealFor:["Ciudad","Parejas","Uso diario","Viajes"],
        priceInfo:{includesVat:true,includesAid:false,note:"Precio oficial de acceso sin computar ayudas públicas; máximo orientativo pendiente de revisar."},
        chargingInfo:{dcMax:"150-175 kW según versión",acMax:"11 kW",fastChargeText:"10-80% desde 26 min",connector:"CCS2",v2l:false},
        
trims: [
  { name: "P5 Essential", price: 35413, battery: "51 kWh", power: "272 CV", range: 335 },
  { name: "P5 Core", price: 36562, battery: "51 kWh", power: "272 CV", range: 337 },
  { name: "P5 Plus", price: 39466, battery: "51 kWh", power: "272 CV", range: 337 },
  { name: "P5 Plus Black Edition", price: 40918, battery: "51 kWh", power: "272 CV", range: 337 },

  { name: "P5 Long Range Core", price: 41402, battery: "69 kWh", power: "272 CV", range: 474 },
  { name: "P5 Long Range Plus", price: 44306, battery: "69 kWh", power: "272 CV", range: 475 },
  { name: "P5 Long Range Plus Black Edition", price: 45940, battery: "69 kWh", power: "272 CV", range: 475 },
  { name: "P5 Long Range Ultra", price: 48299, battery: "69 kWh", power: "272 CV", range: 475 },
  { name: "P5 Long Range Ultra Black Edition", price: 48965, battery: "69 kWh", power: "272 CV", range: 474 },

  { name: "P8 AWD Plus", price: 47573, battery: "69 kWh", power: "428 CV", range: 450 },
  { name: "P8 AWD Ultra", price: null, battery: "69 kWh", power: "428 CV", range: 450 },
  { name: "P8 AWD Ultra Black Edition", price: 51627, battery: "69 kWh", power: "428 CV", range: 449 }
],

        colors:[{name:"Cloud Blue",hex:"#a9c2cf"},{name:"Vapour Grey",hex:"#a8aaa7"},{name:"Onyx Black",hex:"#16191c"},{name:"Crystal White",hex:"#f2f2ef",border:"#cbd5e1"}],
       
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

        videos:[{title:"Volvo EX30",url:"https://www.youtube.com/results?search_query=Volvo+EX30+prueba",thumb:"img/cars/volvo-ex30/01.webp"}],
        brandInfo:{logo:"",group:"Geely Holding",relation:"Propiedad mayoritaria",note:"Volvo Cars está controlada por Zhejiang Geely Holding."},
        brandUrl:"https://www.volvocars.com/es", dataStatus:{ status:"Revisado", checkedAt:"07/10/2026" }
    },

    {
        id:9, brand:"Tesla", model:"Model Y", type:"SUV", launchYear:2021,
        priceMin:40990, priceMax:62000, priceText:"40.990 - ≈62.000 €",
        rangeText:"525 - ≈622 km", minRangeVal:525, maxRangeVal:622,
        batteryText:"Capacidad no publicada oficialmente", batteryType:"según versión", powerText:"según versión",
        trunk:854, frunkText: "114 - 116 L según versión", seats:5, acceleration:"desde 3,5 s según versión", dimensions:"4,79 × 1,92 × 1,62 m",
        charging:"Supercarga DC hasta ~250 kW según versión",
        description:"SUV eléctrico familiar de referencia por eficiencia, red de carga y software. La gama cambia con frecuencia, por lo que conviene revisar versiones y precios periódicamente.",
        highlights:["525 km WLTP desde la versión base","Gran capacidad de carga","Red Supercharger","Software y planificación de ruta"],
        considerations:["Sin cuadro de instrumentos tradicional","Gama y precios cambian con frecuencia","Capacidad de batería no se comunica de forma convencional"],
        idealFor:["Familias","Viajes largos","Uso diario","Alta kilometrada"],
        priceInfo:{includesVat:true,includesAid:false,note:"Precio de configurador al contado, sin ayudas públicas."},
        chargingInfo:{dcMax:"hasta ~250 kW",acMax:"11 kW",fastChargeText:"Supercarga rápida",connector:"CCS2",v2l:false},
        trims:[
            {name:"Model Y",price:"40.990 €",priceValue:40990,battery:"No publicada",batteryType:"según versión",power:"No publicada",range:"525 km WLTP",rangeValue:525,accel:"7,2 s"},
            {name:"Long Range / versiones superiores",price:"consultar",priceValue:50000,battery:"No publicada",batteryType:"según versión",power:"No publicada",range:"hasta ≈622 km WLTP",rangeValue:622,accel:"según versión"}
        ],
        colors:[{name:"Stealth Grey",hex:"#555b60"},{name:"Pearl White",hex:"#f3f3f0",border:"#cbd5e1"},{name:"Quicksilver",hex:"#a6aaac"},{name:"Ultra Red",hex:"#8c1821"}],
        images:["img/cars/tesla-model-y/01.webp","img/cars/tesla-model-y/02.webp","img/cars/tesla-model-y/03.webp"],
        videos:[{title:"Tesla Model Y",url:"https://www.youtube.com/results?search_query=Tesla+Model+Y+2026+prueba",thumb:"img/cars/tesla-model-y/01.webp"}],
        brandInfo:{logo:"",group:"Tesla, Inc.",relation:"Fabricante",note:"Tesla diseña y comercializa sus vehículos directamente."},
        brandUrl:"https://www.tesla.com/es_es/modely", dataStatus:{ status:"Revisado", checkedAt:"07/10/2026" }
    },

    {
        id:10, brand:"XPENG", model:"G6", type:"SUV", launchYear:2024,
        priceMin:45193, priceMax:60000, priceText:"45.193 - ≈60.000 €",
        rangeText:"≈470 - ≈535 km", minRangeVal:470, maxRangeVal:535,
        batteryText:"68,5 - 80,8 kWh", batteryType:"LFP / NMC según versión", powerText:"según versión",
        trunk:571, frunkText: "54 L Opción no oficial", seats:5, acceleration:"según versión", dimensions:"4,76 × 1,92 × 1,65 m",
        charging:"Carga ultrarrápida 800 V",
        description:"SUV eléctrico tecnológico con arquitectura de alta tensión y carga muy rápida. Destaca especialmente por relación entre espacio, autonomía y velocidad de recarga.",
        highlights:["Arquitectura 800 V","571 litros de maletero","Carga ultrarrápida","Buen espacio interior"],
        considerations:["Marca aún poco implantada frente a fabricantes tradicionales","Precios superiores a compactos generalistas","Autonomías urbanas anunciadas no deben confundirse con WLTP combinado"],
        idealFor:["Familias","Viajes","Tecnología","Carga rápida"],
        priceInfo:{includesVat:true,includesAid:false,note:"Precio del configurador con impuestos/promoción de marca y transporte; sin Auto+ ni CAE."},
        chargingInfo:{dcMax:"muy alta; según versión",acMax:"11 kW",fastChargeText:"Carga ultrarrápida 800 V",connector:"CCS2",v2l:true},
        trims:[
            {name:"RWD 68,5 kWh",price:"45.193 €",priceValue:45193,battery:"68,5 kWh",batteryType:"LFP",power:"pendiente revisión",range:"≈470 km WLTP combinado",rangeValue:470,accel:"pendiente revisión"},
            {name:"RWD Long Range 80,8 kWh",price:"49.193 €",priceValue:49193,battery:"80,8 kWh",batteryType:"NMC",power:"pendiente revisión",range:"≈535 km WLTP combinado",rangeValue:535,accel:"pendiente revisión"}
        ],
        colors:[{name:"Graphite Grey",hex:"#5b6268"},{name:"Silver Frost",hex:"#b8bdc0"},{name:"Midnight Black",hex:"#11161b"},{name:"Arctic White",hex:"#f3f4f3",border:"#cbd5e1"}],
        images:["img/cars/xpeng-g6/01.webp","img/cars/xpeng-g6/02.webp","img/cars/xpeng-g6/03.webp"],
        videos:[{title:"XPENG G6",url:"https://www.youtube.com/results?search_query=XPENG+G6+2026+prueba",thumb:"img/cars/xpeng-g6/01.webp"}],
        brandInfo:{logo:"",group:"XPeng Inc.",relation:"Fabricante",note:"XPENG es un fabricante independiente chino de vehículos eléctricos."},
        brandUrl:"https://www.xpeng-auto.es/g6", dataStatus:{ status:"Revisado", checkedAt:"07/10/2026" }
    },

    {
        id:11, brand:"Peugeot", model:"E-5008", type:"SUV", launchYear:2024,
        priceMin:49100, priceMax:60000, priceText:"≈49.100 - 60.000 €",
        rangeText:"477 - 504 km", minRangeVal:477, maxRangeVal:504,
        batteryText:"73 kWh", batteryType:"NMC", powerText:"213 - 325 CV",
        trunk:348, frunkText: "No disponible", seats:7, acceleration:"según versión", dimensions:"4,79 × 1,90 × 1,69 m",
        charging:"20-80% en unos 30 min",
        description:"Gran SUV eléctrico disponible con siete plazas, pensado para familias que necesitan más espacio sin renunciar a una autonomía WLTP de alrededor de 500 km.",
        highlights:["7 plazas","Hasta 504 km WLTP","916 l en configuración de 5 plazas","Preacondicionamiento de batería"],
        considerations:["348 l con las 7 plazas en uso","Precio claramente superior a SUV compactos","Gran tamaño exterior"],
        idealFor:["Familias numerosas","7 plazas","Viajes","Equipaje"],
        priceInfo:{includesVat:true,includesAid:false,note:"Precio de acceso de referencia sin ayudas públicas; gama pendiente de revisión completa."},
        chargingInfo:{dcMax:"hasta ~160 kW",acMax:"11 kW",fastChargeText:"20-80% en unos 30 min",connector:"CCS2",v2l:false},
        trims:[
            {name:"Eléctrico 210/213 CV",price:"≈49.100 €",priceValue:49100,battery:"73 kWh",batteryType:"NMC",power:"157 kW (213 CV)",range:"hasta 504 km WLTP",rangeValue:504,accel:"pendiente revisión"},
            {name:"Dual Motor",price:"≈60.000 €",priceValue:60000,battery:"73 kWh",batteryType:"NMC",power:"239 kW (325 CV)",range:"hasta 477 km WLTP",rangeValue:477,accel:"pendiente revisión"}
        ],
        colors:[{name:"Azul Obsession",hex:"#486c7b"},{name:"Azul Ingaro",hex:"#31465a"},{name:"Negro Perla Nera",hex:"#111316"},{name:"Gris Titanium",hex:"#6d7275"},{name:"Blanco Okenite",hex:"#f1f1ed",border:"#cbd5e1"}],
        images:["img/cars/peugeot-e5008/01.webp","img/cars/peugeot-e5008/02.webp","img/cars/peugeot-e5008/03.webp"],
        videos:[{title:"Peugeot E-5008",url:"https://www.youtube.com/results?search_query=Peugeot+E-5008+prueba",thumb:"img/cars/peugeot-e5008/01.webp"}],
        brandInfo:{logo:"",group:"Stellantis",relation:"Marca del grupo",note:"Peugeot forma parte de Stellantis."},
        brandUrl:"https://www.peugeot.es", dataStatus:{ status:"Revisado", checkedAt:"07/10/2026" }
    },

{
    id: 12,
    brand: "Citroën",
    model: "ë-C3 OUTDOOR",
    type: "Utilitario / Compacto",
    launchYear: 2026,

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
    charging: "20-80% en unos 26 min",

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
