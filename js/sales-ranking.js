(function () {
    const data = window.electricosSalesRanking || {};
    const box = document.getElementById('ventas-ranking');
    const period = document.getElementById('ventas-periodo');
    if (!box || !period) return;
    const fmt = new Intl.NumberFormat('es-ES');

    const localCars = {
        'Tesla Model Y': { image: 'img/cars/tesla-model-y/modelY_01.webp', search: 'Tesla Model Y' },
        'BYD Dolphin Surf': { image: 'img/cars/byd-dolphin-surf/dolphin-surf_01.webp', search: 'BYD Dolphin Surf' },
        'Kia EV3': { image: 'img/cars/kia-ev3/kia-ev3_01.webp', search: 'Kia EV3' }
    };

    const escapeHtml = value => String(value || '').replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));

    function carThumb(model) {
        const car = localCars[model];
        if (!car) return '<div class="w-20 sm:w-28 h-14 shrink-0 rounded-xl bg-slate-50 flex items-center justify-center text-[9px] font-bold uppercase tracking-wide text-slate-300">Sin foto</div>';
        return '<div class="w-20 sm:w-28 h-14 shrink-0 flex items-center justify-center overflow-hidden"><img src="' + car.image + '" alt="' + escapeHtml(model) + '" loading="lazy" class="w-full h-full object-contain mix-blend-multiply" onerror="this.parentElement.innerHTML=\'<span class=&quot;text-[9px] font-bold uppercase tracking-wide text-slate-300&quot;>Sin foto</span>\'"></div>';
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
        box.innerHTML = item.models.slice(0, 10).map((row, i) => {
            const name = escapeHtml(row.model);
            const units = Number(row.units);
            if (!Number.isFinite(units) || units < 0) return '';
            return '<div class="flex items-center gap-2 sm:gap-4 rounded-xl border p-2.5 sm:p-3 ' + (i === 0 ? 'bg-blue-50 border-blue-100' : 'bg-white border-slate-100') + '">' +
                '<span class="w-7 sm:w-9 text-center text-lg sm:text-xl font-black text-blue-600">' + (i + 1) + '</span>' +
                carThumb(row.model) +
                '<span class="flex-1 min-w-0 font-bold text-sm sm:text-base leading-tight">' + name + '</span>' +
                '<span class="font-black text-slate-900 whitespace-nowrap text-sm sm:text-base">' + fmt.format(units) + ' <small class="text-slate-400 font-medium hidden sm:inline">uds.</small></span></div>';
        }).join('');
    };
    window.showSalesRanking('month');
})();
