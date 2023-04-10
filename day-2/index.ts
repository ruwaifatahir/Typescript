type Colorful = {
  [index: string]: string;
};

type Circle = {
  radius: number;
};

type Square = {
  width: number;
};

type ColorfulCircle = Colorful & Circle & Square;

function toString(value: unknown) {
  if (typeof value === "string") {
    return value.toLowerCase();
  } else if (typeof value === "number") {
    return value.toFixed(1);
  }
  //   else {
  //     throw new Error("Value cannot be converted to string");
  //   }
}

const res = toString(true);

console.log(res);

const names: Array<string> = ["Hammad", "Faiz", "Khubaib", "Ruwaifa"];

// function doStuff(values: ReadonlyArray<string>) {
//   const valuesCopy = values;
//   // ...but we can't mutate 'values'.
//   values.push("hello!");
// }

// const stringNumberPair: readonly [string, number, boolean] = [
//   "Hamza",
//   12,
//   true,
// ];

// // function doSomething(arr: readonly [string, number, boolean]) {
// //   arr[0] = "Hammad";
// // }

// type NumberOrString = number | string;

// type myNumber = number;

// interface Animal {
//   name: string;
// }

// interface Bear extends Animal {
//   honey: boolean;
// }

// type Animal = {
//   name: string;
// };

// type Bear = Animal & {
//   honey: boolean;
// };

// interface Animal {
//   name: string;
// }

// interface Animal {
//   age: number;
// }

// type Animal = {
//   name: string;
// };

// type Animal = {
//   age: number;
// };
// const animal: Animal = {
//   name: "bear",
//   age: 1,
// };

// interface Cat {
//   name: string;
// }

// interface Dog {
//   name: string;
//   age: number;
// }

// const logAnimal = (animal: Cat) => {
//   console.log(animal);
// };

// const Tom: Cat = {
//   name: "Tom",
// };

// const Husky: Dog = {
//   name: "Husky",
//   age: 10,
// };

// logAnimal(Tom);

// logAnimal(Husky);

// let x = (a: number) => 0;
// let y = (b: number, s: string) => 0;

function logName(something: { name: string }) {
  console.log(something.name);
}

var person = { name: "matt", job: "being awesome" };
var animal = { name: "cow", diet: "vegan, but has milk of own species" };
var random = { note: `I don't have a name property` };

logName(person); // okay
logName(animal); // okay
logName({ name: "fss", job: "ll" }); // Error: property `name` is missing
