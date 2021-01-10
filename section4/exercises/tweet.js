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
  increaseNumberOfLikes(newNumber) {
    this.numberOfLikes += (newNumber)
  }
  addNumberOfComments(newComment) {
    this.comments.push(newComment)
  }
}

var Tweet1 = new Tweet ("Joe", "happy place", "12:03 PM", 5, ["Enjoy your time!"])
console.log(Tweet1)

Tweet1.increaseNumberOfLikes(4)
console.log(Tweet1.numberOfLikes)
Tweet1.addNumberOfComments("Looks like fun!")
console.log(Tweet1)

var Tweet2 = new Tweet ("Mary", "Beach Fun", "6:07 AM", 20, ["Wish I was there!"])
var Tweet3 = new Tweet ("Eustis", "Courage the Cowardly Dog", "4:03 PM", 150, ["Eustis Bad!"])
var Tweet4 = new Tweet ("Sophie", "Sleeping on the Couch", "1:24 PM", 41, ["She is so cute!"])
console.log(Tweet2)
console.log(Tweet3)
console.log(Tweet4)
