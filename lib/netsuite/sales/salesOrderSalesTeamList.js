'use strict';

var util = require('util'),
  BaseObject = require('../baseObject');

/**
 * https://system.netsuite.com/help/helpcenter/en_US/srbrowser/Browser2017_2/schema/other/salesordersalesteamlist.html?mode=package
 *
 * @class
 * @extends BaseObject
 * @return {SalesOrderSalesTeamList}
 */
var SalesOrderSalesTeamList = module.exports = function SalesOrderSalesTeamList() {
  BaseObject.call(this);
  var self = this;
  /**
   * @member {SalesOrderSalesTeam}
   */
  this.salesTeam = [];
  this.replaceAll = true;
};

util.inherits(SalesOrderSalesTeamList, BaseObject);

/** @override */
SalesOrderSalesTeamList.prototype.getAttributes = function() {
  return this.additionalAttributeTypes(['replaceAll']);
};

/** @override */
SalesOrderSalesTeamList.prototype.getUnserializablePropertyNames = function() {
  return ['replaceAll'];
};

/** @override */
SalesOrderSalesTeamList.prototype.getSOAPType = function(prefix) {
  if (prefix) {
    return prefix + ':' + (this._type || 'SalesOrderSalesTeamList');
  }
  return this._type || 'SalesOrderSalesTeamList';
};

SalesOrderSalesTeamList.prototype.getNS = function () {
  return {
    key: 'tranSalesSalesOrderSalesTeamList',
    value: 'urn:sales_' + this.getApiVersion() + '.transactions.webservices.netsuite.com'
  };
};
