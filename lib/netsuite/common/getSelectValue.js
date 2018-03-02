'use strict';

var util = require('util'),
  BaseObject = require('../baseObject');

/**
 * https://system.netsuite.com/help/helpcenter/en_US/srbrowser/Browser2017_2/schema/other/GetSelectValue.html?mode=package
 *
 * @class
 * @extends BaseObject
 * @return {getSelectValue}
 */
var GetSelectValue = module.exports = function getSelectValue() {
  BaseObject.call(this);
  /** @member {platformCore:RecordRef} */
  this.fieldDescription = undefined;
  /** @member {xsd:int} */
  this.pageIndex = undefined;
};

util.inherits(GetSelectValue, BaseObject);

/** @override */
GetSelectValue.prototype.getAttributes = function() {
  return this.additionalAttributeTypes();
};

/** @override */
GetSelectValue.prototype.getUnserializablePropertyNames = function() {
  return [];
};

/** @override */
GetSelectValue.prototype.getSOAPType = function(prefix) {
  if (prefix) {
    return prefix + ':' + (this._type || 'GetSelectValue');
  }
  return this._type || 'GetSelectValue';
};

GetSelectValue.prototype.getNS = function () {
  return {
    key: 'getSelectValueRequest',
    value: 'urn:common_' + this.getApiVersion() + '.platform.webservices.netsuite.com'
  };
};
