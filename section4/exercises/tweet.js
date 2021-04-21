/*
In the space below, add to the existing skeleton of a Tweet class.

- A tweet should have a (dynamic) author, content, timeStamp, numberOfLikes, and comments.
- A tweet should be able to increment the numberOfLikes and add to the list of comments.

Create several instances of your Tweet and log them to the console. Make sure the
tweet object instances _behave_ as expected.
*/

class Tweet {
  constructor(author, content, timeStamp, numberOfLikes, comments) {
    this.author = author;
    this.content = content;
    this.timeStamp = timeStamp;
    this.numberOfLikes = numberOfLikes;
    this.comments = comments;
  }
//adds additional comment after previous comments
  addComment(cmt) {
    this.comments = this.comments + ", " + cmt;
  }
//increases the like value by 1
  addLike() {
    this.numberOfLikes = this.numberOfLikes + 1;
  }
};

//new tweet
var mrDaveLeach01 = new Tweet ("@mrdaveleach", "Hello World", "02:45 PM July 24, 2020", 12, "I really like this tweet");
console.log (mrDaveLeach01);

//add 2 likes and log
mrDaveLeach01.addLike();
console.log(mrDaveLeach01);
mrDaveLeach01.addLike();
console.log(mrDaveLeach01);

//add comment
mrDaveLeach01.addComment("Where does this go?");
console.log(mrDaveLeach01);

//add additional comment
mrDaveLeach01.addComment("To the moon 🚀🚀🚀🚀")
console.log(mrDaveLeach01);

//new tweet
var mrDaveLeach02 = new Tweet ("@mrdaveleach", "Another gig, another dollar #survivingthedream", "03:17 AM July 25, 2020", 362, "SooOOOooo True");
console.log(mrDaveLeach02);

//add 6 likes
mrDaveLeach02.addLike();
mrDaveLeach02.addLike();
mrDaveLeach02.addLike();
mrDaveLeach02.addLike();
mrDaveLeach02.addLike();
mrDaveLeach02.addLike();

//log all parameters
console.log(mrDaveLeach02);
//display number of likes
console.log("Number of Likes: " + mrDaveLeach02.numberOfLikes);

//add comments and log
mrDaveLeach02.addComment("DANG, U MADE A DOLLAR!? #quitbraggingyoubraggo");
console.log(mrDaveLeach02);
