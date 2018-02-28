'use strict';
var _ = require('lodash');
var getOptions = require('./../netsuite/options').get;
var getService = require('./../netsuite/globalService').get;

/**
 * Base class for all NetSuite data types
 *
 * @class
 * @return {BaseObject}
 */
var BaseObject = module.exports = function BaseObject() {};

/**
 * Get object's attributes
 * @virtual
 * @return {Object} attributes and values
 */
BaseObject.prototype.getAttributes = function() {
  throw new Error('Must be implemented by subclass');
};

/**
 * Get names of properties which should NOT be serialized as children
 * @return {String[]} list of properties
 */
BaseObject.prototype.getUnserializablePropertyNames = function() {
  return [];
};

/**
 * Get object's SOAP type (e.g. object's XML tag name)
 * @return {String} SOAP type
 */
BaseObject.prototype.getSOAPType = function() {
  return this.constructor.name;
};

/**
 * Get object's XML straight up. Used as last-resort workaround when
 * serialization fails due to bugs in `node-soap`.
 * @return {String} SOAP type
 */
BaseObject.prototype.getXml = function() {
  return '';
};

BaseObject.prototype.getNS = function() {
  return null;
};

BaseObject.prototype.additionalAttributeTypes = function(attributeNames) {
  var attrs = {
    'xsi:type': this.constructor.name,
    'xmlns:xsi': 'http://www.w3.org/2001/XMLSchema-instance'
  };
  var ns = this.getNS();
  if (ns) {
    attrs['xsi:type'] = ns.key + ':' + this.constructor.name;
    attrs['xmlns:' + ns.key] = ns.value;
  }
  if (this && attributeNames && Array.isArray(attributeNames)) {
    var self = this;
    attributeNames.forEach(function (attrName) {
      if (self[attrName] || self[attrName] === false || self[attrName] === 0) {
        attrs[attrName] = self[attrName];
      }
    });
  }
  return attrs;
};

BaseObject.prototype.getGlobalService = function () {
  return getService();
};

BaseObject.prototype.getGlobalOptions = function () {
  return getOptions();
};

BaseObject.prototype.getApiVersion = function () {
  return getOptions().apiVersion;
};
