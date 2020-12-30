  var range = {
    start: 1,
    end: 100,
    select: function(start, end) {
      this.start = start;
      this.end = end;
    }
  };

// activate the line below to select range parameters
// range.select(3, 30);

  for (i = range.start; i <= range.end; i++) {
    if ((i % 3 == 0) && (i % 5 == 0)) {
      console.log("FizzBuzz");
    }
    else if (i % 3 == 0) {
      console.log("Fizz");
    }
    else if (i % 5 == 0) {
      console.log("Buzz");
    }
    else {
      console.log(i);
    }
  };
