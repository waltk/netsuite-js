'use strict';

var util = require('util'),
  BaseObject = require('../baseObject');

/**
 * https://system.netsuite.com/help/helpcenter/en_US/srbrowser/Browser2017_2/schema/record/address.html
 *
 * @class
 * @extends BaseObject
 * @return {Address}
 */
var Address = module.exports = function Address() {
  BaseObject.call(this);

  /** @member {String} */
  this.addr1 = undefined;

  /** @member {String} */
  this.addr2 = undefined;

  /** @member {String} */
  this.addr3 = undefined;

  /** @member {String} */
  this.addressee = undefined;

  /** @member {String} */
  this.addrPhone = undefined;

  /** @member {String} */
  this.addrText = undefined;

  /** @member {String} */
  this.attention = undefined;

  /** @member {String} */
  this.city = undefined;

  /**
   * https://system.netsuite.com/help/helpcenter/en_US/srbrowser/Browser2017_2/schema/enum/country.html?mode=package
   * @member {String}
   * */
  this.country = undefined;

  /**
   * https://system.netsuite.com/help/helpcenter/en_US/srbrowser/Browser2017_2/schema/other/customfieldlist.html?mode=package
   * @member {String}
   * */
  this.customFieldList = undefined;

  /** @member {String} */
  this.internalId = undefined;

  /** @member {Boolean} */
  this.override = undefined;

  /** @member {String} */
  this.state = undefined;

  /** @member {String} */
  this.zip = undefined;

};

util.inherits(Address, BaseObject);

/**
 * @override
 */
Address.prototype.getAttributes = function() {
  var attrs = {
    'xsi:type': 'platformCore:Address'
  };

  var attributeNames = [];
  if (this) {
    var self = this;
    attributeNames.forEach(function (attrName) {
      if (self[attrName] || self[attrName] === false || self[attrName] === 0) {
        attrs[attrName] = self[attrName];
      }
    });
  }

  return attrs;
};

/**
 * @override
 */
Address.prototype.getUnserializablePropertyNames = function() {
  return [];
};

/**
 * @override
 */
Address.prototype.getSOAPType = function() {
  // Always baseRef
  return 'Address';
};
