const carsData = [
            { 
                id: 1, 
                brand: "Leapmotor", 
                model: "B03X", 
                type: "SUV", 
                priceMin: 22900, 
                priceMax: 27900, 
                rangeText: "292 - 382 km",
                minRangeVal: 292, 
                maxRangeVal: 382,
                batteryText: "39,8 kWh | 53 kWh",
                powerText: "130 kW (177 CV) | 145 kW (197 CV)",
                trunk: 510,
                seats: 5,
                launchYear: 2026,
                acceleration: "8,6 s (0-100 km/h)",
                dimensions: "4,32 m (L) / 1,81 m (An) / 1,62 m (Al)",
                description: "El Leapmotor B03X destaca por su excelente relación calidad-precio dentro del segmento SUV compacto eléctrico, ofreciendo gran habitabilidad y opciones de batería eficientes.",
                charging: "Carga rápida CC (30-80%): 16 - 17 min.",
                brandUrl: "https://www.leapmotor.com",
                colors: [
                    { name: "Marrón Bellota", hex: "#8c7355" },
                    { name: "Azul Arándano", hex: "#3b4d66" },
                    { name: "Plata Estelar", hex: "#cbd5e1", border: "#94a3b8" },
                    { name: "Verde alga", hex: "#233d2c" },
                    { name: "Gris Tundra", hex: "#71797e" },
                    { name: "Beige Escarcha", hex: "#e5e3d4", border: "#cbd5e1" }
                ],
                trims: [
                    { name: "Pro", price: "22.900 €", battery: "39,8 kWh", power: "130 kW (177 CV)", range: "292 km WLTP", accel: "8,6 s" },
                    { name: "ProMax", price: "27.900 €", battery: "53 kWh", power: "145 kW (197 CV)", range: "382 km WLTP", accel: "8,6 s" }
                ],
                videos: [
                    { title: "Leapmotor B03X: Prueba completa y detalles", url: "https://www.youtube.com/results?search_query=Leapmotor+B03X+review", thumb: "img/b03x-7.jpg" },
                    { title: "Análisis autonomía y sistema multimedia", url: "https://www.youtube.com/results?search_query=Leapmotor+B03X+autonomia", thumb: "img/b03x-8.jpg" }
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
                ]
            },
            { 
                id: 2, 
                brand: "Leapmotor", 
                model: "B05", 
                type: "Utilitario", 
                priceMin: 20900, 
                priceMax: 25900, 
                rangeText: "310 - 410 km",
                minRangeVal: 310, 
                maxRangeVal: 410,
                batteryText: "42 kWh | 55 kWh",
                powerText: "115 kW (156 CV)",
                trunk: 380,
                seats: 5,
                launchYear: 2026,
                acceleration: "9,0 s (0-100 km/h)",
                dimensions: "4,20 m (L) / 1,78 m (An) / 1,55 m (Al)",
                description: "El Leapmotor B05 es un hatchback compacto totalmente eléctrico diseñado para la movilidad urbana y eficiente, destacando por su gran conectividad y costes contenidos.",
                charging: "Carga rápida CC (30-80%): 20 min.",
                brandUrl: "https://www.leapmotor.com",
                colors: [
                    { name: "Blanco Glaciar", hex: "#f8fafc", border: "#cbd5e1" },
                    { name: "Gris Grafito", hex: "#334155" },
                    { name: "Azul Eléctrico", hex: "#0284c7" }
                ],
                trims: [
                    { name: "Pure", price: "20.900 €", battery: "42 kWh", power: "115 kW (156 CV)", range: "310 km WLTP", accel: "9,0 s" },
                    { name: "Comfort", price: "25.900 €", battery: "55 kWh", power: "115 kW (156 CV)", range: "410 km WLTP", accel: "9,0 s" }
                ],
                videos: [
                    { title: "Leapmotor B05: Presentación y características", url: "https://www.youtube.com/results?search_query=Leapmotor+B05+electric", thumb: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=400&q=80" }
                ],
                images: [
                    "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80",
                    "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80"
                ]
            },
            { 
                id: 3, 
                brand: "Leapmotor", 
                model: "B10", 
                type: "SUV", 
                priceMin: 27900, 
                priceMax: 33900, 
                rangeText: "370 - 480 km",
                minRangeVal: 370, 
                maxRangeVal: 480,
                batteryText: "56 kWh | 69 kWh",
                powerText: "160 kW (218 CV)",
                trunk: 530,
                seats: 5,
                launchYear: 2026,
                acceleration: "7,5 s (0-100 km/h)",
                dimensions: "4,51 m (L) / 1,88 m (An) / 1,65 m (Al)",
                description: "El Leapmotor B10 es un SUV global de tamaño medio enfocado a familias jóvenes, construido sobre la avanzada plataforma tecnológica LEAP 3.5 con asistentes de conducción de última generación.",
                charging: "Carga rápida CC (30-80%): 18 min.",
                brandUrl: "https://www.leapmotor.com",
                colors: [
                    { name: "Gris Cósmico", hex: "#64748b" },
                    { name: "Verde Salvia", hex: "#658a77" },
                    { name: "Blanco Perla", hex: "#f8fafc", border: "#cbd5e1" }
                ],
                trims: [
                    { name: "Design", price: "27.900 €", battery: "56 kWh", power: "160 kW (218 CV)", range: "370 km WLTP", accel: "7,5 s" },
                    { name: "Top", price: "33.900 €", battery: "69 kWh", power: "160 kW (218 CV)", range: "480 km WLTP", accel: "7,5 s" }
                ],
                videos: [
                    { title: "Leapmotor B10: El nuevo SUV eléctrico global", url: "https://www.youtube.com/results?search_query=Leapmotor+B10+review", thumb: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=400&q=80" }
                ],
                images: [
                    "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80",
                    "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=800&q=80"
                ]
            },
            { 
                id: 4, 
                brand: "Citroën", 
                model: "ë-C3", 
                type: "Utilitario", 
                priceMin: 22500, 
                priceMax: 24500, 
                rangeText: "320 km",
                minRangeVal: 320, 
                maxRangeVal: 320,
                batteryText: "44 kWh LFP",
                powerText: "83 kW (113 CV)",
                trunk: 310,
                seats: 5,
                launchYear: 2024,
                acceleration: "11,0 s (0-100 km/h)",
                dimensions: "4,01 m (L) / 1,76 m (An) / 1,57 m (Al)",
                description: "El Citroën ë-C3 democratiza la movilidad eléctrica en Europa ofreciendo suspensión Citroën Advanced Comfort, posición de conducción elevada y un precio asequible fabricado en Europa.",
                charging: "Carga rápida CC 100 kW (20-80%): 26 min.",
                brandUrl: "https://www.citroen.es",
                colors: [
                    { name: "Blanco Banquise", hex: "#ffffff", border: "#cbd5e1" },
                    { name: "Azul Montecarlo", hex: "#1e3a8a" },
                    { name: "Gris Elbene", hex: "#94a3b8" },
                    { name: "Rojo Elixir", hex: "#991b1b" }
                ],
                trims: [
                    { name: "You", price: "22.500 €", battery: "44 kWh", power: "113 CV", range: "320 km", accel: "11,0 s" },
                    { name: "Max", price: "24.500 €", battery: "44 kWh", power: "113 CV", range: "320 km", accel: "11,0 s" }
                ],
                videos: [
                    { title: "Citroën ë-C3: Prueba del eléctrico barato", url: "https://www.youtube.com/results?search_query=Citroen+eC3+prueba+espanol", thumb: "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=400&q=80" }
                ],
                images: [
                    "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=800&q=80",
                    "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=800&q=80"
                ]
            },
            { 
                id: 5, 
                brand: "Citroën", 
                model: "ë-C3 Aircross", 
                type: "SUV", 
                priceMin: 26490, 
                priceMax: 29990, 
                rangeText: "300 - 400 km",
                minRangeVal: 300, 
                maxRangeVal: 400,
                batteryText: "44 kWh | 54 kWh",
                powerText: "83 kW (113 CV)",
                trunk: 460,
                seats: 7,
                launchYear: 2024,
                acceleration: "12,0 s (0-100 km/h)",
                dimensions: "4,39 m (L) / 1,80 m (An) / 1,66 m (Al)",
                description: "El Citroën ë-C3 Aircross destaca por su versatilidad familiar, ofreciendo una variante de hasta 7 plazas en un formato SUV compacto muy robusto y confortable.",
                charging: "Carga rápida CC hasta 100 kW.",
                brandUrl: "https://www.citroen.es",
                colors: [
                    { name: "Gris Perla", hex: "#cbd5e1" },
                    { name: "Negro Perla Nera", hex: "#0f172a" },
                    { name: "Azul Strikefast", hex: "#2563eb" }
                ],
                trims: [
                    { name: "Standard (5 plazas)", price: "26.490 €", battery: "44 kWh", power: "113 CV", range: "300 km", accel: "12,0 s" },
                    { name: "Extended Range (7 plazas)", price: "29.990 €", battery: "54 kWh", power: "113 CV", range: "400 km", accel: "12,5 s" }
                ],
                videos: [
                    { title: "Citroën ë-C3 Aircross de 7 plazas", url: "https://www.youtube.com/results?search_query=Citroen+eC3+Aircross+electric", thumb: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=400&q=80" }
                ],
                images: [
                    "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80",
                    "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80"
                ]
            },
            { 
                id: 6, 
                brand: "MG", 
                model: "MG4 Electric", 
                type: "Utilitario", 
                priceMin: 24290, 
                priceMax: 38490, 
                rangeText: "350 - 520 km",
                minRangeVal: 350,
                maxRangeVal: 520,
                batteryText: "51 kWh | 64 kWh | 77 kWh",
                powerText: "170 CV - 435 CV",
                trunk: 363,
                seats: 5,
                launchYear: 2022,
                acceleration: "3,8 s - 7,7 s (0-100 km/h)",
                dimensions: "4,28 m (L) / 1,83 m (An) / 1,50 m (Al)",
                description: "Uno de los utilitarios eléctricos más vendidos gracias a su plataforma dedicada, comportamiento dinámico excelente y versiones de altas prestaciones (XPower).",
                charging: "Carga rápida CC hasta 140 kW según versión.",
                brandUrl: "https://www.mg.es",
                colors: [
                    { name: "Naranja Brighton", hex: "#f97316" },
                    { name: "Negro Guijarro", hex: "#1e293b" },
                    { name: "Blanco Ártico", hex: "#f8fafc", border: "#cbd5e1" },
                    { name: "Gris Metalizado", hex: "#475569" }
                ],
                trims: [
                    { name: "Standard", price: "24.290 €", battery: "51 kWh", power: "170 CV", range: "350 km", accel: "7,7 s" },
                    { name: "Comfort / Luxury", price: "29.990 €", battery: "64 kWh", power: "204 CV", range: "450 km", accel: "7,9 s" },
                    { name: "XPower (Deportivo)", price: "38.490 €", battery: "77 kWh", power: "435 CV", range: "520 km", accel: "3,8 s" }
                ],
                videos: [
                    { title: "MG4 Electric: Prueba a fondo en español", url: "https://www.youtube.com/results?search_query=MG4+Electric+prueba+espanol", thumb: "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=400&q=80" }
                ],
                images: [
                    "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=800&q=80",
                    "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80"
                ]
            },
            { 
                id: 7, 
                brand: "Tesla", 
                model: "Model 3", 
                type: "Sedan", 
                priceMin: 39990, 
                priceMax: 50990, 
                rangeText: "513 - 629 km",
                minRangeVal: 513,
                maxRangeVal: 629,
                batteryText: "60 kWh | 75 kWh",
                powerText: "283 CV - 513 CV",
                trunk: 561,
                seats: 5,
                launchYear: 2019,
                acceleration: "3,1 s - 6,1 s (0-100 km/h)",
                dimensions: "4,72 m (L) / 1,85 m (An) / 1,44 m (Al)",
                description: "La berlina de referencia mundial en movilidad eléctrica. Ofrece tecnología puntera, eficiencia energética líder y acceso a la red Supercharger.",
                charging: "Supercarga hasta 250 kW.",
                brandUrl: "https://www.tesla.com/es_es",
                colors: [
                    { name: "Blanco Perlado", hex: "#f8fafc", border: "#cbd5e1" },
                    { name: "Negro Sólido", hex: "#020617" },
                    { name: "Gris Mercurio", hex: "#94a3b8" },
                    { name: "Rojo Ultra", hex: "#dc2626" }
                ],
                trims: [
                    { name: "Tracción Trasera (Standard)", price: "39.990 €", battery: "60 kWh", power: "283 CV", range: "513 km", accel: "6,1 s" },
                    { name: "Gran Autonomía (Doble Motor)", price: "50.990 €", battery: "75 kWh", power: "513 CV", range: "629 km", accel: "4,4 s" }
                ],
                videos: [
                    { title: "Nuevo Tesla Model 3 Highland: Análisis completo", url: "https://www.youtube.com/results?search_query=Tesla+Model+3+Highland+prueba+espanol", thumb: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=400&q=80" }
                ],
                images: [
                    "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=800&q=80",
                    "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=800&q=80"
                ]
            }
        ];
