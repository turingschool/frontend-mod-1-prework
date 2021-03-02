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
    this.time = timeStamp;
    this.likes = numberOfLikes;
    this.comments = comments;
  }
  addComment(comment) {
    this.comments.push(comment);
  }
  addLikes() {
    return this.increaseLikes();
  }
  increaseLikes() {
    return this.likes++;
  }
};

var tweet1 = new Tweet("Randalltime", "If the Cleveland Cavaliers win the 2018 NBA finals I’ll buy everyone who retweet’s this a jersey...", "May 28, 2018 11:58 PM", 203500, ["You should probably cap this... lol", "if they steal a game at home I get a roster spot", "Maybe not greatest idea to cheer against the city that you’ll be playing in for at least 2 years."]);
var tweet2 = new Tweet("BTS_twt", "We stand against racial discrimination. We condemn violence. You, I and we all have the right to be respected. We will stand together.", "June 4, 2020 2:01 AM", 2100000, ["DON’T BE SHY OPEN UP YOUR WALLETS", "this is why you're different. this is why you're BTS. so proud of you, boys #BlackLivesMatter", "stop praising them for doing the bare minimum"]);
var tweet3 = new Tweet("BarackObama", "No one is born hating another person because of the color of his skin or his background or his religion...", "Aug 12, 2017", 4200000, ['"People must learn to hate, and if they can learn to hate, they can be taught to love..."', '"...For love comes more naturally to the human heart than its opposite." - Nelson Mandela', "#what the world needs now is love! Miss BHO."]);

console.log(tweet1);
console.log(tweet2);
console.log(tweet3);

tweet1.addLikes();
console.log(tweet1);

tweet3.addComment("wazzzzzzzzzzzzzzzup");
console.log(tweet3);
