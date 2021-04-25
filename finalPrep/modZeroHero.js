// Challenge - See if you can follow the instructions and complete the exercise in under 30 minutes!

// Declare two variables - heroName AND specialAbility - set to strings
var heroName = "Captain Cat";
var specialAbility = "Tuna Blast";

// Declare two variables - greeting AND catchphrase
//   greeting should be assigned to a string that uses concatenation to include the heroName
//   catchphrase should be assigned to a string that uses interpolation to include the specialAbility
var greeting = "Oh Meow!  It's " + heroName;
var catchphrase = `Get ${specialAbility}ed!`;

// Declare two variables - power AND energy - set to integers
var power = 9000;
var energy = 11;

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
var archEnemies = ['Bad Guy' , 'Evil Guy' , 'Conniving Guy'];
var sidekicks = ['Mini Sidekick' , 'Pet Sidekick' , 'Clone Sidekick'];

// Print the first sidekick to your console
console.log(sidekicks[0]);

// Print the last archEnemy to the console
console.log(archEnemies[2]);

// Write some code to add a new archEnemy to the archEnemies array
archEnemies.push('Not Good Guy');

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

/*
var dangerLevel = 25;
var saveTheDay = "Here I come, to save the day!";
var badExcuse = "Sorry, I'm too hungry to help...";
*/

function assessSituation(dangerLevel, saveTheDay, badExcuse) {
  if (dangerLevel > 50) {
    console.log(badExcuse);
  } else if (dangerLevel >= 10 && dangerLevel <= 50) {
    console.log(saveTheDay);
  } else if (dangerLevel < 10) {
    console.log("Meh. Hard pass.");
  };
};

//Test Cases
var announcement = 'Never fear, the Courageous Curly Bracket is here!';
var excuse = 'I think I forgot to lock up my 1992 Toyota Coralla. Be right back.';
assessSituation(99, announcement, excuse); // Should print - 'I think I forgot to lock up my 1992 Toyota Coralla. Be right back.'
assessSituation(21, announcement, excuse); // should print - 'Never fear, the Courageous Curly Bracket is here!'
assessSituation(3, announcement, excuse); // should print - "Meh. Hard pass."

// Declare a new variable - scaryMonster - assigned to an Object with the following key/values
//   - name (string)
//   - smell (string)
//   - weight (integer)
//   - citiesDestroyed (array)
//   - luckyNumbers (array)
//   - address (object with following key/values: number , street , state, zip)

class MonsterAddress  {
  constructor () {
    this.number = 2630;
    this.street = "Curtis St.";
    this.state = "CO";
    this.zip = 80205;
  };
};

class Monster {
  constructor () {
    this.name = "Booman";
    this.smell = "feet";
    this.weight = 1000;
    this.citiesDestroyed = ['London' , 'Tokoyo' , 'San Francisco'];
    this.luckyNumbers = [13 , 27 , 42];
    this.address = new MonsterAddress ();
  };
};

var scaryMonster = new Monster ();

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
  constructor (name, superpower, age) {
    this.name = name;
    this.superpower = superpower;
    this.age = age;
    this.archNemesis =  "The Syntax Error";
    this.powerLevel = 100;
    this.energyLevel = 50;
  };
  sayName (name) {
    console.log(this.name);
  };
  maximizeEnergy (energyLevel) {
    energyLevel = 1000;
    // Test log ensuring 'energyLevel' was reassigned to 1000
    //console.log(energyLevel);
  };
  gainPower (powerIncrease) {
    this.newPowerLevel = this.powerLevel + powerIncrease;
    // Test log ensuring 'newPowerLevel' increased by 'powerIncrease'
    //console.log(this.newPowerLevel);
  };
};

// - Create 2 instances of your SuperHero class

var newSuperHero1 = new SuperHero ('Squirrel Man' , 'unbearable cuteness', 3);
// Test cases for the methods for newSuperHero1 instance
//newSuperHero1.sayName();
//newSuperHero1.maximizeEnergy();
//newSuperHero1.gainPower(100);

var newSuperHero2 = new SuperHero ('Radical Rabbitman' , 'carrot chuck', 7);
// Test cases for the methods for newSuperHero2 instance
//newSuperHero2.sayName();
//newSuperHero2.maximizeEnergy();
//newSuperHero2.gainPower(500);


// Reflection
// What parts were most difficult about this exercise?
/* I definitely struggled more with the classes and methods, but I was still able
to get everything working in a little over a half hour. I did accidentially start
by using the object syntax when defining the classes.  Passing dynamic variables to
class methods is still tricky, and I am still working through the proper syntax around
use of 'this' with dot notation.*/


// What parts felt most comfortable to you?
/* I feel very comfortable with defining variables and performing mathematical
operations with them. I feel like I have a very good understanding of logical operators
and conditional statements. I feel like defining the constructor and writing the
individual methods comes easily so far.*/

// What skills do you need to continue to practice before starting Mod 1?
/* I am going to practice writing functions, classes, and methods.  I will practice
creating instances of those classes that pass in dynamic variables and use dot notation. */
