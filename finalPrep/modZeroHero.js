// Challenge - See if you can follow the instructions and complete the exercise in under 30 minutes!

// Declare two variables - heroName AND specialAbility - set to strings
var heroName = "Modzy"
var specialAbility = "Super Learner"

// Declare two variables - greeting AND catchphrase
//   greeting should be assigned to a string that uses concatenation to include the heroName
//   catchphrase should be assigned to a string that uses interpolation to include the specialAbility
var greeting = ("Hi! My name is " + heroName)
var catchPhrase = (`As a ${specialAbility}, I can learn anything!`)

// Declare two variables - power AND energy - set to integers
var power = 22;
var energy = 33;

// Declare two variables - fullPower AND fullEnergy
//   fullPower should multiply your current power by 500
//   fullEnergy should add 150 to your current energy
var fullPower = (22*500);
var fullEnergy = (33*150);

// Declare two variables - isHuman and identityConcealed - assigned to booleans
var isHuman = true;
var identityConcealed = false;

// Declare two variables - archEnemies AND sidekicks
//   archEnemies should be an array of at least 3 different enemy strings
//   sidekicks should be an array of at least 3 different sidekick strings
var archEnemies = ["blue light", "slow wifi", "carpel tunnel"]
var sideKicks = ["classmates", "headphones", "water bottle"]

// Print the first sidekick to your console
console.log(sideKicks[0])

// Print the last archEnemy to the console
console.log(archEnemies[2])

// Write some code to add a new archEnemy to the archEnemies array
archEnemies[3] = "dead battery"

// Print the archEnemies array to console to ensure you added a new archEnemy
console.log(archEnemies)

// Remove the first sidekick from the sidekicks array
sideKicks.shift()

// Print the sidekicks array to console to ensure you removed the first sidekick
console.log(sideKicks)

// Create a function called assessSituation that takes three arguments - dangerLevel, saveTheDay, badExcuse
//   - dangerLevel should be an integer
//   - saveTheDay should be a string a hero would say once they save the day
//   - badExcuse should be a string a hero would say if they are too afraid of the dangerLevel

// Your function should include an if/else statement that meets the following criteria
//   - Danger levels that are above 50 are too scary for your hero. Any danger level that is above 50 should result in printing the badExcuse to the console
//   - Anything dangerLevel that is between 10 and 50 should result in printing the saveTheDay string to the console
//   - If the dangerLevel is below 10, it means it is not worth your time and should result in printing the string "Meh. Hard pass." to the console.
function assessSituation(dangerLevel, saveTheDay, badExcuse) {
  if(dangerLevel >= 50) {
  console.log(badExcuse);
} else if (dangerLevel >= 10 && dangerLevel < 50) {
  console.log(saveTheDay);
} else {
    console.log("Meh. Hard pass.")
}
}
assessSituation(3, "Another one bites the dust.", "My pinky toe hurts.")
assessSituation(10, "Another one bites the dust.", "My pinky toe hurts.")
assessSituation(80, "Another one bites the dust.", "My pinky toe hurts.")
assessSituation(40, "Another one bites the dust.", "My pinky toe hurts.")

//Test Cases
var announcement = 'Never fear, the Courageous Curly Bracket is here!'
var excuse = 'I think I forgot to lock up my 1992 Toyota Corolla. Be right back.'
// assessSituation(99, announcement, excuse) > Should print - 'I think I forgot to lock up my 1992 Toyota Coralla. Be right back.'
//assessSituation(21, announcement, excuse) > should print - 'Never fear, the Courageous Curly Bracket is here!'
//assessSituation(3, announcement, excuse) > should print - "Meh. Hard pass."
function assessSituation(dangerLevel, announcement, excuse) {
  if(dangerLevel >= 50) {
  console.log(excuse);
} else if (dangerLevel >= 10 && dangerLevel < 50) {
  console.log(announcement);
} else {
    console.log("Meh. Hard pass.")
}
}
assessSituation(99, "Never fear, the Courageous Curly Bracket is here!", "I think I forgot to lock up my 1992 Toyota Corolla. Be right back.")
assessSituation(21,  "Never fear, the Courageous Curly Bracket is here!", "I think I forgot to lock up my 1992 Toyota Corolla. Be right back.")
assessSituation(3, "Never fear, the Courageous Curly Bracket is here!", "I think I forgot to lock up my 1992 Toyota Corolla. Be right back.")

// Declare a new variable - scaryMonster - assigned to an Object with the following key/values
//   - name (string)
//   - smell (string)
//   - weight (integer)
//   - citiesDestroyed (array)
//   - luckyNumbers (array)
//   - address (object with following key/values: number , street , state, zip)
var scaryMonster = {
  name: "Squiggy",
  smell: "steamed broccoli",
  weight: 245,
  citiesDestroyed: ["Denver", "Phoenix", "Seattle", "Austin"],
  luckyNumbers: [3,6,9],
  address: {
    number: 16,
    street: "center st",
    state: "WA",
    zip: 98816,
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
  constructor(name, superpower, age) {
    this.name = name;
    this.superPower = superpower;
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
    this.powerLevel = this.powerLevel + power;
  }
}

// - Create 2 instances of your SuperHero class
var superHeroA = new SuperHero("Zippy", "super fast", 88);
var superHeroB = new SuperHero("Herny", "extremely strong", 6);


console.log(superHeroA);
superHeroB.maximizeEnergy();
console.log(superHeroB);

superHeroA.gainPower(60);
console.log(superHeroA);

// Reflection
// What parts were most difficult about this exerise?
/* Identifying the correct syntax when needing to merge class, function, if's, etc. Definitely need
more practice with those */

// What parts felt most comfortable to you?
/* Declaring variables, functions, and the if's are all setups I can grasp. It's modifying them
gets me stuck. */

// What skills do you need to continue to practice before starting Mod 1?
/* Definitely need to re-read everything, and do more practice runs of all the coding activities.
I have to reference back to examples and run way more nodes than I would like. */
