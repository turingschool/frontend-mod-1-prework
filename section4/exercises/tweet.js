/*
In the space below, add to the existing skeleton of a Tweet class.

- A tweet should have a (dynamic) author, content, timeStamp, numberOfLikes, and comments.
- A tweet should be able to increment the numberOfLikes and add to the list of comments.

Create several instances of your Tweet and log them to the console. Make sure the
tweet object instances _behave_ as expected.
*/

class Tweet {
  constructor(author, content, timeStamp, numberOfLikes, comments) {
    this.author = author
    this.content = content
    this.timeStamp = timeStamp
    this.numberOfLikes = numberOfLikes
    this.comments = comments
  }

  addLike() {
    this.numberOfLikes++
  }

  addComment(newComment) {
    this.comments.push(newComment)
  }
}

var tweetOne = new Tweet('@alia', 'Look at my tweet!', '8:30 PM September 12, 2020', 0, [])
var tweetTwo = new Tweet('@jon', 'This is a tweeeet', '1:45 AM September 10, 2020', 0, [])
var tweetThree = new Tweet('@oswin', 'Meow', '4:45 AM September 12, 2020', 250, [])

tweetOne.addLike();
console.log(tweetOne);

tweetTwo.addComment("wow!")
console.log(tweetTwo);

tweetTwo.addComment("my cats are so cute")
console.log(tweetThree);
