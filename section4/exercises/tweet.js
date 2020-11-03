/*
In the space below, add to the existing skeleton of a Tweet class.

- A tweet should have a (dynamic) author, content, timeStamp, numberOfLikes, and comments.
- A tweet should be able to increment the numberOfLikes and add to the list of comments.

Create several instances of your Tweet and log them to the console. Make sure the
tweet object instances _behave_ as expected.
*/

class Tweet {
constructor(author, content, time, likes, comments){
  this.author = author;
  this.content = content;
  this.timeStamp = time;
  this.numberLikes = likes;
  this.comments = comments;
}
likePost() {
  this.numberLikes += 1;
}
writeComment(comment) {
  this.comments.push(comment);
}
};
var tweet1 = new Tweet(`Lebron James`, `Man I'm so scared of Jamal Murray and the nuggets, hopefully I don't have to play them next year.`, `2:38 am`, `0`, [`shut up lebron`, `fix your hairline`] );

var tweet2 = new Tweet(`Jamal Murray`, `Mannnnnnn, Brons washed up #oldhead`, `12:20 pm`, 2817, [`#fax`, `nuggets 2021 champs!`] );

var tweet3 = new  Tweet(`Nikola Jokic`, `Is anyone else hungry?` `4:55 pm`, 100,000, [`Lose some weight Jokic`, `Trip Dub king!`]);

tweet1.likePost();
console.log(tweet1);
console.log(tweet2);
tweet3.writeComment(`Chipotle?`)
console.log(tweet3)
