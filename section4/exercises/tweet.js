/*
In the space below, add to the existing skeleton of a Tweet class.

- A tweet should have a (dynamic) author, content, timeStamp, numberOfLikes, and comments.
- A tweet should be able to increment the numberOfLikes and add to the list of comments.

Create several instances of your Tweet and log them to the console. Make sure the
tweet object instances _behave_ as expected.
*/
//class Tweet. Object instances: annoucement, quote, warning
class Tweet {
  constructor(author,content,timeStamp,numberOfLikes,comments){
    this.author = author;
    this.content = content;
    this.timeStamp = timeStamp
    this.numberOfLikes = numberOfLikes
    this.comments = comments
  }
  addLikes(){
    this.numberOfLikes = (numberOfLikes++);
  }
    addComments(){
      this.comments = (comments++);
    }

}
var annoucement = new Tweet("National Park Services", "Park is closed today due to weather", "10:55AM 10/20/2019", 20, ["Bummer!", "We'll have to come back.", "Next time!"] )

var quote = new Tweet("Inspirational Quotes", "Remember, Hope is a good thing, maybe the best of things, and no good thing ever dies.", "9:30PM 9/13/2005", 40, ["One of my favorite quotes!", "Love this book!", "Rita Hayworth & Shawshank Redemption.."])

var warning = new Tweet("Weather Channel", "Winter weather storm advisory", "6:30AM 10/24/2020", 50, ["Time to hunker down", "Get the shovels ready!", "Thanks for the heads up!"])


console.log(annoucement);


console.log(quote);


console.log(warning);
