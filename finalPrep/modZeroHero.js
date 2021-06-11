// Challenge - See if you can follow the instructions and complete the exercise in under 30 minutes!

// Declare two variables - heroName AND specialAbility - set to strings

var heroName = "Kitty the Amazing";
var specialAbility = "a kitty that flies through time and space to fight evil rats";

console.log(heroName);
console.log(specialAbility);

// Declare two variables - greeting AND catchphrase
//   greeting should be assigned to a string that uses concatenation to include the heroName
//   catchphrase should be assigned to a string that uses interpolation to include the specialAbility

var greeting = ( "Never fear" + " " + heroName + " " + "is here to save your tails!" );
var catchPhrase = `I am ${specialAbility}!`;

console.log(greeting);
console.log(catchPhrase);


// Declare two variables - power AND energy - set to integers

var power = 75;
var energy = 250;


console.log(power);
console.log(energy);

// Declare two variables - fullPower AND fullEnergy
//   fullPower should multiply your current power by 500
//   fullEnergy should add 150 to your current energy

var fullPower = (power * 500);
var fullEnergy = (energy + 150);

console.log(fullPower);
console.log(fullEnergy);

// Declare two variables - isHuman and identityConcealed - assigned to booleans

var isHuman = false;
var identityConcealed = true;

console.log(isHuman);
console.log(identityConcealed);


// Declare two variables - archEnemies AND sidekicks
//   archEnemies should be an array of at least 3 different enemy strings
//   sidekicks should be an array of at least 3 different sidekick strings

var archEnemies = ['dogs', 'the vet', 'mean rats'];
var sidekicks = ['sister kitten', 'personal human', 'the mailman'];

console.log (archEnemies)
console.log(sidekicks)

// Print the first sidekick to your console

console.log(sidekicks[0]);

// Print the last archEnemy to the console

console.log(archEnemies[2]);

// Write some code to add a new archEnemy to the archEnemies array

var archEnemy = archEnemies.push('dogs');

// Print the archEnemies array to console to ensure you added a new archEnemy

console.log(archEnemies);

// Remove the first sidekick from the sidekicks array

var lessSidekicks = sidekicks.shift();

// Print the sidekicks array to console to ensure you added a new sidekick

var newSidekick = sidekicks.push('bestie cat');

console.log (sidekicks);

// Create a function called assessSituation that takes three arguments - dangerLevel, saveTheDay, badExcuse
//   - dangerLevel should be an integer
//   - saveTheDay should be a string a hero would say once they save the day
//   - badExcuse should be a string a hero would say if they are too afraid of the dangerLevel

var dangerLevel = 50;
var saveTheDay = "I'll save your tails and whiskers too!";
var badExcuse = "I think I got a bad bowl of cat food this morning...";

// Your function should include an if/else statement that meets the following criteria
//   - Danger levels that are above 50 are too scary for your hero. Any danger level that is above 50 should result in printing the badExcuse to the console
//   - Anything dangerLevel that is between 10 and 50 should result in printing the saveTheDay string to the console
//   - If the dangerLevel is below 10, it means it is not worth your time and should result in printing the string "Meh. Hard pass." to the console.

function assessSituation(dangerLevel) {
if (dangerLevel > 50) {
    console.log(badExcuse);
} else if (dangerLevel >= 10 && dangerLevel <= 50) {
    console.log(saveTheDay);
} else if (dangerLevel < 10) {
    console.log("Meh. Hard pass.");
}
};

var assessing = assessSituation(99);
var announcement = assessSituation(21);
var exuse = assessSituation(3);


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
  name: "Ivan the Terrible",
  smell: "ghastly",
  weight: 500,
  citiesDestroyed: ['Paris', 'Miami', 'Dallas'],
  luckyNumbers: [10, 33, 55, 75],
};

var monsterAddress = {
  number: 1776,
  street: "Monsters Forever Lane",
  state: "Maryland",
  zip: 12345
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
  constructor(name, superpower, age) {
    this.name = name;
    this.superpower = superpower;
    this.age = age;
    this.archNemesis = "Billy the Dog";
    this.powerLevel = 100;
    this.energyLevel = 50;
  }
sayName() {
  console.log(this.name);
}
  maximizeEnergy(gainEnergy) {
var highestPower = this.energyLevel * gainEnergy;
this.energyLevel = highestPower;
console.log(this.maximizeEnergy);
}
 gainPower(powerLevel) {
  for (var i = 0; i < this.gainPower; i++)
    console.log(gainPower[i]);

  }
};

// - Create the following class methods
//   - sayName, should print the hero's name to the console
//   - maximizeEnergy, should update the energyLevel to 1000
//   - gainPower, should take an argument of a number and INCREASE the powerLevel by that number



// - Create 2 instances of your SuperHero class

var shinySuperHero = new SuperHero ('JoJo Rabbit', 'fighting the rotten foxes', 7);
shinySuperHero.sayName();
shinySuperHero.maximizeEnergy(20);
shinySuperHero.gainPower();
console.log(shinySuperHero)

var bestNewSuperHero = new SuperHero ('Pip the Pup', 'Saveing the world from stranger danger', 1);
bestNewSuperHero.sayName();
bestNewSuperHero.maximizeEnergy(20);
bestNewSuperHero.gainPower();
console.log(bestNewSuperHero)

// Reflection
// What parts were most difficult about this exerise?

// The second half of the challenge especially the class portion (combining functions with it has been tricky), I had to keep checking to make sure I wasn't missing any of the pieces to make up what needed to be coded.

// What parts felt most comfortable to you?

//The first half of the challenge felt most comfortable where it took me about 15 minutes tes but
//then the rest took way longer than 30 minutes, I'd like to try the challenge again over the
//next few weeks a few times to see if I can better my time and sharpen up my skills.

// What skills do you need to continue to practice before starting Mod 1?

//Functions and using them with classes and if else statements.
