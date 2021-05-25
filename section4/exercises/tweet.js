/*
In the space below, add to the existing skeleton of a Tweet class.
- A tweet should have a (dynamic) author, content, timeStamp, numberOfLikes, and comments.
- A tweet should be able to increment the numberOfLikes and add to the list of comments.
Create several instances of your Tweet and log them to the console. Make sure the
tweet object instances _behave_ as expected.
*/
class Tweet {

   constructor(author, content, timeStamp) {
     this.author = author;
     this.content = content;
     this.timeStamp = timeStamp;
//here with this 3 previous properties we are assigning dynamic values to the the properties of the constructor that is a fabric of objects.
     this.numberOfLikes = 0;
     this.comments = [];
//With this 2 previous lines of code we are creating 2 new properties and assigning it a value of 0 to numberOfLikes and an empty array to comments.
   }
   addNumberOfLikes(){
     this.numberOfLikes = ++this.numberOfLikes;
//With this method we are creating a counter to add the number of likes every time we create and object and call this method.
   }
   addComments(newComment) {
     this.comments = this.comments.concat(newComment);
//With this method we are concatenating a new comment into the existent array.
   }
};

var elephants = ['Well said'];// we define a variable with a comment inside of an array.
var newTweet = new Tweet('Carlos', 'Cool tweet', '05/23/2021 13:00');//we create an object instance called newTweet
newTweet.addComments(elephants);//we called the method to add the comment to the pre/existent array.
newTweet.addNumberOfLikes();// And here we call the method to count the number of likes
console.log(newTweet);// Here we log our new object made by our tweet factory.

var lions = ['Nice comment', 'Another nice comment'];
var newTweet2 = new Tweet('Carlos', 'Cool tweet2', '05/23/2021 13:10');
newTweet2.addComments(lions);
newTweet2.addNumberOfLikes();
console.log(newTweet2);
