'use strict';

var util = require('util'),
  BaseObject = require('../baseObject');

/**
 * https://system.netsuite.com/help/helpcenter/en_US/srbrowser/Browser2015_1/schema/record/inventoryitem.html?mode=package
 *
 * @class
 * @extends BaseObject
 * @return {InventoryItem}
 */
var InventoryItem = module.exports = function InventoryItem() {
  BaseObject.call(this);

  /** @member {string} */
  this.itemId = undefined;
  /** @member {string} */
  this.internalId = undefined;
  /** @member {RecordRef} */
  this.location = undefined;
  /** @member {double} */
  this.quantityOnHand = undefined;
  /** @member {double} */
  this.quantityAvailable = undefined;

//  /** @member {string} */
//  this.receiptInventoryNumber = undefined;
//  /** @member {RecordRef} */
//  this.toBinNumber = undefined;
//    /** @member {dateTime} */
//    this.expirationDate = undefined;
};

util.inherits(InventoryItem, BaseObject);

/** @override */
InventoryItem.prototype.getAttributes = function() {
  return this.additionalAttributeTypes();
};

/** @override */
InventoryItem.prototype.getUnserializablePropertyNames = function() {
  return [];
};

/** @override */
InventoryItem.prototype.getSOAPType = function(prefix) {
  if (prefix) {
    return prefix + ':' + (this._type || 'InventoryItem');
  }
  return this._type || 'InventoryItem';
};

InventoryItem.prototype.getNS = function () {
  return {
    key: 'listsAccountingInventoryItem',
    value: 'urn:accounting_' + this.getApiVersion() + '.lists.webservices.netsuite.com'
  };
};
