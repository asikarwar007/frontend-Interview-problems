/**
 * Counter
 * 
 * This script builds a simple counter that increments whenever a button is clicked.
 */

// Vanilla JS solution
document.addEventListener('DOMContentLoaded', () => {
    const button = document.createElement('button');
    button.textContent = 'Increment';
    document.body.appendChild(button);

    const counter = document.createElement('p');
    counter.textContent = 'Counter: 0';
    document.body.appendChild(counter);

    let count = 0;
    button.addEventListener('click', () => {
        count++;
        counter.textContent = `Counter: ${count}`;
    });
});

/**
 * Explanation:
 * 
 * The script waits for the DOM content to be loaded before executing.
 * It creates a button element and a paragraph element to display the counter.
 * An event listener is added to the button to increment the counter and update the paragraph text whenever the button is clicked.
 */