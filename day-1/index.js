"use strict";
// interface Person {
//   /**
//    * Property Modifiers
//    * Data type of property
//    * Whether the property is optional
//    * Whether the property can be edited
const checkCar = (car) => {
    const { registrationNumber, wheels, sunRoof, airConditioner, steeringType } = car;
    console.log(registrationNumber, wheels, sunRoof, airConditioner, steeringType);
};
const checkBike = (bike) => {
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
