//initialized
var onetoHundredArray = [];

//populate values 1 through 100
for (var i = 1; i <= 100; i++){
  onetoHundredArray.push(i);
}

for (var i = 0; i < onetoHundredArray.length; i++){
  //console.log(onetoHundredArray[i]);
//sort multiple 3(FizzBuzz), 5(Buzz) and both(FizzBuzz)
   var message = '';
   if (i%3 === 0) message += "Fizz";
   if (i%5 === 0) message += "Buzz";
   console.log(message || i);
}
