'use strict';

var util = require('util'),
  BaseObject = require('../baseObject');

/**
 * https://system.netsuite.com/help/helpcenter/en_US/srbrowser/Browser2017_2/schema/other/contactaccessroleslist.html?mode=package
 *
 * @class
 * @extends BaseObject
 * @return {ContactAccessRolesList}
 */
var ContactAccessRolesList = module.exports = function ContactAccessRolesList() {
  BaseObject.call(this);
  var self = this;
  /**
   * @member {listRel:ContactAccessRoles}
   */
  this.contactRoles = [];
  this.replaceAll = true;
};

util.inherits(ContactAccessRolesList, BaseObject);

/** @override */
ContactAccessRolesList.prototype.getAttributes = function() {
  return this.additionalAttributeTypes(['replaceAll']);
};

/** @override */
ContactAccessRolesList.prototype.getUnserializablePropertyNames = function() {
  return ['replaceAll'];
};

/** @override */
ContactAccessRolesList.prototype.getSOAPType = function(prefix) {
  if (prefix) {
    return prefix + ':' + (this._type || 'ContactAccessRolesList');
  }
  return this._type || 'ContactAccessRolesList';
};

ContactAccessRolesList.prototype.getNS = function () {
  return {
    key: 'relShipContactAccessRolesList',
    value: 'urn:relationships_' + this.getApiVersion() + '.lists.webservices.netsuite.com'
  };
};
