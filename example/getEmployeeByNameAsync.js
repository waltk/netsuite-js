'use strict';

var denodeify = require('denodeify');
var NetSuite = require('../');
var Promise = require('bluebird');

var credentials = require('./credentials.json');
var config = new NetSuite.Configuration(credentials);
var service = new NetSuite.Service(config);

console.log('Creating NetSuite connection');
var i = 0;
var f = function(number) {
  service
    .init(true /* skipDiscovery */)
    .then(function (/*client*/) {
      var preferences = new NetSuite.Search.SearchPreferences();
      preferences.pageSize = 10;
      service.setSearchPreferences(preferences);

      var conditions = ['Lar', 'Sn', 'Dr', 'Ale', 'De', 'Mo', 'Kyl', 'Vi'];

      var resultPromise = conditions.map(function (value) {
        var search = new NetSuite.Search.CustomerSearchBasic();

        var searchField = new NetSuite.Search.Fields.SearchStringField();
        searchField.field = 'firstName';
        searchField.operator = 'contains';
        searchField.searchValue = value;

        search.searchFields.push(searchField);
        return service.search(search);
      });
      return Promise.all(resultPromise);
    })
    .then(function (result) {
      console.log("result:", number);
      setInterval(function () {
        i = i + 1;
        console.log("call:", i);
        var search = new NetSuite.Search.CustomerSearchBasic();
        var tN = i;
        var searchField = new NetSuite.Search.Fields.SearchStringField();
        searchField.field = 'firstName';
        searchField.operator = 'contains';
        searchField.searchValue = 'Ale';

        search.searchFields.push(searchField);
        service.search(search)
          .then(function () { console.log("result:", tN); })
          .catch(function (e) { console.log(e); });
      }, 1000 * 60 * 10);
    })
    .catch(function (err) {
      console.error(err);
      console.error('Last Request:');
      console.error(service.config.client.lastRequest);
    });
};
console.log("call:", i);
f(i);
