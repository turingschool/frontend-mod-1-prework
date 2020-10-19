/*
In the space below, add to the existing skeleton of a Tweet class.

- A tweet should have a (dynamic) author, content, timeStamp, numberOfLikes, and comments.
- A tweet should be able to increment the numberOfLikes and add to the list of comments.

Create several instances of your Tweet and log them to the console. Make sure the
tweet object instances _behave_ as expected.
*/

class Tweet {
  constructor(author, content, timeStamp, numberOfLikes, comment) {
    this.author = author;
    this.conent = content;
    this.timeStamp = timeStamp;
    this.numberOfLikes = numberOfLikes;
    this.comment = comment;

  }
  likePost() {
    return this.numberOfLikes += 1;
  }
  addComment(comment) {
    return this.comment.push(comment)
  }
}

var tweetLBJ = new Tweet('LeBron James', 'We\'re the NBA champs!', '11:07 PM October 11, 2020', 386902, []);
var tweetFP = new Tweet('Florench Pugh', 'In the mood for a movie tonight.', '08:07 PM October 15, 2020', 110111, []);
var tweetEM = new Tweet('Elon Musk', '[something outrageous]', '12:32 PM October 18, 2020', 321292, []);
var tweetGT = new Tweet('Greta Thunberg', '#FaceTheClimateEmergency' , '10:41 AM October 17, 2020', 197099, []);
var tweetAA = new Tweet('Ari Aster', 'I don\'t know what\'s scarier: my movies or real life.', '09:17 PM September 29, 2020', 9874, []);

tweetLBJ.likePost();
tweetLBJ.likePost();
tweetLBJ.likePost();
tweetLBJ.likePost();
tweetAA.addComment('Defintely real life, but Hereditary is a close second.');
console.log(tweetLBJ);
console.log(tweetAA);
console.log(tweetEM);
console.log(tweetFP);
console.log(tweetGT);
