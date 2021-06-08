/*
In the space below, add to the existing skeleton of a Tweet class.

- A tweet should have a (dynamic) author, content, timeStamp, numberOfLikes, and comments.
- A tweet should be able to increment the numberOfLikes and add to the list of comments.

Create several instances of your Tweet and log them to the console. Make sure the
tweet object instances _behave_ as expected.
*/

class Tweet {
  constructor(author, content, timeStamp, numberOfLikes, comments){
    //comment is an Array
    this.author = author;
    this.content = content;
    this.timeStamp = timeStamp;
    this.numberOfLikes = numberOfLikes;
    this.comments = comments;
    }

    like(){
      this.numberOfLikes++;
    }
    leaveComment(newComment){
      this.comments.push(newComment);
    }
  }

var tweet1 = new Tweet("John","some cool stuff", "20:21pm", 2, ["comment1","comment2"])
console.log(tweet1);

tweet1.like();
tweet1.leaveComment("a new comment");
console.log(tweet1);
