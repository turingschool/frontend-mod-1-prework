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

addComment() {
  this.comments.push("hahaha");
}


var tweet1 = new Tweet("Erica", "favorite tv show", "11:12 PM February 19, 2021", 12, ["me tooo", "hilarious", "omg yes"]);
console.log(tweet1);

tweet1.addLike();tweet1.addComment();
console.log(tweet1);

var tweet2 = new Tweet("Nathan", "food", "11:11 AM February 20, 2021", 30, ["yum", "feed me", "bring me some"]);
console.log(tweet2);

tweet2.addLike();tweet2.addComment();
console.log(tweet2);

var tweet3 = new Tweet("Erica", "arya pet", "12:00 PM February 14, 2021", 46, ["so cute", "i love her", "give her to me"]);
console.log(tweet3);

tweet3.addLike();tweet3.addComment();
console.log(tweet3);
