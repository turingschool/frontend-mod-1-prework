/*
In the space below, add to the existing skeleton of a Tweet class.
//DONE
- A tweet should have a (dynamic) author, content, timeStamp, numberOfLikes, and comments.
//DONE
- A tweet should be able to increment the numberOfLikes and add to the list of comments.
//
Create several instances of your Tweet and log them to the console. Make sure the
tweet object instances _behave_ as expected.
*/

class Tweet {
  constructor (author, content, time, likes, comments) {
    this.author = author;
    this.content = content;
    this.timeStamp = time;
    this.numberOfLikes = likes;
    this.comments = comments;
  }
  addLikes() {
    this.numberOfLikes += 1;
  }
  addComment(response) {
    this.comments.push(response);
  }
}

var firstTweet = new Tweet ("AtrophyLife", "My first ever tweet!", "9:01am", 0, []);
console.log(firstTweet);

firstTweet.addLikes();
console.log(firstTweet);

firstTweet.addLikes();
console.log(firstTweet);

var secondTweet = new Tweet ("AtrophyLife", "My second tweet!", "9:15am", 0, []);
console.log(secondTweet);

secondTweet.addComment("Your first tweet was better.");
console.log(secondTweet);

secondTweet.addComment("Welcome to the best free website in the world");
console.log(secondTweet);
