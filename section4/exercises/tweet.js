/*
In the space below, add to the existing skeleton of a Tweet class.

- A tweet should have a (dynamic) author, content, timeStamp, numberOfLikes, and comments.
- A tweet should be able to increment the numberOfLikes and add to the list of comments.

Create several instances of your Tweet and log them to the console. Make sure the
tweet object instances _behave_ as expected.
*/

class Tweet {
  constructor(author, content, timeStamp, likes, comments) {
    this.author = author;
    this.content = content;
    this.timeStamp = timeStamp;
    this.numberOfLikes = likes;
    this.comments = comments;
  }

  addLikes(numberNewLikes) {
     this.numberOfLikes = this.numberOfLikes + numberNewLikes
  }

  addComments(comments) {
    this.comments.push("You were better when you were The Rock")
  }

};

var newTweet1 = new Tweet ("Janika", "Funny tweet", "4/8/21 @ 5:55 PM", 5, ["Best tweet ever!"]);
var newTweet2 = new Tweet ("Dwayne Johnson", "Watch my new movie!", "4/8/21 @ 9:30 PM", 4000, ["Wow!"]);
var newTweet3 = new Tweet ("Adam Sandler", "I'm hilarious", "4/8/21 @ 11:59 PM", 15, ["Not really"]);

newTweet1.addLikes(5);
console.log(newTweet1)

newTweet2.addLikes(1200);
newTweet2.addComments();
console.log(newTweet2)

newTweet3.addLikes(1);
console.log(newTweet3)
