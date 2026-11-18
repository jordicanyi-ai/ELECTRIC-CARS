const motoEl=id=>document.getElementById(id);
const motoFields=['moto-type','moto-license','moto-removable','moto-power','moto-speed','moto-charge','moto-seats','range-filter','price-filter'];
function toggleMobileFilters(){const p=motoEl('filters-panel');p.hidden=!p.hidden;motoEl('filters-toggle').setAttribute('aria-expanded',String(!p.hidden));}
function resetFilters(){motoFields.forEach(id=>{const e=motoEl(id);if(!e)return;e.value=id==='price-filter'?'30000':id==='range-filter'||id==='moto-power'||id==='moto-speed'?'0':''});motoEl('hero-search').value='';filterCars();}
function syncHeroSearch(){filterCars();}
function filterCars(){
 const v=id=>motoEl(id)?.value||'';
 const q=v('hero-search').trim().toLocaleLowerCase('es');
 const type=v('moto-type'),license=v('moto-license'),removable=v('moto-removable'),power=Number(v('moto-power')),speed=Number(v('moto-speed')),charge=v('moto-charge'),seats=v('moto-seats'),range=Number(v('range-filter')),price=Number(v('price-filter'));
 const filtered=motorcycles.filter(m=>(!q||(m.brand+' '+m.model+' '+m.category).toLocaleLowerCase('es').includes(q))&&(!type||m.category===type)&&(!license||(Array.isArray(m.licenses)&&m.licenses.includes(license)))&&(!removable||(m.removableBattery!=null&&(removable==='yes')===m.removableBattery))&&(!power||(m.powerKw!=null&&m.powerKw>=power))&&(!speed||(m.topSpeedKmh!=null&&m.topSpeedKmh>=speed))&&(!charge||(m.fastCharge!=null&&(charge==='yes')===m.fastCharge))&&(!seats||(m.seats!=null&&String(m.seats)===seats))&&(!range||(m.rangeKm!=null&&m.rangeKm>=range))&&(price===30000||(m.priceEur!=null&&m.priceEur<=price)));
 window.motoVisibleList=filtered;window.motoImageIndexes={};const sort=v('sort-filter');if(sort==='priceAsc')filtered.sort((a,b)=>(a.priceEur??Infinity)-(b.priceEur??Infinity));else if(sort==='rangeDesc')filtered.sort((a,b)=>(b.rangeKm??-1)-(a.rangeKm??-1));else if(sort==='brandAsc')filtered.sort((a,b)=>(a.brand+a.model).localeCompare(b.brand+b.model));
 motoEl('range-val').textContent=range+' km';motoEl('price-val').textContent=price===30000?'Sin límite':price.toLocaleString('es-ES')+' €';
 const active=Number(Boolean(type))+Number(Boolean(license))+Number(Boolean(removable))+Number(Boolean(power))+Number(Boolean(speed))+Number(Boolean(charge))+Number(Boolean(seats))+Number(Boolean(range))+Number(price<30000);
 const badge=motoEl('active-filter-count');badge.hidden=!active;badge.textContent=active;
 document.querySelectorAll('[data-moto-quick]').forEach(b=>{const k=b.dataset.motoQuick;const on=k==='all'?!active&&!q:k==='price'?price===5000:k==='range'?range===100:k==='scooter'?type==='Scooter':k==='removable'?removable==='yes':license===k;b.setAttribute('aria-pressed',String(on))});
 motoEl('results-count').textContent=filtered.length+' '+(filtered.length===1?'moto':'motos')+' de muestra';
 motoEl('cars-grid').innerHTML=filtered.length?'<div class="catalogue-batch">'+filtered.map((m,i)=>{
 const name=(m.brand+' '+m.model).toLocaleUpperCase('es-ES');
 const priceText=m.priceEur==null?'Por verificar':m.priceEur.toLocaleString('es-ES')+' €';
 const rangeText=m.rangeKm==null?'Por verificar':m.rangeKm+' km';
 const powerText=m.powerKw==null?'Por verificar':m.powerKw+' kW';
 const speedText=m.topSpeedKmh==null?'Por verificar':m.topSpeedKmh+' km/h';
 const batteryText=m.removableBattery==null?'Por verificar':m.removableBattery?'Sí':'No';
 return '<article class="car-card" data-moto="'+encodeURIComponent(m.brand+'|'+m.model)+'"><div class="car-photo" onclick="openMotoModal(this.closest(\'article\').dataset.moto)" style="cursor:pointer">'+(m.images?.length?'<img id="moto-img-'+i+'" src="'+m.images[0]+'" alt="'+name+'" loading="lazy">'+(m.images.length>1?'<button type="button" class="car-arrow car-arrow-prev" onclick="changeMotoSlide('+i+',-1,event)" aria-label="Foto anterior"><i class="fa-solid fa-chevron-left"></i></button><button type="button" class="car-arrow car-arrow-next" onclick="changeMotoSlide('+i+',1,event)" aria-label="Foto siguiente"><i class="fa-solid fa-chevron-right"></i></button><div id="moto-dots-'+i+'" class="car-dots">'+m.images.map((_,n)=>'<span class="'+(n===0?'current':'')+'"></span>').join('')+'</div>':''):m.image?'<img src="'+m.image+'" alt="'+name+'" loading="lazy">':'<div style="height:100%;display:grid;place-items:center;color:#64748b"><i class="fa-solid fa-motorcycle fa-3x"></i></div>')+'<span class="car-type">'+m.category+'</span></div><div class="car-content"><div class="car-brand">'+m.brand.toLocaleUpperCase('es-ES')+'</div><h2 class="car-title">'+m.model.toLocaleUpperCase('es-ES')+'</h2><div class="car-primary-specs"><div><i class="fa-solid fa-tag"></i><strong>'+priceText+'</strong><small>Precio sin ayudas · por verificar</small></div><div><i class="fa-solid fa-road"></i><strong>'+rangeText+'</strong><small>Autonomía declarada</small></div></div><div class="car-secondary-specs"><div><i class="fa-solid fa-bolt"></i><strong>'+powerText+'</strong><small>Potencia nominal</small></div><div><i class="fa-solid fa-gauge-high"></i><strong>'+speedText+'</strong><small>Velocidad máxima</small></div><div><i class="fa-solid fa-battery-full"></i><strong>'+batteryText+'</strong><small>Batería extraíble</small></div></div><div class="car-actions"><button type="button" class="car-open" '+'onclick="openMotoModal(this.closest(\'article\').dataset.moto)"'+'>Ver ficha <i class="fa-solid fa-arrow-right"></i></button><button type="button" class="car-compare" disabled title="Comparador pendiente de adaptación"><i class="fa-solid fa-code-compare"></i> Comparar</button></div></div></article>';
 }).join('')+'</div>':'<div class="empty-results"><p>No encontramos motos con estos filtros</p><button type="button" onclick="resetFilters()">Limpiar filtros</button></div>';
}
function applyMotoQuick(k){const pressed=document.querySelector('[data-moto-quick="'+k+'"]')?.getAttribute('aria-pressed')==='true';resetFilters();if(!pressed){if(k==='price')motoEl('price-filter').value='5000';else if(k==='range')motoEl('range-filter').value='100';else if(k==='scooter')motoEl('moto-type').value='Scooter';else if(k==='removable')motoEl('moto-removable').value='yes';else if(['AM','A1','A2','A','B'].includes(k))motoEl('moto-license').value=k;}filterCars();}
document.addEventListener('DOMContentLoaded',()=>{motoFields.forEach(id=>motoEl(id)?.addEventListener(id.includes('filter')&&['range-filter','price-filter'].includes(id)?'input':'change',filterCars));motoEl('hero-search')?.addEventListener('input',filterCars);motoEl('sort-filter')?.addEventListener('change',filterCars);motoEl('moto-reset')?.addEventListener('click',resetFilters);document.querySelectorAll('[data-moto-quick]').forEach(b=>b.addEventListener('click',()=>applyMotoQuick(b.dataset.motoQuick)));const sort=motoEl('sort-filter');if(sort){sort.innerHTML='<option value="random">Aleatorio</option><option value="priceAsc">Precio: menor primero</option><option value="rangeDesc">Autonomía: mayor primero</option><option value="brandAsc">Marca: A–Z</option>';}filterCars();});

function changeMotoSlide(i,delta,event){event?.stopPropagation();const list=window.motoVisibleList||[];const m=list[i];if(!m?.images?.length)return;const indexes=window.motoImageIndexes||(window.motoImageIndexes={});const n=indexes[i]=((indexes[i]||0)+delta+m.images.length)%m.images.length;const img=motoEl('moto-img-'+i);if(img)img.src=m.images[n];motoEl('moto-dots-'+i)?.querySelectorAll('span').forEach((dot,j)=>dot.classList.toggle('current',j===n));}

function openMotoModal(model){
const parts=decodeURIComponent(model).split('|');const m=motorcycles.find(x=>x.brand===parts[0]&&x.model===parts[1])||motorcycles.find(x=>x.model===model);if(!m)return;window.activeMoto=m;
const car={id:0,brand:m.brand,model:m.model,type:'Scooter',images:m.images,priceText:m.priceEur?.toLocaleString('es-ES')+' €',rangeText:m.rangeKm+' km',batteryText:m.batteryKwh+' kWh',powerText:m.powerKw+' kW',topSpeed:m.topSpeedKmh+' km/h',seats:m.seats||2,description:'Scooter eléctrico urbano equivalente a 125 cc, con batería extraíble tipo trolley. Dispone de soluciones de carga doméstica e intercambio de batería en estaciones compatibles.',idealFor:['Movilidad urbana','Batería extraíble','Carnet A1 o B con más de 3 años'],trims:[{name:'S01 · batería en propiedad',price:m.priceEur?.toLocaleString('es-ES')+' €',battery:m.batteryKwh+' kWh',range:m.rangeKm+' km WMTC',power:m.powerKw+' kW',accel:m.accel0050Sec+' s'}],warranty:{vehicle:'3 años (España)',battery:'3 años o 360 ciclos, lo que ocurra primero',capacity:'No especificada por el fabricante'},colors:[],highlights:['Batería extraíble con ruedas para facilitar el transporte.','Autonomía homologada de 133 km WMTC.','Disponible el intercambio de batería donde exista una estación compatible.'],considerations:['La batería pesa aproximadamente 41 kg.','La carga doméstica puede requerir entre 7 y 9 horas.','Las condiciones de compra y suscripción de batería son diferentes.'],brandInfo:{logo:'',group:'España · ACCIONA',note:'Fabricante español especializado en movilidad eléctrica.'},dataStatus:{status:'Datos técnicos pendientes de revisión final',checkedAt:'18/11/2026'},brandUrl:'https://www.silence.eco/es',tech:[['Dimensiones',m.dimensions,'ruler-combined'],['Carga doméstica',m.chargeText,'plug'],['0–50 km/h',m.accelerationText,'gauge-high'],['Carnet','A1 / A / B (+3 años)','id-card'],['Batería extraíble','Sí · trolley','battery-full'],['Peso de la batería',m.batteryWeightKg+' kg','weight-hanging'],['Peso con batería',m.weightKg+' kg','motorcycle'],['Velocidad máxima',m.topSpeedKmh+' km/h','gauge-high'],['Homologación','L3e · equivalente 125 cc','motorcycle']]};
if(m.brand!=='Silence'){car.type=m.category;car.images=m.images||[];car.description=m.brand==='BMW'?'El BMW CE 04 es un scooter eléctrico de diseño futurista pensado para desplazamientos urbanos y metropolitanos. Combina una potencia nominal de 15 kW con picos de 31 kW, alcanza los 120 km/h y anuncia hasta 130 km de autonomía. Su batería integrada de 8,9 kWh no es extraíble: se recarga conectando la moto a la corriente, con una opción de carga AC de 6,9 kW. Ofrece aceleraciones ágiles, equipamiento tecnológico y un enfoque práctico para el día a día, aunque su precio y la necesidad de disponer de un punto de carga son aspectos a valorar.':'La Zero SR/F es una moto eléctrica naked orientada a quienes buscan prestaciones y sensaciones deportivas sin renunciar a la movilidad eléctrica. Su motor entrega hasta 83 kW de potencia máxima y permite alcanzar los 200 km/h. Equipa una batería integrada de 17,3 kWh, no extraíble, y declara hasta 283 km de autonomía en ciudad; fuera de ella, especialmente a velocidades de autopista, la autonomía es inferior. Admite carga en corriente alterna y destaca por su respuesta inmediata al acelerador. Antes de elegirla conviene valorar el precio, el tipo de trayectos habituales y el acceso a un punto de carga.';car.idealFor=m.brand==='BMW'?['Ciudad','Scooter premium','Carnet A2 o A']:['Conducción deportiva','Moto naked','Carnet A'];car.trims=[{name:m.brand+' '+m.model,price:m.priceEur?.toLocaleString('es-ES')+' €',battery:m.batteryKwh+' kWh',range:m.rangeKm+' km',power:m.powerKw+' kW',accel:m.accel0050Sec?m.accel0050Sec+' s':'No disponible'}];car.warranty=m.brand==='BMW'?{vehicle:'5 años sin límite de kilometraje',battery:'5 años o 40.000 km',capacity:'Consultar condiciones'}:{vehicle:'Consultar garantía de fábrica y ampliación opcional',battery:'5 años sin límite de kilometraje',capacity:'Consultar condiciones'};car.highlights=m.brand==='BMW'?['Potencia máxima de 31 kW.','Carga AC de hasta 6,9 kW opcional.']:['Potencia máxima de 83 kW.','Autonomía urbana declarada de 283 km.'];car.considerations=m.brand==='BMW'?['La batería no es extraíble.','La carga rápida AC es opcional.']:['La autonomía declarada corresponde a uso urbano.','La autonomía real depende del recorrido.'];car.brandInfo={logo:'',group:m.brand==='BMW'?'Alemania · BMW Motorrad':'Estados Unidos · Zero Motorcycles',note:''};car.brandUrl=m.source;car.tech=[['Carga',m.chargeText||'Consultar','plug'],['Velocidad máxima',m.topSpeedKmh+' km/h','gauge-high'],['Carnet',m.licenses?.join(' / ')||'Consultar','id-card'],['Batería extraíble','No','battery-full'],['Peso',m.weightKg?m.weightKg+' kg':'No disponible','weight-hanging']];}
const trimsHtml=car.trims.map(trim=>`<div class="border border-slate-200 rounded-2xl p-5 bg-white"><div class="text-xs text-blue-600 font-extrabold uppercase">${trim.name}</div><div class="text-xl font-black mt-1">${trim.price}</div><div class="text-[10px] text-slate-400">IVA incluido · Sin ayudas</div><div class="grid grid-cols-2 gap-3 mt-5 text-sm">${[['Batería',trim.battery],['Autonomía',trim.range],['Potencia',trim.power],['0–50 km/h',trim.accel]].map(([k,v])=>'<div><span class="text-slate-400 text-xs block">'+k+'</span><strong>'+v+'</strong></div>').join('')}</div></div>`).join('');
const colorsHtml=(m.brand==='Silence'?[['Blanco','#f5f5f3'],['Negro','#181818'],['Rojo','#a41f35']]:m.brand==='BMW'?[['Light White','#f5f5f3'],['Gravity Blue','#54637a'],['Spacesilver','#a9adb3']]:[['Limited Edition','#444444']]).map(([name,hex])=>`<span class="inline-flex items-center gap-3 text-sm font-medium text-slate-700"><span class="w-8 h-8 rounded-full border border-slate-300 shadow-sm" style="background:${hex}"></span>${name}</span>`).join('');
const galleryHtml=car.images.map((img,index)=>`<button type="button" onclick="openMotoLightbox(${index})" aria-label="Ampliar fotografía ${index+1}" class="block w-full min-w-0 text-left rounded-2xl overflow-hidden bg-slate-100 aspect-[4/3] cursor-zoom-in group"><img src="${img}" alt="Silence S01" class="w-full h-full object-cover group-hover:scale-105 transition duration-500"></button>`).join('');
const positives=car.highlights.map(item=>'<li class="flex gap-3"><span class="text-blue-600 font-black text-base leading-5">+</span><span>'+item+'</span></li>').join('');
const considerations=car.considerations.map(item=>'<li class="flex gap-3"><span class="text-slate-400 font-black text-base leading-5">−</span><span>'+item+'</span></li>').join('');
const idealFor=car.idealFor.map(item=>'<span class="bg-slate-100 text-slate-600 border border-slate-200 px-3 py-1.5 rounded-full text-[11px] font-bold">'+item+'</span>').join('');
const brandInfoHtml='<section class="border-t border-slate-200 pt-8"><div class="border border-slate-200 rounded-2xl p-5 sm:p-6 bg-white"><span class="text-[10px] uppercase tracking-wider text-slate-400 font-bold">La marca</span>'+(m.brand==='BMW'?'<img src="https://commons.wikimedia.org/wiki/Special:Redirect/file/Logo_BMW_Motorrad_2021.svg" alt="BMW Motorrad" class="h-7 sm:h-8 w-auto max-w-[140px] object-contain" loading="lazy">':m.brand==='Zero'?'<h3 class="text-xl font-black">ZERO MOTORCYCLES</h3>':'<h3 class="text-xl font-black">SILENCE</h3>')+'<p class="text-xs sm:text-sm text-slate-500 mt-2">'+car.brandInfo.group+'</p></div></section>';
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

                    <!-- VIDEOS --><section><div class="mb-5"><span class="text-blue-600 text-xs font-extrabold uppercase tracking-wider">Vídeo</span><h3 class="text-2xl font-black mt-1">Vídeo de ${car.brand.toLocaleUpperCase('es-ES')} ${car.model.toLocaleUpperCase('es-ES')}</h3></div><a class="block w-full max-w-sm group" target="_blank" rel="noopener noreferrer" href="${m.brand==='Silence'?'https://www.youtube.com/watch?v=zx3tL0plQs4':'https://www.youtube.com/results?search_query='+encodeURIComponent(m.brand+' '+m.model+' official')}"><div class="relative rounded-xl overflow-hidden aspect-video bg-slate-900"><img src="${car.images[0]||''}" alt="Vídeo de ${car.brand} ${car.model}" class="w-full h-full object-cover group-hover:scale-105 transition duration-300" loading="lazy"><span class="absolute inset-0 flex items-center justify-center"><span class="bg-red-600 text-white rounded-xl px-5 py-3 shadow-lg"><i class="fa-solid fa-play"></i></span></span></div><span class="block mt-2 text-sm font-semibold text-slate-700 group-hover:text-blue-600">${m.brand==='Silence'?'Ver vídeo en YouTube':'Buscar vídeo del modelo en YouTube'}</span></a></section>

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
function renderMotoLightbox(){const m=window.activeMoto;if(!m?.images?.length)return;const img=motoEl('lightbox-image');if(img){img.src=m.images[motoLightboxIndex];img.alt='Silence S01 · fotografía '+(motoLightboxIndex+1);img.style.transform='scale(1)';}const count=motoEl('lightbox-count');if(count)count.textContent=(motoLightboxIndex+1)+' / '+m.images.length;const title=motoEl('lightbox-title');if(title)title.textContent=(m.brand+' '+m.model).toUpperCase();}
function openMotoLightbox(index){const m=window.activeMoto;if(!m?.images?.length)return;motoLightboxIndex=((index%m.images.length)+m.images.length)%m.images.length;renderMotoLightbox();motoEl('photo-lightbox')?.classList.remove('hidden');document.body.style.overflow='hidden';}
function closeLightbox(){motoEl('photo-lightbox')?.classList.add('hidden');document.body.style.overflow=motoEl('car-modal')?.classList.contains('hidden')?'':'hidden';}
function moveLightbox(delta){const m=window.activeMoto;if(!m?.images?.length)return;motoLightboxIndex=(motoLightboxIndex+delta+m.images.length)%m.images.length;renderMotoLightbox();}
function toggleLightboxZoom(event){if(event?.target?.closest('button')&&event.target.closest('button').id!=='lightbox-zoom')return;const img=motoEl('lightbox-image');if(img)img.style.transform=img.style.transform==='scale(2)'?'scale(1)':'scale(2)';}
document.addEventListener('keydown',e=>{if(!motoEl('photo-lightbox')?.classList.contains('hidden')){if(e.key==='Escape')closeLightbox();if(e.key==='ArrowLeft')moveLightbox(-1);if(e.key==='ArrowRight')moveLightbox(1);}});
function closeCarModal(){motoEl('car-modal')?.classList.add('hidden');document.body.style.overflow='';}
