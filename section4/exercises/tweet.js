/*
In the space below, add to the existing skeleton of a Tweet class.

- A tweet should have a (dynamic) author, content, timeStamp, numberOfLikes, and comments.
- A tweet should be able to increment the numberOfLikes and add to the list of comments.

Create several instances of your Tweet and log them to the console. Make sure the
tweet object instances _behave_ as expected.
*/
// Declared my class called, Tweet. This will be the class hwere all of the new "tweet" object instances will be stored.

// Final Code


class Tweet {
  constructor(author, content, timeStamp, numberOfLikes, comments) {
    this.author = author;
    this.content = content;
    this.timeStamp = timeStamp;
    this.numberOfLikes = numberOfLikes;
    this.comments = comments;
  }
  addComment(commentAdd) {
    this.comments.push(commentAdd);
  } 
  addLike(){
    this.numberOfLikes++
  }/*
  countLikes(likeCount) {
    console.log(numberOfLikes.length);
  }*/
};
var tweet1 = new Tweet("YoRoden", "Hello World! Check out my tweet-bot.", "04/20/2021 10:32am", 1, ["Sick tweet!"]);
tweet1.addComment("Dude!!! So sick!");
tweet1.addLike();
console.log(tweet1);

var tweet2 = new Tweet("Kim Kardashian", "Sup", "04/20/2021 12:50pm", 400000, ["OMG!!! You're GORGE!"]);
tweet2.addComment("fire");
tweet2.addLike();
console.log(tweet2);

// =================================================================================================================================================


/* SCRAMBLED CODE
class Tweet {
// declared a constructor and gave it the needed params for a tweet.
  constructor(author, content, timeStamp, newLike, comments) {
    this.author = author;
    this.content = content;
    this.timeStamp = timeStamp;
    this.totalLikes = newLike;
    this.comment = comments;
  }
  addComment(commentAdd) {
    this.comment.push(commentAdd);
  }

  //addLike(likeAdd){
    //this.totalLikes(totalLikes);
  //}
  //countLikes(likeCount) {
    //console.log(numberOfLikes.length);
  }
};

var tweet1 = new Tweet("YoRoden", "Hello World! Check out my tweet-bot.", "04/20/2021 10:32am", 1, ["Sick tweet!"]);
tweet1.addComment("Dude!!! So sick!");
//tweet1.addLike();
console.log(tweet1);

var tweet2 = new Tweet("Cooltweeter12", "Yo yo!", "04/20/2021 11:58am", 5, []);
tweet2.addComment("sooooo sick!");
//tweet2.addLike();
console.log(tweet2);
*/
