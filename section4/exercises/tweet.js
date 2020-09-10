/*
In the space below, add to the existing skeleton of a Tweet class.

- A tweet should have a (dynamic) author, content, timeStamp, numberOfLikes, and comments.
- A tweet should be able to increment the numberOfLikes and add to the list of comments.

Create several instances of your Tweet and log them to the console. Make sure the
tweet object instances _behave_ as expected.
*/

class Tweet {
  constructor( author, content, timeStamp, numberOfLikes, comments ) {
    this.author = author;
    this.content = content;
    this.timeStamp = timeStamp;
    this.numberOfLikes = 0;
    this.comments = 0;
  }
  liked() {
    this.liked = true;
    this.numberOfLikes++;
  }
  commented() {
    this.commented = true;
    this.comments++;
  }

}
var myTweet = new Tweet( "@nasa", "Space is hard, yo.", "14:02", "0", false )
console.log( "New tweet from " + myTweet.author + " at " + myTweet.timeStamp + ": " +
  myTweet.content + "\n" + "Likes: " + myTweet.numberOfLikes + ", Comments: " + myTweet.comments );

myTweet.liked();
console.log( "Liked tweet from " + myTweet.author + " at " + myTweet.timeStamp + ": " +
  myTweet.content + "\n" + "Likes: " + myTweet.numberOfLikes + ", Comments: " + myTweet.comments );

myTweet.commented();
console.log( "Commented and liked tweet from " + myTweet.author + " at " + myTweet.timeStamp + ": " +
  myTweet.content + "\n" + "Likes: " + myTweet.numberOfLikes + ", Comments: " + myTweet.comments );


// I'm not sure if I'm supposed to be able to call .liked and .commented more than once on this myTweet,
// but it doesn't seem to work. I think I'd have to use the current tweet to set a new var myTweet and then run
// those methods again?