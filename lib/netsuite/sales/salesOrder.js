'use strict';

var util = require('util'),
  BaseObject = require('../baseObject');

/**
 * https://system.netsuite.com/help/helpcenter/en_US/srbrowser/Browser2017_2/schema/record/customer.html
 *
 * @class
 * @extends BaseObject
 * @return {SalesOrder}
 */
var SalesOrder = module.exports = function SalesOrder() {
  BaseObject.call(this);

  /** @member {xsd:dateTime} */
  this.createdDate = undefined;
  /** @member {platformCore:RecordRef} */
  this.customForm = undefined;
  /** @member {platformCore:RecordRef} */
  this.entity = undefined;
  /** @member {platformCore:RecordRef} */
  this.job = undefined;
  /** @member {platformCore:RecordRef} */
  this.currency = undefined;
  /** @member {platformCore:RecordRef} */
  this.drAccount = undefined;
  /** @member {platformCore:RecordRef} */
  this.fxAccount = undefined;
  /** @member {xsd:dateTime} */
  this.tranDate = undefined;
  /** @member {xsd:string} */
  this.tranId = undefined;
  /** @member {platformCore:RecordRef} */
  this.entityTaxRegNum = undefined;
  /** @member {xsd:string} */
  this.source = undefined;
  /** @member {platformCore:RecordRef} */
  this.createdFrom = undefined;
  /** @member {tranSalesTyp:SalesOrderOrderStatus} */
  this.orderStatus = undefined;
  /** @member {xsd:dateTime} */
  this.nextBill = undefined;
  /** @member {platformCore:RecordRef} */
  this.opportunity = undefined;
  /** @member {platformCore:RecordRef} */
  this.salesRep = undefined;
  /** @member {xsd:string} */
  this.contribPct = undefined;
  /** @member {platformCore:RecordRef} */
  this.partner = undefined;
  /** @member {platformCore:RecordRef} */
  this.salesGroup = undefined;
  /** @member {xsd:boolean} */
  this.syncSalesTeams = undefined;
  /** @member {platformCore:RecordRef} */
  this.leadSource = undefined;
  /** @member {xsd:dateTime} */
  this.startDate = undefined;
  /** @member {xsd:dateTime} */
  this.endDate = undefined;
  /** @member {xsd:string} */
  this.otherRefNum = undefined;
  /** @member {xsd:string} */
  this.memo = undefined;
  /** @member {xsd:dateTime} */
  this.salesEffectiveDate = undefined;
  /** @member {xsd:boolean} */
  this.excludeCommission = undefined;
  /** @member {xsd:double} */
  this.totalCostEstimate = undefined;
  /** @member {xsd:double} */
  this.estGrossProfit = undefined;
  /** @member {xsd:double} */
  this.estGrossProfitPercent = undefined;
  /** @member {xsd:double} */
  this.exchangeRate = undefined;
  /** @member {platformCore:RecordRef} */
  this.promoCode = undefined;
  /** @member {xsd:string} */
  this.currencyName = undefined;
  /** @member {platformCore:RecordRef} */
  this.discountItem = undefined;
  /** @member {xsd:string} */
  this.discountRate = undefined;
  /** @member {xsd:boolean} */
  this.isTaxable = undefined;
  /** @member {platformCore:RecordRef} */
  this.taxItem = undefined;
  /** @member {xsd:double} */
  this.taxRate = undefined;
  /** @member {xsd:boolean} */
  this.toBePrinted = undefined;
  /** @member {xsd:boolean} */
  this.toBeEmailed = undefined;
  /** @member {xsd:string} */
  this.email = undefined;
  /** @member {xsd:boolean} */
  this.toBeFaxed = undefined;
  /** @member {xsd:string} */
  this.fax = undefined;
  /** @member {platformCore:RecordRef} */
  this.messageSel = undefined;
  /** @member {xsd:string} */
  this.message = undefined;
  /** @member {platformCommon:Address} */
  this.billingAddress = undefined;
  /** @member {platformCore:RecordRef} */
  this.billAddressList = undefined;
  /** @member {platformCommon:Address} */
  this.shippingAddress = undefined;
  /** @member {xsd:boolean} */
  this.shipIsResidential = undefined;
  /** @member {platformCore:RecordRef} */
  this.shipAddressList = undefined;
  /** @member {xsd:string} */
  this.fob = undefined;
  /** @member {xsd:dateTime} */
  this.shipDate = undefined;
  /** @member {xsd:dateTime} */
  this.actualShipDate = undefined;
  /** @member {platformCore:RecordRef} */
  this.shipMethod = undefined;
  /** @member {xsd:double} */
  this.shippingCost = undefined;
  /** @member {xsd:double} */
  this.shippingTax1Rate = undefined;
  /** @member {xsd:boolean} */
  this.isMultiShipTo = undefined;
  /** @member {xsd:string} */
  this.shippingTax2Rate = undefined;
  /** @member {platformCore:RecordRef} */
  this.shippingTaxCode = undefined;
  /** @member {platformCore:RecordRef} */
  this.handlingTaxCode = undefined;
  /** @member {xsd:double} */
  this.handlingTax1Rate = undefined;
  /** @member {xsd:string} */
  this.handlingTax2Rate = undefined;
  /** @member {xsd:double} */
  this.handlingCost = undefined;
  /** @member {xsd:string} */
  this.trackingNumbers = undefined;
  /** @member {xsd:string} */
  this.linkedTrackingNumbers = undefined;
  /** @member {xsd:boolean} */
  this.shipComplete = undefined;
  /** @member {platformCore:RecordRef} */
  this.paymentMethod = undefined;
  /** @member {xsd:string} */
  this.shopperIpAddress = undefined;
  /** @member {xsd:boolean} */
  this.saveOnAuthDecline = undefined;
  /** @member {xsd:boolean} */
  this.canHaveStackable = undefined;
  /** @member {platformCore:RecordRef} */
  this.creditCard = undefined;
  /** @member {platformCommonTyp:RevenueStatus} */
  this.revenueStatus = undefined;
  /** @member {xsd:double} */
  this.recognizedRevenue = undefined;
  /** @member {xsd:double} */
  this.deferredRevenue = undefined;
  /** @member {xsd:boolean} */
  this.revRecOnRevCommitment = undefined;
  /** @member {platformCommonTyp:RevenueCommitStatus} */
  this.revCommitStatus = undefined;
  /** @member {xsd:string} */
  this.ccNumber = undefined;
  /** @member {xsd:dateTime} */
  this.ccExpireDate = undefined;
  /** @member {xsd:string} */
  this.ccName = undefined;
  /** @member {xsd:string} */
  this.ccStreet = undefined;
  /** @member {xsd:string} */
  this.ccZipCode = undefined;
  /** @member {xsd:string} */
  this.payPalStatus = undefined;
  /** @member {platformCore:RecordRef} */
  this.creditCardProcessor = undefined;
  /** @member {xsd:string} */
  this.payPalTranId = undefined;
  /** @member {xsd:boolean} */
  this.ccApproved = undefined;
  /** @member {xsd:boolean} */
  this.getAuth = undefined;
  /** @member {xsd:string} */
  this.authCode = undefined;
  /** @member {platformCommonTyp:AvsMatchCode} */
  this.ccAvsStreetMatch = undefined;
  /** @member {platformCommonTyp:AvsMatchCode} */
  this.ccAvsZipMatch = undefined;
  /** @member {xsd:boolean} */
  this.isRecurringPayment = undefined;
  /** @member {platformCommonTyp:AvsMatchCode} */
  this.ccSecurityCodeMatch = undefined;
  /** @member {xsd:double} */
  this.altSalesTotal = undefined;
  /** @member {xsd:boolean} */
  this.ignoreAvs = undefined;
  /** @member {tranSalesTyp:TransactionPaymentEventResult} */
  this.paymentEventResult = undefined;
  /** @member {tranSalesTyp:TransactionPaymentEventHoldReason} */
  this.paymentEventHoldReason = undefined;
  /** @member {tranSalesTyp:TransactionPaymentEventType} */
  this.paymentEventType = undefined;
  /** @member {xsd:dateTime} */
  this.paymentEventDate = undefined;
  /** @member {xsd:string} */
  this.paymentEventUpdatedBy = undefined;
  /** @member {xsd:double} */
  this.subTotal = undefined;
  /** @member {xsd:double} */
  this.discountTotal = undefined;
  /** @member {xsd:double} */
  this.taxTotal = undefined;
  /** @member {xsd:double} */
  this.altShippingCost = undefined;
  /** @member {xsd:double} */
  this.altHandlingCost = undefined;
  /** @member {xsd:double} */
  this.total = undefined;
  /** @member {platformCore:RecordRef} */
  this.revRecSchedule = undefined;
  /** @member {xsd:dateTime} */
  this.revRecStartDate = undefined;
  /** @member {xsd:dateTime} */
  this.revRecEndDate = undefined;
  /** @member {xsd:string} */
  this.paypalAuthId = undefined;
  /** @member {xsd:double} */
  this.balance = undefined;
  /** @member {xsd:boolean} */
  this.paypalProcess = undefined;
  /** @member {platformCore:RecordRef} */
  this.billingSchedule = undefined;
  /** @member {xsd:string} */
  this.ccSecurityCode = undefined;
  /** @member {xsd:string} */
  this.threeDStatusCode = undefined;
  /** @member {platformCore:RecordRef} */
  this.class = undefined;
  /** @member {platformCore:RecordRef} */
  this.department = undefined;
  /** @member {platformCore:RecordRef} */
  this.subsidiary = undefined;
  /** @member {platformCore:RecordRef} */
  this.intercoTransaction = undefined;
  /** @member {platformCommonTyp:IntercoStatus} */
  this.intercoStatus = undefined;
  /** @member {xsd:string} */
  this.debitCardIssueNo = undefined;
  /** @member {xsd:dateTime} */
  this.lastModifiedDate = undefined;
  /** @member {platformCore:RecordRef} */
  this.nexus = undefined;
  /** @member {platformCore:RecordRef} */
  this.subsidiaryTaxRegNum = undefined;
  /** @member {xsd:boolean} */
  this.taxRegOverride = undefined;
  /** @member {xsd:boolean} */
  this.taxDetailsOverride = undefined;
  /** @member {platformCore:RecordRef} */
  this.location = undefined;
  /** @member {xsd:string} */
  this.pnRefNum = undefined;
  /** @member {xsd:string} */
  this.status = undefined;
  /** @member {xsd:double} */
  this.tax2Total = undefined;
  /** @member {platformCore:RecordRef} */
  this.terms = undefined;
  /** @member {xsd:dateTime} */
  this.validFrom = undefined;
  /** @member {xsd:string} */
  this.vatRegNum = undefined;
  /** @member {xsd:double} */
  this.giftCertApplied = undefined;
  /** @member {xsd:double} */
  this.oneTime = undefined;
  /** @member {xsd:double} */
  this.recurWeekly = undefined;
  /** @member {xsd:double} */
  this.recurMonthly = undefined;
  /** @member {xsd:double} */
  this.recurQuarterly = undefined;
  /** @member {xsd:double} */
  this.recurAnnually = undefined;
  /** @member {xsd:boolean} */
  this.tranIsVsoeBundle = undefined;
  /** @member {xsd:boolean} */
  this.vsoeAutoCalc = undefined;
  /** @member {xsd:boolean} */
  this.syncPartnerTeams = undefined;
  /** @member {tranSales:SalesOrderSalesTeamList} */
  this.salesTeamList = undefined;
  /** @member {tranSales:SalesOrderPartnersList} */
  this.partnersList = undefined;
  /** @member {tranSales:GiftCertRedemptionList} */
  this.giftCertRedemptionList = undefined;
  /** @member {tranSales:PromotionsList} */
  this.promotionsList = undefined;
  /** @member {tranSales:SalesOrderItemList} */
  this.itemList = undefined;
  /** @member {tranSales:SalesOrderShipGroupList} */
  this.shipGroupList = undefined;
  /** @member {platformCommon:AccountingBookDetailList} */
  this.accountingBookDetailList = undefined;
  /** @member {platformCommon:TaxDetailsList} */
  this.taxDetailsList = undefined;
  /** @member {platformCore:CustomFieldList} */
  this.customFieldList = undefined;
  /** @member {String} */
  this.externalId = null;
  /** @member {String} */
  this.internalId = null;
};

util.inherits(SalesOrder, BaseObject);

/**
 * @override
 */
SalesOrder.prototype.getAttributes = function() {
  return this.additionalAttributeTypes(['externalId', 'internalId']);
};

/**
 * @override
 */
SalesOrder.prototype.getUnserializablePropertyNames = function() {
  return ['externalId', 'internalId'];
};

SalesOrder.prototype.getSOAPType = function() {
  return this._type || 'SalesOrder';
};

SalesOrder.prototype.getNS = function () {
  return {
    key: 'tranSalesSalesOrder',
    value: 'urn:sales_' + this.getApiVersion() + '.transactions.webservices.netsuite.com'
  };
};
