/*
In the space below, add to the existing skeleton of a Tweet class.

- A tweet should have a (dynamic) author, content, timeStamp, numberOfLikes, and replies.
- A tweet should be able to increment the numberOfLikes and add to the list of replies.

Create several instances of your Tweet and log them to the console. Make sure the
tweet object instances _behave_ as expected.
*/

class Tweet {
  constructor(author,content, timeStamp, numberOfLikes) {
    this.author = author;
    this.content = content;
    this.timeStamp = timeStamp;
    this.numberOfLikes = numberOfLikes;
    this.replies = [];
  }
  like(){
    this.numberOfLikes ++;
    console.log("You have a new like " + this.numberOfLikes);
  }
  newReplies(replies) {
    this.replies.push(replies);
    console.log("New Comment: " + `"${this.replies}"`);
  }

  }
var tweet1 = new Tweet("Eva", " Hey guys im new to twiiter", "9:15pm", 10);
var tweet2 = new Tweet("Dobby", " Welcome ", "9:20pm", 2);

tweet1.like();
tweet2.like();

tweet1.newReplies("Hey whats up!");
tweet2.newReplies("Yo!!");

console.log(tweet1);
console.log(tweet2);
