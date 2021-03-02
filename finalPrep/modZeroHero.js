// Challenge - See if you can follow the instructions and complete the exercise in under 30 minutes!
// Declare two variables - heroName AND specialAbility - set to strings
var heroName = "Bat Man";
var specialAbility = "fricken' lazers";

// Declare two variables - greeting AND catchphrase
//   greeting should be assigned to a string that uses concatenation to include the heroName
//   catchphrase should be assigned to a string that uses interpolation to include the specialAbility
var greeting = "Hello " + heroName;
var catchphrase = `Eat these ${specialAbility}!`;

// Declare two variables - power AND energy - set to integers
var power = 234;
var energy = 523;

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
var archEnemies = ["The Penguin", "Two Face", "Joker"];
var sidekicks = ["Cat Woman", "Robin", "Alfred"];

// Print the first sidekick to your console
console.log(sidekicks[0]);

// Print the last archEnemy to the console
console.log(archEnemies[2]);

// Write some code to add a new archEnemy to the archEnemies array
archEnemies.push ("Bane");

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
var dangerLevel = 22;
var saveTheDay = "PAYME! PAY! ME!";
var badExcuse = "My britches are soggy... gotta go change.";

function assessSituation(dangerLevel, saveTheDay, badExcuse){
  if (dangerLevel > 50) {
    console.log(badExcuse);
  } else if (dangerLevel < 10){
    console.log("Meh. Hard pass.") ;
  } else {
    console.log(saveTheDay);
  }
};

assessSituation(55, saveTheDay, badExcuse);

// Your function should include an if/else statement that meets the following criteria
//   - Danger levels that are above 50 are too scary for your hero. Any danger level that is above 50 should result in printing the badExcuse to the console
//   - Anything dangerLevel that is between 10 and 50 should result in printing the saveTheDay string to the console
//   - If the dangerLevel is below 10, it means it is not worth your time and should result in printing the string "Meh. Hard pass." to the console.


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
  name: "Swamp Thing",
  smell: "dirt",
  weight: 688,
  citiesDestroyed: ["Atlanta", "Decatur"],
  luckyNumbers: [12, 34, 45, 67, 78],
  address: {number: 1234, street: "Main Street", state: "Florida", zip: "32601"}
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
class SuperHero {
  constructor(name, superpower, age) {
    this.name = name;
    this.power = superpower;
    this.age = age;
    this.archNemesis = "The Syntax Error";
    this.powerLevel = 100;
    this.energyLevel = 50;
  }
  sayName() {
    console.log(this.name);
  }
  maximizeEnergy() {
    this.energyLevel = 1000;
  }
  gainPower() {
    this.powerLevel = this.powerLevel * 10;
  }
};
var spidey = new SuperHero ("Spider Man", "web", 20)
var batty = new SuperHero("Batman", "fly", 30);
// testing below
batty.sayName();
batty.maximizeEnergy();
console.log(batty);
batty.gainPower();
console.log(batty);

// - Create the following class methods
//   - sayName, should print the hero's name to the console
//   - maximizeEnergy, should update the energyLevel to 1000
//   - gainPower, should take an argument of a number and INCREASE the powerLevel by that number

// - Create 2 instances of your SuperHero class


// Reflection
// What parts were most difficult about this exerise?
// There were two things I could not figure out for the life of me: interpolation and the last
// method exercise. With interpolation I didn't realize backticks were needed as opposed to double
// or single quotes. And then in the last example I kept calling the value "name" instead of the
// property "this.name". These issues really stumped me and I had to look at them with fresh eyes the following day.

// What parts felt most comfortable to you?
// declaring variables, variable reassignment, arithmetic and concatenation, objects, and I really enjoy if/else statements.

// What skills do you need to continue to practice before starting Mod 1?
// Becoming faster/memorization. And not messing up.
