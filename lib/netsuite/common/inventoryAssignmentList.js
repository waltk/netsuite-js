'use strict';

var util = require('util'),
  BaseObject = require('../baseObject');

/**
 * https://system.netsuite.com/help/helpcenter/en_US/srbrowser/Browser2017_2/schema/other/inventoryassignmentlist.html?mode=package
 *
 * @class
 * @extends BaseObject
 * @return {InventoryAssignmentList}
 */
var InventoryAssignmentList = module.exports = function InventoryAssignmentList() {
  BaseObject.call(this);
  var self = this;
  /**
   * @member {platformCommon:AccountingBookDetail}
   */
  this.inventoryAssignment = [];
  this.replaceAll = true;
};

util.inherits(InventoryAssignmentList, BaseObject);

/** @override */
InventoryAssignmentList.prototype.getAttributes = function() {
  return this.additionalAttributeTypes(['replaceAll']);
};

/** @override */
InventoryAssignmentList.prototype.getUnserializablePropertyNames = function() {
  return ['replaceAll'];
};

/** @override */
InventoryAssignmentList.prototype.getSOAPType = function(prefix) {
  if (prefix) {
    return prefix + ':' + (this._type || 'InventoryAssignmentList');
  }
  return this._type || 'InventoryAssignmentList';
};

InventoryAssignmentList.prototype.getNS = function () {
  return {
    key: 'platformCommonInventoryAssignmentList',
    value: 'urn:common_' + this.getApiVersion() + '.platform.webservices.netsuite.com'
  };
};
