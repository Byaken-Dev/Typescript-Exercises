function addTwo(num: number): number {
  return num + 2;
}

const getUpper = (val: string): string => {
  return val.toUpperCase();
};

const signUpUser = (name: string, email: string, isPaid: boolean) => {};

const loginUser = (name: string, email: string, isPaid: boolean) => {};
addTwo(5);
getUpper("Some text");
signUpUser("John", "sabine@example.com", false);
loginUser("s", "s@example.com", true);

const getHello = (s: string): string => {
  return "";
};

const heros = ["thor", "spiderman", "ironman"];

heros.map((hero): string => {
  return `hero is ${hero}`;
});

const consoleError = (errmsg: string): void => {
  console.log(errmsg);
};

//This is a never type function, different to a void type
// Meaning we can handle the error in this function
// In a return type, it means that the function throws an exception or terminates execution
// Of the program
const handleError = (errmsg: string): never => {
  throw new Error(errmsg);
};

export {};
