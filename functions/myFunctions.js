"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
}
const getUpper = (val) => {
    return val.toUpperCase();
};
const signUpUser = (name, email, isPaid) => { };
const loginUser = (name, email, isPaid) => { };
addTwo(5);
getUpper("Some text");
signUpUser("John", "sabine@example.com", false);
loginUser("s", "s@example.com", true);
const getHello = (s) => {
    return "";
};
const heros = ["thor", "spiderman", "ironman"];
heros.map((hero) => {
    return `hero is ${hero}`;
});
const consoleError = (errmsg) => {
    console.log(errmsg);
};
//This is a never type function, different to a void type
// Meaning we can handle the error in this function
// In a return type, it means that the function throws an exception or terminates execution
// Of the program
const handleError = (errmsg) => {
    throw new Error(errmsg);
};
//# sourceMappingURL=myFunctions.js.map