// Challenge - See if you can follow the instructions and complete the exercise in under 30 minutes!

// Declare two variables - heroName AND specialAbility - set to strings

var heroName = "Wonder Woman";
var specialAbility = " Super Strength";

// Declare two variables - greeting AND catchphrase
//   greeting should be assigned to a string that uses concatenation to include the heroName
//   catchphrase should be assigned to a string that uses interpolation to include the specialAbility

var greeting = ("Hello," + heroName + "!");
var catchPhrase = "It's Not About What You Deserve; It's About What You Believe.";

// Declare two variables - power AND energy - set to integers

var power = 8;
var energy = 7;

// Declare two variables - fullPower AND fullEnergy
//   fullPower should multiply your current power by 500
//   fullEnergy should add 150 to your current energy

var fullPower = (power * 500)
var fullEnergy = (energy + 150)

// Declare two variables - isHuman and identityConcealed - assigned to booleans
var isHuman = true;
var identityConcealed = false;

// Declare two variables - archEnemies AND sidekicks
//   archEnemies should be an array of at least 3 different enemy strings
//   sidekicks should be an array of at least 3 different sidekick strings

var archEnemies = ["Ares", "Cheetah", "Circe"];
var sideKicks = ["Steve Trevor", "Cassie", "Etta"];

// Print the first sidekick to your console
console.log(sideKicks[0])

// Print the last archEnemy to the console
console.log(archEnemies[2])

// Write some code to add a new archEnemy to the archEnemies array
archEnemies.push("Hades");

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
function assessSituation(dangerLevel, saveTheDay, badExcuse){
  if (dangerLevel > 50){
    console.log(badExcuse);
  } else if (dangerLevel < 10){
    console.log("Meh. Hard pass.");
  } else {
    console.log(saveTheDay);
  }
};

assessSituation(55, "At your service!", "Going to have to call in back up for this one");
assessSituation(12, "The hero Gotham needs.", "I forgot I have to feed my cat");
assessSituation(4, "I got this!", "Gotta run, sorry.")



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
  name: "Big Foot",
  smell: "musty",
  weight: 1000,
  citiesDestroyed: 5,
  luckyNumbers: [3, 16, 9],
  address: {
    number: 122,
    street: "Mulberry Street",
    state: "Colorado",
    zip: 11021
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

// - Create the following class methods
//   - sayName, should print the hero's name to the console
//   - maximizeEnergy, should update the energyLevel to 1000
//   - gainPower, should take an argument of a number and INCREASE the powerLevel by that number

  class superHero {
    constructor(name, superpower, age){
      this.name = name;
      this.superpower = superpower;
      this.age = age;
      this.archNemesis = "The Syntax Error";
      this.powerLevel = 100;
      this.energyLevel = 50;
    }

    sayName() {
      console.log(name)
    }

    maximizeEnergy(){
      this.energyLevel = this.energyLevel + 950
    }

    gainPower(powerNumber) {
      this.powerLevel = this.powerLevel + powerNumber;
    }
  }

// - Create 2 instances of your SuperHero class

var batman = new superHero ("Batman", "flying", 30)
var superman = new superHero ("Superman", "Super strength", 35)

batman.gainPower(50);
console.log(batman);

superman.maximizeEnergy();
console.log(superman);

// Reflection
// What parts were most difficult about this exerise?

// I had difficulty with the class methods. That concept has been difficult to fully understand for me.

// What parts felt most comfortable to you?

// I was able to complete the variables and variables functions piece easily. I was also more comfortable with creating an object and class,
// since I have done that work most recently.

// What skills do you need to continue to practice before starting Mod 1?

// Before Mod 1 I would like to work more on speed and syntax accuracy. I did not finish this assignment in 30 minutes, but I think that is a great goal.
// I need to review and solidify a lot of the information within the prework so that I can hit the ground running on the first day of Mod 1.
// Improving my note taking for concepts in Mod 1 prework could help with this, as well as finding more exercises similar to this one.
// Even with a couple of weeks between starting and finishing the prework, I have forgotten some concepts.
// Making sure those stick in my memory is what I would like to practice.
