'use strict';

var util = require('util'),
  BaseObject = require('../baseObject');

/**
 * https://system.netsuite.com/help/helpcenter/en_US/srbrowser/Browser2017_2/schema/other/customercreditcards.html?mode=package
 *
 * @class
 * @extends BaseObject
 * @return {CustomerCreditCards}
 */
var CustomerCreditCards = module.exports = function CustomerCreditCards() {
  BaseObject.call(this);

  /** @member {RecordRef} */
  this.cardState = undefined;
  /** @member {boolean} */
  this.ccDefault = undefined;
  /** @member {dateTime} */
  this.ccExpireDate = undefined;
  /** @member {String} */
  this.ccMemo = undefined;
  /** @member {String} */
  this.ccName = undefined;
  /** @member {String} */
  this.ccNumber = undefined;
  /** @member {String} */
  this.debitcardIssueNo = undefined;
  /** @member {String} */
  this.internalId = undefined;
  /** @member {RecordRef} */
  this.paymentMethod = undefined;
  /** @member {dateTime} */
  this.stateFrom = undefined;
  /** @member {dateTime} */
  this.validfrom = undefined;
};

util.inherits(CustomerCreditCards, BaseObject);

/** @override */
CustomerCreditCards.prototype.getAttributes = function() {
  return this.additionalAttributeTypes();
};

/** @override */
CustomerCreditCards.prototype.getUnserializablePropertyNames = function() {
  return [];
};

/** @override */
CustomerCreditCards.prototype.getSOAPType = function(prefix) {
  if (prefix) {
    return prefix + ':' + (this._type || 'CustomerCreditCardsList');
  }
  return this._type || 'CustomerCreditCards';
};

CustomerCreditCards.prototype.getNS = function () {
  return {
    key: 'relShipCustomerCreditCards',
    value: 'urn:relationships_' + this.getApiVersion() + '.lists.webservices.netsuite.com'
  };
};
