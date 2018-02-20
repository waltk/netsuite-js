'use strict';

var util = require('util'),
  BaseObject = require('../baseObject');

/**
 * https://system.netsuite.com/help/helpcenter/en_US/srbrowser/Browser2014_2/schema/other/recordref.html?mode=package
 *
 * @class
 * @extends BaseObject
 * @return {ItemFulFillment}
 */
var ItemFulFillment = module.exports = function ItemFulFillment() {
  BaseObject.call(this);

  /**
   * @member {String|Number}
   */
  this.internalId = null;

  /**
   * @member {String|Number}
   */
  this.externalId = null;


  /**
   * @member {RecordRef}
   */
  this.createdFrom;


  /**
   * @member {List}
   * tranSales:ItemFulfillmentItemList
   */
  this.itemList;

  /**
   * @member {List}
   * tranSales:ItemFulfillmentPackageList
   */
  this.packageList

};

util.inherits(ItemFulFillment, BaseObject);

/**
 * @override
 */
ItemFulFillment.prototype.getAttributes = function() {
  var attrs = {
    type: this.type,
    'xsi:type': 'tranSales:ItemFulfillment'
  };

  if (this.internalId) {
    attrs.internalId = this.internalId;
  }

  if (this.externalId) {
    attrs.externalId = this.externalId;
  }

  if (this.createdFrom) {
    attrs.createdFrom = this.createdFrom;
  }

  if (this.itemList) {
    attrs.itemList = this.itemList;
  }

  if (this.packageList) {
    attrs.packageList = this.packageList;
  }


  return attrs;
};

/**
 * @override
 */
ItemFulFillment.prototype.getUnserializablePropertyNames = function() {
  return ['internalId', 'externalId', 'type'];
};

/**
 * @override
 */
ItemFulFillment.prototype.getSOAPType = function() {
  // Always baseRef
  return 'ItemFulfillment';
};
