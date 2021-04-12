// Challenge - See if you can follow the instructions and complete the exercise in under 30 minutes!

// Declare two variables - heroName AND specialAbility - set to strings

var heroName = 'Nina Brissey';
specialAbility = 'empathize';

// Declare two variables - greeting AND catchphrase
//   greeting should be assigned to a string that uses concatenation to include the heroName
//   catchphrase should be assigned to a string that uses interpolation to include the specialAbility
var greeting = 'Hi my name is ' + heroName;
var catchphrase = `I\'m here to listen and ${specialAbility}!`;

// Declare two variables - power AND energy - set to integers
var power = 100;
var energy = 85;

// Declare two variables - fullPower AND fullEnergy
//   fullPower should multiply your current power by 500
//   fullEnergy should add 150 to your current energy
var fullPower = power * 500;
var fullEnergy = energy + 150;

// Declare two variables - isHuman and identityConcealed - assigned to booleans
var isHuman = true;
var identityConcealed = true;

// Declare two variables - archEnemies AND sidekicks
//   archEnemies should be an array of at least 3 different enemy strings
//   sidekicks should be an array of at least 3 different sidekick strings
var archEnemies = ['hate', 'evil', 'contempt'];
var sidekicks = ['love', 'compassion', 'kindess'];

// Print the first sidekick to your console
console.log(sidekicks[0]);

// Print the last archEnemy to the console
console.log(archEnemies[2]);

// Write some code to add a new archEnemy to the archEnemies array
archEnemies.push('jerk');

// Print the archEnemies array to console to ensure you added a new archEnemy
console.log(archEnemies);

// Remove the first sidekick from the sidekicks array
sidekicks.shift([0]);

// Print the sidekicks array to console to ensure you added a new sidekick
// Nina note - I think you mean remove
console.log(sidekicks);

// Create a function called assessSituation that takes three arguments - dangerLevel, saveTheDay, badExcuse
//   - dangerLevel should be an integer
//   - saveTheDay should be a string a hero would say once they save the day
//   - badExcuse should be a string a hero would say if they are too afraid of the dangerLevel

function assessSituation (dangerLevel, saveTheDay, badExcuse) {
  if (dangerLevel > 50) {
    console.log(badExcuse);
  }
  else if (dangerLevel >= 10 && dangerLevel <= 50) {
    console.log(saveTheDay);
  }
  else {
    console.log("Meh. Hard pass.");
  }
}
assessSituation (80, "I'm here to love.", 'That guy is scary!');

// Your function should include an if/else statement that meets the following criteria
//   - Danger levels that are above 50 are too scary for your hero. Any danger level that is above 50 should result in printing the badExcuse to the console
//   - Anything dangerLevel that is between 10 and 50 should result in printing the saveTheDay string to the console
//   - If the dangerLevel is below 10, it means it is not worth your time and should result in printing the string "Meh. Hard pass." to the console.

//Test Cases
var announcement = 'Never fear, the Courageous Curly Bracket is here!';
var excuse = 'I think I forgot to lock up my 1992 Toyota Coralla. Be right back.';

assessSituation(99, announcement, excuse) //> Should print - 'I think I forgot to lock up my 1992 Toyota Coralla. Be right back.'
assessSituation(21, announcement, excuse) //> should print - 'Never fear, the Courageous Curly Bracket is here!'
assessSituation(3, announcement, excuse) //> should print - "Meh. Hard pass."

// Declare a new variable - scaryMonster - assigned to an Object with the following key/values
//   - name (string)
//   - smell (string)
//   - weight (integer)
//   - citiesDestroyed (array)
//   - luckyNumbers (array)
//   - address (object with following key/values: number , street , state, zip)

var scaryMonster = {
  name:'boo',
  smell: 'peaches',
  weightInLbs: 2,
  citiesDestoyed: ['Los Angeles', 'New York', 'Des Moines'],
  luckyNumbers: [2, 2.5, 2.75],
  address: {
    number: 5113,
    street: '2nd St,',
    state: 'CA',
    zip: 22222
  }
}

//Nina note - at this point I was at 35 minutes.

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
  constructor (name, superpower, age) {
    this.name = name;
    this.superpower = superpower;
    this.age = age;
    this.archNemisis = 'The Syntax Error';
    this.powerLevel = 100;
    this.energyLevel = 50;
  }
  sayName () {
    console.log(this.name);
  }
  maximizeEnergy () {
    this.energyLevel = 1000;
  }
  gainPower(number) {
    this.powerLevel = this.powerLevel + number;
  }
}

// - Create the following class methods
//   - sayName, should print the hero's name to the console
//   - maximizeEnergy, should update the energyLevel to 1000
//   - gainPower, should take an argument of a number and INCREASE the powerLevel by that number

// - Create 2 instances of your SuperHero class
var mae = new SuperHero ('Mae', 'Kindness', 25);
var jeanette = new SuperHero ('Jeanette', 'Honest', 37);

mae.gainPower(20);
mae.maximizeEnergy();
mae.sayName();
console.log(mae);
jeanette.gainPower(50);
jeanette.maximizeEnergy();
jeanette.sayName();
console.log(jeanette);


//Reflection: What parts were most difficult about this exerise?

/* Syntax. I had a lot of syntax errors that I had to fix in order for the code to run. I also was unsure of what was supposed to be done in the 'Test Cases' section, so I came back to that. Tchnically speaking, the most difficult part of this challenge was creating the methods. We didn't cover this as much and so piecing things together was more difficult than I had anticipated. This took me over and hour and I know the goal was 30 minutes, so I really need to go back and work on building my functions/methods and paying closer attention to syntax.*/

// What parts felt most comfortable to you?
/* I would say I was most comfortable with the simpler concepts. Everything except for the methods felt good. Like I said, I did have to go back and correct my syntax, but I felt pretty good about debugging it. I ran it in node in terminal and then also ran it in Replit when I couldn't figure out the bug and was able to find the specific syntax error a little easier there. */

// What skills do you need to continue to practice before starting Mod 1?
/* I will continue to practice classes and methods without a doubt. I will also see what code challenges I can get my hands on that are similar to this one. I also realize that I need focus on individual pieces of the larger problems and solve that way, instead of getting overwhelmed by the bigger picture. */
