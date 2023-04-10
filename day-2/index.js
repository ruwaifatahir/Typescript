"use strict";
function toString(value) {
    return value.toLowerCase();
    //   if (typeof value === "string") {
    //     return "Its a string";
    //   } else if (typeof value === "number") {
    //     return "Its a number";
    //   } else {
    //     throw new Error("Value cannot be converted to string");
    //   }
}
const res = toString(true);
console.log(res);
