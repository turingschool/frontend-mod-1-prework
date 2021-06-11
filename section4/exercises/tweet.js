/*
In the space below, add to the existing skeleton of a Tweet class.

- A tweet should have a (dynamic) author, content, timeStamp, numberOfLikes, and comments.
- A tweet should be able to increment the numberOfLikes and add to the list of comments.

Create several instances of your Tweet and log them to the console. Make sure the
tweet object instances _behave_ as expected.
*/


class Tweet {
   constructor(author, content, timeStamp, comments) {
     this.author = author;
     this.content = content;
     this.timeStamp = timeStamp;
     this.comments = comments;
     this.numberOfLikes = 0;
   }
   addNumberOfLikes(newLikesNumber){
     var likesNumber = this.numberOfLikes + newLikesNumber;
     this.numberOfLikes = likesNumber;
   }
   addComments(newComments) {
     this.comments = this.comments.concat(newComments);
   }
};

var firstComment = ['Welcome to Twitter, Suz!'];
var secondComment = ['Happy to see you here!'];
var thirdComment = ['So glad you decided to join twitter!'];
var fourthComment = ['It is great you joined.']
var tweetOne = new Tweet ('Suz', 'This is my very first tweet!', '8:24 AM Jun 06, 2021', '');
tweetOne.addComments(firstComment);
tweetOne.addNumberOfLikes(4);
console.log(tweetOne);
tweetOne.addComments( " " + secondComment + " " + thirdComment );
tweetOne.addNumberOfLikes(9);
console.log(tweetOne);
tweetOne.addComments( " " + fourthComment);
tweetOne.addNumberOfLikes(17);
console.log(tweetOne);


//note to self: oncat for arrays / push for #s
