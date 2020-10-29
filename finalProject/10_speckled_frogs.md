for (var total = 10; total >= 1; total--) {
  var unchanging = "sat on a log eating some most delicious bugs. One jumped in the pool where its nice and cool, then there"
  var speckled = "speckled frogs"
  var wereWas = "were"
  var totalM = total - 1
  var ending = "speckled frogs."

  if (total === 1) {
    speckled = "speckled frog"
    totalM = "no more"
    ending = "speckled frogs!"
  }
  if (total === 2) {
    ending = "speckled frog."
    wereWas = "was"
  }
  console.log(`${total} ${speckled} ${unchanging} ${wereWas} ${totalM} ${ending}`)
}
