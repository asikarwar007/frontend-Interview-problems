/**
 * Implement Custom Browser History
 */
class CustomHistory {
    constructor() {
        this.historyStack = [];
        this.currentIndex = -1;
    }

    /**
     * Push a new entry onto the history stack
     * 
     * @param {string} path - The new path
     */
    push(path) {
        this.historyStack = this.historyStack.slice(0, this.currentIndex + 1);
        this.historyStack.push(path);
        this.currentIndex++;
    }

    /**
     * Navigate back in the history stack
     */
    back() {
        if (this.currentIndex > 0) {
            this.currentIndex--;
        }
    }

    /**
     * Navigate forward in the history stack
     */
    forward() {
        if (this.currentIndex < this.historyStack.length - 1) {
            this.currentIndex++;
        }
    }

    /**
     * Get the current entry in the history stack
     * 
     * @return {string} - The current path
     */
    getCurrent() {
        return this.historyStack[this.currentIndex] || null;
    }
}

// Example usage
const history = new CustomHistory();

history.push('/page1');
history.push('/page2');
console.log(history.getCurrent()); // Output: '/page2'
history.back();
console.log(history.getCurrent()); // Output: '/page1'
history.forward();
console.log(history.getCurrent()); // Output: '/page2'

/**
 * Explanation:
 * 
 * The `CustomHistory` class mimics the behavior of browser history.
 * It maintains a history stack and a current index to track the current position.
 * The `push` method adds a new entry to the stack and updates the current index.
 * The `back` and `forward` methods navigate through the history stack by adjusting the current index.
 * The `getCurrent` method returns the current entry in the history stack.
 */