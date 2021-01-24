/*
In the space below, add to the existing skeleton of a Tweet class.

- A tweet should have a (dynamic) author, content, timeStamp, numberOfLikes, and comments.
- A tweet should be able to increment the numberOfLikes and add to the list of comments.

Create several instances of your Tweet and log them to the console. Make sure the
tweet object instances _behave_ as expected.
*/

class Tweet {
  constructor(author, content, timeStamp, numberOfLikes, comment) {
  this.author = author;
  this.content = content;
  this.timeStamp = timeStamp;
  this.numberOfLikes = numberOfLikes;
  this.comment = comment;
  }
  authorName() {
    this.author = 'Maria DelSignore';
  }
  updateLikes() {
    this.numberOfLikes ++;
  }
  addComment1() {
    this.comment.unshift = 'perfect weather for a jog';
    this.numberOfLikes ++;
  }
  addComment2() {
    this.comment.unshift = 'lol, ridiculous';
    this.numberOfLikes ++;
  }
  addComment3() {
    this.comment.unshift = 'it also makes a really good taco meat';
    this.numberOfLikes ++;
  }
  addComment4() {
    this.comment.unshift = 'so excited to be back on track';
    this.numberOfLikes ++;
  }
};


var tweet1 = new Tweet(' ', 'Another day of beautiful weather', '1/18/21 2:12pm',
 33, ['CO for the win']);

var tweet2 = new Tweet(' ', 'My cat ran into the mirror again', '1/19/21 6:23pm',
 80, ['straight up cat shenanigans']);

var tweet3 = new Tweet(' ', 'Seitan can make a really delicious deli style turkey! who knew',
'1/20/21 7:08pm', 48, ['I just recently tried seitan, so good!']);

var tweet4 = new Tweet(' ', 'Yay for recommiting to the Paris Agreement',
 '1/21/21 11:40am', 71, ['Climate change IS real']);

tweet1.authorName();
tweet1.addComment1();
tweet1.updateLikes();
console.log(tweet1);

tweet2.authorName();
tweet2.addComment2();
tweet2.updateLikes();
console.log(tweet2);

tweet3.authorName();
tweet3.addComment3();
tweet3.updateLikes();
console.log(tweet3);

tweet4.authorName();
tweet4.addComment4();
tweet4.updateLikes();
console.log(tweet4);
