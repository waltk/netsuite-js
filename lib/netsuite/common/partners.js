'use strict';

var util = require('util'),
  BaseObject = require('../baseObject');

/**
 * https://system.netsuite.com/help/helpcenter/en_US/srbrowser/Browser2017_2/schema/other/partners.html?mode=package
 *
 * @class
 * @extends BaseObject
 * @return {Partners}
 */
var Partners = module.exports = function Partners() {
  BaseObject.call(this);

  /** @member {double} */
  this.contribution = undefined;
  /** @member {boolean} */
  this.isPrimary = undefined;
  /** @member {RecordRef} */
  this.partner = undefined;
  /** @member {RecordRef} */
  this.partnerRole = undefined;
};

util.inherits(Partners, BaseObject);

/** @override */
Partners.prototype.getAttributes = function() {
  return this.additionalAttributeTypes();
};

/** @override */
Partners.prototype.getUnserializablePropertyNames = function() {
  return [];
};

/** @override */
Partners.prototype.getSOAPType = function(prefix) {
  if (prefix) {
    return prefix + ':' + (this._type || 'Partners');
  }
  return this._type || 'Partners';
};

Partners.prototype.getNS = function () {
  return {
    key: 'platformCommonPartners',
    value: 'urn:common_' + this.getApiVersion() + '.platform.webservices.netsuite.com'
  };
};
