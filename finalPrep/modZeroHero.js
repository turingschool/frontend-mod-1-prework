// Challenge - See if you can follow the instructions and complete the exercise in under 30 minutes!

// Declare two variables - heroName AND specialAbility - set to strings
var heroName = 'Batman';
var specialAbility = 'a very deep voice';
// Declare two variables - greeting AND catchphrase
//   greeting should be assigned to a string that uses concatenation to include the heroName
var greeting = 'Hello ' + heroName + ', tell us how you feel about the Penguin!';
//   catchphrase should be assigned to a string that uses interpolation to include the specialAbility
var catchphrase = 'He is worse than scum on the shoe of a liar, cheater, or theif he said in ' + specialAbility + '.';

// Declare two variables - power AND energy - set to integers
var power = 3;
var energy = 12;
// Declare two variables - fullPower AND fullEnergy
//   fullPower should multiply your current power by 500
var fullPower = power * 500;
//   fullEnergy should add 150 to your current energy
var fullEnergy = energy + 150;
// Declare two variables - isHuman and identityConcealed - assigned to booleans
var isHuman = true;
var identityConcealed = false;

// Declare two variables - archEnemies AND sidekicks
//   archEnemies should be an array of at least 3 different enemy strings
var archEnemies = [ 'Riddler', 'Two-Face', 'Penguin'];
//   sidekicks should be an array of at least 3 different sidekick strings
var sidekick = ['Robin', 'Superman', 'Alfred'];
// Print the first sidekick to your console
console.log(sidekick[0]);
// Print the last archEnemy to the console
console.log(archEnemies[archEnemies.length - 1]);
// Write some code to add a new archEnemy to the archEnemies array
archEnemies.push('Poison Ivy');
// Print the archEnemies array to console to ensure you added a new archEnemy
console.log(archEnemies);
// Remove the first sidekick from the sidekicks array
sidekick.shift();
// Print the sidekicks array to console to ensure you added a new sidekick
console.log(sidekick);
// Create a function called assessSituation that takes three arguments - dangerLevel, saveTheDay, badExcuse
function assessSituation (dangerLevel, saveTheDay, badExcuse) {
  if(dangerLevel > 50) {
    return badExcuse;
  } if(dangerLevel >= 10 && dangerLevel < 50) {
    return saveTheDay;
  } else {
    return "Meh. Hard pass."
  }
}
//   - dangerLevel should be an integer
//   - saveTheDay should be a string a hero would say once they save the day
//   - badExcuse should be a string a hero would say if they are too afraid of the dangerLevel

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
console.log(assessSituation(99, announcement, excuse));
console.log(assessSituation(21, announcement, excuse));
console.log(assessSituation(3, announcement, excuse));
console.log(assessSituation(10, announcement, excuse));

// Declare a new variable - scaryMonster - assigned to an Object with the following key/values
//   - name (string)
//   - smell (string)
//   - weight (integer)
//   - citiesDestroyed (array)
//   - luckyNumbers (array)
//   - address (object with following key/values: number , street , state, zip)
var scaryMonster = {
    name: 'Godzilla',
    smell:'stinky cedar',
    weightInLbs: 2000,
    citiesDestroyed: ['Manhattan', 'Atlantis', 'Egypt'],
    luckyNumbers: [12, 7, 8, 49],
    address: {
      number: 127,
      street: 'Butterfly Lane',
      state: 'Florida',
      zip: 33101,
    },
}
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
    this.powerLevel = 100;
    this.energyLevel = 50;
  }

  sayName() {
    console.log(this.name);;
  }

  maximizeEnergy() {
    this.energyLevel = 1000;
  }

  gainPower(num) {
    this.powerLevel = this.powerLevel + num;
  }
}

// - Create the following class methods
//   - sayName, should print the hero's name to the console
//   - maximizeEnergy, should update the energyLevel to 1000
//   - gainPower, should take an argument of a number and INCREASE the powerLevel by that number

// - Create 2 instances of your SuperHero class
var goldenPooch = new SuperHero('Nalle Dog', 'cuddling too good', 9);
var superBaby = new SuperHero('Gerber', 'slobbering so much', .25);

console.log(goldenPooch);
console.log(superBaby);
superBaby.sayName();

goldenPooch.maximizeEnergy;
console.log(goldenPooch);

superBaby.gainPower(3);
console.log(superBaby);


// Reflection
// What parts were most difficult about this exerise?
  //Remembering the appropriate syntax for dynamic classes was the most difficult part of this excercise.

// What parts felt most comfortable to you?
  //declaring variables and objects felt very comfortable for me. Concatenation and if statments felt very good too.

// What skills do you need to continue to practice before starting Mod 1?
  //I need to work on declaring objects using classes.
