/*
In the space below, add to the existing skeleton of a Tweet class.

- A tweet should have a (dynamic) author, content, timeStamp, numberOfLikes, and comments.
- A tweet should be able to increment the numberOfLikes and add to the list of comments.

Create several instances of your Tweet and log them to the console. Make sure the
tweet object instances _behave_ as expected.
*/

class Tweet {
  constructor(author, content, time, likes, comments) {
    this.author = author;
    this.content = content;
    this.timestamp = time;
    this.numberOfLikes = likes;
    this.comments = comments;
  }
  newLike() {
    this.numberOfLikes++
  }
  addComment(newComment) {
    this.comments.push(newComment);
  }
};

var sassy = new Tweet("@sassysusan", "ummm...that was dumb", "19:32", 5, ["love this", "that's the tweet", "spill tea sis"]);
console.log(sassy);
sassy.newLike();
sassy.addComment("woah calm down");
console.log(sassy);

var inspirational = new Tweet("@wokewilliam", "you can do anything", "06:27", 12, ["needed that", "deep", "astounding thought"]);
console.log(inspirational);
inspirational.newLike();
inspirational.addComment("words to live by");
console.log(inspirational);

var ad = new Tweet("@reallybigcompany", "buy our product please", "10:18", 7239, ["I bought this and I'm definitely a real person", "I also bought this and love it and I AM a human"]);
console.log(ad);
ad.newLike()
ad.addComment("This product rocks! Also, I am NOT a bot!")
console.log(ad);

var celeb = new Tweet("@hunkyceleb", "hello to my fans", "16:44", 83475973, ["omg we stan u", "marry me", "you are the reason i live"]);
console.log(celeb);
celeb.newLike();
celeb.addComment("hello to you, too");
console.log(celeb);
