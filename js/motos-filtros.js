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
 return '<article class="car-card"><div class="car-photo">'+(m.images?.length?'<img id="moto-img-'+i+'" src="'+m.images[0]+'" alt="'+name+'" loading="lazy">'+(m.images.length>1?'<button type="button" class="car-arrow car-arrow-prev" onclick="changeMotoSlide('+i+',-1,event)" aria-label="Foto anterior"><i class="fa-solid fa-chevron-left"></i></button><button type="button" class="car-arrow car-arrow-next" onclick="changeMotoSlide('+i+',1,event)" aria-label="Foto siguiente"><i class="fa-solid fa-chevron-right"></i></button><div id="moto-dots-'+i+'" class="car-dots">'+m.images.map((_,n)=>'<span class="'+(n===0?'current':'')+'"></span>').join('')+'</div>':''):m.image?'<img src="'+m.image+'" alt="'+name+'" loading="lazy">':'<div style="height:100%;display:grid;place-items:center;color:#64748b"><i class="fa-solid fa-motorcycle fa-3x"></i></div>')+'<span class="car-type">'+m.category+'</span></div><div class="car-content"><div class="car-brand">'+m.brand.toLocaleUpperCase('es-ES')+'</div><h2 class="car-title">'+m.model.toLocaleUpperCase('es-ES')+'</h2><div class="car-primary-specs"><div><i class="fa-solid fa-tag"></i><strong>'+priceText+'</strong><small>Precio sin ayudas · por verificar</small></div><div><i class="fa-solid fa-road"></i><strong>'+rangeText+'</strong><small>Autonomía declarada</small></div></div><div class="car-secondary-specs"><div><i class="fa-solid fa-bolt"></i><strong>'+powerText+'</strong><small>Potencia nominal</small></div><div><i class="fa-solid fa-gauge-high"></i><strong>'+speedText+'</strong><small>Velocidad máxima</small></div><div><i class="fa-solid fa-battery-full"></i><strong>'+batteryText+'</strong><small>Batería extraíble</small></div></div><div class="car-actions"><button type="button" class="car-open" '+(m.brand==='Silence'&&m.model==='S01'?'onclick="openMotoModal(\'S01\')"':'disabled title="Ficha pendiente de adaptación"')+'>Ver ficha <i class="fa-solid fa-arrow-right"></i></button><button type="button" class="car-compare" disabled title="Comparador pendiente de adaptación"><i class="fa-solid fa-code-compare"></i> Comparar</button></div></div></article>';
 }).join('')+'</div>':'<div class="empty-results"><p>No encontramos motos con estos filtros</p><button type="button" onclick="resetFilters()">Limpiar filtros</button></div>';
}
function applyMotoQuick(k){const pressed=document.querySelector('[data-moto-quick="'+k+'"]')?.getAttribute('aria-pressed')==='true';resetFilters();if(!pressed){if(k==='price')motoEl('price-filter').value='5000';else if(k==='range')motoEl('range-filter').value='100';else if(k==='scooter')motoEl('moto-type').value='Scooter';else if(k==='removable')motoEl('moto-removable').value='yes';else if(['AM','A1','A2','A','B'].includes(k))motoEl('moto-license').value=k;}filterCars();}
document.addEventListener('DOMContentLoaded',()=>{motoFields.forEach(id=>motoEl(id)?.addEventListener(id.includes('filter')&&['range-filter','price-filter'].includes(id)?'input':'change',filterCars));motoEl('hero-search')?.addEventListener('input',filterCars);motoEl('sort-filter')?.addEventListener('change',filterCars);motoEl('moto-reset')?.addEventListener('click',resetFilters);document.querySelectorAll('[data-moto-quick]').forEach(b=>b.addEventListener('click',()=>applyMotoQuick(b.dataset.motoQuick)));const sort=motoEl('sort-filter');if(sort){sort.innerHTML='<option value="random">Aleatorio</option><option value="priceAsc">Precio: menor primero</option><option value="rangeDesc">Autonomía: mayor primero</option><option value="brandAsc">Marca: A–Z</option>';}filterCars();});

function changeMotoSlide(i,delta,event){event?.stopPropagation();const list=window.motoVisibleList||[];const m=list[i];if(!m?.images?.length)return;const indexes=window.motoImageIndexes||(window.motoImageIndexes={});const n=indexes[i]=((indexes[i]||0)+delta+m.images.length)%m.images.length;const img=motoEl('moto-img-'+i);if(img)img.src=m.images[n];motoEl('moto-dots-'+i)?.querySelectorAll('span').forEach((dot,j)=>dot.classList.toggle('current',j===n));}

function openMotoModal(model){
const m=motorcycles.find(x=>x.brand==='Silence'&&x.model===model);if(!m)return;
const car={id:0,brand:m.brand,model:m.model,type:'Scooter',images:m.images,priceText:m.priceEur?.toLocaleString('es-ES')+' € (referencia pendiente de verificar)',rangeText:m.rangeKm+' km',batteryText:m.batteryKwh+' kWh',powerText:m.powerKw+' kW',topSpeed:m.topSpeedKmh+' km/h',seats:m.seats||2,description:'Scooter eléctrico urbano equivalente a 125 cc, con batería extraíble tipo trolley. Dispone de soluciones de carga doméstica e intercambio de batería en estaciones compatibles.',idealFor:['Movilidad urbana','Batería extraíble','Carnet A1 o B con más de 3 años'],trims:[{name:'S01 · batería en propiedad',price:'Precio pendiente de confirmación oficial',battery:m.batteryKwh+' kWh',range:m.rangeKm+' km WMTC',power:m.powerKw+' kW',accel:m.accelerationText}],warranty:{vehicle:'Pendiente de verificar',battery:'Pendiente de verificar',capacity:'No especificada'},colors:[],highlights:['Batería extraíble con ruedas para facilitar el transporte.','Autonomía homologada de 133 km WMTC.','Disponible el intercambio de batería donde exista una estación compatible.'],considerations:['La batería pesa aproximadamente 41 kg.','La carga doméstica puede requerir entre 7 y 9 horas.','Las condiciones de compra y suscripción de batería son diferentes.'],brandInfo:{logo:'',group:'España · ACCIONA',note:'Fabricante español especializado en movilidad eléctrica.'},dataStatus:{status:'Datos técnicos pendientes de revisión final',checkedAt:'18/11/2026'},brandUrl:'https://www.silence.eco/es',tech:[['Dimensiones',m.dimensions,'ruler-combined'],['Carga doméstica',m.chargeText,'plug'],['0–50 km/h',m.accelerationText,'gauge-high'],['Carnet','A1 / A / B (+3 años)','id-card'],['Batería extraíble','Sí · trolley','battery-full'],['Peso de la batería',m.batteryWeightKg+' kg','weight-hanging'],['Peso con batería',m.weightKg+' kg','motorcycle'],['Velocidad máxima',m.topSpeedKmh+' km/h','gauge-high'],['Homologación','L3e · equivalente 125 cc','motorcycle']]};
const trimsHtml=car.trims.map(trim=>`<div class="border border-slate-200 rounded-2xl p-5 bg-white"><div class="text-xs text-blue-600 font-extrabold uppercase">${trim.name}</div><div class="text-xl font-black mt-1">${trim.price}</div><div class="text-[10px] text-slate-400">IVA incluido · Sin ayudas</div><div class="grid grid-cols-2 gap-3 mt-5 text-sm">${[['Batería',trim.battery],['Autonomía',trim.range],['Potencia',trim.power],['0–50 km/h',trim.accel]].map(([k,v])=>'<div><span class="text-slate-400 text-xs block">'+k+'</span><strong>'+v+'</strong></div>').join('')}</div></div>`).join('');
const colorsHtml='<p class="text-sm text-slate-500">Colores pendientes de verificar.</p>';
const galleryHtml=car.images.map((img,index)=>`<button type="button" onclick="openMotoLightbox(${index})" aria-label="Ampliar fotografía ${index+1}" class="block w-full text-left rounded-2xl overflow-hidden bg-slate-100 aspect-[4/3] cursor-zoom-in group"><img src="${img}" alt="Silence S01" class="w-full h-full object-cover group-hover:scale-105 transition duration-500"></button>`).join('');
const positives=car.highlights.map(item=>'<li class="flex gap-3"><span class="text-blue-600 font-black text-base leading-5">+</span><span>'+item+'</span></li>').join('');
const considerations=car.considerations.map(item=>'<li class="flex gap-3"><span class="text-slate-400 font-black text-base leading-5">−</span><span>'+item+'</span></li>').join('');
const idealFor=car.idealFor.map(item=>'<span class="bg-slate-100 text-slate-600 border border-slate-200 px-3 py-1.5 rounded-full text-[11px] font-bold">'+item+'</span>').join('');
const brandInfoHtml='<section class="border-t border-slate-200 pt-8"><div class="border border-slate-200 rounded-2xl p-5 sm:p-6 bg-white"><span class="text-[10px] uppercase tracking-wider text-slate-400 font-bold">La marca</span><h3 class="text-xl font-black">SILENCE</h3><p class="text-xs sm:text-sm text-slate-500 mt-2">España · ACCIONA. Fabricante español especializado en movilidad eléctrica.</p></div></section>';
const modal=document.getElementById('modal-content');modal.innerHTML=`

                <!-- HERO CAR -->

                <section class="relative detail-hero">

                    <div class="h-[285px] sm:h-[355px] detail-hero-image">

                        <img src="${car.images[0]}"
                            alt="${car.brand.toLocaleUpperCase('es-ES')} ${car.model.toLocaleUpperCase('es-ES')}"
                            class="w-full h-full object-cover">

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

                    <!-- VIDEOS --><section><div class="mb-5"><span class="text-blue-600 text-xs font-extrabold uppercase tracking-wider">Vídeos</span><h3 class="text-2xl font-black mt-1">Vídeos del ${car.model.toLocaleUpperCase('es-ES')}</h3></div><a class="text-sm font-semibold text-blue-600 hover:underline" href="https://www.youtube.com/results?search_query=Silence+S01" target="_blank" rel="noopener noreferrer">Buscar vídeos de la Silence S01 en YouTube</a></section>

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
function openMotoLightbox(index){const m=motorcycles.find(x=>x.brand==='Silence'&&x.model==='S01');if(!m)return;const img=m.images[index];const lightbox=document.getElementById('photo-lightbox');if(!lightbox)return;lightbox.classList.remove('hidden');const target=lightbox.querySelector('img');if(target)target.src=img;lightbox.onclick=e=>{if(e.target===lightbox)lightbox.classList.add('hidden')};}
function closeCarModal(){motoEl('car-modal')?.classList.add('hidden');document.body.style.overflow='';}
