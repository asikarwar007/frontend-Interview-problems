/**
 * Stack
 * 
 * Implements a stack data structure with common stack methods.
 */
class Stack {
    constructor() {
        this.items = [];
    }

    /**
     * Push an element onto the stack
     * @param {*} item - The item to be pushed
     */
    push(item) {
        this.items.push(item);
    }

    /**
     * Pop an element off the stack
     * @return {*} - The popped item
     */
    pop() {
        if (this.isEmpty()) {
            throw new Error('Stack is empty');
        }
        return this.items.pop();
    }

    /**
     * Peek at the top element of the stack
     * @return {*} - The top item of the stack
     */
    peek() {
        if (this.isEmpty()) {
            throw new Error('Stack is empty');
        }
        return this.items[this.items.length - 1];
    }

    /**
     * Check if the stack is empty
     * @return {boolean} - True if the stack is empty, false otherwise
     */
    isEmpty() {
        return this.items.length === 0;
    }
}

// Example usage
const stack = new Stack();
stack.push(1);
stack.push(2);
console.log(stack.pop()); // 2
console.log(stack.peek()); // 1
console.log(stack.isEmpty()); // false

/**
 * Explanation:
 * 
 * The `Stack` class provides the basic functionality of a stack data structure.
 * - `push` method adds an item to the top of the stack.
 * - `pop` method removes and returns the top item of the stack. It throws an error if the stack is empty.
 * - `peek` method returns the top item of the stack without removing it. It throws an error if the stack is empty.
 * - `isEmpty` method checks if the stack is empty.
 */