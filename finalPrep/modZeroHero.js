// Challenge - See if you can follow the instructions and complete the exercise in under 30 minutes!

// Declare two variables - heroName AND specialAbility - set to strings √
var heroName = "Batman";
var specialAbility = "Cunning";

// Declare two variables - greeting AND catchphrase √
//   greeting should be assigned to a string that uses concatenation to include the heroName √
//   catchphrase should be assigned to a string that uses interpolation to include the specialAbility √
var greeting = "Hello "+ heroName;
var catchphrase =`${specialAbility} is my weapon`;

// Declare two variables - power AND energy - set to integers √
var power = 77;
var energy = 89;

// Declare two variables - fullPower AND fullEnergy √
//   fullPower should multiply your current power by 500 √
//   fullEnergy should add 150 to your current energy √
var fullPower = 500 * power;
var fullEnergy = 150 + energy;

// Declare two variables - isHuman and identityConcealed - assigned to booleans √
var isHuman = true;
var identityConcealed = false;

// Declare two variables - archEnemies AND sidekicks √
//   archEnemies should be an array of at least 3 different enemy strings √
//   sidekicks should be an array of at least 3 different sidekick strings √
var archEnemies = ["Jocker", "Two-Face", "Riddler"];
var sidekicks =["Robin", "Catwoman", "Alfred"] ;

// Print the first sidekick to your console √
console.log(sidekicks[0]);

// Print the last archEnemy to the console √
console.log(archEnemies[2]);

// Write some code to add a new archEnemy to the archEnemies array
archEnemies.push("Penguin");

// Print the archEnemies array to console to ensure you added a new archEnemy
console.log(archEnemies);
// Remove the first sidekick from the sidekicks array
sidekicks.shift();
// Print the sidekicks array to console to ensure you added a new sidekick
console.log(sidekicks);

// Create a function called assessSituation that takes three arguments - dangerLevel, saveTheDay, badExcuse √
//   - dangerLevel should be an integer √
//   - saveTheDay should be a string a hero would say once they save the day √
//   - badExcuse should be a string a hero would say if they are too afraid of the dangerLevel √
function assessSituation(dangerLevel, saveTheDay, badExcuse){
  console.log(dangerLevel,saveTheDay,badExcuse)
}
assessSituation(7, "You are safe now!", "I dont know if is we can do this");

// Your function should include an if/else statement that meets the following criteria
//   - Danger levels that are above 50 are too scary for your hero. Any danger level that is above 50 should result in printing the badExcuse to the console
//   - Anything dangerLevel that is between 10 and 50 should result in printing the saveTheDay string to the console
//   - If the dangerLevel is below 10, it means it is not worth your time and should result in printing the string "Meh. Hard pass." to the console.
function assessSituation(dangerLevel, saveTheDay, badExcuse){
  if (dangerLevel > 50){
    console.log(badExcuse);
  } else if (dangerLevel >= 10){
    console.log(saveTheDay);
  } else {
    console.log("Meh. Hard pass.");
  }
}
assessSituation(7 ,"You are safe now!", "I dont know if is we can do it");

//Test Cases
// assessSituation(99, announcement, excuse) > Should print - 'I think I forgot to lock up my 1992 Toyota Coralla. Be right back.'
//assessSituation(21, announcement, excuse) > should print - 'Never fear, the Courageous Curly Bracket is here!'
//assessSituation(3, announcement, excuse) > should print - "Meh. Hard pass."
function assessSituation(level, announcement, excuse){
  if (level > 50){
    console.log(announcement);
  } else if (level >= 10){
    console.log(excuse);
  } else {
    console.log("Meh. Hard pass.");
  }
}
assessSituation(17 ,"I think I forgot to lock up my 1992 Toyota Coralla. Be right back.", "Never fear, the Courageous Curly Bracket is here!");

// Declare a new variable - scaryMonster - assigned to an Object with the following key/values
//   - name (string)
//   - smell (string)
//   - weight (integer)
//   - citiesDestroyed (array)
//   - luckyNumbers (array)
//   - address (object with following key/values: number , street , state, zip)
var scaryMonster = {
  name: "Godzilla",
  smell: "Stinky",
  weight: 500,
  citiesDestroyed: ["Cancun", "Miami"],
  luckyNumbers: [7, 21, 3],
  address: {
    number: 12,
    street: "16th Street",
    state: "Kansas",
    zip: 80203
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
  constructor(name, superpower, age){
    this.archEnemies = "The Syntax Error";
    this.powerLevel = 100;
    this.energyLevel = 50;
    this.name = name;
    this.superpower = superpower ;
    this.age = age;
  }
}
var batman = new SuperHero("Bruno", "Martial Arts", 45);

// - Create the following class methods
//   - sayName, should print the hero's name to the console
//   - maximizeEnergy, should update the energyLevel to 1000
//   - gainPower, should take an argument of a number and INCREASE the powerLevel by that number
class SuperHero {
  constructor(name, superpower, age){
    this.archEnemies = "The Syntax Error";
    this.powerLevel = 100;
    this.energyLevel = 50;
    this.name = name;
    this.superpower = superpower ;
    this.age = age;
  }
    sayName() {
    console.log(this.name);
  } maximizeEnergy() {
    this.energyLevel = 1000;
  } gainPower() {
    this.powerLevel += 115;
  }
}

// - Create 2 instances of your SuperHero class
var superman = new SuperHero("Superman", "Fly", 35);
// superman.sayName();
// superman.maximizeEnergy();
// superman.gainPower();
console.log(superman);

var spiderman = new SuperHero ("Spiderman", "Wallcrawling", 21, 50);
// spiderman.sayName();
// spiderman.maximizeEnergy();
// spiderman.gainPower();
console.log(spiderman);

// Reflection
// What parts were most difficult about this exerise?
//Functions, I got complete lost in it, I dont Know how to connect my first parameter into the if/else conditions. And this exercise
//made me ask me a lot of questiions for what is really used a function?

// What parts felt most comfortable to you?
//I like the class exercises but I still have a lot of questions and doubts about it, and also made me
//ask me the difference between funtion and how to use it.

// What skills do you need to continue to practice before starting Mod 1?
//Everything, specially how to make a relation one and another paying atention to each part of my code. I realized that if i practice to comment
// and explain every part from my code, it will help me a lot !
//Also I have to learn how to work under pressuare !
