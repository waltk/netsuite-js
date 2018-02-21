'use strict';

/**
 * NetSuite Records
 * @return {Records}
 */
var Relationships = module.exports = {};

Relationships.Customer = require('./customer');
Relationships.CustomerAddressbookList = require('./customerAddressbookList');
Relationships.CustomerAddressbook = require('./customerAddressbook');
