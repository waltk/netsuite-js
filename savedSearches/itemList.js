#! /usr/bin/env node
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

console.log('Creating NetSuite connection');


var searchName = 'itemList';

service
  .init(true /* skipDiscovery */ )
  .then(function( /*client*/ ) {
    console.log('WSDL processed');

    var preferences = new NetSuite.Search.SearchPreferences();
    preferences.pageSize = 999;

    service.setSearchPreferences(preferences);

    var search = new NetSuite.Search.ItemSearchAdvanced();
    search.savedSearchId = '366';

    console.log('Performing SearchAdvanced itemList');
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
