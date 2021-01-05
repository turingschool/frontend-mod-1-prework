for (let i = 1; i <= 25; i++) {
  var output = ""
  if (i % 2 == 0) output += "Fizz";
  if (i % 3 == 0) output += "Buzz";
  if (output === "") output += i;
  console.log(output);
}
