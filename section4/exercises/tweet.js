/*
In the space below, add to the existing skeleton of a Tweet class.

- A tweet should have a (dynamic) author, content, timeStamp, numberOfLikes, and comments.✅
- A tweet should be able to increment the numberOfLikes and add to the list of comments.

Create several instances of your Tweet and log them to the console. Make sure the
tweet object instances _behave_ as expected.✅
*/

class Tweet {
  constructor(author, content, timeStamp, numberOfLikes, comments) {
    this.author = author;
    this.content = content;
    this.timeStamp = timeStamp;
    this.numberOfLikes = numberOfLikes;
    this.comments = comments;
  }
  likeTweet(numberOfLikes) {
    this.numberOfLikes++;
  }
  addComment(newComment) {
    this.comments.push(newComment);
  }
}

var testTweet = new Tweet("lkessell", "Snuggling with cat 😻", "6:55pm EST", 4, ["omg cute 🥰", "living the life"]);

console.log(testTweet);

testTweet.addComment("💚💚💚");
console.log(testTweet);

testTweet.likeTweet();
console.log(testTweet);

var bakingTweet = new Tweet("bakingbabe", "Nothing like fresh-baked cookies 🍪", "4:00pm MST", 12, ["Where's the recipe??"]);

console.log(bakingTweet);

bakingTweet.addComment("Yummmm");
console.log(bakingTweet);


for (var i = 0; i < 5; i++) {
  bakingTweet.likeTweet();
}
console.log(bakingTweet);
