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
addLike() {
  this.numberOfLikes ++;
}

  addComment(newComment) {
    this.comments.push(newComment);
  }
};

var tweetOne = new Tweet('Meg McB','I like dogs!', '2/4/20 : 2145', 3 , ['Me too!','Dogs rule!', 'Cats are cool too.']);

console.log(tweetOne);
tweetOne.addComment('My favorite is a bullterrier');
console.log(tweetOne);
tweetOne.addComment('Agreed!');
console.log(tweetOne);
tweetOne.addLike();
console.log(tweetOne);
tweetOne.addLike();
console.log(tweetOne);
tweetOne.addLike();
console.log(tweetOne);

var tweetTwo = new Tweet('Meg McB','Are tacos sandwiches?','2/6/20 : 1130', 0, []);

console.log(tweetTwo);

tweetTwo.addLike();
tweetTwo.addLike();
tweetTwo.addComment('Most definitely not.');
console.log(tweetTwo);

tweetTwo.addLike();
tweetTwo.addComment('No way.');
tweetTwo.addComment('Absolutely! So is a hot dog');
console.log(tweetTwo);

var tweetThree = new Tweet('Meg McB','It is a BEAUTIFUL day today. I plan to go for a hike.', '3/31/20 : 0830', 0, []);

tweetThree.addComment('Sounds like a great plan!');
console.log(tweetThree);

tweetOne.addLike();
console.log(tweetOne);
