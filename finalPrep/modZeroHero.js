// Challenge - See if you can follow the instructions and complete the exercise in under 30 minutes!

// Declare two variables - heroName AND specialAbility - set to strings

var heroName = 'Amberly Worthy';
var specialAbility = 'Wordsmith';

// Declare two variables - greeting AND catchphrase
//   greeting should be assigned to a string that uses concatenation to include the heroName
//   catchphrase should be assigned to a string that uses interpolation to include the specialAbility

var greeting = 'She does not use her fists, she slings words at you! Here to save the day is ' + heroName + '!';
var catchPhrase = `Worthy injures and woos with her ${specialAbility} tricks.`;

// Declare two variables - power AND energy - set to integers

var power = 25;
var energy = 52;

// Declare two variables - fullPower AND fullEnergy
//   fullPower should multiply your current power by 500
//   fullEnergy should add 150 to your current energy

var fullPower = power * 500;
var fullEnergy = energy += 150;


// Declare two variables - isHuman and identityConcealed - assigned to booleans

var isHuman = false;
var identityConcealed = true;

// Declare two variables - archEnemies AND sidekicks
//   archEnemies should be an array of at least 3 different enemy strings
//   sidekicks should be an array of at least 3 different sidekick strings

var archEnemies = ['Voldemort', 'Moriarty', 'Mr. Hyde'];
var sideKicks = ['Robin', 'Minions', 'Heihei'];

// Print the first sidekick to your console

console.log(archEnemies[0]);

// Print the last archEnemy to the console

console.log(archEnemies[2]);

// Write some code to add a new archEnemy to the archEnemies array

archEnemies.push('Poison Ivy');

// Print the archEnemies array to console to ensure you added a new archEnemy

console.log(archEnemies);

// Remove the first sidekick from the sidekicks array

sideKicks.shift();

// Print the sidekicks array to console to ensure you added a new sidekick

console.log(sideKicks);

// Create a function called assessSituation that takes three arguments - dangerLevel, saveTheDay, badExcuse
//   - dangerLevel should be an integer
//   - saveTheDay should be a string a hero would say once they save the day
//   - badExcuse should be a string a hero would say if they are too afraid of the dangerLevel

// Your function should include an if/else statement that meets the following criteria
//   - Danger levels that are above 50 are too scary for your hero. Any danger level that is above 50 should result in printing the badExcuse to the console
//   - Anything dangerLevel that is between 10 and 50 should result in printing the saveTheDay string to the console
//   - If the dangerLevel is below 10, it means it is not worth your time and should result in printing the string "Meh. Hard pass." to the console.

//Test Cases
var announcement = 'Never fear, the Courageous Curly Bracket is here!'
var excuse = 'I think I forgot to lock up my 1992 Toyota Coralla. Be right back.'


//My own variables
var reason = 'I am tired and do not feel like scrapping with you today.';
var speech = 'I know. I know. You could not have done this without me!';

//My function called assessSituation with 3 parameters
function assessSituation(dangerLevel, saveTheDay, badExcuse) {
  if (dangerLevel < 10) {
    console.log('Meh. Hard pass.');
  } else if (dangerLevel <= 50) {
    console.log(saveTheDay);
  } else {
    console.log(badExcuse);
  }
};

//Test cases
// assessSituation(99, announcement, excuse) > Should print - 'I think I forgot to lock up my 1992 Toyota Coralla. Be right back.'
//assessSituation(21, announcement, excuse) > should print - 'Never fear, the Courageous Curly Bracket is here!'
//assessSituation(3, announcement, excuse) > should print - "Meh. Hard pass."

assessSituation(65, speech, reason); //logs 'I am tired and do not feel like scrapping with you today.'

// Declare a new variable - scaryMonster - assigned to an Object with the following key/values
//   - name (string)
//   - smell (string)
//   - weight (integer)
//   - citiesDestroyed (array)
//   - luckyNumbers (array)
//   - address (object with following key/values: number , street , state, zip)

var scaryMonster = {
  name: 'Creeper',
  smell: 'Bod of Eternal Stench',
  weight: 5,
  citiesDestroyed: ['Fargo', 'Pocatello', 'Bristol'],
  luckyNumbers: [5, 37, 0, 3, 999],
  address: {
    number: 333,
    street: 'Elmo',
    state: 'Confusion',
    zip: 11111
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


// - Create the following class methods
//   - sayName, should print the hero's name to the console
//   - maximizeEnergy, should update the energyLevel to 1000
//   - gainPower, should take an argument of a number and INCREASE the powerLevel by that number

// - Create 2 instances of your SuperHero class

class SuperHero {
  constructor(name, superPower, age) {
    this.name = name;
    this.superPower = superPower;
    this.age = age;
    this.archNemisis = "The Syntax Error";
    this.powerLevel = 100;
    this.energyLevel = 50;
  }

  sayName(){
    this.name = 'Copernicus Optimus';
  }
  maximizeEnergy() {
    this.energyLevel = 1000;
  }
  gainPower(num) {
    this.powerLevel += num;
  }
};

var biggestHero = new SuperHero('Giant-a-normous', 'Sits on people', 502);
var smallestHero = new SuperHero('Infintesimal Man', 'Burrows in ear drums', 27);


// Reflection
// What parts were most difficult about this exerise?

//For me the most difficult parts are actually just thoroughly gleaning what is
//being asked of me from the directions. I think because I'm so new to this,
//sometimes I have to really stop and think about what the directions mean. I have
//to go back to other exercises, my notes, and my lessons and look at what I have
//done before and pay attention to the syntax that is supposed to be used.
//Getting down the proper syntax is going to take time but I know that's to be
//expected.

//I really thought the last exercise (directly above this reflection section),
//with the class SuperHero, was going to be the hardest for me. I started
//feeling a tad bit panicky when beginning it. It flowed a lot easier than I
//I thought it would though. I got tripped up a little bit with the gainPower
//method and initiatlly wrote it as:  this.powerLevel = powerLevel += num.
//I used node in my terminal and checked out how the method effects my instance
//biggestHero. I saw that it didnt work and I quickly realized that I should not
//be referencing powerLevel again, after the assignment operator. I had to simply
//write: this.powerLevel += num

//I also felt a little unsure about creating an object inside of an object. I did
//without looking it up and then made sure to go and Google it, to see if what
//I had done was correct. It does appear to be correct!

// What parts felt most comfortable to you?

//The sections on variable assignments, concatentation, interpolation, and the
//conditional if/else statement felt the most comfortable.

// What skills do you need to continue to practice before starting Mod 1?

//I think I need more practice with being comfortable with syntax. I want to get
//more fluid at knowing when to include parentheses, when calling functions/methods
//and want to get more fluid at including curly braces and paying attention to
//details, like semicolons. I think I also want to play around with keywords more
//and try to understand when and why we use new and this...and things of their ilk.
