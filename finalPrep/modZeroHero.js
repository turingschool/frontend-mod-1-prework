// Challenge - See if you can follow the instructions and complete the exercise in under 30 minutes!

// Declare two variables - heroName AND specialAbility - set to strings
var heroName = "Bite Lady";
var specialAbility = "biting";

// Declare two variables - greeting AND catchphrase
//   greeting should be assigned to a string that uses concatenation to include the heroName
//   catchphrase should be assigned to a string that uses interpolation to include the specialAbility
var greeting = "Bonjour, I am " + heroName;
var catchphrase = `Bim, bam, ${specialAbility}!`;

// console.log(heroName);
// console.log(specialAbility);
// console.log(greeting);
// console.log(catchphrase);
// Declare two variables - power AND energy - set to integers

var power = 10;
var energy = 100;

// Declare two variables - fullPower AND fullEnergy
//   fullPower should multiply your current power by 500
//   fullEnergy should add 150 to your current energy

var fullPower = power * 500;
var fullEnergy = energy + 150;

// console.log(fullPower);
// console.log(fullEnergy);

// Declare two variables - isHuman and identityConcealed - assigned to booleans

var isHuman = true;
var identityConcealed = true;

// console.log(isHuman);
// console.log(identityConcealed);

// Declare two variables - archEnemies AND sidekicks
//   archEnemies should be an array of at least 3 different enemy strings
//   sidekicks should be an array of at least 3 different sidekick strings

var archEnemies = ["Steel Nymph", "Kevlar Man", "Invisigirl"]
var sidekicks = ["Tickle Dragon", "Imposter Monster", "Pinch Baby"]
// Print the first sidekick to your console
//console.log(sidekicks[0])

// Print the last archEnemy to the console
//console.log(archEnemies[2])

// Write some code to add a new archEnemy to the archEnemies array
//archEnemies.unshift("Cotton Candy Boy")

// Print the archEnemies array to console to ensure you added a new archEnemy
//console.log(archEnemies)

// Remove the first sidekick from the sidekicks array
//sidekicks.shift()

// Print the sidekicks array to console to ensure you added(removed?) a new sidekick
//console.log(sidekicks)

// Create a function called assessSituation that takes three arguments - dangerLevel, saveTheDay, badExcuse
//   - dangerLevel should be an integer
//   - saveTheDay should be a string a hero would say once they save the day
//   - badExcuse should be a string a hero would say if they are too afraid of the dangerLevel
var saveTheDay = "Let that be a lesson to you! Never mess with the teeth!"
var badExcuse = "Uhh... I need to water my neighbor's plants."

function assessSituation (dangerLevel, saveTheDay, badExcuse){
  console.log(dangerLevel);
  console.log(saveTheDay);
  console.log(badExcuse);
}

//assessSituation (51, "Let that be a lesson to you! Never mess with the teeth!", "Uhh... I need to water my neighbor's plants.");

// Your function should include an if/else statement that meets the following criteria
//   - Danger levels that are above 50 are too scary for your hero. Any danger level that is above 50 should result in printing the badExcuse to the console
//   - Anything dangerLevel that is between 10 and 50 should result in printing the saveTheDay string to the console
//   - If the dangerLevel is below 10, it means it is not worth your time and should result in printing the string "Meh. Hard pass." to the console.

function assessSituation (dangerLevel, saveTheDay, badExcuse){
  if(dangerLevel > 50){
    console.log(badExcuse)
  } else if(dangerLevel <10){
    console.log("Meh. Hard pass.")
  } else{
    console.log(saveTheDay)
  }
}

// assessSituation(99,saveTheDay,badExcuse);
// assessSituation (45,saveTheDay,badExcuse);
// assessSituation (9,saveTheDay,badExcuse);

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
  name: "BoogaBoo",
  smell: "caramel",
  weightInPounds: 300,
  citiesDestroyed: ["Paris", "Denver", "Bozeman"],
  luckyNumbers: [1, 12, 24],
  address: {
    number: 666,
    street: "Spoopy Way",
    state: "New Jersey",
    zip: 90101,
  }
}

//console.log(scaryMonster)

// Create a new class called SuperHero
// - Your class should have the following DYNAMIC values
//   - name
//   - superpower
//   - age
// - Your class should have the following STATIC values
//   - archNemesis, assigned to "The Syntax Error"
//   - powerLevel = 100
//   - energyLevel = 50

// class SuperHero {
//   constructor(name, superpower, age){
//     this.name = name;
//     this.superpower = superpower;
//     this.age = age;
//     this.archNemesis = "The Syntax Error";
//     this.powerLevel = 100;
//     this.energyLevel = 50;
//   }
// }

//var superHero1 = new SuperHero ("Self-Hatred", "Eating your feelings", 30);
//console.log(superHero1)

// - Create the following class methods
//   - sayName, should print the hero's name to the console
//   - maximizeEnergy, should update the energyLevel to 1000
//   - gainPower, should take an argument of a number and INCREASE the powerLevel by that number
class SuperHero {
  constructor(name, superpower, age){
    this.name = name;
    this.superpower = superpower;
    this.age = age;
    this.archNemesis = "The Syntax Error";
    this.powerLevel = 100;
    this.energyLevel = 50;
  }
  sayName(){
    console.log(this.name)
  }
  maximizeEnergy(){
    this.energyLevel = 1000
  }
  gainPower(i){
    this.powerLevel = this.powerLevel + i
  }
}

// - Create 2 instances of your SuperHero class
var superHero2 = new SuperHero ("Octo-hands", "giving you a massage", 25)
superHero2.sayName();
superHero2.maximizeEnergy();
//console.log(superHero2);
superHero2.gainPower(2);
//console.log(superHero2);

// Reflection
// What parts were most difficult about this exerise?
/*I definitely did not complete the exercise within the 30 minute time limit. I
had a really hard time retaining/remembering information from the earlier sections, especially
the proper syntax (I got a kick out of the archNemesis name 😆). When referring to my notes, I
wish that I had written out a lot more examples of code. I ended up referring to my previous work
which was helpful. Overall, I need more practice with the concepts,*/

// What parts felt most comfortable to you?
/* I felt most comfortable with declaring variables, else-if statements, creating
a class using the constructor function and class methods.
*/

// What skills do you need to continue to practice before starting Mod 1?
/* I need to practice proper syntax overall, as well as more complex conditional statements
and functions. I want to get a new notebook and re-write my definitions and keywords to
include examples of proper use/syntax.  */
