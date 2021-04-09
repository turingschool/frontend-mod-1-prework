/*
In the space below, add to the existing skeleton of a Tweet class.

- A tweet should have a (dynamic) author, content, timeStamp, numberOfLikes, and comments.
- A tweet should be able to increment the numberOfLikes and add to the list of comments.

Create several instances of your Tweet and log them to the console. Make sure the
tweet object instances _behave_ as expected.
*/


class Tweet {
  constructor (author, content, timeStamp, numberOfLikes, comments) {
    this.author = author;
    this.content = content;
    this.timeStamp = timeStamp;
    this.numberOfLikes = numberOfLikes;
    this.comments = comments;
  }
  addLike() {
    this.numberOfLikes++;
  }
  addComment(newComment) {
    this.comments.unshift(newComment);
  }
};

var tweet1 = new Tweet('Nina', 'video.987', '5:03 PM August 12th, 2020', 0, []);

var tweet2 = new Tweet('BobbyG', 'photo.2745', '5:16 AM August 7th, 2020', 0, []);

var tweet3 = new Tweet('Jeanette Real', 'video.baby-shower', '7:18 AM October 22nd, 2020', 0, []);

tweet1.addComment('Love this!');
tweet1.addComment('So Pretty!');
tweet1.addLike();
tweet1.addLike();
console.log(tweet1);

tweet2.addComment('You rock dude!');
tweet2.addComment('You\'re freaking hilarious!');
tweet2.addComment('Killin\' it man!');
tweet2.addLike();
tweet2.addLike();
tweet2.addLike();
console.log(tweet2);

tweet3.addComment('Awe, so sweet...');
tweet3.addComment('What a beautiful day!');
tweet3.addLike();
tweet3.addLike();
tweet3.addLike();
tweet3.addLike();
console.log(tweet3);
