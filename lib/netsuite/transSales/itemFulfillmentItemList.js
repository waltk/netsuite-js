'use strict';

var util = require('util'),
  BaseObject = require('../baseObject');

/**
 * https://system.netsuite.com/help/helpcenter/en_US/srbrowser/Browser2014_2/schema/other/recordref.html?mode=package
 *
 * @class
 * @extends BaseObject
 * @return {ItemFulFillmentItemList}
 */
var ItemFulFillmentItemList = module.exports = function ItemFulFillmentItemList() {
  BaseObject.call(this);

  /**
   * @member {listRel}
   */
  this.items = null;

};

util.inherits(ItemFulFillmentItemList, BaseObject);

/**
 * @override
 */
ItemFulFillmentItemList.prototype.getAttributes = function() {
  var attrs = {
    type: this.type,
    'xsi:type': 'tranSales:ItemFulfillmentItemList'
  };

  if (this.items) {
    attrs.items = this.items;
  }

  return attrs;
};

/**
 * @override
 */
ItemFulFillmentItemList.prototype.getUnserializablePropertyNames = function() {
  return ['type'];
};

/**
 * @override
 */
ItemFulFillmentItemList.prototype.getSOAPType = function() {
  // Always baseRef
  return 'ItemFulfillmentItemList';
};
