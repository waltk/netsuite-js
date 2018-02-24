'use strict';

/**
 * NetSuite Records
 * @return {Records}
 */
var Sales = module.exports = {};

Sales.SalesOrder = require('./salesOrder');
Sales.SalesOrderItem = require('./salesOrderItem');
Sales.SalesOrderItemList = require('./salesOrderItemList');
Sales.SalesOrderSalesTeam = require('./salesOrderSalesTeam');
Sales.salesOrderPartnersList = require('./salesOrderPartnersList');
Sales.SalesOrderSalesTeamList = require('./salesOrderSalesTeamList');
Sales.GiftCertRedemption = require('./giftCertRedemption');
Sales.GiftCertRedemptionList = require('./giftCertRedemptionList');
Sales.Promotions = require('./promotions');
Sales.PromotionsList = require('./promotionsList');
Sales.SalesOrderShipGroupList = require('./salesOrderShipGroupList');
Sales.TransactionShipGroup = require('./transactionShipGroup');
