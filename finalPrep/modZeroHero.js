// Challenge - See if you can follow the instructions and complete the exercise in under 30 minutes!

// Declare two variables - heroName AND specialAbility - set to strings

var heroName = "AT Legs";
var specialAbility = "crushing big miles!";

// Declare two variables - greeting AND catchphrase
//   greeting should be assigned to a string that uses concatenation to include the heroName
//   catchphrase should be assigned to a string that uses interpolation to include the specialAbility

var greeting = "It's kind of a really nice day" + " says " + heroName;
var catchPhase = `Living the dream ${specialAbility}`;

console.log(greeting);
console.log(catchPhase);

// Declare two variables - power AND energy - set to integers

var power = 99
var energy = 1000

// Declare two variables - fullPower AND fullEnergy
//   fullPower should multiply your current power by 500
//   fullEnergy should add 150 to your current energy

var fullPower = (power * 500);
var fullEngery = (energy + 150);

// Declare two variables - isHuman and identityConcealed - assigned to booleans

var isHuman = true;
var identityConcealed = true;

// Declare two variables - archEnemies AND sidekicks
//   archEnemies should be an array of at least 3 different enemy strings
//   sidekicks should be an array of at least 3 different sidekick strings

var archEnemies = ["Felix", "Other Legs", "Play By Play" ]
var sidekicks = ["Daze", "Eleven", "Postcard"]

// Print the first sidekick to your console

console.log(sidekicks[0]);

// Print the last archEnemy to the console

console.log(archEnemies[2]);
//I think there's a way to do this differently...hmmm remember to look into this

// Write some code to add a new archEnemy to the archEnemies array

archEnemies.push("Patches");

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

// Your function should include an if/else statement that meets the following criteria
//   - Danger levels that are above 50 are too scary for your hero. Any danger level that is above 50 should result in printing the badExcuse to the console
//   - Anything dangerLevel that is between 10 and 50 should result in printing the saveTheDay string to the console
//   - If the dangerLevel is below 10, it means it is not worth your time and should result in printing the string "Meh. Hard pass." to the console.

var dangerLevel = 90;
var saveTheDay = "I'm tall and sexy as f-ck!";
var badExcuse = "It was nice hiking with you";

function assessSituation(dangerLevel, saveTheDay, badExcuse) {
  if (dangerLevel >= 50) {
    console.log("It was nice hiking with you");
} else if
    (dangerLevel <= 50) && dangerLevel >= 10) {
    console.log("I'm tall and sexy as f-ck!");
}  else if
    (dangerLevel <= 9) {
    console.log("Meh. Hard pass.");
  }
}

assessSituation(90, saveTheDay, badExcuse);
assessSituation(22, saveTheDay, badExcuse);
assessSituation(8, saveTheDay, badExcuse);

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
  name: "NoroMan",
  smell: "Thru-hiker",
  weight: "200",
  citiesDestroyed: ["Neel's Gap", "Hot Springs", "Waynesboro"],
  luckyNumbers: [1921, 1948, 2017, 2018],
  address: {
    number: 4125,
    street: "Coxey Brown Road",
    state: "Maryland",
    zip: 21773
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
    this.superpower = superpower;
    this.age = age;
    this.archNemesis = "The Syntax Error";
    this.powerLevel = 100;
    this.energyLevel = 50;
  }
  sayName:function() {
    console.log("name");
  }
  maximizeEnergy:function() {
    console.log(energyLevel === 1000);
  }
  gainPower(); {}
    console.log('n' + powerLevel);
}

// - Create the following class methods
//   - sayName, should print the hero's name to the console
//   - maximizeEnergy, should update the energyLevel to 1000
//   - gainPower, should take an argument of a number and INCREASE the powerLevel by that number

// - Create 2 instances of your SuperHero class

var hero1 = new SuperHero("Pit Boss", "Can eat anything", 37);
console.log(hero1);

var hero2 = new SuperHero("House Cat", "Napping", 11);
console.log(hero2);

// Reflection
// What parts were most difficult about this exerise?

// The hardest parts of this exercise was how slow I went and how hard the class methods section was for me. //

// What parts felt most comfortable to you?

/* I was most comfortable declaring variables and creating objects. Even though putting the object inside of
an object through me for a loop at first */

// What skills do you need to continue to practice before starting Mod 1?

//I need to continue practicing methods. I also what to continue practicing loops!
