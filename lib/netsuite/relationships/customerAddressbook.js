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

/** @override */
CustomerAddressbook.prototype.getAttributes = function() {
  return this.additionalAttributeTypes();
};

/** @override */
CustomerAddressbook.prototype.getUnserializablePropertyNames = function() {
  return [];
};

/** @override */
CustomerAddressbook.prototype.getSOAPType = function(prefix) {
  if (prefix) {
    return prefix + ':' + (this._type || 'CustomerAddressbookList');
  }
  return this._type || 'CustomerAddressbook';
};

CustomerAddressbook.prototype.getNS = function () {
  return {
    key: 'relShipCustomerAddressbook',
    value: 'urn:relationships_' + this.getApiVersion() + '.lists.webservices.netsuite.com'
  };
};
