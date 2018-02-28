'use strict';
var service;

var setService = function (options) {
  if (!service) {
    service = options;
  }
  return service;
};

var getService = function () {
  if (!service) {
    return {
      apiVersion: '2017_2'
    };
  }
  return service;
};

module.exports = {
  get: getService,
  set: setService
};
