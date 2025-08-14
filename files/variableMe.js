"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var greetings = "Hello, Sabine";
greetings.toLocaleLowerCase();
console.log(greetings);
//number
var userId = 334455;
var userFloat = 334455.65;
userFloat.toFixed(2);
//There is no difference between integer and float in TypeScript, both are of type number.
//boolean
var isLoggedIn = false;
//any
var hero;
function getHero() {
    return "thor";
}
hero = getHero();
