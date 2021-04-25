/*
In the space below, add to the existing skeleton of a Tweet class.

- A tweet should have a (dynamic) author, content, timeStamp, numberOfLikes, and comments.
- A tweet should be able to increment the numberOfLikes and add to the list of comments.

Create several instances of your Tweet and log them to the console. Make sure the
tweet object instances _behave_ as expected.
*/

class Tweet {
  constructor (tweetAuthor , tweetContent , tweetTimeStamp , tweetLikes , tweetComments) {
    this.author = tweetAuthor;
    this.content = tweetContent;
    this.timeStamp = tweetTimeStamp;
    this.numberOfLikes = tweetLikes;
    this.comments = tweetComments;
  };
  newLike (tweetLikes , addLike) {
    this.numberOfLikes = tweetLikes + addLike;
  };
  newComment (addComment) {
    this.comments.push(addComment);
  }
};

var tweetOne = new Tweet ("@DSAdenver" , "More vaccines available! 3501 Highland Place, Westminster, CO 80031. They're taking walk-ins until 8pm" , "5:51 PM · Apr 22, 2021" , 5 , ["Call 3037254722 if you want to check availability before heading up." , "Thank you!"]);
tweetOne.newLike(5, 1);
tweetOne.newComment("Leaving now!");

var tweetTwo = new Tweet ("@DSAdenver" , "Every time someone says 'cops need more training' or that we need to reform the police, send them this. This is what liberals would have us increase police budgets to pay for. There is no alternative. #DefundThePolice" , "5:34 PM · Apr 22, 2021" , "12" , ["#DefundThePolice" , "#BLM" , "https://twitter.com/travisakers/status/1385292068029927426?s=20"]);
tweetTwo.newLike(12, 1);
tweetTwo.newComment("Disgusting.");

var tweetThree = new Tweet ("@DSAdenver" , "Derek Chauvin guilty on all counts. His guilt is news to no one, but our justice system getting one right is a welcome surprise. As @elisabeth says, there's no justice to be found in any verdict, but we can take some solace that Chauvin is off the streets." , "3:12 PM · Apr 20, 2021" , "85" , ["This only happened because they are afraid of us. If the people had not been in the streets all summer, Chauvin would have been shuffled around again as after his previous brutal offenses. The norms in policing haven't changed, but we know we can make an impact in the streets." , "I love y’all and I’m glad to be in this work with you." , "We love you too 🥰"]);
tweetThree.newLike(85, 1);
tweetThree.newComment("please do not conflate a perceived sense of closure or a misconstrued concept of accountability with justice. george floyd should be alive. his child should have her father. abolition or nothing. the entire system needs to burn.");

console.log(tweetOne);
console.log(tweetTwo);
console.log(tweetThree);
