## Array Methods

```javascript
// an array we will use as a demo
var roommates = ['Johnny', 'Sarah', 'Tyler', 'Hannah'];

```

1. `pop` - pop will remove the **last** element from your array and return the removed element. `roommates.pop()` will remove "Hannah" from the array and print that element. (least it does in the chrome console). Then it will change the length of the array from 4 values to 3 `roommates = ['Johnny', 'Sarah', 'Tyler']`.

2. `push` - this method will ADD one or more elements to the end of your array and return the new length. `roommates.push('Julia')` will add "Julia" to the end of the array and change the length from 4 to 5. `roommates = ['Johnny', 'Sarah', 'Tyler', 'Hannah', 'Julia']`.

3. `shift` - shift is very similar to pop, however, instead of removing the last value of the array it removes the **first** value. `roommates.shift` will remove "Johnny" and change roommates to `['Sarah', 'Tyler', 'Hannah']`.

4. `unshift` - like push, unshift will ADD one or more elements to the array, except it will add it to the **beginning** `roommates.unshift('Philip')` will add "Philip" to the beginning of the roommates array - `['Philip', 'Johnny', 'Sarah', 'Tyler', 'Hannah'];`
