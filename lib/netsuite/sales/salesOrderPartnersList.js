'use strict';

var util = require('util'),
  BaseObject = require('../baseObject');

/**
 * https://system.netsuite.com/help/helpcenter/en_US/srbrowser/Browser2017_2/schema/other/salesorderpartnerslist.html?mode=package
 *
 * @class
 * @extends BaseObject
 * @return {SalesOrderPartnersList}
 */
var SalesOrderPartnersList = module.exports = function SalesOrderPartnersList() {
  BaseObject.call(this);
  var self = this;
  /**
   * @member {platformCommon:Partners}
   */
  this.partners = [];
  this.replaceAll = true;
};

util.inherits(SalesOrderPartnersList, BaseObject);

/** @override */
SalesOrderPartnersList.prototype.getAttributes = function() {
  return this.additionalAttributeTypes(['replaceAll']);
};

/** @override */
SalesOrderPartnersList.prototype.getUnserializablePropertyNames = function() {
  return ['replaceAll'];
};

/** @override */
SalesOrderPartnersList.prototype.getSOAPType = function(prefix) {
  if (prefix) {
    return prefix + ':' + (this._type || 'SalesOrderPartnersList');
  }
  return this._type || 'SalesOrderPartnersList';
};

SalesOrderPartnersList.prototype.getNS = function () {
  return {
    key: 'tranSalesSalesOrderPartnersList',
    value: 'urn:sales_' + this.getApiVersion() + '.transactions.webservices.netsuite.com'
  };
};
