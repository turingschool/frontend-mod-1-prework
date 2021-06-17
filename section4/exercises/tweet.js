/*
In the space below, add to the existing skeleton of a Tweet class.

- A tweet should have a (dynamic) author, content, timeStamp, numberOfLikes, and comments.
- A tweet should be able to increment the numberOfLikes and add to the list of comments.

Create several instances of your Tweet and log them to the console. Make sure the
tweet object instances _behave_ as expected.
*/

class Tweet {
  constructor(auth, cont, stamp, likes, cmnts) {
    this.author = auth;
    this.content = cont;
    this.timeStamp = stamp;
    this.numberOfLikes = likes;
    this.comments = cmnts;
  }

  likesCounter() {
    var likesCount = this.numberOfLikes
    this.numberOfLikes = (likesCount + 1)
  }

  nuevoComment() {
    var plusOneComment = this.comments
    this.comments = [plusOneComment, "This is the last comment."]
  }
};

var firstTweet = new Tweet("Me", "My first tweet.", "12:00pm, Yesterday", 10, ["Boring", "The New York Times raves; 'A Collossal Disaster'", "Meh"]);
console.log(firstTweet);

var secondTweet = new Tweet("Me Again", "My second tweet.", "12:00pm, Today", 2, ["Worse. Much worse.", "Where's the exit?", "Double meh"]);
console.log(secondTweet);

var thirdTweet = new Tweet("Not me?", "My...erm, someone else's third tweet.", "4:00am, Tomorrow (the FUTURE)", 99, ["Wait, how did this get in my feed?", "I'm too high for this...", "Huhmeh?"]);
console.log(thirdTweet);

var fourthTweet = new Tweet("Me, once more", "My LAST tweet, I promise.", "5:45pm, UNKNOWN DAY", 999999999999, ["Don't be fooled guys, he's not really leaving Twitter. He just wants attention", "He's finally gone for good! Celebrate!", "Hmm. Meh?"]);
console.log(fourthTweet);

thirdTweet.likesCounter();
console.log(thirdTweet);

thirdTweet.likesCounter();
console.log(thirdTweet);

fourthTweet.nuevoComment();
console.log(fourthTweet);
