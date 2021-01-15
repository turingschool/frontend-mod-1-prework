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
  
    updateLikes() {
        this.numberOfLikes++;
    }
    updateComments(){
        this.comments = this.comments + [" Another comment"];
    }
}

var tweet1 = new Tweet("Barack Obama", "Words from the 44th president", "15 Jan 2021", 4732274, ["Youre awesome!", "Best president ever", "Wheres your birth certificate?"])
var tweet2 = new Tweet("Lebron James", "Last nights game could have gone better", "14 MAY 2016", 1729503, ["Great game last night!", "🐐", "What happened to your hairline?"])
var tweet3 = new Tweet("Steven Berg", "Is anybody out tonight?", "1 JAN 2021", 0, ["I am!"])
console.log(tweet1);
console.log(" ");
tweet1.updateLikes();
console.log(tweet1);
console.log(" ");

console.log(tweet2);
console.log(" ");
tweet2.updateComments();
console.log(tweet2)
console.log(" ");


console.log(tweet3);
tweet3.updateLikes()
tweet3.updateComments()
console.log(" ");

console.log(tweet3);