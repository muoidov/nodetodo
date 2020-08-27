"use strict";

var configValue = require('./config.json');

module.exports = {
  getDbConnectionString: function getDbConnectionString(params) {
    return "mongodb+srv://".concat(configValue.username, ":bA3BH1HQTvXaGNc0@cluster0.c9ayg.azure.mongodb.net/muoideptrai?retryWrites=true&w=majority");
  }
};