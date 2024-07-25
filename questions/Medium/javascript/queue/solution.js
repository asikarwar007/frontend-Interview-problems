/**
 * Queue
 * 
 * Implements a queue data structure with common queue methods.
 */
class Queue {
    constructor() {
        this.items = [];
    }

    /**
     * Add an element to the end of the queue
     * @param {*} item - The item to be added
     */
    enqueue(item) {
        this.items.push(item);
    }

    /**
     * Remove and return the element from the front of the queue
     * @return {*} - The dequeued item
     */
    dequeue() {
        if (this.isEmpty()) {
            throw new Error('Queue is empty');
        }
        return this.items.shift();
    }

    /**
     * Peek at the front element of the queue
     * @return {*} - The front item of the queue
     */
    peek() {
        if (this.isEmpty()) {
            throw new Error('Queue is empty');
        }
        return this.items[0];
    }

    /**
     * Check if the queue is empty
     * @return {boolean} - True if the queue is empty, false otherwise
     */
    isEmpty() {
        return this.items.length === 0;
    }
}

// Example usage
const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
console.log(queue.dequeue()); // 1
console.log(queue.peek()); // 2
console.log(queue.isEmpty()); // false

/**
 * Explanation:
 * 
 * The `Queue` class provides the basic functionality of a queue data structure.
 * - `enqueue` method adds an item to the end of the queue.
 * - `dequeue` method removes and returns the front item of the queue. It throws an error if the queue is empty.
 * - `peek` method returns the front item of the queue without removing it. It throws an error if the queue is empty.
 * - `isEmpty` method checks if the queue is empty.
 */