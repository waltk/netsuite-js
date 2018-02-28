'use strict';
var _ = require('lodash');
var Promise = require("bluebird");
var util = require('util'),
  BaseObject = require('../../baseObject');
var NetSuite = require('../../../index');
/**
 * https://system.netsuite.com/help/helpcenter/en_US/srbrowser/Browser2014_2/schema/other/searchstringfield.html?mode=package
 *
 * @class
 * @extends BaseObject
 * @return {SearchStringField}
 */
var SearchStringField = module.exports = function SearchStringField() {
  BaseObject.call(this);

  /**
   * @member {String} Field name to search against, such as 'email' (see reference for your search type, such as `EmployeeSearchBasic`, for allowed values). Required.
   */
  this.field = '';

  /**
   * @member {String} See NetSuite reference in class definition for allowed values. Required.
   */
  this.operator = '';

  /**
   * @member {String} The actual search value. Required.
   */
  this.searchValue = '';
};

util.inherits(SearchStringField, BaseObject);

/**
 * @override
 */
SearchStringField.prototype.getAttributes = function() {
  if (!this.operator) {
    throw new Error('operator member not set');
  }

  var attrs = {
    operator: this.operator,
    'xsi:type': 'platformCore:SearchStringField'
  };

  return attrs;
};

/**
 * @override
 */
SearchStringField.prototype.getUnserializablePropertyNames = function() {
  return ['field', 'operator'];
};

/**
 * @override
 */
SearchStringField.prototype.getSOAPType = function() {
  if (!this.field) {
    throw new Error('field member not set');
  }

  return this.field;
};

SearchStringField.prototype.getItemListFromSku = function(skuList) {
  var service = this.getGlobalService();
  var preferences = new NetSuite.Search.SearchPreferences();
  preferences.pageSize = 10;
  service.setSearchPreferences(preferences);

  var search = new NetSuite.Search.ItemSearchBasic();

  var getItemFromSku = function (sku) {
    var searchField = new NetSuite.Search.Fields.SearchStringField();
    searchField.field = 'itemId';
    searchField.operator = 'is';
    searchField.searchValue = sku;

    search.searchFields.push(searchField);
    return service.search(search)
      .then(function(result) {
        if (result.searchResult.status.$attributes.isSuccess !== 'true') {
          return {
            key: sku,
            value: null
          };
        }
        var recordList = result.searchResult.recordList;
        if (recordList && recordList.record && recordList.record.length) {
          var record = _.find(recordList.record, function (o) {
            return !o.isInactive;
          });
          return {
            key: sku,
            value: record || null
          };
        }
        return {
          key: sku,
          value: null
        };
      });
  };

  return Promise.resolve(skuList)
    .mapSeries(getItemFromSku)
    .then(function (result) {
      service.clearSearchPreferences();
      return result;
    });
};
