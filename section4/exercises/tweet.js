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
      addNumberOfLikes(num){
        this.numberOfLikes += (num);

      }
      removeNumberOfLikes(num){
        this.numberOfLikes -= (num);
      }
    }
var firstTweet = new Tweet ("Darla", "This year has been so crazy so far!", "12:22pm", 6, ["OMG I know right?", "seems worse than 2020 so far!"]);
console.log(firstTweet);

firstTweet.addNumberOfLikes(1)
 console.log(firstTweet.numberOfLikes);

var secondTweet = new Tweet ("Sam", "The new season of Euphoria was so good.", "1:30am", 30, ["Meh, I didnt like it."]);
console.log(secondTweet);

secondTweet.removeNumberOfLikes(4)
 console.log(secondTweet.numberOfLikes);
