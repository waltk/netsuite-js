'use strict';
var _ = require('lodash');
var NetSuite = require('../');
var credentials = require('./credentials.json');
var config = new NetSuite.Configuration(credentials);
var service = new NetSuite.Service(config);

var items = [
  {
    key: 'ZZ-12BRK-REAR',
    quantity: 1
  }, /*{
    key: 'ATS-TAT',
    quantity: 2
  },*///{
  //   key: 'ZZ-K04-OWL',
  //   quantity: 1
  // },{
  //   key: 'ZZ-1225CBK',
  //   quantity: 1
  // }
];

service
  .init(true)
  .then(function( client ) {
    // SKU's: ZZ-12BRK-REAR/107961-4/ATS-TAT/ZZ-K04-OWL/ZZ-1225CBK
    var searchItems = new NetSuite.Search.Fields.SearchStringField();
    return searchItems.getItemListFromSku(items.map(function (item) {
      return item.key;
    }));
  })
  .then(function(result) {
    _.each(result, function (item) {
      var index = _.findIndex(items, function (o) {
        return o.key === item.key;
      });
      if (index !== -1) {
        items[index].value = item.value;
      }
    });
    var insertItems = [];
    _.each(items, function (item, index) {
      if (item.value) {
        var recordRef = new NetSuite.Records.RecordRef();
        recordRef.internalId = item.value.$attributes.internalId;
        // @TODO - test
        // recordRef.type = 'inventoryItem';
        var salesOrderItem = new NetSuite.Sales.SalesOrderItem();
        salesOrderItem.item = recordRef;
        salesOrderItem.quantity = item.quantity;
        salesOrderItem.rate = item.value.rate;
        salesOrderItem.amount = +item.quantity * +item.value.rate;
        salesOrderItem.expandItemGroup = 'false';
        salesOrderItem.commitInventory = '_availableQty';
        insertItems.push(salesOrderItem);
      }
    });

    var shippingAndBillingAddr = new NetSuite.Common.Address();
    shippingAndBillingAddr.addr1 = 'addr1';
    shippingAndBillingAddr.addr2 = 'addr2';
    shippingAndBillingAddr.addressee = 'addressee';
    shippingAndBillingAddr.addrPhone = 'addrPhone';
    shippingAndBillingAddr.attention = 'attention';
    shippingAndBillingAddr.city = 'city';
    shippingAndBillingAddr.country = '_unitedStates';
    shippingAndBillingAddr.override = false;
    shippingAndBillingAddr.state = 'state';
    shippingAndBillingAddr.zip	 = '000000';

    var salesOrderItemList = new NetSuite.Sales.SalesOrderItemList();
    salesOrderItemList.item = insertItems;

    var shipMethod = new NetSuite.Records.RecordRef();
    shipMethod.internalId = 6921;
    // shipMethod.type = 'inboundShipment';

    var entity = new NetSuite.Records.RecordRef();
    entity.internalId = 2645793;
    // entity.type = 'customer';

    var salesOrder = new NetSuite.Sales.SalesOrder();
    salesOrder.orderStatus = '_pendingApproval';
    salesOrder.getAuth = true;
    salesOrder.shippingCost = 150;
    salesOrder.entity = entity;
    salesOrder.shipMethod = shipMethod;
    salesOrder.toBeEmailed = true;
    salesOrder.email = 'test@zzp.com';
    salesOrder.itemList = salesOrderItemList;
    salesOrder.billingAddress = shippingAndBillingAddr;
    salesOrder.shippingAddress = shippingAndBillingAddr;
    return service.add(salesOrder);
  })
  .then(function (result) {
    return result;
  })
  .catch(function(err) {
    console.error(err);
  });
