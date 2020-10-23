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
  addLikes(newLikes) {
    this.numberOfLikes = this.numberOfLikes + newLikes;
  }
  addComment(newComment) {
    this.comments = this.comments.concat(newComment);
  }

};

var meanTweet = new Tweet("Troll", "I hate the environment", "12:20PM", 2, ["This is not true", "Why tweet this?"]);
console.log(meanTweet);
meanTweet.addLikes(5);
console.log(meanTweet);

meanTweet.addComment("no");
console.log(meanTweet);

var footballTweet = new Tweet("Sportsfan33", "Tom Brady is the best quaterback", "7:30AM", 50000, ["So true!", "He's the best!"]);
console.log(footballTweet);
footballTweet.addLikes(1);
footballTweet.addComment("He's getting old");
console.log(footballTweet);

var funFactTweet = new Tweet("Bill Nye", "Maine is the only state with a dead animal on it's license plate", "9:15AM",
40000, ["What animal is it?", "It's a lobster!"]);
console.log(funFactTweet);

funFactTweet.addLikes(2000);
funFactTweet.addComment("A dead animal?");
console.log(funFactTweet);
