'use strict';

var util = require('util'),
  BaseObject = require('../baseObject');

/**
 * https://system.netsuite.com/help/helpcenter/en_US/srbrowser/Browser2017_2/schema/other/promotions.html?mode=package
 *
 * @class
 * @extends BaseObject
 * @return {Promotions}
 */
var Promotions = module.exports = function Promotions() {
  BaseObject.call(this);
  /** @member {platformCore:RecordRef} */
  this.couponCode = undefined;
  /** @member {platformCore:RecordRef} */
  this.promoCode = undefined;
};

util.inherits(Promotions, BaseObject);

/** @override */
Promotions.prototype.getAttributes = function() {
  return this.additionalAttributeTypes();
};

/** @override */
Promotions.prototype.getUnserializablePropertyNames = function() {
  return [];
};

/** @override */
Promotions.prototype.getSOAPType = function(prefix) {
  if (prefix) {
    return prefix + ':' + (this._type || 'Promotions');
  }
  return this._type || 'Promotions';
};

Promotions.prototype.getNS = function () {
  return {
    key: 'tranSalesPromotions',
    value: 'urn:sales_' + this.getApiVersion() + '.transactions.webservices.netsuite.com'
  };
};
