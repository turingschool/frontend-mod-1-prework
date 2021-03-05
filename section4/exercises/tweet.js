/*
In the space below, add to the existing skeleton of a Tweet class.

- A tweet should have a (dynamic) author, content, timeStamp, numberOfLikes, and comments.
- A tweet should be able to increment the numberOfLikes and add to the list of comments.

Create several instances of your Tweet and log them to the console. Make sure the
tweet object instances _behave_ as expected.
*/

class Tweet {
  constructor(author, content, timeStamp, numberOfLikes, comments){
    this.author= author;
    this.content= content;
    this.timeStamp= timeStamp;
    this.numberOfLikes= numberOfLikes;
    this.comments= comments;
  }
  addLike (){
    this.numberOfLikes = this.numberOfLikes + 1
  }
  newComment(newComment){
    this.comments= this.comments + "," + newComment
  }
};

var tweet1 = new Tweet ("Claire", "Hello World!", "5:15pm 3/3/21", 2, "Hey you!")
var tweet2 = new Tweet ("Cheeto", "I write the greatest code.", "3:30am 12/5/20", 0, "No you don't")
var tweet3 = new Tweet ("Cheeto", "The greatest code anyone's ever seen.", "3:31am 12/5/20", 0, "Still no.")
console.log(tweet1)
console.log(tweet2)
console.log(tweet3)

tweet1.addLike()
console.log(tweet1)

tweet1.newComment("What's up")
console.log(tweet1)

tweet2.addLike()
console.log(tweet2)

for (var i=0; i<10; i++){
  tweet1.addLike(i);
}
console.log(tweet1)
