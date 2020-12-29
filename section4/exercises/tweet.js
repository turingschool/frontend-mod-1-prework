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
 addLikes() {
   this.numberOfLikes++;
 }
 addComments(){
   this.comments.push("Puppies are like babbies");
 }
}

var dogtweet = new Tweet("alex", "look at this cool pupper", "3:47", 35, ["adorable", "little nugget", "little woof"])

console.log(dogtweet);
dogtweet.addComments();
console.log(dogtweet);

var challengeTweet = new Tweet("me", "give me 200 likes and i will eat whole cake", "4;56", 196, ["don't you dare", "here you go"," i want to see it"]);

console.log(challengeTweet);

challengeTweet.addLikes();

console.log(challengeTweet);

var sadTweet = new Tweet("me", "still working on homework", "1;02", 10, ["you are doing great", "keep pushing"]);

console.log(sadTweet);
