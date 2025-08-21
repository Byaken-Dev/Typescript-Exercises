"use strict";
// class User {
//   //Make typescript aware of the types inside the class as per documentation
//   public email: string;
//   name: string;
//   private city: string = "New York";
//   constructor(email: string, name: string) {
//     this.email = email;
//     this.name = name;
//   }
// }
Object.defineProperty(exports, "__esModule", { value: true });
//Simplified version with less code, also a cleaner syntax
class User {
    constructor(email, name // private userId: string
    ) {
        this.email = email;
        this.name = name;
        this._courseCount = 1; //Protected allows access in child classes
        this.city = "New York";
    }
    deleteToken() {
        //This method cannot be accessed outside this class
        console.log("Token deleted");
    }
    get getAppleEmail() {
        return `apple-${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Invalid course count");
        }
        this._courseCount = courseNum;
    }
}
class SubUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this._courseCount = 4; // Accessing the setter from the parent class
    }
}
const user = new User("s@s.com", "Sally");
//# sourceMappingURL=myClasses.js.map