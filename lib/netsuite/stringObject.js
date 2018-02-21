'use strict';

var util = require('util'),
  BaseObject = require('./baseObject');

/**
 *
 * @class
 * @extends BaseObject
 * @return {StringObject}
 */
var StringObject = module.exports = function StringObject() {
  BaseObject.call(this);

  /** @member {String} */
  this.data = undefined;

};

util.inherits(StringObject, BaseObject);

/**
 * @override
 */
StringObject.prototype.getAttributes = function() {
  var attrs = {
    'xsi:type': 'xsd:string'
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
StringObject.prototype.getUnserializablePropertyNames = function() {
  return [];
};

StringObject.prototype.getSOAPType = function() {
  return this._type || 'ns810:firstName';
};

StringObject.prototype.getXml = function() {
  var xml = [];

  if (this.basic) {
    if (this._type) {
      xml.push('<' + this._type + '>');
    } else {
      xml.push('<ns810:firstName>');
    }
    if (this.data) {
      xml.push(this.data);
    } else {
      xml.push(this.basic.getXml());
    }
    if (this._type) {
      xml.push('</' + this._type + '>');
    } else {
      xml.push('</ns810:firstName>');
    }
  }

  return xml.join('');
};
