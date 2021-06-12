/*
In the space below, add to the existing skeleton of a Tweet class.

- A tweet should have a (dynamic) author, content, timeStamp, numberOfLikes, and comments.
- A tweet should be able to increment the numberOfLikes and add to the list of comments.

Create several instances of your Tweet and log them to the console. Make sure the
tweet object instances _behave_ as expected.
*/

class Tweet {
  constructor(author, content, timeStamp, numberOfLikes, comments){
    this.author = author;
    this.content = content;
    this.timeStamp = timeStamp;
    this.numberOfLikes = numberOfLikes;
    this.comments = comments;
  }
  addComment() {
    this.comments.push("Only one more section!");
  }
  increaseLikes(){
    for (var likes = 0; likes >= this.numberOfLikes; likes++);
  }


};

var firstTweet = new Tweet ("Gabby Recny", "Damn this is hard", "6:39 AM", 2198, ["You got it", "You can do this", "I feel that!"]);
firstTweet.addComment();
console.log(firstTweet);

firstTweet.increaseLikes();
console.log(firstTweet);
