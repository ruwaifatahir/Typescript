"use strict";
//ANY/ UNKNOWN
/**
 *
 * Convert it into uppercase
 * Log
 */
const logInput = (input) => {
    if (typeof input == "string") {
        let convertedString = input.toUpperCase();
        console.log(convertedString);
    }
    else if (typeof input == "number") {
        input.toString();
        console.log(input);
    }
    else {
        throw Error("Only number and string is allowed");
    }
};
// logInput("we are learning typescript");
// logInput(12);
// logInput(true);
// TYPE CASTING
//1
let x = "hello";
console.log(x.toUpperCase());
const johnObj = {
    name: "John Doe",
    age: 30,
    address: "123 Main St.",
};
const hammadObj = {
    name: "Hammad",
    age: 20,
    address: "shamnager",
};
const hamza = {
    name: "Hamza",
    age: 20,
};
const john = johnObj;
const hammad = hammadObj;
// 3
let age = 10;
//ARRAYS
const names = ["Hammad", "Salman", "Khubaib"];
//ARRAYS Methods
//indexOf
let closeFriends = ["Hammad", "Salman", "Khubaib", "Faiz", "Ruwaifa"];
console.log(closeFriends.indexOf("Bhatti"));
//concat
const commonFriends = ["John", "Maxim", "Abdullah"];
const friendsOfFirends = ["Qasim", "Zahid", "Ahmad"];
const friend = closeFriends.concat(commonFriends, friendsOfFirends);
console.log(friend);
