/*
In the space below, add to the existing skeleton of a Tweet class.

- A tweet should have a (dynamic) author, content, timeStamp, numberOfLikes, and comments.
- A tweet should be able to increment the numberOfLikes and add to the list of comments.

Create several instances of your Tweet and log them to the console. Make sure the
tweet object instances _behave_ as expected.
*/

class Tweet {
  constructor(auth, cont, tweetTime, numLikes, comments) {
    this.author = auth
    this.content = cont
    this.timeStamp = tweetTime
    this.numberOfLikes = numLikes
    this.comments = comments
  }
}

var snoop = new Tweet("Snoop Dogg", "Drop it like it's hot", "5pm", 150, "Wow you're so cool");
console.log(snoop);

var martha = new Tweet("Martha Stweart", "Let's cook!", "5:30pm", 100, "That looks yummy")
console.log(martha)

/*
class Burrito {
  constructor(protein, base, toppings) {
    this.protein = protein;
    this.base = base;
    this.toppings = toppings;
  }
changeProtein() {
  this.protein = "Pork";
}
addTopping() {
  this.toppings = "Guacamole";
}

  // ADD CODE
};
var veggie = new Burrito("beans", "rice", "veggies")
var steak = new Burrito("steak", "rice", "cheese")
var chicken = new Burrito("chicken", "rice", "cheese")

veggie.changeProtein();
veggie.addTopping();
steak.addTopping();

console.log(veggie)
console.log(steak)
*/
