// Challenge - See if you can follow the instructions and complete the exercise in under 30 minutes!

// Declare two variables - heroName AND specialAbility - set to strings
var heroName = "Spiderman"
var specialAbility = "spidey sense"
// Declare two variables - greeting AND catchphrase
//   greeting should be assigned to a string that uses concatenation to include the heroName
//   catchphrase should be assigned to a string that uses interpolation to include the specialAbility
var greeting = ("Hi, I'm" + heroName + "!")
var catchphrase = (`My ${specialAbility} is tingling`)

// Declare two variables - power AND energy - set to integers
var power = 1
var energy = 1
// Declare two variables - fullPower AND fullEnergy
var fullPower = power * 500
var fullEnergy = energy + 150
//   fullPower should multiply your current power by 500
//   fullEnergy should add 150 to your current energy

// Declare two variables - isHuman and identityConcealed - assigned to booleans
var isHuman = true
var identityConcealed = true

// Declare two variables - archEnemies AND sidekicks
//   archEnemies should be an array of at least 3 different enemy strings
//   sidekicks should be an array of at least 3 different sidekick strings
var archEnemies = ['Venom','Doc Oc','Electro']
var sidekicks = ['Daredevil','Miles','Captain America']
// Print the first sidekick to your console
console.log(sidekicks[0])
// Print the last archEnemy to the console
console.log(archEnemies[2])
// Write some code to add a new archEnemy to the archEnemies array
archEnemies.unshift(`Scorpion`)
// Print the archEnemies array to console to ensure you added a new archEnemy
console.log(archEnemies)
// Remove the first sidekick from the sidekicks array
sidekicks.pop()
// Print the sidekicks array to console to ensure you added a new sidekick
console.log(sidekicks)
// Create a function called assessSituation that takes three arguments - dangerLevel, saveTheDay, badExcuse
//   - dangerLevel should be an integer
//   - saveTheDay should be a string a hero would say once they save the day
//   - badExcuse should be a string a hero would say if they are too afraid of the dangerLevel
var dangerLevel = 1
var saveTheDay = "Another story done! Another civilian saved!"
var badExcuse = "Man this is too scary! I'm out of here"
function assessSituation() {
  if (dangerlevel >= 10) {
    console.log( "Meh. Hard Pass")
  } else if (dangerlevel <= 50){
    console.log(badExcuse)
  } else (dangerlevel = 20)
   console.log(saveTheDay)
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
var scaryMonster = {
  name: 'Bingus',
  smell: 'stinky',
  weight: 5000,
  citiesDestroyed: ['Denver','Thornton','Pueblo'],
  luckyNumbers: [5,7,85],
  address: [42, 'ronald', 'CO', 82580]

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
  constructor(name,superpower,age){
  this.name = name;
  this.power = superpower;
  this.age = age;
  this.archNemesis = 'KennyS';
  this.powerLevel = 100;
  this.energyLevel = 50;
}
sayName(sn){
  console.log(this.name)
}
maximizeEnergy(me){
  this.energylevel * 10
}
gainPower(gp){
  this.powerLevel + gp
}
}
// - Create the following class methods
//   - sayName, should print the hero's name to the console
//   - maximizeEnergy, should update the energyLevel to 1000
//   - gainPower, should take an argument of a number and INCREASE the powerLevel by that number

// - Create 2 instances of your SuperHero class
var superhero1 = new SuperHero('Stewie2k','Smoke Criminal','24')
var superhero2 = new SuperHero('Tarik','Content Master','25')

// Reflection
// What parts were most difficult about this exerise?

// What parts felt most comfortable to you?

// What skills do you need to continue to practice before starting Mod 1?
