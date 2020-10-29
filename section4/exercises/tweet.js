/*
In the space below, add to the existing skeleton of a Tweet class.

- A tweet should have a (dynamic) author, content, timeStamp, numberOfLikes, and comments.
- A tweet should be able to increment the numberOfLikes and add to the list of comments.

Create several instances of your Tweet and log them to the console. Make sure the
tweet object instances _behave_ as expected.
*/

class Tweet {
  constructor(auth, cont, likes, comment) {
    this.author = auth;
    this.content = cont;
    this.numberOfLikes = likes;
    this.comments = [comment];
  }

  addLikes() {
    this.numberOfLikes++;
  }
  addComment(comment) {
    this.comments.unshift(comment)
  }
}

var tweetOne = new Tweet("Aaron", "This is Great content! I swear.", 0, "first Tweet.");
console.log(tweetOne);

tweetOne.addLikes();
tweetOne.addLikes();
tweetOne.addLikes();
console.log(tweetOne);

tweetOne.addComment("This is a new comment");
console.log(tweetOne);

var tweetTwo = new Tweet("Amie", "I am the best puppy ever!", 1, "Second Tweet.");
tweetTwo.addComment("Add one comment.");
tweetTwo.addComment("Add two comment.");
tweetTwo.addComment("Add three comment.");
tweetTwo.addLikes();
console.log(tweetTwo);

var tweetThree = new Tweet("Family", "It is time for dinner.", 0, "third tweet");
tweetThree.addComment("On my way home now!");
tweetThree.addLikes();
tweetThree.addComment("what is for dinner?");
tweetThree.addLikes();
tweetThree.addComment("Burritos!!!");
tweetThree.addLikes();
tweetThree.addComment("Yes my fav.");
tweetThree.addLikes();
console.log(tweetThree);
