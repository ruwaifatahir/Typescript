//Enums Concept Example
const enum HttpStatusCodes {
  Ok = 200,
  Created = 201,
  NoContent = 204,
  BadRequest = 400,
  Unauthorized = 401,
  Forbidden = 403,
  NotFound = 404,
  ServerError = 500,
}

console.log(HttpStatusCodes.Ok);

function getErrorMessage(statusCode: HttpStatusCodes): string {
  switch (statusCode) {
    case HttpStatusCodes.Ok:
      return "Request was successful";
    case HttpStatusCodes.Created:
      return "Resource was created successfully";
    case HttpStatusCodes.NoContent:
      return "Request was successful but no content was returned";
    case HttpStatusCodes.BadRequest:
      return "Invalid request parameters";
    case HttpStatusCodes.Unauthorized:
      return "Authentication failed";
    case HttpStatusCodes.Forbidden:
      return "User does not have permission to access resource";
    case HttpStatusCodes.NotFound:
      return "Requested resource was not found";
    case HttpStatusCodes.ServerError:
      return "Server error occurred";
    default:
      return "Unknown error occurred";
  }
}

console.log(getErrorMessage(HttpStatusCodes.Ok)); // Output: "Request was successful"
console.log(getErrorMessage(HttpStatusCodes.Forbidden)); // Output: "User does not have permission to access resource"

//Numeric Enums

enum DaysOfWeek {
  Monday,
  Tuesday = 3,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

const monday: DaysOfWeek = DaysOfWeek.Monday;

//String Enums
enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}

const left: Direction = Direction.Up;

console.log(left);

//Heterogeneous enums

enum BooleanLikeHeterogeneousEnum {
  No = 0,
  Yes = "YES",
}

// Array methonds

let names = [
  "Qasim",
  "Hammad",
  "Salman",
  "Faiz",
  "Khubaib",
  "Hamza",
  "Don",
  "Mark",
  "Elvin",
];
let newNames = names.join(" Janati, ");
console.log(newNames);

//POP
let poppedElement = names.pop();
console.log(poppedElement);
console.log(names);

//Reverse

let reversedArray = [...names].reverse();

console.log("Reversed Array: ", reversedArray);
console.log("Orignal Array: ", names);

//SHIFT
let shiftedElement = names.shift();
console.log(shiftedElement);
console.log(names);

//UNSHIFT
let unShiftedArray = names.unshift("Qasim");
console.log(unShiftedArray);
console.log(names);

//Slice
const trimmedArray = names.splice(6, 7);
console.log(trimmedArray);
console.log(names);

//Splice
const res = names.splice(1, 0, "Madiyan", "Bhatti");
console.log(res);
console.log(names);

//toString
const stringifyArray = names.toString();
console.log(stringifyArray);
console.log(names);


