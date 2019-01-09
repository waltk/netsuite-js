'use strict';

var util = require('util'),
  BaseObject = require('../baseObject');

/**
 * https://system.netsuite.com/help/helpcenter/en_US/srbrowser/Browser2014_2/schema/search/customersearchrow.html?mode=package
 *
 * @class
 * @extends BaseObject
 * @return {ItemSearchRow}
 */
var ItemSearchRow = module.exports = function ItemSearchRow() {
  BaseObject.call(this);

  /**
   * @member {ItemSearchRowBasic}
   */
  this.basic = undefined;

  // TODO: other fields
};

util.inherits(ItemSearchRow, BaseObject);

/**
 * @override
 */
ItemSearchRow.prototype.getAttributes = function() {
  var attrs = {
    'xsi:type': 'listAcct:ItemSearchRow'
  };

  return attrs;
};

/**
 * @override
 */
ItemSearchRow.prototype.getXml = function() {
  var xml = [];

  if (this.basic) {
    xml.push('<listAcct:basic>');
    xml.push(this.basic.getXml());
    xml.push('</listAcct:basic>');
  }

  return xml.join('');
};
