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
addComment(comment) {
  this.numberOfLikes ++;
  this.comments.push(comment);
}
};
var tweet1 = new Tweet('Sam', 'Going to the beach!', '6/8/21', 5, ['Have fun!', 'Jealous!']);
console.log(tweet1);
tweet1.addComment('Can I come?');
console.log(tweet1);
tweet1.addComment('Wear sunscreen!');
console.log(tweet1);

var tweet2 = new Tweet('Alex', 'Anyone want to go to the movies with me?', '6/1/21', 3, ['Im in!', "Sorry can't make it", 'What time?']);
console.log(tweet2);
tweet2.addComment('Can I bring my friend?');
console.log(tweet2);
tweet2.addComment('Which movie?');
console.log(tweet2);
