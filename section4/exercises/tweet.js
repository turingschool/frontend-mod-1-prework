/*
In the space below, add to the existing skeleton of a Tweet class.

- A tweet should have a (dynamic) author, content, timeStamp, numberOfLikes, and comments.
- A tweet should be able to increment the numberOfLikes and add to the list of comments.

Create several instances of your Tweet and log them to the console. Make sure the
tweet object instances _behave_ as expected.
*/

class Tweet {
  constructor(author, content, time, likes, comments) {
    this.author = author
    this.content = content
    this.timeStamp = time
    this.numberOfLikes = likes
    this.comments = comments
  }
addLike() {
    this.numberOfLikes = this.numberOfLikes + 1
  }
  addComment(comment) {
    this.comments.push(comment)
  }
}

var myFirstTweet = new Tweet('andrew', 'are all dogs dogs?', '2:43', 3, ["hmm, yes.", "well no"])
console.log(myFirstTweet)
myFirstTweet.addLike()
myFirstTweet.addComment("i can see it both ways")
console.log(myFirstTweet)

var mySecondTweet = new Tweet ('andrew', 'cat.gif', '11:59', 20000, ['love it!', 'so cute,'])
mySecondTweet.addComment('wow')
mySecondTweet.addComment('Holy cute!')
mySecondTweet.addLike(1)
console.log(mySecondTweet);
