// Challenge - See if you can follow the instructions and complete the exercise in under 30 minutes!

// Declare two variables - heroName AND specialAbility - set to strings
var heroName = "Superman";
var specialAbility = "flight";

// Declare two variables - greeting AND catchphrase
//   greeting should be assigned to a string that uses concatenation to include the heroName
//   catchphrase should be assigned to a string that uses interpolation to include the specialAbility
var greeting = ("Greetings citizen I am" + heroName);
var specialAbility = `Now to use my superpower of ${specialAbility}.`

// Declare two variables - power AND energy - set to integers
var power = 1000;
var energy = 500;

// Declare two variables - fullPower AND fullEnergy
//   fullPower should multiply your current power by 500
//   fullEnergy should add 150 to your current energy
var fullPower = (500 * power);
var fullEnergy = (150 + energy);

// Declare two variables - isHuman and identityConcealed - assigned to booleans
var isHuman = false;
var identityConcealed = true;

// Declare two variables - archEnemies AND sidekicks
//   archEnemies should be an array of at least 3 different enemy strings
//   sidekicks should be an array of at least 3 different sidekick strings
var archEnemies = ["Lex Luthor", "Brainiac", "Doomsday"];
var sideKicks = ["Krypto", "Superboy", "Supergirl"];

// Print the first sidekick to your console
console.log(sideKicks[0]);
// Print the last archEnemy to the console
console.log(archEnemies[2]);
// Write some code to add a new archEnemy to the archEnemies array
archEnemies.push("Sinestro");
// Print the archEnemies array to console to ensure you added a new archEnemy
console.log(archEnemies);
// Remove the first sidekick from the sidekicks array
sideKicks.shift();
// Print the sidekicks array to console to ensure you added a new sidekick
console.log(sideKicks);
// Create a function called assessSituation that takes three arguments - dangerLevel, saveTheDay, badExcuse
function assessSituation(dangerLevel, saveTheDay, badExcuse) {}
var dangerLevel = 5;
//   - dangerLevel should be an integer
//   - saveTheDay should be a string a hero would say once they save the day
var saveTheDay = ("Hooray, I've saved the Day");
//   - badExcuse should be a string a hero would say if they are too afraid of the dangerLevel
var badExcuse = ("I'm too scared, the danger level at" + dangerLevel + "is too high.");
// Your function should include an if/else statement that meets the following criteria
//   - Danger levels that are above 50 are too scary for your hero. Any danger level that is above 50 should result in printing the badExcuse to the console
//   - Anything dangerLevel that is between 10 and 50 should result in printing the saveTheDay string to the console
//   - If the dangerLevel is below 10, it means it is not worth your time and should result in printing the string "Meh. Hard pass." to the console.
if (dangerLevel > 50) {console.log(badExcuse);
} else (dangerLevel >= 10 && dangerLevel <= 50) { console.log(saveTheDay);} else if (dangerLevel < 10) { console.log("Meh, Hard pass.");}

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
 name: "Sully",
 smell: "rotting cheese",
 weight: 335,
 citiesDestroyed: ["Seattle", "San Diego", "Houston"],
 luckyNumbers: [8, 15, 38],
 address = {
  number: 3535,
  street: "Main St",
  state: CO,
  zip: 80145,
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
class SuperHero {
 constructor(archNemesis, powerLevel, energy) {

 this.archNemesis = "Brainiac";
 this.powerLevel = 100;
 this.energy = 50;
 }
}



let sayName = ("The superhero's name is" + heroName);
// - Create 2 instances of your SuperHero class


// Reflection
// What parts were most difficult about this exerise?
 Combining all the parts together.
 Objects are hard.
The class methods, dynamic, and static part by far. Had real trouble finding info.
// What parts felt most comfortable to you?
Seemingly the parts separately.
The easiest parts.
// What skills do you need to continue to practice before starting Mod 1?
Conceptualizing the code. I seem to have trouble trying to picture what angle of writing code I should take.
