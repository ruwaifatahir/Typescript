"use strict";
const persons = [
    { name: "Khubaib", age: 20 },
    {
        name: "Ruwaifa",
        age: 20,
    },
    {
        name: "Salman",
        age: 25,
    },
    {
        name: "Hammad",
        age: 22,
    },
];
const khubaib = persons[0];
const filteredArr = persons.filter((person) => person.age < 25);
// console.log(persons);
// console.log(filteredArr);
//Map
const floatingNumbersArr = [2.4, 1.5, 100.43, 88.22];
const transformedArr = floatingNumbersArr.map((number) => Math.round(number));
// console.log(transformedArr);
//Every
const isArrValid = persons.every((person) => person.age > 20);
// console.log(isArrValid);
//reduceRight
const numbersArr = [10, 4, 2, 1];
const reducedRightVal = numbersArr.reduceRight((a, b) => a - b);
/**
 * 1 - 2 = -1
 * 2 - 4 = -2
 * 4 - 10 = -6
 *
 *  1 - 2  = -1
 * -1 - 4  = -5
 * -5- 10   = -15
 */
// console.log(reducedRightVal);
//reduce
const reducedLeftVal = numbersArr.reduce((a, b) => a - b);
/**
 *  10 - 4  = 6
 *  6 - 2  = 4
 *  4 - 1   = 3
 */
// console.log(reducedLeftVal);
//some
const isValValid = persons.some((person) => person.age >= 25);
// console.log(isValValid);
//sort
const unOrderedArr1 = [5, 10, 3, 7, 8, 5, 3, 1];
const unOrderedArr2 = [5, 10, 3, 7, 8, 5, 3, 1];
const fruits = ["Mango", "Peach", "Strawberry", "Banana"];
const ascendingOrderedArr = unOrderedArr1.sort((a, b) => a - b);
const descendingOrderedArr = unOrderedArr2.sort((a, b) => b - a);
const arrangedFruits = fruits.sort();
// console.log(ascendingOrderedArr);
// console.log(descendingOrderedArr);
// console.log(arrangedFruits);
//fill
const friends = [
    "Salman",
    "Ruwaifa",
    "Kamil",
    "Mohsin",
    "Qasim",
    "Hammad",
    "Khubaib",
];
const filledArr = friends.fill("Waqar", 2, 5);
console.log(filledArr);
// find
const personFound = persons.find((person) => person.age >= 25);
console.log(personFound);
