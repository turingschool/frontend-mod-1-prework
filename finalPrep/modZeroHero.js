// Challenge - See if you can follow the instructions and complete the exercise in under 30 minutes!

// Declare two variables - heroName AND specialAbility - set to strings

var heroName = 'Thor';
var specialAbility = 'Norse magic';

// Declare two variables - greeting AND catchphrase
//   greeting should be assigned to a string that uses concatenation to include the heroName
//   catchphrase should be assigned to a string that uses interpolation to include the specialAbility

var greeting = 'Hello, I am ' + heroName + '!';
var specialAbility = `I have the special ability of ${specialAbility}!`;

// Declare two variables - power AND energy - set to integers

var power = 1000;
var energy = 350;

// Declare two variables - fullPower AND fullEnergy
//   fullPower should multiply your current power by 500
//   fullEnergy should add 150 to your current energy

var fullPower = power * 500;
var fullEnergy = energy + 150;

// Declare two variables - isHuman and identityConcealed - assigned to booleans

var isHuman = true;
var identityConcealed = true;

// Declare two variables - archEnemies AND sidekicks
//   archEnemies should be an array of at least 3 different enemy strings
//   sidekicks should be an array of at least 3 different sidekick strings

var archEnemies = ['Dr. Doom', 'Bizarro', 'The Riddler'];
var sidekicks = ['Robin', 'Beast Boy', 'Raven'];

// Print the first sidekick to your console
console.log(sidekicks[0]);
// Print the last archEnemy to the console
console.log(archEnemies[archEnemies.length - 1]);
// Write some code to add a new archEnemy to the archEnemies array
archEnemies.push('Green Goblin');

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

function assessSituation(dangerLevel, saveTheDay, badExcuse) {

  if (dangerLevel < 10) {
    console.log('Meh. Hard pass.');
  }
  else if (dangerLevel <= 50) {
    console.log(saveTheDay);
  }
  else {
    console.log(badExcuse);
  }
}

// Your function should include an if/else statement that meets the following criteria
//   - Danger levels that are above 50 are too scary for your hero. Any danger level that is above 50 should result in printing the badExcuse to the console
//   - Anything dangerLevel that is between 10 and 50 should result in printing the saveTheDay string to the console
//   - If the dangerLevel is below 10, it means it is not worth your time and should result in printing the string "Meh. Hard pass." to the console.

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
  name: 'The Blob',
  smell: 'awful',
  weight: 2000,
  citiesDestroyed: ["Houston", "Dallas", "Ft. Worth"],
  luckyNumbers: [4, 8, 15, 16, 23, 42],
  address: {
    number: 980,
    street: '5th Street',
    state: 'Colorado',
    zip: 80831
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

class SuperHero {
  constructor(name, superpower, age) {
    this.name = name;
    this.superpower = superpower;
    this.age = age;
  }
  archNemesis = "The Syntax Error";
  powerLevel = 100;
  energyLevel = 50;
};

// - Create the following class methods
//   - sayName, should print the hero's name to the console
//   - maximizeEnergy, should update the energyLevel to 1000
//   - gainPower, should take an argument of a number and INCREASE the powerLevel by that number

class SuperHero {
  constructor(name, superpower, age) {
    this.name = name;
    this.superpower = superpower;
    this.age = age;
  }
  archNemesis = "The Syntax Error";
  powerLevel = 100;
  energyLevel = 50;

  sayname() {
    console.log(this.name);
  }

  maximizeEnergy() {
    this.energyLevel = 1000;
  }

  gainPower(number) {
    this.powerLevel += number;
  }
};

// - Create 2 instances of your SuperHero class

var theInterpolator = new SuperHero('The Concatenator', 'To merge strings!', 40);
var theConcatenator = new SuperHero('The Interpolator', 'To insert something into somewhere else!', 35);

// Reflection
// What parts were most difficult about this exerise?

// The functions - after having gone through section 4, I had the habit of using `this` to map the arguments to the parameters.
// The syntax for classes and functions within classes gave me a bit of trouble as well. In the last exercise,
// the gainPower method wasn't working correctly - this was because I had the syntax wrong. I was writing
// SuperHero.powerLevel += number, instead of using this.powerLevel. Some trial and error yielded the correct results.

// What parts felt most comfortable to you?

// Assigning and declaring variables, using data types within data types (objects in objects, arrays in objects),
// Mapping arguments to parameters.

// What skills do you need to continue to practice before starting Mod 1?
// Becoming more familiar with syntax - as mentioned with the last exercise, the `this` keyword is one I need to study up on and practice much more.
