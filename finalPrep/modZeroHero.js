// Challenge - See if you can follow the instructions and complete the exercise in under 30 minutes!

// Declare two variables - heroName AND specialAbility - set to strings
var heroName = "Supernate";
var specialAbility = "Speedcoding";

// Declare two variables - greeting AND catchphrase
//   greeting should be assigned to a string that uses concatenation to include the heroName
//   catchphrase should be assigned to a string that uses interpolation to include the specialAbility
var greeting = "Hello I am " + heroName + " here to save the day!"
var catchphrase = `${heroName}  is the name,  ${specialAbility} is the game.`
console.log(catchphrase)
// Declare two variables - power AND energy - set to integers

var power = 18;
var energy = 100;

// Declare two variables - fullPower AND fullEnergy
//   fullPower should multiply your current power by 500
//   fullEnergy should add 150 to your current energy

var fullPower = power*500;
var fullEnergy = energy+150;

// Declare two variables - isHuman and identityConcealed - assigned to booleans

var isHuman = true;
var identityConcealed = false;


// Declare two variables - archEnemies AND sidekicks
//   archEnemies should be an array of at least 3 different enemy strings
//   sidekicks should be an array of at least 3 different sidekick strings

var archEnemies = ["Virusman" , "Mr. Bad", "Doghater"];
var sidekicks = ["Keyboardman" , "Gamerguy", "Speedgirl"];
// Print the first sidekick to your console

console.log(sidekicks[0])

// Print the last archEnemy to the console

console.log(archEnemies[2])

// Write some code to add a new archEnemy to the archEnemies array

archEnemies.push ("Enemyman")

// Print the archEnemies array to console to ensure you added a new archEnemy

console.log(archEnemies)

// Remove the first sidekick from the sidekicks array

sidekicks.shift()

// Print the sidekicks array to console to ensure you added a new sidekick
        //Never asked to add another sidekick?
        sidekicks.push("Superman")

console.log(sidekicks)

// Create a function called assessSituation that takes three arguments - dangerLevel, saveTheDay, badExcuse
//   - dangerLevel should be an integer
//   - saveTheDay should be a string a hero would say once they save the day 
//   - badExcuse should be a string a hero would say if they are too afraid of the dangerLevel

var dangerLevel = 0;
var saveTheDay = "We saved the day!";
var badExcuse = "Supernate is not feeling too super today! ;(";
var mehMsg = "Meh, hard pass."

function assessSituation(dangerLevel){
    if (dangerLevel >= 50) {
        console.log(badExcuse);
    }
    else if (dangerLevel < 50 && dangerLevel > 10) {
        console.log(saveTheDay);
    }
    else if (dangerLevel < 10) {
        console.log(mehMsg);
    }
}

// Your function should include an if/else statement that meets the following criteria
//   - Danger levels that are above 50 are too scary for your hero. Any danger level that is above 50 should result in printing the badExcuse to the console
//   - Anything dangerLevel that is between 10 and 50 should result in printing the saveTheDay string to the console
//   - If the dangerLevel is below 10, it means it is not worth your time and should result in printing the string "Meh. Hard pass." to the console.

console.log("Danger level - 1");
assessSituation(1);

console.log("Danger level - 20");                //TEST LOGS
assessSituation(20);

console.log("Danger level - 52");
assessSituation(52);

//Test Cases
var announcement = 'Never fear, the Courageous Curly Bracket is here!';
var excuse = 'I think I forgot to lock up my 1992 Toyota Coralla. Be right back.';
// assessSituation(99, announcement, excuse) > Should print - 'I think I forgot to lock up my 1992 Toyota Coralla. Be right back.'
//assessSituation(21, announcement, excuse) > should print - 'Never fear, the Courageous Curly Bracket is here!'
//assessSituation(3, announcement, excuse) > should print - "Meh. Hard pass."

        //I understand how to do this,^^ but if the badExcuse and saveTheDay variable is constant, I don't see the need for adding the arguments inside the call to function.

// Declare a new variable - scaryMonster - assigned to an Object with the following key/values
//   - name (string)
//   - smell (string)
//   - weight (integer)
//   - citiesDestroyed (array)
//   - luckyNumbers (array)
//   - address (object with following key/values: number , street , state, zip)
var scaryMonster ={
    name: "Mr Scary",
    smell: "extra stinky",
    weight: 300,
    citiesDestroyed: ["Denver","San Francisco","New York"],
    luckyNumbers: ["21","7","68"],
    address: {
        number: "2100",
        street: "Object St.",
        state: "Colorado",
        zip: "80123"
    }

}
console.log(scaryMonster)


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
    constructor(name, superpower, age){
        this.name = name;
        this.superpower = superpower;
        this.age = age;
        this.archNemesis = "The Syntax Error";
        this.powerLevel = 100;
        this.energyLevel = 50;
    }
    sayName(){
    console.log("My name is " + this.name + " and I am here to save the day!")
    }

    maximizeEnergy(){
        var energyLevel =  1000;
        console.log("Energy level is " + energyLevel);
    }

    gainPower(powerAddon){
        var powerLevel = this.powerLevel+powerAddon;
        console.log("You have added " + powerAddon + " to " + this.name + "'s power level! He/She now has a " + powerLevel + " power level!" )
    }

}
var Superman = new SuperHero("Superman" , "Superstrength, etc..", "35")
console.log(Superman);

//check Functionality of methods.
Superman.gainPower(200);
Superman.sayName();
Superman.maximizeEnergy();

//declare second instance of superhero
var Superwoman = new SuperHero("Superwoman", "Precognition, etc.", "39")
Superwoman.gainPower(1000);
Superwoman.maximizeEnergy();
Superwoman.sayName();


// Reflection
// What parts were most difficult about this exerise?
/*
Combining all the instructions that we have used in the past was the hardest part. I need to study more, and thats what I plan to do. For most of the steps in this exercise,
I had to go back and check what I did in the past exercise and also google something. Although that didn't slow me down because I knew exactly where to look, I do want to get better
at remembering what I learned and to do that I need to get in the habit of coding random things for fun I think. By far compared to other steps, creating the class was the hardest to
remember. Mainly just the syntax of it all. I understand how they work, but still need some work on remembering how the computer thinks they should work. 
*/

// What parts felt most comfortable to you?

//Defining variables is basically engraved in my brain at this point including objects. They make sense to me every time.

// What skills do you need to continue to practice before starting Mod 1?

// Mainly just remembering syntax things I think. Depending on feedback I get I am sure there are other things I can work on like better variable names maybe? All in all, the main
// thing I would like to focus on practice is general syntax and terminology before starting Mod 1.

