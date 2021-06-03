// Challenge - See if you can follow the instructions and complete the exercise in under 30 minutes!

// Declare two variables - heroName AND specialAbility - set to strings
var heroName = 'Black Panther';
var specialAbility = 'superhuman senses';
// Declare two variables - greeting AND catchphrase
var greeting = 'Hello! I am ' + heroName + '!';
var catchphrase = `It is my duty to keep you safe with my ${specialAbility}.`;
//   greeting should be assigned to a string that uses concatenation to include the heroName
//   catchphrase should be assigned to a string that uses interpolation to include the specialAbility

// Declare two variables - power AND energy - set to integers
var power = 100;
var energy = 50;
// Declare two variables - fullPower AND fullEnergy
var fullPower = power * 500;
//   fullPower should multiply your current power by 500
var fullEnergy = energy + 150;
//   fullEnergy should add 150 to your current energy

// Declare two variables - isHuman and identityConcealed - assigned to booleans
var isHuman = true;
var identityConcealed = false;

// Declare two variables - archEnemies AND sidekicks
var archEnemies = [ "Erik Killmonger", "Man-Ape", "White Wolf" ];
var sidekicks = [ "Okoye", "Nakia" ];

//   archEnemies should be an array of at least 3 different enemy strings
//   sidekicks should be an array of at least 3 different sidekick strings

// Print the first sidekick to your console
console.log(sidekicks[0]);
// Print the last archEnemy to the console
console.log(archEnemies[2]);

// Write some code to add a new archEnemy to the archEnemies array
archEnemies.push("Ulysses Klaw");
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
  if (dangerLevel > 50){
    console.log(badExcuse);
  } else if (dangerLevel < 10) {
    console.log("Meh. Hard pass.");
  } else {
    console.log(saveTheDay);
  }
}

assessSituation(51, "Wakanda forever!", "I will not abandon someone to die, BUT this is too scary! Byeee!")
// Your function should include an if/else statement that meets the following criteria
//   - Danger levels that are above 50 are too scary for your hero. Any danger level that is above 50 should result in printing the badExcuse to the console
//   - Anything dangerLevel that is between 10 and 50 should result in printing the saveTheDay string to the console
//   - If the dangerLevel is below 10, it means it is not worth your time and should result in printing the string "Meh. Hard pass." to the console.

//Test Cases
var announcement = 'Never fear, the Courageous Curly Bracket is here!';
var excuse = 'I think I forgot to lock up my 1992 Toyota Coralla. Be right back.';

// assessSituation(99, announcement, excuse) > Should print - 'I think I forgot to lock up my 1992 Toyota Coralla. Be right back.'
assessSituation(99, announcement, excuse)
//assessSituation(21, announcement, excuse) > should print - 'Never fear, the Courageous Curly Bracket is here!'
assessSituation(21, announcement, excuse)
//assessSituation(3, announcement, excuse) > should print - "Meh. Hard pass."
assessSituation(3, announcement, excuse)

// Declare a new variable - scaryMonster - assigned to an Object with the following key/values
//   - name (string)
//   - smell (string)
//   - weight (integer)
//   - citiesDestroyed (array)
//   - luckyNumbers (array)
//   - address (object with following key/values: number , street , state, zip)
var scaryMonster = {
  name: "Cookie Monster",
  smell: "chocolate chips",
  weightLbs: 200,
  citiesDestroyed: ["Ginger Cookie City", "Crackers City", "Whole Wheat Cookie City" ],
  luckyNumbers: [12, 22, 32, 42],
  address: {
    number: 123,
    street: "Crunchy Road",
    state: "CO",
    zip: 80000
  }
}

class SuperHero {
  constructor(name, superpower, age){
    this.name = name;
    this.superpower = superpower;
    this.age = age;
    this.archNemesis = "The Syntax Error";
    this.powerLevel = 100;
    this.energyLevel = 50;
  }
  sayName(){
    console.log(this.name);
  }
  maximizeEnergy(){
    this.energyLevel = this.energyLevel*20;
    console.log(this.energyLevel);
  }
  gainPower(morePower){
    this.powerLevel = this.powerLevel + morePower;
    console.log(this.powerLevel);
  }
}

var superHero = new SuperHero("Autocorrect", "tells the future", 10);
console.log(superHero);
superHero.sayName();
superHero.maximizeEnergy();
superHero.gainPower(100);
console.log(superHero);

var superHero2 = new SuperHero("Red Squiggly Line", "spelling mistake recognition", 100);
console.log(superHero2);
superHero2.sayName();
superHero2.maximizeEnergy();
superHero2.gainPower(30);
console.log(superHero2);

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


// Reflection
// What parts were most difficult about this exerise?
// The most difficult parts for me was to remember the syntax for each concept and the differences between each.

// What parts felt most comfortable to you?
// Declaring variables was the most comfortable for me, but also looking up things as I went.

// What skills do you need to continue to practice before starting Mod 1?
// I think I need to review functions, methods, and class concepts to solidify my syntax and remember what each requires.
