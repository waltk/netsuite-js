'use strict';

var util = require('util'),
  BaseObject = require('../baseObject');

/**
 * https://system.netsuite.com/help/helpcenter/en_US/srbrowser/Browser2017_2/schema/other/giftcertredemption.html?mode=package
 *
 * @class
 * @extends BaseObject
 * @return {GiftCertRedemption}
 */
var GiftCertRedemption = module.exports = function GiftCertRedemption() {
  BaseObject.call(this);
  /** @member {platformCore:RecordRef} */
  this.authCode = undefined;
  /** @member {xsd:double} */
  this.authCodeApplied = undefined;
  /** @member {xsd:double} */
  this.authCodeAmtRemaining = undefined;
  /** @member {xsd:double} */
  this.giftCertAvailable = undefined;
};

util.inherits(GiftCertRedemption, BaseObject);

/** @override */
GiftCertRedemption.prototype.getAttributes = function() {
  return this.additionalAttributeTypes();
};

/** @override */
GiftCertRedemption.prototype.getUnserializablePropertyNames = function() {
  return [];
};

/** @override */
GiftCertRedemption.prototype.getSOAPType = function(prefix) {
  if (prefix) {
    return prefix + ':' + (this._type || 'GiftCertRedemption');
  }
  return this._type || 'GiftCertRedemption';
};

GiftCertRedemption.prototype.getNS = function () {
  return {
    key: 'tranSalesGiftCertRedemption',
    value: 'urn:sales_' + this.getApiVersion() + '.transactions.webservices.netsuite.com'
  };
};
