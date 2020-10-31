/*
In the space below, add to the existing skeleton of a Tweet class.

- A tweet should have a (dynamic) author, content, timeStamp, numberOfLikes, and comments.
- A tweet should be able to increment the numberOfLikes and add to the list of comments.

Create several instances of your Tweet and log them to the console. Make sure the
tweet object instances _behave_ as expected.
*/

class Tweet {
  constructor(author, content, time, likes, comments){
      this.author = author;
      this.contentType = content;
      this.timeStamp = time;
      this.numberOfLikes = likes;
      this.comments = comments;
  }
  addComment(newComment){
    this.comments += ',' + newComment;
  }
  addLike(){
    this.numberOfLikes ++;
  }
}
var surfVideo = new Tweet('@ProSurfer123', 'Video', '12:25', 12, ['This is sick!', 'wowwww']);
surfVideo.addComment('whatup stokers');
console.log(surfVideo);
surfVideo.addLike();
console.log(surfVideo);
var motivationalQuote = new Tweet('@GarryShandling', 'Text', '11:07', 88, ['Cant believe youre gone', 'This one hits home', 'First!']);
var sportsPost = new Tweet('@BostonRedSox', 'Image.link', '3:05', 909, ['Woohoo, cant wait for the season', 'fire emoji', '100 emoji']);
var customerService = new Tweet('@SonyPlaystation', 'Text', '1:04', 3, ['WTF sony im just tryna play some videogames and your servers are down', 'no surprise here', 'take your time, im still finishing up lunch']);
console.log(motivationalQuote);
console.log(sportsPost);
console.log(customerService);
