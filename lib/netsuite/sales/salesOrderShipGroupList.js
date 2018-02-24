'use strict';

var util = require('util'),
  BaseObject = require('../baseObject');

/**
 * https://system.netsuite.com/help/helpcenter/en_US/srbrowser/Browser2017_2/schema/other/salesordershipgrouplist.html?mode=package
 *
 * @class
 * @extends BaseObject
 * @return {SalesOrderShipGroupList}
 */
var SalesOrderShipGroupList = module.exports = function SalesOrderShipGroupList() {
  BaseObject.call(this);
  var self = this;
  /**
   * @member {TransactionShipGroup}
   */
  this.shipGroup = [];
  this.replaceAll = true;
};

util.inherits(SalesOrderShipGroupList, BaseObject);

/** @override */
SalesOrderShipGroupList.prototype.getAttributes = function() {
  return this.additionalAttributeTypes(['replaceAll']);
};

/** @override */
SalesOrderShipGroupList.prototype.getUnserializablePropertyNames = function() {
  return ['replaceAll'];
};

/** @override */
SalesOrderShipGroupList.prototype.getSOAPType = function(prefix) {
  if (prefix) {
    return prefix + ':' + (this._type || 'SalesOrderShipGroupList');
  }
  return this._type || 'SalesOrderShipGroupList';
};

SalesOrderShipGroupList.prototype.getNS = function () {
  return {
    key: 'tranSalesSalesOrderShipGroupList',
    value: 'urn:sales_' + this.getApiVersion() + '.transactions.webservices.netsuite.com'
  };
};
