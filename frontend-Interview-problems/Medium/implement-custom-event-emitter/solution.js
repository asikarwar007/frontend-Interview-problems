/**
 * Implement Custom Event Emitter
 */
class EventEmitter {
    constructor() {
        this.events = {};
    }

    /**
     * Register an event listener
     * 
     * @param {string} event - The event name
     * @param {Function} listener - The event listener
     */
    on(event, listener) {
        if (!this.events[event]) {
            this.events[event] = [];
        }
        this.events[event].push(listener);
    }

    /**
     * Emit an event
     * 
     * @param {string} event - The event name
     * @param {...*} args - The event arguments
     */
    emit(event, ...args) {
        if (this.events[event]) {
            this.events[event].forEach(listener => listener(...args));
        }
    }

    /**
     * Remove an event listener
     * 
     * @param {string} event - The event name
     * @param {Function} listener - The event listener
     */
    off(event, listener) {
        if (this.events[event]) {
            this.events[event] = this.events[event].filter(l => l !== listener);
        }
    }
}

// Example usage
const emitter = new EventEmitter();

function onFoo(data) {
  console.log('foo event:', data);
}

emitter.on('foo', onFoo);
emitter.emit('foo', { some: 'data' }); // Output: 'foo event: { some: "data" }'
emitter.off('foo', onFoo);
emitter.emit('foo', { some: 'data' }); // No output

/**
 * Explanation:
 * 
 * The `EventEmitter` class mimics the behavior of an event emitter.
 * It has methods to register event listeners (`on`), emit events (`emit`), and remove event listeners (`off`).
 * The `on` method adds listeners to an event.
 * The `emit` method calls all listeners for an event with the provided arguments.
 * The `off` method removes specific listeners from an event.
 */