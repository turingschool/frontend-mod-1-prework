/*
In the space below, add to the existing skeleton of a Tweet class.

- A tweet should have a (dynamic) author, content, timeStamp, numberOfLikes, and comments.
- A tweet should be able to increment the numberOfLikes and add to the list of comments.

Create several instances of your Tweet and log them to the console. Make sure the
tweet object instances _behave_ as expected.
*/

class Tweet {
  constructor (author, content, timeStamp, numberOfLikes, comments) {
    this.author = author;
    this.content = content;
    this.timeStamp = timeStamp;
    this.numberOfLikes = numberOfLikes;
    this.comments = comments;
  }
  addLikes() {
    this.numberOfLikes++;

  }
  addComments(comments) {
    this.comments.push(comments);
  }

}

var tweet1 = new Tweet("Jim", "The snow looks lovley!", 10.34, 5, ["Great picture"]);
console.log(tweet1);

var tweet2 = new Tweet("Fred", "I need shoes for the snow", 10.45, 12, ["Your feet look cold"]);
console.log(tweet2);

var tweet3 = new Tweet("Wilma", "I'm going to need some shoes as well", 11.01, 15, []);
console.log(tweet3);

tweet1.addLikes();
console.log(tweet1);

tweet2.addComments("You're going to get frostbite!");
console.log(tweet2);

tweet3.addLikes();
console.log(tweet3);

tweet3.addComments("I have an extra pair");
console.log(tweet3);
