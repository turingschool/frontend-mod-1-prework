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

  addLike() {
    this.numberOfLikes++;
  }

  unlike() {
    this.numberOfLikes--;
  }

  addComment(comment) {
    this.comments.push(comment);

  }

}

var morningTweet = new Tweet("ShawnM", "Just got my coffee!", "(12-29-2020T09:00:00Z)",
1, ["OMG that looks so good!", "What flavor is that?"]);
var afternoonTweet = new Tweet("ShawnM", "So hungry and I need food!",
"(12-29-2020T14:30:00Z)", 3, ["Go eat then!", "Me too man."]);
var eveningTweet = new Tweet("Shawn M", "So exhausted from work today....zzz",
"(12-29-2020T09:00:00Z)", 5, ["I feel that!", "Can I sleep forever??"]);

//Log the initial state of each tweet
console.log(morningTweet);
console.log(afternoonTweet);
console.log(eveningTweet);

//add 1 like to morningTweet
morningTweet.addLike();
//log the change in likes
console.log(morningTweet);
//subtract 1 like from afternoonTweet
afternoonTweet.unlike();
//log the change in likes
console.log(afternoonTweet);

//add a comment to afternoonTweet
afternoonTweet.addComment("OMG Me too!");
//log the tweet to the console
console.log(afternoonTweet);

//add a comment to afternoonTweet
afternoonTweet.addComment("<3");
//log the tweet to the console
console.log(afternoonTweet);
