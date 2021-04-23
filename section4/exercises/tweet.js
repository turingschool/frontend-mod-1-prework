/*
In the space below, add to the existing skeleton of a Tweet class.

- A tweet should have a (dynamic) author, content, timeStamp, numberOfLikes, and comments.
- A tweet should be able to increment the numberOfLikes and add to the list of comments.

Create several instances of your Tweet and log them to the console. Make sure the
tweet object instances _behave_ as expected.
*/

class Tweet {
  constructor(author, content, time) {
    this.author = author;
    this.content = content;
    this.timeStamp = time;
    this.numberOfLikes = 0;
    this.comments = [];
  }
  addLikes() {
    this.numberOfLikes += 1;
  }
  addComment(comment) {
    this.comments.push(comment);
  }
}

var gradSchool = new Tweet('Daisy Jones','I got into graduate school!!! 🎉', 'April 19, 2021 3:55PM');
console.log(gradSchool);
gradSchool.addComment('Yay! Congrats');
gradSchool.addLikes();
gradSchool.addLikes();
gradSchool.addLikes();
gradSchool.addComment('There goes your social life 🤣');
gradSchool.addLikes();
console.log(gradSchool);

var soPissed = new Tweet('Angry Bob', 'My tweets keep getting blocked', 'April 19, 2021 4:06PM');
console.log(soPissed);
soPissed.addComment('😂');
console.log(soPissed);

var firstTweet = new Tweet('Jane', 'I\'m finally on Twitter!', 'April 19, 2021 4:10PM');
console.log(firstTweet);
firstTweet.addComment('Yay!');
firstTweet.addLikes();
console.log(firstTweet);
