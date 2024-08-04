# Event Emitter

## Description
Implement a class that can subscribe to and emit events that trigger attached callback functions.

## Example
```javascript
const emitter = new EventEmitter();
emitter.on('event', () => console.log('Event triggered'));
emitter.emit('event'); // 'Event triggered'
```

## Constraints
The class should support subscribing to multiple events and multiple listeners for the same event.

## Notes
This question tests your understanding of event-driven programming and class implementation.