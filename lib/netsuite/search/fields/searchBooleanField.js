'use strict';

var util = require('util'),
  BaseObject = require('../../baseObject');

/**
 * https://system.netsuite.com/help/helpcenter/en_US/srbrowser/Browser2015_1/schema/other/searchbooleanfield.html?mode=package
 *
 * @class
 * @extends BaseObject
 * @return {SearchBooleanField}
 */
var SearchBooleanField = module.exports = function SearchBooleanField() {
  BaseObject.call(this);

  /**
   * @member {String} Field name to search against, such as 'email' (see reference for your search type, such as `EmployeeSearchBasic`, for allowed values). Required.
   */
  this.field = '';

  /**
   * @member {Boolean} See NetSuite reference in class definition for allowed values. Required.
   */
  this.operator = '';

  /**
   * @member {Boolean} The actual search value. Required.
   */
  this.searchValue = '';
};

util.inherits(SearchBooleanField, BaseObject);

/**
 * @override
 */
SearchBooleanField.prototype.getAttributes = function() {
  if (!this.operator) {
    throw new Error('operator member not set');
  }

  var attrs = {
    operator: this.operator,
    'xsi:type': 'platformCore:SearchBooleanField'
  };

  return attrs;
};

/**
 * @override
 */
SearchBooleanField.prototype.getUnserializablePropertyNames = function() {
  return ['field', 'operator'];
};

/**
 * @override
 */
SearchBooleanField.prototype.getSOAPType = function() {
  if (!this.field) {
    throw new Error('field member not set');
  }

  return this.field;
};
