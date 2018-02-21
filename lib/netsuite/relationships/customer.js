'use strict';

var util = require('util'),
  BaseObject = require('../baseObject');

/**
 * https://system.netsuite.com/help/helpcenter/en_US/srbrowser/Browser2017_2/schema/record/address.html
 *
 * @class
 * @extends BaseObject
 * @return {Customer}
 */
var Customer = module.exports = function Customer() {
  BaseObject.call(this);

  /** @member {RecordRef} */
  this.accessRole = undefined;
  /** @member {String} */
  this.accountNumber = undefined;
  /**
   * https://system.netsuite.com/help/helpcenter/en_US/srbrowser/Browser2017_2/schema/other/customeraddressbooklist.html?mode=package
   * @member {Object} */
  this.addressbookList = undefined;
  /** @member {Number} */
  this.aging = undefined;
  /** @member {Number} */
  this.aging1 = undefined;
  /** @member {Number} */
  this.aging2	= undefined;
  /** @member {Number} */
  this.aging3 = undefined;
  /** @member {Number} */
  this.aging4 = undefined;
  /**
   * https://system.netsuite.com/help/helpcenter/en_US/srbrowser/Browser2017_2/schema/enum/alcoholrecipienttype.html?mode=package
   * @member {CustomerAddressbookList} */
  this.addressbookList = undefined;
  /** @member {RecordRef} */
  this.customForm = undefined;
  /** @member {String} */
  this.entityId = undefined;
  /** @member {String} */
  this.altName = undefined;
  /** @member {Boolean} */
  this.isPerson = undefined;
  /** @member {String} */
  this.phoneticName = undefined;
  /** @member {String} */
  this.salutation = undefined;
  /** @member {String} */
  this.firstName = undefined;
  /** @member {String} */
  this.middleName = undefined;
  /** @member {String} */
  this.lastName = undefined;
  /** @member {String} */
  this.companyName = undefined;
  /** @member {RecordRef} */
  this.entityStatus = undefined;
  /** @member {RecordRef} */
  this.parent = undefined;
  /** @member {String} */
  this.phone = undefined;
  /** @member {String} */
  this.fax = undefined;
  /** @member {String} */
  this.email = undefined;
  /** @member {String} */
  this.url = undefined;
  /** @member {String} */
  this.defaultAddress = undefined;
  /** @member {Boolean} */
  this.isInactive = undefined;
  /** @member {RecordRef} */
  this.category = undefined;
  /** @member {String} */
  this.title = undefined;
  /** @member {String} */
  this.printOnCheckAs = undefined;
  /** @member {String} */
  this.altPhone = undefined;
  /** @member {String} */
  this.homePhone = undefined;
  /** @member {String} */
  this.mobilePhone = undefined;
  /** @member {String} */
  this.altEmail = undefined;
  /** @member {Language} */
  this.language = undefined;
  /** @member {String} */
  this.comments = undefined;
  /** @member {CustomerNumberFormat} */
  this.numberFormat = undefined;
  /** @member {CustomerNegativeNumberFormat} */
  this.negativeNumberFormat = undefined;
  /** @member {DateTime} */
  this.dateCreated = undefined;
  /** @member {RecordRef} */
  this.image = undefined;
  /** @member {EmailPreference} */
  this.emailPreference = undefined;
  /** @member {RecordRef} */
  this.subsidiary = undefined;
  /** @member {RecordRef} */
  this.representingSubsidiary = undefined;
  /** @member {RecordRef} */
  this.salesRep = undefined;
  /** @member {RecordRef} */
  this.territory = undefined;
  /** @member {String} */
  this.contribPct = undefined;
  /** @member {RecordRef} */
  this.partner = undefined;
  /** @member {RecordRef} */
  this.salesGroup = undefined;
  /** @member {String} */
  this.vatRegNumber = undefined;
  /** @member {String} */
  this.accountNumber = undefined;
  /** @member {String} */
  this.taxExempt = undefined;
  /** @member {RecordRef} */
  this.terms = undefined;
  /** @member {Number} */
  this.creditLimit = undefined;
  /** @member {CustomerCreditHoldOverride} */
  this.creditHoldOverride = undefined;
  /** @member {CustomerMonthlyClosing} */
  this.monthlyClosing = undefined;
  /** @member {Boolean} */
  this.overrideCurrencyFormat = undefined;
  /** @member {String} */
  this.displaySymbol = undefined;
  /** @member {CurrencySymbolPlacement} */
  this.symbolPlacement = undefined;
  /** @member {Number} */
  this.balance = undefined;
  /** @member {Number} */
  this.overdueBalance = undefined;
  /** @member {Number | Long} */
  this.daysOverdue = undefined;
  /** @member {Number | Double} */
  this.unbilledOrders = undefined;
  /** @member {Number | Double} */
  this.consolUnbilledOrders = undefined;
  /** @member {Number | Double} */
  this.consolOverdueBalance = undefined;
  /** @member {Number | Double} */
  this.consolDepositBalance = undefined;
  /** @member {Number | Double} */
  this.consolBalance = undefined;
  /** @member {Number | Double} */
  this.consolAging = undefined;
  /** @member {Number | Double} */
  this.consolAging1 = undefined;
  /** @member {Number | Double} */
  this.consolAging2 = undefined;
  /** @member {Number | Double} */
  this.consolAging3 = undefined;
  /** @member {Number | Double} */
  this.consolAging4 = undefined;
  /** @member {Number | Long} */
  this.consolDaysOverdue = undefined;
  /** @member {RecordRef} */
  this.priceLevel = undefined;
  /** @member {RecordRef} */
  this.currency = undefined;
  /** @member {RecordRef} */
  this.prefCCProcessor = undefined;
  /** @member {Number | Double} */
  this.depositBalance = undefined;
  /** @member {Boolean} */
  this.shipComplete = undefined;
  /** @member {Boolean} */
  this.taxable = undefined;
  /** @member {RecordRef} */
  this.taxItem = undefined;
  /** @member {String} */
  this.resaleNumber = undefined;
  /** @member {Number | Double} */
  this.aging = undefined;
  /** @member {Number | Double} */
  this.aging1 = undefined;
  /** @member {Number | Double} */
  this.aging2 = undefined;
  /** @member {Number | Double} */
  this.aging3 = undefined;
  /** @member {Number | Double} */
  this.aging4 = undefined;
  /** @member {DateTime} */
  this.startDate = undefined;
  /** @member {AlcoholRecipientType} */
  this.alcoholRecipientType = undefined;
  /** @member {DateTime} */
  this.endDate = undefined;
  /** @member {Number | Long} */
  this.reminderDays = undefined;
  /** @member {RecordRef} */
  this.shippingItem = undefined;
  /** @member {String} */
  this.thirdPartyAcct = undefined;
  /** @member {String} */
  this.thirdPartyZipcode = undefined;
  /** @member {Country} */
  this.thirdPartyCountry = undefined;
  /** @member {Boolean} */
  this.giveAccess = undefined;
  /** @member {Double} */
  this.estimatedBudget = undefined;
  /** @member {RecordRef} */
  this.accessRole = undefined;
  /** @member {Boolean} */
  this.sendEmail = undefined;
  /** @member {String} */
  this.password = undefined;
  /** @member {String} */
  this.password2 = undefined;
  /** @member {Boolean} */
  this.requirePwdChange = undefined;
  /** @member {RecordRef} */
  this.campaignCategory = undefined;
  /** @member {RecordRef} */
  this.leadSource = undefined;
  /** @member {RecordRef} */
  this.receivablesAccount = undefined;
  /** @member {RecordRef} */
  this.drAccount = undefined;
  /** @member {RecordRef} */
  this.fxAccount = undefined;
  /** @member {Double} */
  this.defaultOrderPriority = undefined;
  /** @member {String} */
  this.webLead = undefined;
  /** @member {String} */
  this.referrer = undefined;
  /** @member {String} */
  this.keywords = undefined;
  /** @member {String} */
  this.clickStream = undefined;
  /** @member {String} */
  this.lastPageVisited = undefined;
  /** @member {Number | Long} */
  this.visits = undefined;
  /** @member {DateTime} */
  this.firstVisit = undefined;
  /** @member {DateTime} */
  this.lastVisit = undefined;
  /** @member {Boolean} */
  this.billPay = undefined;
  /** @member {Number | Double} */
  this.openingBalance = undefined;
  /** @member {DateTime} */
  this.lastModifiedDate = undefined;
  /** @member {DateTime} */
  this.openingBalanceDate = undefined;
  /** @member {RecordRef} */
  this.openingBalanceAccount = undefined;
  /** @member {CustomerStage} */
  this.stage = undefined;
  /** @member {Boolean} */
  this.emailTransactions = undefined;
  /** @member {Boolean} */
  this.printTransactions = undefined;
  /** @member {Boolean} */
  this.faxTransactions = undefined;
  /** @member {Boolean} */
  this.syncPartnerTeams = undefined;
  /** @member {Boolean} */
  this.isBudgetApproved = undefined;
  /** @member {GlobalSubscriptionStatus} */
  this.globalSubscriptionStatus = undefined;
  /** @member {RecordRef} */
  this.salesReadiness = undefined;
  /** @member {RecordRef} */
  this.buyingReason = undefined;
  /** @member {RecordRef} */
  this.buyingTimeFrame = undefined;
  /** @member {CustomerDownloadList} */
  this.downloadList = undefined;
  /** @member {CustomerSalesTeamList} */
  this.salesTeamList = undefined;
  /** @member {CustomerAddressbookList} */
  this.addressbookList = undefined;
  /** @member {SubscriptionsList} */
  this.subscriptionsList = undefined;
  /** @member {ContactAccessRolesList} */
  this.contactRolesList = undefined;
  /** @member {CustomerCurrencyList} */
  this.currencyList = undefined;
  /** @member {CustomerCreditCardsList} */
  this.creditCardsList = undefined;
  /** @member {CustomerPartnersList} */
  this.partnersList = undefined;
  /** @member {CustomerGroupPricingList} */
  this.groupPricingList = undefined;
  /** @member {CustomerItemPricingList} */
  this.itemPricingList = undefined;
  /** @member {CustomFieldList} */
  this.customFieldList = undefined;
  /** @member {String} */
  this.externalId = null;
  /** @member {String} */
  this.internalId = null;

};

util.inherits(Customer, BaseObject);

/**
 * @override
 */
Customer.prototype.getAttributes = function() {
  var attrs = {
    'xsi:type': 'relShip:Customer',
    'xmlns:ns510': 'urn:customers_2017_2.transactions.webservices.netsuite.com',
    'xmlns:relShip': 'urn:relationships_2017_2.lists.webservices.netsuite.com',
    'xmlns:ns382': 'urn:sales_2017_2.transactions.webservices.netsuite.com',
    'xmlns:xsi': 'http://www.w3.org/2001/XMLSchema-instance'
  };
  var attributeNames = ['externalId', 'internalId'];

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
Customer.prototype.getUnserializablePropertyNames = function() {
  return ['externalId', 'internalId'];
};

Customer.prototype.getSOAPType = function() {
  return this._type || 'Customer';
};
