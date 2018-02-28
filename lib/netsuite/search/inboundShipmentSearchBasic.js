'use strict';

var util = require('util'),
  SearchRecord = require('./searchRecord');

/**
 * https://system.netsuite.com/help/helpcenter/en_US/srbrowser/Browser2017_2/schema/search/inboundshipmentsearchbasic.html?mode=package
 *
 * @class
 * @extends SearchRecord
 * @return {InboundShipmentSearchBasic}
 */
var InboundShipmentSearchBasic = module.exports = function InboundShipmentSearchBasic() {
  SearchRecord.call(this);
};

util.inherits(InboundShipmentSearchBasic, SearchRecord);

/**
 * @override
 */
InboundShipmentSearchBasic.prototype.getAttributes = function() {
  var attrs = {
    'xsi:type': 'platformCommon:InboundShipmentSearchBasic'
  };

  return attrs;
};
