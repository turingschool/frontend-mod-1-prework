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
    this.comments.push(comment)
  }
  likeTweet() {
    this.numberOfLikes = this.numberOfLikes + 1
  }
}

var tweetOne = new Tweet('Finely', 'I love walks!', '11:57 am', 15, ['Same here.', 'I prefer naps']);

tweetOne.likeTweet();
tweetOne.addComment('Walks are great!')
console.log(tweetOne);

var tweetTwo = new Tweet('Paige', 'I\'ve never written a tweet before.', '2:36 pm', 0, []);
tweetTwo.likeTweet();
tweetTwo.addComment('Welcome to Twitter!');
console.log(tweetTwo);

var tweetThree = new Tweet('Lupin', 'Remember to vote!', '3:15 pm', 504, ['Yes, it\s and important election year', 'Make sure to vote early.']);
tweetThree.addComment('I already voted!');
console.log(tweetThree);
