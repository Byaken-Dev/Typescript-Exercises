//An interface is similar to a class but it only defines the structure of an object
interface User {
  readonly dbId: number;
  email: string;
  userId: number;
  googleId?: string;
  startTrail: () => string; //Arrow function type, either works
  //startTrail(): string;
  getCoupon(couponName: string, value: number): number;
}

const sabine: User = {
  dbId: 22,
  email: "s@s.com",
  userId: 2211,
  startTrail: () => {
    return "Trail started";
  },
  getCoupon: (couponName: "coupon", value: 10) => {
    return 10;
  },
};

//We can also extend interfaces and add new fields
