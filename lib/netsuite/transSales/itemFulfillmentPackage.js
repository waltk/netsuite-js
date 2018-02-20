'use strict';

var util = require('util'),
  BaseObject = require('../baseObject');

/**
 * https://system.netsuite.com/help/helpcenter/en_US/srbrowser/Browser2014_2/schema/other/recordref.html?mode=package
 *
 * @class
 * @extends BaseObject
 * @return {ItemFulfillmentPackage}
 */
var ItemFulfillmentPackage = module.exports = function ItemFulfillmentPackage() {
  BaseObject.call(this);

  /**
   * @member {Number}
   */
  this.packageWeight = null;
  /**
   * @member {String}
   */
  this.packageDescr = null;
  /**
   * @member {Number|String}
   */
  this.packageTrackingNumber = null;

};

util.inherits(ItemFulfillmentPackage, BaseObject);

/**
 * @override
 */
ItemFulfillmentPackage.prototype.getAttributes = function() {
  var attrs = {
    type: this.type,
    'xsi:type': 'tranSales:ItemFulfillmentPackage'
  };

  if (this.packageWeight) {
    attrs.packageWeight = this.packageWeight;
  }
  if (this.packageDescr) {
    attrs.packageDescr = this.packageDescr;
  }
  if (this.packageTrackingNumber) {
    attrs.packageTrackingNumber = this.packageTrackingNumber;
  }

  return attrs;
};

/**
 * @override
 */
ItemFulfillmentPackage.prototype.getUnserializablePropertyNames = function() {
  return ['type'];
};

/**
 * @override
 */
ItemFulfillmentPackage.prototype.getSOAPType = function() {
  // Always baseRef
  return 'ItemFulfillmentPackage';
};
