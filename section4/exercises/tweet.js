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
    this.numberOfLikes++;
  }

}

var zachTweet1 = new Tweet("Zach", "I think about tacos too much while coding",
"1:03pm", 0, ["tacos rule!", "want to 'taco bout it?"]);

console.log(zachTweet1);

zachTweet1.addLike();
zachTweet1.addLike();
console.log(zachTweet1);
//That sweet, sweet validation happens here after you get the 2 likes.

var zachTweet2 = new Tweet("Zach", "Seriously y'all, I am like, really hungry for tacos",
"1:55pm", 0, ["why dont you go eat some then?", "burritos over tacos any day!"]);
console.log(zachTweet2);

var zachTweet3 = new Tweet("Zach", "it's cool guys, I finally got some tacos", "3:33pm",
0, ["wow good for you", "were they good?", "now I want tacos omg"]);
console.log(zachTweet3);

var kevinTweet1 = new Tweet("Kevin", "zach has an unhealthy obsession with tacos", "4:12pm",
0, ["lol ya i kno", "why doesnt he just make more at home?"]);
console.log(kevinTweet1);

var kevinTweet2 = new Tweet("Kevin", "i'm going to open a taco restaurant, just for zach",
"9:10pm", 0, ["you are an angel of a human", "lol are we done talking about zach and tacos yet?"]);
console.log(kevinTweet2);
