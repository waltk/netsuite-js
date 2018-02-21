'use strict';

var NetSuite = require('../');
var credentials = require('./credentials.json');
var config = new NetSuite.Configuration(credentials);
var service = new NetSuite.Service(config);
service
  .init(true)
  .then(function( client ) {
    var customerAddressbookList = new NetSuite.Relationships.CustomerAddressbookList();
    customerAddressbookList.addressbook = [];
    var address = new NetSuite.Common.Address();
    address.addr1 = 'addr1';
    address.addr2 = 'addr2';
    address.addr3 = 'addr3';
    address.addressee = 'addressee';
    address.addrPhone = 'addrPhone';
    address.addrText = 'addrText';
    address.attention = 'attention';
    address.city = 'city';
    address.country = '_unitedStates';
    address.override = false;
    address.state = 'state';
    address.zip	 = '000000';
    var customerAddressbook = new NetSuite.Relationships.CustomerAddressbook();
    customerAddressbook.defaultBilling = true;
    customerAddressbook.defaultShipping = true;
    customerAddressbook.isResidential = false;
    customerAddressbook.label = 'label';
    customerAddressbook.addressbookAddress = address;
    customerAddressbookList.addressbook.push(customerAddressbook);
    var customer = new NetSuite.Relationships.Customer();
    customer.firstName = new NetSuite.StringObject('firstName', 'firstName');
    customer.lastName =  new NetSuite.StringObject('lastName', 'lastName');
    customer.phone =  new NetSuite.StringObject('phone', '123456789');
    customer.email =  new NetSuite.StringObject('email', 'joe.doe@abc.com');
    // customer.addressbookList = customerAddressbookList;
    return service.add(customer);
    // return Promise.resolve(customerAddressbookList);
  })
  .then(function(result, raw, soapHeader) {
    console.log(JSON.stringify(result, null, 2));
  })
  .catch(function(err) {
    console.error(err);
    // console.error('Last Request:');
    // console.error(service.config.client.lastRequest);
  });
