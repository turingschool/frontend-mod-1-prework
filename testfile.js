var myIntro = "I am Beth Meeker"
console.log(myIntro.split(""));

/* Expected output
[
  'I', ' ', 'a', 'm',
  ' ', 'B', 'e', 't',
  'h', ' ', 'M', 'e',
  'e', 'k', 'e', 'r'
]

*/

var myIntro = "No idea what im doing"
console.log(myIntro.split("", 13));

/* Expected output:
[
  'N', 'o', ' ', 'i',
  'd', 'e', 'a', ' ',
  'w', 'h', 'a', 't',
  ' '
]
*/

// Board game copy/paste data types
// String data
var gameName = "Balderdash"
var drawDasher = "Draw a card Beth"

// Integer and/or float data
var player_number = 6
var space_number = 23

// Boolean
var dasher_got_votes = true
var player1_got_votes = false

// Array

var card_section = ["Definition", "Date", "Person", "Movie Title", "Acronym"]
var player_color = ["Green", "Yellow", "Blue", "Red", "Orange", "Purple"]
