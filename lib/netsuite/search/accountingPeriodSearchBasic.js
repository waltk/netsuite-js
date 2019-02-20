'use strict';

var util = require('util'),
  SearchRecord = require('./searchRecord');

/**
 * https://system.netsuite.com/help/helpcenter/en_US/srbrowser/Browser2014_2/schema/search/accountingperiodsearchbasic.html?mode=package
 *
 * @class
 * @extends SearchRecord
 * @return {AccountingPeriodSearchBasic}
 */
var AccountingPeriodSearchBasic = module.exports = function AccountingPeriodSearchBasic() {
  SearchRecord.call(this);
};

util.inherits(AccountingPeriodSearchBasic, SearchRecord);

/**
 * @override
 */
AccountingPeriodSearchBasic.prototype.getAttributes = function() {
  var attrs = {
    'xsi:type': 'platformCommon:AccountingPeriodSearchBasic'
  };

  return attrs;
};
