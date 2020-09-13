/*
In the space below, add to the existing skeleton of a Tweet class.

- A tweet should have a (dynamic) author, content, timeStamp, numberOfLikes, and comments.
- A tweet should be able to increment the numberOfLikes and add to the list of comments.

Create several instances of your Tweet and log them to the console. Make sure the
tweet object instances _behave_ as expected.
*/

class Tweet {
  constructor (author, content, timeStamp, numberOfLikes, comments) {
    this.author = author;
    this.content = content;
    this.timeStamp = timeStamp
    this.numberOfLikes = "[i]";
    this.comment = "[i]";
  }
  addLike() {
    this.numberOfLikes++;
  }
  addComment() {
    this.comment++;
  }
}

var latestTweet = new Tweet ("By Jahara Clark", "I have a headache.", "September 13, 2020 11:08am", 0, 0);
console.log(latestTweet)

var updatedTweet = new Tweet ("By Jahara Clark", "I have a headache.", "September 13, 2020 11:08am","\n","\n")
console.log(updatedTweet)

/* I'm not going to lie, I KNOW this doesn't work, but I'm not 100% why. I feel like I need to use [i] somewhere but I'm not sure where. I can just feel that it feels funny. I've been at this for hours, talked to both Cody and Elsa about it in our small group family. Can we unpack this on Monday? My head hurts so bad I almost can't see straight. I'm past productive struggle and heading to tears. Between this and classMethods (I'm sure you'll find my problems there), I need a big break. */
