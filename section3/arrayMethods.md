#Array Methods#

##Pop##
- Example:
  - var examplePop = [0, 1, 2, 3]
  - console.log (examplePop.pop()); --> 3
  - console.log (examplePop); --> 0, 1, 2
- Definition: *removes* the last element (highest indexed) in the array and returns that element as the result. Because that element is now removed the array is one index shorter. Before examplePop.length => 4, now examplePop.length => 3
#Push#
- Example:
  - var examplePush = [A, B, C, D]
  - console.log (examplePush.push('E')); --> 5
  - console.log (examplePush); --> A, B, C, D, E
- Syntax Difference to Pop - the parenthesis are filled with what is being "pushed" to the arrays
- Definition: whatever is in the parenthesis following the push gets added to the last position (tacked onto) the array; the return is the new length of the array. Like Pop, Push changes the length of the array.
#Shift#
- Example:
  - var exampleShift = [0, 1, 2, 3]
  - console.log (exampleShift.Shift()); --> 0
  - console.log (exampleShift); --> 1, 2, 3
- Definition: *removes* the first element (lowest indexed) in the array and returns that element as the result. Because that element is now removed the array is one index shorter. Before exampleShift.length => 4, now exampleShift.length => 3
#Unshift#
-Example:
  - var exampleUnshift = [0, 1, 2, 3]
  - console.log (exampleUnshift.UnShift(-2, -1)); --> 6
  - console.log (exampleUnShift); --> -2, -1, 0, 1, 2, 3
- Definition: *removes* the first element (lowest indexed) in the array and returns that element as the result. Because that element is now removed the array is one index shorter. Before exampleShift.length => 4, now exampleShift.length => 3

Push and Unshift have items in the parenthesis because those items are being added to the array. Push adds to the end, Unshift adds to the beginning; Return for both is the new length

Pop and Shift do not have items in the parenthesis because they remove items from the array; Pop the last item, Shift the first; Return for both is the removed items
