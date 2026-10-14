# Lab 04 — Task 10: JavaScript Event Loop

## Prediction

The output will appear in this order:

1. `1 start`
2. `4 end`
3. `3 promise`
4. `2 timeout`

## Code

```javascript
console.log("1 start");
setTimeout(() => console.log("2 timeout"), 0);
Promise.resolve().then(() => console.log("3 promise"));
console.log("4 end");
```

## Explanation

JavaScript executes synchronous statements first, so `1 start` and `4 end` appear first. The Promise callback runs next as a microtask, followed by the `setTimeout` callback as a timer task.

Therefore, the output order is `1 start`, `4 end`, `3 promise`, and `2 timeout`.

## Conclusion

This demonstrates that synchronous code runs first, Promise microtasks run next, and timer callbacks run afterward.
