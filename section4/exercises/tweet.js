/*
In the space below, add to the existing skeleton of a Tweet class.

- A tweet should have a (dynamic) author, content, timeStamp, numberOfLikes, and comments.
- A tweet should be able to increment the numberOfLikes and add to the list of comments.

Create several instances of your Tweet and log them to the console. Make sure the
tweet object instances _behave_ as expected.
*/

class Tweet {
  constructor(author, tweet, timeStamp, numOfLikes, comments) {
    this.author = author;
    this.content = tweet;
    this.timeStamp = timeStamp;
    this.numberOfLikes = numOfLikes;
    this.comments = comments;
  }

  incrementLikes(newLikes) {
    this.numberOfLikes += newLikes;
  }
  addComment(comment) {
    this.comments = this.comments.concat(comment);
  }
}

var birthday = new Tweet('Sally', 'Happiest of Birthdays', '12/5/2020 12:01a', 4, []);

var broncoSuperBowlWin = new Tweet('John', 'We are the ChAmPiOnS!', '2/4/2015 10:35p', 9823, ['WooHoo!', 'Way to go!', 'Von Champs!']);

var happyNewYear = new Tweet('Kari', 'Happy New Year Everyone!', '12/31/2020 6:30p', 27, ['You too Kari!', 'Thank goodness 2020 is over']);

var puppy = new Tweet('Marni', './image/newpuppy.png', '6/29/2013 1:52p', 429, ["You're going to make a wonderful dog mom!"]);

birthday.addComment('Hooray, first comment!');
birthday.incrementLikes(21);

console.log(birthday);
  // expected output: Tweet { author: 'Sally', content: 'Happiest of Birthdays', timeStamp: '12/5/2020 12:01a', numberOfLikes: 25, ['Hooray, first comment!'] }

puppy.addComment('Thats one good looking pup');
puppy.incrementLikes(1);

console.log(puppy);
  // expected output: Tweet { author: 'Marni', content: './image/newpuppy.png', timeStamp: '6/29/2013 1:52p', numberOfLikes: 430, comments: ["You're going to make a wonderful dog mom!", 'Thats one good looking pup'] }

happyNewYear.addComment('Goodbye dumpster fire year');
happyNewYear.incrementLikes(2784);

console.log(happyNewYear);
  // expected output: Tweet { author: 'Kari', content: 'Happy New Year Everyone!', timeStamp: '12/31/2020 6:30p', numberOfLikes: 2811, comments: ['You too Kari!', 'Thank goodness 2020 is over', 'Goodbye dumpster fire year'] }

broncoSuperBowlWin.addComment("Ain't Life Grand!");
broncoSuperBowlWin.incrementLikes(19302);

console.log(broncoSuperBowlWin);
  // expected output: Tweet { author: 'John', content: 'We are the ChAmPiOnS!', timeStamp: '2/4/2015 10:35p', numberOfLikes: 29125, comments: ['WooHoo!', 'Way to go!', 'Von Champs!', "Ain't Life Grand!"] }
