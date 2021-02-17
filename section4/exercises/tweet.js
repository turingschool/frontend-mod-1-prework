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
  addLike() {
    this.likes++
  }
  addComment(comment) {
    this.comments.push(comment)
  }
}

// Construct first new tweet instances
var tweet1 = new Tweet("Kat White", "orange man bad", "17:52", 3, ['Hi!', 'Hello!', 'Welcome!']);

  tweet1.addLike()
  tweet1.addComment('Howdy')

console.log(tweet1);

// Construct second new tweet instance
var tweet2 = new  Tweet("Sally James", "politics", "18:21", 6, ['No way!', 'omg', 'lol']);

  tweet2.addLike()
  tweet2.addComment('I Love You')

console.log(tweet2);

// Construct second new tweet instance
var tweet3 = new Tweet ("Sheila Hurmis", "Animal Welfare", "13:12", 476, ['I love dogs', 'My dog is like my child', 'live, laugh, love']);

tweet3.addLike()
tweet3.addComment('cats are better than dogs')

console.log(tweet3);
