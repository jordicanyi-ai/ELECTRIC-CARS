'use strict';
const test=require('node:test');const assert=require('node:assert/strict');const {privateIp}=require('../scripts/price-official-adapter.cjs');
test('rejects private and loopback IPs',()=>{for(const ip of ['127.0.0.1','10.1.2.3','172.16.1.2','192.168.1.2','169.254.1.1','::1','fc00::1'])assert.equal(privateIp(ip),true);});
test('permits public IPs',()=>{for(const ip of ['8.8.8.8','1.1.1.1','2001:4860:4860::8888'])assert.equal(privateIp(ip),false);});
