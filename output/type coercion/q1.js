console.log(false == [])   // true
console.log(false == ![])  // true

// | Expression     | Reason                           |
// | -------------- | -------------------------------- |
// | `false == []`  | `[] -> "" -> 0` and `false -> 0` |
// | `false == ![]` | `![]` becomes `false`            |
