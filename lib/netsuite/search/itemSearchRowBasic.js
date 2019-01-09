'use strict';

var util = require('util'),
  SearchRowBasic = require('./searchRowBasic');

/**
 * https://system.na2.netsuite.com/help/helpcenter/en_US/srbrowser/Browser2015_1/schema/search/itemsearchrowbasic.html?mode=package
 *
 * @class
 * @extends SearchRowBasic
 * @return {ItemSearchRowBasic}
 */
var ItemSearchRowBasic = module.exports = function ItemSearchRowBasic() {
  SearchRowBasic.call(this);
};

util.inherits(ItemSearchRowBasic, SearchRowBasic);

/**
 * @override
 */
ItemSearchRowBasic.prototype.getAttributes = function() {
  var attrs = {
    'xsi:type': 'platformCommon:ItemSearchRowBasic'
  };

  return attrs;
};
