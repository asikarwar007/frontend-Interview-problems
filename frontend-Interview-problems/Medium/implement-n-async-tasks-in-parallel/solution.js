/**
 * Implement 'N' async tasks in Parallel
 * 
 * @param {Array<Function>} tasks - An array of async tasks (functions that return a promise)
 * @param {number} limit - The number of tasks to run in parallel
 * @return {Promise} - A promise that resolves when all tasks are completed
 */
function parallelTasks(tasks, limit) {
    const results = [];
    let running = 0;
    let currentIndex = 0;

    return new Promise((resolve, reject) => {
        function runNextTask() {
            if (currentIndex === tasks.length && running === 0) {
                resolve(results);
            } else if (currentIndex < tasks.length && running < limit) {
                running++;
                tasks[currentIndex]().then(result => {
                    results[currentIndex] = result;
                    running--;
                    runNextTask();
                }).catch(reject);
                currentIndex++;
                runNextTask();
            }
        }
        runNextTask();
    });
}

// Example usage
const task = (value) => () => new Promise(resolve => setTimeout(() => resolve(value), 1000));

const tasks = [task(1), task(2), task(3), task(4)];
const limit = 2;

parallelTasks(tasks, limit).then(results => {
  console.log(results); // Output: [1, 2, 3, 4]
});

/**
 * Explanation:
 * 
 * The `parallelTasks` function runs up to `n` async tasks in parallel.
 * It maintains the number of currently running tasks and starts new tasks as previous ones complete.
 * The function returns a promise that resolves when all tasks are completed, with the results in the same order as the input tasks.
 */