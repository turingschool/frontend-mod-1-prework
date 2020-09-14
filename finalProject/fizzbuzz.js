//fizzbuzz for numbers 1-100

for(var num = 1; num <= 100; num++) //starting at 1, going to 100, 1 at a time

  if(num % 3 === 0 && num % 5 !== 0) { //if the remainder after dividing by 3 is 0, and by 5 is not 0
    console.log("fizz"); //say fizz
  } else if(num % 5 === 0 && num % 3 !== 0) { //if the remainder after dividing by 5 is 0, and by 3 is not 0
  console.log("buzz"); //say buzz
} else if(num % 3 === 0 && num % 5 === 0) { //if the remainder after dividing by 3 and by 5 is 0
  console.log("fizzbuzz"); //say fizzbuzz
} else { //otherwise
  console.log(num); //just say the number
}

//fizzbuzz for any numbers, as long as startNum < endNum
var startNum = 7;
var endNum = 16;

for(var num = startNum; num <= endNum; num++) //starting at startNum, going to endNum, 1 at a time

  if(num % 3 === 0 && num % 5 !== 0) { //if the remainder after dividing by 3 is 0, and by 5 is not 0
    console.log("fizz"); //say fizz
  } else if(num % 5 === 0 && num % 3 !== 0) { //if the remainder after dividing by 5 is 0, and by 3 is not 0
  console.log("buzz"); //say buzz
} else if(num % 3 === 0 && num % 5 === 0) { //if the remainder after dividing by 3 and by 5 is 0
  console.log("fizzbuzz"); //say fizzbuzz
} else { //otherwise
  console.log(num); //just say the number
}