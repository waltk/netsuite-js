'use strict';

var util = require('util'),
  BaseObject = require('../baseObject');

/**
 * https://system.netsuite.com/help/helpcenter/en_US/srbrowser/Browser2017_2/schema/other/customercreditcardslist.html?mode=package
 *
 * @class
 * @extends BaseObject
 * @return {CustomerCreditCardsList}
 */
var CustomerCreditCardsList = module.exports = function CustomerCreditCardsList() {
  BaseObject.call(this);
  var self = this;
  /**
   * @member {listRel:CustomerCreditCards}
   */
  this.creditCards = [];
  this.replaceAll = true;
};

util.inherits(CustomerCreditCardsList, BaseObject);

/** @override */
CustomerCreditCardsList.prototype.getAttributes = function() {
  return this.additionalAttributeTypes(['replaceAll']);
};

/** @override */
CustomerCreditCardsList.prototype.getUnserializablePropertyNames = function() {
  return ['replaceAll'];
};

/** @override */
CustomerCreditCardsList.prototype.getSOAPType = function(prefix) {
  if (prefix) {
    return prefix + ':' + (this._type || 'CustomerCreditCardsList');
  }
  return this._type || 'CustomerCreditCardsList';
};

CustomerCreditCardsList.prototype.getNS = function () {
  return {
    key: 'relShipCustomerCreditCardsList',
    value: 'urn:relationships_' + this.getApiVersion() + '.lists.webservices.netsuite.com'
  };
};
