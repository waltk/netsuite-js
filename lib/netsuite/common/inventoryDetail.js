'use strict';

var util = require('util'),
  BaseObject = require('../baseObject');

/**
 * https://system.netsuite.com/help/helpcenter/en_US/srbrowser/Browser2017_2/schema/record/inventorydetail.html?mode=package
 *
 * @class
 * @extends BaseObject
 * @return {InventoryDetail}
 */
var InventoryDetail = module.exports = function InventoryDetail() {
  BaseObject.call(this);

  /** @member {RecordRef} */
  this.customForm = undefined;
  /** @member {InventoryAssignmentList} */
  this.inventoryAssignmentList = undefined;
};

util.inherits(InventoryDetail, BaseObject);

/** @override */
InventoryDetail.prototype.getAttributes = function() {
  return this.additionalAttributeTypes();
};

/** @override */
InventoryDetail.prototype.getUnserializablePropertyNames = function() {
  return [];
};

/** @override */
InventoryDetail.prototype.getSOAPType = function(prefix) {
  if (prefix) {
    return prefix + ':' + (this._type || 'InventoryDetail');
  }
  return this._type || 'InventoryDetail';
};

InventoryDetail.prototype.getNS = function () {
  return {
    key: 'platformCommonInventoryDetail',
    value: 'urn:common_' + this.getApiVersion() + '.platform.webservices.netsuite.com'
  };
};
