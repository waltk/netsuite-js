'use strict';

var util = require('util'),
  BaseObject = require('../baseObject');

/**
 * https://system.netsuite.com/help/helpcenter/en_US/srbrowser/Browser2017_2/schema/other/accountingbookdetaillist.html?mode=package
 *
 * @class
 * @extends BaseObject
 * @return {AccountingBookDetailList}
 */
var AccountingBookDetailList = module.exports = function AccountingBookDetailList() {
  BaseObject.call(this);
  var self = this;
  /**
   * @member {platformCommon:AccountingBookDetail}
   */
  this.accountingBookDetail = [];
  this.replaceAll = true;
};

util.inherits(AccountingBookDetailList, BaseObject);

/** @override */
AccountingBookDetailList.prototype.getAttributes = function() {
  return this.additionalAttributeTypes(['replaceAll']);
};

/** @override */
AccountingBookDetailList.prototype.getUnserializablePropertyNames = function() {
  return ['replaceAll'];
};

/** @override */
AccountingBookDetailList.prototype.getSOAPType = function(prefix) {
  if (prefix) {
    return prefix + ':' + (this._type || 'AccountingBookDetailList');
  }
  return this._type || 'AccountingBookDetailList';
};

AccountingBookDetailList.prototype.getNS = function () {
  return {
    key: 'platformCommonAccountingBookDetailList',
    value: 'urn:common_' + this.getApiVersion() + '.platform.webservices.netsuite.com'
  };
};
