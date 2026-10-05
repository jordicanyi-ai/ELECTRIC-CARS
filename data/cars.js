const carsData = [
    {
        id: 1,

        brand: "Leapmotor",
        model: "B03X",
        type: "SUV",
        launchYear: 2026,

        // RESUMEN DE GAMA
        priceMin: 22900,
        priceMax: 27900,
        priceText: "22.900 - 27.900 €",

        rangeText: "292 - 382 km",
        minRangeVal: 292,
        maxRangeVal: 382,

        batteryText: "39,8 - 53 kWh",
        powerText: "177 - 197 CV",

        trunk: 510,
        seats: 5,

        acceleration: "8,6 s",
        dimensions: "4,32 × 1,81 × 1,62 m",

        charging: "30-80% en 16-17 min",

        description:
            "El Leapmotor B03X es un SUV eléctrico compacto que destaca por combinar un precio contenido, buena habitabilidad y dos opciones de batería. La gama permite elegir entre una versión enfocada al uso diario y otra con mayor autonomía para un uso más polivalente.",

        // VALORACIÓN EDITORIAL
        highlights: [
            "Relación precio/equipamiento",
            "510 litros de maletero",
            "Dos tamaños de batería",
            "Formato SUV compacto"
        ],

        considerations: [
            "La versión de batería pequeña está más orientada a uso urbano y diario",
            "Marca todavía joven en el mercado europeo",
            "La versión de mayor autonomía supone un salto de precio importante"
        ],

        idealFor: [
            "Uso diario",
            "Familias",
            "Ciudad",
            "Trayectos interurbanos"
        ],

        // PRECIO
        priceInfo: {
            includesVat: true,
            includesAid: false,
            note: "Precios mostrados con IVA y sin ayudas públicas."
        },

        // CARGA
        chargingInfo: {
            dcMax: null,
            acMax: null,
            fastChargeText: "30-80% en 16-17 min",
            connector: "CCS2",
            v2l: null
        },

        // VERSIONES
        trims: [
            {
                name: "Pro",
                price: "22.900 €",
                priceValue: 22900,
                battery: "39,8 kWh",
                power: "130 kW (177 CV)",
                range: "292 km WLTP",
                rangeValue: 292,
                accel: "8,6 s"
            },
            {
                name: "ProMax",
                price: "27.900 €",
                priceValue: 27900,
                battery: "53 kWh",
                power: "145 kW (197 CV)",
                range: "382 km WLTP",
                rangeValue: 382,
                accel: "8,6 s"
            }
        ],

        colors: [
            { name: "Marrón Bellota", hex: "#8c7355" },
            { name: "Azul Arándano", hex: "#3b4d66" },
            { name: "Plata Estelar", hex: "#cbd5e1", border: "#94a3b8" },
            { name: "Verde Alga", hex: "#233d2c" },
            { name: "Gris Tundra", hex: "#71797e" },
            { name: "Beige Escarcha", hex: "#e5e3d4", border: "#cbd5e1" }
        ],

        images: [
            "img/b03x-0.jpg",
            "img/b03x-1.jpg",
            "img/b03x-3.jpg",
            "img/b03x-4.jpg",
            "img/b03x-5.jpg",
            "img/b03x-6.jpg",
            "img/b03x-7.jpg",
            "img/b03x-8.jpg"
        ],

        // VÍDEOS
        videos: [
            {
                title: "Leapmotor B03X: Prueba completa y detalles",
                url: "https://www.youtube.com/results?search_query=Leapmotor+B03X+review",
                thumb: "img/b03x-7.jpg"
            },
            {
                title: "Análisis autonomía y sistema multimedia",
                url: "https://www.youtube.com/results?search_query=Leapmotor+B03X+autonomia",
                thumb: "img/b03x-8.jpg"
            }
        ],

        brandUrl: "https://www.leapmotor.com",

        // CONTROL DE DATOS
        dataStatus: {
            status: "En revisión",
            checkedAt: "05/10/2026"
        }
    }
];
