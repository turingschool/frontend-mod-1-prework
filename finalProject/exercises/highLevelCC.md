## Caesar Cipher: High-level Thoughts

1. The "encode()" method would need to take the String argument it's given and
iterate over each of its elements. During each iteration (or loop), the
value (or letter) would then be shifted left across the alphabet. The
number of positions shifted would be determined by the 2nd argument given
during the "encode()" call.

2. This shift might need to be performed by a secondary method, called
"convertElement", that references a secondary alphabet String that contains
all of the characters in the alphabet in order. "convertElement" would then
use indexing to determine what character the original letter needs to convert to.

3. Once the cipher letter has been found, it can be pushed to a
new "cipher" String. The "cipher" String is then printed to the console once
the original String has been completed encoded.

**Note:** I will absolutely need to play around with the ideas above to verify
that they are accurate or plausible.
