'use strict';

var util = require('util'),
  BaseObject = require('../baseObject');

/**
 * https://system.netsuite.com/help/helpcenter/en_US/srbrowser/Browser2017_2/schema/other/customfieldlist.html?mode=package
 *
 * @class
 * @extends BaseObject
 * @return {Address}
 */
var CustomFieldList = module.exports = function CustomFieldList() {
  BaseObject.call(this);

  /** @member {customFieldRef[]} */
  this.customField = [];

};

util.inherits(CustomFieldList, BaseObject);

/**
 * @override
 */
CustomFieldList.prototype.getAttributes = function() {
  var attrs = {
    'xsi:type': 'platformCore:CustomFieldList'
  };

  var attributeNames = [];

  if (this) {
    var self = this;
    attributeNames.forEach(function (attrName) {
      if (self[attrName] || self[attrName] === false || self[attrName] === 0) {
        attrs[attrName] = self[attrName];
      }
    });
  }

  return attrs;
};

/**
 * @override
 */
CustomFieldList.prototype.getUnserializablePropertyNames = function() {
  return [];
};

/**
 * @override
 */
CustomFieldList.prototype.getSOAPType = function() {
  // Always baseRef
  return 'CustomFieldList';
};
