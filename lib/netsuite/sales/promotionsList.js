'use strict';

var util = require('util'),
  BaseObject = require('../baseObject');

/**
 * https://system.netsuite.com/help/helpcenter/en_US/srbrowser/Browser2017_2/schema/other/promotionslist.html?mode=package
 *
 * @class
 * @extends BaseObject
 * @return {PromotionsList}
 */
var PromotionsList = module.exports = function PromotionsList() {
  BaseObject.call(this);
  var self = this;
  /**
   * @member {tranSales:Promotions}
   */
  this.promotions = [];
  this.replaceAll = true;
};

util.inherits(PromotionsList, BaseObject);

/** @override */
PromotionsList.prototype.getAttributes = function() {
  return this.additionalAttributeTypes(['replaceAll']);
};

/** @override */
PromotionsList.prototype.getUnserializablePropertyNames = function() {
  return ['replaceAll'];
};

/** @override */
PromotionsList.prototype.getSOAPType = function(prefix) {
  if (prefix) {
    return prefix + ':' + (this._type || 'PromotionsList');
  }
  return this._type || 'PromotionsList';
};

PromotionsList.prototype.getNS = function () {
  return {
    key: 'tranSalesPromotionsList',
    value: 'urn:sales_' + this.getApiVersion() + '.transactions.webservices.netsuite.com'
  };
};
