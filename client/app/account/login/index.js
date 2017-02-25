'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var angular = require('angular');
var login_controller_1 = require("./login.controller");
exports.default = angular.module('mainsiteApp.login', [])
    .controller('LoginController', login_controller_1.default)
    .name;
