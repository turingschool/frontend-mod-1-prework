/*
In the space below, add to the existing skeleton of a Tweet class.

- A tweet should have a (dynamic) author, content, timeStamp, numberOfLikes, and comments.
- A tweet should be able to increment the numberOfLikes and add to the list of comments.

Create several instances of your Tweet and log them to the console. Make sure the
tweet object instances _behave_ as expected.
*/

var comments = ['All', 'Previous', 'Comments', 'Here'];


class Tweet {
  constructor(author, content, timeStamp, numberOfLikes, comments) {
    this.author = author;
    this.content = content;
    this.timeStamp = timeStamp;
    this.numberOfLikes = numberOfLikes;
    this.comments = comments;
  }
  increaseLikes() {
    this.numberOfLikes = numberOfLikes+1;
  };
  decreaseLikes() {
    this.numberOfLikes = numberOfLikes-1;
  };
  addComment() {
    this.comments = comments.concat('New Comment');
  };
  showComments() {
    this.comments = comments;
  }
}

var tweet1 = new Tweet('Beth Meeker', 'Help! Tweeting!',
'6:28 AM・Jan 10, 2021', numberOfLikes=5);
tweet1.showComments();
tweet1.increaseLikes();
console.log(tweet1);

var tweet2 = new Tweet('Zach Amdurer', 'Now starts this point forward.',
'10:38 AM・Jan 10, 2021', numberOfLikes=33);
tweet2.decreaseLikes();
tweet2.addComment();
console.log(tweet2);

var tweet3 = new Tweet('Joanna Schwab', 'OMG What is happening?!',
'1:18 PM ・Jan 11, 2121', numberOfLikes=3);
tweet3.addComment();
tweet3.increaseLikes();
console.log(tweet3);

var tweet4 = new Tweet('Beth Meeker', '@JoannaLikesYou Let us know!',
'1:22 PM ・Jan 10, 2021', numberOfLikes=0);
tweet4.showComments();
tweet4.increaseLikes();
console.log(tweet4)
