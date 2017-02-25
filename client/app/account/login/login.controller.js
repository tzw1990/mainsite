'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var LoginController = (function () {
    /*@ngInject*/
    function LoginController(Auth, $location) {
        this.user = {
            name: '',
            email: '',
            password: ''
        };
        this.errors = { login: undefined };
        this.submitted = false;
        this.Auth = Auth;
        this.$location = $location;
    }
    LoginController.prototype.login = function (form) {
        var _this = this;
        this.submitted = true;
        if (form.$valid) {
            this.Auth.login({
                email: this.user.email,
                password: this.user.password
            })
                .then(function () {
                // Logged in, redirect to home
                _this.$location.path('/');
            })
                .catch(function (err) {
                _this.errors.login = err.message;
            });
        }
    };
    return LoginController;
}());
exports.default = LoginController;
