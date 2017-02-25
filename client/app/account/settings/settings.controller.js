'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var SettingsController = (function () {
    /*@ngInject*/
    function SettingsController(Auth) {
        this.user = {
            oldPassword: '',
            newPassword: '',
            confirmPassword: ''
        };
        this.errors = { other: undefined };
        this.message = '';
        this.submitted = false;
        this.Auth = Auth;
    }
    SettingsController.prototype.changePassword = function (form) {
        var _this = this;
        this.submitted = true;
        if (form.$valid) {
            this.Auth.changePassword(this.user.oldPassword, this.user.newPassword)
                .then(function () {
                _this.message = 'Password successfully changed.';
            })
                .catch(function () {
                form.password.$setValidity('mongoose', false);
                _this.errors.other = 'Incorrect password';
                _this.message = '';
            });
        }
    };
    return SettingsController;
}());
exports.default = SettingsController;
