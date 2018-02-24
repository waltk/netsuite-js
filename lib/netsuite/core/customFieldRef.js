'use strict';

var util = require('util'),
  BaseObject = require('../baseObject');

/**
 * https://system.netsuite.com/help/helpcenter/en_US/srbrowser/Browser2017_2/schema/other/customfieldref.html?mode=package
 *
 * @class
 * @extends BaseObject
 * @return {CustomFieldRef}
 */
var CustomFieldRef = module.exports = function CustomFieldRef() {
  BaseObject.call(this);

  /**
   * @member {String|Number}
   */
  this.internalId = null;

  /**
   * @member {String|Number}
   */
  this.externalId = null;
};

util.inherits(CustomFieldRef, BaseObject);

/**
 * @override
 */
CustomFieldRef.prototype.getAttributes = function() {
  return this.additionalAttributeTypes(['internalId', 'scriptId']);
};

/**
 * @override
 */
CustomFieldRef.prototype.getUnserializablePropertyNames = function() {
  return ['internalId', 'scriptId'];
};

/**
 * @override
 */
CustomFieldRef.prototype.getSOAPType = function() {
  // Always baseRef
  return this._type || 'CustomFieldRef';
};

CustomFieldRef.prototype.getNS = function () {
  return {
    key: 'platformCoreCustomFieldRef',
    value: 'urn:core_' + this.getApiVersion() + '.platform.webservices.netsuite.com'
  };
};

