const score: Array<number> = [];
const names: Array<string> = [];

function identityOne(val: boolean | number): boolean | number {
  return val;
}

//Return any type of value
function identityTwo(val: any): any {
  return val;
}

//Return a generic type, meaning whatever type is passed it will used in the other 'Type'
//This is useful when you want to ensure the type remains consistent
function identityThree<Type>(val: Type): Type {
  return val;
}

// identityThree(true);

interface Bootle {
  brand: string;
  type: number;
}

identityThree<Bootle>({ brand: "Coca Cola", type: 1 });

function getSearchProducts<T>(products: T[]): T | undefined {
  const myIndex = 3;
  return products[myIndex];
}

//How to define a generic in an arrow function
const getMoreSearchProducts = <T>(products: T[]): T | undefined => {
  const myIndex = 2;
  return products[myIndex];
};

interface Database {
  connection: string;
  username: string;
  password: string;
}

//We can extend generics to be more specific, in this case we are saying U must be of type Database
function anotherFunction<T, U extends Database>(valOne: T, valTwo: U): object {
  return { valOne, valTwo };
}

anotherFunction(3, { connection: "", username: "", password: "" });
