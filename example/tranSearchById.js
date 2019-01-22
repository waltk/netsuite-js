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

var credentials = require('./credentials.json');
var config = new NetSuite.Configuration(credentials);
var service = new NetSuite.Service(config);

function JSONToCSVConvertor(JSONData, ShowLabel) {
  //If JSONData is not an object then JSON.parse will parse the JSON string in an Object
  var arrData = typeof JSONData != 'object' ? JSON.parse(JSONData) : JSONData;    
  var CSV = '';    
  //This condition will generate the Label/Header
  if (ShowLabel) {
      var row = "";
      //This loop will extract the label from 1st index of on array
      for (var index in arrData[0]) {
          //Now convert each value to string and comma-seprated
          row += index + ',';
      }
      row = row.slice(0, -1);        
      //append Label row with line break
      CSV += row + '\r\n';
  }    
  //1st loop is to extract each row
  for (var i = 0; i < arrData.length; i++) {
      var row = "";        
      //2nd loop will extract each column and convert it in string comma-seprated
      for (var index in arrData[i]) {
          row += '"' + arrData[i][index] + '",';
      }
      row.slice(0, row.length - 1);        
      //add a line break after each row
      CSV += row + '\r\n';
  }
  if (CSV == '') {        
      console.log("Invalid data");
      return;
  }
  return CSV;   
}

console.log('Creating NetSuite connection');
var ws = fs.createWriteStream(String('searchResults'));
var wsTest = fs.createWriteStream(String('testResults'));
var wsJSON = fs.createWriteStream(String('purchaseOrders.json'));
var wsCSV = fs.createWriteStream(String('purchaseOrders.csv'));

service
  .init(true /* skipDiscovery */ )
  .then(function( /*client*/ ) {
    console.log('WSDL processed');

    var preferences = new NetSuite.Search.SearchPreferences();
    preferences.pageSize = 999;
    service.setSearchPreferences(preferences);

    var search = new NetSuite.Search.TransactionSearchAdvanced();
    search.savedSearchId = '360';
    /*
    search.columns = new NetSuite.Search.ItemSearchRow();
    search.columns.basic = new NetSuite.Search.ItemSearchRowBasic();
    search.criteria = new NetSuite.Search.ItemSearch();
    search.criteria.basic = new NetSuite.Search.ItemSearchBasic();

    var itemIdField = new NetSuite.Search.Fields.SearchColumnStringField();
    itemIdField.field = 'itemId';
    search.columns.basic.searchColumnFields.push(itemIdField);

    var internalIdField = new NetSuite.Search.Fields.SearchColumnSelectField();
    internalIdField.field = 'internalId';
    search.columns.basic.searchColumnFields.push(internalIdField);
    
    var isInactiveField = new NetSuite.Search.Fields.SearchBooleanField();
    isInactiveField.field = 'isInactive';
    isInactiveField.searchValue = false;
    search.criteria.basic.searchFields.push(isInactiveField);
    
    var balanceField = new NetSuite.Search.Fields.SearchColumnDoubleField();
    balanceField.field = 'balance';
    search.columns.basic.searchColumnFields.push(balanceField);

    var daysOverdueField = new NetSuite.Search.Fields.SearchColumnLongField();
    daysOverdueField.field = 'daysOverdue';
    search.columns.basic.searchColumnFields.push(daysOverdueField);
    */
    console.log('Performing SearchAdvanced');
    return service.search(search);
  })
  .then(function(result, raw, soapHeader) {
    if (result.searchResult.status.$attributes.isSuccess !== 'true') {
      console.error('Error');
      console.error(result.searchResult.status.statusDetail);
    }
    var resultString = JSON.stringify(result.searchResult.searchRowList, null, 4);
    wsJSON.write(resultString);
    var totalPages = result.searchResult.totalPages;
    var totalRecords = result.searchResult.totalRecords;
    console.log(totalPages + ' pages of search results');
    console.log('Total records found: ' + totalRecords);
    ws.write(totalPages + ' pages of search results \n');
    ws.write('Total records found: ' + totalRecords + '\n\n---------\n');
    ws.write('resultString\n\n' + resultString + '\n\n---------\n');
    var records = result.searchResult.searchRowList.searchRow;
    var csvOut = JSONToCSVConvertor(records);
    wsCSV.write(csvOut);
 

    // iterate through search results
    for (var i = 0; i < records.length; i++) {
      var rec = records[i];
      for (var attr in rec){
        var attrFields = rec[attr];
        wsTest.write(attr + '::');
        for (var field in attrFields) {
          var fieldValue = attrFields[field];
          if (Array.isArray(fieldValue) === true)
          {            
            for (var j = 0; j < fieldValue.length; j++){
              var value = fieldValue[j].searchValue;
            //  value = value.replace(/,/g, '');
              wsTest.write(field + ':' + value + ',');
            }
          } else {
            wsTest.write(field + ':' + fieldValue + ',');
          }
        }                    
      }
      wsTest.write('\n');
    }
    /*
    // iterate through search results
    for (var i = 0; i < records.length; i++) {
      var rec = records[i].basic;
      for (var field in rec){
        var attrValues = rec[field];
          for (var j = 0; j < attrValues.length; j++){
            var value = attrValues[j].searchValue;
          //  value = value.replace(/,/g, '');
            wsTest.write(field + ':' + value + ',');
          }                    
      }
      wsTest.write('\n');
    }


    //  var itemId = records[i].basic.itemId[0].searchValue;
    //  wsTest.write(itemId + '\n');
    wsTest.write('\n\n--------------');
    for (var i = 0; i < records.length; i++) {
      var itemId = records[i].basic.itemId[0].searchValue;
      wsTest.write(itemId + '\n');
    }
    */


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
    //var records = result.searchResult.recordList.record
    //console.log(records)

    console.log('Records found: ' + result.searchResult.totalRecords);
    //console.log(JSON.stringify(result.searchResult, null, 2));
    console.log('Search Complete');
    //console.log('Last Request:');
    //console.log(service.config.client.lastRequest);
  })
  .catch(function(err) {
    console.error(err);
    console.error('Last Request:');
    console.error(service.config.client.lastRequest);
  });
