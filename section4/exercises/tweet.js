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
  addLike() {
    this.numberOfLikes++;
  }
  addComment(newComment) {
    this.comments.push(newComment);
  }

};
var ernie = new Tweet("Ernie Ball", "You have to see this", Date(), 3, ["That is quite interesting", "where did you get it?", "Nvmd that, check this out!"]);
var jacob = new Tweet("Jacob Smith", "It's cold already", Date(), 1, ["yeah, my windshield is iced over!"]);
var emily = new Tweet("Emily May", "Where is my curling iron seriously", Date(), 0, ["um hopefully plugged in next to the bath"]);
jacob.addLike();
emily.addComment("Don't curl your fingers now!");
console.log(ernie);
console.log(jacob);
console.log(emily);
