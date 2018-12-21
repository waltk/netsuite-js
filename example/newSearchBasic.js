/*
 * netsuite-js
 * https://github.com/CrossLead/netsuite-js
 *
 * Copyright (c) 2015 Christian Yang
 * Licensed under the Apache license.
 * 
 * Namespace: urn:types.core.platform.webservices.netsuite.com
 * SearchStringFieldOperator
 *  Value
 * contains
 * doesNotContain
 * doesNotStartWith
 * empty
 * hasKeywords
 * is
 * isNot
 * notEmpty
 * startsWith 
 */

'use strict';
const fs = require('fs');

var denodeify = require('denodeify');
var NetSuite = require('../');

var credentials = require('./credentials.json');
var config = new NetSuite.Configuration(credentials);
var service = new NetSuite.Service(config);

console.log('Creating NetSuite connection');
var ws = fs.createWriteStream(String('searchResults'));
var wsTest = fs.createWriteStream(String('testResults'));
service
  .init(true /* skipDiscovery */ )
  .then(function( /*client*/ ) {
    console.log('WSDL processed');

    var preferences = new NetSuite.Search.SearchPreferences();
    preferences.pageSize = 300;
    service.setSearchPreferences(preferences);

    var search = new NetSuite.Search.ItemSearchBasic();

    var itemIdField = new NetSuite.Search.Fields.SearchStringField();
    itemIdField.field = 'itemId';
    itemIdField.operator = 'doesNotContain';
    itemIdField.searchValue = '(';
    search.searchFields.push(itemIdField);

    var typeField = new NetSuite.Search.Fields.SearchEnumMultiSelectField();
    typeField.type = 'SearchEnumMultiSelectField';
    typeField.field = 'type';
    typeField.operator = 'anyOf';
    typeField.searchValue = '_assembly'; //, '_inventoryItem'; ['_assembly', '_inventoryItem']; ['AssemblyItem', 'InventoryItem'];
    search.searchFields.push(typeField);

    console.log('Searching for Items');
    return service.search(search);
  })
  .then(function(result, raw, soapHeader) {
    if (result.searchResult.status.$attributes.isSuccess !== 'true') {
      console.error('Error');
      console.error(result.searchResult.status.statusDetail);
    }
    var resultString = JSON.stringify(result, null, 4);
    var totalPages = result.searchResult.totalPages;
    var totalRecords = result.searchResult.totalRecords;
    console.log(totalPages + ' pages of search results');
    console.log('Total records found: ' + totalRecords);
    ws.write(totalPages + ' pages of search results \n');
    ws.write('Total records found: ' + totalRecords + '\n\n---------\n');
    ws.write('resultString\n\n' + resultString + '\n\n---------\n');
    var records = result.searchResult.recordList.record
    console.log(records)

    for (i in records) {
      var itemId = records[i].itemId
      wsTest.write(itemId + '\n')
    }
    
    //resultValues.searchResult.recordList.
   
    // console.log(JSON.stringify(result, null, 2));
    //  console.log('Last Request:');
    //  console.log(service.config.client.lastRequest);
    
    if (result.searchResult.totalPages > 1) {
      // Create a promise chain to get the rest of the pages
      console.log('Retrieving remaining pages');
      var current = Promise.resolve();
      var createNextFulfilledHandler = function(pageIndex) {
        return function() {
          return service.searchMoreWithId(result.searchResult.searchId, pageIndex)
            .then(function(result, raw, soapHeader) {
              console.log('Found next page, index: ' + result.searchResult.pageIndex);
              //console.log(JSON.stringify(result, null, 2));
              //console.log('Last Request:');
              //console.log(service.config.client.lastRequest);
              //ws.write(JSON.stringify(result, null, 2));
              return Promise.resolve();
            });
        };
      };
      // pageIndex is one based, so start next promise at 2
      for (var i = 2; i <= result.searchResult.totalPages; i++) {
        current = current.then(createNextFulfilledHandler(i));
      }
      return current;
    }
  })
  .catch(function(err) {
    console.error(err);
    console.error('Last Request:');
    console.error(service.config.client.lastRequest);
  });
  