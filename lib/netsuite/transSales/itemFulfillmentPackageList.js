'use strict';

var util = require('util'),
  BaseObject = require('../baseObject');

/**
 * https://system.netsuite.com/help/helpcenter/en_US/srbrowser/Browser2014_2/schema/other/recordref.html?mode=package
 *
 * @class
 * @extends BaseObject
 * @return {ItemFulfillmentPackageList}
 */
var ItemFulfillmentPackageList = module.exports = function ItemFulfillmentPackageList() {
  BaseObject.call(this);

  /**
   * @member {listRel}
   */
  this.packages = null;

};

util.inherits(ItemFulfillmentPackageList, BaseObject);

/**
 * @override
 */
ItemFulfillmentPackageList.prototype.getAttributes = function() {
  var attrs = {
    type: this.type,
    'xsi:type': 'tranSales:ItemFulfillmentPackageList'
  };

  if (this.packages) {
    attrs.packages = this.packages;
  }

  return attrs;
};

/**
 * @override
 */
ItemFulfillmentPackageList.prototype.getUnserializablePropertyNames = function() {
  return ['type'];
};

/**
 * @override
 */
ItemFulfillmentPackageList.prototype.getSOAPType = function() {
  // Always baseRef
  return 'ItemFulfillmentPackageList';
};
