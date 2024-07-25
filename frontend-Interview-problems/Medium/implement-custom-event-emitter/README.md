# Implement Custom Event Emitter

## Problem Statement
Write a class `EventEmitter` that mimics the behavior of an event emitter. The class should have methods `on`, `emit`, and `off` to register event listeners, emit events, and remove event listeners, respectively.

## Example
```javascript
const emitter = new EventEmitter();

function onFoo(data) {
  console.log('foo event:', data);
}

emitter.on('foo', onFoo);
emitter.emit('foo', { some: 'data' }); // Output: 'foo event: { some: "data" }'
emitter.off('foo', onFoo);
emitter.emit('foo', { some: 'data' }); // No output
```

## Constraints
  - Do not use any third-party libraries.

## Notes
The `EventEmitter` class should handle multiple event listeners for the same event and should be able to remove specific listeners.