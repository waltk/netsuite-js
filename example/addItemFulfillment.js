'use strict';

var denodeify = require('denodeify');
var Serializer = require('../lib/netsuite/soap/serializer');
var NetSuite = require('../');

var credentials = require('./credentials.json');
var config = new NetSuite.Configuration(credentials);
var service = new NetSuite.Service(config);

console.log('Creating NetSuite connection');

service
  .init(true /* skipDiscovery */ )
  .then(function( /*client*/ ) {
    console.log('WSDL processed');

    var itemFulFillment = new NetSuite.TransSales.ItemFulFillment();
    itemFulFillment.createdFrom = new NetSuite.Records.RecordRef();
    itemFulFillment.createdFrom.internalId = 1450;

    var itemList = new NetSuite.TransSales.ItemFulFillmentItemList();
    var itemFulFillmentItem = new NetSuite.TransSales.ItemFulfillmentItem();
    itemFulFillmentItem.quantity = 1;
    itemFulFillmentItem.orderLine = 3;
    itemFulFillmentItem.serialNumbers = '';
    itemFulFillmentItem.item = new NetSuite.Records.RecordRef();
    itemFulFillmentItem.item.internalId = 100;
    itemFulFillmentItem.location = new NetSuite.Records.RecordRef();
    itemFulFillmentItem.location.internalId = 1;

    itemList.items = [];
    itemList.items.push(itemFulFillmentItem);

    var itemFulFillmentItem = new NetSuite.TransSales.ItemFulfillmentItem();
    itemFulFillmentItem.quantity = 1;
    itemFulFillmentItem.orderLine = 7;
    itemFulFillmentItem.serialNumbers = '00001';
    itemFulFillmentItem.item = new NetSuite.Records.RecordRef();
    itemFulFillmentItem.item.internalId = 100;

    itemFulFillmentItem.location = new NetSuite.Records.RecordRef();
    itemFulFillmentItem.location.internalId = 1;
    itemList.items.push(itemFulFillmentItem);

    itemFulFillment.itemList = itemList;

    var itemFulFillmentPackageList = new NetSuite.TransSales.ItemFulfillmentPackageList();
    var itemFulFillmentPackage = new NetSuite.TransSales.ItemFulfillmentPackage();
    itemFulFillmentPackage.packageWeight = 1;
    itemFulFillmentPackage.packageDescr = "Alan to Bryton";
    itemFulFillmentPackage.packageTrackingNumber = "TRK000002";

    itemFulFillmentPackageList.packages = [];
    itemFulFillmentPackageList.packages.push(itemFulFillmentPackage);
    itemFulFillment.packageList = itemFulFillmentPackageList;


    console.log('Adding Item ItemFulFillment record');

    return service.add(itemFulFillment);
  })
  .then(function(result, raw, soapHeader) {
    if (result.writeResponse.status.$attributes.isSuccess !== 'true') {
      console.error('Error');
      console.error(result.writeResponse.status.statusDetail);
    }
  })
  .catch(function(err) {
    console.error(err);
    debugger;
    console.error('Last Request:');
    console.error(service.config.client.lastRequest);
  });
