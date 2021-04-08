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
};

var tweet1 = new Tweet ("Mae D.", "I just started school at Turing!", "4:35 PM on 3/27/21", 5, ["Congrats!", "Yay!!!"])
console.log(tweet1);

var tweet2 = new Tweet ("Jimmy Fallon", "Tune in to watch me with Drew Barrymore tonight at 8/9 CT!", "3:30 PM on 2/08/21", 2476, ["See you then!", "Wouldn't miss it!", "Love Drew!!!"])
console.log(tweet2);

var tweet3 = new Tweet ("The New York Times", "BREAKING: All Adults in US are now Eligible for COVID-19 Vaccine", "5:00 PM on 4/19/21", 174846, ["Finally!", "Got mine", "*crying*"])
console.log(tweet3);

var tweet4 = new Tweet ("Vice President Harris", "Biden administration announces executive action on gun control", "4:15 PM on 4/08/21", 34720, ["Thank you, Madam Vice President!", "Wish this was done sooner", "don't take my guns"])
console.log(tweet4);

var tweet5 = new Tweet ("Cardi B", "I love my fans!", "12:30 PM on 6/22/2019", 13251, ["We love you Cardi!", "All the love", "When do we get new music?!"])
console.log(tweet5);
