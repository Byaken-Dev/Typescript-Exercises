"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function detectType(val) {
    if (typeof val === "string") {
        //We are referring to the type of the variable, not the value
        return val.toLowerCase();
    }
    return val + 3;
}
function provideId(id) {
    if (!id) {
        console.log("No ID provided");
        return;
    }
    id.toLowerCase();
}
function isAdmin(account) {
    if ("isAdmin" in account) {
        //Checking if the property exists in the object
        return account.isAdmin;
    }
}
function logValue(x) {
    if (x instanceof Date) {
        console.log(x.toUTCString());
    }
    else {
        console.log(x.toUpperCase());
    }
}
//Type predicate
function isFish(pet) {
    return pet.swim !== undefined;
}
function getArea(shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * Math.pow(shape.radius, 2);
        case "square":
            return Math.pow(shape.sideLength, 2);
        default:
            const _exhaustiveCheck = shape; //We're using 'never' to ensure that all cases are handled
            // It is expected that 'never' should never be used
            return _exhaustiveCheck;
    }
}
//# sourceMappingURL=detection.js.map