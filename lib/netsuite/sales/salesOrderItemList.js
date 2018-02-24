'use strict';

var util = require('util'),
  BaseObject = require('../baseObject');

/**
 * https://system.netsuite.com/help/helpcenter/en_US/srbrowser/Browser2017_2/schema/other/salesorderitemlist.html?mode=package
 *
 * @class
 * @extends BaseObject
 * @return {SalesOrderItemList}
 */
var SalesOrderItemList = module.exports = function SalesOrderItemList() {
  BaseObject.call(this);
  var self = this;
  /**
   * @member {tranSales:SalesOrderItem}
   */
  this.item = [];
  this.replaceAll = true;
};

util.inherits(SalesOrderItemList, BaseObject);

/** @override */
SalesOrderItemList.prototype.getAttributes = function() {
  return this.additionalAttributeTypes(['replaceAll']);
};

/** @override */
SalesOrderItemList.prototype.getUnserializablePropertyNames = function() {
  return ['replaceAll'];
};

/** @override */
SalesOrderItemList.prototype.getSOAPType = function(prefix) {
  if (prefix) {
    return prefix + ':' + (this._type || 'SalesOrderItemList');
  }
  return this._type || 'SalesOrderItemList';
};

SalesOrderItemList.prototype.getNS = function () {
  return {
    key: 'tranSalesSalesOrderItemList',
    value: 'urn:sales_' + this.getApiVersion() + '.transactions.webservices.netsuite.com'
  };
};
