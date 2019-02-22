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

var jsonPath = '/Path/To/File/';
var xmlPath = '/Path/To/File/';
var csvPath = '/Path/To/File/';

var flatten = require('flat'); 

function writeCSV(result, writeStream){ 
    var totalRecords = result.length;
    var flat = flatten(result);
    var keys = [];
    var values = {};
    for (var key in flat)
    {
        key = key.toString().replace(/\,/g, '');
        flat[key] = flat[key].toString().replace(/\,/g, '');
        var keyName = key.substring(key.indexOf('.')+1);
        var rowNumber = key.substring(0,key.indexOf('.'));
        if (keys.includes(keyName) === false){
            keys.push(keyName);
        }
        values[rowNumber] = [];
    }
    for (var i = 0; i < keys.length; i++)
    {
        var keyValue = keys[i].toString();
        writeStream.write(keyValue);
        if (i < keys.length - 1)
        {
            writeStream.write(',');
        }
    }
    writeStream.write('\n');
    for (var i = 0; i < totalRecords; i++){
        var prefix = i.toString() + '.';
        for (var j = 0; j < keys.length; j++){
            var lookup = prefix + keys[j];
            if (lookup in flat){
                var lookupValue = flat[lookup].toString().replace(/\,/g, '');
                writeStream.write(lookupValue);
            }
            else {
                writeStream.write('null');
            }
            if (j < keys.length - 1)
            {
            writeStream.write(',');
            }
            else {
                writeStream.write('\n');
            }
        }
    }
}

module.exports = {
    writeResults: function(result, searchName){
        var wsJSON = fs.createWriteStream(String(jsonPath + searchName + '.json'));
        var wsXML = fs.createWriteStream(String(xmlPath + searchName + '.xml'));
        var wsCSV = fs.createWriteStream(String(csvPath + searchName + '.csv'));

        var jsonString = JSON.stringify(result, null, 4);
        wsJSON.write(jsonString);
        var xmlString = xmlConvert.json2xml(result, xmlOptions);
        wsXML.write(xmlString);
        writeCSV(result, wsCSV);

        console.log('Records found: ' + result.length);
        console.log('Search Complete');
    }
}
