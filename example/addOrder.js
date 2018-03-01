'use strict';
var _ = require('lodash');
var NetSuite = require('../');
var credentials = require('./credentials.json');
var config = new NetSuite.Configuration(credentials);
var service = new NetSuite.Service(config);

var items = [
  {
    key: 'ZZ-MPHUB',
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
    // SKU's: /107961-4/ATS-TAT/ZZ-K04-OWL/ZZ-1225CBK
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
    salesOrder.orderStatus = '_pendingFulfillment';
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
    // console.error('Last Request:');
    // console.error(service.config.client.lastRequest);
  });
/*
 <?php
    $order_date = date('Y-m-d H:i:s');

        // create array of fields
        $itemArr = array();
        $i = 0;
        foreach($order_items_product as $keyProduct =>$valueProduct){
            //if you not have internal id of item in netsuuite then please add the item in the netsuite and try.
            $netsuiteItemId = 'Your Item Internal id Which is in the Netsuite Item';

            $itemArr[$i]['item']['internalId'] = $netsuiteItemId;
            $itemArr[$i]['quantity'] = $valueProduct['qty'];
            $i++;
        }

        if (!define('LF', "\n")) {
            define('LF', "\n");
        }

//Billing Address Information
$billAddress = stripslashes($order->order_custom_fields['_billing_first_name'][0]) . ' ' . $order->order_custom_fields['_billing_last_name'][0] . LF;
$billAddress .= stripslashes($order->order_custom_fields['_billing_address_1'][0]).LF;
$billAddress .= stripslashes($order->order_custom_fields['_billing_address_2'][0]).LF;
$billAddress .= stripslashes($order->order_custom_fields['_billing_country'][0]).LF;
$billAddress .= stripslashes($order->order_custom_fields['_billing_state'][0]) . ' - ' . $order->order_custom_fields['_billing_postcode'][0] . ', ' . LF;
$billAddress .= $order->order_custom_fields['_billing_phone'][0] . ', ' . $order->order_custom_fields['_billing_email'][0];

//Shipping Address Information
$shipAddress = stripslashes($order->order_custom_fields['_shipping_first_name'][0]) . ' ' . $order->order_custom_fields['_shipping_last_name'][0] . LF;
$shipAddress .= stripslashes($order->order_custom_fields['_shipping_address_1'][0]).LF;
$shipAddress .= stripslashes($order->order_custom_fields['_shipping_address_2'][0]).LF;
$shipAddress .= stripslashes($order->order_custom_fields['_shipping_city'][0]).LF;
$shipAddress .= stripslashes($order->order_custom_fields['_shipping_state'][0]) . ', ' . $order->order_custom_fields['_shipping_postcode'][0] . ', ' . LF;
$shipAddress .= $order->order_custom_fields['_billing_phone'][0] .', '. $order->order_custom_fields['_billing_email'][0];


$purchaseOrderFields = array (
  'entity' => array ('internalId' => $internal_Id, 'type' => 'customer'),
'shippingCost' => $order->order_shipping,
  'shipMethod' => $order->payment_method,
  'toBeEmailed' => true,
  //'tranId' => $order->order_custom_fields['Transaction ID'][0],
  //'tranDate' => date('Y-m-d H:i:s'),
  'source' => 'littlecrate',
  'createdFrom' => 'littlecrate.com',
  'discountRate' => $order->order_custom_fields['_order_discount'][0],
  'taxRate' => $order->order_custom_fields['_order_tax'][0],
  'email' => $order->billing_email,
  //'shipDate' => date('Y-m-d H:i:s'),
  'shipMethod' => $order->shipping_method,
  'shippingCost' => $order->order_shipping,
  'shippingTax1Rate' => $order->order_shipping_tax,
  'paymentMethod' => $order->payment_method,
  //'taxTotal' => $order->order_tax,
  //'total' => $order->order_total,
  'billAddress' => $billAddress,
  'shipAddress' => $shipAddress,
  'itemList' => array (
  'item' => $itemArr
)
);

$salesOrder = new nsComplexObject('SalesOrder');

$salesOrder ->setFields($purchaseOrderFields);

$addResponse = $myNSclient->add($salesOrder );
if (!$addResponse->isSuccess) {
  echo "Order Information is Not Inserted Into The Netsuite. Please Contact to Administration.";
  exit;
}

  ?>
*/
