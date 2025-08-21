function detectType(val: number | string) {
  if (typeof val === "string") {
    //We are referring to the type of the variable, not the value
    return val.toLowerCase();
  }
  return val + 3;
}

function provideId(id: string | null) {
  if (!id) {
    console.log("No ID provided");
    return;
  }
  id.toLowerCase();
}
interface User {
  name: string;
}

interface Admin {
  name: string;
  isAdmin: boolean;
}
function isAdmin(account: User | Admin) {
  if ("isAdmin" in account) {
    //Checking if the property exists in the object
    return account.isAdmin;
  }
}

function logValue(x: Date | string) {
  if (x instanceof Date) {
    console.log(x.toUTCString());
  } else {
    console.log(x.toUpperCase());
  }
}

type Fish = { swim: () => void };
type Bird = { fly: () => void };

//Type predicate
function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

//Discrminated union
interface Circle {
  kind: "circle";
  radius: number;
}

interface Square {
  kind: "square";
  sideLength: number;
}

//Straight from documentation
type Shape = Circle | Square;

function getArea(shape: Shape) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.sideLength ** 2;
    default:
      const _exhaustiveCheck: never = shape; //We're using 'never' to ensure that all cases are handled
      // It is expected that 'never' should never be used
      return _exhaustiveCheck;
  }
}
