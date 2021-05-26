/*
In the space below, add to the existing skeleton of a Tweet class.

- A tweet should have a (dynamic) author, content, timeStamp, numberOfLikes, and comments.
- A tweet should be able to increment the numberOfLikes and add to the list of comments.

Create several instances of your Tweet and log them to the console. Make sure the
tweet object instances _behave_ as expected.
*/

class Tweet {
    constructor(author, text, timePosted, image='') {
        this.author = author;
        this.content = {
            text: text,
            image: image,
        };
        this.timeStamp = timePosted;
        this.numberOfLikes = 0;
        this.comments = [];
    }

    addComment(comment){
        this.comments.push(comment);
    }

    addLike(){
        this.numberOfLikes++;
    }
}

var currentTime = new Date();
var formattedTime = currentTime.toTimeString();
var currentHoursMinutes = formattedTime.split(' ')[0];

var tweet1 = new Tweet('Markus', 'My first tweet!', currentHoursMinutes, 'dancingRat.GIF');

tweet1.addComment('What a cool dancing rat!');
tweet1.addComment('Rats are cool, but I like penguins.');
tweet1.addLike();
tweet1.addLike();
tweet1.addLike();
console.log(tweet1);

var tweet2 = new Tweet('Big Sender', 'Hey it\'s me Big Sender! I gotta Tweeter now!', '12:00 PM', 'thebigone.PNG');

tweet2.addComment('We have been trying to reach you about your cars extended warenty!');
tweet2.addLike();
tweet2.addLike();
tweet2.addLike();
tweet2.addLike();
tweet2.addLike();
tweet2.addLike();
console.log(tweet2);

var tweet3 = new Tweet('James Foreman', 'Anyone need a car?!?', '9:30 AM');

tweet3.addComment('WATCH OUT FOR THIS GUY! HE IS A FRAUD!!!!!');
tweet3.addLike(); //He liked his own tweet!
console.log(tweet3);