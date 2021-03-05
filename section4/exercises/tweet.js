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
  // is there a way to have the string be inputed at the method? ex. celebrityPost.addComment("your so funny");?
  this.comments.push("Your so funny");
  }
addLike() {
  this.numberOfLikes++
  }
};
var celebrityPost = new Tweet("Britney Spears", "Her Chihuahua", "4:39", 400, ["you are amazing"]);
celebrityPost.addComment();
console.log(celebrityPost);
var gamerPost = new Tweet("Gandolf", "LOTRs", "8:09", 3, ["You have my sword"]);
gamerPost.addLike();
console.log(gamerPost);
var artPost = new Tweet("Famous Artist", "painting", "3:30", 4, ["Wow! Talent"])
artPost.addComment();
artPost.addLike();
console.log(artPost);
