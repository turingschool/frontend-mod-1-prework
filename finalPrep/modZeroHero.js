// Challenge - See if you can follow the instructions and complete the exercise in under 30 minutes!

// Declare two variables - heroName AND specialAbility - set to strings
var heroName = "Superman";
var specialAbility = "X-Ray Vision";
// Declare two variables - greeting AND catchphrase
//   greeting should be assigned to a string that uses concatenation to include the heroName
//   catchphrase should be assigned to a string that uses interpolation to include the specialAbility
var greeting = heroName + " is here to save the day!";
var catchphrase = `He has ${specialAbility} to find all the enemies`;
// Declare two variables - power AND energy - set to integers
var power = 1;
var energy = 2;
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
var archEnemies = ["Batman", "Thanos", "Dr. Octopus"];
var sidekicks = ["Robin", "Cat Girl", "Nightwing"];
// Print the first sidekick to your console
console.log(sidekicks[0]);
// Print the last archEnemy to the console
console.log(archEnemies[2]);
// Write some code to add a new archEnemy to the archEnemies array
archEnemies[3] = "Loki";

// Print the archEnemies array to console to ensure you added a new archEnemy
console.log(archEnemies);
// Remove the first sidekick from the sidekicks array
sidekicks.shift();
// Print the sidekicks array to console to ensure you added a new sidekick
console.log(sidekicks)
// Create a function called assessSituation that takes three arguments - dangerLevel, saveTheDay, badExcuse
//   - dangerLevel should be an integer
//   - saveTheDay should be a string a hero would say once they save the day
//   - badExcuse should be a string a hero would say if they are too afraid of the dangerLevel
var dangerLevel = 15
var saveTheDay = "Is that all you guys had?"
var badExcuse = "It's too scary!"
// Your function should include an if/else statement that meets the following criteria
//   - Danger levels that are above 50 are too scary for your hero. Any danger level that is above 50 should result in printing the badExcuse to the console
//   - Anything dangerLevel that is between 10 and 50 should result in printing the saveTheDay string to the console
//   - If the dangerLevel is below 10, it means it is not worth your time and should result in printing the string "Meh. Hard pass." to the console.
function assessSituation() {
  if (dangerLevel > 50) {
    return badExcuse;
}  else if(dangerLevel >= 10 && dangerLevel < 51) {
    return saveTheDay
}  else if(dangerLevel < 10) {
    return "Meh. Hard Pass"
  }
}
console.log(assessSituation(15));
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

var addresses = {
  number: 1123,
  street: "Colfax Avenue",
  state: "Colorado",
  zip: 12345
}
var scaryMonster = {
  name: "Sully",
  smell: "Wet Fur",
  weight: 300,
  citiesDestroyed: ["Denver", "Hollywood", "NYC"],
  luckyNumbers: [8, 23, 47],
  address: addresses
}
console.log(scaryMonster);
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
    this.energyLevel = 1000
    console.log(this.energyLevel)
  }
  gainPower(power) {
    this.powerLevel + power
    console.log(this.powerLevel)
  }
}
var superHero1 = new SuperHero("Superman", "X-Ray Vision", 150);
console.log(superHero1);
var superHero2 = new SuperHero("The Flash", "Super Speed", 25);
console.log(superHero2);
// Reflection
// What parts were most difficult about this exerise?

// The last problem was definitely the hardest one of all. There were so many concepts that we've
// been learning, stuffed into one problem.

// What parts felt most comfortable to you?

// Declaring variables is definitely easy and second nature to understand and utilize them.

// What skills do you need to continue to practice before starting Mod 1?

// Definitely need to keep working on classes and functions. I'm still kind of fuzzy on them.
