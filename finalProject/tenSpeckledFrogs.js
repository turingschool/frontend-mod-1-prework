function speckledFrogs (frogTotal) {
var numberString = ["One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten" ]
var frogLeftOver = 0
for (let i = frogTotal; i >= 1; i--)  {
    var currentFrogs = numberString[i - 1]
    frogLeftOver = i - 1
    if (i > 1) {
    var poem1 = `${i}--------------------------------------------*
      ${currentFrogs} speckled frogs sat on a log
      eating some most delicious bugs.
      One jumped in the pool where its nice and cool,
      then there were ${frogLeftOver} speckled frogs.`
        console.log(poem1)
  } else {
    var poem3 = `${i}--------------------------------------------*
      ${currentFrogs} speckled frog sat on a log
      eating some most delicious bugs.
      One jumped in the pool where its nice and cool,
      then there were no more speckled frogs!`
        console.log(poem3)
    }
  }
}


var frogsIn = speckledFrogs(10)
console.log(frogsIn)
