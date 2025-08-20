const User = {
  name: "John",
  email: "j@example.dev",
  isActive: true,
};

const createUser = ({ name, isPaid }: { name: string; isPaid: boolean }) => {};

const newUser = { name: "Sabine", isPaid: false, email: "s@s.com" };
createUser(newUser);

//createCourse is returning an object in this case, we destructure the object in the parameter
const createCourse = ({ name, price }: { name: string; price: number }): {} => {
  return { name: "ReactJS", price: 399 };
};

// Custom User type
type User = {
  readonly _id: string;
  name: string;
  email: string;
  isActive: boolean;
  creditCardDetails?: string; // Optional property
};

const myUser: User = {
  _id: "1234",
  name: "John",
  email: "j@j.com",
  isActive: false,
};

const createUserType = (user: User) => {};

//createUserType({ name: "Sabine", email: "", isActive: true });

//Create a type that has custom properties as Card Number and Card Date
type cardNumber = {
  cardNumber: string;
};

type cardDate = {
  cardDate: string;
};

//This is just an example, this would be a poorly way of handling card details
type cardDetails = cardNumber &
  cardDate & {
    cvv: number;
  };

export {};
