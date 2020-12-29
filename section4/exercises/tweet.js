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

var tweet1 = new Tweet ("Sarah", "Who wants to hear a daily new joke?", "Dec 12, 2020, 8:42am", 47, ["That's great!", "I do!"]);
console.log(tweet1);

tweet1.addLike();
console.log(tweet1);

var tweet2 = new Tweet ("Eric", "Mod1 prework is due soon!", "Jan 5, 2021, 6:00pm", 0, ["Hope I don't mess it up!", "I'm so nervous!"]);
console.log(tweet2);

tweet2.addComment("What if I fail??");
console.log(tweet2);

var tweet3 = new Tweet ("Alice", "Congrats on finishing Mod1 prework!", "Jan 7, 2021, 7:00am", 163, ["We did it!", "Praise Jesus!"]);
console.log(tweet3);

var tweet4 = new Tweet ("Ellen", "Welcome to Mod 1!", "Feb 1, 2021, 9:00am", 3026, ["Excited to get started!", "I'm going to be a coder!"]);
console.log(tweet4);
