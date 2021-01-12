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

	incrementLikes(by) {
		if (by) {
			this.numberOfLikes += by;
		} else {
			this.numberOfLikes++;
		}
	}

	addComment(comment) {
		this.comments.unshift(comment);
	}
}

var firstTweet = new Tweet(
	"@elonmusk",
	"The colony on Mars is thriving beautifully. Shooting to expand to Venus 2023",
	"07/20/2022 07:32:42 +0800",
	951078,
	["Elon for prez!", "I want to go!"]
);

var secondTweet = new Tweet(
	"@kanyewest",
	"Hey ya'll we gave it a good run, Kanye 2024!",
	"11/03/2020 23:10:31 +0800",
	2103670,
	["Please don't."]
);

var thirdTweet = new Tweet(
	"@rianjohnson",
	"Oops, kinda goofed that one. We'll get 'em with the next one!",
	"12/15/2017 10:43:05 +0800",
	10300,
	["Please don't.", "I love lightsabers! Schvrmmmmmm! Schvrmmm!"]
);

console.log(firstTweet.comments);
firstTweet.addComment("Please take me! Get me away from this facade!");
console.log(firstTweet.comments);

console.log(secondTweet.numberOfLikes);
secondTweet.incrementLikes(1000000);
console.log(secondTweet.numberOfLikes);

console.log(thirdTweet.numberOfLikes);
thirdTweet.incrementLikes();
console.log(thirdTweet.numberOfLikes);
