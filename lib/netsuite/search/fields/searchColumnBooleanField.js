'use strict';

var util = require('util'),
  BaseObject = require('../../baseObject');

/**
 * https://system.netsuite.com/help/helpcenter/en_US/srbrowser/Browser2015_1/schema/other/searchcolumnbooleanfield.html?mode=package
 *
 * @class
 * @extends BaseObject
 * @return {SearchColumnBooleanField}
 */
var SearchColumnBooleanField = module.exports = function SearchColumnBooleanField() {
  BaseObject.call(this);

  /**
   * @member {String} Field name to search against, such as 'daysOverdue' (see reference for your search row type, such as `CustomerSearchRowBasic`, for allowed values). Required.
   */
  this.field = '';
};

util.inherits(SearchColumnBooleanField, BaseObject);

/**
 * @override
 */
SearchColumnBooleanField.prototype.getAttributes = function() {
  var attrs = {
    'xsi:type': 'platformCore:SearchColumnBooleanField'
  };

  return attrs;
};

/**
 * @override
 */
SearchColumnBooleanField.prototype.getUnserializablePropertyNames = function() {
  return ['field'];
};

/**
 * @override
 */
SearchColumnBooleanField.prototype.getSOAPType = function() {
  if (!this.field) {
    throw new Error('field member not set');
  }

  return this.field;
};
