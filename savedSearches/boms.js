/*
 * netsuite-js
 * https://github.com/CrossLead/netsuite-js
 *
 * Copyright (c) 2015 Christian Yang
 * Licensed under the Apache license.
 */

'use strict';

const fs = require('fs');
var denodeify = require('denodeify');
var NetSuite = require('../');
var searchOutput = require('./searchOutput');
var credentials = require('./credentials.json');
var config = new NetSuite.Configuration(credentials);
var service = new NetSuite.Service(config);
var searchName = 'boms';
console.log('Creating NetSuite connection');
//var wsJSON = fs.createWriteStream(String('\\\\SERVER01\\Server\\Operations\\Materials\\Purchasing Forecast\\NetsuiteData\\JSON\\boms.json'));
service
  .init(true /* skipDiscovery */ )
  .then(function( /*client*/ ) {
    console.log('WSDL processed');

    var preferences = new NetSuite.Search.SearchPreferences();
    preferences.pageSize = 999;
    service.setSearchPreferences(preferences);

    var search = new NetSuite.Search.ItemSearchAdvanced();
    search.savedSearchId = '332';

    console.log('Performing SearchAdvanced boms');
    return service.search(search);
  })
  .then(function(result, raw, soapHeader) {
    if (result.searchResult.status.$attributes.isSuccess !== 'true') {
      console.error('Error');
      console.error(result.searchResult.status.statusDetail);
    }
    searchOutput.writeResults(result, searchName); 
  })
  .catch(function(err) {
    console.error(err);
    console.error('Last Request:');
    console.error(service.config.client.lastRequest);
  });
