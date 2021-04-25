/*
In the space below, add to the existing skeleton of a Tweet class.

- A tweet should have a (dynamic) author, content, timeStamp, numberOfLikes, and comments.
- A tweet should be able to increment the numberOfLikes and add to the list of comments.

Create several instances of your Tweet and log them to the console. Make sure the
tweet object instances _behave_ as expected.
*/

class Tweet {
  constructor(name, content, timeStamp, numberOfLikes, comments) {
    this.author = name;
    this.content = content;
    this.timeStamp = timeStamp;
    this.numberOfLikes = numberOfLikes;
    this.comments = comments;
  }
  addLike() {
    this.numberOfLikes = this.numberOfLikes + 1;
  }
  addComment() {
      this.comments = this.comments + " I can't belive! I'm finishing 🥳";
  }


};

var joanaTweet = new Tweet("Joana", "I'm about to freak out with those exercises","April 24,2021 at 4:00pm", 100,[" I'm also feeling it", " This week has been crazy! "]);
console.log(joanaTweet);
joanaTweet.addComment();
console.log(joanaTweet);

var carolTweet = new Tweet("Carol", "Today is a happy one! ", "August 5, 2020 at 2:00pm", 3, ["I'm happy for you Carol"]);
console.log(carolTweet);
carolTweet.addLike();
carolTweet.addLike();
carolTweet.addLike();
console.log(carolTweet);

var mattTweet = new Tweet("Matt","Feeling the fire","March 5, 2019 at 2:00 pm ", 30, ["Those photos are crazy","The race looks dope", "Finding a way to find you"]);
console.log(mattTweet);
mattTweet.addLike();
console.log(mattTweet);
