/*
In the space below, add to the existing skeleton of a Tweet class.

- A tweet should have a (dynamic) author, content, timeStamp, numberOfLikes, and comments.
- A tweet should be able to increment the numberOfLikes (++) and add to the list of comments (.push).

Create several instances of your Tweet and log them to the console. Make sure the
tweet object instances _behave_ as expected.
*/

class Tweet {
  constructor(author, content, timeStamp, numberOfLikes, comments) {
    this.author = author;
    this.content = content;
    this.timeStamp = timeStamp;
    this.numberOfLikes = numberOfLikes;
    this.comments = comments;
  }
  addLikes() {
    this.numberOfLikes = this.numberOfLikes + 1;
 }
};

var tweet1 = new Tweet("Bobby","Me at the beach","04:38pm 06/11/2019", 23, ["Wow! It's so pretty!","Looking good, Bobby :)"]);
var tweet2 = new Tweet("Suzy", "Gettin' moneyyyy #payday", "09:12am 07/11/2019", 32, ["Get it!"]);
var tweet3 = new Tweet("Ronald McDonald", "Best burger EVER", "02:13am 08/11/2019", 3, ["Ron, why are you at McDonald's at 2am???", "Bring me back one!"]);
var tweet4 = new Tweet("Sven", "Here's my cat.", "4:30pm 09/11/209", 834, ["Sooo cute!", "OMG", "I'm ugly crying, he's so beautiful"]);
console.log(tweet1);
console.log(tweet2);
console.log(tweet3);
console.log(tweet4);

tweet1.addLikes();
console.log(tweet1);
