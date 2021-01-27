class CaeserCipher {
	constructor(originString, shiftAmount) {
		// The following property is the originating String that will be encoded
		this.originString = originString;
		this.shiftAmount = shiftAmount;
		// The following property is the encoded String returned upon "encode()"
		this.encodedString = "";
		// The following property will be referenced to determine what a given
		// letter will encode to based upon the "shiftAmount" value.
		this.alphaRef = {
			lower: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
			        "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
			upper: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
			        "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
		};
	}

	encode() {
		var originLetter;
		var encodedLetter;

		// Looping through the originating String, assigning each element
		// consecutively to the "originLetter" variable
		for (var i = 0; i < this.originString.length; i++) {
			originLetter = this.originString[i];

			/*
			The following logic determines how the "getEncodedLetter" method is
			called, and assigns its return value to "encodedLetter" - this value
			is then concatenated onto "encodedString". If the value of
			"originLetter" is a space or a special character, it is directly
			concatenated onto "encodedString" as these don't need encoding.
			*/
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
		var encodedLetter;

		/*
	  The following logic references either the "upper" or "lower" Array of
		"alphaRef" (depending on whether "isUpper" is true or false) to determine
		how the "getCipherArray()" method is called. The "getCipherArray()" method
		returns a ciphered version of the "upper" or "lower" array.
		*/
		if (isUpper) {
			originIndex = this.alphaRef.upper.indexOf(originLetter);
			encodedLetter = this.getCipherArray(true)[originIndex];
		} else if (!(isUpper)) {
			originIndex = this.alphaRef.lower.indexOf(originLetter);
      encodedLetter = this.getCipherArray(false)[originIndex];
		}

		// Once the encoded letter has been found, it is returned (and used in the
		// "encode()" method).
		return encodedLetter;
	}

	getCipherArray(isUpper) {
		var cipherArray;

		// Assign the appropriate "alphaRef" Array based upon argument passed
		// during call.
		if (isUpper) {
			cipherArray = this.alphaRef.upper;
		} else if (!(isUpper)) {
			cipherArray = this.alphaRef.lower;
		}

		// Shift the letters, by the "shiftAmount", in the "alphaRef" Array
		// to the right
		for (var i = 1; i <= this.shiftAmount; i++) {
			cipherArray.unshift(cipherArray.pop());
		}

		// Return the ciphered Array once completely shifted
		return cipherArray;
	}
}

var cipherTest = new CaeserCipher("This is a test!", 3);
console.log(cipherTest.encode());
