#! /usr/bin/env node
/*
 * netsuite-js
 * https://github.com/CrossLead/netsuite-js
 *
 * Copyright (c) 2015 Christian Yang
 * Licensed under the Apache license.
 */

'use strict';

const fs = require('fs');
var xmlConvert = require('xml-js');
var xmlOptions = {compact: true, ignoreComment: true, spaces: 4};

var csvjson = require('csvjson');

var csvOptions = {
  delimiter    : ",",
  wrap         : true,
  arrayDenote  : ":",
  objectDenote : ".",
  headers      : "full",
  quote        : '"'
}

var jsonPath = '\\\\SERVER01\\Server\\Operations\\Materials\\Purchasing Forecast\\NetsuiteData\\JSON\\';
var xmlPath = '\\\\SERVER01\\Server\\Operations\\Materials\\Purchasing Forecast\\NetsuiteData\\XML\\';
var csvPath = '\\\\SERVER01\\Server\\Operations\\Materials\\Purchasing Forecast\\NetsuiteData\\CSV\\';


module.exports = {
    writeResults: function(result, searchName){
        var wsJSON = fs.createWriteStream(String(jsonPath + searchName + '.json'));
        var wsXML = fs.createWriteStream(String(xmlPath + searchName + '.xml'));
        var wsCSV = fs.createWriteStream(String(csvPath + searchName + '.csv'));

        var jsonResult = result.searchResult.searchRowList;
        var jsonString = JSON.stringify(jsonResult, null, 4);
        wsJSON.write(jsonString);
        var xmlString = xmlConvert.json2xml(result, xmlOptions);
        wsXML.write(xmlString);
        var csvString = csvjson.toCSV(jsonResult); 
        wsCSV.write(csvString);

        console.log('Records found: ' + result.searchResult.totalRecords);
        console.log('Search Complete');
    },
    parseResult: function(result){
        var jsonResult = result.searchResult.searchRowList.searchRow;
        for (var i = 0; i < jsonResult.length; i++)
        {

        }

    }
}

    /*
    // might use this later
    //
    var col = result.searchResult.searchRowList.searchRow[0];
    function jsonPrinter(obj) {
      for (let key in obj) {
          // checking if it's nested
          if (obj.hasOwnProperty(key) && (typeof obj[key] === "object")) {
              jsonPrinter(obj[key])
          } else {
              // printing the flat attributes
              console.log(key + " -> " + obj[key]);
          }
      }
    }
    jsonPrinter(col);
    */