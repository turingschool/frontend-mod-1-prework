// Challenge - See if you can follow the instructions and complete the exercise in under 30 minutes!

// Declare two variables - heroName AND specialAbility - set to strings
var heroName = 'Kumo';
var specialAbility = 'Super Slobber';

// Declare two variables - greeting AND catchphrase
//   greeting should be assigned to a string that uses concatenation to include the heroName
//   catchphrase should be assigned to a string that uses interpolation to include the specialAbility
var greeting = "Here comes " + heroName + " !";
var catchphrase = `Beware of my ${specialAbility}!`;

// Declare two variables - power AND energy - set to integers
var power = 100;
var energy = 20;

// Declare two variables - fullPower AND fullEnergy
//   fullPower should multiply your current power by 500
//   fullEnergy should add 150 to your current energy
var fullPower = power * 500;
var fullEnergy = energy + 150

// Declare two variables - isHuman and identityConcealed - assigned to booleans
var isHuman = false;
var identityConcealed = true;


// Declare two variables - archEnemies AND sidekicks
//   archEnemies should be an array of at least 3 different enemy strings
//   sidekicks should be an array of at least 3 different sidekick strings
var archEnemies = ['Mr.Kitty', 'Sly Squirrel', 'The Mailman'];
var sidekicks = ['Mr.Pups', 'Bob', 'Birdman'];
// Print the first sidekick to your console
console.log(sidekicks[0]);

// Print the last archEnemy to the console
console.log(archEnemies[2]);

// Write some code to add a new archEnemy to the archEnemies array
archEnemies.push('Vexing Vacuum');

// Print the archEnemies array to console to ensure you added a new archEnemy
console.log(archEnemies);
// Remove the first sidekick from the sidekicks array
sidekicks.shift();

// Print the sidekicks array to console to ensure you added a new sidekick
Guessing this is a typo? Since the question above removed a sidekick
console.log(sidekicks);

// Create a function called assessSituation that takes three arguments - dangerLevel, saveTheDay, badExcuse
//   - dangerLevel should be an integer
//   - saveTheDay should be a string a hero would say once they save the day 
//   - badExcuse should be a string a hero would say if they are too afraid of the dangerLevel
function assessSituation(dangerLevel, saveTheDay, badExcuse) {  
}
 
// Your function should include an if/else statement that meets the following criteria
//   - Danger levels that are above 50 are too scary for your hero. Any danger level that is above 50 should result in printing the badExcuse to the console
//   - Anything dangerLevel that is between 10 and 50 should result in printing the saveTheDay string to the console
//   - If the dangerLevel is below 10, it means it is not worth your time and should result in printing the string "Meh. Hard pass." to the console.
function assessSituation(dangerLevel, saveTheDay, badExcuse){
  var saveTheDay = "Here I come to save the day!";
  var badExcuse = "Sorry you have the wrong person";
 if (dangerLevel > 50) {
 console.log(badExcuse);
 }
  if (dangerLevel > 10 && dangerLevel <50) {
    console.log(saveTheDay);
    } else if(dangerLevel < 10) {
      console.log('Meh. Hard pass');
    }
}
//Test Cases
var announcement = 'Never fear, the Courageous Curly Bracket is here!';
var excuse = 'I think I forgot to lock up my 1992 Toyota Coralla. Be right back.';
// assessSituation(99, announcement, excuse) > Should print - 'I think I forgot to lock up my 1992 Toyota Coralla. Be right back.'
//assessSituation(21, announcement, excuse) > should print - 'Never fear, the Courageous Curly Bracket is here!'
//assessSituation(3, announcement, excuse) > should print - "Meh. Hard pass."
function assessSituation(dangerLevel, announcement, excuse){
  var announcement = "Never fear, the Courageous Curly Bracket is here!";
  var excuse = 'I think I forgot to lock up my 1992 Toyota Coralla. Be right back.';
  if (dangerLevel > 50) {
   console.log(excuse); 
  } else if (dangerLevel > 10 && dangerLevel < 50) {
   console.log(announcement); 
  } else if (dangerLevel < 10) {
   console.log('Meh. Hard Pass'); 
  }
}
assessSituation(99, 'announcement', 'excuse');

// Declare a new variable - scaryMonster - assigned to an Object with the following key/values
//   - name (string)
//   - smell (string)
//   - weight (integer)
//   - citiesDestroyed (array)
//   - luckyNumbers (array)
//   - address (object with following key/values: number , street , state, zip)
var scaryMonster = {
 name: 'Godzilla',
 smell: 'burning sulfur',
 weightTons: 164000,
  citiesDestroyed: ['Tokyo', 'San Francisco', 'Las Vegas'],
  luckyNumbers: [5, 10, 12, 21],
  address: {
   number: 15,
    street: 'Ocean dr.',
    state: 'Hawaii',
    zip: 87640
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
    static archNemesis = "The Syntax Error";
    static powerLevel = 100;
    static energyLevel = 50;
  }
 }
// - Create the following class methods
//   - sayName, should print the hero's name to the console
//   - maximizeEnergy, should update the energyLevel to 1000
//   - gainPower, should take an argument of a number and INCREASE the powerLevel by that number
class SuperHero {
  constructor(name, superpower, age) {
  this.name = name;
    this.superpower = superpower;
    this.age = age;
    this.archNemesis = "The Syntax Error";
    this.powerLevel = 100;
    this.energyLevel = 50;
  }
  sayName() {
    console.log(this.name);
  }
  maximizeEnergy() {
   console.log(this.energyLevel * 20);
  }
  gainPower(power) {
   console.log(this.powerLevel * power);
  }
 }
// - Create 2 instances of your SuperHero class
var newHero = new SuperHero('Kumo', 'Super Slobber', 1);
console.log(newHero);
newHero.sayName();
newHero.maximizeEnergy();
newHero.gainPower(50);

var newHero2 = new SuperHero('Hachi', 'Super Yawn', 10);
console.log(newHero2);
newHero2.sayName();
newHero2.maximizeEnergy();
newHero2.gainPower(20);


// Reflection
// What parts were most difficult about this exerise?
Mostly just trying to remember how to write syntax.  The section of writing a if statement in a function was confusing at 
first because I wasn't sure if we needed to put the strings as parameters or the user adds the strings as input.
while creating a class exercise I had some difficulties on but with a lot of googling I believe I got it.

// What parts felt most comfortable to you?
Creating objects was fine for me.

// What skills do you need to continue to practice before starting Mod 1?
Review. Review. Review.  There are so many concepts it is easy to forget how to do them.  Mod1 hasn't even started and I find 
myself going back and forth through my notes.  But I believe with more practice and exercises it will come easier for me.

