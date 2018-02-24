'use strict';

var util = require('util'),
  BaseObject = require('../baseObject');

/**
 * https://system.netsuite.com/help/helpcenter/en_US/srbrowser/Browser2017_2/schema/other/inventoryassignment.html?mode=package
 *
 * @class
 * @extends BaseObject
 * @return {InventoryAssignment}
 */
var InventoryAssignment = module.exports = function InventoryAssignment() {
  BaseObject.call(this);

  /** @member {RecordRef} */
  this.binNumber = undefined;
  /** @member {dateTime} */
  this.expirationDate = undefined;
  /** @member {string} */
  this.internalId = undefined;
  /** @member {RecordRef} */
  this.issueInventoryNumber = undefined;
  /** @member {double} */
  this.quantity = undefined;
  /** @member {double} */
  this.quantityAvailable = undefined;
  /** @member {string} */
  this.receiptInventoryNumber = undefined;
  /** @member {RecordRef} */
  this.toBinNumber = undefined;
};

util.inherits(InventoryAssignment, BaseObject);

/** @override */
InventoryAssignment.prototype.getAttributes = function() {
  return this.additionalAttributeTypes();
};

/** @override */
InventoryAssignment.prototype.getUnserializablePropertyNames = function() {
  return [];
};

/** @override */
InventoryAssignment.prototype.getSOAPType = function(prefix) {
  if (prefix) {
    return prefix + ':' + (this._type || 'InventoryAssignment');
  }
  return this._type || 'InventoryAssignment';
};

InventoryAssignment.prototype.getNS = function () {
  return {
    key: 'platformCommonInventoryAssignment',
    value: 'urn:common_' + this.getApiVersion() + '.platform.webservices.netsuite.com'
  };
};
