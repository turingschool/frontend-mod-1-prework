// Challenge - See if you can follow the instructions and complete the exercise in under 30 minutes!

// Declare two variables - heroName AND specialAbility - set to strings
var heroName = "Spiderman";
var specialAbility = "Super human strenght";

// Declare two variables - greeting AND catchphrase
//   greeting should be assigned to a string that uses concatenation to include the heroName
//   catchphrase should be assigned to a string that uses interpolation to include the specialAbility
var greeting = "Hello I'm " + heroName + "!";
var catchphrase = "Im here to save the world with my " + specialAbility + "!";


// Declare two variables - power AND energy - set to integers
var power = 80;
var energy = 90;
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
var archEnemies = ["Mysterio", "Venom", "Sandman"];
var sidekicks = ["Ned Leeds", "Mary Jane", "Deadpool"];
// Print the first sidekick to your console
console.log(sidekick[0]);
// Print the last archEnemy to the console
console.log(archEnemies[2]);
// Write some code to add a new archEnemy to the archEnemies array
archEnemies.push("Carnage");
// Print the archEnemies array to console to ensure you added a new archEnemy
console.log(archEnemies);
// Remove the first sidekick from the sidekicks array
sidekick.shift();
// Print the sidekicks array to console to ensure you added a new sidekick
console.log(sidekick);
// Create a function called assessSituation that takes three arguments - dangerLevel, saveTheDay, badExcuse
//   - dangerLevel should be an integer
//   - saveTheDay should be a string a hero would say once they save the day
//   - badExcuse should be a string a hero would say if they are too afraid of the dangerLevel
function assessSituation = (dangerLevel,saveTheDay,badExcuse)
// Your function should include an if/else statement that meets the following criteria
//   - Danger levels that are above 50 are too scary for your hero. Any danger level that is above 50 should result in printing the badExcuse to the console
//   - Anything dangerLevel that is between 10 and 50 should result in printing the saveTheDay string to the console
//   - If the dangerLevel is below 10, it means it is not worth your time and should result in printing the string "Meh. Hard pass." to the console.
function assessSituation(dangerLevel, saveTheDay, badExcuse) {
  if (dangerLevel > 50) {
    console.log(excuse);
  } else if (dangerLevel >= 10 && dangerLevel <= 50) {
    console.log(announcement);
  } else {
    console.log("Meh. Hard pass.");
  }
}
//Test Cases
var announcement = 'Never fear ' + heroName + ' is here!';
var excuse = 'I think I forgot to lock up my 1992 Toyota Coralla. Be right back.';
 assessSituation(99, announcement, excuse) > Should print - 'I think I forgot to lock up my 1992 Toyota Coralla. Be right back.'
assessSituation(21, announcement, excuse) > should print - 'Never fear, ' + heroName + ' is here!'
assessSituation(3, announcement, excuse) > should print - "Meh. Hard pass."

// Declare a new variable - scaryMonster - assigned to an Object with the following key/values
//   - name (string)
//   - smell (string)
//   - weight (integer)
//   - citiesDestroyed (array)
//   - luckyNumbers (array)
//   - address (object with following key/values: number , street , state, zip)

var scaryMonster = {
  name: "Jiggernaut",
  smell: "Sweat",
  weight: 300 ,
  citiesDestroyed: ["New York", "Colorado", "Washington"],
  luckyNumbers: [3,6,7],
  address : {
    number: 1200,
    street: "Groove st",
    state: "Brooklyn",
    zip: 80382
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

class SuperHero {
  name = "Fly Man";
   superpower = "Flying";
   age = 22;
  archNemesis = "The Syntax Error";
  powerLevel = 100;
   energyLevel = 50;
};

// - Create the following class methods
//   - sayName, should print the hero's name to the console
//   - maximizeEnergy, should update the energyLevel to 1000
//   - gainPower, should take an argument of a number and INCREASE the powerLevel by that number

// - Create 2 instances of your SuperHero class
class SuperHero {
  constructor(name,power,age){
  this.name = name;
   this.superpower = power;
   this.age = age;
  this.archNemesis = "The Syntax Error";
  this.powerLevel = 100;
   this.energyLevel = 50;
  }

sayName(){
  console.log(this.name);
  }

maximizeEnergy(){
  this.energyLevel = 1000;
  }

gainPower(){
  this.powerLevel += number;
  }
}

var superman = new SuperHero ("Superman", "Super Human", 26);
console.log(superman);

var deadpool = new SuperHero("Deadpool", "immortality", 28);
console.log(deadpool);

superman.maximizeEnergy();
console.log(superman);

deadpool.gainPower(100);
console.log(deadpool);

superman.sayName();
deadpool.sayName();

// Reflection
// What parts were most difficult about this exerise?
/* creating instances and how to create a output and as well using constructor with the classes im not really
sure if I did it right but I gave it a shot*/
// What parts felt most comfortable to you?
/* decalring variables setting them to strings,booleans,and numbers.*/
// What skills do you need to continue to practice before starting Mod 1?
/* Mostly I need to work on everything since I dont have much pratice in all of this but I Did
notice that I need to pratice on hwo functions and classes and objects work better using there
methods and how they would transfer and as well how to properly call them.
 */
