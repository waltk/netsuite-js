'use strict';

var denodeify = require('denodeify');
var NetSuite = require('../');

var credentials = require('./credentials.json');
var config = new NetSuite.Configuration(credentials);
var service = new NetSuite.Service(config);

console.log('Creating NetSuite connection');

service
  .init(true /* skipDiscovery */ )
  .then(function( /*client*/ ) {
    console.log('WSDL processed');
    return service.getSelectValue(null);
  })
  .then(function(result) {
    return result;
  })
  .catch(function(err) {
    console.error(err);
    console.error('Last Request:');
    console.error(service.config.client.lastRequest);
  });
