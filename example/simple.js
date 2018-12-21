/*
 * netsuite-js
 * https://github.com/CrossLead/netsuite-js
 *
 * Copyright (c) 2015 Christian Yang
 * Licensed under the Apache license.
 */

'use strict';
const fs = require('fs');

var item = '1086';
var type = 'inventoryItem'

var denodeify = require('denodeify');
var NetSuite = require('../');

var credentials = require('./credentials.json');
var config = new NetSuite.Configuration(credentials);
var service = new NetSuite.Service(config);

console.log('Creating NetSuite connection');

service
  .init()
  .then(function( /*client*/ ) {
    console.log('WSDL processed. Service description:');
    console.log(service.config.client.describe());

    var recordRef = new NetSuite.Records.RecordRef();
    recordRef.internalId = item;
    recordRef.type = type;

    console.log('Getting item record');
   // var result = service.get(recordRef);
   // console.log(result);
    return service.get(recordRef);
  })
  .then(function(result, raw, soapHeader) {
    if (result.readResponse.status.$attributes.isSuccess !== 'true') {
      console.error('Error');
      console.error(result.readResponse.status.statusDetail);
    }
    var ws = fs.createWriteStream(String(type + '-' + item));
    ws.write(JSON.stringify(result, null, 2));
    ws.end();
    console.log(JSON.stringify(result, null, 2));
    console.log('Last Request:');
    console.log(service.config.client.lastRequest);
  })
  .catch(function(err) {
    console.error(err);
    console.error('Last Request:');
    console.error(service.config.client.lastRequest);
  });
  
