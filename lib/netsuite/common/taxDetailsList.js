'use strict';

var util = require('util'),
  BaseObject = require('../baseObject');

/**
 * https://system.netsuite.com/help/helpcenter/en_US/srbrowser/Browser2017_2/schema/other/taxdetailslist.html?mode=package
 *
 * @class
 * @extends BaseObject
 * @return {TaxDetailsList}
 */
var TaxDetailsList = module.exports = function TaxDetailsList() {
  BaseObject.call(this);
  var self = this;
  /**
   * @member {platformCommon:TaxDetails}
   */
  this.taxDetails = [];
  this.replaceAll = true;
};

util.inherits(TaxDetailsList, BaseObject);

/** @override */
TaxDetailsList.prototype.getAttributes = function() {
  return this.additionalAttributeTypes(['replaceAll']);
};

/** @override */
TaxDetailsList.prototype.getUnserializablePropertyNames = function() {
  return ['replaceAll'];
};

/** @override */
TaxDetailsList.prototype.getSOAPType = function(prefix) {
  if (prefix) {
    return prefix + ':' + (this._type || 'TaxDetailsList');
  }
  return this._type || 'TaxDetailsList';
};

TaxDetailsList.prototype.getNS = function () {
  return {
    key: 'platformCommonTaxDetailsList',
    value: 'urn:common_' + this.getApiVersion() + '.platform.webservices.netsuite.com'
  };
};
