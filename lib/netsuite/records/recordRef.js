'use strict';

var util = require('util'),
  BaseObject = require('../baseObject');

/*
 @types
 https://system.netsuite.com/help/helpcenter/en_US/srbrowser/Browser2017_2/schema/enum/recordtype.html?mode=package
* */

/**
 * https://system.netsuite.com/help/helpcenter/en_US/srbrowser/Browser2014_2/schema/other/recordref.html?mode=package
 *
 * @class
 * @extends BaseObject
 * @return {RecordRef}
 */
var RecordRef = module.exports = function RecordRef() {
  BaseObject.call(this);

  /**
   * @member {String|Number}
   */
  this.internalId = null;

  /**
   * @member {String|Number}
   */
  this.externalId = null;
};

util.inherits(RecordRef, BaseObject);

/**
 * @override
 */
RecordRef.prototype.getAttributes = function() {
  var attrs = {
    'xsi:type': 'platformCore:RecordRef'
  };

  if (this.type) {
    attrs.type = this.type;
  }

  if (this.internalId) {
    attrs.internalId = this.internalId;
  }

  if (this.externalId) {
    attrs.externalId = this.externalId;
  }

  return attrs;
};

/**
 * @override
 */
RecordRef.prototype.getUnserializablePropertyNames = function() {
  return ['internalId', 'externalId', 'type'];
};

/**
 * @override
 */
RecordRef.prototype.getSOAPType = function() {
  // Always baseRef
  return 'baseRef';
};
