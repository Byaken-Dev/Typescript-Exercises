"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const greetings = "Hello, Sabine";
greetings.toLocaleLowerCase();
console.log(greetings);
//number
const userId = 334455;
const userFloat = 334455.65;
userFloat.toFixed(2);
//There is no difference between integer and float in TypeScript, both are of type number.
//boolean
const isLoggedIn = false;
//any
let hero;
function getHero() {
    return "thor";
}
hero = getHero();
//# sourceMappingURL=variableMe.js.map