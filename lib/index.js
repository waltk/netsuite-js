/**
 * netsuite-js
 * https://github.com/CrossLead/netsuite-js
 *
 * Copyright (c) 2015 McChrystal Group
 * Licensed under the Apache license.
 *
 * @ignore
 */

'use strict';

/**
 * Main NetSuite package
 * @return {NetSuite}
 */
var NetSuite = module.exports = {};

NetSuite.Configuration = require('./netsuite/configuration');
NetSuite.BaseObject = require('./netsuite/baseObject');
NetSuite.StringObject = require('./netsuite/stringObject');
NetSuite.Records = require('./netsuite/records');
NetSuite.TransSales = require('./netsuite/transSales');
NetSuite.Common = require('./netsuite/common');
NetSuite.Core = require('./netsuite/core');
NetSuite.Relationships = require('./netsuite/relationships');
NetSuite.Search = require('./netsuite/search');
NetSuite.Service = require('./netsuite/service');
NetSuite.SOAP = require('./netsuite/soap');
