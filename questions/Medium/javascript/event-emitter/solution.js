/**
 * Event Emitter
 * 
 * Implements an event emitter class that can subscribe to and emit events.
 */
class EventEmitter {
    constructor() {
        this.events = {};
    }

    /**
     * Subscribe to an event
     * @param {string} event - The event name
     * @param {function} listener - The event listener
     */
    on(event, listener) {
        if (!this.events[event]) {
            this.events[event] = [];
        }
        this.events[event].push(listener);
    }

    /**
     * Emit an event
     * @param {string} event - The event name
     */
    emit(event, ...args) {
        if (this.events[event]) {
            this.events[event].forEach(listener => listener(...args));
        }
    }

    /**
     * Remove an event listener
     * @param {string} event - The event name
     * @param {function} listener - The event listener
     */
    off(event, listener) {
        if (this.events[event]) {
            this.events[event] = this.events[event].filter(l => l !== listener);
        }
    }
}

// Example usage
const emitter = new EventEmitter();
emitter.on('event', () => console.log('Event triggered'));
emitter.emit('event'); // 'Event triggered'

/**
 * Explanation:
 * 
 * The `EventEmitter` class provides a way to subscribe to and emit events.
 * - The `on` method adds an event listener for a specific event.
 * - The `emit` method triggers an event and calls all attached listeners.
 * - The `off` method removes a specific listener for an event.
 * This class supports multiple listeners for the same event and multiple events.
 */