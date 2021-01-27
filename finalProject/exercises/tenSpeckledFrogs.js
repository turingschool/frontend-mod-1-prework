class FrogRhyme {
	constructor(frogCount, convertToWord) {
		this.frogCount = frogCount;

		// This following logic will throw an error if a non-boolean value
		// is supplied to "convertToWord" upon instantiation
		if ((convertToWord === true) || (convertToWord === false)) {
			this.convertToWord = convertToWord;
		} else {
			throw "'convertToWord' needs to be boolean.";
		}

		// This object is used to convert an integer into its respective
		// "word-value" if "convertToWord" is true (limited to 3, 2, and 1)
		this.conversionTable = {
			3: "Three",
			2: "Two",
			1: "One"
		};
	}

  printFullRhyme() {
		// To make things simple, I'm only going to allow conversion to a
		// "word-value" if the originating "frogCount" is 3
		if ((this.convertToWord === true) && (this.frogCount === 3)) {
			for (var i = 0; i < 3; i++) {
				this.printLogLine(true);
				this.printPoolLine();
			}
		} else {
			for (var n = 0; n < 3; n++) {
				this.printLogLine(false);
				this.printPoolLine();
			}
		}
	}

	printLogLine(convertToWord) {
		var logLine;
		var count = this.frogCount;

		// The following logic will either print the "count" value directly or
		// use the "conversionTable" property to print the "word-value" for the
		// first line of each stanza per the value supplied to "convertToWord"
		if (convertToWord === true) {
			logLine = this.conversionTable[count] + " speckled frogs sat on a log eating some most delicious bugs.";
		} else if (convertToWord === false) {
			logLine = count + " speckled frogs sat on a log eating some most delicious bugs.";
		}

		// The first stanza is printed and then the count of frogs is decremented
		console.log(logLine);
		this.frogCount--;
	}

	printPoolLine() {
		var poolLine;

		// The following logic will print different verbage for the second line of
		// each stanza per the value of "frogCount"
		if (this.frogCount === 0) {
			poolLine = "One jumped in the pool where it's nice and cool, then there were no more speckled frogs!\n";
			console.log(poolLine);
		} else if (this.frogCount === 1) {
			poolLine = "One jumped in the pool where it's nice and cool, then there was " + this.frogCount + " speckled frog.\n";
			console.log(poolLine);
		} else {
			poolLine = "One jumped in the pool where it's nice and cool, then there were " + this.frogCount + " speckled frogs.\n";
			console.log(poolLine);
		}
	}
}

var myFrogRhyme = new FrogRhyme(15, false);
myFrogRhyme.printFullRhyme();
