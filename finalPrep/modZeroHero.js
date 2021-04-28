// Challenge - See if you can follow the instructions and complete the exercise in under 30 minutes!

// Declare two variables - heroName AND specialAbility - set to strings

var heroName = "Batman";
var specialAbility = "drive the batmobile";


// Declare two variables - greeting AND catchphrase
//   greeting should be assigned to a string that uses concatenation to include the heroName
//   catchphrase should be assigned to a string that uses interpolation to include the specialAbility
var greeting = "Hello" + heroName + " !"
var catchPhrase = `Look at me!  I can ${specialAbility} and crush my enemy!`;

// Declare two variables - power AND energy - set to integers

var power = 200;
var energy = 7;


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
var archEnemies = ["Joker", "Riddler", "Scarecrow"];
var sidekicks = ["Robin", "Bruce Wayne", "Raquel"];


// Print the first sidekick to your console
console.log(sidekicks[0]);
// Print the last archEnemy to the console
console.log(archEnemies[2]);
// Write some code to add a new archEnemy to the archEnemies array
archEnemies.push("Zoey");
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
var dangerLevel = 180
var saveTheDay = "I'm Batman and I'm going to save the day!"
var badExcuse = "I can't help.  My batmobile is out of gas."

function assessSituation(dangerLevel, saveTheDay, badExcuse) {
  if (dangerLevel > 50) {
    console.log(badExcuse);
  } else if (dangerLevel < 10) {
    console.log("Meh. Hard pass.");
  } else {
    console.log(saveTheDay);
  }
}

assessSituation(5, saveTheDay, badExcuse)
assessSituation(25, saveTheDay,  badExcuse)
assessSituation(100, saveTheDay, badExcuse)


// Your function should include an if/else statement that meets the following criteria
//   - Danger levels that are above 50 are too scary for your hero. Any danger level that is above 50 should result in printing the badExcuse to the console
//   - Anything dangerLevel that is between 10 and 50 should result in printing the saveTheDay string to the console
//   - If the dangerLevel is below 10, it means it is not worth your time and should result in printing the string "Meh. Hard pass." to the console.

//Test Cases
var announcement = 'Never fear, the Courageous Curly Bracket is here!';
var excuse = 'I think I forgot to lock up my 1992 Toyota Coralla. Be right back.';

function assessSituation(dangerLevel, announcement, excuse) {
  if (dangerLevel > 50) {
    console.log(excuse);
  } else if (dangerLevel < 10) {
    console.log("Meh. Hard pass.");
  } else {
    console.log(announcement);
  }
}

assessSituation(99, announcement, excuse)
assessSituation(21, announcement, excuse)
/assessSituation(3, announcement, excuse)

// Declare a new variable - scaryMonster - assigned to an Object with the following key/values
//   - name (string)
//   - smell (string)
//   - weight (integer)
//   - citiesDestroyed (array)
//   - luckyNumbers (array)
//   - address (object with following key/values: number , street , state, zip)

var scaryMonster = {
  name: "Igor",
  smell: "throw up",
  weight: 300,
  citiesDestroyed: ["Denver", "Austin", "LA", "Topeka"],
  luckyNumbers: [5, 8, 13, 40],
  address: {
    number: 100,
    street: "Elm",
    state: "Oklahoma",
    zip: 90210
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
    this.energyLevel = 1000;
  }
  gainPower(number) {
    this.powerLevel = this.powerLevel + number;
  }
}

// - Create 2 instances of your SuperHero class

var superHero1 = new SuperHero("Lucky", "brainiac", 12)
superHero1.sayName();
superHero1.maximizeEnergy();
superHero1.gainPower(2);
console.log(superHero1);

var superHero2 = new SuperHero("Izzy", "barks loud", 5)
superHero2.sayName();
superHero2.maximizeEnergy();
superHero2.gainPower(500000000000);
console.log(superHero2);

// Reflection
// What parts were most difficult about this exerise?
//
// There were a couple of times where I didn't fully understand the question (ex: Test Cases) so I had to think
// about how I wanted to attack the problem.  I struggled with self-doubt during this exercise.  Instead of following my intuition, I made sure I looked everything up before I did anything complex in the
// exercise.  Everything after line 60 was a bit of a struggle for me as well.  I am not sure why, but section4 is just not clicking for me so I still need to read
// my notes in order to type out the code.

// What parts felt most comfortable to you?
//
// I am comfortable with the different types of variables and naming variables.  Objects are my biggest hang up.

// What skills do you need to continue to practice before starting Mod 1?

// Honestly I need to continue to practice everything.  I have zero experience with coding so practice is going to be my best friend.  My goal is to run through
// this activity daily until it is second nature to me.
