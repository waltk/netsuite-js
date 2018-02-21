'use strict';

var util = require('util'),
  BaseObject = require('./baseObject');

/**
 *
 * @class
 * @extends BaseObject
 * @return {StringObject}
 */
var StringObject = module.exports = function StringObject(name, data) {
  BaseObject.call(this);

  /** @member {String} */
  this.data = data;
  this.name = name;
};

util.inherits(StringObject, BaseObject);

/**
 * @override
 */
StringObject.prototype.getAttributes = function() {
  return null;
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
  return ['data', 'name'];
};

StringObject.prototype.getSOAPType = function() {
  return this._type || ('relShip:' + this.name);
};

StringObject.prototype.getXml = function() {
  var xml = [];

  // if (this._type) { xml.push('<' + this._type + '>'); } else { xml.push('<' + 'relShip:' + this.name + '>'); }
  if (this.data) { xml.push(this.data); } else { xml.push(''); }
  // if (this._type) { xml.push('</' + this._type + '>'); } else { xml.push('</' + 'relShip:' + this.name + '>'); }

  return xml.join('');
};
