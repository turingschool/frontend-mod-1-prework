/*
In the space below, add to the existing skeleton of a Tweet class.

- A tweet should have a (dynamic) author, content, timeStamp, numberOfLikes, and comments.
- A tweet should be able to increment the numberOfLikes and add to the list of comments.

Create several instances of your Tweet and log them to the console. Make sure the
tweet object instances _behave_ as expected.
*/

class Tweet {
  constructor (author,content,timeStamp,numberOfLikes,comments) {
    this.author = author;
    this.content = content;
    this.timeStamp = timeStamp;
    this.numberOfLikes = numberOfLikes;
    this.comments = comments;
  }
}
var newPost = new Tweet("Jennifer","life update","10/27/20",0,0)
console.log(newPost);
var dayOldPost = new Tweet("Jennifer","life update","10/28/20",50,10)
console.log(dayOldPost);
