// Challenge - See if you can follow the instructions and complete the exercise in under 30 minutes!

// Declare two variables - heroName AND specialAbility - set to strings

var heroName = "Captain Underpants";
var specialAbility = "wear underpants";

// Declare two variables - greeting AND catchphrase
//   greeting should be assigned to a string that uses concatenation to include the heroName
//   catchphrase should be assigned to a string that uses interpolation to include the specialAbility

var greeting = "Never fear, " + heroName + " is here!";
var catchphrase = `It's all fun and games until someone forgets to ${specialAbility}.`;

console.log(greeting);
console.log(catchphrase);

// Declare two variables - power AND energy - set to integers
var power = 91;
var energy = 19;

// Declare two variables - fullPower AND fullEnergy
//   fullPower should multiply your current power by 500
//   fullEnergy should add 150 to your current energy

var fullPower = power * 19;
var fullEnergy = energy + 150;

console.log(fullPower);
console.log(fullEnergy);

// Declare two variables - isHuman and identityConcealed - assigned to booleans

var isHuman = true;
var identityConcealed = false;

// Declare two variables - archEnemies AND sidekicks
//   archEnemies should be an array of at least 3 different enemy strings
//   sidekicks should be an array of at least 3 different sidekick strings

var archEnemies = ["Melvin Sneedly", "Professor Poopypants", "Wedgie Woman"];
var sidekicks = ["Diaper Dog", "this one", "that one"];

// Print the first sidekick to your console

console.log(sidekicks[0]);

// Print the last archEnemy to the console

console.log(archEnemies[2]);

// Write some code to add a new archEnemy to the archEnemies array

archEnemies.push("Mr. Krupp");

// Print the archEnemies array to console to ensure you added a new archEnemy

console.log(archEnemies);

// Remove the first sidekick from the sidekicks array

sidekicks.shift();

// Print the sidekicks array to console to ensure you added a new sidekick

/*I assume the above was intended to say "ensure you REMOVED"?*/

console.log(sidekicks);

// Create a function called assessSituation that takes three arguments - dangerLevel, saveTheDay, badExcuse
//   - dangerLevel should be an integer
//   - saveTheDay should be a string a hero would say once they save the day
//   - badExcuse should be a string a hero would say if they are too afraid of the dangerLevel
// Your function should include an if/else statement that meets the following criteria
//   - Danger levels that are above 50 are too scary for your hero. Any danger level that is above 50 should result in printing the badExcuse to the console
//   - Anything dangerLevel that is between 10 and 50 should result in printing the saveTheDay string to the console
//   - If the dangerLevel is below 10, it means it is not worth your time and should result in printing the string "Meh. Hard pass." to the console.

var assessSituation = function(dangerLevel, saveTheDay, badExcuse) {
  if (dangerLevel > 50) {
    console.log(badExcuse);
  } else if (dangerLevel <= 50 && dangerLevel >= 10) {
    console.log(saveTheDay);
  } else if (dangerLevel < 10){
    console.log("Meh. Hard pass.");
  }
}


//  dangerLevel = 99;
//  saveTheDay = "Here I come to save the day!";
//  badExcuse = "I need to, uh, return some videotapes...";


//Test Cases
var saveTheDay = 'Never fear, the Courageous Curly Bracket is here!';
var badExcuse = 'I think I forgot to lock up my 1992 Toyota Coralla. Be right back.';

assessSituation(99, saveTheDay, badExcuse);
assessSituation(21, saveTheDay, badExcuse);
assessSituation(3, saveTheDay, badExcuse);
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
  name: "Flying Purple People Eater",
  smell: "garlic",
  weight: 2000,
  citiesDestroyed: ["London", "Paris", "Tokyo", "New York"],
  luckyNumbers: [2, 7, 13],
  address: {
    number: "123",
    street: "Fake St",
    state: "New York",
    zip: "12345"
  }
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
// - Create the following class methods
//   - sayName, should print the hero's name to the console
//   - maximizeEnergy, should update the energyLevel to 1000
//   - gainPower, should take an argument of a number and INCREASE the powerLevel by that number

class SuperHero {
    constructor(name, superpower, age) {
      this.name = name;
      this.superpower = superpower;
      this.age = age;
      this.archNemesis = "The Syntax Error",
      this.powerLevel = 100,
      this.energyLevel = 50
    }
    sayName() {
      console.log(this.name);
    }
    maximizeEnergy() {
      this.energyLevel = 1000;
      console.log(this.energyLevel);
    }
    gainPower(number) {
      this.powerLevel += number;
      console.log(this.powerLevel);
    }
}



// - Create 2 instances of your SuperHero class

var mermaidMan = new SuperHero("Mermaid Man", "yelling at Spongebob", 82);
var barnacleBoy = new SuperHero("Barnacle Boy", "keeping Mermaid Man in check", 76);

console.log(mermaidMan);
console.log(barnacleBoy);

mermaidMan.sayName();
barnacleBoy.maximizeEnergy();
barnacleBoy.gainPower(34);

console.log(mermaidMan);
console.log(barnacleBoy);


// Reflection
// What parts were most difficult about this exerise?

/*I had to reread over the assessSituation function and test cases section a few times, but to be honest the only reason for that were  the phrasing of the exercise in a few key spots and the fact that different variable names were written interchangably, so that I had to go through and correct them all. After that it was pretty straightfoward and quick.
I also had a slight hesitation on the syntax for functions and objects,  but a quick note check was all it took, and those sections felt pretty easy overall.*/

// What parts felt most comfortable to you?
/*I was able to finish within 30 minutes with the exception of the confusion mentioned above. I would say variables, string tasks, arrays & the methods used here, if/else statements are all pretty comfortably in my muscle memory now.*/


// What skills do you need to continue to practice before starting Mod 1?
/*I think spending time getting fast with objects, classes, and functions in my muscle memory would best prepare me for Mod 1.*/
