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
    this.time = timeStamp;
    this.likes = numberOfLikes;
    this.comments = comments;
  }
  addComment(comment) {
    this.comments.push(comment);
  }
  increaseLikes() {
    return this.addLikes() ;
  }
  addLikes() {
    return this.likes++;
  }
}

var tweetOne = new Tweet("Eli123", "Skiing is arguably the best winter sport", "02/16/21, 5:25PM", 21, ["Definitely!", "No way"]);
tweetOne.addComment("This looks amazin!");
tweetOne.increaseLikes();
console.log(tweetOne);

var tweetTwo = new Tweet("JS1225", "Look how cute my pup is!", "02/12/21, 9:35 AM", 43, ["Adorable!", "Can I steal him?!"]);
tweetTwo.addComment("<3");
tweetTwo.increaseLikes();
console.log(tweetTwo);
