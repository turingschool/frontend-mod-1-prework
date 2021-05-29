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
    this.numberOfLikes = 0;
    this.comments = [];
  }
  addLike(){
    this.numberOfLikes++
  }
  addComment(comments){
    this.comments.push(comments)
  }
};

var tweet1 = new Tweet("natesheridan","This is a test tweet for the exercise", "05/22/2021 6:57PM")
tweet1.addLike();
tweet1.addLike();
tweet1.addComment("This is a test comment");
tweet1.addComment("This is another test comment!");
console.log(tweet1)

var tweet2 = new Tweet("larrydude" , "Yo, I am Larry, this is my first tweet", "05/13/2014 5:32AM")
tweet2.addLike();
tweet2.addLike();
tweet2.addLike();
console.log(tweet2)
