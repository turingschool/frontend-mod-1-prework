/*
In the space below, add to the existing skeleton of a Tweet class.

- A tweet should have a (dynamic) author, content, timeStamp, numberOfLikes, and comments.
- A tweet should be able to increment the numberOfLikes and add to the list of comments.

Create several instances of your Tweet and log them to the console. Make sure the
tweet object instances _behave_ as expected.
*/

class Tweet {
  constructor(author, content, timeStamp, comments, numberOfLikes) {
    this.author = author;
    this.content = content;
    this.timeStamp = timeStamp;
    this.comments = comments;
    this.numberOfLikes = numberOfLikes;
  }

  addLike() {
    this.numberOfLikes += 1;
  }

  addComment(newComment) {
    this.comments.push(newComment);
  }
}


var tweet27 = new Tweet("steph2259", "Can't wait to start Turing", "10:23am 03/05/2021", ["I'm excited for you!", "When do you start?", "Good Luck!", "Can I come?"], 20);

console.log(tweet27);

tweet27.addLike();
tweet27.addComment("Turing School of Software and Design?");
console.log(tweet27);

var tweet28 = new Tweet("steph2259", "Look at these mountains! Wow!", "12:00pm 03/08/2021", ["Colorado is beautiful", "Where are you?", "Can I come?"], 22);
console.log(tweet28);

tweet28.addLike();
tweet28.addComment("Hey, I was there yesterday!");
console.log(tweet28);
