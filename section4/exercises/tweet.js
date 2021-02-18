/*
In the space below, add to the existing skeleton of a Tweet class.

- A tweet should have a (dynamic) author, content, timeStamp, numberOfLikes, and comments.
- A tweet should be able to increment the numberOfLikes and add to the list of comments.

Create several instances of your Tweet and log them to the console. Make sure the
tweet object instances _behave_ as expected.
*/

class Tweet {
  constructor(author, content, time, likes, comments) {
    this.author = author;
    this.content = content;
    this.timeStamp = time;
    this.numberOfLikes = likes;
    this.comments = comments;
  }

  addComment() {
    this.comments.push("They do exist!");
    }
  };

  var aliens = new Tweet("steve123", "Aliens aren't real.", "12:33AM", 23, ["prove it", "finally someone said it", "according to what source?"]);
  aliens.addComment();
  console.log(aliens);
