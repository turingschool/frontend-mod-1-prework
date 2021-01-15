/*
In the space below, add to the existing skeleton of a Tweet class.

- A tweet should have a (dynamic) author, content, timeStamp, numberOfLikes, and comments.
- A tweet should be able to increment the numberOfLikes and add to the list of comments.

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
incrementLikes() {
  this.numberOfLikes = 1 + this.numberOfLikes;
}
addComment() {
  this.comments.push("new comment");
}
}
var tweetOne = new Tweet ("Tim Jones", "I like turtles", "12:23 pm", 1, ["nice tweet","cool"]);
console.log(tweetOne)
tweetOne.incrementLikes();
console.log(tweetOne);
tweetOne.addComment();
console.log(tweetOne);

var tweetTwo = new Tweet ("Mark Smith", "So you're telling me a shrimp fried this rice?", "9:30 am", 598756, ["very original", "banger"]);
console.log(tweetTwo)
tweetTwo.incrementLikes();
console.log(tweetTwo);
tweetTwo.addComment();
console.log(tweetTwo);

var tweetThree = new Tweet ("Jonh Brown", "Idk what to make this tweet", "3:40 pm", 0, ["lame", "booo!"]);
console.log(tweetThree)
tweetThree.incrementLikes();
console.log(tweetThree);
tweetThree.addComment();
console.log(tweetThree);    
