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
    this.numberOflikes = numberOfLikes;
    this.comments = comments;
  }

addComment(addComment) {
    this.comments.push(addComment);
}
addNumberOfLikes(addNumberOfLikes) {
    this.numberOfLikes++;
  }
};

var tweet1 = new Tweet("Samantha", "I love Taco Tuesdays", "12:31pm", 22, ["So do I!", "Yum tacos!", "Me hungry now!"]);
console.log(tweet1);
tweet1.addNumberOfLikes();
console.log(tweet1);

var tweet2 = new Tweet("Matt", "Lilly is the best dog ever!", "08:12pm", 17, ["Yes she is!", "I love Lilly too!", "Awww"]);
console.log(tweet2);
tweet2.addComment("What about Silvy!?");
console.log(tweet2);
