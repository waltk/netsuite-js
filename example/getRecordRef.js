/*
 * netsuite-js
 * https://github.com/CrossLead/netsuite-js
 *
 * Copyright (c) 2015 Christian Yang
 * Licensed under the Apache license.
 */

'use strict';

var denodeify = require('denodeify');
var NetSuite = require('../');
const fs = require('fs');

var credentials = require('./credentials.json');
var config = new NetSuite.Configuration(credentials);
var service = new NetSuite.Service(config);

var wsJSON = fs.createWriteStream(String('test.json'));
console.log('Creating NetSuite connection');
service
  .init(true /* skipDiscovery */ )
  .then(function( /*client*/ ) {
    console.log('WSDL processed');

    var recordRef = new NetSuite.Records.RecordRef();
    recordRef.internalId = 1186;
    recordRef.type = 'lotNumberedAssemblyItem';
    /*
    //This values worked

    recordRef.typeSpecified = false; //does this work?
    recordRef.internalId = 1086;
    recordRef.type = 'inventoryItem';
    */
    console.log('Getting list of 1 Employee record, 1 Customer record');
    return service.get(recordRef);
    //return service.getList([recordRef, recordRef2]);
  })
  .then(function(result, raw, soapHeader) {
    if (result.readResponse.status.$attributes.isSuccess !== 'true') {
      console.error('Error');
      console.error(result.readResponse.status.statusDetail);
    }
    var resultString = JSON.stringify(result, null, 4);
    wsJSON.write(resultString);
    console.log('Last Request:');
    console.log(service.config.client.lastRequest);
  })
  .catch(function(err) {
    console.error(err);
    console.error('Last Request:');
    console.error(service.config.client.lastRequest);
  });
