/**
 * Implement Custom clearAllTimers
 */
function clearAllTimers() {
    const maxId = setTimeout(() => {}, 0);

    for (let i = 0; i <= maxId; i++) {
        clearTimeout(i);
        clearInterval(i);
    }
}

// Example usage
const timer1 = setTimeout(() => console.log('Timeout 1'), 1000);
const timer2 = setInterval(() => console.log('Interval 1'), 1000);
const timer3 = setTimeout(() => console.log('Timeout 2'), 2000);

clearAllTimers(); // This should clear timer1, timer2, and timer3

/**
 * Explanation:
 * 
 * The `clearAllTimers` function works by first determining the highest timer ID currently in use by calling `setTimeout` with an empty function and a delay of 0.
 * It then iterates from 0 to this maximum ID, calling `clearTimeout` and `clearInterval` for each ID to ensure all active timers are cleared.
 */