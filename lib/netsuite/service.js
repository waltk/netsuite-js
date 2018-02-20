'use strict';

var denodeify = require('denodeify'),
  Serializer = require('./soap/serializer');

/**
 * Helper to ensure we have a NetSuite connection
 * @private
 * @param  {Service} service
 */
function assertConnection(service) {
  if (!(service && service.config && service.config.client)) {
    throw new Error('NetSuite connection not configured');
  }
}

/**
 * A service client through which requests are sent.
 *
 * @class
 * @param  {NetSuite.Configuration} config
 * @return {Service}
 */
var Service = module.exports = function Service(config) {
  this.config = config;
};

/**
 * Initialize this service client with given config.
 * @param {Boolean} [skipDiscovery=false] Don't try to discover WSDL url
 * @return {Promise.<client>} connected `node-soap` client
 */
Service.prototype.init = function(skipDiscovery) {
  return this.config.createConnection(skipDiscovery);
};

/**
 * `result` description:
 *
 * `result.readResponse.status` {String} Operation status. Contains more details on errors.
 * `result.readResponse.status.$attributes.isSuccess` {String} Whether op was successful. String values of 'true' or 'false'
 * `[result.readResponse.status.statusDetail]` {StatusDetail[]} Status details on error.
 * `result.readResponse.record` {Record} The actual record. Its type is dependent on the given `recordRef.type`
 *
 * @param  {NetSuite.Records.RecordRef} recordRef
 * @return {Promise.<result,rawResponse,soapHeader>}
 */
Service.prototype.get = function(recordRef) {
  assertConnection(this);

  var soapObj = Serializer.serialize(recordRef);
  var get = denodeify(this.config.client.get);
  return get(soapObj);
};


/**
 * `result` description:
 *
 * `result.readResponse.status` {String} Operation status. Contains more details on errors.
 * `result.readResponse.status.$attributes.isSuccess` {String} Whether op was successful. String values of 'true' or 'false'
 * `[result.readResponse.status.statusDetail]` {StatusDetail[]} Status details on error.
 * `result.readResponse.record` {Record} The actual record. Its type is dependent on the given `recordRef.type`
 *
 * @param  {NetSuite.Records.RecordRef} recordRef
 * @return {Promise.<result,rawResponse,soapHeader>}
 */
Service.prototype.add = function(recordRef) {
  assertConnection(this);
  var soapObj;
  if (recordRef.getSOAPType() == "ItemFulfillment") {
    var itemsXML = "";
    recordRef.itemList.items.forEach(function (item) {
      itemsXML += '<s1:item xsi:type="tranSales:ItemFulfillmentItem"><s1:orderLine xsi:type="xsd:long">' + item.orderLine + '</s1:orderLine><s1:serialNumbers xsi:type="xsd:string">' + item.serialNumbers + '</s1:serialNumbers><s1:quantity xsi:type="xsd:double">' + item.quantity + '</s1:quantity><s1:location xsi:type="platformCore:Location" internalId="' + item.location.internalId + '"></s1:location></s1:item>';
    });

    var packagesXML = "";
    if (recordRef.packageList) {
      packagesXML = '<s1:packageList xsi:type="tranSales:ItemFulfillmentPackageList">';

      recordRef.packageList.packages.forEach(function (packageX) {
        packagesXML += '<s1:package xsi:type="tranSales:ItemFulfillmentPackage">'
        packagesXML += '<s1:packageWeight xsi:type="xsd:double">' + packageX.packageWeight + '</s1:packageWeight>'
        packagesXML += '<s1:packageDescr xsi:type="xsd:string">' + packageX.packageDescr + '</s1:packageDescr>'
        packagesXML += '<s1:packageTrackingNumber xsi:type="xsd:string">' + packageX.packageTrackingNumber + '</s1:packageTrackingNumber>'
        packagesXML += '</s1:package>';

      });
      packagesXML = packagesXML + '</s1:packageList>';
    }
    soapObj = {
      baseRef:
        {
          '$attributes':
            {
              'xsi:type': 'tranSales:ItemFulfillment',
              "xmlns:s1": 'urn:sales_' + this.options.apiVersion + '.transactions.webservices.netsuite.com'
            },
          "$xml":
          '<s1:createdFrom xsi:type="tranSales:ItemFulfillment" internalId="' + recordRef.createdFrom.internalId + '"></s1:createdFrom>'
          + '<s1:itemList replaceAll="false" xsi:type="tranSales:ItemFulfillmentItemList">'
          + itemsXML
          + '</s1:itemList>'
          + packagesXML
        }
    };
  } else {
    soapObj = Serializer.serialize(recordRef);
  }
  var add = denodeify(this.config.client.add);
  return add(soapObj);
};

/**
 * Note that not all record types work with the `getAll` operation. Supported types
 * are listed in the `GetAllRecordType` enumeration in `coreTypes.xsd`.
 *
 * `result` description:
 *
 * `result.getAllResult.status` {String} Operation status. Contains more details on errors.
 * `result.getAllResult.status.$attributes.isSuccess` {String} Whether op was successful. String values of 'true' or 'false'
 * `[result.getAllResult.status.statusDetail]` {StatusDetail[]} Status details on error.
 * `result.getAllResult.recordList` {Record[]} The actual records. Their types are dependent on the given `recordRef.type`s
 * `result.getAllResult.totalRecords` {Number}
 *
 * @param  {String} recordType from `GetAllRecordType` enumeration in `coreTypes.xsd`
 * @return {Promise.<result,rawResponse,soapHeader>}
 */
Service.prototype.getAll = function(recordType) {
  assertConnection(this);

  var param = {
    record: {
      recordType: recordType
    }
  };
  var getAll = denodeify(this.config.client.getAll);
  return getAll(param);
};

/**
 * `result` description:
 *
 * `result.readResponseList.status` {String} Operation status. Contains more details on errors.
 * `result.readResponseList.status.$attributes.isSuccess` {String} Whether op was successful. String values of 'true' or 'false'
 * `[result.readResponseList.status.statusDetail]` {StatusDetail[]} Status details on error.
 * `result.readResponseList.readResponse` {Record[]} The actual records. Their types are dependent on the given `recordRef.type`s
 *
 * @param  {NetSuite.Records.RecordRef[]} recordRefs array of RecordRefs
 * @return {Promise.<result,rawResponse,soapHeader>}
 */
Service.prototype.getList = function(recordRefs) {
  assertConnection(this);

  var soapObj = Serializer.serialize(recordRefs);
  var getList = denodeify(this.config.client.getList);
  return getList(soapObj);
};

/**
 * `result` description:
 *
 * `result.searchResult.status` {String} Operation status. Contains more details on errors.
 * `result.searchResult.status.$attributes.isSuccess` {String} Whether op was successful. String values of 'true' or 'false'
 * `[result.searchResult.status.statusDetail]` {StatusDetail[]} Status details on error.
 * `result.searchResult.pageIndex` {Number} one based
 * `result.searchResult.pageSize` {Number}
 * `result.searchResult.recordList.record` {Record[]} The actual records. Their types are dependent on the search type
 * `result.searchResult.searchId` {String}
 * `result.searchResult.totalPages` {Number}
 * `result.searchResult.totalRecords` {Number}
 *
 * @param  {NetSuite.Search.EmployeeSearchBasic|Object} searchRecord
 * @return {Promise.<result,rawResponse,soapHeader>}
 */
Service.prototype.search = function(searchRecord) {
  assertConnection(this);

  var soapObj = Serializer.serialize(searchRecord);
  var search = denodeify(this.config.client.search);
  return search(soapObj);
};

/**
 * `result` description:
 *
 * `result.searchResult.status` {String} Operation status. Contains more details on errors.
 * `result.searchResult.status.$attributes.isSuccess` {String} Whether op was successful. String values of 'true' or 'false'
 * `[result.searchResult.status.statusDetail]` {StatusDetail[]} Status details on error.
 * `result.searchResult.pageIndex` {Number} one based
 * `result.searchResult.pageSize` {Number}
 * `result.searchResult.recordList.record` {Record[]} The actual records. Their types are dependent on the search type
 * `result.searchResult.searchId` {String}
 * `result.searchResult.totalPages` {Number}
 * `result.searchResult.totalRecords` {Number}
 *
 * @param {String} searchId search id from original search
 * @param {Number} pageIndex target page index to retrieve
 * @return {Promise.<result,rawResponse,soapHeader>}
 */
Service.prototype.searchMoreWithId = function(searchId, pageIndex) {
  assertConnection(this);

  var searchMoreWithId = denodeify(this.config.client.searchMoreWithId);
  return searchMoreWithId({
    searchId: searchId,
    pageIndex: pageIndex
  });
};

/**
 * Adds or updates necessary SOAP headers to set search preferences.
 * Note these preferences persist across searches until updated or cleared.
 * @param {NetSuite.Search.SearchPreferences} preferences
 */
Service.prototype.setSearchPreferences = function(preferences) {
  this.config.removeSoapHeader('searchPreferences');
  this.config.addSoapHeader(preferences);
};

/**
 * Clears search preferences until `setSearchPreferences()` is called again.
 */
Service.prototype.clearSearchPreferences = function() {
  this.config.removeSoapHeader('searchPreferences');
};
