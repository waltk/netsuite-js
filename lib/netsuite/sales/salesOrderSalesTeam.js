'use strict';

var util = require('util'),
  BaseObject = require('../baseObject');

/**
 * https://system.netsuite.com/help/helpcenter/en_US/srbrowser/Browser2017_2/schema/other/salesordersalesteam.html?mode=package
 *
 * @class
 * @extends BaseObject
 * @return {SalesOrderSalesTeam}
 */
var SalesOrderSalesTeam = module.exports = function SalesOrderSalesTeam() {
  BaseObject.call(this);
  /** @member {xsd:double} */
  this.contribution = undefined;
  /** @member {platformCore:RecordRef } */
  this.employee = undefined;
  /** @member {boolean} */
  this.isPrimary = undefined;
  /** @member {platformCore:RecordRef} */
  this.salesRole = undefined;
};

util.inherits(SalesOrderSalesTeam, BaseObject);

/** @override */
SalesOrderSalesTeam.prototype.getAttributes = function() {
  return this.additionalAttributeTypes();
};

/** @override */
SalesOrderSalesTeam.prototype.getUnserializablePropertyNames = function() {
  return [];
};

/** @override */
SalesOrderSalesTeam.prototype.getSOAPType = function(prefix) {
  if (prefix) {
    return prefix + ':' + (this._type || 'SalesOrderSalesTeam');
  }
  return this._type || 'SalesOrderSalesTeam';
};

SalesOrderSalesTeam.prototype.getNS = function () {
  return {
    key: 'tranSalesSalesOrderSalesTeam',
    value: 'urn:sales_' + this.getApiVersion() + '.transactions.webservices.netsuite.com'
  };
};
