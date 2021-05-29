/*
In the space below, add to the existing skeleton of a Tweet class.

- A tweet should have a (dynamic) author, content, timeStamp, numberOfLikes, and comments.
- A tweet should be able to increment the numberOfLikes and add to the list of comments.

Create several instances of your Tweet and log them to the console. Make sure the
tweet object instances _behave_ as expected.
*/

class Tweet {
  constructor(author, content, timeStamp, numOfLikes, comments) {
    this.author = author;
    this.content = content;
    this.timeStamp = timeStamp;
    this.numberOfLikes = numOfLikes;
    this.comments = comments;
  }

  incrementLikes() {
    this.numberOfLikes++;
  }

  addComment(newComment) {
    this.comments.push(newComment);
  }
};

var iAmVaccinatedShirt = new Tweet('Matthew Perry', [ 'Could I BE Any More Vaccinated?' ], '1:00 PM, May 24, 2021', 1, [ 'It might be too soon...' ]);
console.log(iAmVaccinatedShirt);

iAmVaccinatedShirt.addComment('This is not cool. Lots of folks have experienced grief because of this pandemic.');
console.log(iAmVaccinatedShirt);

iAmVaccinatedShirt.incrementLikes();
console.log(iAmVaccinatedShirt);

iAmVaccinatedShirt.incrementLikes();
console.log(iAmVaccinatedShirt);

iAmVaccinatedShirt.addComment('hahaha, pretty funny. Are proceeds going to a relief organization to help with those hit physically, mentally, or monetarily by Covid?');
iAmVaccinatedShirt.incrementLikes();
console.log(iAmVaccinatedShirt);
