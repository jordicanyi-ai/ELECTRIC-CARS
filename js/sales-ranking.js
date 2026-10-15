(function () {
    const data = window.electricosSalesRanking || {};
    const box = document.getElementById('ventas-ranking');
    const period = document.getElementById('ventas-periodo');
    if (!box || !period) return;
    const fmt = new Intl.NumberFormat('es-ES');
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
            box.innerHTML = '<p class="rounded-xl bg-slate-50 p-5 text-slate-600 text-sm">Estamos preparando este ranking con las matriculaciones oficiales de la DGT. Publicaremos las cifras cuando estén verificadas.</p>';
            return;
        }
        period.textContent = item.label || '';
        box.innerHTML = item.models.slice(0, 10).map((row, i) => {
            const name = String(row.model || '').replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
            const units = Number(row.units);
            if (!Number.isFinite(units) || units < 0) return '';
            return '<div class="flex items-center gap-3 sm:gap-5 rounded-xl border border-slate-100 p-3 sm:p-4 ' + (i === 0 ? 'bg-blue-50 border-blue-100' : 'bg-white') + '"><span class="w-8 text-center text-lg font-black text-blue-600">' + (i + 1) + '</span><span class="flex-1 font-bold text-sm sm:text-base">' + name + '</span><span class="font-black text-slate-900">' + fmt.format(units) + ' <small class="text-slate-400 font-medium">uds.</small></span></div>';
        }).join('');
    };
    window.showSalesRanking('month');
})();
