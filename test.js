#!/usr/bin/env node

const assert = require('assert');
const program = require('./index.js');


{
const input = 'Beware the Jabberwock, my son! The jaws that bite, the claws that catch!'.toLowerCase().replace(/[^A-Za-z]/g,'');
const key = 'vigenerecipher';

const actual = program(key, input );
const expected = 'wmceeiklgrpifvmeugxqpwqvioiaveyxuekfkbtalvxtgafxyevkpagy';

//console.info('  actual: %s', actual);
//console.info('expected: %s', expected);

assert.deepEqual( actual , expected );

}

{
const realm = 'asgard';
const domain = 'sony';

const actual = program(realm, domain);
const expected = 'sgty';

//console.info('  actual: %s', actual);
//console.info('expected: %s', expected);

assert.deepEqual( actual , expected );

}
