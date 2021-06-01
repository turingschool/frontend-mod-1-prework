// Challenge - See if you can follow the instructions and complete the exercise in under 30 minutes!

// Declare two variables - heroName AND specialAbility - set to strings
var heroName = "Super Man";
var specialAbility = "Super Strength";
// Declare two variables - greeting AND catchphrase
//   greeting should be assigned to a string that uses concatenation to include the heroName
//   catchphrase should be assigned to a string that uses interpolation to include the specialAbility
var greeting = ("Hello, " + heroName + "!");
var catchphrase = (`I have ${specialAbility}! KACHOW!`)

// Declare two variables - power AND energy - set to integers
var power = 10
var energy = 15

// Declare two variables - fullPower AND fullEnergy
//   fullPower should multiply your current power by 500
//   fullEnergy should add 150 to your current energy
var fullPower = (power * 500);
var fullEnergy = (energy + 150);

// Declare two variables - isHuman and identityConcealed - assigned to booleans
var isHuman = false;
var identityConcealed = true;

// Declare two variables - archEnemies AND sidekicks
//   archEnemies should be an array of at least 3 different enemy strings
//   sidekicks should be an array of at least 3 different sidekick strings
var archEnemies = ["Very Bad Guy", "Another Very Bad Guy", "Supreme Bad Guy"];
var sidekicks = ["Super Boy", "Super Mom", "Super Granny"];
// Print the first sidekick to your console
console.log(sidekicks[0]);
// Print the last archEnemy to the console
console.log(archEnemies[2]);
// Write some code to add a new archEnemy to the archEnemies array
archEnemies.push("Super Duper Bad Guy");
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
function assessSituation() {

};

var dangerLevel = 51;
var saveTheDay = "Evil is about to have a bad day!";
var badExcuse = "I just can't come out right now. I stubbed my toe.";

if (dangerLevel < 10) {
  console.log("Meh. Hard pass.");
} else if (dangerLevel > 50){
  console.log(badExcuse);
} else {
  console.log(saveTheDay);
}

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
var address = {
  number: 22,
  street: "Monster Street",
  state: "Monstora",
  zip: 66666
}
var scaryMonster = {
  name: "Oogy Boogy Dude",
  smell: "Raw Onions",
  weight: 66,
  citiesDestroyed: ["Halloween Town", "Christmasville", "Easter Land"],
  luckyNumbers: [44, 55, 66, 77, 88],
  address: address
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

class SuperHero {
  constructor(name, superPower, age, archNemesis, powerLevel, energyLevel) {
    this.name = name;
    this.superpower = superPower;
    this.age = age;
    this.archNemesis = "The Syntax Error";
    this.powerLevel = 100;
    this.energyLevel = 50;
  }
  sayName () {
    return this.name;
  }
  maximizeEnergy() {
    this.energyLevel = 1000;
  }
  gainPower() {
    this.powerLevel = this.powerLevel + powerUp;
  }
};
var powerUp = 43
var coolSuperHero = new SuperHero("Super Dude", "Lazer Eyes", "136");
console.log(coolSuperHero);
var moreCoolSuperHero = new SuperHero("Super DUPER Lady", "Mind Reading", "150");
console.log(moreCoolSuperHero);

moreCoolSuperHero.maximizeEnergy();
moreCoolSuperHero.gainPower(50);
console.log(moreCoolSuperHero);


// Reflection
// What parts were most difficult about this exerise?
// getting all of the syntax correct!
// What parts felt most comfortable to you?
// knowing the general direction to go in and how to find the information that i needed.
// What skills do you need to continue to practice before starting Mod 1?
// I absolutely just need to practice and memorize a lot of the syntax so that it becomes
// second nature to me. This honestly took me forever because I kept doubting myself or
// missed one small detail in the syntax. I plan to spend the month of june practicing What
// we've covered in this coursework so I don't start off behind in Mod 1!
