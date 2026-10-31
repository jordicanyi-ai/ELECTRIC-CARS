(function () {
    const data = window.electricosSalesRanking || {};
    const box = document.getElementById('ventas-ranking');
    const period = document.getElementById('ventas-periodo');
    if (!box || !period) return;
    const fmt = new Intl.NumberFormat('es-ES');

    const localCars = {
        'Tesla Model 3': { image: 'img/ranking/MODEL3.png' },
        'Tesla Model Y': { image: 'img/ranking/MODELY.png' },
        'BYD Dolphin Surf': { image: 'img/ranking/DOLPHINSURF.png' },
        'Kia EV3': { image: 'img/ranking/EV3.png' },
        'BYD Atto 3': { image: 'img/ranking/ATTO3.png' },
        'Toyota C-HR+': { image: 'img/ranking/CHR%2B.png' }
    };

    const normalize = value => String(value || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]/g, '');
    const findCatalogCar = model => {
        if (typeof carsData === 'undefined' || !Array.isArray(carsData)) return null;
        const key = normalize(model);
        return carsData.find(car => normalize(car.brand + ' ' + car.model) === key ||
            (key === 'renault5' && car.brand === 'Renault' && car.model.startsWith('5 '))) || null;
    };

    const escapeHtml = value => String(value || '').replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));

    function carThumb(model) {
        const car = localCars[model];
        const catalogCar = findCatalogCar(model);
        const image = car?.image || (catalogCar && Array.isArray(catalogCar.images) ? catalogCar.images[0] : null);
        if (!image) return '<div class="w-20 sm:w-28 h-14 shrink-0 rounded-xl bg-white flex items-center justify-center text-[9px] font-bold uppercase tracking-wide text-slate-300">Sin foto</div>';
        return '<div class="w-20 sm:w-28 h-14 shrink-0 flex items-center justify-center overflow-hidden bg-white p-1"><img src="' + image + '" alt="' + escapeHtml(model) + '" loading="lazy" class="w-full h-full object-contain mix-blend-multiply" onerror="this.parentElement.innerHTML=\'<span class=&quot;text-[9px] font-bold uppercase tracking-wide text-slate-300&quot;>Sin foto</span>\'"></div>';
    }

    window.showSalesRanking = function (type) {
        const item = type === 'year' ? data.yearly : data.monthly;
        for (const [name, active] of [['mes', type !== 'year'], ['ano', type === 'year']]) {
            const btn = document.getElementById('ventas-' + name + '-btn');
            if (!btn) continue;
            btn.setAttribute('aria-pressed', String(active));
            btn.className = 'px-4 py-2.5 rounded-xl text-sm font-bold ' + (active ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-700');
        }
        if (!item || !Array.isArray(item.models) || !item.models.length) {
            period.textContent = 'Pendiente de datos oficiales verificados';
            box.innerHTML = '<p class="rounded-xl bg-slate-50 p-5 text-slate-600 text-sm">Estamos preparando este ranking con las matriculaciones publicadas.</p>';
            return;
        }
        period.textContent = item.label || '';
        box.innerHTML = item.models.slice(0, 5).map((row, i) => {
            const name = escapeHtml(row.model.toLocaleUpperCase('es-ES'));
            const catalogCar = findCatalogCar(row.model);
            const units = Number(row.units);
            if (!Number.isFinite(units) || units < 0) return '';
            return '<div class="flex items-center gap-2 sm:gap-4 rounded-xl border p-2.5 sm:p-3 ' + (i === 0 ? 'bg-blue-50 border-blue-100' : 'bg-white border-slate-100') + (catalogCar ? ' cursor-pointer hover:border-blue-300 hover:shadow-sm transition' : '') + '"' + (catalogCar ? ' role="button" tabindex="0" aria-label="Ver ficha de ' + name + '" data-car-id="' + catalogCar.id + '"' : '') + '>' +
                '<span class="w-7 sm:w-9 text-center text-lg sm:text-xl font-black text-blue-600">' + (i + 1) + '</span>' +
                carThumb(row.model) +
                '<span class="flex-1 min-w-0 font-bold text-sm sm:text-base leading-tight">' + name + '</span>' +
                '<span class="font-black text-slate-900 whitespace-nowrap text-sm sm:text-base">' + fmt.format(units) + ' <small class="text-slate-400 font-medium hidden sm:inline">uds.</small></span></div>';
        }).join('');
    };
    box.addEventListener('click', event => {
        const row = event.target.closest('[data-car-id]');
        if (row && typeof openCarModal === 'function') openCarModal(Number(row.dataset.carId));
    });
    box.addEventListener('keydown', event => {
        if (event.key !== 'Enter' && event.key !== ' ') return;
        const row = event.target.closest('[data-car-id]');
        if (!row || typeof openCarModal !== 'function') return;
        event.preventDefault();
        openCarModal(Number(row.dataset.carId));
    });
    window.showSalesRanking('month');
})();
