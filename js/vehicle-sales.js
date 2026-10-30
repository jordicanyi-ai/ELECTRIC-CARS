(function (root) {
    'use strict';

    const conditions = { new: 'Nuevo', demo: 'Demostración', used: 'Ocasión' };
    const validId = value => typeof value === 'string' && /^[a-zA-Z0-9_-]{1,80}$/.test(value);
    const text = (value, max = 160) => typeof value === 'string' && value.trim().length > 0 && value.length <= max;
    const safePhoto = value => {
        if (typeof value !== 'string') return false;
        if (/^img\/sales\/[a-zA-Z0-9_/-]+\.(webp|png|jpe?g)$/i.test(value) && !value.includes('..')) return true;
        try {
            const url = new URL(value);
            return url.protocol === 'https:' && !url.username && !url.password;
        } catch { return false; }
    };
    const validPhone = value => typeof value === 'string' && /^\+?[\d\s()-]{8,24}$/.test(value) && value.replace(/\D/g, '').length >= 8;
    const validEmail = value => typeof value === 'string' && /^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/.test(value) && value.length <= 160;

    function validateDealer(dealer) {
        return Boolean(dealer && validId(dealer.id) && text(dealer.name) && dealer.active === true
            && (validEmail(dealer.email) || validPhone(dealer.phone)));
    }

    function validateListing(listing, models, dealers, now = new Date()) {
        if (!listing || !validId(listing.id) || listing.status !== 'published') return false;
        const model = models.find(car => car.id === listing.modelId);
        if (!model || !dealers.some(dealer => dealer.id === listing.dealerId && validateDealer(dealer))) return false;
        if (!Object.hasOwn(conditions, listing.condition)) return false;
        if (!Number.isInteger(listing.year) || listing.year < 2000 || listing.year > now.getUTCFullYear() + 1) return false;
        if (!Number.isInteger(listing.mileageKm) || listing.mileageKm < 0) return false;
        if (!Number.isFinite(listing.price) || listing.price <= 0 || listing.currency !== 'EUR' || listing.priceIncludesVat !== true) return false;
        if (!text(listing.city) || !text(listing.province) || !Array.isArray(listing.photos) || !listing.photos.length || !listing.photos.every(safePhoto)) return false;
        if (listing.trimName && !model.trims?.some(trim => trim.name === listing.trimName)) return false;
        const published = Date.parse(listing.publishedAt), expires = Date.parse(listing.expiresAt);
        return Number.isFinite(published) && Number.isFinite(expires) && published <= now.getTime()
            && expires > now.getTime() && expires > published;
    }

    function selectPublished(data, models, now = new Date()) {
        if (!data || data.enabled !== true || !Array.isArray(data.dealers) || !Array.isArray(data.listings)) return [];
        const ids = new Set();
        return data.listings.filter(listing => {
            if (!validateListing(listing, models, data.dealers, now) || ids.has(listing.id)) return false;
            ids.add(listing.id);
            return true;
        });
    }

    const api = { validateDealer, validateListing, selectPublished };
    if (typeof module !== 'undefined' && module.exports) module.exports = api;
    if (!root || typeof document === 'undefined') return;
    root.ElectricosSales = api;

    const esc = value => String(value ?? '').replace(/[&<>"']/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[character]);
    const fmt = value => new Intl.NumberFormat('es-ES').format(value);
    const models = () => typeof carsData === 'undefined' ? [] : carsData;
    const data = () => root.electricosVehicleSales || {};
    const stock = () => selectPublished(data(), models());
    let selectedModelId = null;

    root.renderModelSaleLinks = modelId => {
        const count = stock().filter(listing => listing.modelId === modelId).length;
        if (!count) return '';
        return `<section class="model-sale-link"><h3>Unidades en venta</h3><p>${count} ${count === 1 ? 'unidad disponible' : 'unidades disponibles'} de concesionarios.</p><button type="button" onclick="closeCarModal(); openVehicleSales(${Number(modelId)})">Ver unidades en venta <i class="fa-solid fa-arrow-right" aria-hidden="true"></i></button></section>`;
    };

    root.openVehicleSales = modelId => {
        if (!stock().length) return;
        selectedModelId = Number.isInteger(modelId) ? modelId : null;
        document.body.dataset.catalogueView = 'sales';
        document.querySelector('.catalogue-controls').hidden = true;
        document.getElementById('catalogue-results').hidden = true;
        document.getElementById('vehicle-sales').hidden = false;
        document.getElementById('catalogue-view-btn').setAttribute('aria-pressed', 'false');
        document.getElementById('ranking-view-btn').setAttribute('aria-pressed', 'false');
        document.getElementById('sales-view-btn').setAttribute('aria-pressed', 'true');
        document.getElementById('sales-model-note').hidden = selectedModelId === null;
        document.getElementById('sales-search').value = '';
        document.getElementById('sales-condition').value = '';
        document.getElementById('sales-price').value = '';
        root.filterVehicleSales();
    };

    root.clearSalesModel = () => { selectedModelId = null; document.getElementById('sales-model-note').hidden = true; root.filterVehicleSales(); };

    root.filterVehicleSales = () => {
        const search = document.getElementById('sales-search').value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim();
        const condition = document.getElementById('sales-condition').value;
        const maxPrice = Number(document.getElementById('sales-price').value) || Infinity;
        const listings = stock().filter(listing => {
            const model = models().find(car => car.id === listing.modelId);
            const label = `${model.brand} ${model.model} ${listing.city} ${listing.province}`.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
            return (!selectedModelId || listing.modelId === selectedModelId) && label.includes(search)
                && (!condition || listing.condition === condition) && listing.price <= maxPrice;
        }).sort((a, b) => a.price - b.price);
        document.getElementById('sales-results-count').textContent = `${listings.length} ${listings.length === 1 ? 'unidad en venta' : 'unidades en venta'}`;
        document.getElementById('sales-grid').innerHTML = listings.map(listing => {
            const model = models().find(car => car.id === listing.modelId);
            const dealer = data().dealers.find(item => item.id === listing.dealerId);
            const subject = encodeURIComponent(`Consulta ${model.brand} ${model.model} · ${listing.id}`);
            const email = validEmail(dealer.email) ? `<a class="sale-contact" href="mailto:${esc(dealer.email)}?subject=${subject}">Consultar al concesionario</a>` : '';
            const phone = validPhone(dealer.phone) ? `<a class="sale-phone" href="tel:${dealer.phone.replace(/[^+\d]/g, '')}"><i class="fa-solid fa-phone" aria-hidden="true"></i> Llamar</a>` : '';
            return `<article class="sale-card"><img src="${esc(listing.photos[0])}" alt="${esc(model.brand)} ${esc(model.model)} en venta" loading="lazy"><div class="sale-content"><span class="sale-condition">${conditions[listing.condition]} · Profesional</span><h3>${esc(model.brand)} ${esc(model.model)}</h3>${listing.trimName ? `<p>${esc(listing.trimName)}</p>` : ''}<strong class="sale-price">${fmt(listing.price)} €</strong><p>Precio al contado · IVA incluido</p><div class="sale-facts"><span>${listing.year}</span><span>${fmt(listing.mileageKm)} km</span><span>${esc(listing.city)}, ${esc(listing.province)}</span></div><p class="sale-dealer">${esc(dealer.name)}</p><div class="sale-actions">${email}${phone}</div><button type="button" class="sale-model-link" onclick="openCarModal(${model.id})">Ver ficha del modelo</button></div></article>`;
        }).join('') || '<p class="sales-empty">No hay unidades que coincidan con estos filtros.</p>';
    };

    document.addEventListener('DOMContentLoaded', () => {
        const button = document.getElementById('sales-view-btn');
        if (button) button.hidden = stock().length === 0;
    });
})(typeof window !== 'undefined' ? window : null);
