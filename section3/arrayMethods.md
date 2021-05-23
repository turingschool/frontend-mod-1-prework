## Array Methods

Syntax for array methods:
`array.method();`

Example array:
`var friends = [ 'Beto', 'Emi', 'Ramona' ];`

### 1. Pop:
  The pop() method *removes* the **last** element from the array.

  - Example:
  ```javascript
  friends.pop();
  console.log(friends);
  // output: Beto, Emi
  ```


### 2. Push:
  The push() method *adds* one or more items to the **end** of the array.

  - Example:
  ```javascript
  friends.push('Randy', 'Jake');
  console.log(friends);
  // output: Beto, Emi, Ramona, Randy, Jake
  ```


### 3. Shift:
  The shift() method *removes* the **first** item from an array.

  - Example:
  ```javascript
  friends.shift();
  console.log(friends);
  // output: Emi, Ramona
  ```


### 4. Unshift:
  The unshift() method *adds* one or more items to the **beginning** of the array.

  - Example:
  ```javascript
  friends.unshift('Randy', 'Jake');
  console.log(friends);
  // output: Randy, Jake, Beto, Emi, Ramona
  ```
