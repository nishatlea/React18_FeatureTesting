"use strict";
let age = 10;
if (age < 50)
    age += 10;
let sales = 123456789;
let course = "Typescript";
let is_published = true;
let level;
let numbers = [1, 2, 3];
let user = [1, "Mosh"];
let mySize = 2;
console.log(mySize);
function calculateTax(income, taxYear = 2022) {
    if (taxYear < 2022)
        return income * 1.2;
    return income * 1.3;
}
calculateTax(10000, 2022);
let employee = {
    id: 1,
    name: "Mosh",
    retire: (date) => {
        console.log(date);
    },
};
let weight;
let textBox = {
    drag: () => { },
    resize: () => { },
};
let quantity = 50;
function greet(name) {
    if (name)
        console.log(name.toUpperCase());
    else
        console.log("Hola");
}
greet(undefined);
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(0);
console.log(customer === null || customer === void 0 ? void 0 : customer.birthday);
//# sourceMappingURL=index.js.map