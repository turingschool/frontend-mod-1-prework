/*
In the exercise below, write your own code where indicated
to achieve the desired result.

Make sure to run the file with node in your command line.
*/
class TransactionItem {
  constructor (amt, transactionDate, type) {
    this.amount = amt;
    this.date = transactionDate;
    this.type = type;
  }
}
var deposit = new TransactionItem (200, "02/03/2020", "deposit");
console.log(deposit.amount)
//-------------------
// Part 1: Syntax and Naming Conventions
//-------------------

// For each prompt:
  // Write a class skeleton
  // Create 2 object instances and store in variables
  // Log each variable to the console.
  // You do not need any properties at this time!!

// Prompt 1: Dog
//Skeleton for class:
//class Dog {}
//1st object instance: var Pet1 = new Dog
//2nd object instance: var Pet2 = new Dog
//console.log(Pet1)
//console.log(Pet2)

// Prompt 2: Snack
//Skeleton for class:
//class Snack{}
//1st object instance: var Snack1 = new Snack
//2nd object instance: var Snack2 = new Snack
//console.log(Snack1)
//console.log(Snack2)

// Prompt 3: Shirt
//Skeleton for class:
//class Shirt{}
//1st object instance: var Shirt1 = new Shirt
//2nd object instance: var Shirt2 = new Shirt
//console.log(Shirt1)
//console.log(Shirt2)

//-------------------
// Part 2: Properties
//-------------------

// For each prompt:
  // Write a class skeleton
  // Add a constructor method
  // Assign 3 properties (names and values of your choice) to each class
  // Create an object instance and store in variable
  // Log that variable to the console.

// Prompt 1: Dog
class Dog {
  constructor (nm, clr, brd) {
    this.name = nm;
    this.color = clr;
    this.breed = brd;
  }
}
var Dog1 = new Dog ("Jack", "white", "Mutt");
console.log(Dog1)
// Prompt 2: Snack
class Snack {
  constructor (nme, typ, cal) {
    this.name = nme;
    this.type = typ;
    this.calories = cal;
  }
}
var Snack1 = new Snack ("Lays Original", "chips", 120);
console.log(Snack1.calories)

// Prompt 3: Shirt
class Shirt {
  constructor (clr, sze, sleprc) {
    this.color = clr;
    this.size = sze;
    this.saleprice = sleprc;
  }
}
var Shirt1 = new Shirt ("Gray", "Medium", "$10");
console.log(Shirt1.saleprice)
//-------------------
// Part 3: Dynamic Properties
//-------------------

// For each prompt:
  // Write a class skeleton
  // Add a constructor method
  // Declare 3 parameters in the consutructor
  // Assign 3 properties (names and values of your choice), using the parameters
  // Create 2 object instances and store in variables (passing in different arguments)
  // Log those variables to the console.

// Prompt 1: Dog
class Pet {
  constructor (nm, clr, brd) {
    this.name = nm;
    this.color = clr;
    this.breed = brd;
  }
}
var Pet1 = new Pet ("Jack", "white", "Mutt");
var Pet2 = new Pet ("Sophie", "black", "Australian Kelpie")
console.log(Pet1.breed)
console.log(Pet2.name)
// Prompt 2: Snack
//class Snack {
// constructor ((nme, typ, cal) {
  //this.name = nme;
  //this.type = typ;
  //this.calories = cal;
//}
var Snack2 = new Snack("Beef Jerky", "Meat", "100")
var Snack3 = new Snack("Watermelon", "Fruit", "50")
console.log(Snack2)
console.log(Snack3.calories)
// Prompt 3: Shirt
//class Shirt {
  //constructor (clr, sze, sleprc) {
    //this.color = clr;
    //this.size = sze;
    //this.saleprice = sleprc;
  //}
//}
var Shirt2 = new Shirt ("Pink", "Large", "$15")
var Shirt3 = new Shirt ("White with Black Stripes", "Small", "$20")
console.log(Shirt2.saleprice)
console.log(Shirt3.size)
