for (i = 10; i > 0; i--) {
// This code can run for any number of frogs by adjusting the i (index) value in the originating for loop above (line 1)
if (i == 1) {
    line1 = " frog"
  } else if (i == 2) {
    line1 = " frogs"
    line4syn = " was"
    line4pl = " frog"
  } else {
    line1 = " frogs"
    line4syn = " were"
    line4pl = " frogs"
  }

var stanza = i + line1 + " sat on a log\neating some most delicious bugs.\nOne jumped in the pool where its nice and cool,\nthen there" + line4syn + " " + (i-1) + " speckled" + line4pl

var lastStanza = i + line1 + " sat on a log\neating some most delicious bugs.\nOne jumped in the pool where its nice and cool,\nthen there were no more speckled frogs!"

if (i == 1) {
    console.log(lastStanza)
  } else {
    console.log(stanza)
  }

}
