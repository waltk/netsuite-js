'use strict';

var util = require('util'),
  BaseObject = require('../baseObject');

/**
 * https://system.netsuite.com/help/helpcenter/en_US/srbrowser/Browser2017_2/schema/other/transactionshipgroup.html?mode=package
 *
 * @class
 * @extends BaseObject
 * @return {TransactionShipGroup}
 */
var TransactionShipGroup = module.exports = function TransactionShipGroup() {
  BaseObject.call(this);
  /** @member {xsd:long} */
  this.id = undefined;
  /** @member {xsd:boolean} */
  this.isFulfilled = undefined;
  /** @member {xsd:double} */
  this.weight = undefined;
  /** @member {platformCore:RecordRef} */
  this.sourceAddressRef = undefined;
  /** @member {xsd:string} */
  this.sourceAddress = undefined;
  /** @member {platformCore:RecordRef} */
  this.destinationAddressRef = undefined;
  /** @member {xsd:string} */
  this.destinationAddress = undefined;
  /** @member {platformCore:RecordRef} */
  this.shippingMethodRef = undefined;
  /** @member {xsd:string} */
  this.shippingMethod = undefined;
  /** @member {xsd:boolean} */
  this.isHandlingTaxable = undefined;
  /** @member {platformCore:RecordRef} */
  this.handlingTaxCode = undefined;
  /** @member {xsd:string} */
  this.handlingTaxRate = undefined;
  /** @member {xsd:string} */
  this.handlingTax2Rate = undefined;
  /** @member {xsd:double} */
  this.handlingRate = undefined;
  /** @member {xsd:double} */
  this.handlingTaxAmt = undefined;
  /** @member {xsd:double} */
  this.handlingTax2Amt = undefined;
  /** @member {xsd:boolean} */
  this.isShippingTaxable = undefined;
  /** @member {platformCore:RecordRef} */
  this.shippingTaxCode = undefined;
  /** @member {xsd:string} */
  this.shippingTaxRate = undefined;
  /** @member {xsd:string} */
  this.shippingTax2Rate = undefined;
  /** @member {xsd:double} */
  this.shippingRate = undefined;
  /** @member {xsd:double} */
  this.shippingTaxAmt = undefined;
  /** @member {xsd:double} */
  this.shippingTax2Amt = undefined;
};

util.inherits(TransactionShipGroup, BaseObject);

/** @override */
TransactionShipGroup.prototype.getAttributes = function() {
  return this.additionalAttributeTypes();
};

/** @override */
TransactionShipGroup.prototype.getUnserializablePropertyNames = function() {
  return [];
};

/** @override */
TransactionShipGroup.prototype.getSOAPType = function(prefix) {
  if (prefix) {
    return prefix + ':' + (this._type || 'TransactionShipGroup');
  }
  return this._type || 'TransactionShipGroup';
};

TransactionShipGroup.prototype.getNS = function () {
  return {
    key: 'tranSalesTransactionShipGroup',
    value: 'urn:sales_' + this.getApiVersion() + '.transactions.webservices.netsuite.com'
  };
};
