// Challenge - See if you can follow the instructions and complete the exercise in under 30 minutes!

// Declare two variables - heroName AND specialAbility - set to strings
var heroName = "Strong Sydney"
var specialAbility = "super strength"

// Declare two variables - greeting AND catchphrase
//   greeting should be assigned to a string that uses concatenation to include the heroName
//   catchphrase should be assigned to a string that uses interpolation to include the specialAbility
var catchphrase =`I will use my ${specialAbility} to help you!`
var greeting = "Hello, I am " + heroName


// Declare two variables - power AND energy - set to integers

var power =100
var energy = 150

// Declare two variables - fullPower AND fullEnergy
//   fullPower should multiply your current power by 500
//   fullEnergy should add 150 to your current energy

var fullPower = power*500

var fullEnergy = energy + 150

// Declare two variables - isHuman and identityConcealed - assigned to booleans
var isHuman =true
var identityConcealed = false

// Declare two variables - archEnemies AND sidekicks
//   archEnemies should be an array of at least 3 different enemy strings
//   sidekicks should be an array of at least 3 different sidekick strings

var archEnemies = ["Harry Potter", "Superman", "Wonder Woman"]
var sideKicks = ["Berkeley the dog", "Tom Brady","Snow White"]

// Print the first sidekick to your console
console.log(sideKicks[0]);

// Print the last archEnemy to the console
console.log(archEnemies.pop());

// Write some code to add a new archEnemy to the archEnemies array
archEnemies.push("Bob the builder");

// Print the archEnemies array to console to ensure you added a new archEnemy
console.log(archEnemies);
// Remove the first sidekick from the sidekicks array
sideKicks.shift(1);
console.log(sideKicks);
// Print the sidekicks array to console to ensure you added a new sidekick
console.log(sideKicks);
// Create a function called assessSituation that takes three arguments - dangerLevel, saveTheDay, badExcuse
//   - dangerLevel should be an integer
//   - saveTheDay should be a string a hero would say once they save the day
//   - badExcuse should be a string a hero would say if they are too afraid of the dangerLevel

var dangerLevel = 15;
var saveTheDay = "I saved the day!";
var badExcuse = "I actually have to go walk my dog!";

function assessSituation(dangerLevel,saveTheDay,badExcuse) {
  if(dangerLevel >50){
    console.log(badExcuse);
  }else if (dangerLevel <10){
    console.log("Meh. Hard Pass");
  }else {
      console.log(saveTheDay);
  }
}

console.log(assessSituation(dangerLevel,saveTheDay,badExcuse));


// Your function should include an if/else statement that meets the following criteria
//   - Danger levels that are above 50 are too scary for your hero. Any danger level that is above 50 should result in printing the badExcuse to the console
//   - Anything dangerLevel that is between 10 and 50 should result in printing the saveTheDay string to the console
//   - If the dangerLevel is below 10, it means it is not worth your time and should result in printing the string "Meh. Hard pass." to the console.

//Test Cases
var announcement = 'Never fear, the Courageous Curly Bracket is here!'
var excuse = 'I think I forgot to lock up my 1992 Toyota Coralla. Be right back.'
// assessSituation(99, announcement, excuse) > Should print - 'I think I forgot to lock up my 1992 Toyota Coralla. Be right back.'
console.log(assessSituation(99,announcement,excuse));

//assessSituation(21, announcement, excuse) > should print - 'Never fear, the Courageous Curly Bracket is here!'
console.log(assessSituation(21,announcement,excuse));
//assessSituation(3, announcement, excuse) > should print - "Meh. Hard pass."
console.log(assessSituation(3,announcement,excuse));
// Declare a new variable - scaryMonster - assigned to an Object with the following key/values
//   - name (string)
//   - smell (string)
//   - weight (integer)
//   - citiesDestroyed (array)
//   - luckyNumbers (array)
//   - address (object with following key/values: number , street , state, zip)
var scaryMonster = {
  name: "Sydney",
  smell: "Stinky",
  weight: 220,
  citiesDestroyed: 10,
  luckyNumbers: [9,3,13],
  address:{number:60,street: "Londonderry Drive", state: "Connecticut",zip:06830},
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
class SuperHero{
  constructor(name,superPower,age){
    this.archNemesis ="The Syntax Error",
    this.powerLevel= 100,
    this.energyLevel = 50,
    this.name = name,
    this.superPower = superpower,
    this.age = age;
    this.num =47
  }
  sayName(){
    console.log(this.name);
  }
  maximizeEnergy(){
    this.energyLevel = 1000;
  }
  gainpower(){
    this.powerLevel + this.num
  }
}
// - Create the following class methods
//   - sayName, should print the hero's name to the console
//   - maximizeEnergy, should update the energyLevel to 1000
//   - gainPower, should take an argument of a number and INCREASE the powerLevel by that number

// - Create 2 instances of your SuperHero class
var superMan = new SuperHero ("Super Man","flight",35);
var wonderWoman = new SuperHero ("Wonder Woman", "Strong",27);

// Reflection
// What parts were most difficult about this exerise?
//I struggled a little bit on the codes to do certain things to arrays. I need to start
//memorizing those codes to remove, and add, and print for arrays. 

// What parts felt most comfortable to you?
//I am most comfortable with the class and methods section.

// What skills do you need to continue to practice before starting Mod 1?
//I need to practice everything. My goal is to practice 3 hours daily until mod1.
//I want to get to a point where I am don't have to look up definitions as much.
