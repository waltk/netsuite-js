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
  this.addressbook.__proto__.getSOAPType = function () {
    return 'addressbook';
  };
  this.replaceAll = true;
};

util.inherits(CustomerAddressbookList, BaseObject);

/**
 * @override
 */
CustomerAddressbookList.prototype.getAttributes = function() {
  var attrs = {
    'xsi:type': 'listRel:CustomerAddressbookList'
  };
  attrs.replaceAll = this.replaceAll === true || this.replaceAll === false ? this.replaceAll : true;
  return attrs;
};

/**
 * @override
 */
CustomerAddressbookList.prototype.getUnserializablePropertyNames = function() {
  return ['replaceAll'];
};

/**
 * @override
 */
CustomerAddressbookList.prototype.getSOAPType = function() {
  // Always baseRef
  return this._type || 'addressbook';
};
