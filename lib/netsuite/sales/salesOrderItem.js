'use strict';

var util = require('util'),
  BaseObject = require('../baseObject');

/**
 * https://system.netsuite.com/help/helpcenter/en_US/srbrowser/Browser2017_2/schema/other/salesorderitem.html?mode=package
 *
 * @class
 * @extends BaseObject
 * @return {SalesOrderItem}
 */
var SalesOrderItem = module.exports = function SalesOrderItem() {
  BaseObject.call(this);
  /** @member {platformCore:RecordRef} */
  this.authCode = undefined;
  /** @member {platformCore:RecordRef} */
  this.job = undefined;
  /** @member {platformCore:RecordRef} */
  this.subscription = undefined;
  /** @member {platformCore:RecordRef} */
  this.item = undefined;
  /** @member {xsd:double} */
  this.quantityAvailable = undefined;
  /** @member {xsd:boolean} */
  this.expandItemGroup = undefined;
  /** @member {xsd:long} */
  this.lineUniqueKey = undefined;
  /** @member {xsd:double} */
  this.quantityOnHand = undefined;
  /** @member {xsd:double} */
  this.quantity = undefined;
  /** @member {platformCore:RecordRef} */
  this.units = undefined;
  /** @member {platformCommon:InventoryDetail} */
  this.inventoryDetail = undefined;
  /** @member {xsd:string} */
  this.description = undefined;
  /** @member {platformCore:RecordRef} */
  this.price = undefined;
  /** @member {xsd:string} */
  this.rate = undefined;
  /** @member {xsd:string} */
  this.serialNumbers = undefined;
  /** @member {xsd:double} */
  this.amount = undefined;
  /** @member {xsd:boolean} */
  this.isTaxable = undefined;
  /** @member {tranSalesTyp:SalesOrderItemCommitInventory} */
  this.commitInventory = undefined;
  /** @member {xsd:double} */
  this.orderPriority = undefined;
  /** @member {xsd:string} */
  this.licenseCode = undefined;
  /** @member {platformCore:CustomFieldList} */
  this.options = undefined;
  /** @member {platformCore:RecordRef} */
  this.department = undefined;
  /** @member {platformCore:RecordRef} */
  this.class = undefined;
  /** @member {platformCore:RecordRef} */
  this.location = undefined;
  /** @member {tranSalesTyp:SalesOrderItemCreatePo} */
  this.createPo = undefined;
  /** @member {platformCore:RecordRef} */
  this.createdPo = undefined;
  /** @member {xsd:double} */
  this.altSalesAmt = undefined;
  /** @member {xsd:boolean} */
  this.createWo = undefined;
  /** @member {platformCore:RecordRef} */
  this.poVendor = undefined;
  /** @member {xsd:string} */
  this.poCurrency = undefined;
  /** @member {xsd:double} */
  this.poRate = undefined;
  /** @member {platformCore:RecordRef} */
  this.revRecSchedule = undefined;
  /** @member {xsd:dateTime} */
  this.revRecStartDate = undefined;
  /** @member {xsd:long} */
  this.revRecTermInMonths = undefined;
  /** @member {xsd:dateTime} */
  this.revRecEndDate = undefined;
  /** @member {xsd:boolean} */
  this.deferRevRec = undefined;
  /** @member {xsd:boolean} */
  this.isClosed = undefined;
  /** @member {tranSalesTyp:SalesOrderItemFulfillmentChoice} */
  this.itemFulfillmentChoice = undefined;
  /** @member {platformCore:RecordRef} */
  this.catchUpPeriod = undefined;
  /** @member {platformCore:RecordRef} */
  this.billingSchedule = undefined;
  /** @member {xsd:boolean} */
  this.fromJob = undefined;
  /** @member {xsd:double} */
  this.grossAmt = undefined;
  /** @member {xsd:double} */
  this.taxAmount = undefined;
  /** @member {xsd:boolean} */
  this.excludeFromRateRequest = undefined;
  /** @member {xsd:boolean} */
  this.isEstimate = undefined;
  /** @member {xsd:long} */
  this.line = undefined;
  /** @member {xsd:double} */
  this.percentComplete = undefined;
  /** @member {platformCommonTyp:ItemCostEstimateType} */
  this.costEstimateType = undefined;
  /** @member {xsd:double} */
  this.costEstimate = undefined;
  /** @member {xsd:double} */
  this.quantityBackOrdered = undefined;
  /** @member {xsd:double} */
  this.quantityBilled = undefined;
  /** @member {xsd:double} */
  this.quantityCommitted = undefined;
  /** @member {xsd:double} */
  this.quantityFulfilled = undefined;
  /** @member {xsd:double} */
  this.quantityPacked = undefined;
  /** @member {xsd:double} */
  this.quantityPicked = undefined;
  /** @member {xsd:double} */
  this.tax1Amt = undefined;
  /** @member {platformCore:RecordRef} */
  this.taxCode = undefined;
  /** @member {xsd:double} */
  this.taxRate1 = undefined;
  /** @member {xsd:double} */
  this.taxRate2 = undefined;
  /** @member {xsd:string} */
  this.giftCertFrom = undefined;
  /** @member {xsd:string} */
  this.giftCertRecipientName = undefined;
  /** @member {xsd:string} */
  this.giftCertRecipientEmail = undefined;
  /** @member {xsd:string} */
  this.giftCertMessage = undefined;
  /** @member {xsd:string} */
  this.giftCertNumber = undefined;
  /** @member {xsd:long} */
  this.shipGroup = undefined;
  /** @member {xsd:boolean} */
  this.itemIsFulfilled = undefined;
  /** @member {platformCore:RecordRef} */
  this.shipAddress = undefined;
  /** @member {platformCore:RecordRef} */
  this.shipMethod = undefined;
  /** @member {platformCommonTyp:VsoeSopGroup} */
  this.vsoeSopGroup = undefined;
  /** @member {xsd:boolean} */
  this.vsoeIsEstimate = undefined;
  /** @member {xsd:double} */
  this.vsoePrice = undefined;
  /** @member {xsd:double} */
  this.vsoeAmount = undefined;
  /** @member {xsd:double} */
  this.vsoeAllocation = undefined;
  /** @member {platformCommonTyp:VsoeDeferral} */
  this.vsoeDeferral = undefined;
  /** @member {platformCommonTyp:VsoePermitDiscount} */
  this.vsoePermitDiscount = undefined;
  /** @member {xsd:boolean} */
  this.vsoeDelivered = undefined;
  /** @member {xsd:dateTime} */
  this.expectedShipDate = undefined;
  /** @member {xsd:boolean} */
  this.noAutoAssignLocation = undefined;
  /** @member {xsd:boolean} */
  this.locationAutoAssigned = undefined;
  /** @member {xsd:string} */
  this.taxDetailsReference = undefined;
  /** @member {platformCore:RecordRef} */
  this.chargeType = undefined;
  /** @member {platformCore:CustomFieldList} */
  this.customFieldList = undefined;
};

util.inherits(SalesOrderItem, BaseObject);

/** @override */
SalesOrderItem.prototype.getAttributes = function() {
  return this.additionalAttributeTypes();
};

/** @override */
SalesOrderItem.prototype.getUnserializablePropertyNames = function() {
  return [];
};

/** @override */
SalesOrderItem.prototype.getSOAPType = function(prefix) {
  if (prefix) {
    return prefix + ':' + (this._type || 'SalesOrderItem');
  }
  return this._type || 'SalesOrderItem';
};

SalesOrderItem.prototype.getNS = function () {
  return {
    key: 'tranSalesSalesOrderItem',
    value: 'urn:sales_' + this.getApiVersion() + '.transactions.webservices.netsuite.com'
  };
};
