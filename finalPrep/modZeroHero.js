// Challenge - See if you can follow the instructions and complete the exercise in under 30 minutes!

// Declare two variables - heroName AND specialAbility - set to strings
var heroName = "Superman";
var specialAbility = "fly";

// Declare two variables - greeting AND catchphrase
//   greeting should be assigned to a string that uses concatenation to include the heroName
//   catchphrase should be assigned to a string that uses interpolation to include the specialAbility

var greeting = "I am " + heroName;
var catchphrase = `I can ${specialAbility}!`;

// Declare two variables - power AND energy - set to integers
var power = 1000;
var energy = 1000;

// Declare two variables - fullPower AND fullEnergy
//   fullPower should multiply your current power by 500
//   fullEnergy should add 150 to your current energy

var fullPower = power * 500;
var fullEnergy = energy + 150;

// Declare two variables - isHuman and identityConcealed - assigned to booleans
var isHuman = false;
var identityConcealed = true;

// Declare two variables - archEnemies AND sidekicks
//   archEnemies should be an array of at least 3 different enemy strings
//   sidekicks should be an array of at least 3 different sidekick strings

var archEnemies = ["Batman", "Lex Luthor", "Kryptonite"];
var sidekicks = ["Superboy", "Supergirl", "Beppo"];

// Print the first sidekick to your console

console.log(sidekicks[0]);

// Print the last archEnemy to the console

console.log(archEnemies[2]);

// Write some code to add a new archEnemy to the archEnemies array

archEnemies.push("Brainiac");

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

function assessSituation (dangerLevel, saveTheDay, badExcuse) {
  var saveTheDay = "Job done!";
  var badExcuse = "Is that kryptonite?";

  if (dangerLevel > 50) {
    console.log(badExcuse);
  } else if (dangerLevel <= 50 && dangerLevel >= 10) {
    console.log(saveTheDay);
  } else {
    console.log("Meh. Hard pass.");
  }
}
assessSituation(99);
assessSituation(21);
assessSituation(3);

//
//Test Cases
//var announcement = 'Never fear, the Courageous Curly Bracket is here!';
//var excuse = 'I think I forgot to lock up my 1992 Toyota Coralla. Be right back.';
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
  name: "Fred",
  smell: "Rotten Food",
  weightInLbs: 1000,
  citiesDestroyed: ["Tokyo","Paris"],
  luckyNumbers: [7, 13],
  address: {
    number: 1122,
    street: "Manhatten Blvd",
    state: "Colorado",
    zip: 80021,
  }
};
console.log(scaryMonster);

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
    this.archNemesis = "Lex Luthor";
    this.powerLevel = 100;
    this.energyLevel = 50;
  }
  sayName(name) {
    console.log(name);
  }
  maximizeEnergy() {
    this.energyLevel = 1000;
  }
  gainPower(addPower) {
    this.powerLevel = 100 + addPower;
  }
}

// - Create the following class methods
//   - sayName, should print the hero's name to the console
//   - maximizeEnergy, should update the energyLevel to 1000
//   - gainPower, should take an argument of a number and INCREASE the powerLevel by that number

// - Create 2 instances of your SuperHero class
var superHero1 = new SuperHero("William","Buying Beer", 30);
var superHero2 = new SuperHero("Stephanie","Making Dinner", 26);

superHero1.sayName("William");
superHero1.maximizeEnergy();
superHero2.gainPower(52);

console.log(superHero1);
console.log(superHero2);

// Reflection
// What parts were most difficult about this exerise?

// I had trouble with understanding the concept behind functions earlier so this was an opportunity to relearn that. I slowly worked through with the if/else statement and the class as well, but I am happy with the result!

// What parts felt most comfortable to you?
// We have definitely cemented the idea of the variable and applied it to many concepts so those early variable questions were a breeze.

// What skills do you need to continue to practice before starting Mod 1?
// I have been creating lists of examples for the concepts and can pull from those examples to solve many problems, however, when a concept is not in my example it creates a stall. I need to keep building the conceptual foundations as well as being able to truly visualize the flow of data.
