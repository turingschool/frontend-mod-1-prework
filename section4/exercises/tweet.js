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
    addLike(newLike){
      this.numberOfLikes = this.numberOfLikes + newLike;
    }

    addComment(newComment){
      this.comments.push(newComment);
    }

};

var tweet1 = new Tweet("Darin", "Thanks to Mrs. Pacman, I grew up thinking a pretzel was a fruit", "Sep 6, 2017", 5, ["me too", "lol"]);
console.log(tweet1);

tweet1.addLike(3);
tweet1.addComment("why though?");
console.log(tweet1);

var tweet2 = new Tweet("Harle", "i miss when i was little n i thought my heart was heart shaped", "Dec 23, 2020", 357800, ["wait its not ...jk ik i take anatomy", "the day i found out a piece of me died", "i refuse to think otherwise"])
console.log(tweet2);

tweet2.addLike(1);
tweet2.addComment("i wish no one told me the truth");
console.log(tweet2);
