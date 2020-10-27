// Goals:
// write a program that will print out the poem "Ten Speckled Frogs"
// make the program print out the rhyme with 10 frogs, decrementing to 1 frog
// will need to also adjust case of frog(s), were/was, number/no more


// > {[3]--originalFrogs} speckled {[frogs]-frogSitting} sat on a log
// > eating some most delicious bugs.
// > One jumped in the pool where it's nice and cool,
// > then there {[were]-frogCase} {[2]-newFrogs} speckled {[frogs]-frogRemaining}.
// >
// > [2] speckled [frogs] sat on a log
// > eating some most delicious bugs.
// > One jumped in the pool where it's nice and cool,
// > then there [was] [1] speckled [frog].
// >
// > [1] speckled [frog] sat on a log
// > eating some most delicious bugs.
// > One jumped in the pool where it's nice and cool,
// > then there [were] [no more] speckled [frogs]!
//
// var frogPoemPlural = "[i] + speckled frogs sat on a log \n eating some most delicious bugs. \n One jumped in the pool where it's nice and cool, \n then there were [i-1] speckled frogs."
//   console.log(frogPoemPlural);
//
// var frogPoemSingular = "[i] speckled frog sat on a log \n eating some most delicious bugs. \n One jumped in the pool where it's nice and cool, \n then there were no more speckled frogs!"
//   console.log(frogPoemSingular);

for (var i = 10; i > 0; i--) {
  if (i >= 3) {
    console.log([i] + " speckled frogs sat on a log, \n eating some most delicious bugs. \n One jumped in the pool, where it's nice and cool, \n then there were " + [i-1] + " speckled frogs." );
  } else if (i === 2) {
    console.log([i] + " speckled frogs sat on a log, \n eating some most delicious bugs. \n One jumped in the pool, where it's nice and cool, \n then there was " + [i-1] + " speckled frog." );
  } else {
    console.log([i] + " speckled frogs sat on a log, \n eating some most delicious bugs. \n One jumped in the pool, where it's nice and cool, \n then there were no speckled frogs." );
  }
}
