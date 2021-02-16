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

  incrementLikes() {
    this.numberOfLikes += 150;
  }

  addComments() {
    this.comments.push('How do you drink your coffee black?!');
  }
}

var firstTweet = new Tweet('Sam Jones', 'Picture of cat wearing shirt', '1:23pm', 123, ['I have that same shirt.', 'I do not think this is very funny',
'you should take more photos with your cat']);

var secondTweet = new Tweet('Carmen Rosas', 'Picture of coffee with text', '7:36am', 201, ['You are up early', 'How much coffee do you drink in one day?',
'You are my fav person ever!']);

firstTweet.incrementLikes();
console.log(firstTweet);

secondTweet.addComments();
console.log(secondTweet);
