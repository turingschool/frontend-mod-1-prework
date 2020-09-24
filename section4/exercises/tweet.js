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
  addComments(comments) {
    this.comments.push(comments);
  }
  addLike() {
    this.numberOfLikes++
  }

}

var tweet1 = new Tweet('@TrickyDickTyler', 'if you couldnt handle me at my fedora, you dont deserve me at my dad hat', '18 Jun', 12, []);

var tweet2 = new Tweet('@TrickyDickTyler', 'ugh fine i GUESS ill watch star trek in its entirety again instead of writing this paper', '25 Apr', 3, []);

var tweet3 = new Tweet('@TrickyDickTyler', 'Personal trainer: ok so what are your goals? Me: I wanna look like Thor at the beginning of Infinity War while eating like Thor at the beginning of Endgame', '9 Aug', 13, []);

console.log(tweet1);

tweet1.addComments('this is good content');
console.log(tweet1);

tweet2.addLike();
console.log(tweet2);
