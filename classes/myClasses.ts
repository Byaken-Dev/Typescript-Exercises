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

//Simplified version with less code, also a cleaner syntax
class User {
  protected _courseCount = 1; //Protected allows access in child classes
  readonly city: string = "New York";
  constructor(
    public email: string,
    public name: string // private userId: string
  ) {}

  private deleteToken() {
    //This method cannot be accessed outside this class
    console.log("Token deleted");
  }
  get getAppleEmail(): string {
    return `apple-${this.email}`;
  }

  get courseCount(): number {
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
  isFamily: boolean = true;

  changeCourseCount() {
    this._courseCount = 4; // Accessing the setter from the parent class
  }
}

const user = new User("s@s.com", "Sally");
