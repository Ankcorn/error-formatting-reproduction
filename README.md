# error-formatting-reproduction

The following code
```javascript
const error = new Error("My Nice Error")

console.error({ errorString: error.toString(), error })

console.error(error)
console.error("Hello World", error)
```

Produces these logs when passed to the tail, the `error: {}` empty string in the first is confusing.

```json
[
  {
    "error": {},
    "errorString": "Error: My Nice Error",
    "level": "error",
    "timestamp": 1756734065178
  },
  {
    "message": [
      "Error: My Nice Error"
    ],
    "level": "error",
    "timestamp": 1756734065178
  },
  {
    "message": [
      "Hello World",
      "Error: My Nice Error"
    ],
    "level": "error",
    "timestamp": 1756734065178
  }
]
```