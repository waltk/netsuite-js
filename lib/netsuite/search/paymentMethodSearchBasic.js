'use strict';

var util = require('util'),
  SearchRecord = require('./searchRecord');

/**
 * https://system.netsuite.com/help/helpcenter/en_US/srbrowser/Browser2017_2/schema/search/paymentmethodsearchbasic.html?mode=package
 *
 * @class
 * @extends SearchRecord
 * @return {PaymentMethodSearchBasic}
 */
var PaymentMethodSearchBasic = module.exports = function PaymentMethodSearchBasic() {
  SearchRecord.call(this);
};

util.inherits(PaymentMethodSearchBasic, SearchRecord);

/**
 * @override
 */
PaymentMethodSearchBasic.prototype.getAttributes = function() {
  var attrs = {
    'xsi:type': 'platformCommon:PaymentMethodSearchBasic'
  };

  return attrs;
};
