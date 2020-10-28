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

  changeAuthor(newAuthor) {
    this.author = newAuthor
  }

  editTweet(updatedTweet) {
    this.content = updatedTweet
  }

  changeTimeStamp(newTimeStamp) {
    this.timeStamp = newTimeStamp
  }

  addLike() {
    this.numberOfLikes++
  }

  addComment(newComment) {
    this.comments.push(newComment)
  }
}

var emcosmeticPromo = new Tweet ('Michelle Phan', 'Dream Cushion new release this weekend', new Date(), 784, ['how cute', 'love it', 'excited'])
emcosmeticPromo.addLike()
emcosmeticPromo.addLike()
emcosmeticPromo.addComment('sign me up!')
console.log(emcosmeticPromo);

var gameGrumps = new Tweet ('GameGrumps', 'Hopegrumps or Despairgrumps???', new Date(), 6400, ['playing dangan', 'no wayyy', 'up on YT now'])
gameGrumps.changeAuthor('egoraptor')
gameGrumps.changeTimeStamp(new Date(2020,10,22))
console.log(gameGrumps);

var sarachu = new Tweet ('Sara Cheung', 'Check the link in my bio', new Date(), 4587, ['none'])
sarachu.editTweet('Check the link below')
console.log(sarachu);
