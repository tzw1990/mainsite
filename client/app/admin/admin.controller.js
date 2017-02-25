'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var AdminController = (function () {
    /*@ngInject*/
    function AdminController(User) {
        // Use the User $resource to fetch all users
        this.users = User.query();
    }
    AdminController.prototype.delete = function (user) {
        user.$remove();
        this.users.splice(this.users.indexOf(user), 1);
    };
    return AdminController;
}());
exports.default = AdminController;
