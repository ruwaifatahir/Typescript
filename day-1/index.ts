// interface Person {
//   /**
//    * Property Modifiers
//    * Data type of property
//    * Whether the property is optional
//    * Whether the property can be edited

//    *  */
//   name: string;
//   age: number;
//   isFeePaid?: boolean;
//   readonly bankBalance: number;
// }

// const greet = (person: Person) => {
//   person.name = "Salman";
//   person.bankBalance = 12;
//   return `Hello ${person.name}, you are ${person.age} years old.`;
// };

// const ruwaifa = { name: "Ruwaifa", age: 22, bankBalance: 1231321 };

// const hammad = {
//   name: "Hammad",

//   age: 22,

//   isFeePaid: true,

//   bankBalance: 1231321,
// };

// const res = greet(ruwaifa);

// const hammadResult = greet(hammad);

// console.log(res);
// console.log(hammadResult);

// interface Log {
//   [index: string]: number;
// }

// const log = (log: Log) => {
//   console.log(log.age);
// };

// log({ age: 21, aaa: 22, isFeePaid: 12 });
// log({ name: 21 });

// =================== Index Signatures ===================

// // interface MyObj {
// //   [key: string]: boolean;
// // }

// // const obj: MyObj = {
// //   foo: true,
// //   bar: false,
// //   baz: true,
// // };

// interface Dictionary {
//   [word: string]: string;
// }

// const MyDictionary: Dictionary = {
//   hello: "an expression of greeting",
//   world:
//     "the earth, together with all of its countries, peoples, and natural features",
//   TypeScript:
//     "an open-source programming language developed and maintained by Microsoft",
// };

//===================Extending Types=================

interface Vehicale {
  registrationNumber: string;
  wheels: number;
}

interface Car extends Vehicale {
  sunRoof: boolean;
  airConditioner: boolean;
  steeringType: string;
}

interface Bike extends Vehicale {
  mudGuardsType: string;
  chainType: string;
}

const checkCar = (car: Car) => {
  const { registrationNumber, wheels, sunRoof, airConditioner, steeringType } =
    car;
  console.log(
    registrationNumber,
    wheels,
    sunRoof,
    airConditioner,
    steeringType
  );
};

const checkBike = (bike: Bike) => {
  const { registrationNumber, wheels, mudGuardsType, chainType } = bike;
  console.log(registrationNumber, wheels, mudGuardsType, chainType);
};

checkCar({
  registrationNumber: "LEC-124124124",
  wheels: 4,
  sunRoof: true,
  airConditioner: true,
  steeringType: "Lerfo",
});

checkBike({
  registrationNumber: "LEC-124124124",
  wheels: 4,
  mudGuardsType: "Jarvis",
  chainType: "Mixim",
});
