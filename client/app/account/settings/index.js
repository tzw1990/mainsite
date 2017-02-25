'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var angular = require('angular');
var settings_controller_1 = require("./settings.controller");
exports.default = angular.module('mainsiteApp.settings', [])
    .controller('SettingsController', settings_controller_1.default)
    .name;
