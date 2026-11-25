const motoBrands = {
    BMW: {
        origin: 'Alemania', founded: '1923 (primera moto BMW)', group: 'BMW Group',
        about: 'BMW Motorrad presentó su primera motocicleta, la R 32, en 1923. Su gama eléctrica urbana incluye los BMW CE 02 y CE 04.',
        source: 'https://www.bmw-motorrad.es/'
    },
    EFUN: {
        origin: 'China', group: 'EFUN',
        about: 'EFUN comercializa scooters eléctricos urbanos en España. Su gama incluye las familias Pusa y Lion.',
        source: 'https://www.efunmotos.com/sobre-nosotros/'
    },
    Honda: {
        origin: 'Japón', founded: '1948', group: 'Honda Motor Co.',
        about: 'Honda fabrica motocicletas y automóviles. Su oferta eléctrica de dos ruedas incluye los scooters EM1 e: y CUV e: y la motocicleta WN7.',
        source: 'https://global.honda/en/investors/faq.html'
    },
    NIU: {
        origin: 'China', founded: '2014', group: 'Niu Technologies',
        about: 'Nacida en Pekín, NIU se especializa en movilidad eléctrica urbana. Sus familias NQi y MQi incluyen scooters conectados.',
        source: 'https://global.niu.com/en-us/about'
    },
    SEAT: {
        origin: 'España', founded: '1950 (SEAT)', group: 'Grupo Volkswagen',
        about: 'SEAT lanzó la línea de movilidad urbana SEAT MÓ en 2020. El MÓ 125 se desarrolló en colaboración con Silence.',
        source: 'https://www.seat.com/company/history/1950'
    },
    Silence: {
        origin: 'España', founded: '2012', group: 'ACCIONA',
        about: 'Con sede en Barcelona, Silence desarrolla vehículos eléctricos ligeros. Sus scooters utilizan baterías extraíbles con ruedas para facilitar su transporte.',
        source: 'https://www.silence.eco/es'
    },
    Stark: {
        origin: 'España (raíces suecas)', founded: '2020', group: 'Stark Future',
        about: 'Stark Future nació en el área de Barcelona y se especializa en motos eléctricas de altas prestaciones para motocross y enduro, como la familia Varg.',
        source: 'https://startupshub.catalonia.com/startup/barcelona/starkfuture/6603'
    },
    'Super Soco': {
        origin: 'China', founded: '2015', group: 'Alianza comercial con Vmoto',
        about: 'Super Soco nació en Shanghái y se especializó en ciclomotores y motos eléctricas urbanas. En 2024, Vmoto unificó su gama comercial bajo la marca Vmoto.',
        source: 'https://vmoto.com/es/news/vmoto-soco-pasa-a-ser-vmoto-una-marca-unificada'
    },
    Talaria: {
        origin: 'China', founded: '1996 (fabricante)', group: 'Talaria Power Tech',
        about: 'Con sede en Chongqing, Talaria fabrica motos eléctricas ligeras para uso fuera del asfalto. Su gama incluye la Talaria Komodo.',
        source: 'https://www.talariaeu.com/about-us'
    },
    Velca: {
        origin: 'España', founded: '2020', group: 'Velca Motor',
        about: 'Velca nació en Madrid y comercializa motos eléctricas para desplazamientos urbanos e interurbanos, entre ellas el scooter Eon.',
        source: 'https://www.velcamotor.com/'
    },
    Vmoto: {
        origin: 'Australia', founded: '2002', group: 'Vmoto Group',
        about: 'Fundada en Perth, Vmoto desarrolla ciclomotores y motocicletas eléctricas para movilidad urbana. Su catálogo incluye modelos como el Citi.',
        source: 'https://vmoto.com/es/news/vmoto-soco-pasa-a-ser-vmoto-una-marca-unificada'
    },
    Yamaha: {
        origin: 'Japón', founded: '1955', group: 'Yamaha Motor Co.',
        about: 'Yamaha Motor fabrica motos y scooters.',
        profileDetail: 'La familia NEO’S es su propuesta de ciclomotor eléctrico urbano con batería extraíble.',
        source: 'https://global.yamaha-motor.com/about/overview/'
    },
    Zero: {
        origin: 'Estados Unidos', founded: '2006', group: 'Zero Motorcycles',
        about: 'Zero Motorcycles nació en California y se especializa en motocicletas eléctricas. Su gama incluye modelos de carretera, como la SR/F, y de uso mixto.',
        source: 'https://zeromotorcycles.com/es-es/company'
    }
};

function motoBrandUrl(name) {
    return '/motos/?marca=' + encodeURIComponent(name);
}

function motoBrandLogo(name) {
    const logo = '/img/logos/motos/' + encodeURIComponent(name.toLowerCase().replaceAll(' ', '-')) + '.webp';
    return name === 'Yamaha' ? logo + '?v=yamaha-motor-2025' : logo;
}

function motoBrandFacts(brand) {
    return [
        ['País de origen', brand.origin],
        ['Fundación', brand.founded],
        ['Grupo o fabricante', brand.group]
    ].filter(([, value]) => value);
}
