/*
In the space below, add to the existing skeleton of a Tweet class.

- A tweet should have a (dynamic) author, content, timeStamp, numberOfLikes, and comments.
- A tweet should be able to increment the numberOfLikes and add to the list of comments.

Create several instances of your Tweet and log them to the console. Make sure the
tweet object instances _behave_ as expected.
*/

class Tweet {
  constructor(ath, cnt, tmsmp, nol, com) {
    this.author = ath;
    this.content = cnt;
    this.timeStamp = tmsmp;
    this.numOfLikes = nol;
    this.comments = com;
  }

  like() {
    this.numOfLikes++;
    }

    comment(comm) {
      this.comments.push(comm);
    }
  }

var tweet0 = new Tweet("Joshua", "Picture", 1345, 1, ["Nice", "Cool"]);
tweet0.like();
tweet0.comment("Awesome!");
console.log(tweet0);


var tweet1 = new Tweet("Nina", "video", 1021, 6, ["I like this", "This is a comment"]);
tweet1.like();
tweet1.like();
tweet1.comment("This is a new comment");
console.log(tweet1);
