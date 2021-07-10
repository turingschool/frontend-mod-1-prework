// Declare two variables - heroName AND specialAbility - set to strings

var heroName = 'man spider';
var specialAbility = 'being absolutely terrifying';

// Declare two variables - greeting AND catchphrase
//   greeting should be assigned to a string that uses concatenation to include the heroName
//   catchphrase should be assigned to a string that uses interpolation to
//include the specialAbility

var greeting = 'scared yet?' + heroName
var catchphrase = `just try to stomp me! ${specialAbility}`
console.log(greeting)
console.log(catchphrase)
// Declare two variables - power AND energy - set to integers
var power = 100;
var energy = 85;

// Declare two variables - fullPower AND fullEnergy
//   fullPower should multiply your current power by 500
//   fullEnergy should add 150 to your current energy
var fullPower = 500 * power;
var fullEnergy = 150 + energy;

console.log(fullPower)
console.log(fullEnergy)

// Declare two variables - isHuman and identityConcealed - assigned to booleans
var isHuman = false;
var identityConcealed =false;

// Declare two variables - archEnemies AND sidekicks
//   archEnemies should be an array of at least 3 different enemy strings
//   sidekicks should be an array of at least 3 different sidekick strings
var archEnemies = ["test1", "test2", "test3"]
var sidekicks = ["example1", "example2", "example3"]
// Print the first sidekick to your console
console.log(sidekicks[0])

// Print the last archEnemy to the console
console.log(archEnemies[2])

// Write some code to add a new archEnemy to the archEnemies array
archEnemies.push("newArchEnemy")

// Print the archEnemies array to console to ensure you added a new archEnemy
console.log(archEnemies)

// Remove the first sidekick from the sidekicks array
sidekicks.shift()

// Print the sidekicks array to console to ensure you added a new sidekick
console.log(sidekicks)

// Create a function called assessSituation that takes three arguments - dangerLevel, saveTheDay, badExcuse
//   - dangerLevel should be an integer
//   - saveTheDay should be a string a hero would say once they save the day
//   - badExcuse should be a string a hero would say if they are too afraid of the dangerLevel
function assessSituation(dangerLevel, saveTheDay, badExcuse) {
  if(dangerLevel >= 10 && dangerLevel <= 50) {
    console.log(saveTheDay)
  } else if (dangerLevel < 10){
    console.log(badExcuse)
  } else {
    console.log("Meh. Hard pass")
  }
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
assessSituation(8, "at least i tried", "I have a cold")
// Declare a new variable - scaryMonster - assigned to an Object with the following key/values
//   - name (string)
//   - smell (string)
//   - weight (integer)
//   - citiesDestroyed (array)
//   - luckyNumbers (array)
//   - address (object with following key/values: number , street , state, zip)
var scaryMonster = {
  name: "Bob",
  smell: "awful",
  weightInLbs: 225,
  citiesDestroyed: ["lagos", 'Johannesburg', "Kinshasa", "london"],
  luckyNumbers: [7, 13, 21],
  address: {
    number: 21,
    street: "Main street",
    state: "New York",
    zip: 55577
  }
}

console.log(scaryMonster)

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
  constructor(name, superpower, age) {
    this.name = name
    this.superpower = superpower,
    this.age = age
  }
  static archNemesis = "Syntax error"
  static powerLevel = 100
  static energyLevel = 50

  sayName () {
    return this.name
  }

  static maximizeEnergy () {
    this.energyLevel = 1000
    console.log(this.energyLevel)
  }

  static gainPower (num) {
    var t = this.powerLevel
    t = t + num
    console.log(t)
  }
}

var newClass = new SuperHero("Bob", "Flight", 42)
var class2 = SuperHero
console.log(newClass.sayName())

class2.gainPower(300)
//Finished!
