'use strict';

var util = require('util'),
  BaseObject = require('../baseObject');

/**
 * https://system.netsuite.com/help/helpcenter/en_US/srbrowser/Browser2017_2/schema/other/taxdetails.html?mode=package
 *
 * @class
 * @extends BaseObject
 * @return {TaxDetails}
 */
var TaxDetails = module.exports = function TaxDetails() {
  BaseObject.call(this);
  /** @member {xsd:string} */
  this.taxDetailsReference = undefined;
  /** @member {xsd:double} */
  this.netAmount = undefined;
  /** @member {xsd:double} */
  this.grossAmount = undefined;
  /** @member {platformCore:RecordRef} */
  this.taxType = undefined;
  /** @member {platformCore:RecordRef} */
  this.taxCode = undefined;
  /** @member {xsd:double} */
  this.taxBasis = undefined;
  /** @member {xsd:double} */
  this.taxRate = undefined;
  /** @member {xsd:double} */
  this.taxAmount = undefined;
  /** @member {xsd:string} */
  this.calcDetail = undefined;
};

util.inherits(TaxDetails, BaseObject);

/** @override */
TaxDetails.prototype.getAttributes = function() {
  return this.additionalAttributeTypes();
};

/** @override */
TaxDetails.prototype.getUnserializablePropertyNames = function() {
  return [];
};

/** @override */
TaxDetails.prototype.getSOAPType = function(prefix) {
  if (prefix) {
    return prefix + ':' + (this._type || 'TaxDetails');
  }
  return this._type || 'TaxDetails';
};

TaxDetails.prototype.getNS = function () {
  return {
    key: 'platformCommonTaxDetails',
    value: 'urn:common_' + this.getApiVersion() + '.platform.webservices.netsuite.com'
  };
};
