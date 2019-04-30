#!/usr/bin/env node

const qnet = require('./index.js');
const realm = process.argv[2];
const domain = process.argv[3];
const result = qnet(realm, domain);
console.info('%s', result);
