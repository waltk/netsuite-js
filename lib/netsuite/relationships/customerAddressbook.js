'use strict';

var util = require('util'),
  BaseObject = require('../baseObject');

/**
 * https://system.netsuite.com/help/helpcenter/en_US/srbrowser/Browser2017_2/schema/other/customeraddressbook.html?mode=package
 *
 * @class
 * @extends BaseObject
 * @return {CustomerAddressbook}
 */
var CustomerAddressbook = module.exports = function CustomerAddressbook() {
  BaseObject.call(this);

  /** @member {Address} */
  this.addressbookAddress = undefined;
  /** @member {Boolean} */
  this.defaultBilling = undefined;
  /** @member {Boolean} */
  this.defaultShipping = undefined;
  /** @member {String} */
  this.internalId = undefined;
  /** @member {Boolean} */
  this.isResidential = undefined;
  /** @member {String} */
  this.label = undefined;
};

util.inherits(CustomerAddressbook, BaseObject);

/**
 * @override
 */
CustomerAddressbook.prototype.getAttributes = function() {
  var attrs = {
    'xsi:type': 'platformCore:CustomerAddressbook'
  };
  return attrs;
};

/**
 * @override
 */
CustomerAddressbook.prototype.getUnserializablePropertyNames = function() {
  return [];
};

/**
 * @override
 */
CustomerAddressbook.prototype.getSOAPType = function() {
  // Always baseRef
  return 'CustomerAddressbook';
};
