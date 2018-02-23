'use strict';

var _ = require('lodash');
var convert = require('data2xml')({ xmlDecl : false });

/**
 * Static helper class for serializing NetSuite objects to format that the
 * `node-soap` client understands
 * @class
 * @return {Serializer}
 */
var Serializer = module.exports = function Serializer() {};

/**
 * Serialize a NetSuite.Object to `node-soap` format
 * @param {NetSuite.BaseObject} object
 * @return {Object} SOAP object
 */
Serializer.serialize = function(object) {
  var soapObj;
  if (!object) {
    return undefined;
  } else if (object.constructor === Array) {
    soapObj = {};
    object.forEach(function(el) {
      var serialized = Serializer.serialize(el);
      var type = el.getSOAPType();
      soapObj[type] = soapObj[type] || [];
      soapObj[type].push(serialized[type]);
    });
  } else if (typeof object === 'object') {
    // Get class static property
    var type = object.getSOAPType();

    if (type) {
      soapObj = {};
      soapObj[type] = {};
      soapObj[type].$attributes = object.getAttributes();
      if (!soapObj[type].$attributes) {
        delete soapObj[type].$attributes;
      }
      var xmlOverride = object.getXml();
      if (xmlOverride) {
        soapObj[type].$xml = xmlOverride;
      } else {
        // Recursively serialize properties
        var unserializablePropertyNames = object.getUnserializablePropertyNames();
        _.forOwn(object, function(value, key) {
          if (unserializablePropertyNames.indexOf(key) < 0 && typeof value !== 'undefined' && key !== '_type') {
            var ns = object.getNS();
            var tKey = ns ? (ns.key + ':' + key) : key;
            if (Array.isArray(value)) {
              soapObj[type][tKey] = [];
              _.each(value, function (o, i) {
                var serialized = Serializer.serialize(o);
                if (typeof serialized !== 'undefined') {
                  var childType = o.getSOAPType();
                  soapObj[type][tKey].push(serialized[childType]);
                } else {
                  soapObj[type][tKey].push(value);
                }
              });
            } else {
              var serialized = Serializer.serialize(value);
              if (typeof serialized !== 'undefined') {
                var childType = value.getSOAPType();
                soapObj[type][tKey] = serialized[childType];
              } else {
                // Not an attribute and no special serialization, just retain original value
                soapObj[type][tKey] = value;
              }
            }
          }
        });
      }
    }
  }

  return soapObj;
};
