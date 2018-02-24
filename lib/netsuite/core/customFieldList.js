'use strict';

var util = require('util'),
  BaseObject = require('../baseObject');

/**
 * https://system.netsuite.com/help/helpcenter/en_US/srbrowser/Browser2017_2/schema/other/customfieldlist.html?mode=package
 *
 * @class
 * @extends BaseObject
 * @return {Address}
 */
var CustomFieldList = module.exports = function CustomFieldList() {
  BaseObject.call(this);

  /** @member {customFieldRef[]} */
  this.customField = [];

};

util.inherits(CustomFieldList, BaseObject);

/**
 * @override
 */
CustomFieldList.prototype.getAttributes = function() {
  return this.additionalAttributeTypes();
};

/**
 * @override
 */
CustomFieldList.prototype.getUnserializablePropertyNames = function() {
  return [];
};

/**
 * @override
 */
CustomFieldList.prototype.getSOAPType = function() {
  // Always baseRef
  return this._type || 'CustomFieldList';
};

CustomFieldList.prototype.getNS = function () {
  return {
    key: 'platformCoreCustomFieldList',
    value: 'urn:core_' + this.getApiVersion() + '.platform.webservices.netsuite.com'
  };
};

