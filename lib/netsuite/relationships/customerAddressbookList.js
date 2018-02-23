'use strict';

var util = require('util'),
  BaseObject = require('../baseObject');

/**
 * https://system.netsuite.com/help/helpcenter/en_US/srbrowser/Browser2017_2/schema/other/customeraddressbooklist.html?mode=package
 *
 * @class
 * @extends BaseObject
 * @return {CustomerAddressbookList}
 */
var CustomerAddressbookList = module.exports = function CustomerAddressbookList() {
  BaseObject.call(this);
  var self = this;
  /**
   * @member {listRel:CustomerAddressbook}
   */
  this.addressbook = [];
  this.replaceAll = true;
};

util.inherits(CustomerAddressbookList, BaseObject);

/** @override */
CustomerAddressbookList.prototype.getAttributes = function() {
  return this.additionalAttributeTypes(['replaceAll']);
};

/** @override */
CustomerAddressbookList.prototype.getUnserializablePropertyNames = function() {
  return ['replaceAll'];
};

/** @override */
CustomerAddressbookList.prototype.getSOAPType = function(prefix) {
  if (prefix) {
    return prefix + ':' + (this._type || 'CustomerAddressbookList');
  }
  return this._type || 'CustomerAddressbookList';
};

CustomerAddressbookList.prototype.getNS = function () {
  return {
    key: 'relShipCustomerAddressbookList',
    value: 'urn:relationships_' + this.getApiVersion() + '.lists.webservices.netsuite.com'
  };
};
