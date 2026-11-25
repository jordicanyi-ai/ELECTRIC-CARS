const requestedMotoBrand = new URLSearchParams(location.search).get('marca')?.trim().toLocaleLowerCase('es');
const selectedMotoBrand = motorcycles.find(m => m.brand.toLocaleLowerCase('es') === requestedMotoBrand)?.brand;

function motoStat(moto, field, unit, fallback = 'No publicado') {
    const values = (moto.versions ?? [moto]).map(version => version[field]).filter(Number.isFinite);
    if (!values.length) return fallback;
    const min = Math.min(...values);
    const max = Math.max(...values);
    const format = number => number.toLocaleString('es-ES', { maximumFractionDigits: 3, useGrouping: unit === '€' ? 'always' : false });
    return format(min) + (max === min ? '' : '–' + format(max)) + ' ' + unit;
}

function motoMax(moto, field) {
    return Math.max(-1, ...(moto.versions ?? [moto]).map(version => version[field] ?? -1));
}

function renderMotoBrandProfile() {
    if (!selectedMotoBrand || document.documentElement.classList.contains('brand-embed-root')) return;
    const brand = Object.hasOwn(motoBrands, selectedMotoBrand) ? motoBrands[selectedMotoBrand] : {};
    const intro = document.querySelector('.catalogue-intro');
    intro.classList.add('moto-brand-profile');
    intro.innerHTML = `
        <a class="moto-brand-link" href="/motos/marcas/">← Todas las marcas</a>
        <div class="moto-brand-hero">
            <img src="${motoBrandLogo(selectedMotoBrand)}" alt="" width="140" height="95" onerror="this.hidden=true">
            <h1 id="page-title"></h1>
        </div>
        <dl class="moto-brand-facts">${motoBrandFacts(brand).map(([label, value]) =>
            `<div><dt>${label}</dt><dd>${value}</dd></div>`).join('')}</dl>
        ${brand.about ? `<h2>Sobre la marca</h2><p>${[brand.about, brand.profileDetail].filter(Boolean).join(' ')}</p>
            <a class="moto-brand-link" href="${brand.source}" target="_blank" rel="noopener noreferrer">Fuente de la marca ↗</a>` : ''}
        <h2 id="moto-brand-models">Modelos eléctricos</h2>`;
    intro.querySelector('h1').textContent = selectedMotoBrand.toLocaleUpperCase('es');
    document.title = selectedMotoBrand + ' | Motos eléctricas y origen | electricos.eu';
    document.getElementById('catalogue-results').setAttribute('aria-labelledby', 'moto-brand-models');
}

function minimumMotoLicense(moto) {
    const license = ['AM', 'A1', 'A2', 'A'].find(value => moto.licenses?.includes(value));
    if (license === 'AM') return 'AM · Ciclomotor';
    return license || 'Consultar';
}
const motoEl=id=>document.getElementById(id);
const motoFields=['moto-type','moto-license','moto-removable','moto-power','moto-speed','moto-charge','moto-seats','range-filter','price-filter'];
function toggleMobileFilters(){const p=motoEl('filters-panel');p.hidden=!p.hidden;motoEl('filters-toggle').setAttribute('aria-expanded',String(!p.hidden));}
function resetFilters(){motoFields.forEach(id=>{const e=motoEl(id);if(!e)return;e.value=id==='price-filter'?'30000':id==='range-filter'||id==='moto-power'||id==='moto-speed'?'0':''});motoEl('hero-search').value='';filterCars();}
function syncHeroSearch(){filterCars();}
function filterCars(){
 const v=id=>motoEl(id)?.value||'';
 const q=v('hero-search').trim().toLocaleLowerCase('es');
 const type=v('moto-type'),license=v('moto-license'),removable=v('moto-removable'),power=Number(v('moto-power')),speed=Number(v('moto-speed')),charge=v('moto-charge'),seats=v('moto-seats'),range=Number(v('range-filter')),price=Number(v('price-filter'));
 const filtered=motorcycles.filter(m=>(!selectedMotoBrand || m.brand === selectedMotoBrand)
  && (!q || [m.brand, m.model, m.category, ...(m.versions ?? []).map(version => version.name)].join(' ').toLocaleLowerCase('es').includes(q))&&(!type||m.category===type)&&(!license||(Array.isArray(m.licenses)&&m.licenses.includes(license)))&&(!removable||(m.removableBattery!=null&&(removable==='yes')===m.removableBattery))&&(!power||(m.powerKw!=null&&m.powerKw>=power))&&(!speed||(m.topSpeedKmh!=null&&m.topSpeedKmh>=speed))&&(!charge||(m.fastCharge!=null&&(charge==='yes')===m.fastCharge))&&(!seats||(m.seats!=null&&String(m.seats)===seats))&& (m.versions ?? [m]).some(version =>
   (!range || (version.rangeKm != null && version.rangeKm >= range))
   && (price === 30000 || (version.priceEur != null && version.priceEur <= price))));
 window.motoVisibleList=filtered;window.motoImageIndexes={};const sort=window.motoRankingActive?(v('ranking-metric')||'priceAsc'):v('sort-filter');if(sort==='priceAsc')filtered.sort((a,b)=>(a.priceEur??Infinity)-(b.priceEur??Infinity));else if(sort==='rangeDesc')filtered.sort((a,b)=>motoMax(b, 'rangeKm')-motoMax(a, 'rangeKm'));else if(sort==='powerDesc')filtered.sort((a,b)=>(b.peakPowerKw??-1)-(a.peakPowerKw??-1));else if(sort==='speedDesc')filtered.sort((a,b)=>(b.topSpeedKmh??-1)-(a.topSpeedKmh??-1));else if(sort==='batteryDesc')filtered.sort((a,b)=>motoMax(b, 'batteryKwh')-motoMax(a, 'batteryKwh'));else if(sort==='accelerationAsc')filtered.sort((a,b)=>(a.accel0050Sec??Infinity)-(b.accel0050Sec??Infinity));else if(sort==='brandAsc')filtered.sort((a,b)=>(a.brand+a.model).localeCompare(b.brand+b.model));
 motoEl('range-val').textContent=range+' km';motoEl('price-val').textContent=price===30000?'Sin límite':price.toLocaleString('es-ES')+' €';
 const active=Number(Boolean(type))+Number(Boolean(license))+Number(Boolean(removable))+Number(Boolean(power))+Number(Boolean(speed))+Number(Boolean(charge))+Number(Boolean(seats))+Number(Boolean(range))+Number(price<30000);
 const badge=motoEl('active-filter-count');badge.hidden=!active;badge.textContent=active;
 document.querySelectorAll('[data-moto-quick]').forEach(b=>{const k=b.dataset.motoQuick;const on=k==='all'?!active&&!q:k==='price'?price===5000:k==='range'?range===100:k==='scooter'?type==='Scooter':k==='removable'?removable==='yes':license===k;b.setAttribute('aria-pressed',String(on))});
 motoEl('results-count').textContent=(window.motoRankingActive?'Ranking · ':'')+filtered.length+' '+(filtered.length===1?'moto':'motos');
 motoEl('cars-grid').innerHTML=filtered.length?'<div class="catalogue-batch">'+filtered.map((m,i)=>{
 const name=(m.brand+' '+m.model).toLocaleUpperCase('es-ES');const rankingValue=sort==='priceAsc'?m.priceEur?.toLocaleString('es-ES')+' €':sort==='rangeDesc'?(motoMax(m, 'rangeKm') < 0 ? '—' : motoMax(m, 'rangeKm')+' km'):sort==='powerDesc'?m.peakPowerKw+' kW':sort==='speedDesc'?m.topSpeedKmh+' km/h':sort==='batteryDesc'?(motoMax(m, 'batteryKwh') < 0 ? '—' : motoMax(m, 'batteryKwh')+' kWh'):sort==='accelerationAsc'?(m.accel0050Sec==null?'—':m.accel0050Sec+' s'):'';
 const priceText=motoStat(m, 'priceEur', '€', 'Por verificar');
 const rangeText=motoStat(m, 'rangeKm', 'km', 'Por verificar');
 const powerText=m.powerKw==null?'Por verificar':m.powerKw+' kW';
 const speedText=m.topSpeedKmh==null?'Por verificar':m.topSpeedKmh+' km/h';
 const batteryText=m.removableBattery==null?'Por verificar':m.removableBattery?'Sí':'No';
 return '<article class="car-card" data-moto="'+encodeURIComponent(m.brand+'|'+m.model)+'"><div class="car-photo" onclick="openMotoModal(this.closest(\'article\').dataset.moto)" style="cursor:pointer">'+(m.images?.length?'<img id="moto-img-'+i+'" src="'+m.images[0]+'" alt="'+name+'" loading="lazy">'+(m.images.length>1?'<button type="button" class="car-arrow car-arrow-prev" onclick="changeMotoSlide('+i+',-1,event)" aria-label="Foto anterior"><i class="fa-solid fa-chevron-left"></i></button><button type="button" class="car-arrow car-arrow-next" onclick="changeMotoSlide('+i+',1,event)" aria-label="Foto siguiente"><i class="fa-solid fa-chevron-right"></i></button><div id="moto-dots-'+i+'" class="car-dots">'+m.images.map((_,n)=>'<span class="'+(n===0?'current':'')+'"></span>').join('')+'</div>':''):m.image?'<img src="'+m.image+'" alt="'+name+'" loading="lazy">':'<div style="height:100%;display:grid;place-items:center;color:#64748b"><i class="fa-solid fa-motorcycle fa-3x"></i></div>')+(window.motoRankingActive?'<span class="car-position moto-rank-number"><strong class="car-rank-number">#'+(i+1)+'</strong><span class="car-rank-label">'+({'priceAsc':'PRECIO DESDE','rangeDesc':'AUTONOMÍA MÁXIMA','powerDesc':'POTENCIA MÁXIMA','speedDesc':'VELOCIDAD MÁXIMA','batteryDesc':'BATERÍA','accelerationAsc':'ACELERACIÓN 0–50'}[sort]||'VALOR')+'</span></span>':'<span class="car-type">'+m.category+'</span>')+'</div><div class="car-content"><div class="car-brand">'+m.brand.toLocaleUpperCase('es-ES')+'</div><h2 class="car-title">'+m.model.toLocaleUpperCase('es-ES')+'</h2>'+(window.motoRankingActive?'<div class="ranking-featured-value"><span>'+({'priceAsc':'PRECIO','rangeDesc':'AUTONOMÍA','powerDesc':'POTENCIA MÁXIMA','speedDesc':'VELOCIDAD MÁXIMA','batteryDesc':'BATERÍA','accelerationAsc':'ACELERACIÓN 0–50'}[sort]||'VALOR')+'</span><strong>'+rankingValue+'</strong></div>':'')+'<div class="car-primary-specs"><div><i class="fa-solid fa-tag"></i><strong>'+priceText+'</strong><small>Precio sin ayudas</small></div><div><i class="fa-solid fa-road"></i><strong>'+rangeText+'</strong><small>Autonomía declarada</small></div></div><div class="car-secondary-specs"><div><i class="fa-solid fa-bolt"></i><strong>'+powerText+'</strong><small>Potencia nominal</small></div><div><i class="fa-solid fa-gauge-high"></i><strong>'+speedText+'</strong><small>Velocidad máxima</small></div><div><i class="fa-solid fa-battery-full"></i><strong>'+batteryText+'</strong><small>Batería extraíble</small></div></div><div class="car-actions"><button type="button" class="car-open" '+'onclick="openMotoModal(this.closest(\'article\').dataset.moto)"'+'>Ver ficha <i class="fa-solid fa-arrow-right"></i></button><button type="button" class="car-compare" onclick="toggleCompare(this.closest(\'article\').dataset.moto)"><i class="fa-solid fa-code-compare"></i> Comparar</button></div></div></article>';
 }).join('')+'</div>':'<div class="empty-results"><p>No encontramos motos con estos filtros</p><button type="button" onclick="resetFilters()">Limpiar filtros</button></div>';
}
function applyMotoQuick(k){const pressed=document.querySelector('[data-moto-quick="'+k+'"]')?.getAttribute('aria-pressed')==='true';resetFilters();if(!pressed){if(k==='price')motoEl('price-filter').value='5000';else if(k==='range')motoEl('range-filter').value='100';else if(k==='scooter')motoEl('moto-type').value='Scooter';else if(k==='removable')motoEl('moto-removable').value='yes';else if(['AM','A1','A2','A','B'].includes(k))motoEl('moto-license').value=k;}filterCars();}
document.addEventListener('DOMContentLoaded',()=>{renderMotoBrandProfile();motoFields.forEach(id=>motoEl(id)?.addEventListener(id.includes('filter')&&['range-filter','price-filter'].includes(id)?'input':'change',filterCars));motoEl('hero-search')?.addEventListener('input',filterCars);motoEl('sort-filter')?.addEventListener('change',filterCars);motoEl('moto-reset')?.addEventListener('click',resetFilters);document.querySelectorAll('[data-moto-quick]').forEach(b=>b.addEventListener('click',()=>applyMotoQuick(b.dataset.motoQuick)));const sort=motoEl('sort-filter');if(sort){sort.innerHTML='<option value="random">Aleatorio</option><option value="priceAsc">Precio: menor primero</option><option value="rangeDesc">Autonomía: mayor primero</option><option value="brandAsc">Marca: A–Z</option>';}filterCars();});

function changeMotoSlide(i,delta,event){event?.stopPropagation();const list=window.motoVisibleList||[];const m=list[i];if(!m?.images?.length)return;const indexes=window.motoImageIndexes||(window.motoImageIndexes={});const n=indexes[i]=((indexes[i]||0)+delta+m.images.length)%m.images.length;const img=motoEl('moto-img-'+i);if(img)img.src=m.images[n];motoEl('moto-dots-'+i)?.querySelectorAll('span').forEach((dot,j)=>dot.classList.toggle('current',j===n));}

function openMotoModal(model){
const parts=decodeURIComponent(model).split('|');const m=motorcycles.find(x=>x.brand===parts[0]&&(x.model===parts[1]||x.versions?.some(version=>version.model===parts[1])))||motorcycles.find(x=>x.model===model);if(!m)return;window.activeMoto=m;
const car={id:0,brand:m.brand,model:m.model,type:'Scooter',images:m.images,priceText:m.priceEur?.toLocaleString('es-ES')+' €',rangeText:m.rangeKm+' km',batteryText:m.batteryKwh+' kWh',powerText:m.powerKw+' kW',topSpeed:m.topSpeedKmh+' km/h',seats:m.seats||2,description:'Scooter eléctrico urbano equivalente a 125 cc, con batería extraíble tipo trolley. Dispone de soluciones de carga doméstica e intercambio de batería en estaciones compatibles.',idealFor:['Movilidad urbana','Batería extraíble','Carnet A1 o B con más de 3 años'],trims:[{name:'S01 · batería en propiedad',price:m.priceEur?.toLocaleString('es-ES')+' €',battery:m.batteryKwh+' kWh',range:m.rangeKm+' km WMTC',power:m.powerKw+' kW',accel:m.accel0050Sec+' s'}],warranty:{vehicle:'3 años (España)',battery:'3 años o 360 ciclos, lo que ocurra primero',capacity:'No especificada por el fabricante'},colors:[],highlights:['Batería extraíble con ruedas para facilitar el transporte.','Autonomía homologada de 133 km WMTC.','Disponible el intercambio de batería donde exista una estación compatible.'],considerations:['La batería pesa aproximadamente 41 kg.','La carga doméstica puede requerir entre 7 y 9 horas.','Las condiciones de compra y suscripción de batería son diferentes.'],dataStatus:{status:'Datos técnicos pendientes de revisión final',checkedAt:'18/11/2026'},brandUrl:'https://www.silence.eco/es',tech:[['Dimensiones',m.dimensions,'ruler-combined'],['Carga doméstica',m.chargeText,'plug'],['0–50 km/h',m.accelerationText,'gauge-high'],['Carnet','A1 / A / B (+3 años)','id-card'],['Batería extraíble','Sí · trolley','battery-full'],['Peso de la batería',m.batteryWeightKg+' kg','weight-hanging'],['Peso con batería',m.weightKg+' kg','motorcycle'],['Velocidad máxima',m.topSpeedKmh+' km/h','gauge-high'],['Homologación','L3e · equivalente 125 cc','motorcycle']]};
if(!m.description&&m.brand!=='Silence'){car.type=m.category;car.images=m.images||[];car.description=m.brand==='BMW'?'El BMW CE 04 es un scooter eléctrico de diseño futurista pensado para desplazamientos urbanos y metropolitanos. Combina una potencia nominal de 15 kW con picos de 31 kW, alcanza los 120 km/h y anuncia hasta 130 km de autonomía. Su batería integrada de 8,9 kWh no es extraíble: se recarga conectando la moto a la corriente, con una opción de carga AC de 6,9 kW. Ofrece aceleraciones ágiles, equipamiento tecnológico y un enfoque práctico para el día a día, aunque su precio y la necesidad de disponer de un punto de carga son aspectos a valorar.':'La Zero SR/F es una moto eléctrica naked orientada a quienes buscan prestaciones y sensaciones deportivas sin renunciar a la movilidad eléctrica. Su motor entrega hasta 83 kW de potencia máxima y permite alcanzar los 200 km/h. Equipa una batería integrada de 17,3 kWh, no extraíble, y declara hasta 283 km de autonomía en ciudad; fuera de ella, especialmente a velocidades de autopista, la autonomía es inferior. Admite carga en corriente alterna y destaca por su respuesta inmediata al acelerador. Antes de elegirla conviene valorar el precio, el tipo de trayectos habituales y el acceso a un punto de carga.';car.idealFor=m.brand==='BMW'?['Ciudad','Scooter premium','Carnet A2 o A']:['Conducción deportiva','Moto naked','Carnet A'];car.trims=[{name:m.brand+' '+m.model,price:m.priceEur?.toLocaleString('es-ES')+' €',battery:m.batteryKwh+' kWh',range:m.rangeKm+' km',power:m.powerKw+' kW',accel:m.accel0050Sec?m.accel0050Sec+' s':'No disponible'}];car.warranty=m.brand==='BMW'?{vehicle:'5 años, km ilimitados',battery:'5 años o 40.000 km',capacity:'Consultar condiciones'}:{vehicle:'5 años, km ilimitados',battery:'5 años sin límite de kilometraje',capacity:'Consultar condiciones'};car.highlights=m.brand==='BMW'?['Potencia máxima de 31 kW.','Carga AC de hasta 6,9 kW opcional.']:['Potencia máxima de 83 kW.','Autonomía urbana declarada de 283 km.'];car.considerations=m.brand==='BMW'?['La batería no es extraíble.','La carga rápida AC es opcional.']:['La autonomía declarada corresponde a uso urbano.','La autonomía real depende del recorrido.'];car.brandUrl=m.source;car.tech=[...(m.brand==='Zero'?[['0–50 km/h',m.accel0050Sec+' s','gauge-high'],['0–100 km/h',m.accel0100Sec+' s (prueba independiente)','stopwatch']]:[]),['Carga',m.chargeText||'Consultar','plug'],['Velocidad máxima',m.topSpeedKmh+' km/h','gauge-high'],['Carnet',m.licenses?.join(' / ')||'Consultar','id-card'],['Batería extraíble','No','battery-full'],['Peso',m.weightKg?m.weightKg+' kg':'No disponible','weight-hanging']];}
if(m.brand==='BMW'&&m.model==='CE 02'){
 car.description='El BMW CE 02 es un eléctrico urbano con asiento a 750 mm y marcha atrás eléctrica. Esta ficha corresponde a la versión A1, con 6 kW nominales, 11 kW de pico y dos módulos de batería extraíbles.';
 car.idealFor=['Trayectos urbanos','Carga en enchufe doméstico','Carnet A1'];
 car.trims[0].range=m.rangeKm+' km WMTC';
 car.warranty={vehicle:'Consultar condiciones de la unidad',battery:'Consultar condiciones de la unidad',capacity:'Consultar condiciones'};
 car.highlights=['Acelera de 0 a 50 km/h en 3 segundos.','Asiento a 750 mm y marcha atrás eléctrica.'];
 car.considerations=['La variante AM tiene otras prestaciones.','El cargador de 1,5 kW es opcional.'];
 car.tech=car.tech.map(row=>row[0]==='Batería extraíble'?[row[0],'Sí, dos módulos',row[2]]:row);
 car.tech.push(['Autonomía WMTC',m.rangeKm+' km','road'],['Altura del asiento',m.seatHeightMm+' mm','ruler'],['Dimensiones',m.dimensions,'ruler-combined']);
}

if(m.description){
 const unit=(value,label)=>value==null?'No publicado':value+' '+label;
 car.priceText=m.priceEur==null?'No publicado':m.priceEur.toLocaleString('es-ES')+' €';
 car.rangeText=unit(m.rangeKm,'km');
 car.powerText=unit(m.powerKw,'kW');
 car.topSpeedText=unit(m.topSpeedKmh,'km/h');
 car.batteryText=unit(m.batteryKwh,'kWh');
 car.type=m.category;
 car.description=m.description;
 car.idealFor=[];
 car.trims=[{name:m.variant||m.model,price:car.priceText,battery:car.batteryText,range:unit(m.rangeKm,'km')+(m.rangeCycle?' · '+m.rangeCycle:''),power:car.powerText,accel:unit(m.accel0050Sec,'s')}];
 car.warranty={vehicle:'Consultar condiciones del distribuidor',battery:'Consultar condiciones del distribuidor',capacity:'Consultar condiciones del distribuidor',...m.warranty};
 car.highlights=m.highlights||[];
 car.considerations=m.considerations||[];
 car.brandUrl=m.source;
 car.dataStatus={status:'Fuente oficial del fabricante o distribuidor',checkedAt:'25/11/2026'};
 car.tech=[
  ['Homologación',m.homologation||m.variant,'motorcycle'],
  ['Carnet',m.licenses?.join(' / '),'id-card'],
  ['Velocidad máxima',unit(m.topSpeedKmh,'km/h'),'gauge-high'],
  ['Potencia máxima',unit(m.peakPowerKw,'kW'),'bolt'],
  ['Batería extraíble',m.removableBattery==null?null:m.removableBattery?'Sí':'No','battery-full'],
  ['Carga',m.chargeText,'plug'],
  ['Peso',unit(m.weightKg,'kg'),'weight-hanging'],
  ['Altura del asiento',unit(m.seatHeightMm,'mm'),'ruler'],
  ['Dimensiones',m.dimensions,'ruler-combined']
 ].filter(([,value])=>value&&value!=='No publicado');
}

if (m.versions) {
    car.priceText = motoStat(m, 'priceEur', '€');
    car.rangeText = motoStat(m, 'rangeKm', 'km');
    car.batteryText = motoStat(m, 'batteryKwh', 'kWh');
    car.trims = m.versions.map(version => ({
        name: version.name,
        price: motoStat(version, 'priceEur', '€'),
        battery: motoStat(version, 'batteryKwh', 'kWh'),
        range: motoStat(version, 'rangeKm', 'km') + ' · ' + m.rangeCycle,
        power: car.powerText,
        source: version.source
    }));
}

if(m.warranty)car.warranty=m.warranty;
car.tech=car.tech.map(row=>row[0]==='Carnet'?['Carnet mínimo',minimumMotoLicense(m),'id-card']:row);
const trimsHtml=car.trims.map(trim=>`<div class="border border-slate-200 rounded-2xl p-5 bg-white"><div class="text-xs text-blue-600 font-extrabold uppercase">${trim.name}</div><div class="text-xl font-black mt-1">${trim.price}</div><div class="text-[10px] text-slate-400">IVA incluido · Sin ayudas</div><div class="grid grid-cols-2 gap-3 mt-5 text-sm">${[['Batería',trim.battery],['Autonomía',trim.range],['Potencia',trim.power],['0–50 km/h',trim.accel]].filter(([, value]) => value).map(([k,v])=>'<div><span class="text-slate-400 text-xs block">'+k+'</span><strong>'+v+'</strong></div>').join('')}</div>${trim.source ? `<a class="text-xs font-bold text-blue-600 mt-4 inline-block" href="${trim.source}" target="_blank" rel="noopener noreferrer">Ficha oficial ↗</a>` : ''}</div>`).join('');
const colorsHtml=(m.colorSwatches||(m.brand==='Silence'&&m.model==='S01'?[['Blanco','#f5f5f3'],['Negro','#181818'],['Rojo','#a41f35']]:m.brand==='BMW'?[['Light White','#f5f5f3'],['Gravity Blue','#54637a'],['Spacesilver','#a9adb3']]:[['Limited Edition','#444444']])).map(([name,hex])=>`<span class="inline-flex items-center gap-3 text-sm font-medium text-slate-700"><span class="w-8 h-8 rounded-full border border-slate-300 shadow-sm" style="background:${hex}"></span>${name}</span>`).join('');
const galleryHtml=car.images.map((img,index)=>`<button type="button" onclick="openMotoLightbox(${index})" aria-label="Ampliar fotografía ${index+1}" class="block w-full min-w-0 text-left rounded-2xl overflow-hidden bg-slate-100 aspect-[4/3] cursor-zoom-in group"><img src="${img}" alt="${car.brand} ${car.model}" class="w-full h-full ${index<3?'object-contain':'object-cover'} group-hover:scale-105 transition duration-500"></button>`).join('');
const positives=car.highlights.map(item=>'<li class="flex gap-3"><span class="text-blue-600 font-black text-base leading-5">+</span><span>'+item+'</span></li>').join('');
const considerations=car.considerations.map(item=>'<li class="flex gap-3"><span class="text-slate-400 font-black text-base leading-5">−</span><span>'+item+'</span></li>').join('');
const idealFor=car.idealFor.map(item=>'<span class="bg-slate-100 text-slate-600 border border-slate-200 px-3 py-1.5 rounded-full text-[11px] font-bold">'+item+'</span>').join('');
const brand = Object.hasOwn(motoBrands, m.brand) ? motoBrands[m.brand] : {};
const brandInfoHtml = `
    <section class="border-t border-slate-200 pt-8">
        <div class="border border-slate-200 rounded-2xl p-5 sm:p-6 bg-white flex flex-wrap items-center gap-5">
            <img src="${motoBrandLogo(m.brand)}" alt="" class="w-28 h-16 object-contain" loading="lazy" onerror="this.hidden=true">
            <div class="flex-1 min-w-[180px]">
                <span class="text-xs uppercase tracking-wider text-slate-500 font-bold">La marca</span>
                <h3 class="text-xl font-black mt-1">${m.brand}</h3>
                <p class="text-sm text-slate-600 mt-1">${motoBrandFacts(brand).map(([, value]) => value).join(' · ')}</p>
                ${brand.about ? `<p class="text-sm text-slate-600 mt-2">${brand.about}</p>` : ''}
                <a class="text-sm text-blue-600 font-bold inline-block mt-3" href="${motoBrandUrl(m.brand)}">Ver marca y modelos →</a>
            </div>
        </div>
    </section>`;
const modal=document.getElementById('modal-content');modal.innerHTML=`

                <!-- HERO CAR -->

                <section class="relative detail-hero">

                    <div class="h-[285px] sm:h-[355px] detail-hero-image">

                        <img src="${car.images[0]}"
                            alt="${car.brand.toLocaleUpperCase('es-ES')} ${car.model.toLocaleUpperCase('es-ES')}"
                            class="w-full h-full object-cover" style="object-fit:cover;object-position:center">

                    </div>



                    

                    <button onclick="closeCarModal()"
                        aria-label="Cerrar ficha" class="detail-close absolute top-5 right-5 w-11 h-11 bg-black/50 hover:bg-black/80 backdrop-blur text-white rounded-full">

                        <i class="fa-solid fa-xmark"></i>

                    </button>

                    <div class="detail-identity p-6 sm:p-8">

                        <span class="bg-blue-600 px-3 py-1 rounded-full text-[10px] font-extrabold uppercase">
                            ${car.type}
                        </span>

                        <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mt-3">

                            <div>

                                <div class="text-sm text-slate-300 font-semibold">
                                    ${car.brand.toLocaleUpperCase('es-ES')}
                                </div>

                                <h2 class="text-4xl sm:text-5xl font-black">
                                    ${car.model.toLocaleUpperCase('es-ES')}
                                </h2>
                                

                            </div>

                            <div class="sm:text-right">

                                <div class="text-xs text-slate-300">
                                    Precio gama
                                </div>

                                <div class="text-2xl sm:text-3xl font-black">
                                    ${car.priceText}
                                </div>

                                <div class="text-xs text-slate-300 mt-1">
                                    IVA incluido · Sin ayudas públicas
                                </div>

                            </div>

                        </div>

                    </div>

                </section>

                <div class="p-5 sm:p-8 space-y-12">

                    <!-- MAIN DATA --><section><div class="grid grid-cols-2 lg:grid-cols-5 gap-3">
<div class="detail-range-stat col-span-2 lg:col-span-1 bg-blue-600 text-white rounded-2xl p-5"><i class="fa-solid fa-road opacity-70"></i><div class="text-2xl font-black mt-2">${car.rangeText}</div><div class="text-xs opacity-80">Autonomía WMTC</div></div>
<div class="bg-slate-50 rounded-2xl p-5"><i class="fa-solid fa-battery-full text-blue-600"></i><div class="text-xl font-black mt-2">${car.batteryText}</div><div class="text-xs text-slate-400">Batería extraíble</div></div>
<div class="bg-slate-50 rounded-2xl p-5"><i class="fa-solid fa-bolt text-blue-600"></i><div class="text-xl font-black mt-2">${car.powerText}</div><div class="text-xs text-slate-400">Potencia</div></div>
<div class="bg-slate-50 rounded-2xl p-5"><i class="fa-solid fa-gauge-high text-blue-600"></i><div class="text-xl font-black mt-2">${car.topSpeed}</div><div class="text-xs text-slate-400">Velocidad máxima</div></div>
<div class="bg-slate-50 rounded-2xl p-5"><i class="fa-solid fa-user-group text-blue-600"></i><div class="text-xl font-black mt-2">${car.seats}</div><div class="text-xs text-slate-400">Plazas</div></div></div></section>

                    <!-- QUICK INTRO -->

                    <section>

                        <div class="flex items-center gap-2 mb-4">

                            <div class="w-8 h-8 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center">
                                <i class="fa-solid fa-stopwatch"></i>
                            </div>

                            <h3 class="text-xl font-black">
                                El ${car.model.toLocaleUpperCase('es-ES')} en 30 segundos
                            </h3>

                        </div>

                        <p class="text-slate-600 leading-relaxed max-w-4xl">
                            ${car.description}
                        </p>

                        <div class="flex flex-wrap gap-2 mt-5">
                            ${idealFor}
                        </div>

                    </section>

                    <!-- VERSIONS -->

                    <section>

                        <div class="mb-5">

                            <span class="text-blue-600 text-xs font-extrabold uppercase tracking-wider">
                                Gama
                            </span>

                            <h3 class="text-2xl font-black mt-1">
                                Versiones disponibles
                            </h3>

                            <p class="text-sm text-slate-500 mt-1">
                                Consulta las características de la versión y las opciones de batería.
                            </p>

                        </div>

                        <div class="grid md:grid-cols-2 gap-4">
                            ${trimsHtml}
                        </div>

                    </section>

                    <!-- PUBLICIDAD --><section><div class="text-center text-xs text-slate-400 border border-dashed border-slate-200 rounded-xl p-4">Publicidad</div></section>

                    <!-- TECH --><section><div class="mb-5"><span class="text-blue-600 text-xs font-extrabold uppercase tracking-wider">Ficha técnica</span><h3 class="text-2xl font-black mt-1">Datos principales</h3></div><div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">${car.tech.map(([label,value,icon])=>'<div class="border border-slate-200 rounded-2xl p-5"><i class="fa-solid fa-'+icon+' text-blue-600 mb-3"></i><span class="text-xs text-slate-400 block">'+label+'</span><div class="font-bold mt-1">'+value+'</div></div>').join('')}</div></section>

                    <!-- WARRANTY -->
                    <section>
                        <div class="mb-5"><span class="text-blue-600 text-xs font-extrabold uppercase tracking-wider">Cobertura del fabricante</span><h3 class="text-2xl font-black mt-1">Garantía</h3></div>
                        <div class="grid sm:grid-cols-2 gap-3">
                            <div class="border border-slate-200 rounded-2xl p-5"><i class="fa-solid fa-shield-halved text-blue-600 mb-3"></i><span class="text-xs text-slate-400 block">Vehículo</span><div class="font-bold mt-1">${car.warranty?.vehicle || 'Pendiente de verificar'}</div></div>
                            <div class="border border-slate-200 rounded-2xl p-5"><i class="fa-solid fa-battery-full text-blue-600 mb-3"></i><span class="text-xs text-slate-400 block">Batería</span><div class="font-bold mt-1">${car.warranty?.battery || 'Pendiente de verificar'}</div><div class="text-xs text-slate-500 mt-2">Capacidad mínima: ${car.warranty?.capacity || 'No especificada'}</div></div>
                        </div>
                        ${car.warranty?.source ? `<a class="text-xs text-blue-600 hover:underline inline-block mt-3" href="${car.warranty.source}" target="_blank" rel="noopener noreferrer">Consultar condiciones oficiales de garantía ↗</a>` : ''}
                    </section>

                    <!-- COLORS -->

                    <section>

                        <div class="mb-5">

                            <span class="text-blue-600 text-xs font-extrabold uppercase tracking-wider">
                                Personalización
                            </span>

                            <h3 class="text-2xl font-black mt-1">
                                Colores disponibles
                            </h3>

                        </div>

                        <div class="flex flex-wrap gap-x-6 gap-y-4">
                            ${colorsHtml}
                        </div>

                    </section>

                    <!-- GALLERY -->

                    <section>

                        <div class="mb-5">

                            <span class="text-blue-600 text-xs font-extrabold uppercase tracking-wider">
                                Imágenes
                            </span>

                            <h3 class="text-2xl font-black mt-1">
                                Galería
                            </h3>

                        </div>

                        
                        <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
                            ${galleryHtml}
                        </div>

                    </section>

                    <!-- VIDEOS --><section><div class="mb-5"><span class="text-blue-600 text-xs font-extrabold uppercase tracking-wider">Vídeo</span><h3 class="text-2xl font-black mt-1">Vídeo de ${car.brand.toLocaleUpperCase('es-ES')} ${car.model.toLocaleUpperCase('es-ES')}</h3></div><a class="block w-full max-w-sm group" target="_blank" rel="noopener noreferrer" href="${m.brand==='Silence'&&m.model==='S01'?'https://www.youtube.com/watch?v=zx3tL0plQs4':'https://www.youtube.com/results?search_query='+encodeURIComponent(m.brand+' '+m.model+' official')}"><div class="relative rounded-xl overflow-hidden aspect-video bg-slate-900"><img src="${car.images[0]||''}" alt="Vídeo de ${car.brand} ${car.model}" class="w-full h-full object-cover group-hover:scale-105 transition duration-300" loading="lazy"><span class="absolute inset-0 flex items-center justify-center"><span class="bg-red-600 text-white rounded-xl px-5 py-3 shadow-lg"><i class="fa-solid fa-play"></i></span></span></div><span class="block mt-2 text-sm font-semibold text-slate-700 group-hover:text-blue-600">${m.brand==='Silence'&&m.model==='S01'?'Ver vídeo en YouTube':'Buscar vídeo del modelo en YouTube'}</span></a></section>

                    <!-- CONCLUSION -->

                    <section class="border-t border-slate-200 pt-10">

                        <div class="mb-7">

                            <span class="text-blue-600 text-xs font-extrabold uppercase tracking-wider">
                                Conclusión electricos.eu
                            </span>

                            <h3 class="text-2xl sm:text-3xl font-black mt-1">
                                Nuestra conclusión
                            </h3>

                        </div>

                        <div class="grid md:grid-cols-2 border border-slate-200 rounded-3xl overflow-hidden bg-white">

                            <div class="p-6 sm:p-8 md:border-r border-slate-200">

                                <div class="flex items-center gap-3 mb-5">

                                    <div
                                        class="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">

                                        <i class="fa-solid fa-plus"></i>

                                    </div>

                                    <h4 class="font-black text-lg">
                                        Lo mejor
                                    </h4>

                                </div>

                                <ul class="space-y-4 text-sm text-slate-700">
                                    ${positives}
                                </ul>

                            </div>

                            <div class="p-6 sm:p-8 border-t md:border-t-0 border-slate-200">

                                <div class="flex items-center gap-3 mb-5">

                                    <div
                                        class="w-9 h-9 rounded-xl bg-slate-100 text-slate-500 flex items-center justify-center">

                                        <i class="fa-solid fa-minus"></i>

                                    </div>

                                    <h4 class="font-black text-lg">
                                        A tener en cuenta
                                    </h4>

                                </div>

                                <ul class="space-y-4 text-sm text-slate-700">
                                    ${considerations}
                                </ul>

                            </div>

                        </div>

                    </section>

                    <!-- BRAND / AUTOMOTIVE GROUP -->${brandInfoHtml}

                    <!-- DATA -->

                    <section class="border-t border-slate-200 pt-7">

                        <div class="flex flex-col sm:flex-row justify-between gap-5">

                            <div>

                                <div class="flex items-center gap-2">

                                    <i class="fa-solid fa-shield-halved text-blue-600"></i>

                                    <strong class="text-sm">
                                        Estado de los datos
                                    </strong>

                                </div>

                                <p class="text-xs text-slate-500 mt-2">

                                    ${car.dataStatus.status} ·
                                    Última comprobación:
                                    ${car.dataStatus.checkedAt}

                                </p>

                                <p class="text-xs text-slate-400 mt-1">

                                    Datos obtenidos de fuentes oficiales de los fabricantes y organismos europeos de referencia.

                                </p>

                            </div>

                            <a href="${car.brandUrl}"
                                target="_blank"
                                rel="noopener"
                                class="h-fit border border-slate-300 hover:border-blue-600 hover:text-blue-600 px-4 py-2.5 rounded-xl text-xs font-bold transition">

                                Web oficial

                                <i class="fa-solid fa-arrow-up-right-from-square ml-1"></i>

                            </a>

                        </div>

                    </section>

                </div>

            `;
document.getElementById('car-modal')?.classList.remove('hidden');document.body.style.overflow='hidden';
}
function scrollMotoGallery(delta){const el=motoEl("moto-gallery-strip");if(el)el.scrollBy({left:delta*el.clientWidth*.8,behavior:"smooth"});}
let motoLightboxIndex=0;
function renderMotoLightbox(){const m=window.activeMoto;if(!m?.images?.length)return;const img=motoEl('lightbox-image');if(img){img.src=m.images[motoLightboxIndex];img.alt=m.brand+' '+m.model+' · fotografía '+(motoLightboxIndex+1);img.style.transform='scale(1)';}const count=motoEl('lightbox-count');if(count)count.textContent=(motoLightboxIndex+1)+' / '+m.images.length;const title=motoEl('lightbox-title');if(title)title.textContent=(m.brand+' '+m.model).toUpperCase();}
function openMotoLightbox(index){const m=window.activeMoto;if(!m?.images?.length)return;motoLightboxIndex=((index%m.images.length)+m.images.length)%m.images.length;renderMotoLightbox();motoEl('photo-lightbox')?.classList.remove('hidden');document.body.style.overflow='hidden';}
function closeLightbox(){motoEl('photo-lightbox')?.classList.add('hidden');document.body.style.overflow=motoEl('car-modal')?.classList.contains('hidden')?'':'hidden';}
function moveLightbox(delta){const m=window.activeMoto;if(!m?.images?.length)return;motoLightboxIndex=(motoLightboxIndex+delta+m.images.length)%m.images.length;renderMotoLightbox();}
function toggleLightboxZoom(event){if(event?.target?.closest('button')&&event.target.closest('button').id!=='lightbox-zoom')return;const img=motoEl('lightbox-image');if(img)img.style.transform=img.style.transform==='scale(2)'?'scale(1)':'scale(2)';}
document.addEventListener('keydown',e=>{if(!motoEl('photo-lightbox')?.classList.contains('hidden')){if(e.key==='Escape')closeLightbox();if(e.key==='ArrowLeft')moveLightbox(-1);if(e.key==='ArrowRight')moveLightbox(1);}});
function closeCarModal(){motoEl('car-modal')?.classList.add('hidden');document.body.style.overflow='';}

/* Comparador de motos: selección de hasta cuatro modelos. */
const motoCompareSelected=new Set();
function toggleCompare(encoded){
 const key=decodeURIComponent(encoded);
 if(motoCompareSelected.has(key))motoCompareSelected.delete(key);
 else if(motoCompareSelected.size<4)motoCompareSelected.add(key);
 else {alert('Puedes comparar un máximo de 4 motos.');return;}
 renderMotoCompare();
}
function clearCompare(){motoCompareSelected.clear();renderMotoCompare();}
function renderMotoCompare(){
 const bar=document.getElementById('compare-bar'),count=document.getElementById('compare-count'),chips=document.getElementById('compare-chips'),open=document.getElementById('compare-open-button');
 if(bar)bar.classList.toggle('hidden',!motoCompareSelected.size);
 if(count)count.textContent=motoCompareSelected.size+' de 4 motos';
 if(chips)chips.innerHTML=[...motoCompareSelected].map(key=>'<button type="button" class="bg-slate-800 text-white px-3 py-1.5 rounded-lg text-xs whitespace-nowrap" onclick="toggleCompare(decodeURIComponent(this.dataset.moto))" data-moto="'+encodeURIComponent(key)+'">'+key.replace('|',' ')+' ×</button>').join('');
 if(open)open.disabled=motoCompareSelected.size<2;
 document.querySelectorAll('.car-card[data-moto]').forEach(card=>{
  const selected=motoCompareSelected.has(decodeURIComponent(card.dataset.moto));
  const button=card.querySelector('.car-compare');
  if(button){button.classList.toggle('is-selected',selected);button.setAttribute('aria-pressed',String(selected));button.innerHTML='<i class="fa-solid fa-code-compare"></i> '+(selected?'Seleccionada':'Comparar');}
 });
}
function openCompareModal(){
 if(motoCompareSelected.size<2)return;
 const models=[...motoCompareSelected].map(key=>motorcycles.find(m=>m.brand+'|'+m.model===key)).filter(Boolean);
 const fields=[['Precio',m=>motoStat(m, 'priceEur', '€')],['Autonomía',m=>motoStat(m, 'rangeKm', 'km')],['Batería',m=>motoStat(m, 'batteryKwh', 'kWh')],['Potencia nominal',m=>m.powerKw==null?'No publicado':m.powerKw+' kW'],['Potencia máxima',m=>m.peakPowerKw==null?'No publicado':m.peakPowerKw+' kW'],['Velocidad máxima',m=>m.topSpeedKmh==null?'No publicado':m.topSpeedKmh+' km/h'],['Batería extraíble',m=>m.removableBattery==null?'Por verificar':m.removableBattery?'Sí':'No'],['Carnet mínimo',minimumMotoLicense],['Peso',m=>m.weightKg?m.weightKg+' kg':'Por verificar'],['Carga',m=>m.brand==='Silence'&&m.model==='S01'?'7–9 h · batería intercambiable':m.brand==='BMW'?(m.model==='CE 02'?m.chargeText:'AC 2,3 kW · opc. 6,9 kW'):m.brand==='Zero'?'AC 6,6 kW · opc. 12,6 kW':m.chargeText||'Por verificar'],['Garantía',m=>m.warranty?[m.warranty.vehicle,m.warranty.battery].join(' · '):m.brand==='Silence'&&m.model==='S01'?'Consultar fabricante':m.brand==='BMW'?(m.model==='CE 02'?'Consultar condiciones de la unidad':'Moto 5 años · batería 5 años/40.000 km'):m.brand==='Zero'?'5 años · km ilimitados':m.guarantee||'Por verificar']];
 const cell=(value,head=false)=>'<'+(head?'th':'td')+' class="px-4 py-4 text-left border-b border-slate-200 min-w-[150px]">'+(value??'Por verificar')+'</'+(head?'th':'td')+'>';
 const bestRules={'Precio':{get:m=>m.versions ? null : m.priceEur,low:true},'Autonomía':{get:m=>m.versions ? null : m.rangeKm},'Batería':{get:m=>m.versions ? null : m.batteryKwh},'Potencia nominal':{get:m=>m.powerKw},'Potencia máxima':{get:m=>m.peakPowerKw},'Velocidad máxima':{get:m=>m.topSpeedKmh},'Peso':{get:m=>m.weightKg,low:true}};
 const bestBadge='<span class="inline-flex ml-2 px-1.5 py-0.5 rounded-md bg-blue-50 text-blue-600 text-[9px] font-extrabold uppercase tracking-wide">Mejor</span>';
 const table='<div class="overflow-x-auto"><table class="w-full text-sm"><thead><tr>'+cell('Dato',true)+models.map(m=>cell(m.brand+' '+m.model,true)).join('')+'</tr></thead><tbody>'+fields.map(([name,fn])=>{
 const rule=bestRules[name],values=rule?models.map(rule.get).filter(v=>typeof v==='number'&&Number.isFinite(v)):[],best=values.length>=2?(rule.low?Math.min(...values):Math.max(...values)):null;
 return '<tr>'+cell(name,true)+models.map(m=>cell(fn(m)+(best!==null&&rule.get(m)===best?bestBadge:''))).join('')+'</tr>';
 }).join('')+'</tbody></table></div>';
 const content=document.getElementById('compare-modal-content');
 if(content)content.innerHTML='<div class="p-5 sm:p-8"><div class="flex justify-between items-center gap-4 mb-6"><h2 class="text-2xl font-black">Comparar motos eléctricas</h2><button type="button" onclick="closeCompareModal()" class="px-4 py-2 bg-slate-100 rounded-lg">Cerrar ×</button></div>'+table+'<p class="text-xs text-slate-500 mt-5">Precios con IVA y sin ayudas. Autonomías declaradas por el fabricante.</p></div>';
 document.getElementById('compare-modal')?.classList.remove('hidden');document.body.style.overflow='hidden';
}
function closeCompareModal(){document.getElementById('compare-modal')?.classList.add('hidden');document.body.style.overflow='';}

function showMotoRanking(active){
 window.motoRankingActive=active;document.body.dataset.catalogueView=active?'ranking':'catalogue';
 const panel=motoEl('ranking-panel'),filters=motoEl('filters-panel');
 if(panel)panel.hidden=!active;
 if(filters)filters.hidden=active;
 const title=motoEl('page-title');if(title&&!selectedMotoBrand)title.textContent=active?'RANKING DE MOTOS ELÉCTRICAS':'EXPLORA LAS MOTOS ELÉCTRICAS';const catalogBtn=motoEl('catalogue-view-btn');if(catalogBtn)catalogBtn.setAttribute('aria-pressed',String(!active));const rankBtn=motoEl('ranking-view-btn');
 if(rankBtn)rankBtn.setAttribute('aria-pressed',String(active));
 const sort=motoEl('sort-filter');
 if(sort)sort.closest('label')?.classList.toggle('hidden',active);
 updateRankingMetric();
}
function updateRankingMetric(){
 const select=motoEl('ranking-metric'),desc=motoEl('ranking-explanation');
 const descriptions={priceAsc:'Precio más bajo',rangeDesc:'Mayor autonomía',powerDesc:'Mayor potencia máxima',speedDesc:'Mayor velocidad máxima',batteryDesc:'Mayor capacidad de batería',accelerationAsc:'Mejor aceleración de 0 a 50 km/h'};
 if(desc)desc.textContent=descriptions[select?.value]||'Ranking de motos';
 filterCars();
}
