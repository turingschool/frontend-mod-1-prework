// Challenge - See if you can follow the instructions and complete the exercise in under 30 minutes!

// Declare two variables - heroName AND specialAbility - set to strings
var heroName = "Queen Bee";
var specialAbility = "become invisible"
// Declare two variables - greeting AND catchphrase
//   greeting should be assigned to a string that uses concatenation to include the heroName
//   catchphrase should be assigned to a string that uses interpolation to include the specialAbility
var greeting = "I go by " + heroName + "!";
var catchphrase = `My special power is to ${specialAbility}!`;
// Declare two variables - power AND energy - set to integers
var power = 1000;
var energy = 10000;
// Declare two variables - fullPower AND fullEnergy
//   fullPower should multiply your current power by 500
//   fullEnergy should add 150 to your current energy
var fullPower = power * 500;
var fullEnergy = energy + 150;
// Declare two variables - isHuman and identityConcealed - assigned to booleans
var isHuman = false;
var identityConcealed = true;

// Declare two variables - archEnemies AND sidekicks
//   archEnemies should be an array of at least 3 different enemy strings
//   sidekicks should be an array of at least 3 different sidekick strings
var archEnemies = ["Crazy Bee", "Flower Power", "Fly Swatter"];
var sidekicks = ["Honey Bee", "Funny Bee", "Dancing Bee"];
// Print the first sidekick to your console
console.log(sidekicks[0]);
// Print the last archEnemy to the console
console.log(archEnemies[2]);
// Write some code to add a new archEnemy to the archEnemies array
archEnemies[3] = "Stinger Bee";
// Print the archEnemies array to console to ensure you added a new archEnemy
console.log(archEnemies);
// Remove the first sidekick from the sidekicks array
sidekicks.shift();
// Print the sidekicks array to console to ensure you added a new sidekick
console.log(sidekicks);
// Create a function called assessSituation that takes three arguments - dangerLevel, saveTheDay, badExcuse
//   - dangerLevel should be an integer
//   - saveTheDay should be a string a hero would say once they save the day
//   - badExcuse should be a string a hero would say if they are too afraid of the dangerLevel

// Your function should include an if/else statement that meets the following criteria
//   - Danger levels that are above 50 are too scary for your hero. Any danger level that is above 50 should result in printing the badExcuse to the console
//   - Anything dangerLevel that is between 10 and 50 should result in printing the saveTheDay string to the console
//   - If the dangerLevel is below 10, it means it is not worth your time and should result in printing the string "Meh. Hard pass." to the console.
function assessSituation (dangerLevel, saveTheDay, badExcuse) {
  if (dangerLevel > 50) {
    console.log(badExcuse);
  } else if (dangerLevel >= 10 && dangerLevel <= 50) {
    console.log(saveTheDay);
  } else if (dangerLevel < 10) {
    console.log("Meh. Hard pass.");
  }
}
var saveTheDay = "I shall fly in and save you!";
var badExcuse = "Let's go home.";
assessSituation(20, saveTheDay, badExcuse);
//Test Cases
var announcement = 'Never fear, the Courageous Curly Bracket is here!';
var excuse = 'I think I forgot to lock up my 1992 Toyota Coralla. Be right back.';
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
  name: "Kitty",
  smell: "weird",
  weight: "3 pounds",
  citiesDestroyed: ["Lollipop Town", "Candy Land", "Ice Cream World"],
  luckyNumbers: [2, 7, 9, 14],
  address: {
    number: 000,
    street: "West Kitty Lane",
    state: "far far away",
    zip: 1400
  }
};
// Create a new class called SuperHero
// - Your class should have the following DYNAMIC values
//   - name
//   - superpower
//   - age
// - Your class should have the following STATIC values
//   - archNemesis, assigned to "The Syntax Error"
//   - powerLevel = 100
//   - energyLevel = 50

// - Create the following class methods
//   - sayName, should print the hero's name to the console
//   - maximizeEnergy, should update the energyLevel to 1000
//   - gainPower, should take an argument of a number and INCREASE the powerLevel by that number

// - Create 2 instances of your SuperHero class
class SuperHero {
  constructor(name, superpower, age) {
    this.name = name;
    this.superpower = superpower;
    this.age = age;
    this.archNemesis = "The Syntax Error";
    this.powerLevel = 100;
    this.energyLevel = 50;
  }
  sayName() {
    console.log(this.name);
  }
  maximizeEnergy() {
    this.energyLevel = 100;
  }
  gainPower(x) {
    this.powerLevel = this.powerLevel + x
  }
}
var superDog = new SuperHero("Panda", "jumping sky high", 10);
var superBunny = new SuperHero("Bun", "eating so fast", 3);


superDog.sayName();
superBunny.sayName();
superDog.maximizeEnergy();
superDog.gainPower(100);
console.log(superDog);

// Reflection
// What parts were most difficult about this exerise?
// I think just being confident in the syntax without relying on my notes too too much. Also the least
// exercise challenged me to make sure I really knew what was going on.
// What parts felt most comfortable to you?
// The first half of the exercises felt very comfortable.

// What skills do you need to continue to practice before starting Mod 1?
// I want to review the syntax we've learned, how methods work, dive deeper into arrays, objects, and functions.
