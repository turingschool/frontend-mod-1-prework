## High Level Ceasar Cipher

* Write an original function names 'encode' that takes two parameters, a sourceString which will be a string that contains the message one wants encoded and a cipherValue which shifts the cipher array however many units desired.
* This function will reference two array variables, 'sourceIndex' and 'cipher' which will each contain the alphabet in traditional order. However the cipher array will be modified in a later step to be responsive to the cipherValue parameter.
* Write a for statement that takes i = 0 as the origination statement and takes the cipherValue parameter as the index termination statement. The action or iteration of the for statement will be a combination of methods that first removes the first cipher array element and second takes the removed first element and adds it to the end of the cipher array. This should run the for statement however many times specified by the cipherValue variable and return the finalized form of the cipher array.
* Write the encode function in a way that converts the sourceString to integer form that represents the index of each letter referencing the sourceIndex array. Taking this integer form, write a return statement that returns converts the index integer form to a string _referencing the finalized cipher array_.
* It may be useful to write it in a way that the integer form is first declared as a variable before running it through the step above.
* The function should end by printing to the console the encoded version of sourceString.
