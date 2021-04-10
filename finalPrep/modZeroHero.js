// Challenge - See if you can follow the instructions and complete the exercise in under 30 minutes!

// Declare two variables - heroName AND specialAbility - set to strings
var heroName = "Johnny Bravo";
var specialAbility = "Being Cool";

// Declare two variables - greeting AND catchphrase
//   greeting should be assigned to a string that uses concatenation to include the heroName
//   catchphrase should be assigned to a string that uses interpolation to include the specialAbility
var greeting = "Hi, I'm " + heroName;
var catchphrase = `My super power is ${specialAbility}`;

// Declare two variables - power AND energy - set to integers
var power = 240;
var energy = 100;

// Declare two variables - fullPower AND fullEnergy
//   fullPower should multiply your current power by 500
//   fullEnergy should add 150 to your current energy
var fullPower = power * 500;
var fullEnergy = energy + 150;

// Declare two variables - isHuman and identityConcealed - assigned to booleans
var isHuman = true;
var identityConcealed = false;

// Declare two variables - archEnemies AND sidekicks
//   archEnemies should be an array of at least 3 different enemy strings
//   sidekicks should be an array of at least 3 different sidekick strings
var archEnemies = ["Kevin", "Larry", "Popeye"];
var sidekicks = ["Carl", "Pops", "Little Suzy"];

// Print the first sidekick to your console
console.log(sidekicks[0]);

// Print the last archEnemy to the console
console.log(archEnemies[2]);

// Write some code to add a new archEnemy to the archEnemies array
archEnemies.splice(3, 0, "Wanda");

// Print the archEnemies array to console to ensure you added a new archEnemy
console.log(archEnemies);

// Remove the first sidekick from the sidekicks array
sidekicks.shift();

// Print the sidekicks array to console to ensure you added a new sidekick
sidekicks.splice(0, 0, "Carl Jr.");
console.log(sidekicks);

// Create a function called assessSituation that takes three arguments - dangerLevel, saveTheDay, badExcuse
//   - dangerLevel should be an integer
//   - saveTheDay should be a string a hero would say once they save the day
//   - badExcuse should be a string a hero would say if they are too afraid of the dangerLevel

// Your function should include an if/else statement that meets the following criteria
//   - Danger levels that are above 50 are too scary for your hero. Any danger level that is above 50 should result in printing the badExcuse to the console
//   - Anything dangerLevel that is between 10 and 50 should result in printing the saveTheDay string to the console
//   - If the dangerLevel is below 10, it means it is not worth your time and should result in printing the string "Meh. Hard pass." to the console.
var dangerLevel;
var announcement = 'Never fear, the Courageous Birdman is here!';
var excuse = 'I have to go ask my wife. Be right back.';

function assessSituation(dangerLevel, announcement, excuse) {
  if (dangerLevel < 10) {
    console.log('Meh. Hard pass.');
  } else if (dangerLevel <= 50) {
    console.log(announcement);
  } else {
    console.log(excuse);
  }
}

assessSituation(49, announcement, excuse);
//Test Cases

// assessSituation(99, announcement, excuse) > Should print - 'I think I forgot to lock up my 1992 Toyota Coralla. Be right back.'
//assessSituation(21, announcement, excuse) > should print - 'Never fear, the Courageous Curly Bracket is here!'
//assessSituation(3, announcement, excuse) > should print - "Meh. Hard pass."

// Declare a new variable - scaryMonster - assigned to an Object with the following key/values
//   - name (string)
//   - smell (string)
//   - weight (integer)
//   - citiesDestroyed (array)
//   - luckyNumbers (array)
//   - address (object with following key/values: number , street , state, zip)
var scaryMonster = {
  name: "Godzilla",
  smell: "Sulfur",
  weightInTons: 99634,
  citiesDestroyed: ["Tokyo", "New York City", "Fukuoka"],
  luckyNumbers: [666, 13, 4],
  address: {
    number: 123,
    street: "Pacific Ocean Way",
    state: "Pacifica",
    zip: 66666
  }
}


// Create a new class called SuperHero
// - Your class should have the following DYNAMIC values
//   - name
//   - superpower
//   - age
// - Your class should have the following STATIC values
//   - archNemesis, assigned to "The Syntax Error"
//   - powerLevel = 100
//   - energyLevel = 50
class SuperHero {
  constructor(name, superpower, ageInYears) {
    this.name = name;
    this.superpower = superpower;
    this.age = ageInYears;
    this.archNemesis = "The Syntax Error";
    this.powerLevel = 100;
    this.energyLevel = 50
  }
  sayName() {
    console.log(this.name);
  } maximizeEnergy() {
    this.energyLevel = 1000;
  } gainPower(x) {
    this.powerLevel = this.powerLevel + x;
  }
}

// - Create the following class methods
//   - sayName, should print the hero's name to the console
//   - maximizeEnergy, should update the energyLevel to 1000
//   - gainPower, should take an argument of a number and INCREASE the powerLevel by that number

// - Create 2 instances of your SuperHero class
var ericHero = new SuperHero("Eric", "Sleeping", 24);
ericHero.sayName();
ericHero.gainPower(25000);
console.log(ericHero);

var ryanHero = new SuperHero("Ryan", "Gaming", 25);
ryanHero.maximizeEnergy();
console.log(ryanHero);


// Reflection
// What parts were most difficult about this exerise?
// I think the most difficult parts were remembering the correct syntax to use between similar
// concepts, like objects and classes. Also it was interesting that I could put an object within
// an object, so I would like to learn more about the different limitations and applications.

// What parts felt most comfortable to you?
// Naming variables, as well as strings, interpolation, declaring a function, is pretty cake.
// I understand if statements, classes, and objects somewhat well, but I have to go back and
// check that I'm using the proper syntax.

// What skills do you need to continue to practice before starting Mod 1?
// Syntax, syntax, syntax. I would also like to better understand classes and constructor
// statements.
