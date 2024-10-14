"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GENDER = void 0;
var message = function (name) {
    return "Hi ${name}, you are welcome!";
};
console.log(message("Justice"));
function userAge(age) {
    if (age < 18)
        return "You are not eligible to do it";
    return "Congrats, you are eligible";
}
console.log(userAge(22));
function caseChange(str) {
    return str[0].toUpperCase() + str.slice(1);
}
console.log(caseChange("justice"));
var items = [3, 5, 7, 10,];
var result = items.filter(function (item) { return item > 3; }).map(function (item) { return item * 2; });
console.log(result);
var GENDER;
(function (GENDER) {
    GENDER["MALE"] = "male";
    GENDER["FEMALE"] = "female";
})(GENDER || (exports.GENDER = GENDER = {}));
var user1 = {
    firstName: "Ejike",
    lastName: "Justice",
    age: 17,
    email: "ejike.justice@yahoo.com",
    gender: GENDER.MALE
};
var user2 = {
    firstName: "jay",
    lastName: "Just",
    age: 17,
    email: "ejike.justice@yahoo.com",
    gender: GENDER.MALE
};
console.log(user1);
console.log("---------------------");
console.log(user2);
