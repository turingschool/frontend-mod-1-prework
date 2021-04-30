// Challenge - See if you can follow the instructions and complete the exercise in under 30 minutes!

// Declare two variables - heroName AND specialAbility - set to strings
var heroName = "Dr. Lasers";
var specialAbility = "Laser eyes";

// Declare two variables - greeting AND catchphrase
//   greeting should be assigned to a string that uses concatenation to include the heroName
//   catchphrase should be assigned to a string that uses interpolation to include the specialAbility
var greeting = `I am ${heroName} and I've come to save the party!`;
var catchphrase = ("It isn't a party unless you have " + specialAbility + "!");
// Declare two variables - power AND energy - set to integers
var power = 1000;
var energy = 650;

// Declare two variables - fullPower AND fullEnergy
//   fullPower should multiply your current power by 500
//   fullEnergy should add 150 to your current energy
var fullPower = (power * 500);
var fullEnergy = (energy + 150);
// Declare two variables - isHuman and identityConcealed - assigned to booleans
var isHuman = true;
var identityConcealed = false;

// Declare two variables - archEnemies AND sidekicks
//   archEnemies should be an array of at least 3 different enemy strings
//   sidekicks should be an array of at least 3 different sidekick strings
var archEnemies = ["Thunder Buster", "The Whiz", "Captain Dingus"];
var sidekicks = ["Mr. Perfect", "Ricky", "The Dance Commander"];
// Print the first sidekick to your console
console.log(sidekicks[0]);
// Print the last archEnemy to the console
console.log(archEnemies[2]);
// Write some code to add a new archEnemy to the archEnemies array
archEnemies.push("Uncle Bad Guy");
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
console.log(dangerLevel)
}
var dangerLevel = 99;
var saveTheDay = "I'm here to shoot lasers at you.";
var badExcuse = "I have another party to go to, I'm outta here.";

// Your function should include an if/else statement that meets the following criteria
//   - Danger levels that are above 50 are too scary for your hero. Any danger level that is above 50 should result in printing the badExcuse to the console
//   - Anything dangerLevel that is between 10 and 50 should result in printing the saveTheDay string to the console
//   - If the dangerLevel is below 10, it means it is not worth your time and should result in printing the string "Meh. Hard pass." to the console.
  if (dangerLevel > 50) {
  console.log(badExcuse);
} else if (dangerLevel < 10) {
  console.log("Meh. Hard pass.")
} else {
  console.log(saveTheDay);
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
  name: "Dazzler",
  smell: "astringent",
  weight: 230,
  citiesDestroyed: ["Tampa", "DeMoines", "Toledo"],
  luckyNumbers: [3, 33, 333, 3333],
  address: {
    number: 13,
    street: "Bad Boy Lane",
    state: "Colorado",
    zip: 80220
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
  constructor(name, superPower, age){
    this.name = name;
    this.superPower = superPower;
    this.age = age;
    this.archNemesis = "The Syntax Error";
    this.powerLevel = 100;
    this.energyLevel = 50;
  }
    sayName(newName) {
      console.log(newName);
    }
    maximizeEnergy(newEnergy) {
      this.energyLevel = 1000;
    }
    gainPower(newPowerLevel) {
      this.powerLevel = (this.powerLevel + newPowerLevel);
    }
}

// - Create the following class methods
//   - sayName, should print the hero's name to the console
//   - maximizeEnergy, should update the energyLevel to 1000
//   - gainPower, should take an argument of a number and INCREASE the powerLevel by that number

// - Create 2 instances of your SuperHero class
var megaMark = new SuperHero("Mark", "laughter", 35);
megaMark.sayName("Marko!");
megaMark.maximizeEnergy();
megaMark.gainPower(500);
console.log(megaMark);

var amazingAmanda = new SuperHero("Amanda", "the power of kindness", 30);
amazingAmanda.sayName("Amanda!");
amazingAmanda.maximizeEnergy();
amazingAmanda.gainPower(600);
console.log(amazingAmanda);

// Reflection
// What parts were most difficult about this exerise?
//I am still getting used to methods and how to call them correctly. This took the most time. I also found that I have a hard time remembering all the little syntactical details and I still have to look things up.

// What parts felt most comfortable to you?
//Declaring variables seems to be something I grasp and can do fairly quickly.

// What skills do you need to continue to practice before starting Mod 1?
// I definitely need to keep drilling on classes, objects, and methods. Each day I feel a little better about that, but I just need to keep repping and repping.
