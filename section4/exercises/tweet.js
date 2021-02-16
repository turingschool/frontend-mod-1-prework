/*
In the space below, add to the existing skeleton of a Tweet class.

- A tweet should have a (dynamic) author, content, timeStamp, numberOfLikes, and comments.
- A tweet should be able to increment the numberOfLikes and add to the list of comments.

Create several instances of your Tweet and log them to the console. Make sure the
tweet object instances _behave_ as expected.
*/

class Tweet {
  constructor(author, content, timeStamp, numLikes, comments) {
    this.author = author;
    this.content = content;
    this.timeStamp = timeStamp;
    this.numberOfLikes = numLikes;
    this.comments = comments;
  }

  newLike() {
    this.numberOfLikes += 1;
  }

  newComment(comment) {
    this.comments.push(comment);
  }
}

var firstTweet = new Tweet('Zach', 'Who still uses Twitter in 2021?', '2/22/2021', 3, ['so true', 'meee', 'omg this']);
var secondTweet = new Tweet('Riley', 'Twitter needs less characters', '2/21/2021', 16, ['wow', 'So controversial'])
var thirdTweet = new Tweet('username23', 'Follow for follow?', '2/19/2021', 0, [])

console.log(firstTweet);
firstTweet.newLike();
console.log(firstTweet.numberOfLikes);

console.log(secondTweet);
secondTweet.newComment('Coding is so cool!');
console.log(secondTweet.comments);

console.log(thirdTweet);
