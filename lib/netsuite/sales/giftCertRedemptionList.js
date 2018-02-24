'use strict';

var util = require('util'),
  BaseObject = require('../baseObject');

/**
 * https://system.netsuite.com/help/helpcenter/en_US/srbrowser/Browser2017_2/schema/other/giftcertredemptionlist.html?mode=package
 *
 * @class
 * @extends BaseObject
 * @return {GiftCertRedemptionList}
 */
var GiftCertRedemptionList = module.exports = function GiftCertRedemptionList() {
  BaseObject.call(this);
  var self = this;
  /**
   * @member {tranSales:GiftCertRedemption}
   */
  this.giftCertRedemption = [];
  this.replaceAll = true;
};

util.inherits(GiftCertRedemptionList, BaseObject);

/** @override */
GiftCertRedemptionList.prototype.getAttributes = function() {
  return this.additionalAttributeTypes(['replaceAll']);
};

/** @override */
GiftCertRedemptionList.prototype.getUnserializablePropertyNames = function() {
  return ['replaceAll'];
};

/** @override */
GiftCertRedemptionList.prototype.getSOAPType = function(prefix) {
  if (prefix) {
    return prefix + ':' + (this._type || 'GiftCertRedemptionList');
  }
  return this._type || 'GiftCertRedemptionList';
};

GiftCertRedemptionList.prototype.getNS = function () {
  return {
    key: 'tranSalesGiftCertRedemptionList',
    value: 'urn:sales_' + this.getApiVersion() + '.transactions.webservices.netsuite.com'
  };
};
