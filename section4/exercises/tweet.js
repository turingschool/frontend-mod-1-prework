/*
In the space below, add to the existing skeleton of a Tweet class.

- A tweet should have a (dynamic) author, content, timeStamp, numberOfLikes, and comments.
- A tweet should be able to increment the numberOfLikes and add to the list of comments.

Create several instances of your Tweet and log them to the console. Make sure the
tweet object instances _behave_ as expected.
*/

class Tweet {
  constructor(author, content, timeStamp, numberOfLikes, comments){
    this.author = author;
    this.content = content;
    this.timeStamp = timeStamp;
    this.numberOfLikes = numberOfLikes;
    this.comments = comments;
  }
  addLike() {
    this.numberOfLikes++;
  }
  goingViral() {
    this.comments = this.comments * 1000;
  }
};

var myFirstTweet = new Tweet("Baby Coder", "Hello World!", "18:24:36", 0, 2)
console.log(myFirstTweet);

var secondTweetEver = new Tweet("Baby Coder", "Glad I joined after the Trump ban", "23:45:00", 6, 200)
console.log(secondTweetEver);

var helpTweet = new Tweet("NotSoBabyCoder", "Anyone looking to hire?", "08:12:59", 17, 4);
console.log(helpTweet);


myFirstTweet.addLike();
console.log(myFirstTweet);

secondTweetEver.goingViral();
console.log(secondTweetEver);

helpTweet.addLike();
console.log(helpTweet);
