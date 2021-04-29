// Challenge - See if you can follow the instructions and complete the exercise in under 30 minutes!

// Declare two variables - heroName AND specialAbility - set to strings
var heroName = "";
var specialAbility = "";


// Declare two variables - greeting AND catchphrase
//   greeting should be assigned to a string that uses concatenation to include the heroName
//   catchphrase should be assigned to a string that uses interpolation to include the specialAbility

var greeting = "You face the might of " + heroName + "!";
var catchphrase =  `Prepare to taste the full force of my ${specialAbility}!`

// Declare two variables - power AND energy - set to integers
var power = 95;
var energy = 85;

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

var archEnemies = ["The Slug", "Bad Mo Fo", "Hacky McSlash"];
var sidekicks = ["Boundless Energy Boy", "Hyperstone", "Greg"];

// Print the first sidekick to your console
console.log(sidekicks[0]);

// Print the last archEnemy to the console
console.log(archEnemies[archEnemies.length-1]);

// Write some code to add a new archEnemy to the archEnemies array
archEnemies.push("Big Fist");

// Print the archEnemies array to console to ensure you added a new archEnemy
console.log(archEnemies);

// Remove the first sidekick from the sidekicks array
sidekicks.shift();

// Print the sidekicks array to console to ensure you added a new sidekick
// NOTE: prior intruction said to remove, this says to print.  I've followed the prior instruction to remove first sidekick.
console.log(sidekicks);

// Create a function called assessSituation that takes three arguments - dangerLevel, saveTheDay, badExcuse
//   - dangerLevel should be an integer
//   - saveTheDay should be a string a hero would say once they save the day
//   - badExcuse should be a string a hero would say if they are too afraid of the dangerLevel

function assessSituation (dangerLevel, saveTheDay, badExcuse) {
  if (dangerLevel > 50) {
    console.log(badExcuse);
  } else if (dangerLevel <= 50 && dangerLevel >= 10) {
    console.log(saveTheDay);
  } else {
    console.log("Meh.  Hard pass.");
  }
}

// Your function should include an if/else statement that meets the following criteria
//   - Danger levels that are above 50 are too scary for your hero. Any danger level that is above 50 should result in printing the badExcuse to the console
//   - Anything dangerLevel that is between 10 and 50 should result in printing the saveTheDay string to the console
//   - If the dangerLevel is below 10, it means it is not worth your time and should result in printing the string "Meh. Hard pass." to the console.

//Test Cases
var announcement = 'Never fear, the Courageous Curly Bracket is here!';
var excuse = 'I think I forgot to lock up my 1992 Toyota Coralla. Be right back.';
// assessSituation(99, announcement, excuse) // > Should print - 'I think I forgot to lock up my 1992 Toyota Coralla. Be right back.'
// assessSituation(21, announcement, excuse) // > should print - 'Never fear, the Courageous Curly Bracket is here!'
assessSituation(3, announcement, excuse) // > should print - "Meh. Hard pass."

// Declare a new variable - scaryMonster - assigned to an Object with the following key/values
//   - name (string)
//   - smell (string)
//   - weight (integer)
//   - citiesDestroyed (array)
//   - luckyNumbers (array)
//   - address (object with following key/values: number , street , state, zip)

var scaryMonster = {
  name: "Giant Squid",
  smell: "fishy",
  weight: 5000,
  citiesDestroyed: ["Atlanta", "Charleston", "Orlando"],
  luckyNumbers: [5,7,8,9],
  address: {number: 123, street: "Fake Street", state: "CO", zip: 454391}
};
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

class SuperHero {

  constructor(name, superPower, age) {
    this.name = name;
    this.superPower = superPower;
    this.age = age;
    this.archNemesis = "The Syntax Error",
    this.powerLevel = 100,
    this.energyLevel = 50
  }

  satName() {
    console.log(this.name);
  }
  maximizeEnergy() {
    this.energyLevel = 1000;
  }
  gainPower(num) {
    this.powerLevel += num;
  }
}
var superDuty = new SuperHero("Super Duty", "Super Strength", 25);
superDuty.satName();
superDuty.gainPower(50);

console.log(superDuty);

var bigRightArm = new SuperHero("Big Right Arm", "Punching", 34);
bigRightArm.satName();
bigRightArm.maximizeEnergy();
bigRightArm.gainPower(125);

console.log(bigRightArm);

// - Create the following class methods
//   - sayName, should print the hero's name to the console
//   - maximizeEnergy, should update the energyLevel to 1000
//   - gainPower, should take an argument of a number and INCREASE the powerLevel by that number



// - Create 2 instances of your SuperHero class


// Reflection
// What parts were most difficult about this exerise?
// For me, it was figuring out how to test and observe my code changes to make sure it was operating as intended, mostly on the final Class portion.

// What parts felt most comfortable to you?
// The early parts were easy and comfortable, including defining variables of all data types and doing simple functions.

// What skills do you need to continue to practice before starting Mod 1?
// The Class constructor is still a bit nebulous to me, so I plan to review and learn more on that to try to get a better understanding and comfort with it.
