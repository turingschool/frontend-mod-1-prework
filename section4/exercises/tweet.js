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

  addComment(newComment) {
    this.comments.push(newComment);
  }

};

var coolTweet = new Tweet('me', 'sup world', '12;34', 3, ['yo','hi','hey']);
console.log(coolTweet);

coolTweet.addLike();
console.log(coolTweet);

var radTweet = new Tweet('you', 'hey party people', '23:45', 3, ["let's party"]);
console.log(radTweet);

radTweet.addComment("I love to party!");
console.log(radTweet);

var badTweet = new Tweet('don', 'i am pooping my pants', '12:12', 0, ["go away"]);
console.log(badTweet);
