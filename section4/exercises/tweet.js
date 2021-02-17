/*
In the space below, add to the existing skeleton of a Tweet class.

- A tweet should have a (dynamic) author, content, timeStamp, numberOfLikes, and comments.
- A tweet should be able to increment the numberOfLikes and add to the list of comments.

Create several instances of your Tweet and log them to the console. Make sure the
tweet object instances _behave_ as expected.
*/


class Tweet { //class opening
  constructor(author, content, timestamp, numberOfLikes, comments) {  // constructor opening; with parameters
    this.author = author;
    this.content = content; // these are properties
    this.timestamp = timestamp;
    this.numberOfLikes = numberOfLikes;
    this.comments = comments;
  } //constructor closing
  //method
  incrementLikes(){ // method opening
    return (this.numberOfLikes); // i have to review methods.
  }// method closing
} //class closing

  var post1 = new Tweet ("Julie", "Beach moments", "February 16, 2021", 45, 507); //object instance with arguments
  var post2 = new Tweet ("Lisa", "Birthday 2021", " February 16, 2021", 34, 55); // object instance with arguments

console.log(post2);
console.log(post2.incrementLikes); // i have to review this.
