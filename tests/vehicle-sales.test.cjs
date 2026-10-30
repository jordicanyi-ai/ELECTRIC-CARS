const { test } = require('node:test');
const assert = require('node:assert/strict');
const { selectPublished, validateDealer } = require('../js/vehicle-sales.js');
const now = new Date('2026-10-30T10:00:00Z');
const models = [{ id: 26, trims: [{ name: 'Air 58,3 kWh' }] }];
const dealer = { id: 'dealer-test', name: 'Test dealer', active: true, email: 'sales@example.invalid' };
const listing = { id: 'unit-test', dealerId: dealer.id, modelId: 26, trimName: 'Air 58,3 kWh', condition: 'used', year: 2025, mileageKm: 12000, price: 30000, currency: 'EUR', priceIncludesVat: true, city: 'Girona', province: 'Girona', photos: ['https://example.invalid/car.webp'], status: 'published', publishedAt: '2026-10-29T10:00:00Z', expiresAt: '2026-11-30T10:00:00Z' };
const select = (patch = {}, dealers = [dealer]) => selectPublished({ enabled: true, dealers, listings: [{ ...listing, ...patch }] }, models, now);

test('feature is hidden by default and without real stock', () => {
    assert.deepEqual(selectPublished({ enabled: false, dealers: [dealer], listings: [listing] }, models, now), []);
    assert.deepEqual(selectPublished({ enabled: true, dealers: [], listings: [] }, models, now), []);
});
test('approved current listing resolves a stable model and dealer ID', () => assert.equal(select().length, 1));
test('draft, withdrawn, sold, future and expired units stay out of public results', () => {
    for (const status of ['draft', 'withdrawn', 'sold']) assert.equal(select({ status }).length, 0);
    assert.equal(select({ publishedAt: '2026-11-01T10:00:00Z' }).length, 0);
    assert.equal(select({ expiresAt: now.toISOString() }).length, 0);
});
test('unknown models, versions and inactive dealers are rejected', () => {
    assert.equal(select({ modelId: 999 }).length, 0);
    assert.equal(select({ trimName: 'Unknown trim' }).length, 0);
    assert.equal(select({}, [{ ...dealer, active: false }]).length, 0);
});
test('prices, mileage and publication data must be valid', () => {
    for (const patch of [{ price: -1 }, { price: NaN }, { currency: 'USD' }, { priceIncludesVat: false }, { mileageKm: -1 }, { year: 1900 }, { expiresAt: 'bad date' }]) assert.equal(select(patch).length, 0);
});
test('unsafe photo URLs and path traversal are rejected', () => {
    for (const photo of ['javascript:alert(1)', 'data:text/html,x', 'http://example.invalid/x.jpg', 'img/sales/../private.jpg', 'https://user:password@example.invalid/x.jpg']) assert.equal(select({ photos: [photo] }).length, 0);
    assert.equal(select({ photos: ['img/sales/dealer-test/unit-01.webp'] }).length, 1);
});
test('duplicates do not double the stock', () => assert.equal(selectPublished({ enabled: true, dealers: [dealer], listings: [listing, listing] }, models, now).length, 1));
test('dealer needs an explicit public contact channel', () => {
    assert.equal(validateDealer({ ...dealer, email: '' }), false);
    assert.equal(validateDealer({ ...dealer, email: '', phone: '+34 972 000 000' }), true);
});

test('publication tool exports only approved fields and omits private draft records', () => {
    const fs = require('node:fs'), os = require('node:os'), path = require('node:path');
    const { execFileSync } = require('node:child_process');
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'electricos-sales-test-'));
    try {
        for (const folder of ['scripts', 'js', 'data']) fs.mkdirSync(path.join(dir, folder));
        for (const file of ['scripts/prepare-vehicle-sales.cjs', 'js/vehicle-sales.js', 'data/cars.js']) fs.copyFileSync(path.join(__dirname, '..', file), path.join(dir, file));
        const current = { ...listing, publishedAt: '2020-01-01T00:00:00Z', expiresAt: '2099-01-01T00:00:00Z', internalNote: 'PRIVATE_INTERNAL_NOTE' };
        const input = path.join(dir, 'reviewed.json');
        fs.writeFileSync(input, JSON.stringify({ dealers: [{ ...dealer, privateContact: 'PRIVATE_CONTACT' }], listings: [current, { ...current, id: 'private-draft', status: 'draft' }] }));
        execFileSync(process.execPath, [path.join(dir, 'scripts/prepare-vehicle-sales.cjs'), input]);
        const output = fs.readFileSync(path.join(dir, 'data/vehicle-sales.js'), 'utf8');
        assert(!output.includes('PRIVATE_'));
        assert(!output.includes('private-draft'));
        assert(output.includes('unit-test'));
        const before = output;
        fs.writeFileSync(input, JSON.stringify({ dealers: [dealer], listings: [{ ...current, modelId: 999999 }] }));
        assert.throws(() => execFileSync(process.execPath, [path.join(dir, 'scripts/prepare-vehicle-sales.cjs'), input], { stdio: 'pipe' }));
        assert.equal(fs.readFileSync(path.join(dir, 'data/vehicle-sales.js'), 'utf8'), before);
    } finally { fs.rmSync(dir, { recursive: true, force: true }); }
});
