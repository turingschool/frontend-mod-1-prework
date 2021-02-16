## Array Methods

#### Pop

**Definition:** a pop removes the last item (or element) from an array and returns that item.

*Example*
`var fruits = ['apple','banana','orange'];
  fruits.pop();
  //returns 'orange'
  fruits;
  // returns (2)['apple','banana']`

#### Push

**Definition:** a push adds one or more items to the end of an array and then returns the new length of the array.

*Example*
`fruits = ['apple'];
  fruits.push('orange');
  //returns 2
  fruits;
  //returns (2)['apple','orange']`

#### Shift

**Definition:** a shift is a method that removes the first item from an array and returns that item.

*Example*
`fruits = ['banana', 'orange', 'apple'];
  fruits.shift();
  // returns 'banana'
  fruits;
  //returns (2)['orange','apple']`

#### Unshift

**Definition:** unshift adds an item to the beginning of the array and returns the new array length.

*Example*
`fruits = ['orange','apple'];
  fruits.unshift('banana')
  // returns 3
  fruits;
  //returns (3)['banana','orange','apple']`
