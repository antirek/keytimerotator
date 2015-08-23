'use strict';

var Keyrotator = require('keyrotator');
var scheduleRunner = require('node-schedule');
var clone = require('clone');

var Keytimerotator = function (keys, scheduleIn) {

  var keyrotator,
      schedule = scheduleIn || "0 0 0 * * *";

  var setKeyrotator = function () {
    keyrotator = new Keyrotator(clone(keys));
  };

  var init = function () {
    setKeyrotator();
    var j = scheduleRunner.scheduleJob(schedule, setKeyrotator);
  };

  init();

  this.getKey = function () {
    return keyrotator.getKey();
  };

};

module.exports = Keytimerotator;