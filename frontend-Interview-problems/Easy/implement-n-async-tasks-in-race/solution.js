/**
 * Implement 'N' async tasks in Race
 * 
 * @param {Array<Function>} tasks - An array of functions that return promises
 * @return {Promise} - A promise that resolves or rejects as soon as one of the promises resolves or rejects
 */
function race(tasks) {
    return new Promise((resolve, reject) => {
        tasks.forEach(task => {
            task().then(resolve).catch(reject);
        });
    });
}

// Example usage
const task1 = () => new Promise((resolve) => setTimeout(() => resolve('Task 1'), 300));
const task2 = () => new Promise((resolve, reject) => setTimeout(() => reject('Task 2 Error'), 200));
const task3 = () => new Promise((resolve) => setTimeout(() => resolve('Task 3'), 100));

race([task1, task2, task3])
  .then(result => console.log(result)) // Output: 'Task 3'
  .catch(error => console.error(error)); // Output: 'Task 2 Error' (if rejection happens first)

/**
 * Explanation:
 * 
 * The `race` function takes an array of async tasks (functions that return promises).
 * It returns a new promise that resolves or rejects as soon as one of the tasks completes.
 * It does this by iterating over the tasks and attaching `then` and `catch` handlers to each one.
 * The first task to resolve or reject will settle the returned promise.
 */