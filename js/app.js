let currentImageIndexes = {};
        let compareCars = new Set();

        function syncHeroSearch() {
            const value = document.getElementById('hero-search').value;
            document.getElementById('search-input').value = value;
            filterCars();
        }

        function syncSidebarSearch() {
            const value = document.getElementById('search-input').value;
            document.getElementById('hero-search').value = value;
            filterCars();
        }

        function clearQuickFilterState() {
            document.querySelectorAll('.quick-filter').forEach(button => {
                button.classList.remove('ring-2', 'ring-blue-400', 'bg-slate-900');
            });
        }

        function applyQuickFilter(type, value, button) {
            resetFilters(false);
            clearQuickFilterState();

            if (type === 'price') {
                document.getElementById('price-filter').value = value;
            }

            if (type === 'range') {
                document.getElementById('range-filter').value = value;
            }

            if (type === 'family') {
                document.getElementById('seats-filter').value = '5';
            }

            if (type === 'body') {
                document.getElementById('body-filter').value = value;
            }

            if (type === 'seats') {
                document.getElementById('seats-filter').value = String(value);
            }

            if (button) {
                button.classList.add('ring-2', 'ring-blue-400', 'bg-slate-900');
            }

            filterCars();

            document.getElementById('cars-grid').scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }

        function toggleCompare(carId, event) {
            if (event) event.stopPropagation();
            if (compareCars.has(carId)) {
                compareCars.delete(carId);
            } else {
                if (compareCars.size >= 3) {
                    showCompareMessage('Puedes comparar un máximo de 3 vehículos.');
                    return;
                }
                compareCars.add(carId);
            }
            filterCars();
            renderCompareBar();
        }

        function showCompareMessage(message) {
            const old = document.getElementById('compare-toast');
            if (old) old.remove();
            const toast = document.createElement('div');
            toast.id = 'compare-toast';
            toast.className = 'fixed left-1/2 -translate-x-1/2 bottom-28 sm:bottom-24 z-[80] bg-slate-950 text-white px-4 py-3 rounded-xl shadow-2xl text-xs font-bold';
            toast.textContent = message;
            document.body.appendChild(toast);
            setTimeout(() => toast.remove(), 2200);
        }

        function removeFromCompare(carId, event) {
            if (event) event.stopPropagation();
            compareCars.delete(carId);
            filterCars();
            renderCompareBar();
            if (!document.getElementById('compare-modal').classList.contains('hidden')) {
                if (compareCars.size < 2) closeCompareModal();
                else renderCompareModal();
            }
        }

        function clearCompare() {
            compareCars.clear();
            filterCars();
            renderCompareBar();
            closeCompareModal();
        }

        function renderCompareBar() {
            const bar = document.getElementById('compare-bar');
            const chips = document.getElementById('compare-chips');
            const count = document.getElementById('compare-count');
            const button = document.getElementById('compare-open-button');
            if (!bar || !chips || !count || !button) return;
            const selected = [...compareCars].map(id => carsData.find(car => car.id === id)).filter(Boolean);
            if (!selected.length) {
                bar.classList.add('hidden');
                return;
            }
            bar.classList.remove('hidden');
            count.textContent = `${selected.length} de 3 vehículos`;
            button.disabled = selected.length < 2;
            button.textContent = selected.length < 2 ? 'Selecciona otro' : `Comparar ${selected.length} vehículos`;
            chips.innerHTML = selected.map(car => `
                <div class="compare-car-chip shrink-0 inline-flex items-center gap-2 bg-slate-800 border border-slate-700 rounded-xl pl-2 pr-1.5 py-1.5">
                    <img src="${car.images?.[0] || ''}" alt="" class="w-8 h-8 rounded-lg object-cover bg-slate-700">
                    <span class="text-[10px] sm:text-xs font-bold text-white truncate">${car.brand} ${car.model}</span>
                    <button onclick="removeFromCompare(${car.id},event)" class="w-6 h-6 rounded-full text-slate-400 hover:text-white hover:bg-slate-700 shrink-0" aria-label="Quitar ${car.brand} ${car.model}">
                        <i class="fa-solid fa-xmark"></i>
                    </button>
                </div>`).join('');
        }

        function getCompareSelection(car, trimIndex) {
            if (trimIndex === 'range' || trimIndex === undefined || trimIndex === null) {
                return {
                    price: car.priceText || '—', range: car.rangeText || '—',
                    battery: car.batteryText || '—', batteryType: car.batteryType || '—',
                    power: car.powerText || '—', accel: car.acceleration || '—',
                    trunk: car.trunk != null ? `${car.trunk} L` : '—',
                    seats: car.seats != null ? `${car.seats}` : '—',
                    charging: compactCompareCharging(car.chargingInfo?.dcMax || car.charging || '—'),
                    dimensions: car.dimensions || '—'
                };
            }
            const trim = car.trims?.[Number(trimIndex)];
            if (!trim) return getCompareSelection(car, 'range');
            return {
                price: trim.price || '—', range: trim.range || '—',
                battery: trim.battery || '—', batteryType: trim.batteryType || car.batteryType || '—',
                power: trim.power || '—', accel: trim.accel || '—',
                trunk: car.trunk != null ? `${car.trunk} L` : '—',
                seats: car.seats != null ? `${car.seats}` : '—',
                charging: compactCompareCharging(trim.charging || car.chargingInfo?.dcMax || car.charging || '—'),
                dimensions: car.dimensions || '—'
            };
        }

        function compareSelectOptions(car, selectedValue) {
            const options = [`<option value="range" ${selectedValue === 'range' ? 'selected' : ''}>Gama completa</option>`];
            (car.trims || []).forEach((trim, index) => {
                options.push(`<option value="${index}" ${String(selectedValue) === String(index) ? 'selected' : ''}>${trim.name}</option>`);
            });
            return options.join('');
        }

        function openCompareModal() {
            if (compareCars.size < 2) {
                showCompareMessage('Selecciona al menos 2 vehículos.');
                return;
            }
            renderCompareModal();
            document.getElementById('compare-modal').classList.remove('hidden');
            document.body.style.overflow = 'hidden';
        }

        function closeCompareModal() {
            const modal = document.getElementById('compare-modal');
            if (modal) modal.classList.add('hidden');
            const carModal = document.getElementById('car-modal');
            if (!carModal || carModal.classList.contains('hidden')) document.body.style.overflow = '';
        }

        function updateCompareVersion(carId, value) {
            const select = document.getElementById(`compare-version-${carId}`);
            if (select) select.dataset.selected = value;
            renderCompareModal();
        }

        function compareMetricNumbers(value) {
            if (value === null || value === undefined) return [];
            const normalized = String(value)
                .replace(/\./g, '')
                .replace(',', '.');
            const matches = normalized.match(/\d+(?:\.\d+)?/g);
            return matches ? matches.map(Number) : [];
        }

        function compareMetricValue(data, key) {
            const nums = compareMetricNumbers(data[key]);
            if (!nums.length) return null;

            if (key === 'price') return Math.min(...nums);
            if (key === 'range') return Math.max(...nums);
            if (key === 'trunk') return Math.max(...nums);

            return null;
        }

        function compactCompareCharging(value) {
            if (!value) return '—';
            const raw = String(value).trim();

            const rangeMatch = raw.match(/(\d+(?:[.,]\d+)?)\s*(?:-|–|a)\s*(\d+(?:[.,]\d+)?)\s*kW/i);
            if (rangeMatch) return `${rangeMatch[1]}–${rangeMatch[2]} kW`;

            const singleMatch = raw.match(/(\d+(?:[.,]\d+)?)\s*kW/i);
            if (singleMatch) return `${singleMatch[1]} kW`;

            return raw;
        }

        function renderCompareModal() {
            const modal = document.getElementById('compare-modal-content');
            if (!modal) return;
            const selectedCars = [...compareCars].map(id => carsData.find(car => car.id === id)).filter(Boolean);
            if (selectedCars.length < 2) { closeCompareModal(); return; }

            const selections = selectedCars.map(car => {
                const existing = document.getElementById(`compare-version-${car.id}`);
                const value = existing?.dataset.selected ?? existing?.value ?? 'range';
                return { car, value, data: getCompareSelection(car, value) };
            });

            const bestCompareValues = {};
            ['price', 'range', 'trunk'].forEach(key => {
                const values = selections
                    .map(({ data }) => compareMetricValue(data, key))
                    .filter(value => value !== null && Number.isFinite(value));

                if (values.length) {
                    bestCompareValues[key] = key === 'price'
                        ? Math.min(...values)
                        : Math.max(...values);
                }
            });

            const rows = [
                ['Precio', 'price', 'fa-tag'], ['Autonomía WLTP', 'range', 'fa-road'],
                ['Batería', 'battery', 'fa-battery-full'], ['Química', 'batteryType', 'fa-flask'],
                ['Potencia', 'power', 'fa-bolt'], ['0-100 km/h', 'accel', 'fa-gauge-high'],
                ['Maletero', 'trunk', 'fa-suitcase'], ['Plazas', 'seats', 'fa-user-group'],
                ['Carga rápida', 'charging', 'fa-bolt-lightning'], ['Dimensiones', 'dimensions', 'fa-ruler-combined']
            ];
            const mobileCompare = window.innerWidth < 640;
            const compareLabelWidth = mobileCompare ? 112 : 132;
            const compareCarWidth = mobileCompare ? 178 : 210;
            const minWidth = compareLabelWidth + selectedCars.length * compareCarWidth;

            modal.innerHTML = `
                <div class="sticky top-0 z-30 bg-white/95 backdrop-blur border-b border-slate-200 px-4 sm:px-7 py-4 flex items-center justify-between">
                    <div><span class="text-[10px] text-blue-600 font-extrabold uppercase tracking-[0.16em]">electricos.eu</span><h2 class="text-xl sm:text-2xl font-black mt-0.5">Comparar vehículos</h2></div>
                    <button onclick="closeCompareModal()" class="w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600"><i class="fa-solid fa-xmark"></i></button>
                </div>
                <div class="px-4 sm:px-7 pt-5"><p class="text-xs sm:text-sm text-slate-500">Compara la gama completa o elige una versión concreta de cada modelo.</p></div>
                <div class="compare-modal-scroll overflow-x-auto pb-3 mt-5">
                    <div style="min-width:${minWidth}px" class="px-4 sm:px-7">
                        <div class="grid gap-0" style="grid-template-columns:${compareLabelWidth}px repeat(${selectedCars.length}, minmax(${compareCarWidth}px,1fr));">
                            <div class="compare-sticky-label border-b border-slate-200"></div>
                            ${selections.map(({car,value}) => `
                                <div class="border-b border-l border-slate-200 p-3 sm:p-4 bg-white">
                                    <div class="relative aspect-[16/10] rounded-xl overflow-hidden bg-slate-100">
                                        <img src="${car.images?.[0] || ''}" alt="${car.brand} ${car.model}" class="w-full h-full object-cover">
                                        <button onclick="removeFromCompare(${car.id},event)" class="absolute top-2 right-2 w-7 h-7 bg-black/60 text-white rounded-full"><i class="fa-solid fa-xmark text-xs"></i></button>
                                    </div>
                                    <div class="mt-3"><div class="text-[9px] text-blue-600 font-extrabold uppercase tracking-wider">${car.brand}</div><div class="font-black text-sm leading-tight mt-0.5">${car.model}</div></div>
                                    <select id="compare-version-${car.id}" data-selected="${value}" onchange="updateCompareVersion(${car.id},this.value)" class="w-full mt-3 bg-slate-50 border border-slate-200 rounded-lg px-2 py-2 text-[10px] font-bold focus:outline-none focus:border-blue-500">${compareSelectOptions(car,value)}</select>
                                </div>`).join('')}
                            ${rows.map(([label,key,icon]) => `
                                <div class="contents">
                                    <div class="compare-sticky-label border-b border-slate-200 p-3 flex items-center gap-2 text-[10px] font-extrabold uppercase text-slate-500"><i class="fa-solid ${icon} text-blue-600 w-3"></i><span>${label}</span></div>
                                    ${selections.map(({data}) => {
                                        const metric = compareMetricValue(data, key);
                                        const isBest = metric !== null && bestCompareValues[key] === metric;
                                        return `<div class="border-b border-l border-slate-200 p-3 sm:p-4 bg-white text-xs sm:text-sm font-bold text-slate-800">
                                            <div class="flex flex-wrap items-center gap-1.5">
                                                <span>${data[key] || '—'}</span>
                                                ${isBest ? `<span class="inline-flex px-1.5 py-0.5 rounded-md bg-blue-50 text-blue-600 text-[8px] sm:text-[9px] font-extrabold uppercase tracking-wide">Mejor</span>` : ''}
                                            </div>
                                        </div>`;
                                    }).join('')}
                                </div>`).join('')}
                        </div>
                    </div>
                </div>
                <div class="px-4 sm:px-7 py-5 bg-slate-50 border-t border-slate-200"><p class="text-[10px] sm:text-xs text-slate-400 leading-relaxed">“Gama completa” muestra el rango del modelo. Al seleccionar una versión, se muestran sus datos específicos cuando están disponibles.</p></div>`;
        }

        function formatPrice(number) {
            return number.toLocaleString('es-ES') + ' €';
        }

        function toggleMobileFilters() {

            const panel = document.getElementById('filters-panel');
            const icon = document.getElementById('filter-toggle-icon');

            panel.classList.toggle('hidden');
            icon.classList.toggle('rotate-180');
        }

        function changeSlide(carId, direction, event) {

            event.stopPropagation();

            const car = carsData.find(c => c.id === carId);

            if (!car) return;

            if (currentImageIndexes[carId] === undefined)
                currentImageIndexes[carId] = 0;

            currentImageIndexes[carId] += direction;

            if (currentImageIndexes[carId] >= car.images.length)
                currentImageIndexes[carId] = 0;

            if (currentImageIndexes[carId] < 0)
                currentImageIndexes[carId] = car.images.length - 1;

            const img = document.getElementById(`car-img-${carId}`);

            if (img)
                img.src = car.images[currentImageIndexes[carId]];

            const dots = document.getElementById(`dots-${carId}`);

            if (dots) {

                dots.innerHTML = car.images.map((_, i) => `
                    <span class="
                        h-1.5 rounded-full transition-all
                        ${i === currentImageIndexes[carId]
                            ? 'bg-white w-5'
                            : 'bg-white/60 w-1.5'}
                    "></span>
                `).join('');
            }
        }

        // Tarjeta de autopromoción: la imagen ocupa toda la tarjeta.
        function renderAdvertisingCard() {
            return `
                <a href="mailto:publicidad@electricos.eu?subject=Publicidad%20en%20electricos.eu"
                   aria-label="Solicitar información publicitaria en electricos.eu"
                   class="block self-start rounded-[1.7rem] overflow-hidden border border-blue-200 shadow-sm hover:shadow-xl transition duration-300 cursor-pointer bg-slate-950">
                    <img src="img/ads/publicidad.webp"
                         alt="Tu marca, en el lugar adecuado. Solicita información publicitaria en electricos.eu"
                         loading="lazy"
                         class="block w-full h-auto"
                         onerror="this.alt='Imagen publicitaria no disponible';">
                </a>`;
        }

        function renderCars(cars) {

            const grid = document.getElementById('cars-grid');

            document.getElementById('results-count').innerText =
                `${cars.length} ${cars.length === 1 ? 'vehículo' : 'vehículos'}`;

            if (!cars.length) {

                grid.innerHTML = `

                    <div class="col-span-full py-16 text-center bg-white rounded-3xl border border-slate-200">

                        <i class="fa-solid fa-car-side text-4xl text-slate-300"></i>

                        <p class="font-bold text-slate-700 mt-3">
                            No encontramos vehículos con estos filtros
                        </p>

                        <button onclick="resetFilters()"
                            class="text-xs font-bold text-blue-600 mt-3">
                            Restablecer filtros
                        </button>

                    </div>
                `;

                return;
            }

            grid.innerHTML = cars.map((car, index) => {

                if (currentImageIndexes[car.id] === undefined)
                    currentImageIndexes[car.id] = 0;

                const image =
                    car.images[currentImageIndexes[car.id]];

                return `

                <article onclick="openCarModal(${car.id})"
                    class="bg-white rounded-[1.7rem] overflow-hidden border border-slate-200 hover:shadow-xl transition duration-300 cursor-pointer group">

                    <!-- IMAGE -->

                    <div class="relative h-60 bg-slate-900 overflow-hidden">

                        <img id="car-img-${car.id}"
                            src="${image}"
                            alt="${car.brand} ${car.model}"
                            class="w-full h-full object-cover group-hover:scale-[1.03] transition duration-500">

                        <div class="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

                        <span class="absolute top-4 left-4 bg-white/95 px-3 py-1 rounded-full text-[10px] font-extrabold uppercase">
                            ${car.type}
                        </span>

                        ${car.images.length > 1 ? `

                        <button onclick="changeSlide(${car.id},-1,event)"
                            class="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white w-9 h-9 rounded-full opacity-0 group-hover:opacity-100 transition">

                            <i class="fa-solid fa-chevron-left text-xs"></i>

                        </button>

                        <button onclick="changeSlide(${car.id},1,event)"
                            class="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white w-9 h-9 rounded-full opacity-0 group-hover:opacity-100 transition">

                            <i class="fa-solid fa-chevron-right text-xs"></i>

                        </button>

                        <div id="dots-${car.id}"
                            class="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5">

                            ${car.images.map((_, i) => `

                                <span class="
                                    h-1.5 rounded-full
                                    ${i === currentImageIndexes[car.id]
                                        ? 'bg-white w-5'
                                        : 'bg-white/60 w-1.5'}
                                "></span>

                            `).join('')}

                        </div>

                        ` : ''}

                    </div>

                    <!-- CONTENT -->

                    <div class="p-6">

                        <div class="flex justify-between gap-4">

                            <div>

                                <span class="text-blue-600 text-xs uppercase font-extrabold tracking-wider">
                                    ${car.brand}
                                </span>

                                <h3 class="text-2xl font-black mt-1">
                                    ${car.model}
                                </h3>

                            </div>

                            <div class="text-right">

                                <span class="text-[10px] text-slate-400 uppercase font-bold">
                                    Precio gama
                                </span>

                                <div class="font-black text-base sm:text-lg whitespace-nowrap">
                                    ${car.priceText}
                                </div>

                                <div class="text-[10px] text-slate-400">
                                    IVA incluido · sin ayudas
                                </div>

                            </div>

                        </div>

                        <!-- PRIMARY SPECS -->

                        <div class="grid grid-cols-2 gap-3 mt-6">

                            <div class="bg-blue-50 rounded-2xl p-4">

                                <div class="flex items-center gap-2 text-blue-600 text-xs font-bold">

                                    <i class="fa-solid fa-road"></i>
                                    AUTONOMÍA

                                </div>

                                <div class="text-xl font-black mt-1">
                                    ${car.rangeText}
                                </div>

                                <div class="text-[10px] text-slate-500">
                                    WLTP
                                </div>

                            </div>

                            <div class="bg-slate-50 rounded-2xl p-4">

                                <div class="flex items-center gap-2 text-slate-500 text-xs font-bold">

                                    <i class="fa-solid fa-battery-full text-blue-600"></i>
                                    BATERÍA

                                </div>

                                <div class="text-xl font-black mt-1">
                                    ${car.batteryText}
                                </div>

                                ${car.batteryType ? `
                                    <span class="inline-flex mt-2 px-2 py-1 rounded-md bg-slate-200 text-slate-600 text-[10px] font-extrabold uppercase tracking-wider">
                                        ${car.batteryType}
                                    </span>
                                ` : ''}

                            </div>

                        </div>

                        <div class="grid grid-cols-3 gap-2 mt-3 text-center">

                            <div class="border border-slate-100 rounded-xl p-3">

                                <i class="fa-solid fa-bolt text-blue-600"></i>

                                <div class="text-xs font-bold mt-1">
                                    ${car.powerText}
                                </div>

                            </div>

                            <div class="border border-slate-100 rounded-xl p-3">

                                <i class="fa-solid fa-suitcase text-blue-600"></i>

                                <div class="text-xs font-bold mt-1">
                                    ${car.frunkText && car.frunkText !== 'No disponible' && !car.frunkText.includes('Pendiente')
    ? `${car.trunk} + ${car.frunkText.match(/\d+(?:\s*-\s*\d+)?/)?.[0] || ''} L`
    : `${car.trunk} L`}
                                </div>

                            </div>

                            <div class="border border-slate-100 rounded-xl p-3">

                                <i class="fa-solid fa-user-group text-blue-600"></i>

                                <div class="text-xs font-bold mt-1">
                                    ${car.seats} plazas
                                </div>

                            </div>

                        </div>

                        <div class="flex gap-2 mt-5">

                            <button
                                class="flex-1 bg-slate-900 group-hover:bg-blue-600 text-white py-3 rounded-xl text-xs font-bold transition">

                                Ver ficha

                                <i class="fa-solid fa-arrow-right ml-2"></i>

                            </button>

                            <button onclick="toggleCompare(${car.id},event)"
                                class="w-12 border ${compareCars.has(car.id) ? 'compare-selected' : 'border-slate-200 text-slate-500 hover:border-blue-500 hover:text-blue-600'} rounded-xl transition"
                                title="Añadir a comparar">

                                <i class="fa-solid ${compareCars.has(car.id) ? 'fa-check' : 'fa-code-compare'}"></i>

                            </button>

                        </div>

                    </div>

                </article>

                `;

            }).reduce((html, card, index) => {
                // Mostrar una única tarjeta publicitaria después del sexto vehículo.
                return html + card + (index === 5 ? renderAdvertisingCard() : '');
            }, '');
        }

        function openCarModal(carId) {

            const car = carsData.find(c => c.id === carId);

            if (!car) return;

            const trimsHtml = car.trims.map(trim => `

                <div class="border border-slate-200 rounded-2xl p-5 bg-white">

                    <div>

                        <div class="text-xs text-blue-600 font-extrabold uppercase">
                            ${trim.name}
                        </div>

                        <div class="text-xl font-black mt-1">
                            ${trim.price}
                        </div>

                        <div class="text-[10px] text-slate-400">
                            IVA incluido · Sin ayudas
                        </div>

                    </div>

                    <div class="grid grid-cols-2 gap-3 mt-5 text-sm">

                        <div>
                            <span class="text-slate-400 text-xs block">
                                Batería
                            </span>

                            <strong>${trim.battery}</strong>

                            ${trim.batteryType ? `
                                <span class="ml-1 inline-flex px-1.5 py-0.5 rounded bg-slate-100 text-slate-500 text-[9px] font-extrabold uppercase">
                                    ${trim.batteryType}
                                </span>
                            ` : ''}
                        </div>

                        <div>
                            <span class="text-slate-400 text-xs block">Autonomía</span>
                            <strong>${trim.range}</strong>
                        </div>

                        <div>
                            <span class="text-slate-400 text-xs block">Potencia</span>
                            <strong>${trim.power}</strong>
                        </div>

                        <div>
                            <span class="text-slate-400 text-xs block">0-100 km/h</span>
                            <strong>${trim.accel}</strong>
                        </div>

                    </div>

                </div>

            `).join('');

            const colorsHtml = car.colors.map(color => `

                <div class="flex items-center gap-2">

                    <span class="w-6 h-6 rounded-full shadow-sm"
                        style="
                            background:${color.hex};
                            ${color.border ? `border:1px solid ${color.border}` : ''}
                        ">
                    </span>

                    <span class="text-xs font-semibold text-slate-600">
                        ${color.name}
                    </span>

                </div>

            `).join('');

            const galleryHtml = car.images.map((img, index) => `

                <button type="button" onclick="openLightbox(${car.id}, ${index})"
                    aria-label="Ampliar fotografía ${index + 1} de ${car.brand} ${car.model}"
                    class="block w-full text-left rounded-2xl overflow-hidden bg-slate-100 aspect-[4/3] cursor-zoom-in group">
                    <img src="${img}"
                        alt="${car.brand} ${car.model}"
                        class="w-full h-full object-cover group-hover:scale-105 transition duration-500">
                </button>

            `).join('');

            const videosHtml = car.videos && car.videos.length
                ? car.videos.map(video => `

                    <a href="${video.url}"
                        target="_blank"
                        rel="noopener"
                        class="group block bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-lg hover:border-slate-300 transition">

                        <div class="relative aspect-video bg-slate-900 overflow-hidden">

                            <img src="${video.thumb}"
                                alt="${video.title}"
                                class="w-full h-full object-cover group-hover:scale-105 transition duration-500">

                            <div class="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition"></div>

                            <div class="absolute inset-0 flex items-center justify-center">

                                <div
                                    class="w-14 h-14 bg-white/95 text-red-600 rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition">

                                    <i class="fa-solid fa-play ml-1"></i>

                                </div>

                            </div>

                        </div>

                        <div class="p-4">

                            <div class="flex gap-3">

                                <div class="flex-grow">

                                    <span class="text-[10px] text-red-600 font-extrabold uppercase tracking-wider">
                                        YouTube
                                    </span>

                                    <h4
                                        class="font-bold text-sm mt-1 leading-snug group-hover:text-blue-600 transition">

                                        ${video.title}

                                    </h4>

                                </div>

                                <i
                                    class="fa-solid fa-arrow-up-right-from-square text-xs text-slate-300 mt-1"></i>

                            </div>

                        </div>

                    </a>

                `).join('')
                : '';

            const positives = car.highlights.map(item => `

                <li class="flex gap-3">

                    <span class="text-blue-600 font-black text-base leading-5">+</span>

                    <span>${item}</span>

                </li>

            `).join('');

            const considerations = car.considerations.map(item => `

                <li class="flex gap-3">

                    <span class="text-slate-400 font-black text-base leading-5">−</span>

                    <span>${item}</span>

                </li>

            `).join('');

            const idealFor = car.idealFor.map(item => `

                <span class="bg-slate-100 text-slate-600 border border-slate-200 px-3 py-1.5 rounded-full text-[11px] font-bold">
                    ${item}
                </span>

            `).join('');

            // País de origen histórico · grupo o fabricante actual.
            const brandLabels = {
                'Leapmotor': 'China · Leapmotor (alianza con Stellantis)',
                'Citroën': 'Francia · Stellantis',
                'Renault': 'Francia · Renault Group',
                'Hyundai': 'Corea del Sur · Hyundai Motor Group',
                'BYD': 'China · BYD',
                'Kia': 'Corea del Sur · Hyundai Motor Group',
                'Škoda': 'República Checa · Grupo Volkswagen (Alemania)',
                'Volvo': 'Suecia · Grupo Geely (China)',
                'Tesla': 'Estados Unidos · Tesla',
                'XPENG': 'China · XPENG',
                'Peugeot': 'Francia · Stellantis'
            };

            const brandInfoHtml = car.brandInfo ? `

                <section class="border-t border-slate-200 pt-8">

                    <div class="border border-slate-200 rounded-2xl p-5 sm:p-6 bg-white">

                        <div class="flex flex-col sm:flex-row sm:items-center gap-5">

                            <!-- LOGO -->

                            <div
                                class="w-full sm:w-40 h-20 rounded-xl bg-white border border-slate-100 flex items-center justify-center p-4 shrink-0">

                                <img src="${car.brandInfo.logo}"
                                    alt="Logo ${car.brand}"
                                    class="max-w-full max-h-full object-contain">

                            </div>

                            <!-- INFO -->

                            <div class="flex-grow">

                                <span class="text-[10px] uppercase tracking-wider text-slate-400 font-bold">
                                    La marca
                                </span>

                                <div class="mt-1 flex flex-wrap items-baseline gap-x-2 gap-y-1">
                                    <h3 class="text-xl font-black">${car.brand}</h3>
                                    <span class="text-xs sm:text-sm font-medium text-slate-500">${brandLabels[car.brand] || car.brandInfo.group || ''}</span>
                                </div>

                                <p class="text-xs sm:text-sm text-slate-500 mt-2 leading-relaxed">
                                    ${car.brandInfo.note}
                                </p>

                            </div>

                        </div>

                    </div>

                </section>

            ` : '';

            const modal = document.getElementById('modal-content');

            modal.innerHTML = `

                <!-- HERO CAR -->

                <section class="relative">

                    <div class="h-[285px] sm:h-[355px] bg-slate-900">

                        <img src="${car.images[0]}"
                            alt="${car.brand} ${car.model}"
                            class="w-full h-full object-cover">

                    </div>

                    <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/10 to-transparent"></div>

                    <button onclick="closeCarModal()"
                        class="absolute top-5 right-5 w-11 h-11 bg-black/50 hover:bg-black/80 backdrop-blur text-white rounded-full">

                        <i class="fa-solid fa-xmark"></i>

                    </button>

                    <div class="absolute bottom-0 left-0 right-0 p-6 sm:p-8 text-white">

                        <span class="bg-blue-600 px-3 py-1 rounded-full text-[10px] font-extrabold uppercase">
                            ${car.type}
                        </span>

                        <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mt-3">

                            <div>

                                <div class="text-sm text-slate-300 font-semibold">
                                    ${car.brand}
                                </div>

                                <h2 class="text-4xl sm:text-5xl font-black">
                                    ${car.model}
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

                    <!-- MAIN DATA -->

                    <section>

                        <div class="grid grid-cols-2 lg:grid-cols-5 gap-3">

                            <div class="col-span-2 lg:col-span-1 bg-blue-600 text-white rounded-2xl p-5">

                                <i class="fa-solid fa-road opacity-70"></i>

                                <div class="text-2xl font-black mt-2">
                                    ${car.rangeText}
                                </div>

                                <div class="text-xs opacity-80">
                                    Autonomía WLTP
                                </div>

                            </div>

                            <div class="bg-slate-50 rounded-2xl p-5">

                                <i class="fa-solid fa-battery-full text-blue-600"></i>

                                <div class="text-xl font-black mt-2">
                                    ${car.batteryText}
                                </div>

                                <div class="flex items-center gap-2 mt-1">

                                    <div class="text-xs text-slate-400">
                                        Batería
                                    </div>

                                    ${car.batteryType ? `
                                        <span
                                            class="px-1.5 py-0.5 rounded bg-slate-200 text-slate-600 text-[9px] font-extrabold uppercase tracking-wider">
                                            ${car.batteryType}
                                        </span>
                                    ` : ''}

                                </div>

                            </div>

                            <div class="bg-slate-50 rounded-2xl p-5">

                                <i class="fa-solid fa-bolt text-blue-600"></i>

                                <div class="text-lg font-black mt-2">
                                    ${car.powerText}
                                </div>

                                <div class="text-xs text-slate-400">
                                    Potencia
                                </div>

                            </div>

                            <div class="bg-slate-50 rounded-2xl p-5">

                                <i class="fa-solid fa-suitcase text-blue-600"></i>

                                <div class="text-xl font-black mt-2">
                                    ${car.frunkText && car.frunkText !== 'No disponible' && !car.frunkText.includes('Pendiente')
    ? `${car.trunk} + ${car.frunkText}`
    : `${car.trunk} L`}
                                </div>

                                <div class="text-xs text-slate-400">
                                    Maletero
                                </div>

                            </div>

                            <div class="bg-slate-50 rounded-2xl p-5">

                                <i class="fa-solid fa-user-group text-blue-600"></i>

                                <div class="text-xl font-black mt-2">
                                    ${car.seats}
                                </div>

                                <div class="text-xs text-slate-400">
                                    Plazas
                                </div>

                            </div>

                        </div>

                    </section>

                    <!-- QUICK INTRO -->

                    <section>

                        <div class="flex items-center gap-2 mb-4">

                            <div class="w-8 h-8 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center">
                                <i class="fa-solid fa-stopwatch"></i>
                            </div>

                            <h3 class="text-xl font-black">
                                El ${car.model} en 30 segundos
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
                                Elige batería, autonomía y potencia según el uso que necesites.
                            </p>

                        </div>

                        <div class="grid md:grid-cols-2 gap-4">
                            ${trimsHtml}
                        </div>

                    </section>

                    <!-- PUBLICIDAD -->

                    <section>

                        <div
                            class="w-full min-h-[130px] sm:min-h-[150px]
                            border border-slate-200
                            bg-slate-50
                            rounded-2xl
                            flex flex-col
                            items-center
                            justify-center
                            text-center
                            px-5">

                            <span class="text-[9px] uppercase tracking-[0.18em] text-slate-400 mb-3">
                                Publicidad
                            </span>

                            <!-- GOOGLE ADSENSE -->

                            <div class="text-xs text-slate-300">
                                Espacio publicitario
                            </div>

                        </div>

                    </section>

                    <!-- TECH -->

                    <section>

                        <div class="mb-5">

                            <span class="text-blue-600 text-xs font-extrabold uppercase tracking-wider">
                                Ficha técnica
                            </span>

                            <h3 class="text-2xl font-black mt-1">
                                Datos principales
                            </h3>

                        </div>

                        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">

                            <div class="border border-slate-200 rounded-2xl p-5">

                                <i class="fa-solid fa-ruler-combined text-blue-600 mb-3"></i>

                                <span class="text-xs text-slate-400 block">
                                    Dimensiones
                                </span>

                                <div class="font-bold mt-1">
                                    ${car.dimensions}
                                </div>

                            </div>

                            <div class="border border-slate-200 rounded-2xl p-5">

                                <i class="fa-solid fa-bolt-lightning text-blue-600 mb-3"></i>

                                <span class="text-xs text-slate-400 block">
                                    Carga rápida
                                </span>

                                <div class="font-bold mt-1">
                                    ${car.charging}
                                </div>

                            </div>

                            <div class="border border-slate-200 rounded-2xl p-5">

                                <i class="fa-solid fa-gauge-high text-blue-600 mb-3"></i>

                                <span class="text-xs text-slate-400 block">
                                    0-100 km/h
                                </span>

                                <div class="font-bold mt-1">
                                    ${car.acceleration}
                                </div>

                            </div>

                        </div>

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

                    <!-- VIDEOS -->

                    ${videosHtml ? `

                    <section>

                        <div class="mb-5">

                            <span class="text-blue-600 text-xs font-extrabold uppercase tracking-wider">
                                Vídeos
                            </span>

                            <h3 class="text-2xl font-black mt-1">
                                Vídeos del ${car.model}
                            </h3>

                            <p class="text-sm text-slate-500 mt-1">
                                Pruebas, análisis y contenido en vídeo sobre este modelo.
                            </p>

                        </div>

                        <div class="grid md:grid-cols-2 gap-4">
                            ${videosHtml}
                        </div>

                    </section>

                    ` : ''}

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

                    <!-- BRAND / AUTOMOTIVE GROUP -->

                    ${brandInfoHtml}

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

            document.getElementById('car-modal').classList.remove('hidden');

            document.body.style.overflow = 'hidden';
        }

        function closeCarModal() {
            if (!document.getElementById('photo-lightbox').classList.contains('hidden')) { closeLightbox(); return; }

            document.getElementById('car-modal').classList.add('hidden');

            document.body.style.overflow = '';
        }

        // Galería a pantalla completa; conserva el scroll de la ficha abierta.
        let lightboxCar = null;
        let lightboxIndex = 0;
        let lightboxZoomed = false;
        let lightboxTouchStart = null;

        function openLightbox(carId, index) {
            const car = carsData.find(c => c.id === carId);
            if (!car || !car.images || !car.images.length) return;
            lightboxCar = car;
            lightboxIndex = index;
            document.getElementById('photo-lightbox').classList.remove('hidden');
            renderLightbox();
        }

        function renderLightbox() {
            if (!lightboxCar) return;
            lightboxZoomed = false;
            const img = document.getElementById('lightbox-image');
            img.style.transform = 'scale(1)';
            img.style.transformOrigin = 'center center';
            img.src = lightboxCar.images[lightboxIndex];
            img.alt = `${lightboxCar.brand} ${lightboxCar.model}, foto ${lightboxIndex + 1}`;
            document.getElementById('lightbox-title').textContent = `${lightboxCar.brand} ${lightboxCar.model}`;
            document.getElementById('lightbox-count').textContent = `${lightboxIndex + 1} / ${lightboxCar.images.length}`;
            document.getElementById('lightbox-zoom').innerHTML = '<i class="fa-solid fa-magnifying-glass-plus"></i> Zoom';
        }

        function moveLightbox(direction) {
            if (!lightboxCar) return;
            lightboxIndex = (lightboxIndex + direction + lightboxCar.images.length) % lightboxCar.images.length;
            renderLightbox();
        }

        function toggleLightboxZoom(event) {
            if (!lightboxCar) return;
            if (event) event.stopPropagation();
            lightboxZoomed = !lightboxZoomed;
            const img = document.getElementById('lightbox-image');
            if (lightboxZoomed && event && event.clientX != null) {
                const rect = img.getBoundingClientRect();
                const x = Math.max(0, Math.min(100, (event.clientX - rect.left) / rect.width * 100));
                const y = Math.max(0, Math.min(100, (event.clientY - rect.top) / rect.height * 100));
                img.style.transformOrigin = `${x}% ${y}%`;
            }
            img.style.transform = lightboxZoomed ? 'scale(2)' : 'scale(1)';
            document.getElementById('lightbox-zoom').innerHTML = lightboxZoomed
                ? '<i class="fa-solid fa-magnifying-glass-minus"></i> Reducir'
                : '<i class="fa-solid fa-magnifying-glass-plus"></i> Zoom';
        }

        function closeLightbox() {
            document.getElementById('photo-lightbox').classList.add('hidden');
            lightboxCar = null;
            lightboxZoomed = false;
        }

        document.getElementById('lightbox-stage').addEventListener('touchstart', event => {
            if (event.touches.length === 1) lightboxTouchStart = { x: event.touches[0].clientX, y: event.touches[0].clientY };
        }, { passive: true });
        document.getElementById('lightbox-stage').addEventListener('touchend', event => {
            if (!lightboxTouchStart || !lightboxCar || lightboxZoomed || !event.changedTouches.length) return;
            const dx = event.changedTouches[0].clientX - lightboxTouchStart.x;
            const dy = event.changedTouches[0].clientY - lightboxTouchStart.y;
            if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy)) moveLightbox(dx < 0 ? 1 : -1);
            lightboxTouchStart = null;
        }, { passive: true });

        function resetFilters(runFilter = true) {

            document.getElementById('search-input').value = '';

            document.getElementById('hero-search').value = '';

            document.getElementById('body-filter').value = '';

            document.getElementById('seats-filter').value = '';

            document.getElementById('range-filter').value = 0;

            document.getElementById('price-filter').value = 90000;

            document.getElementById('sort-filter').value = 'random';

            clearQuickFilterState();

            if (runFilter) filterCars();
        }

        // Se mezcla una sola vez por carga de página. Los filtros conservan el orden.
        const randomCarOrder = new Map();
        const shuffledCarIds = carsData.map(car => car.id);
        for (let i = shuffledCarIds.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledCarIds[i], shuffledCarIds[j]] = [shuffledCarIds[j], shuffledCarIds[i]];
        }
        shuffledCarIds.forEach((id, index) => randomCarOrder.set(id, index));

        function filterCars() {

            const search =
                document.getElementById('search-input').value.toLowerCase();

            const body =
                document.getElementById('body-filter').value;

            const seats =
                document.getElementById('seats-filter').value;

            const range =
                parseInt(document.getElementById('range-filter').value);

            const price =
                parseInt(document.getElementById('price-filter').value);

            document.getElementById('range-val').innerText =
                range ? `${range} km` : '0 km';

            document.getElementById('price-val').innerText =
                price < 90000
                    ? formatPrice(price)
                    : 'Sin límite';

            const filtered = carsData.filter(car => {

                const searchMatch =
                    `${car.brand} ${car.model}`
                        .toLowerCase()
                        .includes(search);

                const bodyMatch =
                    !body || car.type === body;

                const seatsMatch =
                    !seats || car.seats >= Number(seats);

                const rangeMatch =
                    car.maxRangeVal >= range;

                const priceMatch =
                    car.priceMin <= price;

                return searchMatch &&
                    bodyMatch &&
                    seatsMatch &&
                    rangeMatch &&
                    priceMatch;
            });

            const sort = document.getElementById('sort-filter').value;

            filtered.sort((a, b) => {

                if (sort === 'random')
                    return randomCarOrder.get(a.id) - randomCarOrder.get(b.id);

                if (sort === 'rangeDesc')
                    return b.maxRangeVal - a.maxRangeVal;

                if (sort === 'trunkDesc')
                    return b.trunk - a.trunk;

                if (sort === 'brandAsc')
                    return `${a.brand} ${a.model}`.localeCompare(`${b.brand} ${b.model}`, 'es');

                return a.priceMin - b.priceMin;
            });

            renderCars(filtered);
        }

        document.addEventListener('keydown', event => {

            if (event.key === 'Escape') {
                if (!document.getElementById('photo-lightbox').classList.contains('hidden')) { closeLightbox(); return; }
                if (!document.getElementById('compare-modal').classList.contains('hidden')) closeCompareModal();
                else closeCarModal();
            }

        });

        document.addEventListener('keydown', event => {
            if (document.getElementById('photo-lightbox').classList.contains('hidden')) return;
            if (event.key === 'ArrowRight') moveLightbox(1);
            if (event.key === 'ArrowLeft') moveLightbox(-1);
        });

        document.addEventListener('DOMContentLoaded', () => {

            filterCars();
            renderCompareBar();

        });
