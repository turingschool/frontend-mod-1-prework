for (var i = 1; i < 101; i++){

  if ( i % 3 === 0 && i % 5 === 0){
    console.log("fizzbuzz")
  }
  else if ( i % 3 === 0) {
    console.log("fizz")
  }

  else if ( i % 5 === 0) {
    console.log("buzz")
  }
  else {
    console.log(i)
  }
}
// You could use this for any set of numbers. You would just need to determine if the numbers chosen leave a remainder number, and adjust your formula for the correct output.
You would need to check the output and see if you had any double or triple read outs like buzz, fizz, fizzbuzz and then adjust your formula.  
