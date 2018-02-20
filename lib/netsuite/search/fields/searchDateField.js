'use strict';

var util = require('util'),
  BaseObject = require('../../baseObject');

/**
 * https://system.netsuite.com/help/helpcenter/en_US/srbrowser/Browser2014_2/schema/other/searchdatefield.html?mode=package
 *
 * @class
 * @extends BaseObject
 * @return {SearchDateField}
 */
var SearchDateField = module.exports = function SearchDateField() {
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

util.inherits(SearchDateField, BaseObject);

/**
 * @override
 */
SearchDateField.prototype.getAttributes = function() {
  if (!this.operator) {
    throw new Error('operator member not set');
  }

  var attrs = {
    operator: this.operator,
    'xsi:type': 'platformCore:SearchDateField'
  };

  return attrs;
};

/**
 * @override
 */
SearchDateField.prototype.getUnserializablePropertyNames = function() {
  return ['field', 'operator'];
};

/**
 * @override
 */
SearchDateField.prototype.getSOAPType = function() {
  if (!this.field) {
    throw new Error('field member not set');
  }

  return this.field;
};
