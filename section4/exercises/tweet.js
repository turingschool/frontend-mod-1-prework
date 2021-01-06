/*
In the space below, add to the existing skeleton of a Tweet class.

- A tweet should have a (dynamic) author, content, timeStamp, numberOfLikes, and comments.
- A tweet should be able to increment the numberOfLikes and add to the list of comments.

Create several instances of your Tweet and log them to the console. Make sure the
tweet object instances _behave_ as expected.
*/

class Tweet {
      constructor(author, content, timeStamp, numberOfLikes, comments,) {
        this.author = author
        this.content = content
        this.timeStamp = timeStamp
        this.numberOfLike = numberOfLikes
        this.comments = comments
      }
      addLike() {
        this.numberOfLike++;
      }
        unlike() {
        this.numberOfLike--;
      }
}
    var newYear = new Tweet("@The_dust", "HAPPY NEW YEAR", "12/31/20", 5, ["Happy New Year to you too"]);
        console.log(newYear)
      newYear.addLike();
        console.log(newYear)

        var holidays = new Tweet("@The_dust", "Happy hollidays", "12/20/20", 3, ["you too", "happy holidays to you too"]);
       console.log(holidays)
     holidays.unlike();
       console.log(holidays)  
