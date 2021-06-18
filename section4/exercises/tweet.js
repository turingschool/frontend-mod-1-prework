/*
In the space below, add to the existing skeleton of a Tweet class.

- A tweet should have a (dynamic) author, content, timeStamp, numberOfLikes, and comments.
- A tweet should be able to increment the numberOfLikes and add to the list of comments.

Create several instances of your Tweet and log them to the console. Make sure the
tweet object instances _behave_ as expected.
*/

class Tweet {
  constructor(authors, contentVal, stamp, likes, commentNumber) {
    this.author = authors;
    this.content = contentVal;
    this.timeStamp = stamp;
    this.numberOfLikes = likes;
    this.comments = commentNumber;
    this.incrementLikes = false;
    this.listComments = false;
  }

  record() {
    this.incrementLikes = true;
    console.log("what?");

  }

  record() {
    this.listComments = true;
    console.log("what?");
  }

};



var minn = new Tweet("minn", "games", "1:50pm", 2, 10);
var elon = new Tweet("elon", "bitcoin", "3:00pm", 0, 123);
console.log(minn);
console.log(elon);

minn.record();
console.log(minn);
console.log(elon);
