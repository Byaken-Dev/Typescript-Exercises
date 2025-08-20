let user: [string, number, boolean];

user = ["John", 30, true]; // Tuple type with specific types in order
//Useful in cases in which an API has a very specific response structure

let rgb: [number, number, number] = [255, 0, 0]; // RGB color representation as a tuple

type User = [number, string];

const newUser: User = [1, "Alice"]; // Tuple type for User with ID and name
//In case we push another value that is different from the type we defined
//As long as the first two values are the same type, it will not throw an error
//This has not been fixed as of version 5.9.2
