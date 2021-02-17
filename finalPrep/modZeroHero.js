// Challenge - See if you can follow the instructions and complete the exercise in under 30 minutes!

// Declare two variables - heroName AND specialAbility - set to strings
var heroName = "Tree Man";
var specialAbility = "talk to trees";

// Declare two variables - greeting AND catchphrase
//   greeting should be assigned to a string that uses concatenation to include the heroName
//   catchphrase should be assigned to a string that uses interpolation to include the specialAbility

var greeting = "Don't worry, " + heroName + " is here!";
var catchphrase = `I can ${specialAbility}, but you don't be-leaf me!`;

// Declare two variables - power AND energy - set to integers
var power = 47;
var energy = 1;

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
var archEnemies = ["Global Warming Man", "Logger Woman", "Termite Man"];
var sidekicks = ["Flower Power Woman", "The Creature", "Owl Boy"];

// Print the first sidekick to your console
console.log(sidekicks[0]);
// Print the last archEnemy to the console
console.log(archEnemies[2]);
// Write some code to add a new archEnemy to the archEnemies array
archEnemies.push("Windstorm");
// Print the archEnemies array to console to ensure you added a new archEnemy
console.log(archEnemies);
// Remove the first sidekick from the sidekicks array
sidekicks.shift(0);
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
function assessSituation() {
  dangerLevel = 51
  saveTheDay = "Saving the world, one tree at a time"
  badExcuse = "I would, but this sounds like a job for The Creature."
if (dangerLevel <= 10) {
  console.log("Meh, Hard Pass");
  }else if (dangerLevel > 50) {
    console.log(badExcuse);
  }else  {
    console.log(saveTheDay)
    }
}

assessSituation();
//Test Cases
var announcement = 'Never fear, the Courageous Curly Bracket is here!'
var excuse = 'I think I forgot to lock up my 1992 Toyota Coralla. Be right back.'
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
  name: "Snarfle",
  smell: "Florida in the summertime",
  weight: 450,
  citiesDestroyed: ["Toyoko", "Amsterdam", "Sacramento"],
  luckyNumbers: [74, 13, 6],
  address: {
    number: 188,
    street: "Hollowheart Drive",
    state: "OR",
    zip: 97701
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

// - Create the following class methods
//   - sayName, should print the hero's name to the console
//   - maximizeEnergy, should update the energyLevel to 1000
//   - gainPower, should take an argument of a number and INCREASE the powerLevel by that number

// - Create 2 instances of your SuperHero class
class Superhero {
  constructor(name, superpower, age,) {
    this.name = name;
    this.superpower = superpower;
    this.age = age;
    this.archNemisis = "The Syntax Error";
    this.powerLevel = 100;
    this.energyLevel = 50;
  }
  sayName() {
    console.log(this.name)
  }
  maximizeEnergy() {
    this.energyLevel = 1000
  }
  gainPower(power) {
    this.powerLevel = this.powerLevel + power
  }
}
 var superheroOne = new Superhero("The Laser Tagger", "laser eyes", 14, 10);
 var superheroTwo = new Superhero("BonBon Man", "eats a ridiculous amount of bonbons", 125, 5);

 console.log(superheroOne);
 superheroTwo.maximizeEnergy();
 console.log(superheroTwo);

 superheroOne.gainPower(10);
 console.log(superheroOne);

 superheroTwo.gainPower(20);
 console.log(superheroTwo);
// Reflection
// What parts were most difficult about this exerise?

//I found it difficult to understand certain syntax rules. I would have the classes, methods, and functions all down but spent time figuring out the syntax to piece them all together.

// What parts felt most comfortable to you?

//if/else statements and probably the concepts of OOP just because we've had so much practice with them at this point.

// What skills do you need to continue to practice before starting Mod 1?

//I need to practice piecing everything together to make longer scripts. This will help me understand the syntax rules a little better and also help me understand how everything we're learning works together.
