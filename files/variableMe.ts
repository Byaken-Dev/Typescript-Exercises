const greetings: string = "Hello, Sabine";

greetings.toLocaleLowerCase();

console.log(greetings);

//number
const userId: number = 334455;
const userFloat = 334455.65;
userFloat.toFixed(2);
//There is no difference between integer and float in TypeScript, both are of type number.

//boolean
const isLoggedIn: boolean = false;

//any

let hero: string;

function getHero() {
  return "thor";
}
hero = getHero();
export {};
