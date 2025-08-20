"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const User = {
    name: "John",
    email: "j@example.dev",
    isActive: true,
};
const createUser = ({ name, isPaid }) => { };
const newUser = { name: "Sabine", isPaid: false, email: "s@s.com" };
createUser(newUser);
//createCourse is returning an object in this case, we destructure the object in the parameter
const createCourse = ({ name, price }) => {
    return { name: "ReactJS", price: 399 };
};
const myUser = {
    _id: "1234",
    name: "John",
    email: "j@j.com",
    isActive: false,
};
const createUserType = (user) => { };
//# sourceMappingURL=myObjects.js.map