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
//here with this 3 previous properties we are assigning dynamic values to the the properties of the constructor that is a fabric of objects.
     this.numberOfLikes = 0;
//With this previous lines of code we are creating 1 static property and assigning it a value of 0 to numberOfLikes.
   }
   addNumberOfLikes(newLike){
     var countLikes = this.numberOfLikes + newLike;
     this.numberOfLikes = countLikes;
//With this method we are creating a way to add the number of likes to our object by calling this method specifiying in the argument the number of newLikes we want our object to have.
   }
   addComments(newComment) {
     this.comments = this.comments.concat(newComment);
//With this method we are concatenating a new comment into the existent array.
   }
};

var elephants = ['Well said'];// we define a variable with a comment inside of an array.
var newTweet = new Tweet('Carlos', 'Cool tweet', '05/23/2021 13:00', 'previous comment 1 ');//we create an object instance called newTweet
newTweet.addComments(elephants);//we called the method to add the comment to the pre/existent array.
newTweet.addNumberOfLikes(4);// And here we call the method to count the number of likes
console.log(newTweet);// Here we log our new object made by our tweet factory.

var lions = ['Nice comment', 'Another nice comment'];
var newTweet2 = new Tweet('Carlos', 'Cool tweet2', '05/23/2021 13:10', 'original comment ');
newTweet2.addComments(lions);
newTweet2.addNumberOfLikes(90);
console.log(newTweet2);
