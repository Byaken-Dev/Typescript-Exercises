"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const score = [];
const names = [];
function identityOne(val) {
    return val;
}
//Return any type of value
function identityTwo(val) {
    return val;
}
//Return a generic type, meaning whatever type is passed it will used in the other 'Type'
//This is useful when you want to ensure the type remains consistent
function identityThree(val) {
    return val;
}
identityThree({ brand: "Coca Cola", type: 1 });
function getSearchProducts(products) {
    const myIndex = 3;
    return products[myIndex];
}
//How to define a generic in an arrow function
const getMoreSearchProducts = (products) => {
    const myIndex = 2;
    return products[myIndex];
};
//We can extend generics to be more specific, in this case we are saying U must be of type Database
function anotherFunction(valOne, valTwo) {
    return { valOne, valTwo };
}
anotherFunction(3, { connection: "", username: "", password: "" });
//# sourceMappingURL=myGenerics.js.map