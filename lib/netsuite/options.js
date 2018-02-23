'use strict';
var config;

var setConfig = function (options) {
  if (!config) {
    config = options;
  }
  return config;
};

var getConfig = function () {
  if (!config) {
    return {
      apiVersion: '2017_2'
    };
  }
  return config;
};

module.exports = {
  get: getConfig,
  set: setConfig
};
