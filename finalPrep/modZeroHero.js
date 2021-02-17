// Challenge - See if you can follow the instructions and complete the exercise in under 30 minutes!

// Declare two variables - heroName AND specialAbility - set to strings

var heroName = "Sad Dude"
var specialAbility = "crying"

// Declare two variables - greeting AND catchphrase
//   greeting should be assigned to a string that uses concatenation to include the heroName
//   catchphrase should be assigned to a string that uses interpolation to include the specialAbility

var greeting = "Hi, I'm " + heroName + "."
var catchphrase = `Existence is pain, and I always feel like ${specialAbility}.`

// Declare two variables - power AND energy - set to integers

var power = 10
var energy = 20

// Declare two variables - fullPower AND fullEnergy
//   fullPower should multiply your current power by 500
//   fullEnergy should add 150 to your current energy

var fullPower = power * 500
var fullEnergy = energy + 150

// Declare two variables - isHuman and identityConcealed - assigned to booleans

var isHuman = true
var identityConcealed = false

// Declare two variables - archEnemies AND sidekicks
//   archEnemies should be an array of at least 3 different enemy strings
//   sidekicks should be an array of at least 3 different sidekick strings

var archEnemies = ["HappyKid", "AngryBro", "Laugh-a-tron"]
var sidekicks = ["SadGal", "DepressedDog", "CatatonicCat"]

// Print the first sidekick to your console

console.log(sidekicks[0])

// Print the last archEnemy to the console

console.log(archEnemies[2])

// Write some code to add a new archEnemy to the archEnemies array

archEnemies.push("Mr. Smiley")

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
 console.log(dangerLevel, saveTheDay, badExcuse)
}

assessSituation(10, "I am the world's greatest.", "I want to cry. TOO SPOOKY!");
assessSituation(1, "I rock.", "I'm not doing anything.");
assessSituation(5, "Look at me go!", "I am a failure.");

// Your function should include an if/else statement that meets the following criteria
//   - Danger levels that are above 50 are too scary for your hero. Any danger level that is above 50 should result in printing the badExcuse to the console
//   - Anything dangerLevel that is between 10 and 50 should result in printing the saveTheDay string to the console
//   - If the dangerLevel is below 10, it means it is not worth your time and should result in printing the string "Meh. Hard pass." to the console.

	if (dangerLevel > 50) {
		console.log("I want to cry. TOO SPOOKY!");
	}
	else if (dangerLevel <= 9) {
  	console.log("Meh. Hard pass.");
	}
	else if (dangerLevel <= 50) {
  	console.log("I am the world's greatest.");
	}

//Test Cases
var announcement = 'Never fear, the Courageous Curly Bracket is here!'
var excuse = 'I think I forgot to lock up my 1992 Toyota Coralla. Be right back.'
// assessSituation(99, announcement, excuse) > Should print - 'I think I forgot to lock up my 1992 Toyota Coralla. Be right back.'
//assessSituation(21, announcement, excuse) > should print - 'Never fear, the Courageous Curly Bracket is here!'
//assessSituation(3, announcement, excuse) > should print - "Meh. Hard pass."

if (dangerLevel === 99) {
  	console.log("I think I forgot to lock up my 1992 Toyota Coralla. Be right back.");
	}
	else if (dangerLevel === 21) {
  	console.log("Never fear, the Courageous Curly Bracket is here!");
	}
	else if (dangerLevel > 50) {
		console.log("I want to cry. TOO SPOOKY!");
	}
	else if (dangerLevel <= 9) {
  	console.log("Meh. Hard pass.");
	}
	else if (dangerLevel <= 50) {
  	console.log("I am the world's greatest.");
	}

// Declare a new variable - scaryMonster - assigned to an Object with the following key/values
//   - name (string)
//   - smell (string)
//   - weight (integer)
//   - citiesDestroyed (array)
//   - luckyNumbers (array)
//   - address (object with following key/values: number , street , state, zip)

var scaryMonster = {
	name: "SpookyBoi",
	smell: "rotting wood",
	weight: 200,
	citiesDestroyed: ["Denver", "Toledo", "LA"],
	luckyNumbers: [13, 420, 666],
	address: {
		number: 123,
		street: "Main",
		state: "Colorado",
		zip: 80222
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
  constructor(name, power, age) {
   this.name = name
  	this.superpower = power
  	this.age = age
		this.archNemesis = "The Syntax Error"
		this.powerLevel = 100
		this.energyLevel = 50
  }
}

Carl = new SuperHero("Carl", 5, 70)

// - Create the following class methods
//   - sayName, should print the hero's name to the console
//   - maximizeEnergy, should update the energyLevel to 1000
//   - gainPower, should take an argument of a number and INCREASE the powerLevel by that number

// - Create 2 instances of your SuperHero class

sayName(name) {
  this.sayName(name) = name
}

maximizeEnergy(maximizeEnergy) {
  this.maximizeEnergy(maximizeEnergy) = energyLevel + 500
}

gainPower(gain) {
  this.gainPower(gain) = powerLevel + 1
}

// Reflection
// What parts were most difficult about this exerise?

// What parts felt most comfortable to you?

// What skills do you need to continue to practice before starting Mod 1?
