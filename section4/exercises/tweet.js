/*
In the space below, add to the existing skeleton of a Tweet class.

- A tweet should have a (dynamic) author, content, timeStamp, numberOfLikes, and comments.
- A tweet should be able to increment the numberOfLikes and add to the list of comments.

Create several instances of your Tweet and log them to the console. Make sure the
tweet object instances _behave_ as expected.
*/

class Tweet {
  constructor(author, content, timeStamp, numberOfLikes, comments){
    this.author = author;
    this.content = content;
    this.timeStamp = timeStamp;
    this.numberOfLikes = numberOfLikes;
    this.comments = comments;
  }
  addComment() {
    this.comments.push("Only one more section!");
  }
  increaseLikes() {
    this.numberOfLikes++;
  }


};

var firstTweet = new Tweet ("Gabby Recny", "Damn this is hard", "6:39 AM", 2198, ["You got it", "You can do this", "I feel that!"]);
firstTweet.addComment();
console.log(firstTweet);

firstTweet.increaseLikes();
console.log(firstTweet);

var secondTweet = new Tweet("Joe Buddy", "I'm happy", "7:37 PM", 22, ["We can do it!", "I miss Ida", "Bananas ar great!"]);
secondTweet.addComment();
secondTweet.increaseLikes();
console.log(secondTweet);


var thirdTweet = new Tweet ("Banana Gram", "Yay cats", "4:20 AM", 8349, ["Weeee", "Tapestry", "Wood burns for fire"]);
thirdTweet.addComment();
thirdTweet.increaseLikes();
console.log(thirdTweet);
