/*
In the space below, add to the existing skeleton of a Tweet class.

- A tweet should have a (dynamic) author, content, timeStamp, numberOfLikes, and comments.
- A tweet should be able to increment the numberOfLikes and add to the list of comments.

Create several instances of your Tweet and log them to the console. Make sure the
tweet object instances _behave_ as expected.
*/

class Tweet {
constructor(auth,cont,timeS,like,comment){
this.author = auth;
this.content = cont;
this.timeStamp = timeS;
this.numberOfLikes = like;
this.comments = comment;

}
changeAuthor(ca){
  this.author = ca
}
changeContent(cc){
  this.content = cc
}
changeTimeStamp(cts){
  this.timeStamp = cts
}
changeNumberOfLikes(cnol){
  this.numberOfLikes = cnol
  for(var i = 0; i < this.numberOfLikes + 1; i++);
  this.numberOfLikes = this.numberOfLikes + 1;
}
changeComments(ccm){
 for(var i= 0; i < this.comments + this.numberOfLikes + 1; i++);
 this.comments = this.comments + "dope!"
}
};
var tweet1 = new Tweet("Stewie","Nerf the MP9!","01/01/2021", 5 , ["True! *kappa* !"])
console.log(tweet1);
var tweet2 = new Tweet("Naf","Nerf the XM10","02/02/2021", 10 , ["Bad take honestly, Naf!"])
console.log(tweet2);
tweet1.changeNumberOfLikes(7)
console.log(tweet1)
tweet1.changeComments()
console.log(tweet1)
tweet2.changeNumberOfLikes(10)
console.log(tweet2)
