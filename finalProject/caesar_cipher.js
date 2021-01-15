//create CaesarCipher class so that I can run any argument for message I want to encode and the shift value
class CaesarCipher {
  constructor(message, shiftValue) {
    this.message = message;
    this.shiftValue = shiftValue;
  }
  //create a method to encode a message by any shift value
  encode() {
    //tried starting by splitting the characters of the message, but haven't actually use this yet.
    //not sure if useful after experimenting with it or if I can find another way
      //var splitMessage = this.message.split("");
        //console.log(splitMessage);


    //change each character to ASCII code (numeric value)
      for (var i = 0; i < this.message.length; i++) {
        var numberMessage = this.message.charCodeAt(i);
      console.log(numberMessage);
    //shift the value of the ASCII code back by the shift value unless the ASCII code represents a space between words
        if (numberMessage != 32) {
          var cipheredNumberMessage = numberMessage - this.shiftValue;
          console.log(cipheredNumberMessage);
        }
    //need to write another if function so that if shift value is less than 97 (letter a), it loops back to end of alphabet
    //need to convert ASCII code back to alphabet
    //need to log new encoded message

        //was trying to convert ASCII code back to alphabet, but having trouble with following code
          //var cipheredMessage = cipheredNumberMessage.fromCharCode(i);
          //console.log(cipheredMessage);

     }
  }
}

var message = new CaesarCipher("hello friend", 4);

message.encode();
