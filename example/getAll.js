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
    //recordRef.internalId = 5084;
    recordRef.type = 'state';
    /*
    var recordRef2 = new NetSuite.Records.RecordRef();
    recordRef2.internalId = 224;
    recordRef2.type = 'customer';
    */
    console.log('Getting list of 1 Employee record, 1 Customer record');
    return service.getAll(recordRef);
    //return service.getList([recordRef, recordRef2]);
  })
  .then(function(result, raw, soapHeader) {
    if (result.getAllResult.status.$attributes.isSuccess !== 'true') {
      console.error('Error');
      console.error(result.getAllResult.status.statusDetail);
    }
   // var records = JSON.stringify(result.readResponseList.readResponse, null, 4);
    var resultString = JSON.stringify(result, null, 4);
    wsJSON.write(resultString);
   // wsJSON.write('\n=========================\n\n');
   // wsJSON.write(records);
    //console.log(result.readResponseList.readResponse[0]);
    //console.log(result.readResponseList.readResponse[1]);
    console.log('Last Request:');
    console.log(service.config.client.lastRequest);
  })
  .catch(function(err) {
    console.error(err);
    console.error('Last Request:');
    console.error(service.config.client.lastRequest);
  });
