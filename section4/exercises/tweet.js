/*
In the space below, add to the existing skeleton of a Tweet class.

- A tweet should have a (dynamic) author, content, timeStamp, numberOfLikes, and comments.
- A tweet should be able to increment the numberOfLikes and add to the list of comments.

Create several instances of your Tweet and log them to the console. Make sure the
tweet object instances _behave_ as expected.
*/

class Tweet {
  constructor(name, paragraph, timeDate, status, wordLimit) {
    this.author = name
    this.content = paragraph
    this.timeStamp = timeDate
    this.likeStatus = status
    this.comments = wordLimit

  }

      affirmLikeStatus() {
        this.likeStatus = true
      }

      addComment() {
        console.log("My sentiments exactly" + " " + "~@venus")
  }

}
var dianaTweet = new Tweet("@Diana", "Everybody is worthy of goodness", "October 26, 2020, 12:37pm", true, "@Diana Preach!");

var horacioTweet = new Tweet("@Horacio", "A reminder that's fitting of the times.", "October 26, 2020, 1:12pm", false, "thank you");

  console.log(dianaTweet);
  dianaTweet.addComment();

  horacioTweet.affirmLikeStatus();
  console.log(horacioTweet);

/* expected return: 
  Tweet {
    author: '@Diana',
    content: 'Everybody is worthy of goodness',
    timeStamp: 'October 26, 2020, 12:37pm',
    likeStatus: true,
    comments: '@Diana Preach!'
  }
  My sentiments exactly ~@venus
  Tweet {
    author: '@Horacio',
    content: "A reminder that's fitting of the times.",
    timeStamp: 'October 26, 2020, 1:12pm',
    likeStatus: true,
    comments: 'thank you'
  }
  */
