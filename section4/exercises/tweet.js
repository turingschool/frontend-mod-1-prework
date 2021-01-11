/*
In the space below, add to the existing skeleton of a Tweet class.

- A tweet should have a (dynamic) author, content, timeStamp, numberOfLikes, and comments.
- A tweet should be able to increment the numberOfLikes and add to the list of comments.

Create several instances of your Tweet and log them to the console. Make sure the
tweet object instances _behave_ as expected.
*/

class Tweet {

  constructor(author,content,time,likes,comments) {
    this.author = author;
    this.content = content;
    this.timeStamp = time;
    this.numberOfLikes = likes;
    this.comments = comments
  }

  addLike() {
    this.numberOfLikes = this.numberOfLikes + 1;
  }


  addComment() {
    this.comments = [...this.comments, newComment];
  }

};

var tweet1 = new Tweet("@kendallha","Why do I keep trying to type 'hellow' instead of 'hello'?","01-10-20 2:41 PM",15,["Your brain is broken.","Go to sleep!"]);
console.log(tweet1);

var tweet2 = new Tweet("@gobbluth","I've made a huge mistake","04-04-10 3:34 PM",13980,["Another one, Gob!?","It's an illusion, Michael!"]);
console.log(tweet2);

tweet1.addLike();
console.log(tweet1);

var newComment = "What a great show!"
tweet2.addComment();
console.log(tweet2);
