// Challenge - See if you can follow the instructions and complete the exercise in under 30 minutes!

// Declare two variables - heroName AND specialAbility - set to strings
var heroName = "Sparx";
var specialAbility = "create fire"

// Declare two variables - greeting AND catchphrase
//   greeting should be assigned to a string that uses concatenation to include the heroName
//   catchphrase should be assigned to a string that uses interpolation to include the specialAbility
var greeting = "Hello! I am "+heroName+"";
var catchphrase = "In a pinch? Pitch a tent. I'll ${specialAbility} to keep you dryer. ";

// Declare two variables - power AND energy - set to integers
var power = 15 ;
var energy = 90 ;

// Declare two variables - fullPower AND fullEnergy
//   fullPower should multiply your current power by 500
//   fullEnergy should add 150 to your current energy
var fullPower = power * 500 ;
var fullEnergy = energy + 150 ;

// Declare two variables - isHuman and identityConcealed - assigned to booleans
var isHuman = false ;
var identityConcealed = true ;

// Declare two variables - archEnemies AND sidekicks
//   archEnemies should be an array of at least 3 different enemy strings
//   sidekicks should be an array of at least 3 different sidekick strings
var archEnemies = ["Mr. Freeze", "Water Boy", "Rain Man"];
var sidekicks = ["Ignite", "Match Man", "Professor Tinder"];

// Print the first sidekick to your console
console.log(sidekicks[0]);

// Print the last archEnemy to the console
console.log(archEnemies[2]);

// Write some code to add a new archEnemy to the archEnemies array
archEnemies.push ("Nemo", "Ursula");

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
var badExcuses = "Is that the time? I really should be getting to bed...";
var saveTheDay = "It's a beautiful day for saving the world!"

function assessSituation(dangerLevel, saveTheDay, badExcuses){
  if (dangerLevel > 50) {
    console.log(badExcuses);
  } else if (dangerLevel < 10){
    console.log("Meh. Hard pass") ;
  } else {
    console.log(saveTheDay);
  }
}
assessSituation(5, saveTheDay, badExcuses);


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
  name: "Smaug",
  smell: "sulfur",
  weight: 785,
  citiesDestroyed: ["Berlin", "Paris", "London", "New York"],
  luckyNumbers: [7, 13, 29, 35],
  address: {
    number: 333,
    street: "Rocky Vista Lane",
    state: "Nevada",
    zip: 63663,
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
  constructor(name, superpower, age) {
    this.name = name;
    this.power = superpower;
    this.age = age;
    this.archNemesis = "The Syntax Error";
    this.powerLevel = 100;
    this.energyLevel = 50;
  }
  sayName(name) {
    console.log(name);
  }
  maximizeEnergy() {
    this.energyLevel = 1000;
  }
  gainPower(num) {
    this.powerLevel = 100 * num;
  }
}

// - Create the following class methods
//   - sayName, should print the hero's name to the console
//   - maximizeEnergy, should update the energyLevel to 1000
//   - gainPower, should take an argument of a number and INCREASE the powerLevel by that number

// - Create 2 instances of your SuperHero class
var heroOne = new SuperHero ("Elasti Girl", "stretching", 35);
heroOne.maximizeEnergy();
console.log(heroOne);

var heroTwo = new SuperHero ("Mr. Incredible", "super strength", 37);
heroTwo.gainPower(3);
console.log(heroTwo);


// Reflection
// What parts were most difficult about this exerise?
// I got stuck on functions. I had not reviewed them and we didn't go as in depth during
// the Section2 work as we did with this exercise. It really only took a little Googling
// and looking back through my notes to figure it out though.

// What parts felt most comfortable to you?
// Creating variables and objects felt comfortable, but I think that is likely because
// it is the most recent topic I learned. I'm sure if I gave it a week and came back it
// would be a litte more confusing.

// What skills do you need to continue to practice before starting Mod 1?
// Obviously I will need to review all of my skills over the next month, but I definitely
// need to spend some time on functions and methods. I need to gain a better understanding
// of the different syntax and how utilizing different methods can give different results. 
