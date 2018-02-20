'use strict';

var util = require('util'),
  BaseObject = require('../baseObject'), RecordRef = require('../records/recordRef');

/**
 * https://system.netsuite.com/help/helpcenter/en_US/srbrowser/Browser2014_2/schema/other/recordref.html?mode=package
 *
 * @class
 * @extends BaseObject
 * @return {ItemFulfillmentItem}
 */
var ItemFulfillmentItem = module.exports = function ItemFulfillmentItem() {
  BaseObject.call(this);

  /**
   * @member {RecordRef}
   */
  this.item = null;


  /**
   * @member {String}
   */
  this.serialNumbers

  /**
   * @member {Number}
   */
  this.quantity = null;

  /**
   * @member {Number}
   */
  this.orderLine = null;
};

util.inherits(ItemFulfillmentItem, BaseObject);

/**
 * @override
 */
ItemFulfillmentItem.prototype.getAttributes = function() {
  var attrs = {
    type: this.type,
    'xsi:type': 'tranSales:ItemFulfillmentItem'
  };

  if (this.item) {
    attrs.item = this.item;
  }


  if (this.serialNumbers) {
    attrs.serialNumbers = this.serialNumbers;
  }

  if (this.orderLine) {
    attrs.orderLine = this.orderLine;
  }


  if (this.quantity) {
    attrs.quantity = this.quantity;
  }

  return attrs;
};

/**
 * @override
 */
ItemFulfillmentItem.prototype.getUnserializablePropertyNames = function() {
  return ['internalId', 'externalId', 'type'];
};

/**
 * @override
 */
ItemFulfillmentItem.prototype.getSOAPType = function() {
  // Always baseRef
  return 'ItemFulfillmentItem';
};
