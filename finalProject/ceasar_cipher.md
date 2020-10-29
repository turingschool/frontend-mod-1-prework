Notes on Ceasar Cipher
I believe the first thing you would need to construct a program to do this task would
be to determine your key or your shift variable. For example we'll use 17 as our key.
17 shift for A would be R
17 shift for B would be S
17 shift for C would be T
You would then determine the shift letter for each letter in the alphabet and set the
code variable.
Once you determine the variables, you would set a loop to go through the string and then create the decoded/deciphered letters. Giving you the coded output. You can then use your key
to determine what the encoding message would be, or write a program that creates and output with the code already deciphered.

for example key is 17
let ceaserSalad = (string){
let cipher = {
  A = "R"
  B = "S"
  C = "T"
  D = "U"
  E = "V"
  F = "W"
  G = "X"
  H = "Y"
  I = "Z"
  J = "A"
  K = "B"
  L = "C"
  M = "D"
  N = "E"
  O = "F"
  P = "G"
  Q = "H"
  R = "I"
  S = "J"
  T = "K"
  U = "L"
  V = "M"
  W = "N"
  X = "O"
  Y = "P"
  Z = "Q"
}

let decipher = "";
for (let i = 0 ; i < stringlength; i++){
  decipher += cipher[string[i]];
}

console.log(ceaserSalad("winteriscoming"));
console.log(ceaserSalad("thenorthremembers"));
