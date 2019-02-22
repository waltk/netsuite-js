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
var NetSuite = require('../lib');
var searchOutput = require('./searchOutput');
var credentials = require('./credentials.json');
var config = new NetSuite.Configuration(credentials);
var service = new NetSuite.Service(config);

module.exports = {
    SavedSearchById: function(searchName, id, type)
    {
        console.log('Creating NetSuite connection');
        service
        .init(true /* skipDiscovery */ )
        .then(function( /*client*/ ) {
            console.log('WSDL processed');
            var preferences = new NetSuite.Search.SearchPreferences();
            preferences.pageSize = 500;
            service.setSearchPreferences(preferences);
            if (type == "tran") {
                var search = new NetSuite.Search.TransactionSearchAdvanced();
            } else if (type == "item") {
                var search = new NetSuite.Search.ItemSearchAdvanced();
            } else {
                var invalidType = "Error: invalid search type";
                console.error('Error: invalid search type');
                return invalidType;
            }
            search.savedSearchId = id;
            console.log('Performing SearchAdvanced ' + searchName);
            return service.search(search);
        })
        .then(function(result, raw, soapHeader) {
            if (result.searchResult.status.$attributes.isSuccess !== 'true') {
            console.error('Error');
            console.error(result.searchResult.status.statusDetail);
            }

            console.log('Total Records: ' + result.searchResult.totalRecords);
            console.log('Total Pages: ' + result.searchResult.totalPages);
            var output = result.searchResult.searchRowList.searchRow;

            if (result.searchResult.totalPages > 1) {
                // Create a promise chain to get the rest of the pages
                console.log('Retrieving remaining pages');
                var current = Promise.resolve();
                var createNextFulfilledHandler = function(pageIndex) {
                return function() {
                    return service.searchMoreWithId(result.searchResult.searchId, pageIndex)
                    .then(function(result, raw, soapHeader) {
                        console.log('Found next page, index: ' + result.searchResult.pageIndex + ' results ' + result.searchResult.searchRowList.searchRow.length);
                        var row = result.searchResult.searchRowList.searchRow;
                        for (let i=0; i<row.length; i++) {
                            output.push(row[i]);
                        }
                        console.log('page ' + result.searchResult.searchRowList.searchRow.length);
                        console.log('output length ' + output.length);
                        if (pageIndex == result.searchResult.totalPages)
                        {
                            searchOutput.writeResults(output, searchName);
                        }
                        return Promise.resolve();
                    });
                };
                };
                // pageIndex is one based, so start next promise at 2
                for (var i = 2; i <= result.searchResult.totalPages; i++) {
                current = current.then(createNextFulfilledHandler(i));
                }
                return current;
            } else {
                searchOutput.writeResults(output, searchName);
            }
        })
        .catch(function(err) {
            console.error(err);
            console.error('Last Request:');
            console.error(service.config.client.lastRequest);
        });
    }
}