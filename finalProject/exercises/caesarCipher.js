class CaeserCipher {
	constructor(originString, shiftAmount) {
		// The following property is the originating String that will be encoded
		this.originString = originString;
		// The following property is the encoded String returned upon "encode()"
		this.encodedString = "";
		this.shiftAmount = shiftAmount;
		// The following property is used to determine what a given letter will
		// encode to based upon the "shiftAmount" value.
		this.alphaRef = {
			lower: "abcdefghijklmnopqrstuvwxyz",
			upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
		};
	}

	encode() {
		var originLetter;
		var encodedLetter;

		// Looping through the originating String, assigning each element
		// consecutively to the "originLetter" variable
		for (var i = 0; i < this.originString.length; i++) {
			originLetter = this.originString[i];

			// The following logic determines how the "getEncodedLetter" method is
			// called, and assigns its return value to "encodedLetter" - this value
			// is then concatenated with "encodedString". If the value of
			// "originLetter" is a space or a special character, it is directly
			// concatenated with "encodedString" as these don't need encoding.
			if (originLetter === " ") {
				this.encodedString += originLetter;
			} else if (this.alphaRef.upper.includes(originLetter)) {
				encodedLetter = this.getEncodedLetter(originLetter, true);
				this.encodedString += encodedLetter;
			} else if (this.alphaRef.lower.includes(originLetter)) {
				encodedLetter = this.getEncodedLetter(originLetter, false);
				this.encodedString += encodedLetter;
			} else {
				this.encodedString += originLetter;
			}
		}

		// Once the originating String has been completly encoded (via the loop),
		// it is returned.
		return this.encodedString;
	}

	getEncodedLetter(originLetter, isUpper) {
		var originIndex;
		var encodeIndex;
		var encodedLetter;

		// The following logic references either the "upper" or "lower" String of
		// "alphaRef" (depending on whether "isUpper" is true or false) to find
		// the encoded version of the originating letter based upon the
		// "shiftAmount" value provided.
		if (isUpper === true) {
			originIndex = this.alphaRef.upper.indexOf(originLetter);
			encodeIndex = originIndex - this.shiftAmount;
			// In the "if" statement below, I'm adding 26 to any encode indexes that
			// calculate as negative to prevent undefined values. For example, if the
			// "originLetter" is "c" (index of 2 in "alphaRef.lower") and the
			// "shiftAmount" is 3, then the "encodeIndex" is -1.
			if (encodeIndex < 0) {
				encodeIndex += 26;
			}
			encodedLetter = this.alphaRef.upper[encodeIndex];
		} else if (isUpper === false) {
			originIndex = this.alphaRef.lower.indexOf(originLetter);
			encodeIndex = originIndex - this.shiftAmount;
			if (encodeIndex < 0) {
				encodeIndex += 26;
			}
      encodedLetter = this.alphaRef.lower[encodeIndex];
		}

		// Once the encoded letter has been found, it is returned (and used in the
		// "encode()" method).
		return encodedLetter;
	}
}

var testCipher = new CaeserCipher("My name is Jon.", 5);
console.log(testCipher.encode());
