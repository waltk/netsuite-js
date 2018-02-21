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

  /**
   * @member {listRel:CustomerAddressbook}
   */
  this.addressbook = [];

};

util.inherits(CustomerAddressbookList, BaseObject);

/**
 * @override
 */
CustomerAddressbookList.__proto__.getAttributes = function() {
  var attrs = {
    'xsi:type': 'platformCore:CustomerAddressbookList'
  };
  if (this.replaceAll === true || this.replaceAll === false) {
    attrs.replaceAll = this.replaceAll;
  }
  return attrs;
};

/**
 * @override
 */
CustomerAddressbookList.__proto__.getUnserializablePropertyNames = function() {
  return ['replaceAll'];
};

/**
 * @override
 */
CustomerAddressbookList.__proto__.getSOAPType = function() {
  // Always baseRef
  return 'CustomerAddressbookList';
};
