/*
In the space below, add to the existing skeleton of a Tweet class.

- A tweet should have a (dynamic) author, content, timeStamp, numberOfLikes, and comments. √
- A tweet should be able to increment the numberOfLikes and add to the list of comments. √

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

  addLike(newLikes) {
   this.numberOfLikes += newLikes;
  // this.numberOfLikes++
  }

}

var newTweet1 = new Tweet("Nichele", "The snow is getting deeper!", 13.17, 7, ["It's getting deeper here too!"]);
  newTweet1.addLike(+1);
  console.log(newTweet1);

var newTweet2 = new Tweet("Jim", "I can't ride my bike in all this snow...", 13.42, 11, ["Time to get the fat tires!"]);
  newTweet2.addLike(+3);
  console.log(newTweet2);

var newTweet3 = new Tweet("Char", "The birdies are out of food!", 11.14, 5, ["Better fill up the feeder!"]);
  newTweet3.addLike(-1);
  console.log(newTweet3);
