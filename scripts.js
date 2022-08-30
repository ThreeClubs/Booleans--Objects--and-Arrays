console.log("poop");

// Truthy and Falsy Value

console.log(Boolean(true)); // true ev true
console.log(Boolean(false)); // rest ev to false
console.log(Boolean(null)); // nulll is f
console.log(Boolean(undefined)); // undf is f
console.log(Boolean(NaN)); // NaN is f
console.log(Boolean(0)); // 0 is f
console.log(Boolean("")); // empty is f

console.log(Boolean("hello")); // strings and number ev to true
console.log(Boolean(1)); //

// Boolean basic

// Boolean logic evaluates a whole statement to see whether it is either true or false

// Ex 1 "It is raining && my feet are wet"
// Ex 2 "It is raning || my foot are wet"

console.log(!false); // true
console.log(true && false); // false
console.log(true || false); // true
console.log(123 === "123"); //false
console.log(1.23 === 123e-2); // true

console.log(Boolean(0 && 122)); // false because 0 always ev to falsy
console.log(Boolean(0 || 122)); // true because only one number needs to ev to true

let weather = "raining";
let feet = "wet";

// if (weather = "raining" && feet="wet");

let x = 4,
  y = 2,
  z = 0;

if (x === 4 && (!(y == 1) || z == 0)) {
  console.log(true);
} else {
  console.log(false);
}

//Non-Primitive Data Types

// 1. Object - used for denoting complex data structure with a collection of properties
// and methods.
// 1a. Array (a type of object) - A data structure whereby you can store a collection
// of elements.

//objects are an unordered collection of key/value pairs, where the
//  --- keys are usually strings
//  --- values can be any type, even other objects.

// objects are defined by the list of key: value pairs, comma-separated, and enclosed by
// curly braces

const person = {
  firstName: "John",
  lastName: "Doe",
};

// firstName and lastName are keys
// "John" and "Smith" are values
// the combination of key and value is called a property

console.log(person);

const fido = {
  name: "Fido",
  weight: 40,
  breed: "mixed",
  loves: ["walks", "fetching balls"],
};

console.log(fido);

const moi = {
  firstName: "Andrew",
  lastName: "Grenon",
  age: 37,
  canDrive: false,
  favColour: "purple",
};

console.log(moi);

// Accessing object properties

//dot notation OR bracket notation provides access to object properties

//specifically, using the dot operator OR using the square brackets

//DOT operator

// objectName.properyName
console.log(moi.age);

// if (moi.age > 30) {
//   alert("OLD!");
// } else {
//   alert("YOUNG!");
// }

console.log(
  `This is ${moi.firstName} ${moi.lastName} and their favourite colour is ${moi.favColour}.`
);

// PRO TIP:  using backticks (``) instead of "" or '' allows use to call on object properties in
// the flow of a string using ${objectName.objectProperty}

// Square Bracket Notation

console.log(moi[`age`]);

console.log(
  `This is ${moi[`firstName`]} ${moi[`lastName`]} and he is ${moi[`age`]} years old.`
);

const breed = fido["breed"];

console.log(breed);

// if (breed === "mixed") {
//     alert("Best in show");
// }

const property = `name`;
const hero = {
    name: `Batman`,
};

console.log(hero[property]);

const rectangle = {
    length: 10,
    width: 50
};

const area = rectangle[`length`]*rectangle[`width`];

console.log(area);

//modifying the value of a property

person.firstName = "Jane";

console.log(person);

person.favFood = `Spaghetti`;
console.log(person);

delete person.favFood;

console.log(person);

const newPerson = {
    firstName: `Dirk`,
    lastName: `Spriggly`,
    favNumber: 23,
    favDay: `Tuesday`
};

console.log(newPerson);

newPerson.favFood = `Pencil Shavings`;

console.log(newPerson);

delete newPerson.favDay;
newPerson.favNumber *= 2

console.log(newPerson); 














