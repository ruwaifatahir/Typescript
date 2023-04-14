//Enums Concep Example
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

console.log(HttpStatusCodes.Unauthorized);

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
  Tuesday,
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
