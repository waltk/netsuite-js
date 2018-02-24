'use strict';

var util = require('util'),
  BaseObject = require('../baseObject');

/**
 * https://system.netsuite.com/help/helpcenter/en_US/srbrowser/Browser2017_2/schema/other/accountingbookdetail.html?mode=package
 *
 * @class
 * @extends BaseObject
 * @return {AccountingBookDetail}
 */
var AccountingBookDetail = module.exports = function AccountingBookDetail() {
  BaseObject.call(this);

  /** @member {RecordRef} */
  this.accountingBook = undefined;
  /** @member {RecordRef} */
  this.currency = undefined;
  /** @member {double} */
  this.exchangeRate = undefined;
};

util.inherits(AccountingBookDetail, BaseObject);

/** @override */
AccountingBookDetail.prototype.getAttributes = function() {
  return this.additionalAttributeTypes();
};

/** @override */
AccountingBookDetail.prototype.getUnserializablePropertyNames = function() {
  return [];
};

/** @override */
AccountingBookDetail.prototype.getSOAPType = function(prefix) {
  if (prefix) {
    return prefix + ':' + (this._type || 'AccountingBookDetail');
  }
  return this._type || 'AccountingBookDetail';
};

AccountingBookDetail.prototype.getNS = function () {
  return {
    key: 'platformCommonAccountingBookDetail',
    value: 'urn:common_' + this.getApiVersion() + '.platform.webservices.netsuite.com'
  };
};
