'use strict';

//   var denodeify = require('denodeify');
//   var Serializer = require('../lib/netsuite/soap/serializer');
//   var NetSuite = require('../');
//
//   var credentials = require('./credentials.json');
//   var config = new NetSuite.Configuration(credentials);
//   var service = new NetSuite.Service(config);
//
//   console.log('Creating NetSuite connection');
//
//   service
//     .init(true /* skipDiscovery */ )
//     .then(function( /*client*/ ) {
//       console.log('WSDL processed');
//
//       var preferences = new NetSuite.Search.SearchPreferences();
//       preferences.bodyFieldsOnly = false;
//       preferences.pageSize = 10;
//       service.setSearchPreferences(preferences);
//
//       var search = new NetSuite.Search.TransactionSearchBasic();
//
//       var searchField = new NetSuite.Search.Fields.SearchMultiSelectField();
//       searchField.type = 'SearchMultiSelectField';
//       searchField.field = 'location';
//       searchField.operator = 'anyOf';
//       searchField.searchValue = '<platformCore:searchValue type="location" internalId="3"></platformCore:searchValue>';
//
//       search.searchFields.push(searchField);
//
//       var searchField2 = new NetSuite.Search.Fields.SearchDateField();
//       searchField2.type = 'SearchDateField';
//       searchField2.field = 'dateCreated';
//       searchField2.operator = 'on';
//       searchField2.searchValue = (new Date).toISOString();
//
//       search.searchFields.push(searchField2);
//
//       var searchField3 = new NetSuite.Search.Fields.SearchEnumMultiSelectField();
//       searchField3.type = 'SearchEnumMultiSelectField';
//       searchField3.field = 'type';
//       searchField3.operator = 'anyOf';
//       searchField3.searchValue = '_salesOrder';
//
//       search.searchFields.push(searchField3);
//
//       // More search fields as desired
//       // var searchField2 = new NetSuite.Search.Fields.SearchStringField();
//       // searchField2.field = 'lastName';
//       // searchField2.operator = 'startsWith';
//       // searchField2.searchValue = 'ne';
//
//       // search.searchFields.push(searchField2);
//
//       console.log('Searching for today\'s orders');
//       return service.search(search);
//     })
//     .then(function(result, raw, soapHeader) {
//       if(result.searchResult.status.$attributes.isSuccess !== 'true') {
//         console.error('Error');
//         console.error(result.searchResult.status.statusDetail);
//       }
//
//       var totalRecords = result.searchResult.totalRecords;
//       console.log('Total records found: ' + totalRecords);
//
//       var record = result.searchResult.recordList.record[0];
//
//       var data = {
//         createdDate: record.createdDate,
//         transDate: record.tranDate,
//         shipDate: record.shipDate,
//         transId: record.tranId,
//         name: record.shippingAddress.addressee,
//         email: record.email,
//         phone: record.shippingAddress.addrPhone,
//         address: record.shippingAddress.addr1,
//         city: record.shippingAddress.city,
//         state: record.shippingAddress.state,
//         zip: record.shippingAddress.zip,
//         shipMethod: record.shipMethod.name,
//         shipComplete: record.shipComplete,
//         status: record.status,
//         items: record.itemList.item.map((item) => {
//           return {
//             name: item.item.name,
//             quantity: item.quantity
//           }
//         })
//     };
//
//       debugger;
//
//       /*console.log(JSON.stringify(result, null, 2));
//       console.log('Last Request:');
//       console.log(service.config.client.lastRequest);*/
//
//       /*if (result.searchResult.totalPages > 1) {
//         // Create a promise chain to get the rest of the pages
//         console.log('Retrieving remaining pages');
//         var current = Promise.resolve();
//         var createNextFulfilledHandler = function(pageIndex) {
//           return function() {
//             return service.searchMoreWithId(result.searchResult.searchId, pageIndex)
//               .then(function(result, raw, soapHeader) {
//                 console.log('Found next page, index: ' + result.searchResult.pageIndex);
//                 console.log(JSON.stringify(result, null, 2));
//                 console.log('Last Request:');
//                 console.log(service.config.client.lastRequest);
//                 return Promise.resolve();
//               });
//           };
//         };
//         // pageIndex is one based, so start next promise at 2
//         for (var i = 2; i <= result.searchResult.totalPages; i++) {
//           current = current.then(createNextFulfilledHandler(i));
//         }
//         return current;
//       }*/
//     })
//     .catch(function(err) {
//       console.error(err);
//       console.error('Last Request:');
//       console.error(service.config.client.lastRequest);
//     });
//
