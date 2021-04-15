// Challenge - See if you can follow the instructions and complete the exercise in under 30 minutes!

// Declare two variables - heroName AND specialAbility - set to strings

var heroName = "Super Janika"
var specialAbility = "telekinesis"

// Declare two variables - greeting AND catchphrase
//   greeting should be assigned to a string that uses concatenation to include the heroName
//   catchphrase should be assigned to a string that uses interpolation to include the specialAbility

var greeting = ("What up playas it's " + heroName + " !");
console.log(greeting);

var catchphrase = (`Slamma blamma ding dong! Better watch out or I'll use ${specialAbility} on you!`);
console.log(catchphrase);

// Declare two variables - power AND energy - set to integers

var power = 3000
var energy = 51

// Declare two variables - fullPower AND fullEnergy
//   fullPower should multiply your current power by 500
//   fullEnergy should add 150 to your current energy

var fullPower = power * 500
console.log(fullPower);

var fullEnergy = energy + 150
console.log(fullEnergy);

// Declare two variables - isHuman and identityConcealed - assigned to booleans

var isHuman = false;
var identityConcealed = true;

// Declare two variables - archEnemies AND sidekicks
//   archEnemies should be an array of at least 3 different enemy strings
//   sidekicks should be an array of at least 3 different sidekick strings

var archEnemies = ["The Plastics", "Trump", "Ronald McDonald"];
var sideKicks = ["Opposums", "All the Dogs", "Kourtney Kardashian"];

// Print the first sidekick to your console

console.log(sideKicks[0]);

// Print the last archEnemy to the console

console.log(archEnemies[2]);

// Write some code to add a new archEnemy to the archEnemies array

archEnemies.push("The Blob");

// Print the archEnemies array to console to ensure you added a new archEnemy

console.log(archEnemies);

// Remove the first sidekick from the sidekicks array

sideKicks.shift();

// Print the sidekicks array to console to ensure you added a new sidekick

console.log(sideKicks);

// Create a function called assessSituation that takes three arguments - dangerLevel, saveTheDay, badExcuse
//   - dangerLevel should be an integer
//   - saveTheDay should be a string a hero would say once they save the day
//   - badExcuse should be a string a hero would say if they are too afraid of the dangerLevel

// Your function should include an if/else statement that meets the following criteria
//   - Danger levels that are above 50 are too scary for your hero. Any danger level that is above 50 should result in printing the badExcuse to the console
//   - Anything dangerLevel that is between 10 and 50 should result in printing the saveTheDay string to the console
//   - If the dangerLevel is below 10, it means it is not worth your time and should result in printing the string "Meh. Hard pass." to the console.



var dangerLevel = 10;
var saveTheDay = "Get ready to lose sucka!";
var badExcuse = "IDK, maybe I should GTFO!!!";

if (dangerLevel < 10) {
  console.log("Meh. Hard pass.");
} else if (dangerLevel > 50) {
  console.log(badExcuse);
} else {
  console.log(saveTheDay);
}

function assessSituation(dangerLevel, saveTheDay, badExcuse){
  console.log()
}


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
  name: "Kevin",
  smell: "diry socks",
  weight: 500,
  citiesDestroyed: ["Denver", "Las Vegas", "Sand Diego"],
  luckyNumbers: [21, 3, 7],
  address: {number: "7565", street: "Frontier Ranch Ln", state: "NV", zip: "89123"}
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
    this.archNemesis = "The Syntax Error";
    this.powerLevel = 50;
    this.energyLevel = 3;
  }

  sayName() {
    console.log(this.name);
  }

  gainPower(powerGains) {
  this.powerLevel = 50 + powerGains;
  }

  maximizeEnergy() {
    this.energyLevel = 1000;
  }
}

var superJanika = new SuperHero("Super Janika", "mind control", 31);
superJanika.gainPower(75);
superJanika.maximizeEnergy();
console.log(superJanika);

var wonderJanika = new SuperHero("Wonder Janika", "teleportation", 29);
wonderJanika.gainPower(1);
wonderJanika.maximizeEnergy();
console.log(wonderJanika);


// - Create the following class methods
//   - sayName, should print the hero's name to the console
//   - maximizeEnergy, should update the energyLevel to 1000
//   - gainPower, should take an argument of a number and INCREASE the powerLevel by that number

// - Create 2 instances of your SuperHero class



// Reflection
// What parts were most difficult about this exerise?
//For me the most difficult parts of the exercise were recalling what I previously learned and putting it all together.

// What parts felt most comfortable to you?
//Declaring variables was comfortable for me (first half of the exercise).

// What skills do you need to continue to practice before starting Mod 1?
//I need to practice coding every day so I don't forget what I learned. I felt that taking a day off was detrimental to my learning because I would forget everything that I learned in the previous lesson.
