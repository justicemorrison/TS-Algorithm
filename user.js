"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var User = /** @class */ (function () {
    function User(firstName, lastName, gender) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
    }
    User.prototype.info = function () {
        return "Congratulations ".concat(this.firstName, " ").concat(this.lastName, " your transaction has now been processed and you are assigned to ").concat(this.gender, " hostels");
    };
    return User;
}());
exports.User = User;
console.log(User);
